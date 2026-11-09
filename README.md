# SSO-自有系統前端 SSO 封裝(SDK) Ver 2.0

# 主要

```text
dist/
├── cross-token-access.cjs.js (CommonJS)
├── cross-token-access.cjs.min.js (CommonJS, compressed)
├── cross-token-access.umd.js (UMD)
└── cross-token-access.umd.min.js (UMD, compressed)
```

# 依賴 & 注意事項

依賴：

- **axios**
- **lodash**
- **js-cookie**
- **promise.prototype.finally**

注意事項：

- 依賴套件已打包封裝，無需再外部引用
- API 採用 Axios 技術
- Axios 支援 finally，引用 promise.prototype.finally 方法
- Axios 攔截器 (interceptor) 有加入請求重複發送機制

# 跨域信任域名

- `nueip.com`
- `nueip.site`

# 使用說明

## 安裝

Script tag

```html
<script src="your-path/cross-token-access.umd.min.js"></script>
```

npm

```bash
npm install @nueip/cross-token-access
```

## 用法

```js
// 實體化
var tokenInjection = new TokenInjection(options);
```

- **options**
  - Type: `Object`
  - 參考 [options](#options)

## 範例

請見[範例](./examples/index.html)

# Options

### autopilot

- Type: `Boolean`
- Default: `true`
- note: 是否自動初始化 & 刷新同步

### sso_url

- Type: `String`
- Default: `empty string`
- note: SSO 伺服器 URL

### cookie_prefix

- Type: `String`
- Default: `empty string`
- note: Cookie 自定義前綴字串

### redirect_url

- Type: `String`
- Default: `empty string`
- note: 重新定向網址

### xhr_with

- Type: `Boolean`
- Default: `false`
- note: 是否配置 X-Requested-With 抬頭

### onLogout

- Type: `Function`
- Default: `null`
- note: 非登入狀態的回調函式

### unauthorized

- Type: `Function`
- Default: `null`
- note: 401 未授權的 Callback

### maxSyncTimesPerMinute

- Type: `number`
- Default: 3
- note: 每分鐘同步 token 最大次數限制

### maxRefreshTimesPerMinute

- Type: `number`
- Default: 3
- note: 每分鐘刷新 token 最大次數限制

# Methods

## 何時視為登出

- 只有伺服器表示憑證無效時才刪除 Token、停止定期器並呼叫 `onLogout`：任何請求回 401，或 `refresh()` 回 400（refresh token 無效）
- 限流（429）、拒絕（403）、伺服器錯誤（5xx）、逾時、網路中斷，以及 refresh 以外的請求回 400，都保留 Token 與定期器

## init()

- 初始化執行：同步一次 Token，成功後啟動
  - 自動同步/刷新 Token
  - 自動登出倒數
- 同步回 401：轉導 IAM 登出頁並 reject
- 超過每分鐘同步次數上限：reject `RateLimitError`
- 其他錯誤：沿用現有 Token 照常啟動上述排程並 resolve，由定期同步重新取得

## sync()

- return

  - Promise 方法

- 執行一次，向 oAuth Server 同步 Token 資訊；失敗時 reject，是否刪除 Token 依「何時視為登出」

## autoSync(interval)

- interval
  - Type: `Number`
  - Note: 多少個間隔，每個間為 1000 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - Cookie 中 tkchecksum 是否與 LocalStorage 中的 token_checksum 不一樣
  - Axios 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 回 401 時停止；其他錯誤（含超過每分鐘同步次數上限）關閉自動同步 1 分鐘後重啟

## autoSyncStop()

- 停止自動同步 Token 內容

## refresh()

- return
  - Promise 方法
- throw
  - 沒有 Refresh Token 時丟出
- 執行一次，向 oAuth Server 執行 Refresh Token
- 執行條件
  - 必需有 refresh_token 金鑰：localStorage.token_refresh_token
  - 當現在時間超過到期時間 - TokenRefreshBefore 時觸發更新 token

## autoRefresh(interval)

- interval
  - Type: `Number`
  - Note: 多少個間隔，每個間為 1000 毫秒
- 定期執行，向 oAuth Server 同步 Token 資訊
- 執行條件
  - 即將過期
  - Axios 未執行過或已執行完成
- 多視窗時有可能同時執行，待觀察
- 執行錯誤（含超過每分鐘刷新次數上限）時關閉自動刷新 30 秒後重啟

## autoRefreshStop

- 停止自動刷新 Token

## getToken()

- return
  - Type: `String`
  - Local Storage 中的 Token
- 取得 Local Storage Token

## getLang()

- return
  - Type: `String`
  - Cookie 中的語系代號
- 取得當前語系

## validate(token)

驗證 Token

- token
  - Type: `String`
  - 本地端要被驗證的 Token
- return
  - Promise 方法

## loginIAM()

- 開啟 IAM 登入頁面，另開新視窗
- 轉導自動帶入GET參數 redirect_uri={指定重新定向網址}

## logoutIAM()

- 開啟 IAM 登出頁面

## isLogin()

- return
  - Boolean
- 判斷是否為登入狀態

## axiosCreate()

- config
  - Type: `Object`
  - axios 請求參數
  - 只支援 baseURL, withCredentials, timeout, headers
- return
  - Boolean
- axios 全域設定輸入接口

# 瀏覽器支援

- ### Chrome (latest)

- ### Firefox (latest)

- ### Safari (latest)

- ### Edge (latest)

- ### ~~Internet Explorer 11~~
