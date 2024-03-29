/**
 * Token Injection Client side
 *
 * @author Grace.Wang
 */
import cookies from 'js-cookie';
import * as TC from './constant';
import { rand, deepMerge, queryString, isSet } from './lib';
import { api, httpRequest } from './helpers/request';
import { setTokens, removeTokens } from './helpers/token';
import errorMsg from './helpers/error-message';
import webStorage from './helpers/storage';
import privateMethods from './privateMethods';
import RateLimitError from './errors/rate-limit-error';

// Axios 支援 finally 方法
require('promise.prototype.finally').shim();

// 初始預設值
const DEFAULTS = {
  // 是否自動初始化 & 刷新同步
  autopilot: true,
  // 單一登入網址
  sso_url: '',
  // 自定義 Cookie 前綴字串
  cookie_prefix: '',
  // 重新定向網址
  redirect_url: '',
  // 是否配置 X-Requested-With 抬頭
  xhr_with: true,
  // 非登入狀態的 Callback
  onLogout: null,
  // 401 未授權的 Callback
  unauthorized: null,
  // 每分鐘同步 token 最大次數限制
  maxSyncTimesPerMinute: 3,
  // 每分鐘刷新 token 最大次數限制
  maxRefreshTimesPerMinute: 3,
};

class TokenInjection {
  /**
   * 建構子
   *
   * @param {object} options - 參數設定
   */
  constructor(options = {}) {
    // 選項屬性
    this.options = deepMerge(DEFAULTS, options);

    // Token Keys
    this.tokenKeys = [
      TC.ACCESS_TOKEN_NAME,
      TC.TOKEN_EXPIRED_NAME,
      TC.TOKEN_TYPE,
      TC.TOKEN_SCOPE,
      TC.REFRESH_TOKEN_NAME,
      TC.TOKEN_CHECK_SUM,
      TC.TOKEN_CREATE_TIME_NAME,
    ];

    // Schedule cache
    this.intervalSync = null;
    this.intervalRefresh = null;

    // 自動同步/刷新 Token 請求錯誤次數計數
    this.syncTimes = 0;
    this.refreshTimes = 0;

    // 初始化同步 token 計數、刷新 token 計數
    this.syncCount = 0;
    this.refreshCount = 0;

    // 定期每 60 秒 (1 分鐘) 重置計數
    setInterval(() => {
      this.syncCount = 0;
      this.refreshCount = 0;
    }, 60 * 1000);

    // 暫存執行中的請求資訊
    this.axiosPending = new Map();

    // 實例化 axios
    this.rest = httpRequest({
      baseURL: this.options.sso_url,
      // 判斷是否為 Ajax 非同步請求，跨域時須自行配置此 header access
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    // Axios 攔截器
    privateMethods.interceptors(this);

    // 自動初始化
    if (this.options.autopilot) {
      this.init();
    }
  }

  /**
   * 初始化 TokenInjection 實例
   *
   * @returns {Promise}
   */
  async init() {
    const instance = this;

    return instance
      .sync()
      .then(() => {
        // 載入後執行 定期同步 Token 內容
        instance.autoSync();

        // 載入後執行 定期刷新 Token
        instance.autoRefresh();

        // 載入後執行 自動登出倒數
        privateMethods.autoLogout(instance);
      })
      .catch((error) => {
        // 捕獲錯誤為登出狀態，轉導回 IAM 登出頁
        if (error.isLogout) instance.logoutIAM();

        // rate limit error 處理
        if (error instanceof RateLimitError) {
          throw error;
        }

        throw new Error(error);
      });
  }

  /**
   * 同步 Token 內容 - 執行一次
   *
   * - 向 oAuth Server 同步 Token 資訊
   * - 同步錯誤時，檢查是否為登入狀態，否時刪除 Token
   *
   * @returns {object}
   */
  sync() {
    const instance = this;
    const { rest, tokenKeys, options } = this;

    // 同步 Token 計數 + 1
    instance.syncCount += 1;

    // 檢查是否超過每分鐘同步 token 最大次數限制
    if (instance.syncCount > options.maxSyncTimesPerMinute) {
      return Promise.reject(new RateLimitError('sync'));
    }

    return new Promise((resolve, reject) => {
      // 抓取資料
      rest
        .get(`${options.sso_url}${api.sync}`)
        .then((res) => {
          let tokenInfo = res.data || {}; //eslint-disable-line

          // 執行完成，暫存請求響應狀態
          instance.axiosPending.set('sync', res.request.readyState);

          // 請求次數計數歸零
          instance.syncTimes = 0;

          // 預設清除 Token Keys
          removeTokens(tokenKeys);

          // 寫入 Token Keys 異常，清空 localStorage 後，執行登出
          try {
            setTokens(tokenKeys, tokenInfo);
          } catch (error) {
            webStorage.clear();
            instance.logoutIAM();
          }

          resolve(res);
        })
        .catch((error) => {
          // 請求次數計數
          instance.syncTimes += 1;

          // 請求次數超過最大限制錯誤訊息
          if (instance.syncTimes >= TC.MAX_REQUEST_TIMES) {
            console.error(`[Sync]: ${errorMsg.maxRequest}`);
          }

          reject(error);
        });
    });
  }

  /**
   * 刷新 Token - 執行一次
   *
   * - 向 oAuth Server 執行 Refresh Token
   * - 執行條件
   * - 必需有 refresh_token 金鑰: localStorage.token_refresh_token
   * - 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新 token
   *
   * @throws 沒有 Refresh Token 時丟出例外
   * @returns {Promise}
   */
  refresh() {
    const instance = this;
    const { rest, options } = this;

    // Refresh Token 值
    let refreshToken = webStorage.get(TC.REFRESH_TOKEN_NAME); //eslint-disable-line

    // 金鑰不存在時丟出例外
    if (!refreshToken) {
      throw privateMethods.exception(instance, 'Need Refresh Token !', 401);
    }

    // 刷新 Token 計數 + 1
    instance.refreshCount += 1;

    // 檢查是否超過每分鐘刷新 token 最大次數限制
    if (instance.refreshCount > options.maxRefreshTimesPerMinute) {
      return Promise.reject(new RateLimitError('refresh'));
    }

    // 執行刷新金鑰
    return new Promise((resolve, reject) => {
      rest
        .post(
          `${options.sso_url}${api.refresh}?v=${rand(11111, 99999)}`,
          queryString({ refresh_token: refreshToken }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then((res) => {
          // 請求次數計數歸零
          instance.refreshTimes = 0;

          // 執行完成，暫存請求響應狀態
          instance.axiosPending.set('refresh', res.request.readyState);

          resolve(res);
        })
        .catch((error) => {
          // 請求次數計數
          instance.refreshTimes += 1;

          // 請求次數超過最大限制錯誤訊息
          if (instance.refreshTimes >= TC.MAX_REQUEST_TIMES) {
            console.error(`[Refresh]: ${errorMsg.maxRequest}`);
          }

          reject(error);
        });
    });
  }

  /**
   * 定期執行同步 Token 內容
   *
   * - 向 oAuth Server 同步Token資訊
   * - 執行條件
   * - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
   * - axios未執行過或已執行完成
   * - 多視窗時有可能同時執行，待觀察
   * - 執行錯誤時關閉自動同步30秒後重啟
   *
   * @param {number} interval - 多少個間隔，每個間隔為1分鐘
   */
  autoSync(interval = 0) {
    const instance = this;
    const { options } = this;
    const tkCheckSumCookieName = `${options.cookie_prefix}tkchecksum`;
    // 檢查 LocalStorage 金鑰檢核碼與 Cookie 金鑰檢核碼是否一致
    const validateChecksum = () => {
      const checksumFromCookie = cookies.get(tkCheckSumCookieName);
      const checksumFromLocalStorage = webStorage.get('token_checksum');

      // 若 checksum 未設定則回傳 false 表示不一致 (避免皆為 null 或 undefined 時誤判)
      if (!isSet(checksumFromCookie, checksumFromLocalStorage)) {
        return false;
      }

      return checksumFromCookie === checksumFromLocalStorage;
    };

    // 若已定期執行則中斷處理
    if (instance.intervalSync) {
      return;
    }

    // 定期執行 (Cookie 中的金鑰檢核碼必須存在)
    instance.intervalSync = setInterval(async () => {
      // 若 tkchecksum 與 token_checksum 一致 或 正在處理同步中，則略過本次處理
      if (validateChecksum() || instance.isProcessing('sync')) {
        return;
      }

      await instance.sync().catch((error) => {
        // 取得 回覆資源
        const { response } = error;
        // 取得 錯誤狀態碼
        let errorCode = response ? response.status : 0; //eslint-disable-line

        // 排除 401 Code：Token 失效發還狀態
        if (errorCode === 401) {
          return;
        }

        // rate limit error 處理
        if (error instanceof RateLimitError) {
          console.error(error);
        }

        // 執行錯誤時關閉自動同步 等待30秒鐘後重啟
        instance.autoSyncStop();
        // 重啟前先占用，避免 30 內重啟期間內再次執行 autoSync 時誤判，導致重複建立定期同步 Token
        instance.intervalSync = -1;
        setTimeout(() => {
          // 檢查非占用狀態則不處理 (排除已重新執行 autoSync 或執行後又再停止的情況)
          if (instance.intervalSync !== -1) {
            return;
          }

          // 清除占用
          instance.intervalSync = null;
          // 重啟定期執行同步 Token
          instance.autoSync();
        }, TC.TOKEN_AUTO_SYNC_RESTART);
      });
    }, 1000 * 60 * Math.abs(interval) || TC.TOKEN_AUTO_SYNC_INTERVAL);
  }

  /**
   * 停止 自動同步 Token 內容
   */
  autoSyncStop() {
    const instance = this;

    if (instance.intervalSync) {
      // 停止定期執行
      clearInterval(instance.intervalSync);
      instance.intervalSync = null;
      instance.axiosPending.delete('sync');
    }
  }

  /**
   * 定期刷新 Token
   *
   * - 向 oAuth Server 同步Token資訊
   * - 執行條件
   * - 即將過期
   * - axios未執行過或已執行完成
   * - 多視窗時有可能同時執行，待觀察
   * - 執行錯誤時關閉自動同步3秒後重啟
   *
   * @param {Number} interval - 多少秒
   */
  autoRefresh(interval = 0) {
    const instance = this;

    // 執行錯誤時關閉自動同步30秒後重啟
    const restartAutoRefresh = () => {
      instance.autoRefreshStop();
      // 重啟前先占用，避免 30 內重啟期間內再次執行 autoRefresh 時誤判，導致重複建立定期刷新 Token
      instance.intervalRefresh = -1;
      setTimeout(() => {
        // 檢查非占用狀態則不處理 (排除已重新執行 autoRefresh 或執行後又再停止的情況)
        if (instance.intervalSync !== -1) {
          return;
        }

        // 清除占用
        instance.intervalRefresh = null;
        // 重啟定期刷新 Token
        instance.autoRefresh();
      }, 30000);
    };

    // 已定期執行則中斷處理
    if (instance.intervalRefresh) {
      return;
    }

    instance.intervalRefresh = setInterval(() => {
      try {
        // 若 refresh request 正在處理，則略過本次處理
        if (instance.isProcessing('refresh')) {
          return;
        }

        // 現在時間
        const nowTime = parseInt(Date.now() / 1000, 10);

        // Token建立時間
        const createKey = webStorage.get(TC.TOKEN_CREATE_TIME_NAME);
        const createTime = parseInt(createKey, 10);

        // Token過期時間
        const expiredKey = webStorage.get(TC.TOKEN_EXPIRED_NAME);
        const expireTime = parseInt(expiredKey, 10);

        // 過期時間 - TokenRefreshBefore
        const refreshTime = createTime + expireTime - TC.TOKEN_REFRESH_BEFORE;

        // 當 現在時間 超過 過期時間 - TokenRefreshBefore 時觸發更新 Token
        if (nowTime >= refreshTime) {
          instance.refresh().catch((error) => {
            // rate limit error 處理
            if (error instanceof RateLimitError) {
              console.error(error);
            }
            // 執行錯誤時關閉自動同步30秒後重啟
            restartAutoRefresh();
          });
        }
      } catch (e) {
        // 例外訊息
        console.error(`[${e.code}]${e.message}`);
        restartAutoRefresh();
      }
    }, interval * 1000 || TC.TOKEN_AUTO_REFRESH_INTERVAL * 1000);
  }

  /**
   * 停止 自動刷新 Token
   */
  autoRefreshStop() {
    const instance = this;

    if (instance.intervalRefresh) {
      // 停止定期執行
      clearInterval(instance.intervalRefresh);
      instance.intervalRefresh = null;
      instance.axiosPending.delete('refresh');
    }
  }

  /**
   * 驗證Token
   *
   * @param {string} token - 本地端要被驗證的 Token
   * @returns {Promise}
   */
  validate(token) {
    const { rest, options } = this;
    let validateToken = token || ''; //eslint-disable-line

    return new Promise((resolve, reject) => {
      rest
        .get(`${options.sso_url}${api.validate}?v=${rand(11111, 99999)}`, {
          headers: {
            Authorization: `Bearer ${validateToken}`,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * 取得 LocalStorage Token
   *
   * @returns {string} Access Token
   */
  getToken() {
    return webStorage.get(TC.ACCESS_TOKEN_NAME);
  }

  /**
   * 取得當前語系
   *
   * @returns {string} 回傳語系代碼
   */
  getLang() {
    const { options } = this;
    return cookies.get(`${options.cookie_prefix}lang`) || 'en';
  }

  /**
   * 取得可用子系統清單
   *
   * @returns {Array} 回傳系統清單
   */
  getSubSystem() {
    const subList = cookies.get('login')?.split('.') ?? [];
    const subSystemSort = ['hrm', 'bpm', 'crm', 'sales', 'bi'];

    return subSystemSort.filter((subSystem) => subList.includes(subSystem));
  }

  /**
   * 開啟登入頁面
   *
   * @param {string} target - _self | _blank
   */
  loginIAM(target = '') {
    const { options } = this;
    const ssoUrl = `${options.sso_url}/login?redirect_uri=${options.redirect_url}`;

    window.open(ssoUrl, target || '_self');
  }

  /**
   * 登出
   */
  logoutIAM() {
    const instance = this;
    const { options } = this;
    const ssoUrl = `${options.sso_url}/logout`;

    // 重置初始建構屬性 & 清除 Token's Info.
    privateMethods.reset(instance).then(() => {
      // 轉導回 SSO 登出頁
      window.location.href = ssoUrl;
    });
  }

  /**
   * 是否為登入狀態
   *
   * @returns {Boolean}
   */
  isLogin() {
    const { options } = this;
    const loginKey = `${options.cookie_prefix}login`;
    const loginCookie = cookies.get(loginKey);

    return Boolean(loginCookie);
  }

  /**
   * 檢查目標 requestName 的 readyState 狀態是否正在處理中
   *
   * @param {string} requestName 'sync', 'refresh'
   * @returns {boolean}
   */
  isProcessing(requestName) {
    const requestReadyState = this.axiosPending.get(requestName);

    return isSet(requestReadyState) && requestReadyState !== 4;
  }

  /**
   * axios 全域設定方法
   *
   * @param {object} config - axios options
   * @returns {TokenInjection}
   */
  axiosCreate(config = {}) {
    const instance = this;

    instance.options.sso_url = config.baseURL || '';
    instance.rest = httpRequest(config);

    return instance;
  }
}

export default TokenInjection;
