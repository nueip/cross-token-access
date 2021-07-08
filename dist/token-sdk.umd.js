(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.CrossTokenClient = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var client = {exports: {}};

  (function (module, exports) {
  (function(root) {
    /**
     * Constructs a new cross storage client given the url to a hub. By default,
     * an iframe is created within the document body that points to the url. It
     * also accepts an options object, which may include a timeout, frameId, and
     * promise. The timeout, in milliseconds, is applied to each request and
     * defaults to 5000ms. The options object may also include a frameId,
     * identifying an existing frame on which to install its listeners. If the
     * promise key is supplied the constructor for a Promise, that Promise library
     * will be used instead of the default window.Promise.
     *
     * @example
     * var storage = new CrossStorageClient('https://store.example.com/hub.html');
     *
     * @example
     * var storage = new CrossStorageClient('https://store.example.com/hub.html', {
     *   timeout: 5000,
     *   frameId: 'storageFrame'
     * });
     *
     * @constructor
     *
     * @param {string} url    The url to a cross storage hub
     * @param {object} [opts] An optional object containing additional options,
     *                        including timeout, frameId, and promise
     *
     * @property {string}   _id        A UUID v4 id
     * @property {function} _promise   The Promise object to use
     * @property {string}   _frameId   The id of the iFrame pointing to the hub url
     * @property {string}   _origin    The hub's origin
     * @property {object}   _requests  Mapping of request ids to callbacks
     * @property {bool}     _connected Whether or not it has connected
     * @property {bool}     _closed    Whether or not the client has closed
     * @property {int}      _count     Number of requests sent
     * @property {function} _listener  The listener added to the window
     * @property {Window}   _hub       The hub window
     */
    function CrossStorageClient(url, opts) {
      opts = opts || {};

      this._id        = CrossStorageClient._generateUUID();
      this._promise   = opts.promise || Promise;
      this._frameId   = opts.frameId || 'CrossStorageClient-' + this._id;
      this._origin    = CrossStorageClient._getOrigin(url);
      this._requests  = {};
      this._connected = false;
      this._closed    = false;
      this._count     = 0;
      this._timeout   = opts.timeout || 5000;
      this._listener  = null;

      this._installListener();

      var frame;
      if (opts.frameId) {
        frame = document.getElementById(opts.frameId);
      }

      // If using a passed iframe, poll the hub for a ready message
      if (frame) {
        this._poll();
      }

      // Create the frame if not found or specified
      frame = frame || this._createFrame(url);
      this._hub = frame.contentWindow;
    }

    /**
     * The styles to be applied to the generated iFrame. Defines a set of properties
     * that hide the element by positioning it outside of the visible area, and
     * by modifying its display.
     *
     * @member {Object}
     */
    CrossStorageClient.frameStyle = {
      display:  'none',
      position: 'absolute',
      top:      '-999px',
      left:     '-999px'
    };

    /**
     * Returns the origin of an url, with cross browser support. Accommodates
     * the lack of location.origin in IE, as well as the discrepancies in the
     * inclusion of the port when using the default port for a protocol, e.g.
     * 443 over https. Defaults to the origin of window.location if passed a
     * relative path.
     *
     * @param   {string} url The url to a cross storage hub
     * @returns {string} The origin of the url
     */
    CrossStorageClient._getOrigin = function(url) {
      var uri, protocol, origin;

      uri = document.createElement('a');
      uri.href = url;

      if (!uri.host) {
        uri = window.location;
      }

      if (!uri.protocol || uri.protocol === ':') {
        protocol = window.location.protocol;
      } else {
        protocol = uri.protocol;
      }

      origin = protocol + '//' + uri.host;
      origin = origin.replace(/:80$|:443$/, '');

      return origin;
    };

    /**
     * UUID v4 generation, taken from: http://stackoverflow.com/questions/
     * 105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
     *
     * @returns {string} A UUID v4 string
     */
    CrossStorageClient._generateUUID = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);

        return v.toString(16);
      });
    };

    /**
     * Returns a promise that is fulfilled when a connection has been established
     * with the cross storage hub. Its use is required to avoid sending any
     * requests prior to initialization being complete.
     *
     * @returns {Promise} A promise that is resolved on connect
     */
    CrossStorageClient.prototype.onConnect = function() {
      var client = this;

      if (this._connected) {
        return this._promise.resolve();
      } else if (this._closed) {
        return this._promise.reject(new Error('CrossStorageClient has closed'));
      }

      // Queue connect requests for client re-use
      if (!this._requests.connect) {
        this._requests.connect = [];
      }

      return new this._promise(function(resolve, reject) {
        var timeout = setTimeout(function() {
          reject(new Error('CrossStorageClient could not connect'));
        }, client._timeout);

        client._requests.connect.push(function(err) {
          clearTimeout(timeout);
          if (err) return reject(err);

          resolve();
        });
      });
    };

    /**
     * Sets a key to the specified value. Returns a promise that is fulfilled on
     * success, or rejected if any errors setting the key occurred, or the request
     * timed out.
     *
     * @param   {string}  key   The key to set
     * @param   {*}       value The value to assign
     * @returns {Promise} A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype.set = function(key, value) {
      return this._request('set', {
        key:   key,
        value: value
      });
    };

    /**
     * Accepts one or more keys for which to retrieve their values. Returns a
     * promise that is settled on hub response or timeout. On success, it is
     * fulfilled with the value of the key if only passed a single argument.
     * Otherwise it's resolved with an array of values. On failure, it is rejected
     * with the corresponding error message.
     *
     * @param   {...string} key The key to retrieve
     * @returns {Promise}   A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype.get = function(key) {
      var args = Array.prototype.slice.call(arguments);

      return this._request('get', {keys: args});
    };

    /**
     * Accepts one or more keys for deletion. Returns a promise that is settled on
     * hub response or timeout.
     *
     * @param   {...string} key The key to delete
     * @returns {Promise}   A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype.del = function() {
      var args = Array.prototype.slice.call(arguments);

      return this._request('del', {keys: args});
    };

    /**
     * Returns a promise that, when resolved, indicates that all localStorage
     * data has been cleared.
     *
     * @returns {Promise} A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype.clear = function() {
      return this._request('clear');
    };

    /**
     * Returns a promise that, when resolved, passes an array of all keys
     * currently in storage.
     *
     * @returns {Promise} A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype.getKeys = function() {
      return this._request('getKeys');
    };

    /**
     * Deletes the iframe and sets the connected state to false. The client can
     * no longer be used after being invoked.
     */
    CrossStorageClient.prototype.close = function() {
      var frame = document.getElementById(this._frameId);
      if (frame) {
        frame.parentNode.removeChild(frame);
      }

      // Support IE8 with detachEvent
      if (window.removeEventListener) {
        window.removeEventListener('message', this._listener, false);
      } else {
        window.detachEvent('onmessage', this._listener);
      }

      this._connected = false;
      this._closed = true;
    };

    /**
     * Installs the necessary listener for the window message event. When a message
     * is received, the client's _connected status is changed to true, and the
     * onConnect promise is fulfilled. Given a response message, the callback
     * corresponding to its request is invoked. If response.error holds a truthy
     * value, the promise associated with the original request is rejected with
     * the error. Otherwise the promise is fulfilled and passed response.result.
     *
     * @private
     */
    CrossStorageClient.prototype._installListener = function() {
      var client = this;

      this._listener = function(message) {
        var i, origin, error, response;

        // Ignore invalid messages or those after the client has closed
        if (client._closed || !message.data || typeof message.data !== 'string') {
          return;
        }

        // postMessage returns the string "null" as the origin for "file://"
        origin = (message.origin === 'null') ? 'file://' : message.origin;

        // Ignore messages not from the correct origin
        if (origin !== client._origin) return;

        // LocalStorage isn't available in the hub
        if (message.data === 'cross-storage:unavailable') {
          if (!client._closed) client.close();
          if (!client._requests.connect) return;

          error = new Error('Closing client. Could not access localStorage in hub.');
          for (i = 0; i < client._requests.connect.length; i++) {
            client._requests.connect[i](error);
          }

          return;
        }

        // Handle initial connection
        if (message.data.indexOf('cross-storage:') !== -1 && !client._connected) {
          client._connected = true;
          if (!client._requests.connect) return;

          for (i = 0; i < client._requests.connect.length; i++) {
            client._requests.connect[i](error);
          }
          delete client._requests.connect;
        }

        if (message.data === 'cross-storage:ready') return;

        // All other messages
        try {
          response = JSON.parse(message.data);
        } catch(e) {
          return;
        }

        if (!response.id) return;

        if (client._requests[response.id]) {
          client._requests[response.id](response.error, response.result);
        }
      };

      // Support IE8 with attachEvent
      if (window.addEventListener) {
        window.addEventListener('message', this._listener, false);
      } else {
        window.attachEvent('onmessage', this._listener);
      }
    };

    /**
     * Invoked when a frame id was passed to the client, rather than allowing
     * the client to create its own iframe. Polls the hub for a ready event to
     * establish a connected state.
     */
    CrossStorageClient.prototype._poll = function() {
      var client, interval, targetOrigin;

      client = this;

      // postMessage requires that the target origin be set to "*" for "file://"
      targetOrigin = (client._origin === 'file://') ? '*' : client._origin;

      interval = setInterval(function() {
        if (client._connected) return clearInterval(interval);
        if (!client._hub) return;

        client._hub.postMessage('cross-storage:poll', targetOrigin);
      }, 1000);
    };

    /**
     * Creates a new iFrame containing the hub. Applies the necessary styles to
     * hide the element from view, prior to adding it to the document body.
     * Returns the created element.
     *
     * @private
     *
     * @param  {string}            url The url to the hub
     * returns {HTMLIFrameElement} The iFrame element itself
     */
    CrossStorageClient.prototype._createFrame = function(url) {
      var frame, key;

      frame = window.document.createElement('iframe');
      frame.id = this._frameId;

      // Style the iframe
      for (key in CrossStorageClient.frameStyle) {
        if (CrossStorageClient.frameStyle.hasOwnProperty(key)) {
          frame.style[key] = CrossStorageClient.frameStyle[key];
        }
      }

      window.document.body.appendChild(frame);
      frame.src = url;

      return frame;
    };

    /**
     * Sends a message containing the given method and params to the hub. Stores
     * a callback in the _requests object for later invocation on message, or
     * deletion on timeout. Returns a promise that is settled in either instance.
     *
     * @private
     *
     * @param   {string}  method The method to invoke
     * @param   {*}       params The arguments to pass
     * @returns {Promise} A promise that is settled on hub response or timeout
     */
    CrossStorageClient.prototype._request = function(method, params) {
      var req, client;

      if (this._closed) {
        return this._promise.reject(new Error('CrossStorageClient has closed'));
      }

      client = this;
      client._count++;

      req = {
        id:     this._id + ':' + client._count,
        method: 'cross-storage:' + method,
        params: params
      };

      return new this._promise(function(resolve, reject) {
        var timeout, originalToJSON, targetOrigin;

        // Timeout if a response isn't received after 4s
        timeout = setTimeout(function() {
          if (!client._requests[req.id]) return;

          delete client._requests[req.id];
          reject(new Error('Timeout: could not perform ' + req.method));
        }, client._timeout);

        // Add request callback
        client._requests[req.id] = function(err, result) {
          clearTimeout(timeout);
          delete client._requests[req.id];
          if (err) return reject(new Error(err));
          resolve(result);
        };

        // In case we have a broken Array.prototype.toJSON, e.g. because of
        // old versions of prototype
        if (Array.prototype.toJSON) {
          originalToJSON = Array.prototype.toJSON;
          Array.prototype.toJSON = null;
        }

        // postMessage requires that the target origin be set to "*" for "file://"
        targetOrigin = (client._origin === 'file://') ? '*' : client._origin;

        // Send serialized message
        client._hub.postMessage(JSON.stringify(req), targetOrigin);

        // Restore original toJSON
        if (originalToJSON) {
          Array.prototype.toJSON = originalToJSON;
        }
      });
    };

    /**
     * Export for various environments.
     */
    if (module.exports) {
      module.exports = CrossStorageClient;
    } else {
      exports.CrossStorageClient = CrossStorageClient;
    }
  }());
  }(client, client.exports));

  var hub = {exports: {}};

  (function (module, exports) {
  (function(root) {
    var CrossStorageHub = {};

    /**
     * Accepts an array of objects with two keys: origin and allow. The value
     * of origin is expected to be a RegExp, and allow, an array of strings.
     * The cross storage hub is then initialized to accept requests from any of
     * the matching origins, allowing access to the associated lists of methods.
     * Methods may include any of: get, set, del, getKeys and clear. A 'ready'
     * message is sent to the parent window once complete.
     *
     * @example
     * // Subdomain can get, but only root domain can set and del
     * CrossStorageHub.init([
     *   {origin: /\.example.com$/,        allow: ['get']},
     *   {origin: /:(www\.)?example.com$/, allow: ['get', 'set', 'del']}
     * ]);
     *
     * @param {array} permissions An array of objects with origin and allow
     */
    CrossStorageHub.init = function(permissions) {
      var available = true;

      // Return if localStorage is unavailable, or third party
      // access is disabled
      try {
        if (!window.localStorage) available = false;
      } catch (e) {
        available = false;
      }

      if (!available) {
        try {
          return window.parent.postMessage('cross-storage:unavailable', '*');
        } catch (e) {
          return;
        }
      }

      CrossStorageHub._permissions = permissions || [];
      CrossStorageHub._installListener();
      window.parent.postMessage('cross-storage:ready', '*');
    };

    /**
     * Installs the necessary listener for the window message event. Accommodates
     * IE8 and up.
     *
     * @private
     */
    CrossStorageHub._installListener = function() {
      var listener = CrossStorageHub._listener;
      if (window.addEventListener) {
        window.addEventListener('message', listener, false);
      } else {
        window.attachEvent('onmessage', listener);
      }
    };

    /**
     * The message handler for all requests posted to the window. It ignores any
     * messages having an origin that does not match the originally supplied
     * pattern. Given a JSON object with one of get, set, del or getKeys as the
     * method, the function performs the requested action and returns its result.
     *
     * @param {MessageEvent} message A message to be processed
     */
    CrossStorageHub._listener = function(message) {
      var origin, targetOrigin, request, method, error, result, response;

      // postMessage returns the string "null" as the origin for "file://"
      origin = (message.origin === 'null') ? 'file://' : message.origin;

      // Handle polling for a ready message
      if (message.data === 'cross-storage:poll') {
        return window.parent.postMessage('cross-storage:ready', message.origin);
      }

      // Ignore the ready message when viewing the hub directly
      if (message.data === 'cross-storage:ready') return;

      // Check whether message.data is a valid json
      try {
        request = JSON.parse(message.data);
      } catch (err) {
        return;
      }

      // Check whether request.method is a string
      if (!request || typeof request.method !== 'string') {
        return;
      }

      method = request.method.split('cross-storage:')[1];

      if (!method) {
        return;
      } else if (!CrossStorageHub._permitted(origin, method)) {
        error = 'Invalid permissions for ' + method;
      } else {
        try {
          result = CrossStorageHub['_' + method](request.params);
        } catch (err) {
          error = err.message;
        }
      }

      response = JSON.stringify({
        id: request.id,
        error: error,
        result: result
      });

      // postMessage requires that the target origin be set to "*" for "file://"
      targetOrigin = (origin === 'file://') ? '*' : origin;

      window.parent.postMessage(response, targetOrigin);
    };

    /**
     * Returns a boolean indicating whether or not the requested method is
     * permitted for the given origin. The argument passed to method is expected
     * to be one of 'get', 'set', 'del' or 'getKeys'.
     *
     * @param   {string} origin The origin for which to determine permissions
     * @param   {string} method Requested action
     * @returns {bool}   Whether or not the request is permitted
     */
    CrossStorageHub._permitted = function(origin, method) {
      var available, i, entry, match;

      available = ['get', 'set', 'del', 'clear', 'getKeys'];
      if (!CrossStorageHub._inArray(method, available)) {
        return false;
      }

      for (i = 0; i < CrossStorageHub._permissions.length; i++) {
        entry = CrossStorageHub._permissions[i];
        if (!(entry.origin instanceof RegExp) || !(entry.allow instanceof Array)) {
          continue;
        }

        match = entry.origin.test(origin);
        if (match && CrossStorageHub._inArray(method, entry.allow)) {
          return true;
        }
      }

      return false;
    };

    /**
     * Sets a key to the specified value.
     *
     * @param {object} params An object with key and value
     */
    CrossStorageHub._set = function(params) {
      window.localStorage.setItem(params.key, params.value);
    };

    /**
     * Accepts an object with an array of keys for which to retrieve their values.
     * Returns a single value if only one key was supplied, otherwise it returns
     * an array. Any keys not set result in a null element in the resulting array.
     *
     * @param   {object} params An object with an array of keys
     * @returns {*|*[]}  Either a single value, or an array
     */
    CrossStorageHub._get = function(params) {
      var storage, result, i, value;

      storage = window.localStorage;
      result = [];

      for (i = 0; i < params.keys.length; i++) {
        try {
          value = storage.getItem(params.keys[i]);
        } catch (e) {
          value = null;
        }

        result.push(value);
      }

      return (result.length > 1) ? result : result[0];
    };

    /**
     * Deletes all keys specified in the array found at params.keys.
     *
     * @param {object} params An object with an array of keys
     */
    CrossStorageHub._del = function(params) {
      for (var i = 0; i < params.keys.length; i++) {
        window.localStorage.removeItem(params.keys[i]);
      }
    };

    /**
     * Clears localStorage.
     */
    CrossStorageHub._clear = function() {
      window.localStorage.clear();
    };

    /**
     * Returns an array of all keys stored in localStorage.
     *
     * @returns {string[]} The array of keys
     */
    CrossStorageHub._getKeys = function(params) {
      var i, length, keys;

      keys = [];
      length = window.localStorage.length;

      for (i = 0; i < length; i++) {
        keys.push(window.localStorage.key(i));
      }

      return keys;
    };

    /**
     * Returns whether or not a value is present in the array. Consists of an
     * alternative to extending the array prototype for indexOf, since it's
     * unavailable for IE8.
     *
     * @param   {*}    value The value to find
     * @parma   {[]*}  array The array in which to search
     * @returns {bool} Whether or not the value was found
     */
    CrossStorageHub._inArray = function(value, array) {
      for (var i = 0; i < array.length; i++) {
        if (value === array[i]) return true;
      }

      return false;
    };

    /**
     * A cross-browser version of Date.now compatible with IE8 that avoids
     * modifying the Date object.
     *
     * @return {int} The current timestamp in milliseconds
     */
    CrossStorageHub._now = function() {
      if (typeof Date.now === 'function') {
        return Date.now();
      }

      return new Date().getTime();
    };

    /**
     * Export for various environments.
     */
    if (module.exports) {
      module.exports = CrossStorageHub;
    } else {
      exports.CrossStorageHub = CrossStorageHub;
    }
  }());
  }(hub, hub.exports));

  var lib = {
    CrossStorageClient: client.exports,
    CrossStorageHub:    hub.exports
  };

  var axios$3 = {exports: {}};

  var bind$5 = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };

  var bind$4 = bind$5;

  /*global toString:true*/

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray$3(val) {
    return toString.call(val) === '[object Array]';
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer$2(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }

  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject$5(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject$2(val) {
    if (toString.call(val) !== '[object Object]') {
      return false;
    }

    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }

  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }

  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }

  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction$5(val) {
    return toString.call(val) === '[object Function]';
  }

  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject$5(val) && isFunction$5(val.pipe);
  }

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach$2(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray$3(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject$2(result[key]) && isPlainObject$2(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject$2(val)) {
        result[key] = merge({}, val);
      } else if (isArray$3(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach$2(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach$2(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind$4(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }

  var utils$d = {
    isArray: isArray$3,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer$2,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject$5,
    isPlainObject: isPlainObject$2,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction$5,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach$2,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
  };

  var utils$c = utils$d;

  function encode(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  var buildURL$2 = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$c.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];

      utils$c.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils$c.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils$c.forEach(val, function parseValue(v) {
          if (utils$c.isDate(v)) {
            v = v.toISOString();
          } else if (utils$c.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });

      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  var utils$b = utils$d;

  function InterceptorManager$1() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager$1.prototype.forEach = function forEach(fn) {
    utils$b.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager$1;

  var utils$a = utils$d;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  var transformData$1 = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils$a.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });

    return data;
  };

  var isCancel$1 = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  var utils$9 = utils$d;

  var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
    utils$9.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  var enhanceError$1 = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };

  var enhanceError = enhanceError$1;

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  var createError$2 = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };

  var createError$1 = createError$2;

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  var settle$1 = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError$1(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };

  var utils$8 = utils$d;

  var cookies$2 = (
    utils$8.isStandardBrowserEnv() ?

    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils$8.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils$8.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils$8.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :

    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  var isAbsoluteURL$1 = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };

  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };

  var utils$7 = utils$d;

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ];

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders$1 = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) { return parsed; }

    utils$7.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils$7.trim(line.substr(0, i)).toLowerCase();
      val = utils$7.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });

    return parsed;
  };

  var utils$6 = utils$d;

  var isURLSameOrigin$1 = (
    utils$6.isStandardBrowserEnv() ?

    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;

        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
          var href = url;

          if (msie) {
          // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils$6.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :

    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );

  var utils$5 = utils$d;
  var settle = settle$1;
  var cookies$1 = cookies$2;
  var buildURL$1 = buildURL$2;
  var buildFullPath = buildFullPath$1;
  var parseHeaders = parseHeaders$1;
  var isURLSameOrigin = isURLSameOrigin$1;
  var createError = createError$2;

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils$5.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }

      var request = new XMLHttpRequest();

      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);

      // Set the request timeout in MS
      request.timeout = config.timeout;

      // Listen for ready state
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }

        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };

        settle(resolve, reject, response);

        // Clean up request
        request = null;
      };

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError('Request aborted', config, 'ECONNABORTED', request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
          request));

        // Clean up request
        request = null;
      };

      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils$5.isStandardBrowserEnv()) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies$1.read(config.xsrfCookieName) :
          undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$5.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }

      // Add withCredentials to request if needed
      if (!utils$5.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }

      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }

      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }

      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }

      if (!requestData) {
        requestData = null;
      }

      // Send the request
      request.send(requestData);
    });
  };

  var utils$4 = utils$d;
  var normalizeHeaderName = normalizeHeaderName$1;

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils$4.isUndefined(headers) && utils$4.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = xhr;
    }
    return adapter;
  }

  var defaults$2 = {
    adapter: getDefaultAdapter(),

    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils$4.isFormData(data) ||
        utils$4.isArrayBuffer(data) ||
        utils$4.isBuffer(data) ||
        utils$4.isStream(data) ||
        utils$4.isFile(data) ||
        utils$4.isBlob(data)
      ) {
        return data;
      }
      if (utils$4.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$4.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils$4.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],

    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,
    maxBodyLength: -1,

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };

  defaults$2.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };

  utils$4.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults$2.headers[method] = {};
  });

  utils$4.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults$2.headers[method] = utils$4.merge(DEFAULT_CONTENT_TYPE);
  });

  var defaults_1 = defaults$2;

  var utils$3 = utils$d;
  var transformData = transformData$1;
  var isCancel = isCancel$1;
  var defaults$1 = defaults_1;

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  var dispatchRequest$1 = function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );

    // Flatten headers
    config.headers = utils$3.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );

    utils$3.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    var adapter = config.adapter || defaults$1.adapter;

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );

      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }

      return Promise.reject(reason);
    });
  };

  var utils$2 = utils$d;

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  var mergeConfig$2 = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};

    var valueFromConfig2Keys = ['url', 'method', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
    var defaultToConfig2Keys = [
      'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
      'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
    ];
    var directMergeKeys = ['validateStatus'];

    function getMergedValue(target, source) {
      if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
        return utils$2.merge(target, source);
      } else if (utils$2.isPlainObject(source)) {
        return utils$2.merge({}, source);
      } else if (utils$2.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    function mergeDeepProperties(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    }

    utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      }
    });

    utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

    utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });

    utils$2.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });

    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys)
      .concat(directMergeKeys);

    var otherKeys = Object
      .keys(config1)
      .concat(Object.keys(config2))
      .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });

    utils$2.forEach(otherKeys, mergeDeepProperties);

    return config;
  };

  var utils$1 = utils$d;
  var buildURL = buildURL$2;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios$1.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig$1(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios$1.prototype.getUri = function getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };

  // Provide aliases for supported request methods
  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });

  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });

  var Axios_1 = Axios$1;

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel$1(message) {
    this.message = message;
  }

  Cancel$1.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel$1.prototype.__CANCEL__ = true;

  var Cancel_1 = Cancel$1;

  var Cancel = Cancel_1;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  var isAxiosError = function isAxiosError(payload) {
    return (typeof payload === 'object') && (payload.isAxiosError === true);
  };

  var utils = utils$d;
  var bind$3 = bind$5;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults = defaults_1;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind$3(Axios.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    return instance;
  }

  // Create the default instance to be exported
  var axios$2 = createInstance(defaults);

  // Expose Axios class to allow class inheritance
  axios$2.Axios = Axios;

  // Factory for creating new instances
  axios$2.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios$2.defaults, instanceConfig));
  };

  // Expose Cancel & CancelToken
  axios$2.Cancel = Cancel_1;
  axios$2.CancelToken = CancelToken_1;
  axios$2.isCancel = isCancel$1;

  // Expose all/spread
  axios$2.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$2.spread = spread;

  // Expose isAxiosError
  axios$2.isAxiosError = isAxiosError;

  axios$3.exports = axios$2;

  // Allow use of default import syntax in TypeScript
  axios$3.exports.default = axios$2;

  var axios$1 = axios$3.exports;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$2 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$2;

  var root$1 = _root;

  /** Built-in value references. */
  var Symbol$3 = root$1.Symbol;

  var _Symbol = Symbol$3;

  var Symbol$2 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$9.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$7.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$8 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$8.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$1 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$4(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$4;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /** Built-in value references. */
  var getPrototype$1 = overArg$1(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$4(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$4;

  var baseGetTag$3 = _baseGetTag,
      getPrototype = _getPrototype,
      isObjectLike$3 = isObjectLike_1;

  /** `Object#toString` result references. */
  var objectTag$1 = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$7 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject$1(value) {
    if (!isObjectLike$3(value) || baseGetTag$3(value) != objectTag$1) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$6.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject$1;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$4(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$4;

  var baseGetTag$2 = _baseGetTag,
      isObject$3 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$1 = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$4(value) {
    if (!isObject$3(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$2(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$4;

  var root = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root['__core-js_shared__'];

  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$1(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource$1;

  var isFunction$3 = isFunction_1,
      isMasked = _isMasked,
      isObject$2 = isObject_1,
      toSource = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$6 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$5).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$3(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$1(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$1;

  var getNative = _getNative;

  var defineProperty$3 = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty$3;

  var defineProperty$2 = _defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$2) {
      defineProperty$2(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue$2;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$2(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq$2;

  var baseAssignValue$1 = _baseAssignValue,
      eq$1 = eq_1;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$1(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue$1(object, key, value);
    }
  }

  var _assignValue = assignValue$1;

  var assignValue = _assignValue,
      baseAssignValue = _baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$1(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject$1;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$3(value) {
    return value;
  }

  var identity_1 = identity$3;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply$1;

  var apply = _apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest$1(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest$1;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant$1;

  var constant = constant_1,
      defineProperty$1 = _defineProperty,
      identity$2 = identity_1;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString$1 = !defineProperty$1 ? identity$2 : function(func, string) {
    return defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString$1;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut$1(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut$1;

  var baseSetToString = _baseSetToString,
      shortOut = _shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString$1 = shortOut(baseSetToString);

  var _setToString = setToString$1;

  var identity$1 = identity_1,
      overRest = _overRest,
      setToString = _setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity$1), func + '');
  }

  var _baseRest = baseRest$1;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$2(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength$2;

  var isFunction$2 = isFunction_1,
      isLength$1 = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$4(value) {
    return value != null && isLength$1(value.length) && !isFunction$2(value);
  }

  var isArrayLike_1 = isArrayLike$4;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$2(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex$2;

  var eq = eq_1,
      isArrayLike$3 = isArrayLike_1,
      isIndex$1 = _isIndex,
      isObject$1 = isObject_1;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall$1(value, index, object) {
    if (!isObject$1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike$3(object) && isIndex$1(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall$1;

  var baseRest = _baseRest,
      isIterateeCall = _isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner$1(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner$1;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes$1;

  var baseGetTag$1 = _baseGetTag,
      isObjectLike$2 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$1 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike$1(value) && hasOwnProperty$3.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments$2;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$2 = Array.isArray;

  var isArray_1 = isArray$2;

  var isBuffer$1 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
  }(isBuffer$1, isBuffer$1.exports));

  var baseGetTag = _baseGetTag,
      isLength = isLength_1,
      isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$1(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$1;

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  }(_nodeUtil, _nodeUtil.exports));

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray_1 = isTypedArray$1;

  var baseTimes = _baseTimes,
      isArguments$1 = isArguments_1,
      isArray$1 = isArray_1,
      isBuffer = isBuffer$1.exports,
      isIndex = _isIndex,
      isTypedArray = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$1(value),
        isArg = !isArr && isArguments$1(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$2.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$2;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$2(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

    return value === proto;
  }

  var _isPrototype = isPrototype$2;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn$1;

  var isObject = isObject_1,
      isPrototype$1 = _isPrototype,
      nativeKeysIn = _nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys$1 = _arrayLikeKeys,
      baseKeysIn = _baseKeysIn,
      isArrayLike$2 = isArrayLike_1;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$1(object) {
    return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
  }

  var keysIn_1 = keysIn$1;

  var copyObject = _copyObject,
      createAssigner = _createAssigner,
      keysIn = keysIn_1;

  /**
   * This method is like `_.assign` except that it iterates over own and
   * inherited source properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extend
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assign
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assignIn({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
   */
  var assignIn$1 = createAssigner(function(object, source) {
    copyObject(source, keysIn(source), object);
  });

  var assignIn_1 = assignIn$1;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$1(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach$1;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor$1;

  var createBaseFor = _createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor$1 = createBaseFor();

  var _baseFor = baseFor$1;

  var overArg = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys$1;

  var isPrototype = _isPrototype,
      nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys$1;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$1 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$2(object) {
    return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  var keys_1 = keys$2;

  var baseFor = _baseFor,
      keys$1 = keys_1;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn$1(object, iteratee) {
    return object && baseFor(object, iteratee, keys$1);
  }

  var _baseForOwn = baseForOwn$1;

  var isArrayLike = isArrayLike_1;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach$1;

  var baseForOwn = _baseForOwn,
      createBaseEach = _createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach$1 = createBaseEach(baseForOwn);

  var _baseEach = baseEach$1;

  var identity = identity_1;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction$1(value) {
    return typeof value == 'function' ? value : identity;
  }

  var _castFunction = castFunction$1;

  var arrayEach = _arrayEach,
      baseEach = _baseEach,
      castFunction = _castFunction,
      isArray = isArray_1;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach$1(collection, iteratee) {
    var func = isArray(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
  }

  var forEach_1 = forEach$1;

  var js_cookie = {exports: {}};

  /*!
   * JavaScript Cookie v2.2.1
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   */

  (function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  }(js_cookie));

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice$1 = Array.prototype.slice;
  var toStr$4 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation$5 = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr$4.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice$1.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice$1.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice$1.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var implementation$4 = implementation$5;

  var functionBind = Function.prototype.bind || implementation$4;

  var toStr$3 = Object.prototype.toString;

  var isArguments = function isArguments(value) {
  	var str = toStr$3.call(value);
  	var isArgs = str === '[object Arguments]';
  	if (!isArgs) {
  		isArgs = str !== '[object Array]' &&
  			value !== null &&
  			typeof value === 'object' &&
  			typeof value.length === 'number' &&
  			value.length >= 0 &&
  			toStr$3.call(value.callee) === '[object Function]';
  	}
  	return isArgs;
  };

  var keysShim$1;
  if (!Object.keys) {
  	// modified from https://github.com/es-shims/es5-shim
  	var has$5 = Object.prototype.hasOwnProperty;
  	var toStr$2 = Object.prototype.toString;
  	var isArgs$1 = isArguments; // eslint-disable-line global-require
  	var isEnumerable = Object.prototype.propertyIsEnumerable;
  	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
  	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  	var dontEnums = [
  		'toString',
  		'toLocaleString',
  		'valueOf',
  		'hasOwnProperty',
  		'isPrototypeOf',
  		'propertyIsEnumerable',
  		'constructor'
  	];
  	var equalsConstructorPrototype = function (o) {
  		var ctor = o.constructor;
  		return ctor && ctor.prototype === o;
  	};
  	var excludedKeys = {
  		$applicationCache: true,
  		$console: true,
  		$external: true,
  		$frame: true,
  		$frameElement: true,
  		$frames: true,
  		$innerHeight: true,
  		$innerWidth: true,
  		$onmozfullscreenchange: true,
  		$onmozfullscreenerror: true,
  		$outerHeight: true,
  		$outerWidth: true,
  		$pageXOffset: true,
  		$pageYOffset: true,
  		$parent: true,
  		$scrollLeft: true,
  		$scrollTop: true,
  		$scrollX: true,
  		$scrollY: true,
  		$self: true,
  		$webkitIndexedDB: true,
  		$webkitStorageInfo: true,
  		$window: true
  	};
  	var hasAutomationEqualityBug = (function () {
  		/* global window */
  		if (typeof window === 'undefined') { return false; }
  		for (var k in window) {
  			try {
  				if (!excludedKeys['$' + k] && has$5.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
  					try {
  						equalsConstructorPrototype(window[k]);
  					} catch (e) {
  						return true;
  					}
  				}
  			} catch (e) {
  				return true;
  			}
  		}
  		return false;
  	}());
  	var equalsConstructorPrototypeIfNotBuggy = function (o) {
  		/* global window */
  		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
  			return equalsConstructorPrototype(o);
  		}
  		try {
  			return equalsConstructorPrototype(o);
  		} catch (e) {
  			return false;
  		}
  	};

  	keysShim$1 = function keys(object) {
  		var isObject = object !== null && typeof object === 'object';
  		var isFunction = toStr$2.call(object) === '[object Function]';
  		var isArguments = isArgs$1(object);
  		var isString = isObject && toStr$2.call(object) === '[object String]';
  		var theKeys = [];

  		if (!isObject && !isFunction && !isArguments) {
  			throw new TypeError('Object.keys called on a non-object');
  		}

  		var skipProto = hasProtoEnumBug && isFunction;
  		if (isString && object.length > 0 && !has$5.call(object, 0)) {
  			for (var i = 0; i < object.length; ++i) {
  				theKeys.push(String(i));
  			}
  		}

  		if (isArguments && object.length > 0) {
  			for (var j = 0; j < object.length; ++j) {
  				theKeys.push(String(j));
  			}
  		} else {
  			for (var name in object) {
  				if (!(skipProto && name === 'prototype') && has$5.call(object, name)) {
  					theKeys.push(String(name));
  				}
  			}
  		}

  		if (hasDontEnumBug) {
  			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

  			for (var k = 0; k < dontEnums.length; ++k) {
  				if (!(skipConstructor && dontEnums[k] === 'constructor') && has$5.call(object, dontEnums[k])) {
  					theKeys.push(dontEnums[k]);
  				}
  			}
  		}
  		return theKeys;
  	};
  }
  var implementation$3 = keysShim$1;

  var slice = Array.prototype.slice;
  var isArgs = isArguments;

  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) { return origKeys(o); } : implementation$3;

  var originalKeys = Object.keys;

  keysShim.shim = function shimObjectKeys() {
  	if (Object.keys) {
  		var keysWorksWithArguments = (function () {
  			// Safari 5.0 bug
  			var args = Object.keys(arguments);
  			return args && args.length === arguments.length;
  		}(1, 2));
  		if (!keysWorksWithArguments) {
  			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
  				if (isArgs(object)) {
  					return originalKeys(slice.call(object));
  				}
  				return originalKeys(object);
  			};
  		}
  	} else {
  		Object.keys = keysShim;
  	}
  	return Object.keys || keysShim;
  };

  var objectKeys = keysShim;

  var keys = objectKeys;
  var hasSymbols$2 = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

  var toStr$1 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;

  var isFunction$1 = function (fn) {
  	return typeof fn === 'function' && toStr$1.call(fn) === '[object Function]';
  };

  var arePropertyDescriptorsSupported = function () {
  	var obj = {};
  	try {
  		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
  		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
  		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
  			return false;
  		}
  		return obj.x === obj;
  	} catch (e) { /* this is IE 8. */
  		return false;
  	}
  };
  var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

  var defineProperty = function (object, name, value, predicate) {
  	if (name in object && (!isFunction$1(predicate) || !predicate())) {
  		return;
  	}
  	if (supportsDescriptors) {
  		origDefineProperty(object, name, {
  			configurable: true,
  			enumerable: false,
  			value: value,
  			writable: true
  		});
  	} else {
  		object[name] = value;
  	}
  };

  var defineProperties = function (object, map) {
  	var predicates = arguments.length > 2 ? arguments[2] : {};
  	var props = keys(map);
  	if (hasSymbols$2) {
  		props = concat.call(props, Object.getOwnPropertySymbols(map));
  	}
  	for (var i = 0; i < props.length; i += 1) {
  		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  	}
  };

  defineProperties.supportsDescriptors = !!supportsDescriptors;

  var defineProperties_1 = defineProperties;

  var requirePromise$3 = function requirePromise() {
  	if (typeof Promise !== 'function') {
  		throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
  	}
  };

  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
  var badArrayLike$1;
  var isCallableMarker;
  if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
  	try {
  		badArrayLike$1 = Object.defineProperty({}, 'length', {
  			get: function () {
  				throw isCallableMarker;
  			}
  		});
  		isCallableMarker = {};
  		// eslint-disable-next-line no-throw-literal
  		reflectApply(function () { throw 42; }, null, badArrayLike$1);
  	} catch (_) {
  		if (_ !== isCallableMarker) {
  			reflectApply = null;
  		}
  	}
  } else {
  	reflectApply = null;
  }

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  /* globals document: false */
  var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

  var isCallable = reflectApply
  	? function isCallable(value) {
  		if (value === documentDotAll) { return true; }
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		if (typeof value === 'function' && !value.prototype) { return true; }
  		try {
  			reflectApply(value, null, badArrayLike$1);
  		} catch (e) {
  			if (e !== isCallableMarker) { return false; }
  		}
  		return !isES6ClassFn(value);
  	}
  	: function isCallable(value) {
  		if (value === documentDotAll) { return true; }
  		if (!value) { return false; }
  		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  		if (typeof value === 'function' && !value.prototype) { return true; }
  		if (hasToStringTag) { return tryFunctionObject(value); }
  		if (isES6ClassFn(value)) { return false; }
  		var strClass = toStr.call(value);
  		return strClass === fnClass || strClass === genClass;
  	};

  // http://262.ecma-international.org/5.1/#sec-9.11

  var IsCallable$2 = isCallable;

  /* eslint complexity: [2, 18], max-statements: [2, 33] */
  var shams = function hasSymbols() {
  	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
  	if (typeof Symbol.iterator === 'symbol') { return true; }

  	var obj = {};
  	var sym = Symbol('test');
  	var symObj = Object(sym);
  	if (typeof sym === 'string') { return false; }

  	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
  	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

  	// temp disabled per https://github.com/ljharb/object.assign/issues/17
  	// if (sym instanceof Symbol) { return false; }
  	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  	// if (!(symObj instanceof Symbol)) { return false; }

  	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
  	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  	var symVal = 42;
  	obj[sym] = symVal;
  	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

  	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

  	var syms = Object.getOwnPropertySymbols(obj);
  	if (syms.length !== 1 || syms[0] !== sym) { return false; }

  	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

  	if (typeof Object.getOwnPropertyDescriptor === 'function') {
  		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
  	}

  	return true;
  };

  var origSymbol = typeof Symbol !== 'undefined' && Symbol;
  var hasSymbolSham = shams;

  var hasSymbols$1 = function hasNativeSymbols() {
  	if (typeof origSymbol !== 'function') { return false; }
  	if (typeof Symbol !== 'function') { return false; }
  	if (typeof origSymbol('foo') !== 'symbol') { return false; }
  	if (typeof Symbol('bar') !== 'symbol') { return false; }

  	return hasSymbolSham();
  };

  var bind$2 = functionBind;

  var src = bind$2.call(Function.call, Object.prototype.hasOwnProperty);

  var undefined$1;

  var $SyntaxError$1 = SyntaxError;
  var $Function = Function;
  var $TypeError$5 = TypeError;

  // eslint-disable-next-line consistent-return
  var getEvalledConstructor = function (expressionSyntax) {
  	try {
  		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  	} catch (e) {}
  };

  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
  	try {
  		$gOPD({}, '');
  	} catch (e) {
  		$gOPD = null; // this is IE 8, which has a broken gOPD
  	}
  }

  var throwTypeError = function () {
  	throw new $TypeError$5();
  };
  var ThrowTypeError = $gOPD
  	? (function () {
  		try {
  			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
  			arguments.callee; // IE 8 does not throw here
  			return throwTypeError;
  		} catch (calleeThrows) {
  			try {
  				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
  				return $gOPD(arguments, 'callee').get;
  			} catch (gOPDthrows) {
  				return throwTypeError;
  			}
  		}
  	}())
  	: throwTypeError;

  var hasSymbols = hasSymbols$1();

  var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

  var needsEval = {};

  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS = {
  	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
  	'%Array%': Array,
  	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
  	'%AsyncFromSyncIteratorPrototype%': undefined$1,
  	'%AsyncFunction%': needsEval,
  	'%AsyncGenerator%': needsEval,
  	'%AsyncGeneratorFunction%': needsEval,
  	'%AsyncIteratorPrototype%': needsEval,
  	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
  	'%Boolean%': Boolean,
  	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'%Date%': Date,
  	'%decodeURI%': decodeURI,
  	'%decodeURIComponent%': decodeURIComponent,
  	'%encodeURI%': encodeURI,
  	'%encodeURIComponent%': encodeURIComponent,
  	'%Error%': Error,
  	'%eval%': eval, // eslint-disable-line no-eval
  	'%EvalError%': EvalError,
  	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
  	'%Function%': $Function,
  	'%GeneratorFunction%': needsEval,
  	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'%isFinite%': isFinite,
  	'%isNaN%': isNaN,
  	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'%Math%': Math,
  	'%Number%': Number,
  	'%Object%': Object,
  	'%parseFloat%': parseFloat,
  	'%parseInt%': parseInt,
  	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'%RangeError%': RangeError,
  	'%ReferenceError%': ReferenceError,
  	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'%RegExp%': RegExp,
  	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'%String%': String,
  	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'%Symbol%': hasSymbols ? Symbol : undefined$1,
  	'%SyntaxError%': $SyntaxError$1,
  	'%ThrowTypeError%': ThrowTypeError,
  	'%TypedArray%': TypedArray,
  	'%TypeError%': $TypeError$5,
  	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'%URIError%': URIError,
  	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
  	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
  };

  var doEval = function doEval(name) {
  	var value;
  	if (name === '%AsyncFunction%') {
  		value = getEvalledConstructor('async function () {}');
  	} else if (name === '%GeneratorFunction%') {
  		value = getEvalledConstructor('function* () {}');
  	} else if (name === '%AsyncGeneratorFunction%') {
  		value = getEvalledConstructor('async function* () {}');
  	} else if (name === '%AsyncGenerator%') {
  		var fn = doEval('%AsyncGeneratorFunction%');
  		if (fn) {
  			value = fn.prototype;
  		}
  	} else if (name === '%AsyncIteratorPrototype%') {
  		var gen = doEval('%AsyncGenerator%');
  		if (gen) {
  			value = getProto(gen.prototype);
  		}
  	}

  	INTRINSICS[name] = value;

  	return value;
  };

  var LEGACY_ALIASES = {
  	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  	'%ArrayPrototype%': ['Array', 'prototype'],
  	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
  	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  	'%BooleanPrototype%': ['Boolean', 'prototype'],
  	'%DataViewPrototype%': ['DataView', 'prototype'],
  	'%DatePrototype%': ['Date', 'prototype'],
  	'%ErrorPrototype%': ['Error', 'prototype'],
  	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
  	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  	'%FunctionPrototype%': ['Function', 'prototype'],
  	'%Generator%': ['GeneratorFunction', 'prototype'],
  	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  	'%JSONParse%': ['JSON', 'parse'],
  	'%JSONStringify%': ['JSON', 'stringify'],
  	'%MapPrototype%': ['Map', 'prototype'],
  	'%NumberPrototype%': ['Number', 'prototype'],
  	'%ObjectPrototype%': ['Object', 'prototype'],
  	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  	'%PromisePrototype%': ['Promise', 'prototype'],
  	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  	'%Promise_all%': ['Promise', 'all'],
  	'%Promise_reject%': ['Promise', 'reject'],
  	'%Promise_resolve%': ['Promise', 'resolve'],
  	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
  	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  	'%RegExpPrototype%': ['RegExp', 'prototype'],
  	'%SetPrototype%': ['Set', 'prototype'],
  	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  	'%StringPrototype%': ['String', 'prototype'],
  	'%SymbolPrototype%': ['Symbol', 'prototype'],
  	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
  	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  	'%URIErrorPrototype%': ['URIError', 'prototype'],
  	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
  	'%WeakSetPrototype%': ['WeakSet', 'prototype']
  };

  var bind$1 = functionBind;
  var hasOwn = src;
  var $concat = bind$1.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind$1.call(Function.apply, Array.prototype.splice);
  var $replace = bind$1.call(Function.call, String.prototype.replace);
  var $strSlice = bind$1.call(Function.call, String.prototype.slice);

  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
  	var first = $strSlice(string, 0, 1);
  	var last = $strSlice(string, -1);
  	if (first === '%' && last !== '%') {
  		throw new $SyntaxError$1('invalid intrinsic syntax, expected closing `%`');
  	} else if (last === '%' && first !== '%') {
  		throw new $SyntaxError$1('invalid intrinsic syntax, expected opening `%`');
  	}
  	var result = [];
  	$replace(string, rePropName, function (match, number, quote, subString) {
  		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  	});
  	return result;
  };
  /* end adaptation */

  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  	var intrinsicName = name;
  	var alias;
  	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
  		alias = LEGACY_ALIASES[intrinsicName];
  		intrinsicName = '%' + alias[0] + '%';
  	}

  	if (hasOwn(INTRINSICS, intrinsicName)) {
  		var value = INTRINSICS[intrinsicName];
  		if (value === needsEval) {
  			value = doEval(intrinsicName);
  		}
  		if (typeof value === 'undefined' && !allowMissing) {
  			throw new $TypeError$5('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  		}

  		return {
  			alias: alias,
  			name: intrinsicName,
  			value: value
  		};
  	}

  	throw new $SyntaxError$1('intrinsic ' + name + ' does not exist!');
  };

  var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (typeof name !== 'string' || name.length === 0) {
  		throw new $TypeError$5('intrinsic name must be a non-empty string');
  	}
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new $TypeError$5('"allowMissing" argument must be a boolean');
  	}

  	var parts = stringToPath(name);
  	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

  	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  	var intrinsicRealName = intrinsic.name;
  	var value = intrinsic.value;
  	var skipFurtherCaching = false;

  	var alias = intrinsic.alias;
  	if (alias) {
  		intrinsicBaseName = alias[0];
  		$spliceApply(parts, $concat([0, 1], alias));
  	}

  	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
  		var part = parts[i];
  		var first = $strSlice(part, 0, 1);
  		var last = $strSlice(part, -1);
  		if (
  			(
  				(first === '"' || first === "'" || first === '`')
  				|| (last === '"' || last === "'" || last === '`')
  			)
  			&& first !== last
  		) {
  			throw new $SyntaxError$1('property names with quotes must have matching quotes');
  		}
  		if (part === 'constructor' || !isOwn) {
  			skipFurtherCaching = true;
  		}

  		intrinsicBaseName += '.' + part;
  		intrinsicRealName = '%' + intrinsicBaseName + '%';

  		if (hasOwn(INTRINSICS, intrinsicRealName)) {
  			value = INTRINSICS[intrinsicRealName];
  		} else if (value != null) {
  			if (!(part in value)) {
  				if (!allowMissing) {
  					throw new $TypeError$5('base intrinsic for ' + name + ' exists, but the property is not available.');
  				}
  				return void undefined$1;
  			}
  			if ($gOPD && (i + 1) >= parts.length) {
  				var desc = $gOPD(value, part);
  				isOwn = !!desc;

  				// By convention, when a data property is converted to an accessor
  				// property to emulate a data property that does not suffer from
  				// the override mistake, that accessor's getter is marked with
  				// an `originalValue` property. Here, when we detect this, we
  				// uphold the illusion by pretending to see that original data
  				// property, i.e., returning the value rather than the getter
  				// itself.
  				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
  					value = desc.get;
  				} else {
  					value = value[part];
  				}
  			} else {
  				isOwn = hasOwn(value, part);
  				value = value[part];
  			}

  			if (isOwn && !skipFurtherCaching) {
  				INTRINSICS[intrinsicRealName] = value;
  			}
  		}
  	}
  	return value;
  };

  var IsConstructor$1 = {exports: {}};

  // TODO: remove, semver-major

  var GetIntrinsic$8 = getIntrinsic;

  var GetIntrinsic$7 = getIntrinsic;

  var has$4 = src;
  var $TypeError$4 = GetIntrinsic$7('%TypeError%');

  var isPropertyDescriptor$1 = function IsPropertyDescriptor(ES, Desc) {
  	if (ES.Type(Desc) !== 'Object') {
  		return false;
  	}
  	var allowed = {
  		'[[Configurable]]': true,
  		'[[Enumerable]]': true,
  		'[[Get]]': true,
  		'[[Set]]': true,
  		'[[Value]]': true,
  		'[[Writable]]': true
  	};

  	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
  		if (has$4(Desc, key) && !allowed[key]) {
  			return false;
  		}
  	}

  	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
  		throw new $TypeError$4('Property Descriptors may not be both accessor and data descriptors');
  	}
  	return true;
  };

  var callBind$1 = {exports: {}};

  (function (module) {

  var bind = functionBind;
  var GetIntrinsic = getIntrinsic;

  var $apply = GetIntrinsic('%Function.prototype.apply%');
  var $call = GetIntrinsic('%Function.prototype.call%');
  var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

  var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
  var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
  var $max = GetIntrinsic('%Math.max%');

  if ($defineProperty) {
  	try {
  		$defineProperty({}, 'a', { value: 1 });
  	} catch (e) {
  		// IE 8 has a broken defineProperty
  		$defineProperty = null;
  	}
  }

  module.exports = function callBind(originalFunction) {
  	var func = $reflectApply(bind, $call, arguments);
  	if ($gOPD && $defineProperty) {
  		var desc = $gOPD(func, 'length');
  		if (desc.configurable) {
  			// original length, plus the receiver, minus any additional arguments (after the receiver)
  			$defineProperty(
  				func,
  				'length',
  				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
  			);
  		}
  	}
  	return func;
  };

  var applyBind = function applyBind() {
  	return $reflectApply(bind, $apply, arguments);
  };

  if ($defineProperty) {
  	$defineProperty(module.exports, 'apply', { value: applyBind });
  } else {
  	module.exports.apply = applyBind;
  }
  }(callBind$1));

  var GetIntrinsic$6 = getIntrinsic;

  var callBind = callBind$1.exports;

  var $indexOf = callBind(GetIntrinsic$6('String.prototype.indexOf'));

  var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
  	var intrinsic = GetIntrinsic$6(name, !!allowMissing);
  	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
  		return callBind(intrinsic);
  	}
  	return intrinsic;
  };

  var GetIntrinsic$5 = getIntrinsic;

  var $defineProperty = GetIntrinsic$5('%Object.defineProperty%', true);

  if ($defineProperty) {
  	try {
  		$defineProperty({}, 'a', { value: 1 });
  	} catch (e) {
  		// IE 8 has a broken defineProperty
  		$defineProperty = null;
  	}
  }

  var callBound = callBound$1;

  var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

  // eslint-disable-next-line max-params
  var DefineOwnProperty$1 = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
  	if (!$defineProperty) {
  		if (!IsDataDescriptor(desc)) {
  			// ES3 does not support getters/setters
  			return false;
  		}
  		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
  			return false;
  		}

  		// fallback for ES3
  		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
  			// a non-enumerable existing property
  			return false;
  		}

  		// property does not exist at all, or exists but is enumerable
  		var V = desc['[[Value]]'];
  		// eslint-disable-next-line no-param-reassign
  		O[P] = V; // will use [[Define]]
  		return SameValue(O[P], V);
  	}
  	$defineProperty(O, P, FromPropertyDescriptor(desc));
  	return true;
  };

  var GetIntrinsic$4 = getIntrinsic;

  var $TypeError$3 = GetIntrinsic$4('%TypeError%');
  var $SyntaxError = GetIntrinsic$4('%SyntaxError%');

  var has$3 = src;

  var predicates = {
  	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
  	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
  		if (Type(Desc) !== 'Object') {
  			return false;
  		}
  		var allowed = {
  			'[[Configurable]]': true,
  			'[[Enumerable]]': true,
  			'[[Get]]': true,
  			'[[Set]]': true,
  			'[[Value]]': true,
  			'[[Writable]]': true
  		};

  		for (var key in Desc) { // eslint-disable-line
  			if (has$3(Desc, key) && !allowed[key]) {
  				return false;
  			}
  		}

  		var isData = has$3(Desc, '[[Value]]');
  		var IsAccessor = has$3(Desc, '[[Get]]') || has$3(Desc, '[[Set]]');
  		if (isData && IsAccessor) {
  			throw new $TypeError$3('Property Descriptors may not be both accessor and data descriptors');
  		}
  		return true;
  	}
  };

  var assertRecord$3 = function assertRecord(Type, recordType, argumentName, value) {
  	var predicate = predicates[recordType];
  	if (typeof predicate !== 'function') {
  		throw new $SyntaxError('unknown record type: ' + recordType);
  	}
  	if (!predicate(Type, value)) {
  		throw new $TypeError$3(argumentName + ' must be a ' + recordType);
  	}
  };

  // https://262.ecma-international.org/5.1/#sec-8

  var Type$8 = function Type(x) {
  	if (x === null) {
  		return 'Null';
  	}
  	if (typeof x === 'undefined') {
  		return 'Undefined';
  	}
  	if (typeof x === 'function' || typeof x === 'object') {
  		return 'Object';
  	}
  	if (typeof x === 'number') {
  		return 'Number';
  	}
  	if (typeof x === 'boolean') {
  		return 'Boolean';
  	}
  	if (typeof x === 'string') {
  		return 'String';
  	}
  };

  var ES5Type = Type$8;

  // https://ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values

  var Type$7 = function Type(x) {
  	if (typeof x === 'symbol') {
  		return 'Symbol';
  	}
  	return ES5Type(x);
  };

  var assertRecord$2 = assertRecord$3;

  var Type$6 = Type$7;

  // https://ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

  var FromPropertyDescriptor$1 = function FromPropertyDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return Desc;
  	}

  	assertRecord$2(Type$6, 'Property Descriptor', 'Desc', Desc);

  	var obj = {};
  	if ('[[Value]]' in Desc) {
  		obj.value = Desc['[[Value]]'];
  	}
  	if ('[[Writable]]' in Desc) {
  		obj.writable = Desc['[[Writable]]'];
  	}
  	if ('[[Get]]' in Desc) {
  		obj.get = Desc['[[Get]]'];
  	}
  	if ('[[Set]]' in Desc) {
  		obj.set = Desc['[[Set]]'];
  	}
  	if ('[[Enumerable]]' in Desc) {
  		obj.enumerable = Desc['[[Enumerable]]'];
  	}
  	if ('[[Configurable]]' in Desc) {
  		obj.configurable = Desc['[[Configurable]]'];
  	}
  	return obj;
  };

  var has$2 = src;

  var assertRecord$1 = assertRecord$3;

  var Type$5 = Type$7;

  // https://ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

  var IsAccessorDescriptor$1 = function IsAccessorDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return false;
  	}

  	assertRecord$1(Type$5, 'Property Descriptor', 'Desc', Desc);

  	if (!has$2(Desc, '[[Get]]') && !has$2(Desc, '[[Set]]')) {
  		return false;
  	}

  	return true;
  };

  var has$1 = src;

  var assertRecord = assertRecord$3;

  var Type$4 = Type$7;

  // https://ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

  var IsDataDescriptor$1 = function IsDataDescriptor(Desc) {
  	if (typeof Desc === 'undefined') {
  		return false;
  	}

  	assertRecord(Type$4, 'Property Descriptor', 'Desc', Desc);

  	if (!has$1(Desc, '[[Value]]') && !has$1(Desc, '[[Writable]]')) {
  		return false;
  	}

  	return true;
  };

  // https://ecma-international.org/ecma-262/6.0/#sec-ispropertykey

  var IsPropertyKey$1 = function IsPropertyKey(argument) {
  	return typeof argument === 'string' || typeof argument === 'symbol';
  };

  var _isNaN = Number.isNaN || function isNaN(a) {
  	return a !== a;
  };

  var $isNaN = _isNaN;

  // http://262.ecma-international.org/5.1/#sec-9.12

  var SameValue$1 = function SameValue(x, y) {
  	if (x === y) { // 0 === -0, but they are not identical.
  		if (x === 0) { return 1 / x === 1 / y; }
  		return true;
  	}
  	return $isNaN(x) && $isNaN(y);
  };

  // http://262.ecma-international.org/5.1/#sec-9.2

  var ToBoolean$1 = function ToBoolean(value) { return !!value; };

  var has = src;

  var GetIntrinsic$3 = getIntrinsic;

  var $TypeError$2 = GetIntrinsic$3('%TypeError%');

  var Type$3 = Type$7;
  var ToBoolean = ToBoolean$1;
  var IsCallable$1 = IsCallable$2;

  // https://262.ecma-international.org/5.1/#sec-8.10.5

  var ToPropertyDescriptor$1 = function ToPropertyDescriptor(Obj) {
  	if (Type$3(Obj) !== 'Object') {
  		throw new $TypeError$2('ToPropertyDescriptor requires an object');
  	}

  	var desc = {};
  	if (has(Obj, 'enumerable')) {
  		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
  	}
  	if (has(Obj, 'configurable')) {
  		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
  	}
  	if (has(Obj, 'value')) {
  		desc['[[Value]]'] = Obj.value;
  	}
  	if (has(Obj, 'writable')) {
  		desc['[[Writable]]'] = ToBoolean(Obj.writable);
  	}
  	if (has(Obj, 'get')) {
  		var getter = Obj.get;
  		if (typeof getter !== 'undefined' && !IsCallable$1(getter)) {
  			throw new $TypeError$2('getter must be a function');
  		}
  		desc['[[Get]]'] = getter;
  	}
  	if (has(Obj, 'set')) {
  		var setter = Obj.set;
  		if (typeof setter !== 'undefined' && !IsCallable$1(setter)) {
  			throw new $TypeError$2('setter must be a function');
  		}
  		desc['[[Set]]'] = setter;
  	}

  	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
  		throw new $TypeError$2('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  	}
  	return desc;
  };

  var GetIntrinsic$2 = getIntrinsic;

  var $TypeError$1 = GetIntrinsic$2('%TypeError%');

  var isPropertyDescriptor = isPropertyDescriptor$1;
  var DefineOwnProperty = DefineOwnProperty$1;

  var FromPropertyDescriptor = FromPropertyDescriptor$1;
  var IsAccessorDescriptor = IsAccessorDescriptor$1;
  var IsDataDescriptor = IsDataDescriptor$1;
  var IsPropertyKey = IsPropertyKey$1;
  var SameValue = SameValue$1;
  var ToPropertyDescriptor = ToPropertyDescriptor$1;
  var Type$2 = Type$7;

  // https://ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

  var DefinePropertyOrThrow$1 = function DefinePropertyOrThrow(O, P, desc) {
  	if (Type$2(O) !== 'Object') {
  		throw new $TypeError$1('Assertion failed: Type(O) is not Object');
  	}

  	if (!IsPropertyKey(P)) {
  		throw new $TypeError$1('Assertion failed: IsPropertyKey(P) is not true');
  	}

  	var Desc = isPropertyDescriptor({
  		Type: Type$2,
  		IsDataDescriptor: IsDataDescriptor,
  		IsAccessorDescriptor: IsAccessorDescriptor
  	}, desc) ? desc : ToPropertyDescriptor(desc);
  	if (!isPropertyDescriptor({
  		Type: Type$2,
  		IsDataDescriptor: IsDataDescriptor,
  		IsAccessorDescriptor: IsAccessorDescriptor
  	}, Desc)) {
  		throw new $TypeError$1('Assertion failed: Desc is not a valid Property Descriptor');
  	}

  	return DefineOwnProperty(
  		IsDataDescriptor,
  		SameValue,
  		FromPropertyDescriptor,
  		O,
  		P,
  		Desc
  	);
  };

  var GetIntrinsic$1 = GetIntrinsic$8;

  var $construct = GetIntrinsic$1('%Reflect.construct%', true);

  var DefinePropertyOrThrow = DefinePropertyOrThrow$1;
  try {
  	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
  } catch (e) {
  	// Accessor properties aren't supported
  	DefinePropertyOrThrow = null;
  }

  // https://ecma-international.org/ecma-262/6.0/#sec-isconstructor

  if (DefinePropertyOrThrow && $construct) {
  	var isConstructorMarker = {};
  	var badArrayLike = {};
  	DefinePropertyOrThrow(badArrayLike, 'length', {
  		'[[Get]]': function () {
  			throw isConstructorMarker;
  		},
  		'[[Enumerable]]': true
  	});

  	IsConstructor$1.exports = function IsConstructor(argument) {
  		try {
  			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
  			$construct(argument, badArrayLike);
  		} catch (err) {
  			return err === isConstructorMarker;
  		}
  	};
  } else {
  	IsConstructor$1.exports = function IsConstructor(argument) {
  		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
  		return typeof argument === 'function' && !!argument.prototype;
  	};
  }

  var GetIntrinsic = getIntrinsic;

  var $species = GetIntrinsic('%Symbol.species%', true);
  var $TypeError = GetIntrinsic('%TypeError%');

  var IsConstructor = IsConstructor$1.exports;
  var Type$1 = Type$7;

  // https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

  var SpeciesConstructor$1 = function SpeciesConstructor(O, defaultConstructor) {
  	if (Type$1(O) !== 'Object') {
  		throw new $TypeError('Assertion failed: Type(O) is not Object');
  	}
  	var C = O.constructor;
  	if (typeof C === 'undefined') {
  		return defaultConstructor;
  	}
  	if (Type$1(C) !== 'Object') {
  		throw new $TypeError('O.constructor is not an Object');
  	}
  	var S = $species ? C[$species] : void 0;
  	if (S == null) {
  		return defaultConstructor;
  	}
  	if (IsConstructor(S)) {
  		return S;
  	}
  	throw new $TypeError('no constructor found');
  };

  var requirePromise$2 = requirePromise$3;

  requirePromise$2();

  var IsCallable = IsCallable$2;
  var SpeciesConstructor = SpeciesConstructor$1;
  var Type = Type$7;

  var promiseResolve = function PromiseResolve(C, value) {
  	return new C(function (resolve) {
  		resolve(value);
  	});
  };

  var OriginalPromise = Promise;

  var createThenFinally = function CreateThenFinally(C, onFinally) {
  	return function (value) {
  		var result = onFinally();
  		var promise = promiseResolve(C, result);
  		var valueThunk = function () {
  			return value;
  		};
  		return promise.then(valueThunk);
  	};
  };

  var createCatchFinally = function CreateCatchFinally(C, onFinally) {
  	return function (reason) {
  		var result = onFinally();
  		var promise = promiseResolve(C, result);
  		var thrower = function () {
  			throw reason;
  		};
  		return promise.then(thrower);
  	};
  };

  var promiseFinally$1 = function finally_(onFinally) {
  	/* eslint no-invalid-this: 0 */

  	var promise = this;

  	if (Type(promise) !== 'Object') {
  		throw new TypeError('receiver is not an Object');
  	}

  	var C = SpeciesConstructor(promise, OriginalPromise); // may throw

  	var thenFinally = onFinally;
  	var catchFinally = onFinally;
  	if (IsCallable(onFinally)) {
  		thenFinally = createThenFinally(C, onFinally);
  		catchFinally = createCatchFinally(C, onFinally);
  	}

  	return promise.then(thenFinally, catchFinally);
  };

  if (Object.getOwnPropertyDescriptor) {
  	var descriptor = Object.getOwnPropertyDescriptor(promiseFinally$1, 'name');
  	if (descriptor && descriptor.configurable) {
  		Object.defineProperty(promiseFinally$1, 'name', { configurable: true, value: 'finally' });
  	}
  }

  var implementation$2 = promiseFinally$1;

  var requirePromise$1 = requirePromise$3;

  var implementation$1 = implementation$2;

  var polyfill = function getPolyfill() {
  	requirePromise$1();
  	return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation$1;
  };

  var requirePromise = requirePromise$3;

  var getPolyfill$1 = polyfill;
  var define$1 = defineProperties_1;

  var shim$1 = function shimPromiseFinally() {
  	requirePromise();

  	var polyfill = getPolyfill$1();
  	define$1(Promise.prototype, { 'finally': polyfill }, {
  		'finally': function testFinally() {
  			return Promise.prototype['finally'] !== polyfill;
  		}
  	});
  	return polyfill;
  };

  var bind = functionBind;
  var define = defineProperties_1;

  var implementation = implementation$2;
  var getPolyfill = polyfill;
  var shim = shim$1;

  var bound = bind.call(Function.call, getPolyfill());

  define(bound, {
  	getPolyfill: getPolyfill,
  	implementation: implementation,
  	shim: shim
  });

  var promise_prototype_finally = bound;

  function queryString(params) {
    return Object.keys(params).map(function (key) {
      return key + '=' + params[key];
    }).join('&');
  }

  var CrossStorageClient = lib.CrossStorageClient;
  var axios = axios$1;
  var isPlainObject = isPlainObject_1;
  var isFunction = isFunction_1;
  var assignIn = assignIn_1;
  var forEach = forEach_1;
  var cookies = js_cookie.exports;
  var promiseFinally = promise_prototype_finally;
  promiseFinally.shim(); // 參數預設值

  var DEFAULTS = {
    oauth_server: '',
    cookie_prefix: ''
  };

  var CrossTokenClient = /*#__PURE__*/function () {
    /**
     * 建構子
     *
     * @param {Object} options - 選項參數
     */
    function CrossTokenClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, CrossTokenClient);

      this.options = assignIn({}, DEFAULTS, isPlainObject(options) && options); // 初始化

      this.init();
    }
    /**
     * 初始化 CrossTokenClient 實例
     */


    _createClass(CrossTokenClient, [{
      key: "init",
      value: function init() {
        var options = this.options;

        var _this = this;

        this.cookiePrefix = "".concat(options.cookie_prefix, "tkchecksum");
        this.crossAPI = "".concat(options.oauth_server, "/api/oauth2/cross_domain_storage");
        this.refreshTokenAPI = "".concat(options.oauth_server, "/oauth2/token/api");
        this.validateTokenAPI = "".concat(options.oauth_server, "/api/oauth2/token"); // CrossStorageClient 實例

        this.storage = new CrossStorageClient(this.crossAPI, {}); // 取用主站 LocalStorage 資料

        this.storage.onConnect().then(function () {
          // 取得 Token 資料
          _this.getTokenSync();
        });
      }
      /**
       * 取得 Token 資料
       */

    }, {
      key: "getTokenSync",
      value: function getTokenSync() {
        var cookiePrefix = this.cookiePrefix,
            storage = this.storage; // 當本地 Token 無變動時，不需更新

        if (localStorage.getItem('token_checksum') == cookies.get(cookiePrefix)) {
          return true;
        }

        var token = {
          token_refresh_token: '',
          token_scope: '',
          token_type: '',
          token_expires_in: '',
          token_access_token: '',
          token_checksum: '',
          token_createtime: ''
        }; // 當本地cookie被竄改，清空本地local storage

        if (typeof cookies.get(cookiePrefix) == 'undefined') {
          // 印出資料
          forEach(assignIn({}, token, {
            token_refresh_token: '',
            token_scope: '',
            token_type: '',
            token_expires_in: '',
            token_access_token: '',
            token_checksum: '',
            token_createtime: ''
          }), function (value, key) {
            // 寫到本 Domain 的 localStorage
            localStorage.setItem(key, value);
          });
          return false;
        } // 從 Main Domain 更新 Token


        storage.get('token_refresh_token', 'token_scope', 'token_type', 'token_expires_in', 'token_access_token', 'token_checksum', 'token_createtime').then(function (res) {
          // 印出資料
          forEach(assignIn({}, token, {
            token_refresh_token: res[0],
            token_scope: res[1],
            token_type: res[2],
            token_expires_in: res[3],
            token_access_token: res[4],
            token_checksum: res[5],
            token_createtime: res[6]
          }), function (value, key) {
            // 寫到本 Domain 的 localStorage
            localStorage.setItem(key, value);
          });
        })["catch"](function (err) {
          console.log(err);
        });
      }
      /**
       * 更新 Token
       */

    }, {
      key: "refreshToken",
      value: function refreshToken() {
        // 取得 Token 資料
        this.getTokenSync();
        var refreshTokenAPI = this.refreshTokenAPI;

        var _this = this; // 送出 Refresh Token


        axios.post(refreshTokenAPI, queryString({
          refresh_token: localStorage.getItem('token_refresh_token')
        }), {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (response) {
          setTimeout(function () {
            // 取得 Token 資料
            _this.getTokenSync();
          }, 500);
        })["catch"](function (error) {
          console.log(error);
        });
      }
      /**
       * 驗證 Token
       *
       * @param {String} token - 本地端要被驗證的 Token
       * @param {Function} successCallback - 驗證成功的回調函式
       * @param {Function} failCallback - 驗證失敗的回調函式
       * @returns {axios}
       */

    }, {
      key: "validate",
      value: function validate(token, successCallback, failCallback) {
        var validateTokenAPI = this.validateTokenAPI;
        var validateToken = token || '';
        return axios.get(validateTokenAPI, {
          headers: {
            Authorization: 'Bearer ' + validateToken
          }
        }).then(function (response) {
          // 驗證成功的回調函式
          if (isFunction(successCallback)) {
            successCallback(response);
          }
        })["catch"](function (error) {
          // 驗證失敗的回調函式
          if (isFunction(failCallback)) {
            failCallback(error);
          }
        })["finally"](function (res) {// Always executed
        });
      }
      /**
       * 開啟login頁面
       */

    }, {
      key: "loginIAM",
      value: function loginIAM() {
        var options = this.options;
        window.open(options.oauth_server, '_blank');
      }
      /**
       * 開啟logout頁面
       */

    }, {
      key: "logoutIAM",
      value: function logoutIAM() {
        var options = this.options;
        window.open(options.oauth_server + '/logout', '_blank');
      }
    }]);

    return CrossTokenClient;
  }();

  return CrossTokenClient;

})));
