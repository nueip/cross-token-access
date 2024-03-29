(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TokenInjection = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var check$1 = function (it) {
	  return it && it.Math === Math && it;
	};
	var global$M =
	  check$1(typeof globalThis == 'object' && globalThis) ||
	  check$1(typeof window == 'object' && window) ||
	  check$1(typeof self == 'object' && self) ||
	  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var fails$E = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$D = fails$E;
	var functionBindNative$1 = !fails$D(function () {
	  var test = (function () {  }).bind();
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$6 = functionBindNative$1;
	var FunctionPrototype$7 = Function.prototype;
	var apply$6 = FunctionPrototype$7.apply;
	var call$t = FunctionPrototype$7.call;
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$6 ? call$t.bind(apply$6) : function () {
	  return call$t.apply(apply$6, arguments);
	});

	var NATIVE_BIND$5 = functionBindNative$1;
	var FunctionPrototype$6 = Function.prototype;
	var call$s = FunctionPrototype$6.call;
	var uncurryThisWithBind = NATIVE_BIND$5 && FunctionPrototype$6.bind.bind(call$s, call$s);
	var functionUncurryThis$1 = NATIVE_BIND$5 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$s.apply(fn, arguments);
	  };
	};

	var uncurryThis$H = functionUncurryThis$1;
	var toString$f = uncurryThis$H({}.toString);
	var stringSlice$2 = uncurryThis$H(''.slice);
	var classofRaw$4 = function (it) {
	  return stringSlice$2(toString$f(it), 8, -1);
	};

	var classofRaw$3 = classofRaw$4;
	var uncurryThis$G = functionUncurryThis$1;
	var functionUncurryThisClause = function (fn) {
	  if (classofRaw$3(fn) === 'Function') return uncurryThis$G(fn);
	};

	var documentAll$2 = typeof document == 'object' && document.all;
	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
	var documentAll_1 = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var $documentAll$1 = documentAll_1;
	var documentAll$1 = $documentAll$1.all;
	var isCallable$A = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor$1 = {};

	var fails$C = fails$E;
	var descriptors$1 = !fails$C(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var NATIVE_BIND$4 = functionBindNative$1;
	var call$r = Function.prototype.call;
	var functionCall$1 = NATIVE_BIND$4 ? call$r.bind(call$r) : function () {
	  return call$r.apply(call$r, arguments);
	};

	var objectPropertyIsEnumerable$1 = {};

	var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG$1 = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);
	objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$5(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$2;

	var createPropertyDescriptor$a = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$F = functionUncurryThis$1;
	var fails$B = fails$E;
	var classof$g = classofRaw$4;
	var $Object$6 = Object;
	var split$1 = uncurryThis$F(''.split);
	var indexedObject$1 = fails$B(function () {
	  return !$Object$6('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$g(it) === 'String' ? split$1(it, '') : $Object$6(it);
	} : $Object$6;

	var isNullOrUndefined$8 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$7 = isNullOrUndefined$8;
	var $TypeError$r = TypeError;
	var requireObjectCoercible$9 = function (it) {
	  if (isNullOrUndefined$7(it)) throw new $TypeError$r("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$4 = indexedObject$1;
	var requireObjectCoercible$8 = requireObjectCoercible$9;
	var toIndexedObject$d = function (it) {
	  return IndexedObject$4(requireObjectCoercible$8(it));
	};

	var isCallable$z = isCallable$A;
	var $documentAll = documentAll_1;
	var documentAll = $documentAll.all;
	var isObject$p = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$z(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$z(it);
	};

	var path$j = {};

	var path$i = path$j;
	var global$L = global$M;
	var isCallable$y = isCallable$A;
	var aFunction$1 = function (variable) {
	  return isCallable$y(variable) ? variable : undefined;
	};
	var getBuiltIn$k = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path$i[namespace]) || aFunction$1(global$L[namespace])
	    : path$i[namespace] && path$i[namespace][method] || global$L[namespace] && global$L[namespace][method];
	};

	var uncurryThis$E = functionUncurryThis$1;
	var objectIsPrototypeOf$1 = uncurryThis$E({}.isPrototypeOf);

	var engineUserAgent$1 = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$K = global$M;
	var userAgent$4 = engineUserAgent$1;
	var process$5 = global$K.process;
	var Deno$2 = global$K.Deno;
	var versions$1 = process$5 && process$5.versions || Deno$2 && Deno$2.version;
	var v8$1 = versions$1 && versions$1.v8;
	var match$1, version$1;
	if (v8$1) {
	  match$1 = v8$1.split('.');
	  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
	}
	if (!version$1 && userAgent$4) {
	  match$1 = userAgent$4.match(/Edge\/(\d+)/);
	  if (!match$1 || match$1[1] >= 74) {
	    match$1 = userAgent$4.match(/Chrome\/(\d+)/);
	    if (match$1) version$1 = +match$1[1];
	  }
	}
	var engineV8Version$1 = version$1;

	var V8_VERSION$4 = engineV8Version$1;
	var fails$A = fails$E;
	var global$J = global$M;
	var $String$5 = global$J.String;
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$A(function () {
	  var symbol = Symbol('symbol detection');
	  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION$4 && V8_VERSION$4 < 41;
	});

	var NATIVE_SYMBOL$7 = symbolConstructorDetection;
	var useSymbolAsUid$1 = NATIVE_SYMBOL$7
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$j = getBuiltIn$k;
	var isCallable$x = isCallable$A;
	var isPrototypeOf$f = objectIsPrototypeOf$1;
	var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
	var $Object$5 = Object;
	var isSymbol$8 = USE_SYMBOL_AS_UID$3 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$j('Symbol');
	  return isCallable$x($Symbol) && isPrototypeOf$f($Symbol.prototype, $Object$5(it));
	};

	var $String$4 = String;
	var tryToString$8 = function (argument) {
	  try {
	    return $String$4(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$w = isCallable$A;
	var tryToString$7 = tryToString$8;
	var $TypeError$q = TypeError;
	var aCallable$j = function (argument) {
	  if (isCallable$w(argument)) return argument;
	  throw new $TypeError$q(tryToString$7(argument) + ' is not a function');
	};

	var aCallable$i = aCallable$j;
	var isNullOrUndefined$6 = isNullOrUndefined$8;
	var getMethod$5 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$6(func) ? undefined : aCallable$i(func);
	};

	var call$q = functionCall$1;
	var isCallable$v = isCallable$A;
	var isObject$o = isObject$p;
	var $TypeError$p = TypeError;
	var ordinaryToPrimitive$3 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$v(fn = input.toString) && !isObject$o(val = call$q(fn, input))) return val;
	  if (isCallable$v(fn = input.valueOf) && !isObject$o(val = call$q(fn, input))) return val;
	  if (pref !== 'string' && isCallable$v(fn = input.toString) && !isObject$o(val = call$q(fn, input))) return val;
	  throw new $TypeError$p("Can't convert object to primitive value");
	};

	var shared$b = {exports: {}};

	var isPure = true;

	var global$I = global$M;
	var defineProperty$i = Object.defineProperty;
	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$i(global$I, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$I[key] = value;
	  } return value;
	};

	var global$H = global$M;
	var defineGlobalProperty = defineGlobalProperty$1;
	var SHARED$1 = '__core-js_shared__';
	var store$7 = global$H[SHARED$1] || defineGlobalProperty(SHARED$1, {});
	var sharedStore$1 = store$7;

	var store$6 = sharedStore$1;
	(shared$b.exports = function (key, value) {
	  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.34.0',
	  mode: 'pure' ,
	  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$7 = requireObjectCoercible$9;
	var $Object$4 = Object;
	var toObject$c = function (argument) {
	  return $Object$4(requireObjectCoercible$7(argument));
	};

	var uncurryThis$D = functionUncurryThis$1;
	var toObject$b = toObject$c;
	var hasOwnProperty$1 = uncurryThis$D({}.hasOwnProperty);
	var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$1(toObject$b(it), key);
	};

	var uncurryThis$C = functionUncurryThis$1;
	var id$2 = 0;
	var postfix$1 = Math.random();
	var toString$e = uncurryThis$C(1.0.toString);
	var uid$7 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$e(++id$2 + postfix$1, 36);
	};

	var global$G = global$M;
	var shared$a = shared$b.exports;
	var hasOwn$v = hasOwnProperty_1$1;
	var uid$6 = uid$7;
	var NATIVE_SYMBOL$6 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
	var Symbol$5 = global$G.Symbol;
	var WellKnownSymbolsStore$3 = shared$a('wks');
	var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$6;
	var wellKnownSymbol$t = function (name) {
	  if (!hasOwn$v(WellKnownSymbolsStore$3, name)) {
	    WellKnownSymbolsStore$3[name] = NATIVE_SYMBOL$6 && hasOwn$v(Symbol$5, name)
	      ? Symbol$5[name]
	      : createWellKnownSymbol$1('Symbol.' + name);
	  } return WellKnownSymbolsStore$3[name];
	};

	var call$p = functionCall$1;
	var isObject$n = isObject$p;
	var isSymbol$7 = isSymbol$8;
	var getMethod$4 = getMethod$5;
	var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
	var wellKnownSymbol$s = wellKnownSymbol$t;
	var $TypeError$o = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$s('toPrimitive');
	var toPrimitive$8 = function (input, pref) {
	  if (!isObject$n(input) || isSymbol$7(input)) return input;
	  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$p(exoticToPrim, input, pref);
	    if (!isObject$n(result) || isSymbol$7(result)) return result;
	    throw new $TypeError$o("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$2(input, pref);
	};

	var toPrimitive$7 = toPrimitive$8;
	var isSymbol$6 = isSymbol$8;
	var toPropertyKey$7 = function (argument) {
	  var key = toPrimitive$7(argument, 'string');
	  return isSymbol$6(key) ? key : key + '';
	};

	var global$F = global$M;
	var isObject$m = isObject$p;
	var document$4 = global$F.document;
	var EXISTS$3 = isObject$m(document$4) && isObject$m(document$4.createElement);
	var documentCreateElement$2 = function (it) {
	  return EXISTS$3 ? document$4.createElement(it) : {};
	};

	var DESCRIPTORS$m = descriptors$1;
	var fails$z = fails$E;
	var createElement$2 = documentCreateElement$2;
	var ie8DomDefine$1 = !DESCRIPTORS$m && !fails$z(function () {
	  return Object.defineProperty(createElement$2('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$l = descriptors$1;
	var call$o = functionCall$1;
	var propertyIsEnumerableModule$3 = objectPropertyIsEnumerable$1;
	var createPropertyDescriptor$9 = createPropertyDescriptor$a;
	var toIndexedObject$c = toIndexedObject$d;
	var toPropertyKey$6 = toPropertyKey$7;
	var hasOwn$u = hasOwnProperty_1$1;
	var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
	var $getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$l ? $getOwnPropertyDescriptor$4 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$c(O);
	  P = toPropertyKey$6(P);
	  if (IE8_DOM_DEFINE$3) try {
	    return $getOwnPropertyDescriptor$4(O, P);
	  } catch (error) {  }
	  if (hasOwn$u(O, P)) return createPropertyDescriptor$9(!call$o(propertyIsEnumerableModule$3.f, O, P), O[P]);
	};

	var fails$y = fails$E;
	var isCallable$u = isCallable$A;
	var replacement$1 = /#|\.prototype\./;
	var isForced$4 = function (feature, detection) {
	  var value = data$2[normalize$1(feature)];
	  return value === POLYFILL$1 ? true
	    : value === NATIVE$1 ? false
	    : isCallable$u(detection) ? fails$y(detection)
	    : !!detection;
	};
	var normalize$1 = isForced$4.normalize = function (string) {
	  return String(string).replace(replacement$1, '.').toLowerCase();
	};
	var data$2 = isForced$4.data = {};
	var NATIVE$1 = isForced$4.NATIVE = 'N';
	var POLYFILL$1 = isForced$4.POLYFILL = 'P';
	var isForced_1$1 = isForced$4;

	var uncurryThis$B = functionUncurryThisClause;
	var aCallable$h = aCallable$j;
	var NATIVE_BIND$3 = functionBindNative$1;
	var bind$t = uncurryThis$B(uncurryThis$B.bind);
	var functionBindContext = function (fn, that) {
	  aCallable$h(fn);
	  return that === undefined ? fn : NATIVE_BIND$3 ? bind$t(fn, that) : function () {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty$1 = {};

	var DESCRIPTORS$k = descriptors$1;
	var fails$x = fails$E;
	var v8PrototypeDefineBug$1 = DESCRIPTORS$k && fails$x(function () {
	  return Object.defineProperty(function () {  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$l = isObject$p;
	var $String$3 = String;
	var $TypeError$n = TypeError;
	var anObject$g = function (argument) {
	  if (isObject$l(argument)) return argument;
	  throw new $TypeError$n($String$3(argument) + ' is not an object');
	};

	var DESCRIPTORS$j = descriptors$1;
	var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
	var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
	var anObject$f = anObject$g;
	var toPropertyKey$5 = toPropertyKey$7;
	var $TypeError$m = TypeError;
	var $defineProperty$5 = Object.defineProperty;
	var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE$1 = 'enumerable';
	var CONFIGURABLE$3 = 'configurable';
	var WRITABLE$1 = 'writable';
	objectDefineProperty$1.f = DESCRIPTORS$j ? V8_PROTOTYPE_DEFINE_BUG$2 ? function defineProperty(O, P, Attributes) {
	  anObject$f(O);
	  P = toPropertyKey$5(P);
	  anObject$f(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
	    var current = $getOwnPropertyDescriptor$3(O, P);
	    if (current && current[WRITABLE$1]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$3 in Attributes ? Attributes[CONFIGURABLE$3] : current[CONFIGURABLE$3],
	        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
	        writable: false
	      };
	    }
	  } return $defineProperty$5(O, P, Attributes);
	} : $defineProperty$5 : function defineProperty(O, P, Attributes) {
	  anObject$f(O);
	  P = toPropertyKey$5(P);
	  anObject$f(Attributes);
	  if (IE8_DOM_DEFINE$2) try {
	    return $defineProperty$5(O, P, Attributes);
	  } catch (error) {  }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$m('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$i = descriptors$1;
	var definePropertyModule$6 = objectDefineProperty$1;
	var createPropertyDescriptor$8 = createPropertyDescriptor$a;
	var createNonEnumerableProperty$c = DESCRIPTORS$i ? function (object, key, value) {
	  return definePropertyModule$6.f(object, key, createPropertyDescriptor$8(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$E = global$M;
	var apply$5 = functionApply;
	var uncurryThis$A = functionUncurryThisClause;
	var isCallable$t = isCallable$A;
	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;
	var isForced$3 = isForced_1$1;
	var path$h = path$j;
	var bind$s = functionBindContext;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$c;
	var hasOwn$t = hasOwnProperty_1$1;
	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$5(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
	var _export$1 = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$E : STATIC ? global$E[TARGET] : (global$E[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$h : path$h[TARGET] || createNonEnumerableProperty$b(path$h, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
	  for (key in source) {
	    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$t(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$4(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
	    if (options.bind && USE_NATIVE) resultProperty = bind$s(sourceProperty, global$E);
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    else if (PROTO && isCallable$t(sourceProperty)) resultProperty = uncurryThis$A(sourceProperty);
	    else resultProperty = sourceProperty;
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$b(resultProperty, 'sham', true);
	    }
	    createNonEnumerableProperty$b(target, key, resultProperty);
	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$t(path$h, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$b(path$h, VIRTUAL_PROTOTYPE, {});
	      }
	      createNonEnumerableProperty$b(path$h[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
	        createNonEnumerableProperty$b(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var shared$9 = shared$b.exports;
	var uid$5 = uid$7;
	var keys$5 = shared$9('keys');
	var sharedKey$6 = function (key) {
	  return keys$5[key] || (keys$5[key] = uid$5(key));
	};

	var fails$w = fails$E;
	var correctPrototypeGetter = !fails$w(function () {
	  function F() {  }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$s = hasOwnProperty_1$1;
	var isCallable$s = isCallable$A;
	var toObject$a = toObject$c;
	var sharedKey$5 = sharedKey$6;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var IE_PROTO$1 = sharedKey$5('IE_PROTO');
	var $Object$3 = Object;
	var ObjectPrototype$2 = $Object$3.prototype;
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object$3.getPrototypeOf : function (O) {
	  var object = toObject$a(O);
	  if (hasOwn$s(object, IE_PROTO$1)) return object[IE_PROTO$1];
	  var constructor = object.constructor;
	  if (isCallable$s(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$3 ? ObjectPrototype$2 : null;
	};

	var uncurryThis$z = functionUncurryThis$1;
	var aCallable$g = aCallable$j;
	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    return uncurryThis$z(aCallable$g(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) {  }
	};

	var isCallable$r = isCallable$A;
	var $String$2 = String;
	var $TypeError$l = TypeError;
	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$r(argument)) return argument;
	  throw new $TypeError$l("Can't set " + $String$2(argument) + ' as a prototype');
	};

	var uncurryThisAccessor = functionUncurryThisAccessor;
	var anObject$e = anObject$g;
	var aPossiblePrototype = aPossiblePrototype$1;
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {  }
	  return function setPrototypeOf(O, proto) {
	    anObject$e(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var objectGetOwnPropertyNames$1 = {};

	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$1 : ceil$1)(n);
	};

	var trunc = mathTrunc;
	var toIntegerOrInfinity$6 = function (argument) {
	  var number = +argument;
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
	var max$4 = Math.max;
	var min$3 = Math.min;
	var toAbsoluteIndex$5 = function (index, length) {
	  var integer = toIntegerOrInfinity$5(index);
	  return integer < 0 ? max$4(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
	var min$2 = Math.min;
	var toLength$3 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0;
	};

	var toLength$2 = toLength$3;
	var lengthOfArrayLike$9 = function (obj) {
	  return toLength$2(obj.length);
	};

	var toIndexedObject$b = toIndexedObject$d;
	var toAbsoluteIndex$4 = toAbsoluteIndex$5;
	var lengthOfArrayLike$8 = lengthOfArrayLike$9;
	var createMethod$4 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$b($this);
	    var length = lengthOfArrayLike$8(O);
	    var index = toAbsoluteIndex$4(fromIndex, length);
	    var value;
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      if (value !== value) return true;
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	var arrayIncludes$1 = {
	  includes: createMethod$4(true),
	  indexOf: createMethod$4(false)
	};

	var hiddenKeys$a = {};

	var uncurryThis$y = functionUncurryThis$1;
	var hasOwn$r = hasOwnProperty_1$1;
	var toIndexedObject$a = toIndexedObject$d;
	var indexOf$7 = arrayIncludes$1.indexOf;
	var hiddenKeys$9 = hiddenKeys$a;
	var push$e = uncurryThis$y([].push);
	var objectKeysInternal$1 = function (object, names) {
	  var O = toIndexedObject$a(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$r(hiddenKeys$9, key) && hasOwn$r(O, key) && push$e(result, key);
	  while (names.length > i) if (hasOwn$r(O, key = names[i++])) {
	    ~indexOf$7(result, key) || push$e(result, key);
	  }
	  return result;
	};

	var enumBugKeys$6 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$3 = objectKeysInternal$1;
	var enumBugKeys$5 = enumBugKeys$6;
	var hiddenKeys$8 = enumBugKeys$5.concat('length', 'prototype');
	objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$3(O, hiddenKeys$8);
	};

	var objectGetOwnPropertySymbols$1 = {};

	objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

	var getBuiltIn$i = getBuiltIn$k;
	var uncurryThis$x = functionUncurryThis$1;
	var getOwnPropertyNamesModule$3 = objectGetOwnPropertyNames$1;
	var getOwnPropertySymbolsModule$4 = objectGetOwnPropertySymbols$1;
	var anObject$d = anObject$g;
	var concat$8 = uncurryThis$x([].concat);
	var ownKeys$3 = getBuiltIn$i('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$3.f(anObject$d(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$4.f;
	  return getOwnPropertySymbols ? concat$8(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$q = hasOwnProperty_1$1;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor$1;
	var definePropertyModule$5 = objectDefineProperty$1;
	var copyConstructorProperties$3 = function (target, source, exceptions) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule$5.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$q(target, key) && !(exceptions && hasOwn$q(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var objectDefineProperties = {};

	var internalObjectKeys$2 = objectKeysInternal$1;
	var enumBugKeys$4 = enumBugKeys$6;
	var objectKeys$5 = Object.keys || function keys(O) {
	  return internalObjectKeys$2(O, enumBugKeys$4);
	};

	var DESCRIPTORS$h = descriptors$1;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug$1;
	var definePropertyModule$4 = objectDefineProperty$1;
	var anObject$c = anObject$g;
	var toIndexedObject$9 = toIndexedObject$d;
	var objectKeys$4 = objectKeys$5;
	objectDefineProperties.f = DESCRIPTORS$h && !V8_PROTOTYPE_DEFINE_BUG$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$c(O);
	  var props = toIndexedObject$9(Properties);
	  var keys = objectKeys$4(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$h = getBuiltIn$k;
	var html$2 = getBuiltIn$h('document', 'documentElement');

	var anObject$b = anObject$g;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys$3 = enumBugKeys$6;
	var hiddenKeys$7 = hiddenKeys$a;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$4 = sharedKey$6;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$4('IE_PROTO');
	var EmptyConstructor = function () {  };
	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null;
	  return temp;
	};
	var NullProtoObjectViaIFrame = function () {
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) {  }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument)
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument);
	  var length = enumBugKeys$3.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$3[length]];
	  return NullProtoObject();
	};
	hiddenKeys$7[IE_PROTO] = true;
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$b(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var isObject$k = isObject$p;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
	var installErrorCause$1 = function (O, options) {
	  if (isObject$k(options) && 'cause' in options) {
	    createNonEnumerableProperty$a(O, 'cause', options.cause);
	  }
	};

	var uncurryThis$w = functionUncurryThis$1;
	var $Error$1 = Error;
	var replace$2 = uncurryThis$w(''.replace);
	var TEST = (function (arg) { return String(new $Error$1(arg).stack); })('zxcasd');
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var fails$v = fails$E;
	var createPropertyDescriptor$7 = createPropertyDescriptor$a;
	var errorStackInstallable = !fails$v(function () {
	  var error = new Error('a');
	  if (!('stack' in error)) return true;
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$7(1, 7));
	  return error.stack !== 7;
	});

	var createNonEnumerableProperty$9 = createNonEnumerableProperty$c;
	var clearErrorStack = errorStackClear;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var captureStackTrace = Error.captureStackTrace;
	var errorStackInstall = function (error, C, stack, dropEntries) {
	  if (ERROR_STACK_INSTALLABLE) {
	    if (captureStackTrace) captureStackTrace(error, C);
	    else createNonEnumerableProperty$9(error, 'stack', clearErrorStack(stack, dropEntries));
	  }
	};

	var iterators = {};

	var wellKnownSymbol$r = wellKnownSymbol$t;
	var Iterators$6 = iterators;
	var ITERATOR$6 = wellKnownSymbol$r('iterator');
	var ArrayPrototype$9 = Array.prototype;
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$6.Array === it || ArrayPrototype$9[ITERATOR$6] === it);
	};

	var wellKnownSymbol$q = wellKnownSymbol$t;
	var TO_STRING_TAG$5 = wellKnownSymbol$q('toStringTag');
	var test$3 = {};
	test$3[TO_STRING_TAG$5] = 'z';
	var toStringTagSupport$1 = String(test$3) === '[object z]';

	var TO_STRING_TAG_SUPPORT$5 = toStringTagSupport$1;
	var isCallable$q = isCallable$A;
	var classofRaw$2 = classofRaw$4;
	var wellKnownSymbol$p = wellKnownSymbol$t;
	var TO_STRING_TAG$4 = wellKnownSymbol$p('toStringTag');
	var $Object$2 = Object;
	var CORRECT_ARGUMENTS$1 = classofRaw$2(function () { return arguments; }()) === 'Arguments';
	var tryGet$1 = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {  }
	};
	var classof$f = TO_STRING_TAG_SUPPORT$5 ? classofRaw$2 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    : typeof (tag = tryGet$1(O = $Object$2(it), TO_STRING_TAG$4)) == 'string' ? tag
	    : CORRECT_ARGUMENTS$1 ? classofRaw$2(O)
	    : (result = classofRaw$2(O)) === 'Object' && isCallable$q(O.callee) ? 'Arguments' : result;
	};

	var classof$e = classof$f;
	var getMethod$3 = getMethod$5;
	var isNullOrUndefined$5 = isNullOrUndefined$8;
	var Iterators$5 = iterators;
	var wellKnownSymbol$o = wellKnownSymbol$t;
	var ITERATOR$5 = wellKnownSymbol$o('iterator');
	var getIteratorMethod$2 = function (it) {
	  if (!isNullOrUndefined$5(it)) return getMethod$3(it, ITERATOR$5)
	    || getMethod$3(it, '@@iterator')
	    || Iterators$5[classof$e(it)];
	};

	var call$n = functionCall$1;
	var aCallable$f = aCallable$j;
	var anObject$a = anObject$g;
	var tryToString$6 = tryToString$8;
	var getIteratorMethod$1 = getIteratorMethod$2;
	var $TypeError$k = TypeError;
	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$f(iteratorMethod)) return anObject$a(call$n(iteratorMethod, argument));
	  throw new $TypeError$k(tryToString$6(argument) + ' is not iterable');
	};

	var call$m = functionCall$1;
	var anObject$9 = anObject$g;
	var getMethod$2 = getMethod$5;
	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$9(iterator);
	  try {
	    innerResult = getMethod$2(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$m(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$9(innerResult);
	  return value;
	};

	var bind$r = functionBindContext;
	var call$l = functionCall$1;
	var anObject$8 = anObject$g;
	var tryToString$5 = tryToString$8;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var lengthOfArrayLike$7 = lengthOfArrayLike$9;
	var isPrototypeOf$e = objectIsPrototypeOf$1;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$1;
	var $TypeError$j = TypeError;
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};
	var ResultPrototype = Result.prototype;
	var iterate$l = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$r(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;
	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };
	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$8(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };
	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw new $TypeError$j(tryToString$5(iterable) + ' is not iterable');
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$7(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$e(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }
	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$l(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$e(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var classof$d = classof$f;
	var $String$1 = String;
	var toString$d = function (argument) {
	  if (classof$d(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var toString$c = toString$d;
	var normalizeStringArgument$1 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$c(argument);
	};

	var $$13 = _export$1;
	var isPrototypeOf$d = objectIsPrototypeOf$1;
	var getPrototypeOf$8 = objectGetPrototypeOf;
	var setPrototypeOf$6 = objectSetPrototypeOf;
	var copyConstructorProperties$2 = copyConstructorProperties$3;
	var create$a = objectCreate;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;
	var createPropertyDescriptor$6 = createPropertyDescriptor$a;
	var installErrorCause = installErrorCause$1;
	var installErrorStack = errorStackInstall;
	var iterate$k = iterate$l;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$n = wellKnownSymbol$t;
	var TO_STRING_TAG$3 = wellKnownSymbol$n('toStringTag');
	var $Error = Error;
	var push$d = [].push;
	var $AggregateError = function AggregateError(errors, message ) {
	  var isInstance = isPrototypeOf$d(AggregateErrorPrototype, this);
	  var that;
	  if (setPrototypeOf$6) {
	    that = setPrototypeOf$6(new $Error(), isInstance ? getPrototypeOf$8(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create$a(AggregateErrorPrototype);
	    createNonEnumerableProperty$8(that, TO_STRING_TAG$3, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty$8(that, 'message', normalizeStringArgument(message));
	  installErrorStack(that, $AggregateError, that.stack, 1);
	  if (arguments.length > 2) installErrorCause(that, arguments[2]);
	  var errorsArray = [];
	  iterate$k(errors, push$d, { that: errorsArray });
	  createNonEnumerableProperty$8(that, 'errors', errorsArray);
	  return that;
	};
	if (setPrototypeOf$6) setPrototypeOf$6($AggregateError, $Error);
	else copyConstructorProperties$2($AggregateError, $Error, { name: true });
	var AggregateErrorPrototype = $AggregateError.prototype = create$a($Error.prototype, {
	  constructor: createPropertyDescriptor$6(1, $AggregateError),
	  message: createPropertyDescriptor$6(1, ''),
	  name: createPropertyDescriptor$6(1, 'AggregateError')
	});
	$$13({ global: true, constructor: true, arity: 2 }, {
	  AggregateError: $AggregateError
	});

	var addToUnscopables$1 = function () {  };

	var global$D = global$M;
	var isCallable$p = isCallable$A;
	var WeakMap$4 = global$D.WeakMap;
	var weakMapBasicDetection = isCallable$p(WeakMap$4) && /native code/.test(String(WeakMap$4));

	var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
	var global$C = global$M;
	var isObject$j = isObject$p;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
	var hasOwn$p = hasOwnProperty_1$1;
	var shared$8 = sharedStore$1;
	var sharedKey$3 = sharedKey$6;
	var hiddenKeys$6 = hiddenKeys$a;
	var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
	var TypeError$a = global$C.TypeError;
	var WeakMap$3 = global$C.WeakMap;
	var set$9, get$4, has$5;
	var enforce$1 = function (it) {
	  return has$5(it) ? get$4(it) : set$9(it, {});
	};
	var getterFor$1 = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$j(it) || (state = get$4(it)).type !== TYPE) {
	      throw new TypeError$a('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};
	if (NATIVE_WEAK_MAP$1 || shared$8.state) {
	  var store$5 = shared$8.state || (shared$8.state = new WeakMap$3());
	  store$5.get = store$5.get;
	  store$5.has = store$5.has;
	  store$5.set = store$5.set;
	  set$9 = function (it, metadata) {
	    if (store$5.has(it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    store$5.set(it, metadata);
	    return metadata;
	  };
	  get$4 = function (it) {
	    return store$5.get(it) || {};
	  };
	  has$5 = function (it) {
	    return store$5.has(it);
	  };
	} else {
	  var STATE$1 = sharedKey$3('state');
	  hiddenKeys$6[STATE$1] = true;
	  set$9 = function (it, metadata) {
	    if (hasOwn$p(it, STATE$1)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    createNonEnumerableProperty$7(it, STATE$1, metadata);
	    return metadata;
	  };
	  get$4 = function (it) {
	    return hasOwn$p(it, STATE$1) ? it[STATE$1] : {};
	  };
	  has$5 = function (it) {
	    return hasOwn$p(it, STATE$1);
	  };
	}
	var internalState$1 = {
	  set: set$9,
	  get: get$4,
	  has: has$5,
	  enforce: enforce$1,
	  getterFor: getterFor$1
	};

	var DESCRIPTORS$g = descriptors$1;
	var hasOwn$o = hasOwnProperty_1$1;
	var FunctionPrototype$5 = Function.prototype;
	var getDescriptor$1 = DESCRIPTORS$g && Object.getOwnPropertyDescriptor;
	var EXISTS$2 = hasOwn$o(FunctionPrototype$5, 'name');
	var PROPER$1 = EXISTS$2 && (function something() {  }).name === 'something';
	var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$g || (DESCRIPTORS$g && getDescriptor$1(FunctionPrototype$5, 'name').configurable));
	var functionName$1 = {
	  EXISTS: EXISTS$2,
	  PROPER: PROPER$1,
	  CONFIGURABLE: CONFIGURABLE$2
	};

	var createNonEnumerableProperty$6 = createNonEnumerableProperty$c;
	var defineBuiltIn$6 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$6(target, key, value);
	  return target;
	};

	var fails$u = fails$E;
	var isCallable$o = isCallable$A;
	var isObject$i = isObject$p;
	var create$9 = objectCreate;
	var getPrototypeOf$7 = objectGetPrototypeOf;
	var defineBuiltIn$5 = defineBuiltIn$6;
	var wellKnownSymbol$m = wellKnownSymbol$t;
	var ITERATOR$4 = wellKnownSymbol$m('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
	if ([].keys) {
	  arrayIterator = [].keys();
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$7(getPrototypeOf$7(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}
	var NEW_ITERATOR_PROTOTYPE = !isObject$i(IteratorPrototype$1) || fails$u(function () {
	  var test = {};
	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$9(IteratorPrototype$1);
	if (!isCallable$o(IteratorPrototype$1[ITERATOR$4])) {
	  defineBuiltIn$5(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}
	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$4 = toStringTagSupport$1;
	var classof$c = classof$f;
	var objectToString$1 = TO_STRING_TAG_SUPPORT$4 ? {}.toString : function toString() {
	  return '[object ' + classof$c(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT$3 = toStringTagSupport$1;
	var defineProperty$h = objectDefineProperty$1.f;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
	var hasOwn$n = hasOwnProperty_1$1;
	var toString$b = objectToString$1;
	var wellKnownSymbol$l = wellKnownSymbol$t;
	var TO_STRING_TAG$2 = wellKnownSymbol$l('toStringTag');
	var setToStringTag$8 = function (it, TAG, STATIC, SET_METHOD) {
	  var target = STATIC ? it : it && it.prototype;
	  if (target) {
	    if (!hasOwn$n(target, TO_STRING_TAG$2)) {
	      defineProperty$h(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT$3) {
	      createNonEnumerableProperty$5(target, 'toString', toString$b);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$8 = objectCreate;
	var createPropertyDescriptor$5 = createPropertyDescriptor$a;
	var setToStringTag$7 = setToStringTag$8;
	var Iterators$4 = iterators;
	var returnThis$1 = function () { return this; };
	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$8(IteratorPrototype, { next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$7(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$12 = _export$1;
	var call$k = functionCall$1;
	var FunctionName = functionName$1;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf$6 = objectGetPrototypeOf;
	var setToStringTag$6 = setToStringTag$8;
	var defineBuiltIn$4 = defineBuiltIn$6;
	var wellKnownSymbol$k = wellKnownSymbol$t;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	FunctionName.CONFIGURABLE;
	IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$k('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';
	var returnThis = function () { return this; };
	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);
	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }
	    return function () { return new IteratorConstructor(this); };
	  };
	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$6(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      setToStringTag$6(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$3[TO_STRING_TAG] = returnThis;
	    }
	  }
	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$k(nativeIterator, this); };
	    }
	  }
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$12({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }
	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn$4(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$3[NAME] = defaultIterator;
	  return methods;
	};

	var createIterResultObject$3 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$8 = toIndexedObject$d;
	var addToUnscopables = addToUnscopables$1;
	var Iterators$2 = iterators;
	var InternalStateModule$6 = internalState$1;
	var defineProperty$g = objectDefineProperty$1.f;
	var defineIterator$2 = iteratorDefine;
	var createIterResultObject$2 = createIterResultObject$3;
	var IS_PURE$2 = isPure;
	var DESCRIPTORS$f = descriptors$1;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$5 = InternalStateModule$6.set;
	var getInternalState$3 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);
	defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$5(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$8(iterated),
	    index: 0,
	    kind: kind
	  });
	}, function () {
	  var state = getInternalState$3(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$2(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$2(index, false);
	    case 'values': return createIterResultObject$2(target[index], false);
	  } return createIterResultObject$2([index, target[index]], false);
	}, 'values');
	var values = Iterators$2.Arguments = Iterators$2.Array;
	addToUnscopables();
	addToUnscopables();
	addToUnscopables();
	if (!IS_PURE$2 && DESCRIPTORS$f && values.name !== 'values') try {
	  defineProperty$g(values, 'name', { value: 'values' });
	} catch (error) {  }

	var global$B = global$M;
	var classof$b = classofRaw$4;
	var engineIsNode = classof$b(global$B.process) === 'process';

	var defineProperty$f = objectDefineProperty$1;
	var defineBuiltInAccessor$3 = function (target, name, descriptor) {
	  return defineProperty$f.f(target, name, descriptor);
	};

	var getBuiltIn$g = getBuiltIn$k;
	var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
	var wellKnownSymbol$j = wellKnownSymbol$t;
	var DESCRIPTORS$e = descriptors$1;
	var SPECIES$5 = wellKnownSymbol$j('species');
	var setSpecies$2 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$g(CONSTRUCTOR_NAME);
	  if (DESCRIPTORS$e && Constructor && !Constructor[SPECIES$5]) {
	    defineBuiltInAccessor$2(Constructor, SPECIES$5, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var isPrototypeOf$c = objectIsPrototypeOf$1;
	var $TypeError$i = TypeError;
	var anInstance$3 = function (it, Prototype) {
	  if (isPrototypeOf$c(Prototype, it)) return it;
	  throw new $TypeError$i('Incorrect invocation');
	};

	var uncurryThis$v = functionUncurryThis$1;
	var isCallable$n = isCallable$A;
	var store$4 = sharedStore$1;
	var functionToString$2 = uncurryThis$v(Function.toString);
	if (!isCallable$n(store$4.inspectSource)) {
	  store$4.inspectSource = function (it) {
	    return functionToString$2(it);
	  };
	}
	var inspectSource$5 = store$4.inspectSource;

	var uncurryThis$u = functionUncurryThis$1;
	var fails$t = fails$E;
	var isCallable$m = isCallable$A;
	var classof$a = classof$f;
	var getBuiltIn$f = getBuiltIn$k;
	var inspectSource$4 = inspectSource$5;
	var noop = function () {  };
	var empty = [];
	var construct$7 = getBuiltIn$f('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$u(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$m(argument)) return false;
	  try {
	    construct$7(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$m(argument)) return false;
	  switch (classof$a(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$4(argument));
	  } catch (error) {
	    return true;
	  }
	};
	isConstructorLegacy.sham = true;
	var isConstructor$3 = !construct$7 || fails$t(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor$2 = isConstructor$3;
	var tryToString$4 = tryToString$8;
	var $TypeError$h = TypeError;
	var aConstructor$3 = function (argument) {
	  if (isConstructor$2(argument)) return argument;
	  throw new $TypeError$h(tryToString$4(argument) + ' is not a constructor');
	};

	var anObject$7 = anObject$g;
	var aConstructor$2 = aConstructor$3;
	var isNullOrUndefined$4 = isNullOrUndefined$8;
	var wellKnownSymbol$i = wellKnownSymbol$t;
	var SPECIES$4 = wellKnownSymbol$i('species');
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$7(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$4(S = anObject$7(C)[SPECIES$4]) ? defaultConstructor : aConstructor$2(S);
	};

	var uncurryThis$t = functionUncurryThis$1;
	var arraySlice$6 = uncurryThis$t([].slice);

	var $TypeError$g = TypeError;
	var validateArgumentsLength$2 = function (passed, required) {
	  if (passed < required) throw new $TypeError$g('Not enough arguments');
	  return passed;
	};

	var userAgent$3 = engineUserAgent$1;
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$3);

	var global$A = global$M;
	var apply$4 = functionApply;
	var bind$q = functionBindContext;
	var isCallable$l = isCallable$A;
	var hasOwn$m = hasOwnProperty_1$1;
	var fails$s = fails$E;
	var html = html$2;
	var arraySlice$5 = arraySlice$6;
	var createElement$1 = documentCreateElement$2;
	var validateArgumentsLength$1 = validateArgumentsLength$2;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$3 = engineIsNode;
	var set$8 = global$A.setImmediate;
	var clear = global$A.clearImmediate;
	var process$4 = global$A.process;
	var Dispatch = global$A.Dispatch;
	var Function$2 = global$A.Function;
	var MessageChannel = global$A.MessageChannel;
	var String$3 = global$A.String;
	var counter = 0;
	var queue$2 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel, port;
	fails$s(function () {
	  $location = global$A.location;
	});
	var run = function (id) {
	  if (hasOwn$m(queue$2, id)) {
	    var fn = queue$2[id];
	    delete queue$2[id];
	    fn();
	  }
	};
	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};
	var eventListener = function (event) {
	  run(event.data);
	};
	var globalPostMessageDefer = function (id) {
	  global$A.postMessage(String$3(id), $location.protocol + '//' + $location.host);
	};
	if (!set$8 || !clear) {
	  set$8 = function setImmediate(handler) {
	    validateArgumentsLength$1(arguments.length, 1);
	    var fn = isCallable$l(handler) ? handler : Function$2(handler);
	    var args = arraySlice$5(arguments, 1);
	    queue$2[++counter] = function () {
	      apply$4(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$2[id];
	  };
	  if (IS_NODE$3) {
	    defer = function (id) {
	      process$4.nextTick(runner(id));
	    };
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = eventListener;
	    defer = bind$q(port.postMessage, port);
	  } else if (
	    global$A.addEventListener &&
	    isCallable$l(global$A.postMessage) &&
	    !global$A.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails$s(globalPostMessageDefer)
	  ) {
	    defer = globalPostMessageDefer;
	    global$A.addEventListener('message', eventListener, false);
	  } else if (ONREADYSTATECHANGE in createElement$1('script')) {
	    defer = function (id) {
	      html.appendChild(createElement$1('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}
	var task$1 = {
	  set: set$8,
	  clear: clear
	};

	var Queue$2 = function () {
	  this.head = null;
	  this.tail = null;
	};
	Queue$2.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    var tail = this.tail;
	    if (tail) tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      var next = this.head = entry.next;
	      if (next === null) this.tail = null;
	      return entry.item;
	    }
	  }
	};
	var queue$1 = Queue$2;

	var userAgent$2 = engineUserAgent$1;
	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$2) && typeof Pebble != 'undefined';

	var userAgent$1 = engineUserAgent$1;
	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

	var global$z = global$M;
	var bind$p = functionBindContext;
	var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
	var macrotask = task$1.set;
	var Queue$1 = queue$1;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$2 = engineIsNode;
	var MutationObserver = global$z.MutationObserver || global$z.WebKitMutationObserver;
	var document$3 = global$z.document;
	var process$3 = global$z.process;
	var Promise$1 = global$z.Promise;
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global$z, 'queueMicrotask');
	var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
	var notify$1, toggle, node, promise$6, then;
	if (!microtask$1) {
	  var queue = new Queue$1();
	  var flush = function () {
	    var parent, fn;
	    if (IS_NODE$2 && (parent = process$3.domain)) parent.exit();
	    while (fn = queue.get()) try {
	      fn();
	    } catch (error) {
	      if (queue.head) notify$1();
	      throw error;
	    }
	    if (parent) parent.enter();
	  };
	  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$3) {
	    toggle = true;
	    node = document$3.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    promise$6 = Promise$1.resolve(undefined);
	    promise$6.constructor = Promise$1;
	    then = bind$p(promise$6.then, promise$6);
	    notify$1 = function () {
	      then(flush);
	    };
	  } else if (IS_NODE$2) {
	    notify$1 = function () {
	      process$3.nextTick(flush);
	    };
	  } else {
	    macrotask = bind$p(macrotask, global$z);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }
	  microtask$1 = function (fn) {
	    if (!queue.head) notify$1();
	    queue.add(fn);
	  };
	}
	var microtask_1 = microtask$1;

	var hostReportErrors$1 = function (a, b) {
	  try {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  } catch (error) {  }
	};

	var perform$6 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var global$y = global$M;
	var promiseNativeConstructor = global$y.Promise;

	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$1 = engineIsNode;
	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
	  && typeof window == 'object'
	  && typeof document == 'object';

	var global$x = global$M;
	var NativePromiseConstructor$5 = promiseNativeConstructor;
	var isCallable$k = isCallable$A;
	var isForced$2 = isForced_1$1;
	var inspectSource$3 = inspectSource$5;
	var wellKnownSymbol$h = wellKnownSymbol$t;
	var IS_BROWSER = engineIsBrowser;
	var IS_DENO = engineIsDeno;
	var V8_VERSION$3 = engineV8Version$1;
	var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
	var SPECIES$3 = wellKnownSymbol$h('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$k(global$x.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$2('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$3(NativePromiseConstructor$5);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$3 === 66) return true;
	  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
	  if (!V8_VERSION$3 || V8_VERSION$3 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    var promise = new NativePromiseConstructor$5(function (resolve) { resolve(1); });
	    var FakePromise = function (exec) {
	      exec(function () {  }, function () {  });
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES$3] = FakePromise;
	    SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});
	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$e = aCallable$j;
	var $TypeError$f = TypeError;
	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError$f('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$e(resolve);
	  this.reject = aCallable$e(reject);
	};
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$11 = _export$1;
	var IS_NODE = engineIsNode;
	var global$w = global$M;
	var call$j = functionCall$1;
	var defineBuiltIn$3 = defineBuiltIn$6;
	var setToStringTag$5 = setToStringTag$8;
	var setSpecies$1 = setSpecies$2;
	var aCallable$d = aCallable$j;
	var isCallable$j = isCallable$A;
	var isObject$h = isObject$p;
	var anInstance$2 = anInstance$3;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask_1;
	var hostReportErrors = hostReportErrors$1;
	var perform$5 = perform$6;
	var Queue = queue$1;
	var InternalStateModule$5 = internalState$1;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$7 = newPromiseCapability$2;
	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$5.getterFor(PROMISE);
	var setInternalState$4 = InternalStateModule$5.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var PromiseConstructor = NativePromiseConstructor$4;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$9 = global$w.TypeError;
	var document$2 = global$w.document;
	var process$2 = global$w.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$7.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global$w.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;
	var isThenable = function (it) {
	  var then;
	  return isObject$h(it) && isCallable$j(then = it.then) ? then : false;
	};
	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state === FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value);
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(new TypeError$9('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$j(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};
	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};
	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$2.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$w.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$w['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};
	var onUnhandled = function (state) {
	  call$j(task, global$w, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$5(function () {
	        if (IS_NODE) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};
	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};
	var onHandleUnhandled = function (state) {
	  call$j(task, global$w, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process$2.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};
	var bind$o = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};
	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};
	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw new TypeError$9("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          call$j(then, value,
	            bind$o(internalResolve, wrapper, state),
	            bind$o(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  PromiseConstructor = function Promise(executor) {
	    anInstance$2(this, PromisePrototype);
	    aCallable$d(executor);
	    call$j(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$o(internalResolve, state), bind$o(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;
	  Internal = function Promise(executor) {
	    setInternalState$4(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$j(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$j(onRejected) && onRejected;
	    reaction.domain = IS_NODE ? process$2.domain : undefined;
	    if (state.state === PENDING) state.reactions.add(reaction);
	    else microtask(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$o(internalResolve, state);
	    this.reject = bind$o(internalReject, state);
	  };
	  newPromiseCapabilityModule$7.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	$$11({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});
	setToStringTag$5(PromiseConstructor, PROMISE, false, true);
	setSpecies$1(PROMISE);

	var wellKnownSymbol$g = wellKnownSymbol$t;
	var ITERATOR$2 = wellKnownSymbol$g('iterator');
	var SAFE_CLOSING = false;
	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) {  }
	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; }
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) {  }
	  return ITERATION_SUPPORT;
	};

	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
	  NativePromiseConstructor$3.all(iterable).then(undefined, function () {  });
	});

	var $$10 = _export$1;
	var call$i = functionCall$1;
	var aCallable$c = aCallable$j;
	var newPromiseCapabilityModule$6 = newPromiseCapability$2;
	var perform$4 = perform$6;
	var iterate$j = iterate$l;
	var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;
	$$10({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$6.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$4(function () {
	      var $promiseResolve = aCallable$c(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$j(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$i($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$$ = _export$1;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$2 = promiseNativeConstructor;
	NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
	$$$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	var $$_ = _export$1;
	var call$h = functionCall$1;
	var aCallable$b = aCallable$j;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$3 = perform$6;
	var iterate$i = iterate$l;
	var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;
	$$_({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$5.f(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$b(C.resolve);
	      iterate$i(iterable, function (promise) {
	        call$h($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$Z = _export$1;
	var call$g = functionCall$1;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
	$$Z({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$4.f(this);
	    call$g(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	var anObject$6 = anObject$g;
	var isObject$g = isObject$p;
	var newPromiseCapability = newPromiseCapability$2;
	var promiseResolve$3 = function (C, x) {
	  anObject$6(C);
	  if (isObject$g(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$Y = _export$1;
	var getBuiltIn$e = getBuiltIn$k;
	var IS_PURE$1 = isPure;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$2 = promiseResolve$3;
	var PromiseConstructorWrapper = getBuiltIn$e('Promise');
	var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;
	$$Y({ target: 'Promise', stat: true, forced: IS_PURE$1  }, {
	  resolve: function resolve(x) {
	    return promiseResolve$2(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
	  }
	});

	var $$X = _export$1;
	var call$f = functionCall$1;
	var aCallable$a = aCallable$j;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$2 = perform$6;
	var iterate$h = iterate$l;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
	$$X({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$3.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var promiseResolve = aCallable$a(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$h(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$f(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$W = _export$1;
	var call$e = functionCall$1;
	var aCallable$9 = aCallable$j;
	var getBuiltIn$d = getBuiltIn$k;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$1 = perform$6;
	var iterate$g = iterate$l;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
	var PROMISE_ANY_ERROR = 'No one promise resolved';
	$$W({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$d('AggregateError');
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aCallable$9(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate$g(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        call$e(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$V = _export$1;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	$$V({ target: 'Promise', stat: true }, {
	  withResolvers: function withResolvers() {
	    var promiseCapability = newPromiseCapabilityModule$1.f(this);
	    return {
	      promise: promiseCapability.promise,
	      resolve: promiseCapability.resolve,
	      reject: promiseCapability.reject
	    };
	  }
	});

	var $$U = _export$1;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails$r = fails$E;
	var getBuiltIn$c = getBuiltIn$k;
	var isCallable$i = isCallable$A;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve$1 = promiseResolve$3;
	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
	var NON_GENERIC = !!NativePromiseConstructor && fails$r(function () {
	  NativePromisePrototype['finally'].call({ then: function () {  } }, function () {  });
	});
	$$U({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$c('Promise'));
	    var isFunction = isCallable$i(onFinally);
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve$1(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve$1(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var uncurryThis$s = functionUncurryThis$1;
	var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
	var toString$a = toString$d;
	var requireObjectCoercible$6 = requireObjectCoercible$9;
	var charAt$2 = uncurryThis$s(''.charAt);
	var charCodeAt$1 = uncurryThis$s(''.charCodeAt);
	var stringSlice$1 = uncurryThis$s(''.slice);
	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$a(requireObjectCoercible$6($this));
	    var position = toIntegerOrInfinity$3(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$1(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};
	var stringMultibyte = {
	  codeAt: createMethod$3(false),
	  charAt: createMethod$3(true)
	};

	var charAt$1 = stringMultibyte.charAt;
	var toString$9 = toString$d;
	var InternalStateModule$4 = internalState$1;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$3;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalState$2 = InternalStateModule$4.getterFor(STRING_ITERATOR);
	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$3(this, {
	    type: STRING_ITERATOR,
	    string: toString$9(iterated),
	    index: 0
	  });
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$1(undefined, true);
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return createIterResultObject$1(point, false);
	});

	var path$g = path$j;
	var promise$5 = path$g.Promise;

	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$v = global$M;
	var setToStringTag$4 = setToStringTag$8;
	var Iterators$1 = iterators;
	for (var COLLECTION_NAME in DOMIterables$1) {
	  setToStringTag$4(global$v[COLLECTION_NAME], COLLECTION_NAME);
	  Iterators$1[COLLECTION_NAME] = Iterators$1.Array;
	}

	var parent$Y = promise$5;
	var promise$4 = parent$Y;

	var parent$X = promise$4;
	var promise$3 = parent$X;

	var $$T = _export$1;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$6;
	$$T({ target: 'Promise', stat: true, forced: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent$W = promise$3;
	var promise$2 = parent$W;

	var promise$1 = promise$2;
	var _Promise = promise$1;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }
	  if (info.done) {
	    resolve(value);
	  } else {
	    _Promise.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new _Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);
	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }
	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }
	      _next(undefined);
	    });
	  };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var defineProperty$e = {exports: {}};

	var $$S = _export$1;
	var DESCRIPTORS$d = descriptors$1;
	var defineProperty$d = objectDefineProperty$1.f;
	$$S({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$d, sham: !DESCRIPTORS$d }, {
	  defineProperty: defineProperty$d
	});

	var path$f = path$j;
	var Object$6 = path$f.Object;
	var defineProperty$c = defineProperty$e.exports = function defineProperty(it, key, desc) {
	  return Object$6.defineProperty(it, key, desc);
	};
	if (Object$6.defineProperty.sham) defineProperty$c.sham = true;

	var parent$V = defineProperty$e.exports;
	var defineProperty$b = parent$V;

	var parent$U = defineProperty$b;
	var defineProperty$a = parent$U;

	var parent$T = defineProperty$a;
	var defineProperty$9 = parent$T;

	var defineProperty$8 = defineProperty$9;
	var _Object$defineProperty = defineProperty$8;

	var classof$9 = classofRaw$4;
	var isArray$8 = Array.isArray || function isArray(argument) {
	  return classof$9(argument) === 'Array';
	};

	var $TypeError$e = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var doesNotExceedSafeInteger$2 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$e('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey$4 = toPropertyKey$7;
	var definePropertyModule$3 = objectDefineProperty$1;
	var createPropertyDescriptor$4 = createPropertyDescriptor$a;
	var createProperty$3 = function (object, key, value) {
	  var propertyKey = toPropertyKey$4(key);
	  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
	  else object[propertyKey] = value;
	};

	var isArray$7 = isArray$8;
	var isConstructor$1 = isConstructor$3;
	var isObject$f = isObject$p;
	var wellKnownSymbol$f = wellKnownSymbol$t;
	var SPECIES$2 = wellKnownSymbol$f('species');
	var $Array$3 = Array;
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$7(originalArray)) {
	    C = originalArray.constructor;
	    if (isConstructor$1(C) && (C === $Array$3 || isArray$7(C.prototype))) C = undefined;
	    else if (isObject$f(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$3 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$q = fails$E;
	var wellKnownSymbol$e = wellKnownSymbol$t;
	var V8_VERSION$2 = engineV8Version$1;
	var SPECIES$1 = wellKnownSymbol$e('species');
	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  return V8_VERSION$2 >= 51 || !fails$q(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$R = _export$1;
	var fails$p = fails$E;
	var isArray$6 = isArray$8;
	var isObject$e = isObject$p;
	var toObject$9 = toObject$c;
	var lengthOfArrayLike$6 = lengthOfArrayLike$9;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
	var createProperty$2 = createProperty$3;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$d = wellKnownSymbol$t;
	var V8_VERSION$1 = engineV8Version$1;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$d('isConcatSpreadable');
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$p(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var isConcatSpreadable = function (O) {
	  if (!isObject$e(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};
	var FORCED$5 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');
	$$R({ target: 'Array', proto: true, arity: 1, forced: FORCED$5 }, {
	  concat: function concat(arg) {
	    var O = toObject$9(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$6(E);
	        doesNotExceedSafeInteger$1(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$1(n + 1);
	        createProperty$2(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var objectGetOwnPropertyNamesExternal = {};

	var toAbsoluteIndex$3 = toAbsoluteIndex$5;
	var lengthOfArrayLike$5 = lengthOfArrayLike$9;
	var createProperty$1 = createProperty$3;
	var $Array$2 = Array;
	var max$3 = Math.max;
	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike$5(O);
	  var k = toAbsoluteIndex$3(start, length);
	  var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
	  var result = $Array$2(max$3(fin - k, 0));
	  var n = 0;
	  for (; k < fin; k++, n++) createProperty$1(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	var classof$8 = classofRaw$4;
	var toIndexedObject$7 = toIndexedObject$d;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames$1.f;
	var arraySlice$4 = arraySliceSimple;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$4(windowNames);
	  }
	};
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$8(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$7(it));
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$c = wellKnownSymbol$t;
	wellKnownSymbolWrapped.f = wellKnownSymbol$c;

	var path$e = path$j;
	var hasOwn$l = hasOwnProperty_1$1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$7 = objectDefineProperty$1.f;
	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$e.Symbol || (path$e.Symbol = {});
	  if (!hasOwn$l(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$d = functionCall$1;
	var getBuiltIn$b = getBuiltIn$k;
	var wellKnownSymbol$b = wellKnownSymbol$t;
	var defineBuiltIn$2 = defineBuiltIn$6;
	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$b('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');
	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    defineBuiltIn$2(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$d(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var bind$n = functionBindContext;
	var uncurryThis$r = functionUncurryThis$1;
	var IndexedObject$3 = indexedObject$1;
	var toObject$8 = toObject$c;
	var lengthOfArrayLike$4 = lengthOfArrayLike$9;
	var arraySpeciesCreate = arraySpeciesCreate$2;
	var push$c = uncurryThis$r([].push);
	var createMethod$2 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$8($this);
	    var self = IndexedObject$3(O);
	    var length = lengthOfArrayLike$4(self);
	    var boundFunction = bind$n(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result;
	        else if (result) switch (TYPE) {
	          case 3: return true;
	          case 5: return value;
	          case 6: return index;
	          case 2: push$c(target, value);
	        } else switch (TYPE) {
	          case 4: return false;
	          case 7: push$c(target, value);
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};
	var arrayIteration = {
	  forEach: createMethod$2(0),
	  map: createMethod$2(1),
	  filter: createMethod$2(2),
	  some: createMethod$2(3),
	  every: createMethod$2(4),
	  find: createMethod$2(5),
	  findIndex: createMethod$2(6),
	  filterReject: createMethod$2(7)
	};

	var $$Q = _export$1;
	var global$u = global$M;
	var call$c = functionCall$1;
	var uncurryThis$q = functionUncurryThis$1;
	var DESCRIPTORS$c = descriptors$1;
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;
	var fails$o = fails$E;
	var hasOwn$k = hasOwnProperty_1$1;
	var isPrototypeOf$b = objectIsPrototypeOf$1;
	var anObject$5 = anObject$g;
	var toIndexedObject$6 = toIndexedObject$d;
	var toPropertyKey$3 = toPropertyKey$7;
	var $toString = toString$d;
	var createPropertyDescriptor$3 = createPropertyDescriptor$a;
	var nativeObjectCreate = objectCreate;
	var objectKeys$3 = objectKeys$5;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames$1;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols$1;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
	var definePropertyModule$2 = objectDefineProperty$1;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable$1;
	var defineBuiltIn$1 = defineBuiltIn$6;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
	var shared$7 = shared$b.exports;
	var sharedKey$2 = sharedKey$6;
	var hiddenKeys$5 = hiddenKeys$a;
	var uid$4 = uid$7;
	var wellKnownSymbol$a = wellKnownSymbol$t;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$l = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$3 = setToStringTag$8;
	var InternalStateModule$3 = internalState$1;
	var $forEach$1 = arrayIteration.forEach;
	var HIDDEN = sharedKey$2('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState$2 = InternalStateModule$3.set;
	var getInternalState$1 = InternalStateModule$3.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global$u.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var RangeError$1 = global$u.RangeError;
	var TypeError$8 = global$u.TypeError;
	var QObject = global$u.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule$2.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$2.f;
	var push$b = uncurryThis$q([].push);
	var AllSymbols = shared$7('symbols');
	var ObjectPrototypeSymbols = shared$7('op-symbols');
	var WellKnownSymbolsStore$2 = shared$7('wks');
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	var fallbackDefineProperty = function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	};
	var setSymbolDescriptor = DESCRIPTORS$c && fails$o(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty;
	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$c) symbol.description = description;
	  return symbol;
	};
	var $defineProperty$4 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty$4(ObjectPrototypeSymbols, P, Attributes);
	  anObject$5(O);
	  var key = toPropertyKey$3(P);
	  anObject$5(Attributes);
	  if (hasOwn$k(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$k(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$k(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};
	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$5(O);
	  var properties = toIndexedObject$6(Properties);
	  var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$c || call$c($propertyIsEnumerable$1, properties, key)) $defineProperty$4(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$3(V);
	  var enumerable = call$c(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$1 && hasOwn$k(AllSymbols, P) && !hasOwn$k(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$k(this, P) || !hasOwn$k(AllSymbols, P) || hasOwn$k(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};
	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$6(O);
	  var key = toPropertyKey$3(P);
	  if (it === ObjectPrototype$1 && hasOwn$k(AllSymbols, key) && !hasOwn$k(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$k(AllSymbols, key) && !(hasOwn$k(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$6(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$k(AllSymbols, key) && !hasOwn$k(hiddenKeys$5, key)) push$b(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$6(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$k(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$k(ObjectPrototype$1, key))) {
	      push$b(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};
	if (!NATIVE_SYMBOL$5) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$b(SymbolPrototype, this)) throw new TypeError$8('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$4(description);
	    var setter = function (value) {
	      var $this = this === undefined ? global$u : this;
	      if ($this === ObjectPrototype$1) call$c(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$k($this, HIDDEN) && hasOwn$k($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$3(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$1)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$c && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };
	  SymbolPrototype = $Symbol[PROTOTYPE];
	  defineBuiltIn$1(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });
	  defineBuiltIn$1($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$4(description), description);
	  });
	  propertyIsEnumerableModule$2.f = $propertyIsEnumerable$1;
	  definePropertyModule$2.f = $defineProperty$4;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;
	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$a(name), name);
	  };
	  if (DESCRIPTORS$c) {
	    defineBuiltInAccessor$1(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	  }
	}
	$$Q({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$5, sham: !NATIVE_SYMBOL$5 }, {
	  Symbol: $Symbol
	});
	$forEach$1(objectKeys$3(WellKnownSymbolsStore$2), function (name) {
	  defineWellKnownSymbol$l(name);
	});
	$$Q({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});
	$$Q({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5, sham: !DESCRIPTORS$c }, {
	  create: $create,
	  defineProperty: $defineProperty$4,
	  defineProperties: $defineProperties,
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
	});
	$$Q({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  getOwnPropertyNames: $getOwnPropertyNames
	});
	defineSymbolToPrimitive$1();
	setToStringTag$3($Symbol, SYMBOL);
	hiddenKeys$5[HIDDEN] = true;

	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var symbolRegistryDetection = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$P = _export$1;
	var getBuiltIn$a = getBuiltIn$k;
	var hasOwn$j = hasOwnProperty_1$1;
	var toString$8 = toString$d;
	var shared$6 = shared$b.exports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
	var StringToSymbolRegistry = shared$6('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$6('symbol-to-string-registry');
	$$P({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$8(key);
	    if (hasOwn$j(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$a('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$O = _export$1;
	var hasOwn$i = hasOwnProperty_1$1;
	var isSymbol$5 = isSymbol$8;
	var tryToString$3 = tryToString$8;
	var shared$5 = shared$b.exports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
	var SymbolToStringRegistry = shared$5('symbol-to-string-registry');
	$$O({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$5(sym)) throw new TypeError(tryToString$3(sym) + ' is not a symbol');
	    if (hasOwn$i(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var uncurryThis$p = functionUncurryThis$1;
	var isArray$5 = isArray$8;
	var isCallable$h = isCallable$A;
	var classof$7 = classofRaw$4;
	var toString$7 = toString$d;
	var push$a = uncurryThis$p([].push);
	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$h(replacer)) return replacer;
	  if (!isArray$5(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$a(keys, element);
	    else if (typeof element == 'number' || classof$7(element) === 'Number' || classof$7(element) === 'String') push$a(keys, toString$7(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$5(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$N = _export$1;
	var getBuiltIn$9 = getBuiltIn$k;
	var apply$3 = functionApply;
	var call$b = functionCall$1;
	var uncurryThis$o = functionUncurryThis$1;
	var fails$n = fails$E;
	var isCallable$g = isCallable$A;
	var isSymbol$4 = isSymbol$8;
	var arraySlice$3 = arraySlice$6;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var $String = String;
	var $stringify = getBuiltIn$9('JSON', 'stringify');
	var exec$1 = uncurryThis$o(/./.exec);
	var charAt = uncurryThis$o(''.charAt);
	var charCodeAt = uncurryThis$o(''.charCodeAt);
	var replace$1 = uncurryThis$o(''.replace);
	var numberToString = uncurryThis$o(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$n(function () {
	  var symbol = getBuiltIn$9('Symbol')('stringify detection');
	  return $stringify([symbol]) !== '[null]'
	    || $stringify({ a: symbol }) !== '{}'
	    || $stringify(Object(symbol)) !== '{}';
	});
	var ILL_FORMED_UNICODE = fails$n(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});
	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice$3(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$g($replacer) && (it === undefined || isSymbol$4(it))) return;
	  args[1] = function (key, value) {
	    if (isCallable$g($replacer)) value = call$b($replacer, this, $String(key), value);
	    if (!isSymbol$4(value)) return value;
	  };
	  return apply$3($stringify, null, args);
	};
	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);
	  if ((exec$1(low, match) && !exec$1(hi, next)) || (exec$1(hi, match) && !exec$1(low, prev))) {
	    return '\\u' + numberToString(charCodeAt(match, 0), 16);
	  } return match;
	};
	if ($stringify) {
	  $$N({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$3(arguments);
	      var result = apply$3(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$M = _export$1;
	var NATIVE_SYMBOL$2 = symbolConstructorDetection;
	var fails$m = fails$E;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols$1;
	var toObject$7 = toObject$c;
	var FORCED$4 = !NATIVE_SYMBOL$2 || fails$m(function () { getOwnPropertySymbolsModule$2.f(1); });
	$$M({ target: 'Object', stat: true, forced: FORCED$4 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$7(it)) : [];
	  }
	});

	var defineWellKnownSymbol$k = wellKnownSymbolDefine;
	defineWellKnownSymbol$k('asyncIterator');

	var defineWellKnownSymbol$j = wellKnownSymbolDefine;
	defineWellKnownSymbol$j('hasInstance');

	var defineWellKnownSymbol$i = wellKnownSymbolDefine;
	defineWellKnownSymbol$i('isConcatSpreadable');

	var defineWellKnownSymbol$h = wellKnownSymbolDefine;
	defineWellKnownSymbol$h('iterator');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine;
	defineWellKnownSymbol$g('match');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine;
	defineWellKnownSymbol$f('matchAll');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine;
	defineWellKnownSymbol$e('replace');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine;
	defineWellKnownSymbol$d('search');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine;
	defineWellKnownSymbol$c('species');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine;
	defineWellKnownSymbol$b('split');

	var defineWellKnownSymbol$a = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;
	defineWellKnownSymbol$a('toPrimitive');
	defineSymbolToPrimitive();

	var getBuiltIn$8 = getBuiltIn$k;
	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
	var setToStringTag$2 = setToStringTag$8;
	defineWellKnownSymbol$9('toStringTag');
	setToStringTag$2(getBuiltIn$8('Symbol'), 'Symbol');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;
	defineWellKnownSymbol$8('unscopables');

	var global$t = global$M;
	var setToStringTag$1 = setToStringTag$8;
	setToStringTag$1(global$t.JSON, 'JSON', true);

	var path$d = path$j;
	var symbol$4 = path$d.Symbol;

	var parent$S = symbol$4;
	var symbol$3 = parent$S;

	var wellKnownSymbol$9 = wellKnownSymbol$t;
	var defineProperty$6 = objectDefineProperty$1.f;
	var METADATA$1 = wellKnownSymbol$9('metadata');
	var FunctionPrototype$4 = Function.prototype;
	if (FunctionPrototype$4[METADATA$1] === undefined) {
	  defineProperty$6(FunctionPrototype$4, METADATA$1, {
	    value: null
	  });
	}

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
	defineWellKnownSymbol$7('asyncDispose');

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
	defineWellKnownSymbol$6('dispose');

	var defineWellKnownSymbol$5 = wellKnownSymbolDefine;
	defineWellKnownSymbol$5('metadata');

	var parent$R = symbol$3;
	var symbol$2 = parent$R;

	var getBuiltIn$7 = getBuiltIn$k;
	var uncurryThis$n = functionUncurryThis$1;
	var Symbol$4 = getBuiltIn$7('Symbol');
	var keyFor = Symbol$4.keyFor;
	var thisSymbolValue$1 = uncurryThis$n(Symbol$4.prototype.valueOf);
	var symbolIsRegistered = Symbol$4.isRegisteredSymbol || function isRegisteredSymbol(value) {
	  try {
	    return keyFor(thisSymbolValue$1(value)) !== undefined;
	  } catch (error) {
	    return false;
	  }
	};

	var $$L = _export$1;
	var isRegisteredSymbol$1 = symbolIsRegistered;
	$$L({ target: 'Symbol', stat: true }, {
	  isRegisteredSymbol: isRegisteredSymbol$1
	});

	var shared$4 = shared$b.exports;
	var getBuiltIn$6 = getBuiltIn$k;
	var uncurryThis$m = functionUncurryThis$1;
	var isSymbol$3 = isSymbol$8;
	var wellKnownSymbol$8 = wellKnownSymbol$t;
	var Symbol$3 = getBuiltIn$6('Symbol');
	var $isWellKnownSymbol = Symbol$3.isWellKnownSymbol;
	var getOwnPropertyNames = getBuiltIn$6('Object', 'getOwnPropertyNames');
	var thisSymbolValue = uncurryThis$m(Symbol$3.prototype.valueOf);
	var WellKnownSymbolsStore$1 = shared$4('wks');
	for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$3), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
	  try {
	    var symbolKey = symbolKeys[i];
	    if (isSymbol$3(Symbol$3[symbolKey])) wellKnownSymbol$8(symbolKey);
	  } catch (error) {  }
	}
	var symbolIsWellKnown = function isWellKnownSymbol(value) {
	  if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
	  try {
	    var symbol = thisSymbolValue(value);
	    for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore$1), keysLength = keys.length; j < keysLength; j++) {
	      if (WellKnownSymbolsStore$1[keys[j]] == symbol) return true;
	    }
	  } catch (error) {  }
	  return false;
	};

	var $$K = _export$1;
	var isWellKnownSymbol$1 = symbolIsWellKnown;
	$$K({ target: 'Symbol', stat: true, forced: true }, {
	  isWellKnownSymbol: isWellKnownSymbol$1
	});

	var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
	defineWellKnownSymbol$4('matcher');

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
	defineWellKnownSymbol$3('observable');

	var $$J = _export$1;
	var isRegisteredSymbol = symbolIsRegistered;
	$$J({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
	  isRegistered: isRegisteredSymbol
	});

	var $$I = _export$1;
	var isWellKnownSymbol = symbolIsWellKnown;
	$$I({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
	  isWellKnown: isWellKnownSymbol
	});

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
	defineWellKnownSymbol$2('metadataKey');

	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
	defineWellKnownSymbol$1('patternMatch');

	var defineWellKnownSymbol = wellKnownSymbolDefine;
	defineWellKnownSymbol('replaceAll');

	var parent$Q = symbol$2;
	var symbol$1 = parent$Q;

	var symbol = symbol$1;
	var _Symbol = symbol;

	var WrappedWellKnownSymbolModule$2 = wellKnownSymbolWrapped;
	var iterator$4 = WrappedWellKnownSymbolModule$2.f('iterator');

	var parent$P = iterator$4;
	var iterator$3 = parent$P;

	var parent$O = iterator$3;
	var iterator$2 = parent$O;

	var parent$N = iterator$2;
	var iterator$1 = parent$N;

	var iterator = iterator$1;
	var _Symbol$iterator = iterator;

	function _typeof$1(o) {
	  "@babel/helpers - typeof";
	  return _typeof$1 = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof$1(o);
	}

	var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var toPrimitive$6 = WrappedWellKnownSymbolModule$1.f('toPrimitive');

	var parent$M = toPrimitive$6;
	var toPrimitive$5 = parent$M;

	var parent$L = toPrimitive$5;
	var toPrimitive$4 = parent$L;

	var parent$K = toPrimitive$4;
	var toPrimitive$3 = parent$K;

	var toPrimitive$2 = toPrimitive$3;
	var _Symbol$toPrimitive = toPrimitive$2;

	function _toPrimitive(input, hint) {
	  if (_typeof$1(input) !== "object" || input === null) return input;
	  var prim = input[_Symbol$toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof$1(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof$1(key) === "symbol" ? key : String(key);
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  _Object$defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var regeneratorRuntime$1 = {exports: {}};

	var _typeof = {exports: {}};

	(function (module) {
	var _Symbol = symbol;
	var _Symbol$iterator = iterator;
	function _typeof(o) {
	  "@babel/helpers - typeof";
	  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}(_typeof));
	getDefaultExportFromCjs(_typeof.exports);

	var $$H = _export$1;
	var DESCRIPTORS$b = descriptors$1;
	var create$7 = objectCreate;
	$$H({ target: 'Object', stat: true, sham: !DESCRIPTORS$b }, {
	  create: create$7
	});

	var path$c = path$j;
	var Object$5 = path$c.Object;
	var create$6 = function create(P, D) {
	  return Object$5.create(P, D);
	};

	var parent$J = create$6;
	var create$5 = parent$J;

	var parent$I = create$5;
	var create$4 = parent$I;

	var parent$H = create$4;
	var create$3 = parent$H;

	var create$2 = create$3;
	var _Object$create = create$2;

	var $$G = _export$1;
	var fails$l = fails$E;
	var toObject$6 = toObject$c;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES$3 = fails$l(function () { nativeGetPrototypeOf(1); });
	$$G({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$6(it));
	  }
	});

	var path$b = path$j;
	var getPrototypeOf$5 = path$b.Object.getPrototypeOf;

	var parent$G = getPrototypeOf$5;
	var getPrototypeOf$4 = parent$G;

	var parent$F = getPrototypeOf$4;
	var getPrototypeOf$3 = parent$F;

	var parent$E = getPrototypeOf$3;
	var getPrototypeOf$2 = parent$E;

	var getPrototypeOf$1 = getPrototypeOf$2;
	var _Object$getPrototypeOf = getPrototypeOf$1;

	var fails$k = fails$E;
	var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$k(function () {
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;
	var STRICT_METHOD$1 = arrayMethodIsStrict$3('forEach');
	var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn ) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	var $$F = _export$1;
	var forEach$9 = arrayForEach;
	$$F({ target: 'Array', proto: true, forced: [].forEach !== forEach$9 }, {
	  forEach: forEach$9
	});

	var global$s = global$M;
	var path$a = path$j;
	var getBuiltInPrototypeMethod$b = function (CONSTRUCTOR, METHOD) {
	  var Namespace = path$a[CONSTRUCTOR + 'Prototype'];
	  var pureMethod = Namespace && Namespace[METHOD];
	  if (pureMethod) return pureMethod;
	  var NativeConstructor = global$s[CONSTRUCTOR];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  return NativePrototype && NativePrototype[METHOD];
	};

	var getBuiltInPrototypeMethod$a = getBuiltInPrototypeMethod$b;
	var forEach$8 = getBuiltInPrototypeMethod$a('Array', 'forEach');

	var parent$D = forEach$8;
	var forEach$7 = parent$D;

	var classof$6 = classof$f;
	var hasOwn$h = hasOwnProperty_1$1;
	var isPrototypeOf$a = objectIsPrototypeOf$1;
	var method$8 = forEach$7;
	var ArrayPrototype$8 = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};
	var forEach$6 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$8 || (isPrototypeOf$a(ArrayPrototype$8, it) && own === ArrayPrototype$8.forEach)
	    || hasOwn$h(DOMIterables, classof$6(it)) ? method$8 : own;
	};

	var parent$C = forEach$6;
	var forEach$5 = parent$C;

	var parent$B = forEach$5;
	var forEach$4 = parent$B;

	var forEach$3 = forEach$4;

	var DESCRIPTORS$a = descriptors$1;
	var isArray$4 = isArray$8;
	var $TypeError$d = TypeError;
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$a && !function () {
	  if (this !== undefined) return true;
	  try {
	    Object.defineProperty([], 'length', { writable: false }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();
	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$4(O) && !getOwnPropertyDescriptor$2(O, 'length').writable) {
	    throw new $TypeError$d('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $$E = _export$1;
	var toObject$5 = toObject$c;
	var lengthOfArrayLike$3 = lengthOfArrayLike$9;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
	var fails$j = fails$E;
	var INCORRECT_TO_LENGTH = fails$j(function () {
	  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
	});
	var properErrorOnNonWritableLength = function () {
	  try {
	    Object.defineProperty([], 'length', { writable: false }).push();
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	};
	var FORCED$3 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
	$$E({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
	  push: function push(item) {
	    var O = toObject$5(this);
	    var len = lengthOfArrayLike$3(O);
	    var argCount = arguments.length;
	    doesNotExceedSafeInteger(len + argCount);
	    for (var i = 0; i < argCount; i++) {
	      O[len] = arguments[i];
	      len++;
	    }
	    setArrayLength(O, len);
	    return len;
	  }
	});

	var getBuiltInPrototypeMethod$9 = getBuiltInPrototypeMethod$b;
	var push$9 = getBuiltInPrototypeMethod$9('Array', 'push');

	var isPrototypeOf$9 = objectIsPrototypeOf$1;
	var method$7 = push$9;
	var ArrayPrototype$7 = Array.prototype;
	var push$8 = function (it) {
	  var own = it.push;
	  return it === ArrayPrototype$7 || (isPrototypeOf$9(ArrayPrototype$7, it) && own === ArrayPrototype$7.push) ? method$7 : own;
	};

	var parent$A = push$8;
	var push$7 = parent$A;

	var parent$z = push$7;
	var push$6 = parent$z;

	var parent$y = push$6;
	var push$5 = parent$y;

	var push$4 = push$5;
	var _pushInstanceProperty = push$4;

	var $$D = _export$1;
	var setPrototypeOf$5 = objectSetPrototypeOf;
	$$D({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf$5
	});

	var path$9 = path$j;
	var setPrototypeOf$4 = path$9.Object.setPrototypeOf;

	var parent$x = setPrototypeOf$4;
	var setPrototypeOf$3 = parent$x;

	var parent$w = setPrototypeOf$3;
	var setPrototypeOf$2 = parent$w;

	var parent$v = setPrototypeOf$2;
	var setPrototypeOf$1 = parent$v;

	var setPrototypeOf = setPrototypeOf$1;
	var _Object$setPrototypeOf = setPrototypeOf;

	var $$C = _export$1;
	var uncurryThis$l = functionUncurryThis$1;
	var isArray$3 = isArray$8;
	var nativeReverse = uncurryThis$l([].reverse);
	var test$2 = [1, 2];
	$$C({ target: 'Array', proto: true, forced: String(test$2) === String(test$2.reverse()) }, {
	  reverse: function reverse() {
	    if (isArray$3(this)) this.length = this.length;
	    return nativeReverse(this);
	  }
	});

	var getBuiltInPrototypeMethod$8 = getBuiltInPrototypeMethod$b;
	var reverse$5 = getBuiltInPrototypeMethod$8('Array', 'reverse');

	var isPrototypeOf$8 = objectIsPrototypeOf$1;
	var method$6 = reverse$5;
	var ArrayPrototype$6 = Array.prototype;
	var reverse$4 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$6 || (isPrototypeOf$8(ArrayPrototype$6, it) && own === ArrayPrototype$6.reverse) ? method$6 : own;
	};

	var parent$u = reverse$4;
	var reverse$3 = parent$u;

	var parent$t = reverse$3;
	var reverse$2 = parent$t;

	var parent$s = reverse$2;
	var reverse$1 = parent$s;

	var reverse = reverse$1;

	var $$B = _export$1;
	var isArray$2 = isArray$8;
	var isConstructor = isConstructor$3;
	var isObject$d = isObject$p;
	var toAbsoluteIndex$2 = toAbsoluteIndex$5;
	var lengthOfArrayLike$2 = lengthOfArrayLike$9;
	var toIndexedObject$5 = toIndexedObject$d;
	var createProperty = createProperty$3;
	var wellKnownSymbol$7 = wellKnownSymbol$t;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
	var nativeSlice = arraySlice$6;
	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');
	var SPECIES = wellKnownSymbol$7('species');
	var $Array$1 = Array;
	var max$2 = Math.max;
	$$B({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$5(this);
	    var length = lengthOfArrayLike$2(O);
	    var k = toAbsoluteIndex$2(start, length);
	    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
	    var Constructor, result, n;
	    if (isArray$2(O)) {
	      Constructor = O.constructor;
	      if (isConstructor(Constructor) && (Constructor === $Array$1 || isArray$2(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$d(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max$2(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var getBuiltInPrototypeMethod$7 = getBuiltInPrototypeMethod$b;
	var slice$6 = getBuiltInPrototypeMethod$7('Array', 'slice');

	var isPrototypeOf$7 = objectIsPrototypeOf$1;
	var method$5 = slice$6;
	var ArrayPrototype$5 = Array.prototype;
	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$5 || (isPrototypeOf$7(ArrayPrototype$5, it) && own === ArrayPrototype$5.slice) ? method$5 : own;
	};

	var parent$r = slice$5;
	var slice$4 = parent$r;

	var parent$q = slice$4;
	var slice$3 = parent$q;

	var parent$p = slice$3;
	var slice$2 = parent$p;

	var slice$1 = slice$2;

	(function (module) {
	var _typeof$1 = _typeof.exports["default"];
	var _Object$defineProperty = defineProperty$8;
	var _Symbol = symbol;
	var _Object$create = create$2;
	var _Object$getPrototypeOf = getPrototypeOf$1;
	var _forEachInstanceProperty = forEach$3;
	var _pushInstanceProperty = push$4;
	var _Object$setPrototypeOf = setPrototypeOf;
	var _Promise = promise$1;
	var _reverseInstanceProperty = reverse;
	var _sliceInstanceProperty = slice$1;
	function _regeneratorRuntime() {
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return e;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var t,
	    e = {},
	    r = Object.prototype,
	    n = r.hasOwnProperty,
	    o = _Object$defineProperty || function (t, e, r) {
	      t[e] = r.value;
	    },
	    i = "function" == typeof _Symbol ? _Symbol : {},
	    a = i.iterator || "@@iterator",
	    c = i.asyncIterator || "@@asyncIterator",
	    u = i.toStringTag || "@@toStringTag";
	  function define(t, e, r) {
	    return _Object$defineProperty(t, e, {
	      value: r,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), t[e];
	  }
	  try {
	    define({}, "");
	  } catch (t) {
	    define = function define(t, e, r) {
	      return t[e] = r;
	    };
	  }
	  function wrap(t, e, r, n) {
	    var i = e && e.prototype instanceof Generator ? e : Generator,
	      a = _Object$create(i.prototype),
	      c = new Context(n || []);
	    return o(a, "_invoke", {
	      value: makeInvokeMethod(t, r, c)
	    }), a;
	  }
	  function tryCatch(t, e, r) {
	    try {
	      return {
	        type: "normal",
	        arg: t.call(e, r)
	      };
	    } catch (t) {
	      return {
	        type: "throw",
	        arg: t
	      };
	    }
	  }
	  e.wrap = wrap;
	  var h = "suspendedStart",
	    l = "suspendedYield",
	    f = "executing",
	    s = "completed",
	    y = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var p = {};
	  define(p, a, function () {
	    return this;
	  });
	  var d = _Object$getPrototypeOf,
	    v = d && d(d(values([])));
	  v && v !== r && n.call(v, a) && (p = v);
	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(p);
	  function defineIteratorMethods(t) {
	    var _context;
	    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (e) {
	      define(t, e, function (t) {
	        return this._invoke(e, t);
	      });
	    });
	  }
	  function AsyncIterator(t, e) {
	    function invoke(r, o, i, a) {
	      var c = tryCatch(t[r], t, o);
	      if ("throw" !== c.type) {
	        var u = c.arg,
	          h = u.value;
	        return h && "object" == _typeof$1(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
	          invoke("next", t, i, a);
	        }, function (t) {
	          invoke("throw", t, i, a);
	        }) : e.resolve(h).then(function (t) {
	          u.value = t, i(u);
	        }, function (t) {
	          return invoke("throw", t, i, a);
	        });
	      }
	      a(c.arg);
	    }
	    var r;
	    o(this, "_invoke", {
	      value: function value(t, n) {
	        function callInvokeWithMethodAndArg() {
	          return new e(function (e, r) {
	            invoke(t, n, e, r);
	          });
	        }
	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(e, r, n) {
	    var o = h;
	    return function (i, a) {
	      if (o === f) throw new Error("Generator is already running");
	      if (o === s) {
	        if ("throw" === i) throw a;
	        return {
	          value: t,
	          done: !0
	        };
	      }
	      for (n.method = i, n.arg = a;;) {
	        var c = n.delegate;
	        if (c) {
	          var u = maybeInvokeDelegate(c, n);
	          if (u) {
	            if (u === y) continue;
	            return u;
	          }
	        }
	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
	          if (o === h) throw o = s, n.arg;
	          n.dispatchException(n.arg);
	        } else "return" === n.method && n.abrupt("return", n.arg);
	        o = f;
	        var p = tryCatch(e, r, n);
	        if ("normal" === p.type) {
	          if (o = n.done ? s : l, p.arg === y) continue;
	          return {
	            value: p.arg,
	            done: n.done
	          };
	        }
	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(e, r) {
	    var n = r.method,
	      o = e.iterator[n];
	    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
	    var i = tryCatch(o, e.iterator, r.arg);
	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
	    var a = i.arg;
	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
	  }
	  function pushTryEntry(t) {
	    var _context2;
	    var e = {
	      tryLoc: t[0]
	    };
	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), _pushInstanceProperty(_context2 = this.tryEntries).call(_context2, e);
	  }
	  function resetTryEntry(t) {
	    var e = t.completion || {};
	    e.type = "normal", delete e.arg, t.completion = e;
	  }
	  function Context(t) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], _forEachInstanceProperty(t).call(t, pushTryEntry, this), this.reset(!0);
	  }
	  function values(e) {
	    if (e || "" === e) {
	      var r = e[a];
	      if (r) return r.call(e);
	      if ("function" == typeof e.next) return e;
	      if (!isNaN(e.length)) {
	        var o = -1,
	          i = function next() {
	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
	            return next.value = t, next.done = !0, next;
	          };
	        return i.next = i;
	      }
	    }
	    throw new TypeError(_typeof$1(e) + " is not iterable");
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), o(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
	    var e = "function" == typeof t && t.constructor;
	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
	  }, e.mark = function (t) {
	    return _Object$setPrototypeOf ? _Object$setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = _Object$create(g), t;
	  }, e.awrap = function (t) {
	    return {
	      __await: t
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
	    return this;
	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
	    void 0 === i && (i = _Promise);
	    var a = new AsyncIterator(wrap(t, r, n, o), i);
	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
	      return t.done ? t.value : a.next();
	    });
	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
	    return this;
	  }), define(g, "toString", function () {
	    return "[object Generator]";
	  }), e.keys = function (t) {
	    var e = Object(t),
	      r = [];
	    for (var n in e) _pushInstanceProperty(r).call(r, n);
	    return _reverseInstanceProperty(r).call(r), function next() {
	      for (; r.length;) {
	        var t = r.pop();
	        if (t in e) return next.value = t, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, e.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(e) {
	      var _context3;
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, _forEachInstanceProperty(_context3 = this.tryEntries).call(_context3, resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+_sliceInstanceProperty(r).call(r, 1)) && (this[r] = t);
	    },
	    stop: function stop() {
	      this.done = !0;
	      var t = this.tryEntries[0].completion;
	      if ("throw" === t.type) throw t.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(e) {
	      if (this.done) throw e;
	      var r = this;
	      function handle(n, o) {
	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
	      }
	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
	        var i = this.tryEntries[o],
	          a = i.completion;
	        if ("root" === i.tryLoc) return handle("end");
	        if (i.tryLoc <= this.prev) {
	          var c = n.call(i, "catchLoc"),
	            u = n.call(i, "finallyLoc");
	          if (c && u) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          } else if (c) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	          } else {
	            if (!u) throw new Error("try statement without catch or finally");
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(t, e) {
	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
	        var o = this.tryEntries[r];
	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
	          var i = o;
	          break;
	        }
	      }
	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
	      var a = i ? i.completion : {};
	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
	    },
	    complete: function complete(t, e) {
	      if ("throw" === t.type) throw t.arg;
	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
	    },
	    finish: function finish(t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
	      }
	    },
	    "catch": function _catch(t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.tryLoc === t) {
	          var n = r.completion;
	          if ("throw" === n.type) {
	            var o = n.arg;
	            resetTryEntry(r);
	          }
	          return o;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(e, r, n) {
	      return this.delegate = {
	        iterator: values(e),
	        resultName: r,
	        nextLoc: n
	      }, "next" === this.method && (this.arg = t), y;
	    }
	  }, e;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}(regeneratorRuntime$1));
	getDefaultExportFromCjs(regeneratorRuntime$1.exports);

	var runtime = regeneratorRuntime$1.exports();
	var regenerator = runtime;
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

	var global$r = global$M;
	var apply$2 = functionApply;
	var isCallable$f = isCallable$A;
	var ENGINE_IS_BUN = engineIsBun;
	var USER_AGENT = engineUserAgent$1;
	var arraySlice$2 = arraySlice$6;
	var validateArgumentsLength = validateArgumentsLength$2;
	var Function$1 = global$r.Function;
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
	  var version = global$r.Bun.version.split('.');
	  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
	})();
	var schedulersFix$2 = function (scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout ) {
	    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable$f(handler) ? handler : Function$1(handler);
	    var params = boundArgs ? arraySlice$2(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply$2(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};

	var $$A = _export$1;
	var global$q = global$M;
	var schedulersFix$1 = schedulersFix$2;
	var setInterval$2 = schedulersFix$1(global$q.setInterval, true);
	$$A({ global: true, bind: true, forced: global$q.setInterval !== setInterval$2 }, {
	  setInterval: setInterval$2
	});

	var $$z = _export$1;
	var global$p = global$M;
	var schedulersFix = schedulersFix$2;
	var setTimeout$3 = schedulersFix(global$p.setTimeout, true);
	$$z({ global: true, bind: true, forced: global$p.setTimeout !== setTimeout$3 }, {
	  setTimeout: setTimeout$3
	});

	var path$8 = path$j;
	var setInterval$1 = path$8.setInterval;

	var setInterval = setInterval$1;

	var internalMetadata = {exports: {}};

	var fails$i = fails$E;
	var arrayBufferNonExtensible = fails$i(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$h = fails$E;
	var isObject$c = isObject$p;
	var classof$5 = classofRaw$4;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$2 = fails$h(function () { $isExtensible(1); });
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$c(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$5(it) === 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var fails$g = fails$E;
	var freezing = !fails$g(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$y = _export$1;
	var uncurryThis$k = functionUncurryThis$1;
	var hiddenKeys$4 = hiddenKeys$a;
	var isObject$b = isObject$p;
	var hasOwn$g = hasOwnProperty_1$1;
	var defineProperty$5 = objectDefineProperty$1.f;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible = objectIsExtensible;
	var uid$3 = uid$7;
	var FREEZING = freezing;
	var REQUIRED = false;
	var METADATA = uid$3('meta');
	var id$1 = 0;
	var setMetadata = function (it) {
	  defineProperty$5(it, METADATA, { value: {
	    objectID: 'O' + id$1++,
	    weakData: {}
	  } });
	};
	var fastKey$1 = function (it, create) {
	  if (!isObject$b(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$g(it, METADATA)) {
	    if (!isExtensible(it)) return 'F';
	    if (!create) return 'E';
	    setMetadata(it);
	  } return it[METADATA].objectID;
	};
	var getWeakData = function (it, create) {
	  if (!hasOwn$g(it, METADATA)) {
	    if (!isExtensible(it)) return true;
	    if (!create) return false;
	    setMetadata(it);
	  } return it[METADATA].weakData;
	};
	var onFreeze = function (it) {
	  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$g(it, METADATA)) setMetadata(it);
	  return it;
	};
	var enable = function () {
	  meta.enable = function () {  };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
	  var splice = uncurryThis$k([].splice);
	  var test = {};
	  test[METADATA] = 1;
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule$1.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };
	    $$y({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};
	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};
	hiddenKeys$4[METADATA] = true;

	var $$x = _export$1;
	var global$o = global$M;
	var InternalMetadataModule = internalMetadata.exports;
	var fails$f = fails$E;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$c;
	var iterate$f = iterate$l;
	var anInstance$1 = anInstance$3;
	var isCallable$e = isCallable$A;
	var isObject$a = isObject$p;
	var isNullOrUndefined$3 = isNullOrUndefined$8;
	var setToStringTag = setToStringTag$8;
	var defineProperty$4 = objectDefineProperty$1.f;
	var forEach$2 = arrayIteration.forEach;
	var DESCRIPTORS$9 = descriptors$1;
	var InternalStateModule$2 = internalState$1;
	var setInternalState$1 = InternalStateModule$2.set;
	var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
	var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$o[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;
	  if (!DESCRIPTORS$9 || !isCallable$e(NativeConstructor)
	    || !(IS_WEAK || NativePrototype.forEach && !fails$f(function () { new NativeConstructor().entries().next(); }))
	  ) {
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule.enable();
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$1(anInstance$1(target, Prototype), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (!isNullOrUndefined$3(iterable)) iterate$f(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    forEach$2(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY === 'add' || KEY === 'set';
	      if (KEY in NativePrototype && !(IS_WEAK && KEY === 'clear')) {
	        createNonEnumerableProperty$4(Prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject$a(a)) return KEY === 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });
	    IS_WEAK || defineProperty$4(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }
	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$x({ global: true, forced: true }, exported);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var defineBuiltIn = defineBuiltIn$6;
	var defineBuiltIns$1 = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else defineBuiltIn(target, key, src[key], options);
	  } return target;
	};

	var create$1 = objectCreate;
	var defineBuiltInAccessor = defineBuiltInAccessor$3;
	var defineBuiltIns = defineBuiltIns$1;
	var bind$m = functionBindContext;
	var anInstance = anInstance$3;
	var isNullOrUndefined$2 = isNullOrUndefined$8;
	var iterate$e = iterate$l;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$3;
	var setSpecies = setSpecies$2;
	var DESCRIPTORS$8 = descriptors$1;
	var fastKey = internalMetadata.exports.fastKey;
	var InternalStateModule$1 = internalState$1;
	var setInternalState = InternalStateModule$1.set;
	var internalStateGetterFor = InternalStateModule$1.getterFor;
	var collectionStrong$1 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance(that, Prototype);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create$1(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS$8) that.size = 0;
	      if (!isNullOrUndefined$2(iterable)) iterate$e(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      if (entry) {
	        entry.value = value;
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$8) state.size++;
	        else that.size++;
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };
	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key === key) return entry;
	      }
	    };
	    defineBuiltIns(Prototype, {
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (DESCRIPTORS$8) state.size = 0;
	        else that.size = 0;
	      },
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first === entry) state.first = next;
	          if (state.last === entry) state.last = prev;
	          if (DESCRIPTORS$8) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      forEach: function forEach(callbackfn ) {
	        var state = getInternalState(this);
	        var boundFunction = bind$m(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    defineBuiltIns(Prototype, IS_MAP ? {
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$8) defineBuiltInAccessor(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      while (entry && entry.removed) entry = entry.previous;
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        state.target = undefined;
	        return createIterResultObject(undefined, true);
	      }
	      if (kind === 'keys') return createIterResultObject(entry.key, false);
	      if (kind === 'values') return createIterResultObject(entry.value, false);
	      return createIterResultObject([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	var collection = collection$1;
	var collectionStrong = collectionStrong$1;
	collection('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var caller$1 = function (methodName, numArgs) {
	  return numArgs === 1 ? function (object, arg) {
	    return object[methodName](arg);
	  } : function (object, arg1, arg2) {
	    return object[methodName](arg1, arg2);
	  };
	};

	var getBuiltIn$5 = getBuiltIn$k;
	var caller = caller$1;
	var Map$6 = getBuiltIn$5('Map');
	var mapHelpers = {
	  Map: Map$6,
	  set: caller('set', 2),
	  get: caller('get', 1),
	  has: caller('has', 1),
	  remove: caller('delete', 1),
	  proto: Map$6.prototype
	};

	var $$w = _export$1;
	var uncurryThis$j = functionUncurryThis$1;
	var aCallable$8 = aCallable$j;
	var requireObjectCoercible$5 = requireObjectCoercible$9;
	var iterate$d = iterate$l;
	var MapHelpers$5 = mapHelpers;
	var IS_PURE = isPure;
	var Map$5 = MapHelpers$5.Map;
	var has$4 = MapHelpers$5.has;
	var get$3 = MapHelpers$5.get;
	var set$7 = MapHelpers$5.set;
	var push$3 = uncurryThis$j([].push);
	$$w({ target: 'Map', stat: true, forced: IS_PURE }, {
	  groupBy: function groupBy(items, callbackfn) {
	    requireObjectCoercible$5(items);
	    aCallable$8(callbackfn);
	    var map = new Map$5();
	    var k = 0;
	    iterate$d(items, function (value) {
	      var key = callbackfn(value, k++);
	      if (!has$4(map, key)) set$7(map, key, [value]);
	      else push$3(get$3(map, key), value);
	    });
	    return map;
	  }
	});

	var path$7 = path$j;
	var map$9 = path$7.Map;

	var parent$o = map$9;
	var map$8 = parent$o;

	var map$7 = map$8;

	var promise = promise$4;

	var getBuiltInPrototypeMethod$6 = getBuiltInPrototypeMethod$b;
	var concat$7 = getBuiltInPrototypeMethod$6('Array', 'concat');

	var isPrototypeOf$6 = objectIsPrototypeOf$1;
	var method$4 = concat$7;
	var ArrayPrototype$4 = Array.prototype;
	var concat$6 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$4 || (isPrototypeOf$6(ArrayPrototype$4, it) && own === ArrayPrototype$4.concat) ? method$4 : own;
	};

	var parent$n = concat$6;
	var concat$5 = parent$n;

	var concat$4 = concat$5;

	var path$6 = path$j;
	var setTimeout$2 = path$6.setTimeout;

	var setTimeout$1 = setTimeout$2;

	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$i = functionUncurryThis$1;
	var requireObjectCoercible$4 = requireObjectCoercible$9;
	var toString$6 = toString$d;
	var whitespaces$1 = whitespaces$2;
	var replace = uncurryThis$i(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$6(requireObjectCoercible$4($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '$1');
	    return string;
	  };
	};
	var stringTrim = {
	  start: createMethod$1(1),
	  end: createMethod$1(2),
	  trim: createMethod$1(3)
	};

	var global$n = global$M;
	var fails$e = fails$E;
	var uncurryThis$h = functionUncurryThis$1;
	var toString$5 = toString$d;
	var trim$1 = stringTrim.trim;
	var whitespaces = whitespaces$2;
	var $parseInt$1 = global$n.parseInt;
	var Symbol$2 = global$n.Symbol;
	var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
	var hex = /^[+-]?0x/i;
	var exec = uncurryThis$h(hex.exec);
	var FORCED$2 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
	  || (ITERATOR$1 && !fails$e(function () { $parseInt$1(Object(ITERATOR$1)); }));
	var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
	  var S = trim$1(toString$5(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$v = _export$1;
	var $parseInt = numberParseInt;
	$$v({ global: true, forced: parseInt !== $parseInt }, {
	  parseInt: $parseInt
	});

	var path$5 = path$j;
	var _parseInt$2 = path$5.parseInt;

	var parent$m = _parseInt$2;
	var _parseInt$1 = parent$m;

	var _parseInt = _parseInt$1;

	var $$u = _export$1;
	var uncurryThis$g = functionUncurryThis$1;
	var $Date = Date;
	var thisTimeValue = uncurryThis$g($Date.prototype.getTime);
	$$u({ target: 'Date', stat: true }, {
	  now: function now() {
	    return thisTimeValue(new $Date());
	  }
	});

	var path$4 = path$j;
	var now$2 = path$4.Date.now;

	var parent$l = now$2;
	var now$1 = parent$l;

	var now = now$1;

	var $$t = _export$1;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');
	$$t({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  filter: function filter(callbackfn ) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$5 = getBuiltInPrototypeMethod$b;
	var filter$3 = getBuiltInPrototypeMethod$5('Array', 'filter');

	var isPrototypeOf$5 = objectIsPrototypeOf$1;
	var method$3 = filter$3;
	var ArrayPrototype$3 = Array.prototype;
	var filter$2 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$3 || (isPrototypeOf$5(ArrayPrototype$3, it) && own === ArrayPrototype$3.filter) ? method$3 : own;
	};

	var parent$k = filter$2;
	var filter$1 = parent$k;

	var filter = filter$1;

	var $$s = _export$1;
	var $includes = arrayIncludes$1.includes;
	var fails$d = fails$E;
	var BROKEN_ON_SPARSE = fails$d(function () {
	  return !Array(1).includes();
	});
	$$s({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el ) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$4 = getBuiltInPrototypeMethod$b;
	var includes$4 = getBuiltInPrototypeMethod$4('Array', 'includes');

	var isObject$9 = isObject$p;
	var classof$4 = classofRaw$4;
	var wellKnownSymbol$6 = wellKnownSymbol$t;
	var MATCH$1 = wellKnownSymbol$6('match');
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$9(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) === 'RegExp');
	};

	var isRegExp = isRegexp;
	var $TypeError$c = TypeError;
	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw new $TypeError$c("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$5 = wellKnownSymbol$t;
	var MATCH = wellKnownSymbol$5('match');
	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) {  }
	  } return false;
	};

	var $$r = _export$1;
	var uncurryThis$f = functionUncurryThis$1;
	var notARegExp = notARegexp;
	var requireObjectCoercible$3 = requireObjectCoercible$9;
	var toString$4 = toString$d;
	var correctIsRegExpLogic = correctIsRegexpLogic;
	var stringIndexOf = uncurryThis$f(''.indexOf);
	$$r({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString ) {
	    return !!~stringIndexOf(
	      toString$4(requireObjectCoercible$3(this)),
	      toString$4(notARegExp(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	var getBuiltInPrototypeMethod$3 = getBuiltInPrototypeMethod$b;
	var includes$3 = getBuiltInPrototypeMethod$3('String', 'includes');

	var isPrototypeOf$4 = objectIsPrototypeOf$1;
	var arrayMethod = includes$4;
	var stringMethod = includes$3;
	var ArrayPrototype$2 = Array.prototype;
	var StringPrototype = String.prototype;
	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$2 || (isPrototypeOf$4(ArrayPrototype$2, it) && own === ArrayPrototype$2.includes)) return arrayMethod;
	  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$4(StringPrototype, it) && own === StringPrototype.includes)) {
	    return stringMethod;
	  } return own;
	};

	var parent$j = includes$2;
	var includes$1 = parent$j;

	var includes = includes$1;

	var callBind$2 = {exports: {}};

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr$5 = Object.prototype.toString;
	var max$1 = Math.max;
	var funcType = '[object Function]';
	var concatty = function concatty(a, b) {
	    var arr = [];
	    for (var i = 0; i < a.length; i += 1) {
	        arr[i] = a[i];
	    }
	    for (var j = 0; j < b.length; j += 1) {
	        arr[j + a.length] = b[j];
	    }
	    return arr;
	};
	var slicy = function slicy(arrLike, offset) {
	    var arr = [];
	    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
	        arr[j] = arrLike[i];
	    }
	    return arr;
	};
	var joiny = function (arr, joiner) {
	    var str = '';
	    for (var i = 0; i < arr.length; i += 1) {
	        str += arr[i];
	        if (i + 1 < arr.length) {
	            str += joiner;
	        }
	    }
	    return str;
	};
	var implementation$5 = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr$5.apply(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slicy(arguments, 1);
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                concatty(args, arguments)
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        }
	        return target.apply(
	            that,
	            concatty(args, arguments)
	        );
	    };
	    var boundLength = max$1(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs[i] = '$' + i;
	    }
	    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	    return bound;
	};

	var implementation$4 = implementation$5;
	var functionBind$1 = Function.prototype.bind || implementation$4;

	var shams = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }
		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }
		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) { return false; }
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
	var hasSymbols$2 = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }
		return hasSymbolSham();
	};

	var test$1 = {
		foo: {}
	};
	var $Object$1 = Object;
	var hasProto$1 = function hasProto() {
		return { __proto__: test$1 }.foo === test$1.foo && !({ __proto__: null } instanceof $Object$1);
	};

	var call$a = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind$l = functionBind$1;
	var hasown = bind$l.call(call$a, $hasOwn);

	var undefined$1;
	var $SyntaxError$2 = SyntaxError;
	var $Function$1 = Function;
	var $TypeError$b = TypeError;
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function$1('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) {}
	};
	var $gOPD$1 = Object.getOwnPropertyDescriptor;
	if ($gOPD$1) {
		try {
			$gOPD$1({}, '');
		} catch (e) {
			$gOPD$1 = null;
		}
	}
	var throwTypeError = function () {
		throw new $TypeError$b();
	};
	var ThrowTypeError = $gOPD$1
		? (function () {
			try {
				arguments.callee;
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					return $gOPD$1(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;
	var hasSymbols$1 = hasSymbols$2();
	var hasProto = hasProto$1();
	var getProto = Object.getPrototypeOf || (
		hasProto
			? function (x) { return x.__proto__; }
			: null
	);
	var needsEval = {};
	var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);
	var INTRINSICS = {
		'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
		'%ArrayIteratorPrototype%': hasSymbols$1 && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
		'%AsyncFromSyncIteratorPrototype%': undefined$1,
		'%AsyncFunction%': needsEval,
		'%AsyncGenerator%': needsEval,
		'%AsyncGeneratorFunction%': needsEval,
		'%AsyncIteratorPrototype%': needsEval,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
		'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
		'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
		'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%eval%': eval,
		'%EvalError%': EvalError,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
		'%Function%': $Function$1,
		'%GeneratorFunction%': needsEval,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols$1 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
		'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
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
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols$1 && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
		'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
		'%SyntaxError%': $SyntaxError$2,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError$b,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
		'%URIError%': URIError,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
		'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
	};
	if (getProto) {
		try {
			null.error;
		} catch (e) {
			var errorProto = getProto(getProto(e));
			INTRINSICS['%Error.prototype%'] = errorProto;
		}
	}
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
			if (gen && getProto) {
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
	var bind$k = functionBind$1;
	var hasOwn$f = hasown;
	var $concat = bind$k.call(Function.call, Array.prototype.concat);
	var $spliceApply = bind$k.call(Function.apply, Array.prototype.splice);
	var $replace = bind$k.call(Function.call, String.prototype.replace);
	var $strSlice = bind$k.call(Function.call, String.prototype.slice);
	var $exec = bind$k.call(Function.call, RegExp.prototype.exec);
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === '%' && last !== '%') {
			throw new $SyntaxError$2('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError$2('invalid intrinsic syntax, expected opening `%`');
		}
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
		});
		return result;
	};
	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn$f(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = '%' + alias[0] + '%';
		}
		if (hasOwn$f(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) {
				value = doEval(intrinsicName);
			}
			if (typeof value === 'undefined' && !allowMissing) {
				throw new $TypeError$b('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}
			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}
		throw new $SyntaxError$2('intrinsic ' + name + ' does not exist!');
	};
	var getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError$b('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError$b('"allowMissing" argument must be a boolean');
		}
		if ($exec(/^%?[^%]*%?$/, name) === null) {
			throw new $SyntaxError$2('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
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
				throw new $SyntaxError$2('property names with quotes must have matching quotes');
			}
			if (part === 'constructor' || !isOwn) {
				skipFurtherCaching = true;
			}
			intrinsicBaseName += '.' + part;
			intrinsicRealName = '%' + intrinsicBaseName + '%';
			if (hasOwn$f(INTRINSICS, intrinsicRealName)) {
				value = INTRINSICS[intrinsicRealName];
			} else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) {
						throw new $TypeError$b('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					return void undefined$1;
				}
				if ($gOPD$1 && (i + 1) >= parts.length) {
					var desc = $gOPD$1(value, part);
					isOwn = !!desc;
					if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
						value = desc.get;
					} else {
						value = value[part];
					}
				} else {
					isOwn = hasOwn$f(value, part);
					value = value[part];
				}
				if (isOwn && !skipFurtherCaching) {
					INTRINSICS[intrinsicRealName] = value;
				}
			}
		}
		return value;
	};

	var GetIntrinsic$e = getIntrinsic;
	var $defineProperty$3 = GetIntrinsic$e('%Object.defineProperty%', true);
	var hasPropertyDescriptors$3 = function hasPropertyDescriptors() {
		if ($defineProperty$3) {
			try {
				$defineProperty$3({}, 'a', { value: 1 });
				return true;
			} catch (e) {
				return false;
			}
		}
		return false;
	};
	hasPropertyDescriptors$3.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		if (!hasPropertyDescriptors$3()) {
			return null;
		}
		try {
			return $defineProperty$3([], 'length', { value: 1 }).length !== 1;
		} catch (e) {
			return true;
		}
	};
	var hasPropertyDescriptors_1 = hasPropertyDescriptors$3;

	var GetIntrinsic$d = getIntrinsic;
	var $gOPD = GetIntrinsic$d('%Object.getOwnPropertyDescriptor%', true);
	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			$gOPD = null;
		}
	}
	var gopd$1 = $gOPD;

	var hasPropertyDescriptors$2 = hasPropertyDescriptors_1();
	var GetIntrinsic$c = getIntrinsic;
	var $defineProperty$2 = hasPropertyDescriptors$2 && GetIntrinsic$c('%Object.defineProperty%', true);
	if ($defineProperty$2) {
		try {
			$defineProperty$2({}, 'a', { value: 1 });
		} catch (e) {
			$defineProperty$2 = false;
		}
	}
	var $SyntaxError$1 = GetIntrinsic$c('%SyntaxError%');
	var $TypeError$a = GetIntrinsic$c('%TypeError%');
	var gopd = gopd$1;
	var defineDataProperty = function defineDataProperty(
		obj,
		property,
		value
	) {
		if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
			throw new $TypeError$a('`obj` must be an object or a function`');
		}
		if (typeof property !== 'string' && typeof property !== 'symbol') {
			throw new $TypeError$a('`property` must be a string or a symbol`');
		}
		if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
			throw new $TypeError$a('`nonEnumerable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
			throw new $TypeError$a('`nonWritable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
			throw new $TypeError$a('`nonConfigurable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
			throw new $TypeError$a('`loose`, if provided, must be a boolean');
		}
		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;
		var desc = !!gopd && gopd(obj, property);
		if ($defineProperty$2) {
			$defineProperty$2(obj, property, {
				configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
				enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
				value: value,
				writable: nonWritable === null && desc ? desc.writable : !nonWritable
			});
		} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
			obj[property] = value;
		} else {
			throw new $SyntaxError$1('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
		}
	};

	var GetIntrinsic$b = getIntrinsic;
	var define$2 = defineDataProperty;
	var hasDescriptors = hasPropertyDescriptors_1();
	var gOPD = gopd$1;
	var $TypeError$9 = GetIntrinsic$b('%TypeError%');
	var $floor$1 = GetIntrinsic$b('%Math.floor%');
	var setFunctionLength = function setFunctionLength(fn, length) {
		if (typeof fn !== 'function') {
			throw new $TypeError$9('`fn` is not a function');
		}
		if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor$1(length) !== length) {
			throw new $TypeError$9('`length` must be a positive 32-bit integer');
		}
		var loose = arguments.length > 2 && !!arguments[2];
		var functionLengthIsConfigurable = true;
		var functionLengthIsWritable = true;
		if ('length' in fn && gOPD) {
			var desc = gOPD(fn, 'length');
			if (desc && !desc.configurable) {
				functionLengthIsConfigurable = false;
			}
			if (desc && !desc.writable) {
				functionLengthIsWritable = false;
			}
		}
		if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
			if (hasDescriptors) {
				define$2(fn, 'length', length, true, true);
			} else {
				define$2(fn, 'length', length);
			}
		}
		return fn;
	};

	(function (module) {
	var bind = functionBind$1;
	var GetIntrinsic = getIntrinsic;
	var setFunctionLength$1 = setFunctionLength;
	var $TypeError = GetIntrinsic('%TypeError%');
	var $apply = GetIntrinsic('%Function.prototype.apply%');
	var $call = GetIntrinsic('%Function.prototype.call%');
	var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
	var $max = GetIntrinsic('%Math.max%');
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			$defineProperty = null;
		}
	}
	module.exports = function callBind(originalFunction) {
		if (typeof originalFunction !== 'function') {
			throw new $TypeError('a function is required');
		}
		var func = $reflectApply(bind, $call, arguments);
		return setFunctionLength$1(
			func,
			1 + $max(0, originalFunction.length - (arguments.length - 1)),
			true
		);
	};
	var applyBind = function applyBind() {
		return $reflectApply(bind, $apply, arguments);
	};
	if ($defineProperty) {
		$defineProperty(module.exports, 'apply', { value: applyBind });
	} else {
		module.exports.apply = applyBind;
	}
	}(callBind$2));

	var toStr$4 = Object.prototype.toString;
	var isArguments = function isArguments(value) {
		var str = toStr$4.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr$4.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};

	var keysShim$1;
	if (!Object.keys) {
		var has$3 = Object.prototype.hasOwnProperty;
		var toStr$3 = Object.prototype.toString;
		var isArgs$1 = isArguments;
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
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has$3.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
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
			var isFunction = toStr$3.call(object) === '[object Function]';
			var isArguments = isArgs$1(object);
			var isString = isObject && toStr$3.call(object) === '[object String]';
			var theKeys = [];
			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}
			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has$3.call(object, 0)) {
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
					if (!(skipProto && name === 'prototype') && has$3.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}
			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has$3.call(object, dontEnums[k])) {
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
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) {
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
	var objectKeys$2 = keysShim;

	var keys$4 = objectKeys$2;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
	var toStr$2 = Object.prototype.toString;
	var concat$3 = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;
	var isFunction$2 = function (fn) {
		return typeof fn === 'function' && toStr$2.call(fn) === '[object Function]';
	};
	var hasPropertyDescriptors$1 = hasPropertyDescriptors_1();
	var supportsDescriptors = origDefineProperty && hasPropertyDescriptors$1;
	var defineProperty$3 = function (object, name, value, predicate) {
		if (name in object) {
			if (predicate === true) {
				if (object[name] === value) {
					return;
				}
			} else if (!isFunction$2(predicate) || !predicate()) {
				return;
			}
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
		var props = keys$4(map);
		if (hasSymbols) {
			props = concat$3.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty$3(object, props[i], map[props[i]], predicates[props[i]]);
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
			return false;
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
	var toStr$1 = Object.prototype.toString;
	var objectClass = '[object Object]';
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var ddaClass = '[object HTMLAllCollection]';
	var ddaClass2 = '[object HTML document.all class]';
	var ddaClass3 = '[object HTMLCollection]';
	var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;
	var isIE68 = !(0 in [,]);
	var isDDA = function isDocumentDotAll() { return false; };
	if (typeof document === 'object') {
		var all = document.all;
		if (toStr$1.call(all) === toStr$1.call(document.all)) {
			isDDA = function isDocumentDotAll(value) {
				if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
					try {
						var str = toStr$1.call(value);
						return (
							str === ddaClass
							|| str === ddaClass2
							|| str === ddaClass3
							|| str === objectClass
						) && value('') == null;
					} catch (e) {  }
				}
				return false;
			};
		}
	}
	var isCallable$d = reflectApply
		? function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			try {
				reflectApply(value, null, badArrayLike$1);
			} catch (e) {
				if (e !== isCallableMarker) { return false; }
			}
			return !isES6ClassFn(value) && tryFunctionObject(value);
		}
		: function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (hasToStringTag) { return tryFunctionObject(value); }
			if (isES6ClassFn(value)) { return false; }
			var strClass = toStr$1.call(value);
			if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
			return tryFunctionObject(value);
		};

	var IsCallable$2 = isCallable$d;

	var IsConstructor$1 = {exports: {}};

	var GetIntrinsic$a = getIntrinsic;

	var GetIntrinsic$9 = getIntrinsic;
	var hasOwn$e = hasown;
	var $TypeError$8 = GetIntrinsic$9('%TypeError%');
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
		for (var key in Desc) {
			if (hasOwn$e(Desc, key) && !allowed[key]) {
				return false;
			}
		}
		if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
			throw new $TypeError$8('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	};

	var GetIntrinsic$8 = getIntrinsic;
	var callBind$1 = callBind$2.exports;
	var $indexOf$1 = callBind$1(GetIntrinsic$8('String.prototype.indexOf'));
	var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic$8(name, !!allowMissing);
		if (typeof intrinsic === 'function' && $indexOf$1(name, '.prototype.') > -1) {
			return callBind$1(intrinsic);
		}
		return intrinsic;
	};

	var GetIntrinsic$7 = getIntrinsic;
	var $Array = GetIntrinsic$7('%Array%');
	var toStr = !$Array.isArray && callBound$1('Object.prototype.toString');
	var IsArray = $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	};

	var hasPropertyDescriptors = hasPropertyDescriptors_1;
	var GetIntrinsic$6 = getIntrinsic;
	var $defineProperty$1 = hasPropertyDescriptors() && GetIntrinsic$6('%Object.defineProperty%', true);
	var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
	var isArray$1 = hasArrayLengthDefineBug && IsArray;
	var callBound = callBound$1;
	var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
	var DefineOwnProperty$1 = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
		if (!$defineProperty$1) {
			if (!IsDataDescriptor(desc)) {
				return false;
			}
			if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
				return false;
			}
			if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
				return false;
			}
			var V = desc['[[Value]]'];
			O[P] = V;
			return SameValue(O[P], V);
		}
		if (
			hasArrayLengthDefineBug
			&& P === 'length'
			&& '[[Value]]' in desc
			&& isArray$1(O)
			&& O.length !== desc['[[Value]]']
		) {
			O.length = desc['[[Value]]'];
			return O.length === desc['[[Value]]'];
		}
		$defineProperty$1(O, P, FromPropertyDescriptor(desc));
		return true;
	};

	var _isNaN = Number.isNaN || function isNaN(a) {
		return a !== a;
	};

	var $isNaN$2 = _isNaN;
	var _isFinite = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN$2(x) && x !== Infinity && x !== -Infinity; };

	var GetIntrinsic$5 = getIntrinsic;
	var $abs = GetIntrinsic$5('%Math.abs%');
	var $floor = GetIntrinsic$5('%Math.floor%');
	var $isNaN$1 = _isNaN;
	var $isFinite = _isFinite;
	var isInteger$1 = function isInteger(argument) {
		if (typeof argument !== 'number' || $isNaN$1(argument) || !$isFinite(argument)) {
			return false;
		}
		var absValue = $abs(argument);
		return $floor(absValue) === absValue;
	};

	var hasOwn$d = hasown;
	var isMatchRecord$1 = function isMatchRecord(record) {
		return (
			hasOwn$d(record, '[[StartIndex]]')
	        && hasOwn$d(record, '[[EndIndex]]')
	        && record['[[StartIndex]]'] >= 0
	        && record['[[EndIndex]]'] >= record['[[StartIndex]]']
	        && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])
	        && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])
		);
	};

	var GetIntrinsic$4 = getIntrinsic;
	var $TypeError$7 = GetIntrinsic$4('%TypeError%');
	var $SyntaxError = GetIntrinsic$4('%SyntaxError%');
	var hasOwn$c = hasown;
	var isInteger = isInteger$1;
	var isMatchRecord = isMatchRecord$1;
	var predicates = {
		'Property Descriptor': function isPropertyDescriptor(Desc) {
			var allowed = {
				'[[Configurable]]': true,
				'[[Enumerable]]': true,
				'[[Get]]': true,
				'[[Set]]': true,
				'[[Value]]': true,
				'[[Writable]]': true
			};
			if (!Desc) {
				return false;
			}
			for (var key in Desc) {
				if (hasOwn$c(Desc, key) && !allowed[key]) {
					return false;
				}
			}
			var isData = hasOwn$c(Desc, '[[Value]]');
			var IsAccessor = hasOwn$c(Desc, '[[Get]]') || hasOwn$c(Desc, '[[Set]]');
			if (isData && IsAccessor) {
				throw new $TypeError$7('Property Descriptors may not be both accessor and data descriptors');
			}
			return true;
		},
		'Match Record': isMatchRecord,
		'Iterator Record': function isIteratorRecord(value) {
			return hasOwn$c(value, '[[Iterator]]') && hasOwn$c(value, '[[NextMethod]]') && hasOwn$c(value, '[[Done]]');
		},
		'PromiseCapability Record': function isPromiseCapabilityRecord(value) {
			return !!value
				&& hasOwn$c(value, '[[Resolve]]')
				&& typeof value['[[Resolve]]'] === 'function'
				&& hasOwn$c(value, '[[Reject]]')
				&& typeof value['[[Reject]]'] === 'function'
				&& hasOwn$c(value, '[[Promise]]')
				&& value['[[Promise]]']
				&& typeof value['[[Promise]]'].then === 'function';
		},
		'AsyncGeneratorRequest Record': function isAsyncGeneratorRequestRecord(value) {
			return !!value
				&& hasOwn$c(value, '[[Completion]]')
				&& hasOwn$c(value, '[[Capability]]')
				&& predicates['PromiseCapability Record'](value['[[Capability]]']);
		},
		'RegExp Record': function isRegExpRecord(value) {
			return value
				&& hasOwn$c(value, '[[IgnoreCase]]')
				&& typeof value['[[IgnoreCase]]'] === 'boolean'
				&& hasOwn$c(value, '[[Multiline]]')
				&& typeof value['[[Multiline]]'] === 'boolean'
				&& hasOwn$c(value, '[[DotAll]]')
				&& typeof value['[[DotAll]]'] === 'boolean'
				&& hasOwn$c(value, '[[Unicode]]')
				&& typeof value['[[Unicode]]'] === 'boolean'
				&& hasOwn$c(value, '[[CapturingGroupsCount]]')
				&& typeof value['[[CapturingGroupsCount]]'] === 'number'
				&& isInteger(value['[[CapturingGroupsCount]]'])
				&& value['[[CapturingGroupsCount]]'] >= 0;
		}
	};
	var assertRecord$3 = function assertRecord(Type, recordType, argumentName, value) {
		var predicate = predicates[recordType];
		if (typeof predicate !== 'function') {
			throw new $SyntaxError('unknown record type: ' + recordType);
		}
		if (Type(value) !== 'Object' || !predicate(value)) {
			throw new $TypeError$7(argumentName + ' must be a ' + recordType);
		}
	};

	var fromPropertyDescriptor$1 = function fromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}
		var obj = {};
		if ('[[Value]]' in Desc) {
			obj.value = Desc['[[Value]]'];
		}
		if ('[[Writable]]' in Desc) {
			obj.writable = !!Desc['[[Writable]]'];
		}
		if ('[[Get]]' in Desc) {
			obj.get = Desc['[[Get]]'];
		}
		if ('[[Set]]' in Desc) {
			obj.set = Desc['[[Set]]'];
		}
		if ('[[Enumerable]]' in Desc) {
			obj.enumerable = !!Desc['[[Enumerable]]'];
		}
		if ('[[Configurable]]' in Desc) {
			obj.configurable = !!Desc['[[Configurable]]'];
		}
		return obj;
	};

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
	var Type$7 = function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		if (typeof x === 'bigint') {
			return 'BigInt';
		}
		return ES5Type(x);
	};

	var assertRecord$2 = assertRecord$3;
	var fromPropertyDescriptor = fromPropertyDescriptor$1;
	var Type$6 = Type$7;
	var FromPropertyDescriptor$1 = function FromPropertyDescriptor(Desc) {
		if (typeof Desc !== 'undefined') {
			assertRecord$2(Type$6, 'Property Descriptor', 'Desc', Desc);
		}
		return fromPropertyDescriptor(Desc);
	};

	var hasOwn$b = hasown;
	var Type$5 = Type$7;
	var assertRecord$1 = assertRecord$3;
	var IsAccessorDescriptor$1 = function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}
		assertRecord$1(Type$5, 'Property Descriptor', 'Desc', Desc);
		if (!hasOwn$b(Desc, '[[Get]]') && !hasOwn$b(Desc, '[[Set]]')) {
			return false;
		}
		return true;
	};

	var hasOwn$a = hasown;
	var Type$4 = Type$7;
	var assertRecord = assertRecord$3;
	var IsDataDescriptor$1 = function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}
		assertRecord(Type$4, 'Property Descriptor', 'Desc', Desc);
		if (!hasOwn$a(Desc, '[[Value]]') && !hasOwn$a(Desc, '[[Writable]]')) {
			return false;
		}
		return true;
	};

	var IsPropertyKey$1 = function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	};

	var $isNaN = _isNaN;
	var SameValue$1 = function SameValue(x, y) {
		if (x === y) {
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	};

	var ToBoolean$1 = function ToBoolean(value) { return !!value; };

	var hasOwn$9 = hasown;
	var GetIntrinsic$3 = getIntrinsic;
	var $TypeError$6 = GetIntrinsic$3('%TypeError%');
	var Type$3 = Type$7;
	var ToBoolean = ToBoolean$1;
	var IsCallable$1 = IsCallable$2;
	var ToPropertyDescriptor$1 = function ToPropertyDescriptor(Obj) {
		if (Type$3(Obj) !== 'Object') {
			throw new $TypeError$6('ToPropertyDescriptor requires an object');
		}
		var desc = {};
		if (hasOwn$9(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
		}
		if (hasOwn$9(Obj, 'configurable')) {
			desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
		}
		if (hasOwn$9(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (hasOwn$9(Obj, 'writable')) {
			desc['[[Writable]]'] = ToBoolean(Obj.writable);
		}
		if (hasOwn$9(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !IsCallable$1(getter)) {
				throw new $TypeError$6('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (hasOwn$9(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !IsCallable$1(setter)) {
				throw new $TypeError$6('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}
		if ((hasOwn$9(desc, '[[Get]]') || hasOwn$9(desc, '[[Set]]')) && (hasOwn$9(desc, '[[Value]]') || hasOwn$9(desc, '[[Writable]]'))) {
			throw new $TypeError$6('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	};

	var GetIntrinsic$2 = getIntrinsic;
	var $TypeError$5 = GetIntrinsic$2('%TypeError%');
	var isPropertyDescriptor = isPropertyDescriptor$1;
	var DefineOwnProperty = DefineOwnProperty$1;
	var FromPropertyDescriptor = FromPropertyDescriptor$1;
	var IsAccessorDescriptor = IsAccessorDescriptor$1;
	var IsDataDescriptor = IsDataDescriptor$1;
	var IsPropertyKey = IsPropertyKey$1;
	var SameValue = SameValue$1;
	var ToPropertyDescriptor = ToPropertyDescriptor$1;
	var Type$2 = Type$7;
	var DefinePropertyOrThrow$1 = function DefinePropertyOrThrow(O, P, desc) {
		if (Type$2(O) !== 'Object') {
			throw new $TypeError$5('Assertion failed: Type(O) is not Object');
		}
		if (!IsPropertyKey(P)) {
			throw new $TypeError$5('Assertion failed: IsPropertyKey(P) is not true');
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
			throw new $TypeError$5('Assertion failed: Desc is not a valid Property Descriptor');
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

	var GetIntrinsic$1 = GetIntrinsic$a;
	var $construct = GetIntrinsic$1('%Reflect.construct%', true);
	var DefinePropertyOrThrow = DefinePropertyOrThrow$1;
	try {
		DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
	} catch (e) {
		DefinePropertyOrThrow = null;
	}
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
				$construct(argument, badArrayLike);
			} catch (err) {
				return err === isConstructorMarker;
			}
		};
	} else {
		IsConstructor$1.exports = function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype;
		};
	}

	var GetIntrinsic = getIntrinsic;
	var $species = GetIntrinsic('%Symbol.species%', true);
	var $TypeError$4 = GetIntrinsic('%TypeError%');
	var IsConstructor = IsConstructor$1.exports;
	var Type$1 = Type$7;
	var SpeciesConstructor$1 = function SpeciesConstructor(O, defaultConstructor) {
		if (Type$1(O) !== 'Object') {
			throw new $TypeError$4('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (Type$1(C) !== 'Object') {
			throw new $TypeError$4('O.constructor is not an Object');
		}
		var S = $species ? C[$species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (IsConstructor(S)) {
			return S;
		}
		throw new $TypeError$4('no constructor found');
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
	var promiseFinally = function finally_(onFinally) {
		var promise = this;
		if (Type(promise) !== 'Object') {
			throw new TypeError('receiver is not an Object');
		}
		var C = SpeciesConstructor(promise, OriginalPromise);
		var thenFinally = onFinally;
		var catchFinally = onFinally;
		if (IsCallable(onFinally)) {
			thenFinally = createThenFinally(C, onFinally);
			catchFinally = createCatchFinally(C, onFinally);
		}
		return promise.then(thenFinally, catchFinally);
	};
	if (Object.getOwnPropertyDescriptor) {
		var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
		if (descriptor && descriptor.configurable) {
			Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
		}
	}
	var implementation$2 = promiseFinally;

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

	var callBind = callBind$2.exports;
	var define = defineProperties_1;
	var implementation = implementation$2;
	var getPolyfill = polyfill;
	var shim = shim$1;
	var bound = callBind(getPolyfill());
	define(bound, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	var promise_prototype_finally = bound;

	/*! js-cookie v3.0.1 | MIT */
	/* eslint-disable no-var */
	function assign$4 (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      target[key] = source[key];
	    }
	  }
	  return target
	}
	/* eslint-enable no-var */

	/* eslint-disable no-var */
	var defaultConverter = {
	  read: function (value) {
	    if (value[0] === '"') {
	      value = value.slice(1, -1);
	    }
	    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
	  },
	  write: function (value) {
	    return encodeURIComponent(value).replace(
	      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
	      decodeURIComponent
	    )
	  }
	};
	/* eslint-enable no-var */

	/* eslint-disable no-var */

	function init (converter, defaultAttributes) {
	  function set (key, value, attributes) {
	    if (typeof document === 'undefined') {
	      return
	    }

	    attributes = assign$4({}, defaultAttributes, attributes);

	    if (typeof attributes.expires === 'number') {
	      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
	    }
	    if (attributes.expires) {
	      attributes.expires = attributes.expires.toUTCString();
	    }

	    key = encodeURIComponent(key)
	      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
	      .replace(/[()]/g, escape);

	    var stringifiedAttributes = '';
	    for (var attributeName in attributes) {
	      if (!attributes[attributeName]) {
	        continue
	      }

	      stringifiedAttributes += '; ' + attributeName;

	      if (attributes[attributeName] === true) {
	        continue
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

	    return (document.cookie =
	      key + '=' + converter.write(value, key) + stringifiedAttributes)
	  }

	  function get (key) {
	    if (typeof document === 'undefined' || (arguments.length && !key)) {
	      return
	    }

	    // To prevent the for loop in the first place assign an empty array
	    // in case there are no cookies at all.
	    var cookies = document.cookie ? document.cookie.split('; ') : [];
	    var jar = {};
	    for (var i = 0; i < cookies.length; i++) {
	      var parts = cookies[i].split('=');
	      var value = parts.slice(1).join('=');

	      try {
	        var foundKey = decodeURIComponent(parts[0]);
	        jar[foundKey] = converter.read(value, foundKey);

	        if (key === foundKey) {
	          break
	        }
	      } catch (e) {}
	    }

	    return key ? jar[key] : jar
	  }

	  return Object.create(
	    {
	      set: set,
	      get: get,
	      remove: function (key, attributes) {
	        set(
	          key,
	          '',
	          assign$4({}, attributes, {
	            expires: -1
	          })
	        );
	      },
	      withAttributes: function (attributes) {
	        return init(this.converter, assign$4({}, this.attributes, attributes))
	      },
	      withConverter: function (converter) {
	        return init(assign$4({}, this.converter, converter), this.attributes)
	      }
	    },
	    {
	      attributes: { value: Object.freeze(defaultAttributes) },
	      converter: { value: Object.freeze(converter) }
	    }
	  )
	}

	var api$1 = init(defaultConverter, { path: '/' });

	var ACCESS_TOKEN_NAME = 'token_access_token';
	var REFRESH_TOKEN_NAME = 'token_refresh_token';
	var TOKEN_CREATE_TIME_NAME = 'token_createtime';
	var TOKEN_EXPIRED_NAME = 'token_expires_in';
	var TOKEN_REFRESH_BEFORE = _parseInt(2000 + Math.random() * 300, 10);
	var TOKEN_AUTO_REFRESH_INTERVAL = 300;
	var TOKEN_AUTO_SYNC_INTERVAL = 1000 * 60;
	var TOKEN_AUTO_SYNC_RESTART = 1000 * 60;
	var TOKEN_TYPE = 'token_type';
	var TOKEN_SCOPE = 'token_scope';
	var TOKEN_CHECK_SUM = 'token_checksum';
	var LOGOUT_TIME = 1000 * 43200;
	var MAX_REQUEST_TIMES = 20;

	var check = function (it) {
	  return it && it.Math == Math && it;
	};
	var global$m =
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$c = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$b = fails$c;
	var descriptors = !fails$b(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$a = fails$c;
	var functionBindNative = !fails$a(function () {
	  var test = (function () {  }).bind();
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$2 = functionBindNative;
	var call$9 = Function.prototype.call;
	var functionCall = NATIVE_BIND$2 ? call$9.bind(call$9) : function () {
	  return call$9.apply(call$9, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$2 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$1 = functionBindNative;
	var FunctionPrototype$3 = Function.prototype;
	var bind$j = FunctionPrototype$3.bind;
	var call$8 = FunctionPrototype$3.call;
	var uncurryThis$e = NATIVE_BIND$1 && bind$j.bind(call$8, call$8);
	var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
	  return fn && uncurryThis$e(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$8.apply(fn, arguments);
	  };
	};

	var uncurryThis$d = functionUncurryThis;
	var toString$3 = uncurryThis$d({}.toString);
	var stringSlice = uncurryThis$d(''.slice);
	var classofRaw$1 = function (it) {
	  return stringSlice(toString$3(it), 8, -1);
	};

	var global$l = global$m;
	var uncurryThis$c = functionUncurryThis;
	var fails$9 = fails$c;
	var classof$3 = classofRaw$1;
	var Object$4 = global$l.Object;
	var split = uncurryThis$c(''.split);
	var indexedObject = fails$9(function () {
	  return !Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$3(it) == 'String' ? split(it, '') : Object$4(it);
	} : Object$4;

	var global$k = global$m;
	var TypeError$7 = global$k.TypeError;
	var requireObjectCoercible$2 = function (it) {
	  if (it == undefined) throw TypeError$7("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$2;
	var toIndexedObject$4 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$1(it));
	};

	var isCallable$c = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$b = isCallable$c;
	var isObject$8 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$b(it);
	};

	var global$j = global$m;
	var isCallable$a = isCallable$c;
	var aFunction = function (argument) {
	  return isCallable$a(argument) ? argument : undefined;
	};
	var getBuiltIn$4 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$j[namespace]) : global$j[namespace] && global$j[namespace][method];
	};

	var uncurryThis$b = functionUncurryThis;
	var objectIsPrototypeOf = uncurryThis$b({}.isPrototypeOf);

	var getBuiltIn$3 = getBuiltIn$4;
	var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

	var global$i = global$m;
	var userAgent = engineUserAgent;
	var process$1 = global$i.process;
	var Deno$1 = global$i.Deno;
	var versions = process$1 && process$1.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version;
	if (v8) {
	  match = v8.split('.');
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}
	var engineV8Version = version;

	var V8_VERSION = engineV8Version;
	var fails$8 = fails$c;
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$8(function () {
	  var symbol = Symbol();
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	var NATIVE_SYMBOL$1 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$h = global$m;
	var getBuiltIn$2 = getBuiltIn$4;
	var isCallable$9 = isCallable$c;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var Object$3 = global$h.Object;
	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$2('Symbol');
	  return isCallable$9($Symbol) && isPrototypeOf$3($Symbol.prototype, Object$3(it));
	};

	var global$g = global$m;
	var String$2 = global$g.String;
	var tryToString$2 = function (argument) {
	  try {
	    return String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$f = global$m;
	var isCallable$8 = isCallable$c;
	var tryToString$1 = tryToString$2;
	var TypeError$6 = global$f.TypeError;
	var aCallable$7 = function (argument) {
	  if (isCallable$8(argument)) return argument;
	  throw TypeError$6(tryToString$1(argument) + ' is not a function');
	};

	var aCallable$6 = aCallable$7;
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$6(func);
	};

	var global$e = global$m;
	var call$7 = functionCall;
	var isCallable$7 = isCallable$c;
	var isObject$7 = isObject$8;
	var TypeError$5 = global$e.TypeError;
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
	  if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$7(fn, input))) return val;
	  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$7(fn, input))) return val;
	  throw TypeError$5("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var global$d = global$m;
	var defineProperty$2 = Object.defineProperty;
	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$2(global$d, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$d[key] = value;
	  } return value;
	};

	var global$c = global$m;
	var setGlobal$2 = setGlobal$3;
	var SHARED = '__core-js_shared__';
	var store$3 = global$c[SHARED] || setGlobal$2(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;
	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.22.0',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var global$b = global$m;
	var requireObjectCoercible = requireObjectCoercible$2;
	var Object$2 = global$b.Object;
	var toObject$4 = function (argument) {
	  return Object$2(requireObjectCoercible(argument));
	};

	var uncurryThis$a = functionUncurryThis;
	var toObject$3 = toObject$4;
	var hasOwnProperty = uncurryThis$a({}.hasOwnProperty);
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$3(it), key);
	};

	var uncurryThis$9 = functionUncurryThis;
	var id = 0;
	var postfix = Math.random();
	var toString$2 = uncurryThis$9(1.0.toString);
	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
	};

	var global$a = global$m;
	var shared$2 = shared$3.exports;
	var hasOwn$8 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$1 = global$a.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
	var wellKnownSymbol$4 = function (name) {
	  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$9 = global$m;
	var call$6 = functionCall;
	var isObject$6 = isObject$8;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$3 = wellKnownSymbol$4;
	var TypeError$4 = global$9.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$6(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$6(exoticToPrim, input, pref);
	    if (!isObject$6(result) || isSymbol$1(result)) return result;
	    throw TypeError$4("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;
	var toPropertyKey$2 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$8 = global$m;
	var isObject$5 = isObject$8;
	var document$1 = global$8.document;
	var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);
	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$7 = descriptors;
	var fails$7 = fails$c;
	var createElement = documentCreateElement;
	var ie8DomDefine = !DESCRIPTORS$7 && !fails$7(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$6 = descriptors;
	var call$5 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$1 = createPropertyDescriptor$2;
	var toIndexedObject$3 = toIndexedObject$4;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$7 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$3(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {  }
	  if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$5(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$5 = descriptors;
	var fails$6 = fails$c;
	var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$6(function () {
	  return Object.defineProperty(function () {  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var global$7 = global$m;
	var isObject$4 = isObject$8;
	var String$1 = global$7.String;
	var TypeError$3 = global$7.TypeError;
	var anObject$4 = function (argument) {
	  if (isObject$4(argument)) return argument;
	  throw TypeError$3(String$1(argument) + ' is not an object');
	};

	var global$6 = global$m;
	var DESCRIPTORS$4 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$3 = anObject$4;
	var toPropertyKey = toPropertyKey$2;
	var TypeError$2 = global$6.TypeError;
	var $defineProperty = Object.defineProperty;
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';
	objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$3(O);
	  P = toPropertyKey(P);
	  anObject$3(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$3(O);
	  P = toPropertyKey(P);
	  anObject$3(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$3 = descriptors;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$2;
	var createNonEnumerableProperty$3 = DESCRIPTORS$3 ? function (object, key, value) {
	  return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$2 = {exports: {}};

	var uncurryThis$8 = functionUncurryThis;
	var isCallable$6 = isCallable$c;
	var store$1 = sharedStore;
	var functionToString$1 = uncurryThis$8(Function.toString);
	if (!isCallable$6(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString$1(it);
	  };
	}
	var inspectSource$2 = store$1.inspectSource;

	var global$5 = global$m;
	var isCallable$5 = isCallable$c;
	var inspectSource$1 = inspectSource$2;
	var WeakMap$2 = global$5.WeakMap;
	var nativeWeakMap = isCallable$5(WeakMap$2) && /native code/.test(inspectSource$1(WeakMap$2));

	var shared$1 = shared$3.exports;
	var uid = uid$2;
	var keys$3 = shared$1('keys');
	var sharedKey$1 = function (key) {
	  return keys$3[key] || (keys$3[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$4 = global$m;
	var uncurryThis$7 = functionUncurryThis;
	var isObject$3 = isObject$8;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
	var hasOwn$6 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$4.TypeError;
	var WeakMap$1 = global$4.WeakMap;
	var set$6, get$2, has$2;
	var enforce = function (it) {
	  return has$2(it) ? get$2(it) : set$6(it, {});
	};
	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$3(it) || (state = get$2(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};
	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap$1());
	  var wmget = uncurryThis$7(store.get);
	  var wmhas = uncurryThis$7(store.has);
	  var wmset = uncurryThis$7(store.set);
	  set$6 = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get$2 = function (it) {
	    return wmget(store, it) || {};
	  };
	  has$2 = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$2[STATE] = true;
	  set$6 = function (it, metadata) {
	    if (hasOwn$6(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$2(it, STATE, metadata);
	    return metadata;
	  };
	  get$2 = function (it) {
	    return hasOwn$6(it, STATE) ? it[STATE] : {};
	  };
	  has$2 = function (it) {
	    return hasOwn$6(it, STATE);
	  };
	}
	var internalState = {
	  set: set$6,
	  get: get$2,
	  has: has$2,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$2 = descriptors;
	var hasOwn$5 = hasOwnProperty_1;
	var FunctionPrototype$2 = Function.prototype;
	var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn$5(FunctionPrototype$2, 'name');
	var PROPER = EXISTS && (function something() {  }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$2, 'name').configurable));
	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$3 = global$m;
	var isCallable$4 = isCallable$c;
	var hasOwn$4 = hasOwnProperty_1;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
	var setGlobal$1 = setGlobal$3;
	var inspectSource = inspectSource$2;
	var InternalStateModule = internalState;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(String).split('String');
	(redefine$2.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable$4(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	      createNonEnumerableProperty$1(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global$3) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$1(O, key, value);
	})(Function.prototype, 'toString', function toString() {
	  return isCallable$4(this) && getInternalState(this).source || inspectSource(this);
	});

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
	var max = Math.max;
	var min$1 = Math.min;
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;
	var min = Math.min;
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0;
	};

	var toLength = toLength$1;
	var lengthOfArrayLike$1 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$2 = toIndexedObject$4;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike = lengthOfArrayLike$1;
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$2($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	var arrayIncludes = {
	  includes: createMethod(true),
	  indexOf: createMethod(false)
	};

	var uncurryThis$6 = functionUncurryThis;
	var hasOwn$3 = hasOwnProperty_1;
	var toIndexedObject$1 = toIndexedObject$4;
	var indexOf$6 = arrayIncludes.indexOf;
	var hiddenKeys$1 = hiddenKeys$3;
	var push$2 = uncurryThis$6([].push);
	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$3(hiddenKeys$1, key) && hasOwn$3(O, key) && push$2(result, key);
	  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
	    ~indexOf$6(result, key) || push$2(result, key);
	  }
	  return result;
	};

	var enumBugKeys$2 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$2;
	var hiddenKeys = enumBugKeys$1.concat('length', 'prototype');
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$1 = getBuiltIn$4;
	var uncurryThis$5 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject$2 = anObject$4;
	var concat$2 = uncurryThis$5([].concat);
	var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$2(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$2 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$5 = fails$c;
	var isCallable$3 = isCallable$c;
	var replacement = /#|\.prototype\./;
	var isForced$1 = function (feature, detection) {
	  var value = data$1[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$3(detection) ? fails$5(detection)
	    : !!detection;
	};
	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};
	var data$1 = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';
	var isForced_1 = isForced$1;

	var global$2 = global$m;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$3;
	var redefine$1 = redefine$2.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$2;
	  } else if (STATIC) {
	    target = global$2[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$2[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    redefine$1(target, key, sourceProperty, options);
	  }
	};

	var fails$4 = fails$c;
	var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$4(function () {
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $$q = _export;
	var uncurryThis$4 = functionUncurryThis;
	var IndexedObject$1 = indexedObject;
	var toIndexedObject = toIndexedObject$4;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
	var un$Join = uncurryThis$4([].join);
	var ES3_STRINGS = IndexedObject$1 != Object;
	var STRICT_METHOD = arrayMethodIsStrict$1('join', ',');
	$$q({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
	  join: function join(separator) {
	    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var getPrototypeOf = getPrototypeOf$4;

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var toStringTag$2 = WrappedWellKnownSymbolModule.f('toStringTag');

	var parent$i = toStringTag$2;
	var toStringTag$1 = parent$i;

	var toStringTag = toStringTag$1;

	var classof$2 = classof$f;
	var hasOwn$1 = hasOwnProperty_1$1;
	var isNullOrUndefined$1 = isNullOrUndefined$8;
	var wellKnownSymbol$2 = wellKnownSymbol$t;
	var Iterators = iterators;
	var ITERATOR = wellKnownSymbol$2('iterator');
	var $Object = Object;
	var isIterable$6 = function (it) {
	  if (isNullOrUndefined$1(it)) return false;
	  var O = $Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || hasOwn$1(Iterators, classof$2(O));
	};

	var isIterable$5 = isIterable$6;
	var isIterable_1 = isIterable$5;

	var parent$h = isIterable_1;
	var isIterable$4 = parent$h;

	var parent$g = isIterable$4;
	var isIterable$3 = parent$g;

	var parent$f = isIterable$3;
	var isIterable$2 = parent$f;

	var isIterable$1 = isIterable$2;

	var isIterable = isIterable$1;

	var $$p = _export$1;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	$$p({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn ) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$2 = getBuiltInPrototypeMethod$b;
	var map$6 = getBuiltInPrototypeMethod$2('Array', 'map');

	var isPrototypeOf$2 = objectIsPrototypeOf$1;
	var method$2 = map$6;
	var ArrayPrototype$1 = Array.prototype;
	var map$5 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$1 || (isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.map) ? method$2 : own;
	};

	var parent$e = map$5;
	var map$4 = parent$e;

	var map$3 = map$4;

	var $$o = _export$1;
	var toObject$2 = toObject$c;
	var nativeKeys$1 = objectKeys$5;
	var fails$3 = fails$E;
	var FAILS_ON_PRIMITIVES$1 = fails$3(function () { nativeKeys$1(1); });
	$$o({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
	  keys: function keys(it) {
	    return nativeKeys$1(toObject$2(it));
	  }
	});

	var path$3 = path$j;
	var keys$2 = path$3.Object.keys;

	var parent$d = keys$2;
	var keys$1 = parent$d;

	var keys = keys$1;

	var DESCRIPTORS$1 = descriptors$1;
	var uncurryThis$3 = functionUncurryThis$1;
	var call$4 = functionCall$1;
	var fails$2 = fails$E;
	var objectKeys$1 = objectKeys$5;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols$1;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable$1;
	var toObject$1 = toObject$c;
	var IndexedObject = indexedObject$1;
	var $assign = Object.assign;
	var defineProperty$1 = Object.defineProperty;
	var concat$1 = uncurryThis$3([].concat);
	var objectAssign = !$assign || fails$2(function () {
	  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$1(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  var A = {};
	  var B = {};
	  var symbol = Symbol('assign detection');
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) {
	  var T = toObject$1(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$1 || call$4(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$n = _export$1;
	var assign$3 = objectAssign;
	$$n({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$3 }, {
	  assign: assign$3
	});

	var path$2 = path$j;
	var assign$2 = path$2.Object.assign;

	var parent$c = assign$2;
	var assign$1 = parent$c;

	var assign = assign$1;

	var forEach$1 = forEach$6;

	function isString$1(str) {
	  return typeof str === 'string';
	}
	function isFunction$1(value) {
	  return typeof value === 'function';
	}
	function isPlainObject$1(value) {
	  if (_typeof$1(value) !== 'object' || value === null) {
	    return false;
	  }
	  var prototype = getPrototypeOf(value);
	  return (prototype === null || prototype === Object.prototype || getPrototypeOf(prototype) === null) && !(toStringTag in value) && !isIterable(value);
	}
	function queryString(params) {
	  var _context;
	  return map$3(_context = keys(params)).call(_context, function (key) {
	    var _context2;
	    return concat$4(_context2 = "".concat(key, "=")).call(_context2, params[key]);
	  }).join('&');
	}
	function rand(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}
	var deepMerge = assign || function assign(target) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	  if (isPlainObject$1(target) && args.length > 0) {
	    forEach$1(args).call(args, function (arg) {
	      if (isPlainObject$1(arg)) {
	        var _context3;
	        forEach$1(_context3 = keys(arg)).call(_context3, function (key) {
	          target[key] = arg[key];
	        });
	      }
	    });
	  }
	  return target;
	};
	function isSet() {
	  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    values[_key2] = arguments[_key2];
	  }
	  if (values.length === 0) {
	    throw new Error('You must pass at least one parameter');
	  }
	  for (var _i = 0, _values = values; _i < _values.length; _i++) {
	    var value = _values[_i];
	    if ((value !== null && value !== void 0 ? value : null) === null) {
	      return false;
	    }
	  }
	  return true;
	}

	var axios$2 = {exports: {}};

	var bind$i = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	var bind$h = bind$i;
	var toString$1 = Object.prototype.toString;
	function isArray(val) {
	  return Array.isArray(val);
	}
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}
	function isArrayBuffer(val) {
	  return toString$1.call(val) === '[object ArrayBuffer]';
	}
	function isFormData(val) {
	  return toString$1.call(val) === '[object FormData]';
	}
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
	  }
	  return result;
	}
	function isString(val) {
	  return typeof val === 'string';
	}
	function isNumber(val) {
	  return typeof val === 'number';
	}
	function isObject$2(val) {
	  return val !== null && typeof val === 'object';
	}
	function isPlainObject(val) {
	  if (toString$1.call(val) !== '[object Object]') {
	    return false;
	  }
	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}
	function isDate(val) {
	  return toString$1.call(val) === '[object Date]';
	}
	function isFile(val) {
	  return toString$1.call(val) === '[object File]';
	}
	function isBlob(val) {
	  return toString$1.call(val) === '[object Blob]';
	}
	function isFunction(val) {
	  return toString$1.call(val) === '[object Function]';
	}
	function isStream(val) {
	  return isObject$2(val) && isFunction(val.pipe);
	}
	function isURLSearchParams(val) {
	  return toString$1.call(val) === '[object URLSearchParams]';
	}
	function trim(str) {
	  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	}
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
	function forEach(obj, fn) {
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	  if (typeof obj !== 'object') {
	    obj = [obj];
	  }
	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	function merge() {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind$h(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}
	var utils$e = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject$2,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM
	};

	var utils$d = utils$e;
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	var buildURL$2 = function buildURL(url, params, paramsSerializer) {
	  if (!params) {
	    return url;
	  }
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils$d.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	    utils$d.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	      if (utils$d.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	      utils$d.forEach(val, function parseValue(v) {
	        if (utils$d.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils$d.isObject(v)) {
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

	var utils$c = utils$e;
	function InterceptorManager$1() {
	  this.handlers = [];
	}
	InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected,
	    synchronous: options ? options.synchronous : false,
	    runWhen: options ? options.runWhen : null
	  });
	  return this.handlers.length - 1;
	};
	InterceptorManager$1.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	InterceptorManager$1.prototype.forEach = function forEach(fn) {
	  utils$c.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	var InterceptorManager_1 = InterceptorManager$1;

	var utils$b = utils$e;
	var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
	  utils$b.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	var enhanceError$2 = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;
	  error.toJSON = function toJSON() {
	    return {
	      message: this.message,
	      name: this.name,
	      description: this.description,
	      number: this.number,
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      config: this.config,
	      code: this.code,
	      status: this.response && this.response.status ? this.response.status : null
	    };
	  };
	  return error;
	};

	var transitional = {
	  silentJSONParsing: true,
	  forcedJSONParsing: true,
	  clarifyTimeoutError: false
	};

	var enhanceError$1 = enhanceError$2;
	var createError$2 = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError$1(error, config, code, request, response);
	};

	var createError$1 = createError$2;
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

	var utils$a = utils$e;
	var cookies$1 = (
	  utils$a.isStandardBrowserEnv() ?
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));
	          if (utils$a.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }
	          if (utils$a.isString(path)) {
	            cookie.push('path=' + path);
	          }
	          if (utils$a.isString(domain)) {
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
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);

	var isAbsoluteURL$1 = function isAbsoluteURL(url) {
	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	};

	var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	var isAbsoluteURL = isAbsoluteURL$1;
	var combineURLs = combineURLs$1;
	var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

	var utils$9 = utils$e;
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	var parseHeaders$1 = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	  if (!headers) { return parsed; }
	  utils$9.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils$9.trim(line.substr(0, i)).toLowerCase();
	    val = utils$9.trim(line.substr(i + 1));
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

	var utils$8 = utils$e;
	var isURLSameOrigin$1 = (
	  utils$8.isStandardBrowserEnv() ?
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;
	      function resolveURL(url) {
	        var href = url;
	        if (msie) {
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }
	        urlParsingNode.setAttribute('href', href);
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
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils$8.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);

	function Cancel$3(message) {
	  this.message = message;
	}
	Cancel$3.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	Cancel$3.prototype.__CANCEL__ = true;
	var Cancel_1 = Cancel$3;

	var utils$7 = utils$e;
	var settle = settle$1;
	var cookies = cookies$1;
	var buildURL$1 = buildURL$2;
	var buildFullPath = buildFullPath$1;
	var parseHeaders = parseHeaders$1;
	var isURLSameOrigin = isURLSameOrigin$1;
	var createError = createError$2;
	var transitionalDefaults$1 = transitional;
	var Cancel$2 = Cancel_1;
	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	    var responseType = config.responseType;
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }
	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }
	    if (utils$7.isFormData(requestData)) {
	      delete requestHeaders['Content-Type'];
	    }
	    var request = new XMLHttpRequest();
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
	    request.timeout = config.timeout;
	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
	        request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	      settle(function _resolve(value) {
	        resolve(value);
	        done();
	      }, function _reject(err) {
	        reject(err);
	        done();
	      }, response);
	      request = null;
	    }
	    if ('onloadend' in request) {
	      request.onloadend = onloadend;
	    } else {
	      request.onreadystatechange = function handleLoad() {
	        if (!request || request.readyState !== 4) {
	          return;
	        }
	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	          return;
	        }
	        setTimeout(onloadend);
	      };
	    }
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }
	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
	      request = null;
	    };
	    request.onerror = function handleError() {
	      reject(createError('Network Error', config, null, request));
	      request = null;
	    };
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = config.transitional || transitionalDefaults$1;
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(
	        timeoutErrorMessage,
	        config,
	        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
	        request));
	      request = null;
	    };
	    if (utils$7.isStandardBrowserEnv()) {
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	    if ('setRequestHeader' in request) {
	      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          delete requestHeaders[key];
	        } else {
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	    if (!utils$7.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }
	    if (responseType && responseType !== 'json') {
	      request.responseType = config.responseType;
	    }
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	    if (config.cancelToken || config.signal) {
	      onCanceled = function(cancel) {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || (cancel && cancel.type) ? new Cancel$2('canceled') : cancel);
	        request.abort();
	        request = null;
	      };
	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }
	    if (!requestData) {
	      requestData = null;
	    }
	    request.send(requestData);
	  });
	};

	var utils$6 = utils$e;
	var normalizeHeaderName = normalizeHeaderName$1;
	var enhanceError = enhanceError$2;
	var transitionalDefaults = transitional;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	function setContentTypeIfUnset(headers, value) {
	  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    adapter = xhr;
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    adapter = xhr;
	  }
	  return adapter;
	}
	function stringifySafely(rawValue, parser, encoder) {
	  if (utils$6.isString(rawValue)) {
	    try {
	      (parser || JSON.parse)(rawValue);
	      return utils$6.trim(rawValue);
	    } catch (e) {
	      if (e.name !== 'SyntaxError') {
	        throw e;
	      }
	    }
	  }
	  return (encoder || JSON.stringify)(rawValue);
	}
	var defaults$3 = {
	  transitional: transitionalDefaults,
	  adapter: getDefaultAdapter(),
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils$6.isFormData(data) ||
	      utils$6.isArrayBuffer(data) ||
	      utils$6.isBuffer(data) ||
	      utils$6.isStream(data) ||
	      utils$6.isFile(data) ||
	      utils$6.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils$6.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$6.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils$6.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
	      setContentTypeIfUnset(headers, 'application/json');
	      return stringifySafely(data);
	    }
	    return data;
	  }],
	  transformResponse: [function transformResponse(data) {
	    var transitional = this.transitional || defaults$3.transitional;
	    var silentJSONParsing = transitional && transitional.silentJSONParsing;
	    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
	    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
	    if (strictJSONParsing || (forcedJSONParsing && utils$6.isString(data) && data.length)) {
	      try {
	        return JSON.parse(data);
	      } catch (e) {
	        if (strictJSONParsing) {
	          if (e.name === 'SyntaxError') {
	            throw enhanceError(e, this, 'E_JSON_PARSE');
	          }
	          throw e;
	        }
	      }
	    }
	    return data;
	  }],
	  timeout: 0,
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	  maxContentLength: -1,
	  maxBodyLength: -1,
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  },
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    }
	  }
	};
	utils$6.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults$3.headers[method] = {};
	});
	utils$6.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
	});
	var defaults_1 = defaults$3;

	var utils$5 = utils$e;
	var defaults$2 = defaults_1;
	var transformData$1 = function transformData(data, headers, fns) {
	  var context = this || defaults$2;
	  utils$5.forEach(fns, function transform(fn) {
	    data = fn.call(context, data, headers);
	  });
	  return data;
	};

	var isCancel$1 = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	var utils$4 = utils$e;
	var transformData = transformData$1;
	var isCancel = isCancel$1;
	var defaults$1 = defaults_1;
	var Cancel$1 = Cancel_1;
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	  if (config.signal && config.signal.aborted) {
	    throw new Cancel$1('canceled');
	  }
	}
	var dispatchRequest$1 = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	  config.headers = config.headers || {};
	  config.data = transformData.call(
	    config,
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	  config.headers = utils$4.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );
	  utils$4.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	  var adapter = config.adapter || defaults$1.adapter;
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	    response.data = transformData.call(
	      config,
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	      if (reason && reason.response) {
	        reason.response.data = transformData.call(
	          config,
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	    return Promise.reject(reason);
	  });
	};

	var utils$3 = utils$e;
	var mergeConfig$2 = function mergeConfig(config1, config2) {
	  config2 = config2 || {};
	  var config = {};
	  function getMergedValue(target, source) {
	    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source)) {
	      return utils$3.merge(target, source);
	    } else if (utils$3.isPlainObject(source)) {
	      return utils$3.merge({}, source);
	    } else if (utils$3.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }
	  function mergeDeepProperties(prop) {
	    if (!utils$3.isUndefined(config2[prop])) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils$3.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  function valueFromConfig2(prop) {
	    if (!utils$3.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    }
	  }
	  function defaultToConfig2(prop) {
	    if (!utils$3.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    } else if (!utils$3.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  function mergeDirectKeys(prop) {
	    if (prop in config2) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  var mergeMap = {
	    'url': valueFromConfig2,
	    'method': valueFromConfig2,
	    'data': valueFromConfig2,
	    'baseURL': defaultToConfig2,
	    'transformRequest': defaultToConfig2,
	    'transformResponse': defaultToConfig2,
	    'paramsSerializer': defaultToConfig2,
	    'timeout': defaultToConfig2,
	    'timeoutMessage': defaultToConfig2,
	    'withCredentials': defaultToConfig2,
	    'adapter': defaultToConfig2,
	    'responseType': defaultToConfig2,
	    'xsrfCookieName': defaultToConfig2,
	    'xsrfHeaderName': defaultToConfig2,
	    'onUploadProgress': defaultToConfig2,
	    'onDownloadProgress': defaultToConfig2,
	    'decompress': defaultToConfig2,
	    'maxContentLength': defaultToConfig2,
	    'maxBodyLength': defaultToConfig2,
	    'transport': defaultToConfig2,
	    'httpAgent': defaultToConfig2,
	    'httpsAgent': defaultToConfig2,
	    'cancelToken': defaultToConfig2,
	    'socketPath': defaultToConfig2,
	    'responseEncoding': defaultToConfig2,
	    'validateStatus': mergeDirectKeys
	  };
	  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
	    var merge = mergeMap[prop] || mergeDeepProperties;
	    var configValue = merge(prop);
	    (utils$3.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
	  });
	  return config;
	};

	var data = {
	  "version": "0.26.1"
	};

	var VERSION = data.version;
	var validators$1 = {};
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
	  validators$1[type] = function validator(thing) {
	    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
	  };
	});
	var deprecatedWarnings = {};
	validators$1.transitional = function transitional(validator, version, message) {
	  function formatMessage(opt, desc) {
	    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
	  }
	  return function(value, opt, opts) {
	    if (validator === false) {
	      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
	    }
	    if (version && !deprecatedWarnings[opt]) {
	      deprecatedWarnings[opt] = true;
	      console.warn(
	        formatMessage(
	          opt,
	          ' has been deprecated since v' + version + ' and will be removed in the near future'
	        )
	      );
	    }
	    return validator ? validator(value, opt, opts) : true;
	  };
	};
	function assertOptions(options, schema, allowUnknown) {
	  if (typeof options !== 'object') {
	    throw new TypeError('options must be an object');
	  }
	  var keys = Object.keys(options);
	  var i = keys.length;
	  while (i-- > 0) {
	    var opt = keys[i];
	    var validator = schema[opt];
	    if (validator) {
	      var value = options[opt];
	      var result = value === undefined || validator(value, opt, options);
	      if (result !== true) {
	        throw new TypeError('option ' + opt + ' must be ' + result);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw Error('Unknown option ' + opt);
	    }
	  }
	}
	var validator$1 = {
	  assertOptions: assertOptions,
	  validators: validators$1
	};

	var utils$2 = utils$e;
	var buildURL = buildURL$2;
	var InterceptorManager = InterceptorManager_1;
	var dispatchRequest = dispatchRequest$1;
	var mergeConfig$1 = mergeConfig$2;
	var validator = validator$1;
	var validators = validator.validators;
	function Axios$1(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	Axios$1.prototype.request = function request(configOrUrl, config) {
	  if (typeof configOrUrl === 'string') {
	    config = config || {};
	    config.url = configOrUrl;
	  } else {
	    config = configOrUrl || {};
	  }
	  config = mergeConfig$1(this.defaults, config);
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }
	  var transitional = config.transitional;
	  if (transitional !== undefined) {
	    validator.assertOptions(transitional, {
	      silentJSONParsing: validators.transitional(validators.boolean),
	      forcedJSONParsing: validators.transitional(validators.boolean),
	      clarifyTimeoutError: validators.transitional(validators.boolean)
	    }, false);
	  }
	  var requestInterceptorChain = [];
	  var synchronousRequestInterceptors = true;
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
	      return;
	    }
	    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
	    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	  var responseInterceptorChain = [];
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	  var promise;
	  if (!synchronousRequestInterceptors) {
	    var chain = [dispatchRequest, undefined];
	    Array.prototype.unshift.apply(chain, requestInterceptorChain);
	    chain = chain.concat(responseInterceptorChain);
	    promise = Promise.resolve(config);
	    while (chain.length) {
	      promise = promise.then(chain.shift(), chain.shift());
	    }
	    return promise;
	  }
	  var newConfig = config;
	  while (requestInterceptorChain.length) {
	    var onFulfilled = requestInterceptorChain.shift();
	    var onRejected = requestInterceptorChain.shift();
	    try {
	      newConfig = onFulfilled(newConfig);
	    } catch (error) {
	      onRejected(error);
	      break;
	    }
	  }
	  try {
	    promise = dispatchRequest(newConfig);
	  } catch (error) {
	    return Promise.reject(error);
	  }
	  while (responseInterceptorChain.length) {
	    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
	  }
	  return promise;
	};
	Axios$1.prototype.getUri = function getUri(config) {
	  config = mergeConfig$1(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};
	utils$2.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  Axios$1.prototype[method] = function(url, config) {
	    return this.request(mergeConfig$1(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});
	utils$2.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  Axios$1.prototype[method] = function(url, data, config) {
	    return this.request(mergeConfig$1(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	var Axios_1 = Axios$1;

	var Cancel = Cancel_1;
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	  var token = this;
	  this.promise.then(function(cancel) {
	    if (!token._listeners) return;
	    var i;
	    var l = token._listeners.length;
	    for (i = 0; i < l; i++) {
	      token._listeners[i](cancel);
	    }
	    token._listeners = null;
	  });
	  this.promise.then = function(onfulfilled) {
	    var _resolve;
	    var promise = new Promise(function(resolve) {
	      token.subscribe(resolve);
	      _resolve = resolve;
	    }).then(onfulfilled);
	    promise.cancel = function reject() {
	      token.unsubscribe(_resolve);
	    };
	    return promise;
	  };
	  executor(function cancel(message) {
	    if (token.reason) {
	      return;
	    }
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	CancelToken.prototype.subscribe = function subscribe(listener) {
	  if (this.reason) {
	    listener(this.reason);
	    return;
	  }
	  if (this._listeners) {
	    this._listeners.push(listener);
	  } else {
	    this._listeners = [listener];
	  }
	};
	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
	  if (!this._listeners) {
	    return;
	  }
	  var index = this._listeners.indexOf(listener);
	  if (index !== -1) {
	    this._listeners.splice(index, 1);
	  }
	};
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

	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	var utils$1 = utils$e;
	var isAxiosError = function isAxiosError(payload) {
	  return utils$1.isObject(payload) && (payload.isAxiosError === true);
	};

	var utils = utils$e;
	var bind$g = bind$i;
	var Axios = Axios_1;
	var mergeConfig = mergeConfig$2;
	var defaults = defaults_1;
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind$g(Axios.prototype.request, context);
	  utils.extend(instance, Axios.prototype, context);
	  utils.extend(instance, context);
	  instance.create = function create(instanceConfig) {
	    return createInstance(mergeConfig(defaultConfig, instanceConfig));
	  };
	  return instance;
	}
	var axios$1 = createInstance(defaults);
	axios$1.Axios = Axios;
	axios$1.Cancel = Cancel_1;
	axios$1.CancelToken = CancelToken_1;
	axios$1.isCancel = isCancel$1;
	axios$1.VERSION = data.version;
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = spread;
	axios$1.isAxiosError = isAxiosError;
	axios$2.exports = axios$1;
	axios$2.exports.default = axios$1;

	var axios = axios$2.exports;

	var baseConfig = {
	  baseURL: '',
	  withCredentials: true,
	  timeout: 30000,
	  headers: {}
	};
	var api = {
	  sync: '/oauth2/token/api',
	  refresh: '/oauth2/token/api',
	  validate: '/api/oauth2/token'
	};
	function checkConfig() {
	  var _context;
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var keysArr = [];
	  forEach$1(_context = keys(config)).call(_context, function (key) {
	    if (!Object.prototype.hasOwnProperty.call(baseConfig, key)) {
	      keysArr.push(key);
	    }
	  });
	  var diff = keysArr.length && keysArr.length > 0;
	  if (diff) console.error("Request config error: [".concat(keysArr, "] not exists!"));
	  return diff;
	}
	var httpRequest = function httpRequest(config) {
	  var keyExists = checkConfig(config);
	  var newOptions = keyExists ? {} : deepMerge(baseConfig, isPlainObject$1(config) && config);
	  return axios.create(newOptions);
	};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$2;
	var objectKeys = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};

	var $$m = _export;
	var toObject = toObject$4;
	var nativeKeys = objectKeys;
	var fails$1 = fails$c;
	var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });
	$$m({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});

	var path$1 = path$j;
	var apply$1 = functionApply;
	if (!path$1.JSON) path$1.JSON = { stringify: JSON.stringify };
	var stringify$2 = function stringify(it, replacer, space) {
	  return apply$1(path$1.JSON.stringify, null, arguments);
	};

	var parent$b = stringify$2;
	var stringify$1 = parent$b;

	var stringify = stringify$1;

	var errorMsg = {
	  typeVerify: function typeVerify(type) {
	    return "[Type Error]: Must be a '".concat(type, "'.");
	  },
	  maxRequest: 'Number of requests exceeded limit.'
	};

	var stringTypeVerify = function stringTypeVerify(string) {
	  return !(!isString$1(string) && console.error(errorMsg.typeVerify('string')));
	};
	var webStorage = {
	  set: function set(key, value) {
	    if (stringTypeVerify(key)) {
	      localStorage.setItem(key, stringify(value));
	    }
	  },
	  get: function get(key) {
	    return stringTypeVerify(key) ? JSON.parse(localStorage.getItem(key)) : null;
	  },
	  remove: function remove(key) {
	    if (!stringTypeVerify(key)) {
	      return;
	    }
	    localStorage.removeItem(key);
	  },
	  clear: function clear() {
	    localStorage.clear();
	  }
	};

	var setTokens = function seTokens() {
	  var keyList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var keyObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  forEach$1(keyList).call(keyList, function (key) {
	    if (key in keyObj) {
	      webStorage.set(key, keyObj[key]);
	    }
	  });
	};
	var removeTokens = function removeToken() {
	  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  forEach$1(keys).call(keys, function (value) {
	    webStorage.remove(value);
	  });
	};

	var DESCRIPTORS = descriptors;
	var FUNCTION_NAME_EXISTS = functionName.EXISTS;
	var uncurryThis$2 = functionUncurryThis;
	var defineProperty = objectDefineProperty.f;
	var FunctionPrototype$1 = Function.prototype;
	var functionToString = uncurryThis$2(FunctionPrototype$1.toString);
	var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
	var regExpExec = uncurryThis$2(nameRE.exec);
	var NAME = 'name';
	if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
	  defineProperty(FunctionPrototype$1, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return regExpExec(nameRE, functionToString(this))[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	function reset(_x) {
	  return _reset.apply(this, arguments);
	}
	function _reset() {
	  _reset = _asyncToGenerator( regenerator.mark(function _callee(instance) {
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          removeTokens(instance.tokenKeys);
	          instance.autoSyncStop();
	          instance.autoRefreshStop();
	          instance.syncTimes = 0;
	          instance.refreshTimes = 0;
	          instance.axiosPending.clear();
	        case 6:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee);
	  }));
	  return _reset.apply(this, arguments);
	}
	function autoLogout(instance) {
	  setTimeout$1(function () {
	    return instance.logoutIAM();
	  }, LOGOUT_TIME);
	}
	function interceptors(instance) {
	  instance.rest.interceptors.request.use(function (config) {
	    if (!instance.options.xhr_with) {
	      delete config.headers['X-Requested-With'];
	    }
	    return config;
	  }, function (error) {
	    return promise.reject(error);
	  });
	  instance.cancelTimes = 0;
	  instance.rest.interceptors.response.use(function (res) {
	    return res;
	  }, function (error) {
	    var _response$status;
	    var response = error.response;
	    var errorCode = (_response$status = response === null || response === void 0 ? void 0 : response.status) !== null && _response$status !== void 0 ? _response$status : 0;
	    instance.cancelTimes += 1;
	    error.isLogout = true;
	    reset(instance).then(function () {
	      if (isFunction$1(instance.options.onLogout) && instance.cancelTimes === 1) {
	        instance.options.onLogout();
	      }
	    });
	    if (errorCode === 401) {
	      if (isFunction$1(instance.options.unauthorized)) {
	        instance.options.unauthorized();
	      }
	    }
	    return promise.reject(error);
	  });
	}
	function exception(instance, messageIpt, codeIpt) {
	  instance.code = codeIpt || 200;
	  instance.message = messageIpt || 'OK';
	  instance.name = 'exception';
	  return instance;
	}
	var privateMethods = {
	  interceptors: interceptors,
	  reset: reset,
	  autoLogout: autoLogout,
	  exception: exception
	};

	var uncurryThis$1 = functionUncurryThis$1;
	var aCallable$5 = aCallable$j;
	var isObject$1 = isObject$p;
	var hasOwn = hasOwnProperty_1$1;
	var arraySlice$1 = arraySlice$6;
	var NATIVE_BIND = functionBindNative$1;
	var $Function = Function;
	var concat = uncurryThis$1([].concat);
	var join = uncurryThis$1([].join);
	var factories = {};
	var construct$6 = function (C, argsLength, args) {
	  if (!hasOwn(factories, argsLength)) {
	    var list = [];
	    var i = 0;
	    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that ) {
	  var F = aCallable$5(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice$1(arguments, 1);
	  var boundFunction = function bound() {
	    var args = concat(partArgs, arraySlice$1(arguments));
	    return this instanceof boundFunction ? construct$6(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject$1(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var $$l = _export$1;
	var getBuiltIn = getBuiltIn$k;
	var apply = functionApply;
	var bind$f = functionBind;
	var aConstructor$1 = aConstructor$3;
	var anObject$1 = anObject$g;
	var isObject = isObject$p;
	var create = objectCreate;
	var fails = fails$E;
	var nativeConstruct = getBuiltIn('Reflect', 'construct');
	var ObjectPrototype = Object.prototype;
	var push$1 = [].push;
	var NEW_TARGET_BUG = fails(function () {
	  function F() {  }
	  return !(nativeConstruct(function () {  }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  nativeConstruct(function () {  });
	});
	var FORCED$1 = NEW_TARGET_BUG || ARGS_BUG;
	$$l({ target: 'Reflect', stat: true, forced: FORCED$1, sham: FORCED$1 }, {
	  construct: function construct(Target, args ) {
	    aConstructor$1(Target);
	    anObject$1(args);
	    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target === newTarget) {
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      var $args = [null];
	      apply(push$1, $args, args);
	      return new (apply(bind$f, Target, $args))();
	    }
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : ObjectPrototype);
	    var result = apply(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

	var path = path$j;
	var construct$5 = path.Reflect.construct;

	var parent$a = construct$5;
	var construct$4 = parent$a;

	var construct$3 = construct$4;

	var wellKnownSymbol$1 = wellKnownSymbol$4;
	var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
	var test = {};
	test[TO_STRING_TAG$1] = 'z';
	var toStringTagSupport = String(test) === '[object z]';

	var global$1 = global$m;
	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$2 = isCallable$c;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol = wellKnownSymbol$4;
	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var Object$1 = global$1.Object;
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {  }
	};
	var classof$1 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof = classof$1;
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var redefine = redefine$2.exports;
	var toString = objectToString;
	if (!TO_STRING_TAG_SUPPORT) {
	  redefine(Object.prototype, 'toString', toString, { unsafe: true });
	}

	var $$k = _export$1;
	var bind$e = functionBind;
	$$k({ target: 'Function', proto: true, forced: Function.bind !== bind$e }, {
	  bind: bind$e
	});

	var getBuiltInPrototypeMethod$1 = getBuiltInPrototypeMethod$b;
	var bind$d = getBuiltInPrototypeMethod$1('Function', 'bind');

	var isPrototypeOf$1 = objectIsPrototypeOf$1;
	var method$1 = bind$d;
	var FunctionPrototype = Function.prototype;
	var bind$c = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (isPrototypeOf$1(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method$1 : own;
	};

	var parent$9 = bind$c;
	var bind$b = parent$9;

	var parent$8 = bind$b;
	var bind$a = parent$8;

	var parent$7 = bind$a;
	var bind$9 = parent$7;

	var bind$8 = bind$9;
	var _bindInstanceProperty = bind$8;

	function _setPrototypeOf(o, p) {
	  var _context;
	  _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  _Object$defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}

	function _getPrototypeOf(o) {
	  var _context;
	  _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
	    return o.__proto__ || _Object$getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	var parent$6 = map$8;
	var map$2 = parent$6;

	var bind$7 = functionBindContext;
	var call$3 = functionCall$1;
	var aCallable$4 = aCallable$j;
	var aConstructor = aConstructor$3;
	var isNullOrUndefined = isNullOrUndefined$8;
	var iterate$c = iterate$l;
	var push = [].push;
	var collectionFrom = function from(source ) {
	  var length = arguments.length;
	  var mapFn = length > 1 ? arguments[1] : undefined;
	  var mapping, array, n, boundFunction;
	  aConstructor(this);
	  mapping = mapFn !== undefined;
	  if (mapping) aCallable$4(mapFn);
	  if (isNullOrUndefined(source)) return new this();
	  array = [];
	  if (mapping) {
	    n = 0;
	    boundFunction = bind$7(mapFn, length > 2 ? arguments[2] : undefined);
	    iterate$c(source, function (nextItem) {
	      call$3(push, array, boundFunction(nextItem, n++));
	    });
	  } else {
	    iterate$c(source, push, { that: array });
	  }
	  return new this(array);
	};

	var $$j = _export$1;
	var from = collectionFrom;
	$$j({ target: 'Map', stat: true, forced: true }, {
	  from: from
	});

	var arraySlice = arraySlice$6;
	var collectionOf = function of() {
	  return new this(arraySlice(arguments));
	};

	var $$i = _export$1;
	var of = collectionOf;
	$$i({ target: 'Map', stat: true, forced: true }, {
	  of: of
	});

	var tryToString = tryToString$8;
	var $TypeError$3 = TypeError;
	var aMap$e = function (it) {
	  if (typeof it == 'object' && 'size' in it && 'has' in it && 'get' in it && 'set' in it && 'delete' in it && 'entries' in it) return it;
	  throw new $TypeError$3(tryToString(it) + ' is not a map');
	};

	var $$h = _export$1;
	var aMap$d = aMap$e;
	var remove = mapHelpers.remove;
	$$h({ target: 'Map', proto: true, real: true, forced: true }, {
	  deleteAll: function deleteAll() {
	    var collection = aMap$d(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    } return !!allDeleted;
	  }
	});

	var $$g = _export$1;
	var aMap$c = aMap$e;
	var MapHelpers$4 = mapHelpers;
	var get$1 = MapHelpers$4.get;
	var has$1 = MapHelpers$4.has;
	var set$5 = MapHelpers$4.set;
	$$g({ target: 'Map', proto: true, real: true, forced: true }, {
	  emplace: function emplace(key, handler) {
	    var map = aMap$c(this);
	    var value, inserted;
	    if (has$1(map, key)) {
	      value = get$1(map, key);
	      if ('update' in handler) {
	        value = handler.update(value, key, map);
	        set$5(map, key, value);
	      } return value;
	    }
	    inserted = handler.insert(key, map);
	    set$5(map, key, inserted);
	    return inserted;
	  }
	});

	var call$2 = functionCall$1;
	var iterateSimple$1 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
	  var next = record.next;
	  var step, result;
	  while (!(step = call$2(next, iterator)).done) {
	    result = fn(step.value);
	    if (result !== undefined) return result;
	  }
	};

	var iterateSimple = iterateSimple$1;
	var mapIterate = function (map, fn, interruptible) {
	  return interruptible ? iterateSimple(map.entries(), function (entry) {
	    return fn(entry[1], entry[0]);
	  }, true) : map.forEach(fn);
	};

	var $$f = _export$1;
	var bind$6 = functionBindContext;
	var aMap$b = aMap$e;
	var iterate$b = mapIterate;
	$$f({ target: 'Map', proto: true, real: true, forced: true }, {
	  every: function every(callbackfn ) {
	    var map = aMap$b(this);
	    var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$b(map, function (value, key) {
	      if (!boundFunction(value, key, map)) return false;
	    }, true) !== false;
	  }
	});

	var $$e = _export$1;
	var bind$5 = functionBindContext;
	var aMap$a = aMap$e;
	var MapHelpers$3 = mapHelpers;
	var iterate$a = mapIterate;
	var Map$4 = MapHelpers$3.Map;
	var set$4 = MapHelpers$3.set;
	$$e({ target: 'Map', proto: true, real: true, forced: true }, {
	  filter: function filter(callbackfn ) {
	    var map = aMap$a(this);
	    var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$4();
	    iterate$a(map, function (value, key) {
	      if (boundFunction(value, key, map)) set$4(newMap, key, value);
	    });
	    return newMap;
	  }
	});

	var $$d = _export$1;
	var bind$4 = functionBindContext;
	var aMap$9 = aMap$e;
	var iterate$9 = mapIterate;
	$$d({ target: 'Map', proto: true, real: true, forced: true }, {
	  find: function find(callbackfn ) {
	    var map = aMap$9(this);
	    var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$9(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { value: value };
	    }, true);
	    return result && result.value;
	  }
	});

	var $$c = _export$1;
	var bind$3 = functionBindContext;
	var aMap$8 = aMap$e;
	var iterate$8 = mapIterate;
	$$c({ target: 'Map', proto: true, real: true, forced: true }, {
	  findKey: function findKey(callbackfn ) {
	    var map = aMap$8(this);
	    var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$8(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});

	var sameValueZero$1 = function (x, y) {
	  return x === y || x !== x && y !== y;
	};

	var $$b = _export$1;
	var sameValueZero = sameValueZero$1;
	var aMap$7 = aMap$e;
	var iterate$7 = mapIterate;
	$$b({ target: 'Map', proto: true, real: true, forced: true }, {
	  includes: function includes(searchElement) {
	    return iterate$7(aMap$7(this), function (value) {
	      if (sameValueZero(value, searchElement)) return true;
	    }, true) === true;
	  }
	});

	var $$a = _export$1;
	var call$1 = functionCall$1;
	var iterate$6 = iterate$l;
	var isCallable$1 = isCallable$A;
	var aCallable$3 = aCallable$j;
	var Map$3 = mapHelpers.Map;
	$$a({ target: 'Map', stat: true, forced: true }, {
	  keyBy: function keyBy(iterable, keyDerivative) {
	    var C = isCallable$1(this) ? this : Map$3;
	    var newMap = new C();
	    aCallable$3(keyDerivative);
	    var setter = aCallable$3(newMap.set);
	    iterate$6(iterable, function (element) {
	      call$1(setter, newMap, keyDerivative(element), element);
	    });
	    return newMap;
	  }
	});

	var $$9 = _export$1;
	var aMap$6 = aMap$e;
	var iterate$5 = mapIterate;
	$$9({ target: 'Map', proto: true, real: true, forced: true }, {
	  keyOf: function keyOf(searchElement) {
	    var result = iterate$5(aMap$6(this), function (value, key) {
	      if (value === searchElement) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});

	var $$8 = _export$1;
	var bind$2 = functionBindContext;
	var aMap$5 = aMap$e;
	var MapHelpers$2 = mapHelpers;
	var iterate$4 = mapIterate;
	var Map$2 = MapHelpers$2.Map;
	var set$3 = MapHelpers$2.set;
	$$8({ target: 'Map', proto: true, real: true, forced: true }, {
	  mapKeys: function mapKeys(callbackfn ) {
	    var map = aMap$5(this);
	    var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$2();
	    iterate$4(map, function (value, key) {
	      set$3(newMap, boundFunction(value, key, map), value);
	    });
	    return newMap;
	  }
	});

	var $$7 = _export$1;
	var bind$1 = functionBindContext;
	var aMap$4 = aMap$e;
	var MapHelpers$1 = mapHelpers;
	var iterate$3 = mapIterate;
	var Map$1 = MapHelpers$1.Map;
	var set$2 = MapHelpers$1.set;
	$$7({ target: 'Map', proto: true, real: true, forced: true }, {
	  mapValues: function mapValues(callbackfn ) {
	    var map = aMap$4(this);
	    var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$1();
	    iterate$3(map, function (value, key) {
	      set$2(newMap, key, boundFunction(value, key, map));
	    });
	    return newMap;
	  }
	});

	var $$6 = _export$1;
	var aMap$3 = aMap$e;
	var iterate$2 = iterate$l;
	var set$1 = mapHelpers.set;
	$$6({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
	  merge: function merge(iterable ) {
	    var map = aMap$3(this);
	    var argumentsLength = arguments.length;
	    var i = 0;
	    while (i < argumentsLength) {
	      iterate$2(arguments[i++], function (key, value) {
	        set$1(map, key, value);
	      }, { AS_ENTRIES: true });
	    }
	    return map;
	  }
	});

	var $$5 = _export$1;
	var aCallable$2 = aCallable$j;
	var aMap$2 = aMap$e;
	var iterate$1 = mapIterate;
	var $TypeError$2 = TypeError;
	$$5({ target: 'Map', proto: true, real: true, forced: true }, {
	  reduce: function reduce(callbackfn ) {
	    var map = aMap$2(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable$2(callbackfn);
	    iterate$1(map, function (value, key) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, key, map);
	      }
	    });
	    if (noInitial) throw new $TypeError$2('Reduce of empty map with no initial value');
	    return accumulator;
	  }
	});

	var $$4 = _export$1;
	var bind = functionBindContext;
	var aMap$1 = aMap$e;
	var iterate = mapIterate;
	$$4({ target: 'Map', proto: true, real: true, forced: true }, {
	  some: function some(callbackfn ) {
	    var map = aMap$1(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(map, function (value, key) {
	      if (boundFunction(value, key, map)) return true;
	    }, true) === true;
	  }
	});

	var $$3 = _export$1;
	var aCallable$1 = aCallable$j;
	var aMap = aMap$e;
	var MapHelpers = mapHelpers;
	var $TypeError$1 = TypeError;
	var get = MapHelpers.get;
	var has = MapHelpers.has;
	var set = MapHelpers.set;
	$$3({ target: 'Map', proto: true, real: true, forced: true }, {
	  update: function update(key, callback ) {
	    var map = aMap(this);
	    var length = arguments.length;
	    aCallable$1(callback);
	    var isPresentInMap = has(map, key);
	    if (!isPresentInMap && length < 3) {
	      throw new $TypeError$1('Updating absent value');
	    }
	    var value = isPresentInMap ? get(map, key) : aCallable$1(length > 2 ? arguments[2] : undefined)(key, map);
	    set(map, key, callback(value, key, map));
	    return map;
	  }
	});

	var call = functionCall$1;
	var aCallable = aCallable$j;
	var isCallable = isCallable$A;
	var anObject = anObject$g;
	var $TypeError = TypeError;
	var mapUpsert = function upsert(key, updateFn ) {
	  var map = anObject(this);
	  var get = aCallable(map.get);
	  var has = aCallable(map.has);
	  var set = aCallable(map.set);
	  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
	  var value;
	  if (!isCallable(updateFn) && !isCallable(insertFn)) {
	    throw new $TypeError('At least one callback required');
	  }
	  if (call(has, map, key)) {
	    value = call(get, map, key);
	    if (isCallable(updateFn)) {
	      value = updateFn(value);
	      call(set, map, key, value);
	    }
	  } else if (isCallable(insertFn)) {
	    value = insertFn();
	    call(set, map, key, value);
	  } return value;
	};

	var $$2 = _export$1;
	var upsert$1 = mapUpsert;
	$$2({ target: 'Map', proto: true, real: true, forced: true }, {
	  upsert: upsert$1
	});

	var $$1 = _export$1;
	var upsert = mapUpsert;
	$$1({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
	  updateOrInsert: upsert
	});

	var parent$5 = map$2;
	var map$1 = parent$5;

	var map = map$1;
	var _Map = map;

	var $ = _export$1;
	var uncurryThis = functionUncurryThisClause;
	var $indexOf = arrayIncludes$1.indexOf;
	var arrayMethodIsStrict = arrayMethodIsStrict$4;
	var nativeIndexOf = uncurryThis([].indexOf);
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');
	$({ target: 'Array', proto: true, forced: FORCED }, {
	  indexOf: function indexOf(searchElement ) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$b;
	var indexOf$5 = getBuiltInPrototypeMethod('Array', 'indexOf');

	var isPrototypeOf = objectIsPrototypeOf$1;
	var method = indexOf$5;
	var ArrayPrototype = Array.prototype;
	var indexOf$4 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf) ? method : own;
	};

	var parent$4 = indexOf$4;
	var indexOf$3 = parent$4;

	var parent$3 = indexOf$3;
	var indexOf$2 = parent$3;

	var parent$2 = indexOf$2;
	var indexOf$1 = parent$2;

	var indexOf = indexOf$1;
	var _indexOfInstanceProperty = indexOf;

	function _isNativeFunction(fn) {
	  try {
	    var _context;
	    return _indexOfInstanceProperty(_context = Function.toString.call(fn)).call(_context, "[native code]") !== -1;
	  } catch (e) {
	    return typeof fn === "function";
	  }
	}

	var parent$1 = construct$4;
	var construct$2 = parent$1;

	var parent = construct$2;
	var construct$1 = parent;

	var construct = construct$1;
	var _Reflect$construct = construct;

	function _isNativeReflectConstruct$1() {
	  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
	  if (_Reflect$construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct$1()) {
	    var _context;
	    _construct = _bindInstanceProperty(_context = _Reflect$construct).call(_context);
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      _pushInstanceProperty(a).apply(a, args);
	      var Constructor = _bindInstanceProperty(Function).apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }
	  return _construct.apply(null, arguments);
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof _Map === "function" ? new _Map() : undefined;
	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;
	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);
	      _cache.set(Class, Wrapper);
	    }
	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }
	    Wrapper.prototype = _Object$create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };
	  return _wrapNativeSuper(Class);
	}

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct$3(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct$3) return false; if (construct$3.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct$3(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var RateLimitError = function (_Error) {
	  _inherits(RateLimitError, _Error);
	  var _super = _createSuper(RateLimitError);
	  function RateLimitError(type, options) {
	    var _this;
	    _classCallCheck(this, RateLimitError);
	    _this = _super.call(this, "".concat(type, " rate limit exceeded"), options);
	    _this.type = type;
	    _this.name = _this.constructor.name;
	    return _this;
	  }
	  return _createClass(RateLimitError);
	}( _wrapNativeSuper(Error));

	promise_prototype_finally.shim();
	var DEFAULTS = {
	  autopilot: true,
	  sso_url: '',
	  cookie_prefix: '',
	  redirect_url: '',
	  xhr_with: true,
	  onLogout: null,
	  unauthorized: null,
	  maxSyncTimesPerMinute: 3,
	  maxRefreshTimesPerMinute: 3
	};
	var TokenInjection = function () {
	  function TokenInjection() {
	    var _this = this;
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    _classCallCheck(this, TokenInjection);
	    this.options = deepMerge(DEFAULTS, options);
	    this.tokenKeys = [ACCESS_TOKEN_NAME, TOKEN_EXPIRED_NAME, TOKEN_TYPE, TOKEN_SCOPE, REFRESH_TOKEN_NAME, TOKEN_CHECK_SUM, TOKEN_CREATE_TIME_NAME];
	    this.intervalSync = null;
	    this.intervalRefresh = null;
	    this.syncTimes = 0;
	    this.refreshTimes = 0;
	    this.syncCount = 0;
	    this.refreshCount = 0;
	    setInterval(function () {
	      _this.syncCount = 0;
	      _this.refreshCount = 0;
	    }, 60 * 1000);
	    this.axiosPending = new map$7();
	    this.rest = httpRequest({
	      baseURL: this.options.sso_url,
	      headers: {
	        'X-Requested-With': 'XMLHttpRequest'
	      }
	    });
	    privateMethods.interceptors(this);
	    if (this.options.autopilot) {
	      this.init();
	    }
	  }
	  _createClass(TokenInjection, [{
	    key: "init",
	    value: (function () {
	      var _init = _asyncToGenerator( regenerator.mark(function _callee() {
	        var instance;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              instance = this;
	              return _context.abrupt("return", instance.sync().then(function () {
	                instance.autoSync();
	                instance.autoRefresh();
	                privateMethods.autoLogout(instance);
	              }).catch(function (error) {
	                if (error.isLogout) instance.logoutIAM();
	                if (error instanceof RateLimitError) {
	                  throw error;
	                }
	                throw new Error(error);
	              }));
	            case 2:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee, this);
	      }));
	      function init() {
	        return _init.apply(this, arguments);
	      }
	      return init;
	    }()
	    )
	  }, {
	    key: "sync",
	    value: function sync() {
	      var instance = this;
	      var rest = this.rest,
	        tokenKeys = this.tokenKeys,
	        options = this.options;
	      instance.syncCount += 1;
	      if (instance.syncCount > options.maxSyncTimesPerMinute) {
	        return promise.reject(new RateLimitError('sync'));
	      }
	      return new promise(function (resolve, reject) {
	        var _context2;
	        rest.get(concat$4(_context2 = "".concat(options.sso_url)).call(_context2, api.sync)).then(function (res) {
	          var tokenInfo = res.data || {};
	          instance.axiosPending.set('sync', res.request.readyState);
	          instance.syncTimes = 0;
	          removeTokens(tokenKeys);
	          try {
	            setTokens(tokenKeys, tokenInfo);
	          } catch (error) {
	            webStorage.clear();
	            instance.logoutIAM();
	          }
	          resolve(res);
	        }).catch(function (error) {
	          instance.syncTimes += 1;
	          if (instance.syncTimes >= MAX_REQUEST_TIMES) {
	            console.error("[Sync]: ".concat(errorMsg.maxRequest));
	          }
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var instance = this;
	      var rest = this.rest,
	        options = this.options;
	      var refreshToken = webStorage.get(REFRESH_TOKEN_NAME);
	      if (!refreshToken) {
	        throw privateMethods.exception(instance, 'Need Refresh Token !', 401);
	      }
	      instance.refreshCount += 1;
	      if (instance.refreshCount > options.maxRefreshTimesPerMinute) {
	        return promise.reject(new RateLimitError('refresh'));
	      }
	      return new promise(function (resolve, reject) {
	        var _context3, _context4;
	        rest.post(concat$4(_context3 = concat$4(_context4 = "".concat(options.sso_url)).call(_context4, api.refresh, "?v=")).call(_context3, rand(11111, 99999)), queryString({
	          refresh_token: refreshToken
	        }), {
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded'
	          }
	        }).then(function (res) {
	          instance.refreshTimes = 0;
	          instance.axiosPending.set('refresh', res.request.readyState);
	          resolve(res);
	        }).catch(function (error) {
	          instance.refreshTimes += 1;
	          if (instance.refreshTimes >= MAX_REQUEST_TIMES) {
	            console.error("[Refresh]: ".concat(errorMsg.maxRequest));
	          }
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "autoSync",
	    value: function autoSync() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var instance = this;
	      var options = this.options;
	      var tkCheckSumCookieName = "".concat(options.cookie_prefix, "tkchecksum");
	      var validateChecksum = function validateChecksum() {
	        var checksumFromCookie = api$1.get(tkCheckSumCookieName);
	        var checksumFromLocalStorage = webStorage.get('token_checksum');
	        if (!isSet(checksumFromCookie, checksumFromLocalStorage)) {
	          return false;
	        }
	        return checksumFromCookie === checksumFromLocalStorage;
	      };
	      if (instance.intervalSync) {
	        return;
	      }
	      instance.intervalSync = setInterval( _asyncToGenerator( regenerator.mark(function _callee2() {
	        return regenerator.wrap(function _callee2$(_context5) {
	          while (1) switch (_context5.prev = _context5.next) {
	            case 0:
	              if (!(validateChecksum() || instance.isProcessing('sync'))) {
	                _context5.next = 2;
	                break;
	              }
	              return _context5.abrupt("return");
	            case 2:
	              _context5.next = 4;
	              return instance.sync().catch(function (error) {
	                var response = error.response;
	                var errorCode = response ? response.status : 0;
	                if (errorCode === 401) {
	                  return;
	                }
	                if (error instanceof RateLimitError) {
	                  console.error(error);
	                }
	                instance.autoSyncStop();
	                instance.intervalSync = -1;
	                setTimeout$1(function () {
	                  if (instance.intervalSync !== -1) {
	                    return;
	                  }
	                  instance.intervalSync = null;
	                  instance.autoSync();
	                }, TOKEN_AUTO_SYNC_RESTART);
	              });
	            case 4:
	            case "end":
	              return _context5.stop();
	          }
	        }, _callee2);
	      })), 1000 * 60 * Math.abs(interval) || TOKEN_AUTO_SYNC_INTERVAL);
	    }
	  }, {
	    key: "autoSyncStop",
	    value: function autoSyncStop() {
	      var instance = this;
	      if (instance.intervalSync) {
	        clearInterval(instance.intervalSync);
	        instance.intervalSync = null;
	        instance.axiosPending.delete('sync');
	      }
	    }
	  }, {
	    key: "autoRefresh",
	    value: function autoRefresh() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var instance = this;
	      var restartAutoRefresh = function restartAutoRefresh() {
	        instance.autoRefreshStop();
	        instance.intervalRefresh = -1;
	        setTimeout$1(function () {
	          if (instance.intervalSync !== -1) {
	            return;
	          }
	          instance.intervalRefresh = null;
	          instance.autoRefresh();
	        }, 30000);
	      };
	      if (instance.intervalRefresh) {
	        return;
	      }
	      instance.intervalRefresh = setInterval(function () {
	        try {
	          if (instance.isProcessing('refresh')) {
	            return;
	          }
	          var nowTime = _parseInt(now() / 1000, 10);
	          var createKey = webStorage.get(TOKEN_CREATE_TIME_NAME);
	          var createTime = _parseInt(createKey, 10);
	          var expiredKey = webStorage.get(TOKEN_EXPIRED_NAME);
	          var expireTime = _parseInt(expiredKey, 10);
	          var refreshTime = createTime + expireTime - TOKEN_REFRESH_BEFORE;
	          if (nowTime >= refreshTime) {
	            instance.refresh().catch(function (error) {
	              if (error instanceof RateLimitError) {
	                console.error(error);
	              }
	              restartAutoRefresh();
	            });
	          }
	        } catch (e) {
	          var _context6;
	          console.error(concat$4(_context6 = "[".concat(e.code, "]")).call(_context6, e.message));
	          restartAutoRefresh();
	        }
	      }, interval * 1000 || TOKEN_AUTO_REFRESH_INTERVAL * 1000);
	    }
	  }, {
	    key: "autoRefreshStop",
	    value: function autoRefreshStop() {
	      var instance = this;
	      if (instance.intervalRefresh) {
	        clearInterval(instance.intervalRefresh);
	        instance.intervalRefresh = null;
	        instance.axiosPending.delete('refresh');
	      }
	    }
	  }, {
	    key: "validate",
	    value: function validate(token) {
	      var rest = this.rest,
	        options = this.options;
	      var validateToken = token || '';
	      return new promise(function (resolve, reject) {
	        var _context7, _context8;
	        rest.get(concat$4(_context7 = concat$4(_context8 = "".concat(options.sso_url)).call(_context8, api.validate, "?v=")).call(_context7, rand(11111, 99999)), {
	          headers: {
	            Authorization: "Bearer ".concat(validateToken)
	          }
	        }).then(function (res) {
	          resolve(res);
	        }).catch(function (error) {
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "getToken",
	    value: function getToken() {
	      return webStorage.get(ACCESS_TOKEN_NAME);
	    }
	  }, {
	    key: "getLang",
	    value: function getLang() {
	      var options = this.options;
	      return api$1.get("".concat(options.cookie_prefix, "lang")) || 'en';
	    }
	  }, {
	    key: "getSubSystem",
	    value: function getSubSystem() {
	      var _cookies$get$split, _cookies$get;
	      var subList = (_cookies$get$split = (_cookies$get = api$1.get('login')) === null || _cookies$get === void 0 ? void 0 : _cookies$get.split('.')) !== null && _cookies$get$split !== void 0 ? _cookies$get$split : [];
	      var subSystemSort = ['hrm', 'bpm', 'crm', 'sales', 'bi'];
	      return filter(subSystemSort).call(subSystemSort, function (subSystem) {
	        return includes(subList).call(subList, subSystem);
	      });
	    }
	  }, {
	    key: "loginIAM",
	    value: function loginIAM() {
	      var _context9;
	      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var options = this.options;
	      var ssoUrl = concat$4(_context9 = "".concat(options.sso_url, "/login?redirect_uri=")).call(_context9, options.redirect_url);
	      window.open(ssoUrl, target || '_self');
	    }
	  }, {
	    key: "logoutIAM",
	    value: function logoutIAM() {
	      var instance = this;
	      var options = this.options;
	      var ssoUrl = "".concat(options.sso_url, "/logout");
	      privateMethods.reset(instance).then(function () {
	        window.location.href = ssoUrl;
	      });
	    }
	  }, {
	    key: "isLogin",
	    value: function isLogin() {
	      var options = this.options;
	      var loginKey = "".concat(options.cookie_prefix, "login");
	      var loginCookie = api$1.get(loginKey);
	      return Boolean(loginCookie);
	    }
	  }, {
	    key: "isProcessing",
	    value: function isProcessing(requestName) {
	      var requestReadyState = this.axiosPending.get(requestName);
	      return isSet(requestReadyState) && requestReadyState !== 4;
	    }
	  }, {
	    key: "axiosCreate",
	    value: function axiosCreate() {
	      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var instance = this;
	      instance.options.sso_url = config.baseURL || '';
	      instance.rest = httpRequest(config);
	      return instance;
	    }
	  }]);
	  return TokenInjection;
	}();

	return TokenInjection;

}));
