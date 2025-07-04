'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var check$1 = function (it) {
  return it && it.Math === Math && it;
};
var globalThis_1 =
  check$1(typeof globalThis == 'object' && globalThis) ||
  check$1(typeof window == 'object' && window) ||
  check$1(typeof self == 'object' && self) ||
  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var fails$G = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$F = fails$G;
var functionBindNative$1 = !fails$F(function () {
  var test = (function () {  }).bind();
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$6 = functionBindNative$1;
var FunctionPrototype$7 = Function.prototype;
var apply$7 = FunctionPrototype$7.apply;
var call$s = FunctionPrototype$7.call;
var functionApply$1 = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$6 ? call$s.bind(apply$7) : function () {
  return call$s.apply(apply$7, arguments);
});

var NATIVE_BIND$5 = functionBindNative$1;
var FunctionPrototype$6 = Function.prototype;
var call$r = FunctionPrototype$6.call;
var uncurryThisWithBind = NATIVE_BIND$5 && FunctionPrototype$6.bind.bind(call$r, call$r);
var functionUncurryThis$1 = NATIVE_BIND$5 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$r.apply(fn, arguments);
  };
};

var uncurryThis$J = functionUncurryThis$1;
var toString$g = uncurryThis$J({}.toString);
var stringSlice$3 = uncurryThis$J(''.slice);
var classofRaw$3 = function (it) {
  return stringSlice$3(toString$g(it), 8, -1);
};

var classofRaw$2 = classofRaw$3;
var uncurryThis$I = functionUncurryThis$1;
var functionUncurryThisClause = function (fn) {
  if (classofRaw$2(fn) === 'Function') return uncurryThis$I(fn);
};

var documentAll = typeof document == 'object' && document.all;
var isCallable$y = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor$1 = {};

var fails$E = fails$G;
var descriptors$2 = !fails$E(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var NATIVE_BIND$4 = functionBindNative$1;
var call$q = Function.prototype.call;
var functionCall$2 = NATIVE_BIND$4 ? call$q.bind(call$q) : function () {
  return call$q.apply(call$q, arguments);
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

var uncurryThis$H = functionUncurryThis$1;
var fails$D = fails$G;
var classof$f = classofRaw$3;
var $Object$8 = Object;
var split$1 = uncurryThis$H(''.split);
var indexedObject$1 = fails$D(function () {
  return !$Object$8('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$f(it) === 'String' ? split$1(it, '') : $Object$8(it);
} : $Object$8;

var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;
var $TypeError$t = TypeError;
var requireObjectCoercible$c = function (it) {
  if (isNullOrUndefined$6(it)) throw new $TypeError$t("Can't call method on " + it);
  return it;
};

var IndexedObject$4 = indexedObject$1;
var requireObjectCoercible$b = requireObjectCoercible$c;
var toIndexedObject$c = function (it) {
  return IndexedObject$4(requireObjectCoercible$b(it));
};

var isCallable$x = isCallable$y;
var isObject$q = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$x(it);
};

var path$k = {};

var path$j = path$k;
var globalThis$s = globalThis_1;
var isCallable$w = isCallable$y;
var aFunction$1 = function (variable) {
  return isCallable$w(variable) ? variable : undefined;
};
var getBuiltIn$k = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path$j[namespace]) || aFunction$1(globalThis$s[namespace])
    : path$j[namespace] && path$j[namespace][method] || globalThis$s[namespace] && globalThis$s[namespace][method];
};

var uncurryThis$G = functionUncurryThis$1;
var objectIsPrototypeOf$1 = uncurryThis$G({}.isPrototypeOf);

var globalThis$r = globalThis_1;
var navigator$1 = globalThis$r.navigator;
var userAgent$6 = navigator$1 && navigator$1.userAgent;
var environmentUserAgent = userAgent$6 ? String(userAgent$6) : '';

var globalThis$q = globalThis_1;
var userAgent$5 = environmentUserAgent;
var process$5 = globalThis$q.process;
var Deno$2 = globalThis$q.Deno;
var versions$1 = process$5 && process$5.versions || Deno$2 && Deno$2.version;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$1;
if (v8$1) {
  match$1 = v8$1.split('.');
  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
}
if (!version$1 && userAgent$5) {
  match$1 = userAgent$5.match(/Edge\/(\d+)/);
  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$5.match(/Chrome\/(\d+)/);
    if (match$1) version$1 = +match$1[1];
  }
}
var environmentV8Version = version$1;

var V8_VERSION$4 = environmentV8Version;
var fails$C = fails$G;
var globalThis$p = globalThis_1;
var $String$5 = globalThis$p.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$C(function () {
  var symbol = Symbol('symbol detection');
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && V8_VERSION$4 && V8_VERSION$4 < 41;
});

var NATIVE_SYMBOL$7 = symbolConstructorDetection;
var useSymbolAsUid$1 = NATIVE_SYMBOL$7 &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';

var getBuiltIn$j = getBuiltIn$k;
var isCallable$v = isCallable$y;
var isPrototypeOf$f = objectIsPrototypeOf$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
var $Object$7 = Object;
var isSymbol$8 = USE_SYMBOL_AS_UID$3 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$j('Symbol');
  return isCallable$v($Symbol) && isPrototypeOf$f($Symbol.prototype, $Object$7(it));
};

var $String$4 = String;
var tryToString$9 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$u = isCallable$y;
var tryToString$8 = tryToString$9;
var $TypeError$s = TypeError;
var aCallable$k = function (argument) {
  if (isCallable$u(argument)) return argument;
  throw new $TypeError$s(tryToString$8(argument) + ' is not a function');
};

var aCallable$j = aCallable$k;
var isNullOrUndefined$5 = isNullOrUndefined$7;
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$j(func);
};

var call$p = functionCall$2;
var isCallable$t = isCallable$y;
var isObject$p = isObject$q;
var $TypeError$r = TypeError;
var ordinaryToPrimitive$3 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$t(fn = input.toString) && !isObject$p(val = call$p(fn, input))) return val;
  if (isCallable$t(fn = input.valueOf) && !isObject$p(val = call$p(fn, input))) return val;
  if (pref !== 'string' && isCallable$t(fn = input.toString) && !isObject$p(val = call$p(fn, input))) return val;
  throw new $TypeError$r("Can't convert object to primitive value");
};

var sharedStore$1 = {exports: {}};

var isPure = true;

var globalThis$o = globalThis_1;
var defineProperty$i = Object.defineProperty;
var defineGlobalProperty$1 = function (key, value) {
  try {
    defineProperty$i(globalThis$o, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis$o[key] = value;
  } return value;
};

var globalThis$n = globalThis_1;
var defineGlobalProperty = defineGlobalProperty$1;
var SHARED$1 = '__core-js_shared__';
var store$7 = sharedStore$1.exports = globalThis$n[SHARED$1] || defineGlobalProperty(SHARED$1, {});
(store$7.versions || (store$7.versions = [])).push({
  version: '3.43.0',
  mode: 'pure' ,
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.43.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var store$6 = sharedStore$1.exports;
var shared$b = function (key, value) {
  return store$6[key] || (store$6[key] = value || {});
};

var requireObjectCoercible$a = requireObjectCoercible$c;
var $Object$6 = Object;
var toObject$f = function (argument) {
  return $Object$6(requireObjectCoercible$a(argument));
};

var uncurryThis$F = functionUncurryThis$1;
var toObject$e = toObject$f;
var hasOwnProperty$2 = uncurryThis$F({}.hasOwnProperty);
var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$2(toObject$e(it), key);
};

var uncurryThis$E = functionUncurryThis$1;
var id$2 = 0;
var postfix$1 = Math.random();
var toString$f = uncurryThis$E(1.1.toString);
var uid$7 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$f(++id$2 + postfix$1, 36);
};

var globalThis$m = globalThis_1;
var shared$a = shared$b;
var hasOwn$v = hasOwnProperty_1$1;
var uid$6 = uid$7;
var NATIVE_SYMBOL$6 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
var Symbol$5 = globalThis$m.Symbol;
var WellKnownSymbolsStore$3 = shared$a('wks');
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$6;
var wellKnownSymbol$q = function (name) {
  if (!hasOwn$v(WellKnownSymbolsStore$3, name)) {
    WellKnownSymbolsStore$3[name] = NATIVE_SYMBOL$6 && hasOwn$v(Symbol$5, name)
      ? Symbol$5[name]
      : createWellKnownSymbol$1('Symbol.' + name);
  } return WellKnownSymbolsStore$3[name];
};

var call$o = functionCall$2;
var isObject$o = isObject$q;
var isSymbol$7 = isSymbol$8;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
var wellKnownSymbol$p = wellKnownSymbol$q;
var $TypeError$q = TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$p('toPrimitive');
var toPrimitive$a = function (input, pref) {
  if (!isObject$o(input) || isSymbol$7(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$o(exoticToPrim, input, pref);
    if (!isObject$o(result) || isSymbol$7(result)) return result;
    throw new $TypeError$q("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$2(input, pref);
};

var toPrimitive$9 = toPrimitive$a;
var isSymbol$6 = isSymbol$8;
var toPropertyKey$7 = function (argument) {
  var key = toPrimitive$9(argument, 'string');
  return isSymbol$6(key) ? key : key + '';
};

var globalThis$l = globalThis_1;
var isObject$n = isObject$q;
var document$4 = globalThis$l.document;
var EXISTS$3 = isObject$n(document$4) && isObject$n(document$4.createElement);
var documentCreateElement$2 = function (it) {
  return EXISTS$3 ? document$4.createElement(it) : {};
};

var DESCRIPTORS$o = descriptors$2;
var fails$B = fails$G;
var createElement$2 = documentCreateElement$2;
var ie8DomDefine$1 = !DESCRIPTORS$o && !fails$B(function () {
  return Object.defineProperty(createElement$2('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$n = descriptors$2;
var call$n = functionCall$2;
var propertyIsEnumerableModule$3 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$9 = createPropertyDescriptor$a;
var toIndexedObject$b = toIndexedObject$c;
var toPropertyKey$6 = toPropertyKey$7;
var hasOwn$u = hasOwnProperty_1$1;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
var $getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$n ? $getOwnPropertyDescriptor$4 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$b(O);
  P = toPropertyKey$6(P);
  if (IE8_DOM_DEFINE$3) try {
    return $getOwnPropertyDescriptor$4(O, P);
  } catch (error) {  }
  if (hasOwn$u(O, P)) return createPropertyDescriptor$9(!call$n(propertyIsEnumerableModule$3.f, O, P), O[P]);
};

var fails$A = fails$G;
var isCallable$s = isCallable$y;
var replacement$1 = /#|\.prototype\./;
var isForced$4 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value === POLYFILL$1 ? true
    : value === NATIVE$1 ? false
    : isCallable$s(detection) ? fails$A(detection)
    : !!detection;
};
var normalize$1 = isForced$4.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};
var data$1 = isForced$4.data = {};
var NATIVE$1 = isForced$4.NATIVE = 'N';
var POLYFILL$1 = isForced$4.POLYFILL = 'P';
var isForced_1$1 = isForced$4;

var uncurryThis$D = functionUncurryThisClause;
var aCallable$i = aCallable$k;
var NATIVE_BIND$3 = functionBindNative$1;
var bind$t = uncurryThis$D(uncurryThis$D.bind);
var functionBindContext = function (fn, that) {
  aCallable$i(fn);
  return that === undefined ? fn : NATIVE_BIND$3 ? bind$t(fn, that) : function () {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty$1 = {};

var DESCRIPTORS$m = descriptors$2;
var fails$z = fails$G;
var v8PrototypeDefineBug$1 = DESCRIPTORS$m && fails$z(function () {
  return Object.defineProperty(function () {  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$m = isObject$q;
var $String$3 = String;
var $TypeError$p = TypeError;
var anObject$h = function (argument) {
  if (isObject$m(argument)) return argument;
  throw new $TypeError$p($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$l = descriptors$2;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
var anObject$g = anObject$h;
var toPropertyKey$5 = toPropertyKey$7;
var $TypeError$o = TypeError;
var $defineProperty$7 = Object.defineProperty;
var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
var ENUMERABLE$1 = 'enumerable';
var CONFIGURABLE$3 = 'configurable';
var WRITABLE$1 = 'writable';
objectDefineProperty$1.f = DESCRIPTORS$l ? V8_PROTOTYPE_DEFINE_BUG$2 ? function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$5(P);
  anObject$g(Attributes);
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
  } return $defineProperty$7(O, P, Attributes);
} : $defineProperty$7 : function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$5(P);
  anObject$g(Attributes);
  if (IE8_DOM_DEFINE$2) try {
    return $defineProperty$7(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$o('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$k = descriptors$2;
var definePropertyModule$6 = objectDefineProperty$1;
var createPropertyDescriptor$8 = createPropertyDescriptor$a;
var createNonEnumerableProperty$c = DESCRIPTORS$k ? function (object, key, value) {
  return definePropertyModule$6.f(object, key, createPropertyDescriptor$8(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var globalThis$k = globalThis_1;
var apply$6 = functionApply$1;
var uncurryThis$C = functionUncurryThisClause;
var isCallable$r = isCallable$y;
var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;
var isForced$3 = isForced_1$1;
var path$i = path$k;
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
    } return apply$6(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? globalThis$k : STATIC ? globalThis$k[TARGET] : globalThis$k[TARGET] && globalThis$k[TARGET].prototype;
  var target = GLOBAL ? path$i : path$i[TARGET] || createNonEnumerableProperty$b(path$i, TARGET, {})[TARGET];
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
    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
    if (options.bind && USE_NATIVE) resultProperty = bind$s(sourceProperty, globalThis$k);
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    else if (PROTO && isCallable$r(sourceProperty)) resultProperty = uncurryThis$C(sourceProperty);
    else resultProperty = sourceProperty;
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$b(resultProperty, 'sham', true);
    }
    createNonEnumerableProperty$b(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$t(path$i, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$b(path$i, VIRTUAL_PROTOTYPE, {});
      }
      createNonEnumerableProperty$b(path$i[VIRTUAL_PROTOTYPE], key, sourceProperty);
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty$b(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var shared$9 = shared$b;
var uid$5 = uid$7;
var keys$5 = shared$9('keys');
var sharedKey$6 = function (key) {
  return keys$5[key] || (keys$5[key] = uid$5(key));
};

var fails$y = fails$G;
var correctPrototypeGetter = !fails$y(function () {
  function F() {  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$s = hasOwnProperty_1$1;
var isCallable$q = isCallable$y;
var toObject$d = toObject$f;
var sharedKey$5 = sharedKey$6;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
var IE_PROTO$1 = sharedKey$5('IE_PROTO');
var $Object$5 = Object;
var ObjectPrototype$2 = $Object$5.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object$5.getPrototypeOf : function (O) {
  var object = toObject$d(O);
  if (hasOwn$s(object, IE_PROTO$1)) return object[IE_PROTO$1];
  var constructor = object.constructor;
  if (isCallable$q(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$5 ? ObjectPrototype$2 : null;
};

var uncurryThis$B = functionUncurryThis$1;
var aCallable$h = aCallable$k;
var functionUncurryThisAccessor = function (object, key, method) {
  try {
    return uncurryThis$B(aCallable$h(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {  }
};

var isObject$l = isObject$q;
var isPossiblePrototype$1 = function (argument) {
  return isObject$l(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;
var $String$2 = String;
var $TypeError$n = TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$n("Can't set " + $String$2(argument) + ' as a prototype');
};

var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$k = isObject$q;
var requireObjectCoercible$9 = requireObjectCoercible$c;
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
    requireObjectCoercible$9(O);
    aPossiblePrototype(proto);
    if (!isObject$k(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var objectGetOwnPropertyNames$1 = {};

var ceil$2 = Math.ceil;
var floor$3 = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$3 : ceil$2)(n);
};

var trunc = mathTrunc;
var toIntegerOrInfinity$7 = function (argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;
var max$4 = Math.max;
var min$5 = Math.min;
var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$6(index);
  return integer < 0 ? max$4(integer + length, 0) : min$5(integer, length);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;
var min$4 = Math.min;
var toLength$4 = function (argument) {
  var len = toIntegerOrInfinity$5(argument);
  return len > 0 ? min$4(len, 0x1FFFFFFFFFFFFF) : 0;
};

var toLength$3 = toLength$4;
var lengthOfArrayLike$8 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$a = toIndexedObject$c;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$7 = lengthOfArrayLike$8;
var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$a($this);
    var length = lengthOfArrayLike$7(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex$2(fromIndex, length);
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
  includes: createMethod$5(true),
  indexOf: createMethod$5(false)
};

var hiddenKeys$a = {};

var uncurryThis$A = functionUncurryThis$1;
var hasOwn$r = hasOwnProperty_1$1;
var toIndexedObject$9 = toIndexedObject$c;
var indexOf$7 = arrayIncludes$1.indexOf;
var hiddenKeys$9 = hiddenKeys$a;
var push$d = uncurryThis$A([].push);
var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$9(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$r(hiddenKeys$9, key) && hasOwn$r(O, key) && push$d(result, key);
  while (names.length > i) if (hasOwn$r(O, key = names[i++])) {
    ~indexOf$7(result, key) || push$d(result, key);
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
var uncurryThis$z = functionUncurryThis$1;
var getOwnPropertyNamesModule$3 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$4 = objectGetOwnPropertySymbols$1;
var anObject$f = anObject$h;
var concat$8 = uncurryThis$z([].concat);
var ownKeys$3 = getBuiltIn$i('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$3.f(anObject$f(it));
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

var DESCRIPTORS$j = descriptors$2;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug$1;
var definePropertyModule$4 = objectDefineProperty$1;
var anObject$e = anObject$h;
var toIndexedObject$8 = toIndexedObject$c;
var objectKeys$4 = objectKeys$5;
objectDefineProperties.f = DESCRIPTORS$j && !V8_PROTOTYPE_DEFINE_BUG$1 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$e(O);
  var props = toIndexedObject$8(Properties);
  var keys = objectKeys$4(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$h = getBuiltIn$k;
var html$2 = getBuiltIn$h('document', 'documentElement');

var anObject$d = anObject$h;
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
    EmptyConstructor[PROTOTYPE$1] = anObject$d(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var isObject$j = isObject$q;
var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
var installErrorCause$1 = function (O, options) {
  if (isObject$j(options) && 'cause' in options) {
    createNonEnumerableProperty$a(O, 'cause', options.cause);
  }
};

var uncurryThis$y = functionUncurryThis$1;
var $Error$2 = Error;
var replace$2 = uncurryThis$y(''.replace);
var TEST = (function (arg) { return String(new $Error$2(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$2.prepareStackTrace) {
    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$x = fails$G;
var createPropertyDescriptor$7 = createPropertyDescriptor$a;
var errorStackInstallable = !fails$x(function () {
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

var wellKnownSymbol$o = wellKnownSymbol$q;
var Iterators$6 = iterators;
var ITERATOR$6 = wellKnownSymbol$o('iterator');
var ArrayPrototype$9 = Array.prototype;
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$6.Array === it || ArrayPrototype$9[ITERATOR$6] === it);
};

var wellKnownSymbol$n = wellKnownSymbol$q;
var TO_STRING_TAG$3 = wellKnownSymbol$n('toStringTag');
var test$2 = {};
test$2[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$p = isCallable$y;
var classofRaw$1 = classofRaw$3;
var wellKnownSymbol$m = wellKnownSymbol$q;
var TO_STRING_TAG$2 = wellKnownSymbol$m('toStringTag');
var $Object$4 = Object;
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {  }
};
var classof$e = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (tag = tryGet(O = $Object$4(it), TO_STRING_TAG$2)) == 'string' ? tag
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    : (result = classofRaw$1(O)) === 'Object' && isCallable$p(O.callee) ? 'Arguments' : result;
};

var classof$d = classof$e;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var Iterators$5 = iterators;
var wellKnownSymbol$l = wellKnownSymbol$q;
var ITERATOR$5 = wellKnownSymbol$l('iterator');
var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$4(it)) return getMethod$3(it, ITERATOR$5)
    || getMethod$3(it, '@@iterator')
    || Iterators$5[classof$d(it)];
};

var call$m = functionCall$2;
var aCallable$g = aCallable$k;
var anObject$c = anObject$h;
var tryToString$7 = tryToString$9;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$m = TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$g(iteratorMethod)) return anObject$c(call$m(iteratorMethod, argument));
  throw new $TypeError$m(tryToString$7(argument) + ' is not iterable');
};

var call$l = functionCall$2;
var anObject$b = anObject$h;
var getMethod$2 = getMethod$5;
var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$b(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$l(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$b(innerResult);
  return value;
};

var bind$r = functionBindContext;
var call$k = functionCall$2;
var anObject$a = anObject$h;
var tryToString$6 = tryToString$9;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$6 = lengthOfArrayLike$8;
var isPrototypeOf$e = objectIsPrototypeOf$1;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var $TypeError$l = TypeError;
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
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$a(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$l(tryToString$6(iterable) + ' is not iterable');
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$6(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$e(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$k(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$e(ResultPrototype, result)) return result;
  } return new Result(false);
};

var classof$c = classof$e;
var $String$1 = String;
var toString$e = function (argument) {
  if (classof$c(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toString$d = toString$e;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$d(argument);
};

var $$16 = _export$1;
var isPrototypeOf$d = objectIsPrototypeOf$1;
var getPrototypeOf$9 = objectGetPrototypeOf;
var setPrototypeOf$6 = objectSetPrototypeOf;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var create$a = objectCreate;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;
var createPropertyDescriptor$6 = createPropertyDescriptor$a;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var iterate$k = iterate$l;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$k = wellKnownSymbol$q;
var TO_STRING_TAG$1 = wellKnownSymbol$k('toStringTag');
var $Error$1 = Error;
var push$c = [].push;
var $AggregateError = function AggregateError(errors, message ) {
  var isInstance = isPrototypeOf$d(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf$6) {
    that = setPrototypeOf$6(new $Error$1(), isInstance ? getPrototypeOf$9(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$a(AggregateErrorPrototype);
    createNonEnumerableProperty$8(that, TO_STRING_TAG$1, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$8(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate$k(errors, push$c, { that: errorsArray });
  createNonEnumerableProperty$8(that, 'errors', errorsArray);
  return that;
};
if (setPrototypeOf$6) setPrototypeOf$6($AggregateError, $Error$1);
else copyConstructorProperties$2($AggregateError, $Error$1, { name: true });
var AggregateErrorPrototype = $AggregateError.prototype = create$a($Error$1.prototype, {
  constructor: createPropertyDescriptor$6(1, $AggregateError),
  message: createPropertyDescriptor$6(1, ''),
  name: createPropertyDescriptor$6(1, 'AggregateError')
});
$$16({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});

var addToUnscopables$1 = function () {  };

var globalThis$j = globalThis_1;
var isCallable$o = isCallable$y;
var WeakMap$4 = globalThis$j.WeakMap;
var weakMapBasicDetection = isCallable$o(WeakMap$4) && /native code/.test(String(WeakMap$4));

var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
var globalThis$i = globalThis_1;
var isObject$i = isObject$q;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
var hasOwn$p = hasOwnProperty_1$1;
var shared$8 = sharedStore$1.exports;
var sharedKey$3 = sharedKey$6;
var hiddenKeys$6 = hiddenKeys$a;
var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var TypeError$a = globalThis$i.TypeError;
var WeakMap$3 = globalThis$i.WeakMap;
var set$b, get$7, has$7;
var enforce$1 = function (it) {
  return has$7(it) ? get$7(it) : set$b(it, {});
};
var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$i(it) || (state = get$7(it)).type !== TYPE) {
      throw new TypeError$a('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (NATIVE_WEAK_MAP$1 || shared$8.state) {
  var store$5 = shared$8.state || (shared$8.state = new WeakMap$3());
  store$5.get = store$5.get;
  store$5.has = store$5.has;
  store$5.set = store$5.set;
  set$b = function (it, metadata) {
    if (store$5.has(it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    store$5.set(it, metadata);
    return metadata;
  };
  get$7 = function (it) {
    return store$5.get(it) || {};
  };
  has$7 = function (it) {
    return store$5.has(it);
  };
} else {
  var STATE$1 = sharedKey$3('state');
  hiddenKeys$6[STATE$1] = true;
  set$b = function (it, metadata) {
    if (hasOwn$p(it, STATE$1)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE$1, metadata);
    return metadata;
  };
  get$7 = function (it) {
    return hasOwn$p(it, STATE$1) ? it[STATE$1] : {};
  };
  has$7 = function (it) {
    return hasOwn$p(it, STATE$1);
  };
}
var internalState$1 = {
  set: set$b,
  get: get$7,
  has: has$7,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var DESCRIPTORS$i = descriptors$2;
var hasOwn$o = hasOwnProperty_1$1;
var FunctionPrototype$5 = Function.prototype;
var getDescriptor$1 = DESCRIPTORS$i && Object.getOwnPropertyDescriptor;
var EXISTS$2 = hasOwn$o(FunctionPrototype$5, 'name');
var PROPER$1 = EXISTS$2 && (function something() {  }).name === 'something';
var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$i || (DESCRIPTORS$i && getDescriptor$1(FunctionPrototype$5, 'name').configurable));
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

var fails$w = fails$G;
var isCallable$n = isCallable$y;
var isObject$h = isObject$q;
var create$9 = objectCreate;
var getPrototypeOf$8 = objectGetPrototypeOf;
var defineBuiltIn$5 = defineBuiltIn$6;
var wellKnownSymbol$j = wellKnownSymbol$q;
var ITERATOR$4 = wellKnownSymbol$j('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$h(IteratorPrototype$1) || fails$w(function () {
  var test = {};
  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$9(IteratorPrototype$1);
if (!isCallable$n(IteratorPrototype$1[ITERATOR$4])) {
  defineBuiltIn$5(IteratorPrototype$1, ITERATOR$4, function () {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$b = classof$e;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$b(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty$h = objectDefineProperty$1.f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
var hasOwn$n = hasOwnProperty_1$1;
var toString$c = objectToString;
var wellKnownSymbol$i = wellKnownSymbol$q;
var TO_STRING_TAG = wellKnownSymbol$i('toStringTag');
var setToStringTag$8 = function (it, TAG, STATIC, SET_METHOD) {
  var target = STATIC ? it : it && it.prototype;
  if (target) {
    if (!hasOwn$n(target, TO_STRING_TAG)) {
      defineProperty$h(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$5(target, 'toString', toString$c);
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

var $$15 = _export$1;
var call$j = functionCall$2;
var FunctionName = functionName$1;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$7 = objectGetPrototypeOf;
var setToStringTag$6 = setToStringTag$8;
var defineBuiltIn$4 = defineBuiltIn$6;
var wellKnownSymbol$h = wellKnownSymbol$q;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
FunctionName.CONFIGURABLE;
IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$h('iterator');
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
    CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      setToStringTag$6(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$3[TO_STRING_TAG] = returnThis;
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$j(nativeIterator, this); };
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
    } else $$15({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
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

var toIndexedObject$7 = toIndexedObject$c;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$6 = internalState$1;
var defineProperty$g = objectDefineProperty$1.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var IS_PURE$2 = isPure;
var DESCRIPTORS$h = descriptors$2;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$5 = InternalStateModule$6.set;
var getInternalState$3 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);
defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$5(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$7(iterated),
    index: 0,
    kind: kind
  });
}, function () {
  var state = getInternalState$3(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
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
if (!IS_PURE$2 && DESCRIPTORS$h && values.name !== 'values') try {
  defineProperty$g(values, 'name', { value: 'values' });
} catch (error) {  }

var globalThis$h = globalThis_1;
var userAgent$4 = environmentUserAgent;
var classof$a = classofRaw$3;
var userAgentStartsWith = function (string) {
  return userAgent$4.slice(0, string.length) === string;
};
var environment = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis$h.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis$h.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof$a(globalThis$h.process) === 'process') return 'NODE';
  if (globalThis$h.window && globalThis$h.document) return 'BROWSER';
  return 'REST';
})();

var ENVIRONMENT$2 = environment;
var environmentIsNode = ENVIRONMENT$2 === 'NODE';

var defineProperty$f = objectDefineProperty$1;
var defineBuiltInAccessor$3 = function (target, name, descriptor) {
  return defineProperty$f.f(target, name, descriptor);
};

var getBuiltIn$g = getBuiltIn$k;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var wellKnownSymbol$g = wellKnownSymbol$q;
var DESCRIPTORS$g = descriptors$2;
var SPECIES$4 = wellKnownSymbol$g('species');
var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$g(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$g && Constructor && !Constructor[SPECIES$4]) {
    defineBuiltInAccessor$2(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$c = objectIsPrototypeOf$1;
var $TypeError$k = TypeError;
var anInstance$3 = function (it, Prototype) {
  if (isPrototypeOf$c(Prototype, it)) return it;
  throw new $TypeError$k('Incorrect invocation');
};

var uncurryThis$x = functionUncurryThis$1;
var isCallable$m = isCallable$y;
var store$4 = sharedStore$1.exports;
var functionToString$2 = uncurryThis$x(Function.toString);
if (!isCallable$m(store$4.inspectSource)) {
  store$4.inspectSource = function (it) {
    return functionToString$2(it);
  };
}
var inspectSource$5 = store$4.inspectSource;

var uncurryThis$w = functionUncurryThis$1;
var fails$v = fails$G;
var isCallable$l = isCallable$y;
var classof$9 = classof$e;
var getBuiltIn$f = getBuiltIn$k;
var inspectSource$4 = inspectSource$5;
var noop$1 = function () {  };
var construct$7 = getBuiltIn$f('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$w(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$l(argument)) return false;
  try {
    construct$7(noop$1, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$l(argument)) return false;
  switch (classof$9(argument)) {
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
var isConstructor$2 = !construct$7 || fails$v(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$1 = isConstructor$2;
var tryToString$5 = tryToString$9;
var $TypeError$j = TypeError;
var aConstructor$2 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw new $TypeError$j(tryToString$5(argument) + ' is not a constructor');
};

var anObject$9 = anObject$h;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var wellKnownSymbol$f = wellKnownSymbol$q;
var SPECIES$3 = wellKnownSymbol$f('species');
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$9(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$9(C)[SPECIES$3]) ? defaultConstructor : aConstructor$1(S);
};

var uncurryThis$v = functionUncurryThis$1;
var arraySlice$5 = uncurryThis$v([].slice);

var $TypeError$i = TypeError;
var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw new $TypeError$i('Not enough arguments');
  return passed;
};

var userAgent$3 = environmentUserAgent;
var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$3);

var globalThis$g = globalThis_1;
var apply$5 = functionApply$1;
var bind$q = functionBindContext;
var isCallable$k = isCallable$y;
var hasOwn$m = hasOwnProperty_1$1;
var fails$u = fails$G;
var html = html$2;
var arraySlice$4 = arraySlice$5;
var createElement$1 = documentCreateElement$2;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var IS_IOS$1 = environmentIsIos;
var IS_NODE$2 = environmentIsNode;
var set$a = globalThis$g.setImmediate;
var clear = globalThis$g.clearImmediate;
var process$4 = globalThis$g.process;
var Dispatch = globalThis$g.Dispatch;
var Function$2 = globalThis$g.Function;
var MessageChannel = globalThis$g.MessageChannel;
var String$3 = globalThis$g.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails$u(function () {
  $location = globalThis$g.location;
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
  globalThis$g.postMessage(String$3(id), $location.protocol + '//' + $location.host);
};
if (!set$a || !clear) {
  set$a = function setImmediate(handler) {
    validateArgumentsLength$1(arguments.length, 1);
    var fn = isCallable$k(handler) ? handler : Function$2(handler);
    var args = arraySlice$4(arguments, 1);
    queue$2[++counter] = function () {
      apply$5(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  if (IS_NODE$2) {
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
    globalThis$g.addEventListener &&
    isCallable$k(globalThis$g.postMessage) &&
    !globalThis$g.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$u(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis$g.addEventListener('message', eventListener, false);
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
  set: set$a,
  clear: clear
};

var globalThis$f = globalThis_1;
var DESCRIPTORS$f = descriptors$2;
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
var safeGetBuiltIn$1 = function (name) {
  if (!DESCRIPTORS$f) return globalThis$f[name];
  var descriptor = getOwnPropertyDescriptor$3(globalThis$f, name);
  return descriptor && descriptor.value;
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

var userAgent$2 = environmentUserAgent;
var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$2) && typeof Pebble != 'undefined';

var userAgent$1 = environmentUserAgent;
var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

var globalThis$e = globalThis_1;
var safeGetBuiltIn = safeGetBuiltIn$1;
var bind$p = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = environmentIsIos;
var IS_IOS_PEBBLE = environmentIsIosPebble;
var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
var IS_NODE$1 = environmentIsNode;
var MutationObserver = globalThis$e.MutationObserver || globalThis$e.WebKitMutationObserver;
var document$3 = globalThis$e.document;
var process$3 = globalThis$e.process;
var Promise$2 = globalThis$e.Promise;
var microtask$1 = safeGetBuiltIn('queueMicrotask');
var notify$1, toggle, node, promise$6, then;
if (!microtask$1) {
  var queue = new Queue$1();
  var flush = function () {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$3.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$3) {
    toggle = true;
    node = document$3.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$2 && Promise$2.resolve) {
    promise$6 = Promise$2.resolve(undefined);
    promise$6.constructor = Promise$2;
    then = bind$p(promise$6.then, promise$6);
    notify$1 = function () {
      then(flush);
    };
  } else if (IS_NODE$1) {
    notify$1 = function () {
      process$3.nextTick(flush);
    };
  } else {
    macrotask = bind$p(macrotask, globalThis$e);
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

var globalThis$d = globalThis_1;
var promiseNativeConstructor = globalThis$d.Promise;

var globalThis$c = globalThis_1;
var NativePromiseConstructor$5 = promiseNativeConstructor;
var isCallable$j = isCallable$y;
var isForced$2 = isForced_1$1;
var inspectSource$3 = inspectSource$5;
var wellKnownSymbol$e = wellKnownSymbol$q;
var ENVIRONMENT$1 = environment;
var V8_VERSION$3 = environmentV8Version;
var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
var SPECIES$2 = wellKnownSymbol$e('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$j(globalThis$c.PromiseRejectionEvent);
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
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT$1 === 'BROWSER' || ENVIRONMENT$1 === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$f = aCallable$k;
var $TypeError$h = TypeError;
var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$h('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$f(resolve);
  this.reject = aCallable$f(reject);
};
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$14 = _export$1;
var IS_NODE = environmentIsNode;
var globalThis$b = globalThis_1;
var path$h = path$k;
var call$i = functionCall$2;
var defineBuiltIn$3 = defineBuiltIn$6;
var setToStringTag$5 = setToStringTag$8;
var setSpecies$1 = setSpecies$2;
var aCallable$e = aCallable$k;
var isCallable$i = isCallable$y;
var isObject$g = isObject$q;
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
var TypeError$9 = globalThis$b.TypeError;
var document$2 = globalThis$b.document;
var process$2 = globalThis$b.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$7.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && globalThis$b.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper;
var isThenable$1 = function (it) {
  var then;
  return isObject$g(it) && isCallable$i(then = it.then) ? then : false;
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
      } else if (then = isThenable$1(result)) {
        call$i(then, result, resolve, reject);
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
    globalThis$b.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$b['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (state) {
  call$i(task, globalThis$b, function () {
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
  call$i(task, globalThis$b, function () {
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
    var then = isThenable$1(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$i(then, value,
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
    aCallable$e(executor);
    call$i(Internal, this);
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
      value: null
    });
  };
  Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$i(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$i(onRejected) && onRejected;
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
$$14({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});
PromiseWrapper = path$h.Promise;
setToStringTag$5(PromiseConstructor, PROMISE, false, true);
setSpecies$1(PROMISE);

var wellKnownSymbol$d = wellKnownSymbol$q;
var ITERATOR$2 = wellKnownSymbol$d('iterator');
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

var $$13 = _export$1;
var call$h = functionCall$2;
var aCallable$d = aCallable$k;
var newPromiseCapabilityModule$6 = newPromiseCapability$2;
var perform$4 = perform$6;
var iterate$j = iterate$l;
var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;
$$13({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$6.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$4(function () {
      var $promiseResolve = aCallable$d(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$j(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$h($promiseResolve, C, promise).then(function (value) {
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

var $$12 = _export$1;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$2 = promiseNativeConstructor;
NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
$$12({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

var $$11 = _export$1;
var call$g = functionCall$2;
var aCallable$c = aCallable$k;
var newPromiseCapabilityModule$5 = newPromiseCapability$2;
var perform$3 = perform$6;
var iterate$i = iterate$l;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;
$$11({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$5.f(C);
    var reject = capability.reject;
    var result = perform$3(function () {
      var $promiseResolve = aCallable$c(C.resolve);
      iterate$i(iterable, function (promise) {
        call$g($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$10 = _export$1;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$10({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$4.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

var anObject$8 = anObject$h;
var isObject$f = isObject$q;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$3 = function (C, x) {
  anObject$8(C);
  if (isObject$f(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$$ = _export$1;
var getBuiltIn$e = getBuiltIn$k;
var IS_PURE$1 = isPure;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$2 = promiseResolve$3;
var PromiseConstructorWrapper = getBuiltIn$e('Promise');
var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;
$$$({ target: 'Promise', stat: true, forced: IS_PURE$1  }, {
  resolve: function resolve(x) {
    return promiseResolve$2(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
  }
});

var $$_ = _export$1;
var call$f = functionCall$2;
var aCallable$b = aCallable$k;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$6;
var iterate$h = iterate$l;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$_({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var promiseResolve = aCallable$b(C.resolve);
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

var $$Z = _export$1;
var call$e = functionCall$2;
var aCallable$a = aCallable$k;
var getBuiltIn$d = getBuiltIn$k;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$6;
var iterate$g = iterate$l;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
var PROMISE_ANY_ERROR = 'No one promise resolved';
$$Z({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$d('AggregateError');
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$a(C.resolve);
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

var $$Y = _export$1;
var globalThis$a = globalThis_1;
var apply$4 = functionApply$1;
var slice$1 = arraySlice$5;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var aCallable$9 = aCallable$k;
var perform = perform$6;
var Promise$1 = globalThis$a.Promise;
var ACCEPT_ARGUMENTS = false;
var FORCED$8 = !Promise$1 || !Promise$1['try'] || perform(function () {
  Promise$1['try'](function (argument) {
    ACCEPT_ARGUMENTS = argument === 8;
  }, 8);
}).error || !ACCEPT_ARGUMENTS;
$$Y({ target: 'Promise', stat: true, forced: FORCED$8 }, {
  'try': function (callbackfn ) {
    var args = arguments.length > 1 ? slice$1(arguments, 1) : [];
    var promiseCapability = newPromiseCapabilityModule$1.f(this);
    var result = perform(function () {
      return apply$4(aCallable$9(callbackfn), undefined, args);
    });
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

var $$X = _export$1;
var newPromiseCapabilityModule = newPromiseCapability$2;
$$X({ target: 'Promise', stat: true }, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});

var $$W = _export$1;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$t = fails$G;
var getBuiltIn$c = getBuiltIn$k;
var isCallable$h = isCallable$y;
var speciesConstructor = speciesConstructor$2;
var promiseResolve$1 = promiseResolve$3;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var NON_GENERIC = !!NativePromiseConstructor && fails$t(function () {
  NativePromisePrototype['finally'].call({ then: function () {  } }, function () {  });
});
$$W({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn$c('Promise'));
    var isFunction = isCallable$h(onFinally);
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

var uncurryThis$u = functionUncurryThis$1;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
var toString$b = toString$e;
var requireObjectCoercible$8 = requireObjectCoercible$c;
var charAt$2 = uncurryThis$u(''.charAt);
var charCodeAt$1 = uncurryThis$u(''.charCodeAt);
var stringSlice$2 = uncurryThis$u(''.slice);
var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$b(requireObjectCoercible$8($this));
    var position = toIntegerOrInfinity$4(pos);
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
          ? stringSlice$2(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};
var stringMultibyte = {
  codeAt: createMethod$4(false),
  charAt: createMethod$4(true)
};

var charAt$1 = stringMultibyte.charAt;
var toString$a = toString$e;
var InternalStateModule$4 = internalState$1;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$3 = InternalStateModule$4.set;
var getInternalState$2 = InternalStateModule$4.getterFor(STRING_ITERATOR);
defineIterator$1(String, 'String', function (iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: toString$a(iterated),
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

var path$g = path$k;
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
var globalThis$9 = globalThis_1;
var setToStringTag$4 = setToStringTag$8;
var Iterators$1 = iterators;
for (var COLLECTION_NAME in DOMIterables$1) {
  setToStringTag$4(globalThis$9[COLLECTION_NAME], COLLECTION_NAME);
  Iterators$1[COLLECTION_NAME] = Iterators$1.Array;
}

var parent$Z = promise$5;
var promise$4 = parent$Z;

var parent$Y = promise$4;
var promise$3 = parent$Y;

var parent$X = promise$3;
var promise$2 = parent$X;

var promise$1 = promise$2;
var _Promise = promise$1;

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : _Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new _Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var defineProperty$e = {exports: {}};

var $$V = _export$1;
var DESCRIPTORS$e = descriptors$2;
var defineProperty$d = objectDefineProperty$1.f;
$$V({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$d, sham: !DESCRIPTORS$e }, {
  defineProperty: defineProperty$d
});

var path$f = path$k;
var Object$5 = path$f.Object;
var defineProperty$c = defineProperty$e.exports = function defineProperty(it, key, desc) {
  return Object$5.defineProperty(it, key, desc);
};
if (Object$5.defineProperty.sham) defineProperty$c.sham = true;

var parent$W = defineProperty$e.exports;
var defineProperty$b = parent$W;

var parent$V = defineProperty$b;
var defineProperty$a = parent$V;

var parent$U = defineProperty$a;
var defineProperty$9 = parent$U;

var defineProperty$8 = defineProperty$9;
var _Object$defineProperty = defineProperty$8;

var classof$8 = classofRaw$3;
var isArray$7 = Array.isArray || function isArray(argument) {
  return classof$8(argument) === 'Array';
};

var $TypeError$g = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$g('Maximum allowed index exceeded');
  return it;
};

var DESCRIPTORS$d = descriptors$2;
var definePropertyModule$3 = objectDefineProperty$1;
var createPropertyDescriptor$4 = createPropertyDescriptor$a;
var createProperty$1 = function (object, key, value) {
  if (DESCRIPTORS$d) definePropertyModule$3.f(object, key, createPropertyDescriptor$4(0, value));
  else object[key] = value;
};

var isArray$6 = isArray$7;
var isConstructor = isConstructor$2;
var isObject$e = isObject$q;
var wellKnownSymbol$c = wellKnownSymbol$q;
var SPECIES$1 = wellKnownSymbol$c('species');
var $Array$1 = Array;
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$6(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor(C) && (C === $Array$1 || isArray$6(C.prototype))) C = undefined;
    else if (isObject$e(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$s = fails$G;
var wellKnownSymbol$b = wellKnownSymbol$q;
var V8_VERSION$2 = environmentV8Version;
var SPECIES = wellKnownSymbol$b('species');
var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  return V8_VERSION$2 >= 51 || !fails$s(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$U = _export$1;
var fails$r = fails$G;
var isArray$5 = isArray$7;
var isObject$d = isObject$q;
var toObject$c = toObject$f;
var lengthOfArrayLike$5 = lengthOfArrayLike$8;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var createProperty = createProperty$1;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol$a = wellKnownSymbol$q;
var V8_VERSION$1 = environmentV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$a('isConcatSpreadable');
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$r(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function (O) {
  if (!isObject$d(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$5(O);
};
var FORCED$7 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$2('concat');
$$U({ target: 'Array', proto: true, arity: 1, forced: FORCED$7 }, {
  concat: function concat(arg) {
    var O = toObject$c(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$5(E);
        doesNotExceedSafeInteger$2(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger$2(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var objectGetOwnPropertyNamesExternal = {};

var classof$7 = classofRaw$3;
var toIndexedObject$6 = toIndexedObject$c;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames$1.f;
var arraySlice$3 = arraySlice$5;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$3(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$7(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$6(it));
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$9 = wellKnownSymbol$q;
wellKnownSymbolWrapped.f = wellKnownSymbol$9;

var path$e = path$k;
var hasOwn$l = hasOwnProperty_1$1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$7 = objectDefineProperty$1.f;
var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path$e.Symbol || (path$e.Symbol = {});
  if (!hasOwn$l(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$d = functionCall$2;
var getBuiltIn$b = getBuiltIn$k;
var wellKnownSymbol$8 = wellKnownSymbol$q;
var defineBuiltIn$2 = defineBuiltIn$6;
var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$b('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$8('toPrimitive');
  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    defineBuiltIn$2(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$d(valueOf, this);
    }, { arity: 1 });
  }
};

var bind$n = functionBindContext;
var uncurryThis$t = functionUncurryThis$1;
var IndexedObject$3 = indexedObject$1;
var toObject$b = toObject$f;
var lengthOfArrayLike$4 = lengthOfArrayLike$8;
var arraySpeciesCreate = arraySpeciesCreate$2;
var push$b = uncurryThis$t([].push);
var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$b($this);
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
          case 2: push$b(target, value);
        } else switch (TYPE) {
          case 4: return false;
          case 7: push$b(target, value);
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  forEach: createMethod$3(0),
  map: createMethod$3(1),
  filter: createMethod$3(2),
  some: createMethod$3(3),
  every: createMethod$3(4),
  find: createMethod$3(5),
  findIndex: createMethod$3(6),
  filterReject: createMethod$3(7)
};

var $$T = _export$1;
var globalThis$8 = globalThis_1;
var call$c = functionCall$2;
var uncurryThis$s = functionUncurryThis$1;
var DESCRIPTORS$c = descriptors$2;
var NATIVE_SYMBOL$5 = symbolConstructorDetection;
var fails$q = fails$G;
var hasOwn$k = hasOwnProperty_1$1;
var isPrototypeOf$b = objectIsPrototypeOf$1;
var anObject$7 = anObject$h;
var toIndexedObject$5 = toIndexedObject$c;
var toPropertyKey$4 = toPropertyKey$7;
var $toString = toString$e;
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
var shared$7 = shared$b;
var sharedKey$2 = sharedKey$6;
var hiddenKeys$5 = hiddenKeys$a;
var uid$4 = uid$7;
var wellKnownSymbol$7 = wellKnownSymbol$q;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$m = wellKnownSymbolDefine;
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
var $Symbol = globalThis$8.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError$1 = globalThis$8.RangeError;
var TypeError$8 = globalThis$8.TypeError;
var QObject = globalThis$8.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
var nativeDefineProperty = definePropertyModule$2.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$2.f;
var push$a = uncurryThis$s([].push);
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
var setSymbolDescriptor = DESCRIPTORS$c && fails$q(function () {
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
var $defineProperty$6 = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty$6(ObjectPrototypeSymbols, P, Attributes);
  anObject$7(O);
  var key = toPropertyKey$4(P);
  anObject$7(Attributes);
  if (hasOwn$k(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$k(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$k(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
  anObject$7(O);
  var properties = toIndexedObject$5(Properties);
  var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!DESCRIPTORS$c || call$c($propertyIsEnumerable$1, properties, key)) $defineProperty$6(O, key, properties[key]);
  });
  return O;
};
var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
  var P = toPropertyKey$4(V);
  var enumerable = call$c(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$k(AllSymbols, P) && !hasOwn$k(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$k(this, P) || !hasOwn$k(AllSymbols, P) || hasOwn$k(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};
var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$5(O);
  var key = toPropertyKey$4(P);
  if (it === ObjectPrototype$1 && hasOwn$k(AllSymbols, key) && !hasOwn$k(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn$k(AllSymbols, key) && !(hasOwn$k(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$5(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!hasOwn$k(AllSymbols, key) && !hasOwn$k(hiddenKeys$5, key)) push$a(result, key);
  });
  return result;
};
var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$5(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (hasOwn$k(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$k(ObjectPrototype$1, key))) {
      push$a(result, AllSymbols[key]);
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
      var $this = this === undefined ? globalThis$8 : this;
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
  definePropertyModule$2.f = $defineProperty$6;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor$2;
  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;
  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$7(name), name);
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
$$T({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$5, sham: !NATIVE_SYMBOL$5 }, {
  Symbol: $Symbol
});
$forEach$1(objectKeys$3(WellKnownSymbolsStore$2), function (name) {
  defineWellKnownSymbol$m(name);
});
$$T({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$5 }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});
$$T({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5, sham: !DESCRIPTORS$c }, {
  create: $create,
  defineProperty: $defineProperty$6,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
});
$$T({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5 }, {
  getOwnPropertyNames: $getOwnPropertyNames
});
defineSymbolToPrimitive$1();
setToStringTag$3($Symbol, SYMBOL);
hiddenKeys$5[HIDDEN] = true;

var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var symbolRegistryDetection = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;

var $$S = _export$1;
var getBuiltIn$a = getBuiltIn$k;
var hasOwn$j = hasOwnProperty_1$1;
var toString$9 = toString$e;
var shared$6 = shared$b;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
var StringToSymbolRegistry = shared$6('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$6('symbol-to-string-registry');
$$S({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  'for': function (key) {
    var string = toString$9(key);
    if (hasOwn$j(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$a('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$R = _export$1;
var hasOwn$i = hasOwnProperty_1$1;
var isSymbol$5 = isSymbol$8;
var tryToString$4 = tryToString$9;
var shared$5 = shared$b;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
var SymbolToStringRegistry = shared$5('symbol-to-string-registry');
$$R({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$5(sym)) throw new TypeError(tryToString$4(sym) + ' is not a symbol');
    if (hasOwn$i(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var uncurryThis$r = functionUncurryThis$1;
var isArray$4 = isArray$7;
var isCallable$g = isCallable$y;
var classof$6 = classofRaw$3;
var toString$8 = toString$e;
var push$9 = uncurryThis$r([].push);
var getJsonReplacerFunction = function (replacer) {
  if (isCallable$g(replacer)) return replacer;
  if (!isArray$4(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push$9(keys, element);
    else if (typeof element == 'number' || classof$6(element) === 'Number' || classof$6(element) === 'String') push$9(keys, toString$8(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray$4(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

var $$Q = _export$1;
var getBuiltIn$9 = getBuiltIn$k;
var apply$3 = functionApply$1;
var call$b = functionCall$2;
var uncurryThis$q = functionUncurryThis$1;
var fails$p = fails$G;
var isCallable$f = isCallable$y;
var isSymbol$4 = isSymbol$8;
var arraySlice$2 = arraySlice$5;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var $String = String;
var $stringify = getBuiltIn$9('JSON', 'stringify');
var exec$1 = uncurryThis$q(/./.exec);
var charAt = uncurryThis$q(''.charAt);
var charCodeAt = uncurryThis$q(''.charCodeAt);
var replace$1 = uncurryThis$q(''.replace);
var numberToString = uncurryThis$q(1.1.toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$p(function () {
  var symbol = getBuiltIn$9('Symbol')('stringify detection');
  return $stringify([symbol]) !== '[null]'
    || $stringify({ a: symbol }) !== '{}'
    || $stringify(Object(symbol)) !== '{}';
});
var ILL_FORMED_UNICODE = fails$p(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});
var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice$2(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$f($replacer) && (it === undefined || isSymbol$4(it))) return;
  args[1] = function (key, value) {
    if (isCallable$f($replacer)) value = call$b($replacer, this, $String(key), value);
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
  $$Q({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$2(arguments);
      var result = apply$3(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
    }
  });
}

var $$P = _export$1;
var NATIVE_SYMBOL$2 = symbolConstructorDetection;
var fails$o = fails$G;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols$1;
var toObject$a = toObject$f;
var FORCED$6 = !NATIVE_SYMBOL$2 || fails$o(function () { getOwnPropertySymbolsModule$2.f(1); });
$$P({ target: 'Object', stat: true, forced: FORCED$6 }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$a(it)) : [];
  }
});

var defineWellKnownSymbol$l = wellKnownSymbolDefine;
defineWellKnownSymbol$l('asyncDispose');

var defineWellKnownSymbol$k = wellKnownSymbolDefine;
defineWellKnownSymbol$k('asyncIterator');

var defineWellKnownSymbol$j = wellKnownSymbolDefine;
defineWellKnownSymbol$j('dispose');

var defineWellKnownSymbol$i = wellKnownSymbolDefine;
defineWellKnownSymbol$i('hasInstance');

var defineWellKnownSymbol$h = wellKnownSymbolDefine;
defineWellKnownSymbol$h('isConcatSpreadable');

var defineWellKnownSymbol$g = wellKnownSymbolDefine;
defineWellKnownSymbol$g('iterator');

var defineWellKnownSymbol$f = wellKnownSymbolDefine;
defineWellKnownSymbol$f('match');

var defineWellKnownSymbol$e = wellKnownSymbolDefine;
defineWellKnownSymbol$e('matchAll');

var defineWellKnownSymbol$d = wellKnownSymbolDefine;
defineWellKnownSymbol$d('replace');

var defineWellKnownSymbol$c = wellKnownSymbolDefine;
defineWellKnownSymbol$c('search');

var defineWellKnownSymbol$b = wellKnownSymbolDefine;
defineWellKnownSymbol$b('species');

var defineWellKnownSymbol$a = wellKnownSymbolDefine;
defineWellKnownSymbol$a('split');

var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;
defineWellKnownSymbol$9('toPrimitive');
defineSymbolToPrimitive();

var getBuiltIn$8 = getBuiltIn$k;
var defineWellKnownSymbol$8 = wellKnownSymbolDefine;
var setToStringTag$2 = setToStringTag$8;
defineWellKnownSymbol$8('toStringTag');
setToStringTag$2(getBuiltIn$8('Symbol'), 'Symbol');

var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
defineWellKnownSymbol$7('unscopables');

var globalThis$7 = globalThis_1;
var setToStringTag$1 = setToStringTag$8;
setToStringTag$1(globalThis$7.JSON, 'JSON', true);

var path$d = path$k;
var symbol$4 = path$d.Symbol;

var parent$T = symbol$4;
var symbol$3 = parent$T;

var wellKnownSymbol$6 = wellKnownSymbol$q;
var defineProperty$6 = objectDefineProperty$1.f;
var METADATA$1 = wellKnownSymbol$6('metadata');
var FunctionPrototype$4 = Function.prototype;
if (FunctionPrototype$4[METADATA$1] === undefined) {
  defineProperty$6(FunctionPrototype$4, METADATA$1, {
    value: null
  });
}

var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
defineWellKnownSymbol$6('metadata');

var parent$S = symbol$3;
var symbol$2 = parent$S;

var getBuiltIn$7 = getBuiltIn$k;
var uncurryThis$p = functionUncurryThis$1;
var Symbol$4 = getBuiltIn$7('Symbol');
var keyFor = Symbol$4.keyFor;
var thisSymbolValue$1 = uncurryThis$p(Symbol$4.prototype.valueOf);
var symbolIsRegistered = Symbol$4.isRegisteredSymbol || function isRegisteredSymbol(value) {
  try {
    return keyFor(thisSymbolValue$1(value)) !== undefined;
  } catch (error) {
    return false;
  }
};

var $$O = _export$1;
var isRegisteredSymbol$1 = symbolIsRegistered;
$$O({ target: 'Symbol', stat: true }, {
  isRegisteredSymbol: isRegisteredSymbol$1
});

var shared$4 = shared$b;
var getBuiltIn$6 = getBuiltIn$k;
var uncurryThis$o = functionUncurryThis$1;
var isSymbol$3 = isSymbol$8;
var wellKnownSymbol$5 = wellKnownSymbol$q;
var Symbol$3 = getBuiltIn$6('Symbol');
var $isWellKnownSymbol = Symbol$3.isWellKnownSymbol;
var getOwnPropertyNames = getBuiltIn$6('Object', 'getOwnPropertyNames');
var thisSymbolValue = uncurryThis$o(Symbol$3.prototype.valueOf);
var WellKnownSymbolsStore$1 = shared$4('wks');
for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$3), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  try {
    var symbolKey = symbolKeys[i];
    if (isSymbol$3(Symbol$3[symbolKey])) wellKnownSymbol$5(symbolKey);
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

var $$N = _export$1;
var isWellKnownSymbol$1 = symbolIsWellKnown;
$$N({ target: 'Symbol', stat: true, forced: true }, {
  isWellKnownSymbol: isWellKnownSymbol$1
});

var defineWellKnownSymbol$5 = wellKnownSymbolDefine;
defineWellKnownSymbol$5('customMatcher');

var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
defineWellKnownSymbol$4('observable');

var $$M = _export$1;
var isRegisteredSymbol = symbolIsRegistered;
$$M({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
  isRegistered: isRegisteredSymbol
});

var $$L = _export$1;
var isWellKnownSymbol = symbolIsWellKnown;
$$L({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
  isWellKnown: isWellKnownSymbol
});

var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
defineWellKnownSymbol$3('matcher');

var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
defineWellKnownSymbol$2('metadataKey');

var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
defineWellKnownSymbol$1('patternMatch');

var defineWellKnownSymbol = wellKnownSymbolDefine;
defineWellKnownSymbol('replaceAll');

var parent$R = symbol$2;
var symbol$1 = parent$R;

var symbol = symbol$1;
var _Symbol = symbol;

var WrappedWellKnownSymbolModule$3 = wellKnownSymbolWrapped;
var iterator$5 = WrappedWellKnownSymbolModule$3.f('iterator');

var parent$Q = iterator$5;
var iterator$4 = parent$Q;

var parent$P = iterator$4;
var iterator$3 = parent$P;

var parent$O = iterator$3;
var iterator$2 = parent$O;

var iterator$1 = iterator$2;

function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof _Symbol && "symbol" == typeof iterator$1 ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

var WrappedWellKnownSymbolModule$2 = wellKnownSymbolWrapped;
var toPrimitive$8 = WrappedWellKnownSymbolModule$2.f('toPrimitive');

var parent$N = toPrimitive$8;
var toPrimitive$7 = parent$N;

var parent$M = toPrimitive$7;
var toPrimitive$6 = parent$M;

var parent$L = toPrimitive$6;
var toPrimitive$5 = parent$L;

var toPrimitive$4 = toPrimitive$5;
var _Symbol$toPrimitive = toPrimitive$4;

function toPrimitive$3(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[_Symbol$toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey$3(t) {
  var i = toPrimitive$3(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), _Object$defineProperty(e, toPropertyKey$3(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), _Object$defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

var regeneratorRuntime$1 = {exports: {}};

var $$K = _export$1;
var fails$n = fails$G;
var toObject$9 = toObject$f;
var nativeGetPrototypeOf = objectGetPrototypeOf;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var FAILS_ON_PRIMITIVES$3 = fails$n(function () { nativeGetPrototypeOf(1); });
$$K({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$9(it));
  }
});

var path$c = path$k;
var getPrototypeOf$6 = path$c.Object.getPrototypeOf;

var parent$K = getPrototypeOf$6;
var getPrototypeOf$5 = parent$K;

var parent$J = getPrototypeOf$5;
var getPrototypeOf$4 = parent$J;

var parent$I = getPrototypeOf$4;
var getPrototypeOf$3 = parent$I;

var getPrototypeOf$2 = getPrototypeOf$3;
var _Object$getPrototypeOf = getPrototypeOf$2;

var $$J = _export$1;
var uncurryThis$n = functionUncurryThis$1;
var isArray$3 = isArray$7;
var nativeReverse = uncurryThis$n([].reverse);
var test$1 = [1, 2];
$$J({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    if (isArray$3(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

var globalThis$6 = globalThis_1;
var path$b = path$k;
var getBuiltInPrototypeMethod$b = function (CONSTRUCTOR, METHOD) {
  var Namespace = path$b[CONSTRUCTOR + 'Prototype'];
  var pureMethod = Namespace && Namespace[METHOD];
  if (pureMethod) return pureMethod;
  var NativeConstructor = globalThis$6[CONSTRUCTOR];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  return NativePrototype && NativePrototype[METHOD];
};

var getBuiltInPrototypeMethod$a = getBuiltInPrototypeMethod$b;
var reverse$5 = getBuiltInPrototypeMethod$a('Array', 'reverse');

var isPrototypeOf$a = objectIsPrototypeOf$1;
var method$8 = reverse$5;
var ArrayPrototype$8 = Array.prototype;
var reverse$4 = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype$8 || (isPrototypeOf$a(ArrayPrototype$8, it) && own === ArrayPrototype$8.reverse) ? method$8 : own;
};

var parent$H = reverse$4;
var reverse$3 = parent$H;

var parent$G = reverse$3;
var reverse$2 = parent$G;

var parent$F = reverse$2;
var reverse$1 = parent$F;

var reverse = reverse$1;

var OverloadYield = {exports: {}};

(function (module) {
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(OverloadYield));
getDefaultExportFromCjs(OverloadYield.exports);

var regenerator$1 = {exports: {}};

var $$I = _export$1;
var DESCRIPTORS$b = descriptors$2;
var create$7 = objectCreate;
$$I({ target: 'Object', stat: true, sham: !DESCRIPTORS$b }, {
  create: create$7
});

var path$a = path$k;
var Object$4 = path$a.Object;
var create$6 = function create(P, D) {
  return Object$4.create(P, D);
};

var parent$E = create$6;
var create$5 = parent$E;

var parent$D = create$5;
var create$4 = parent$D;

var parent$C = create$4;
var create$3 = parent$C;

var create$2 = create$3;
var _Object$create = create$2;

var uncurryThis$m = functionUncurryThis$1;
var aCallable$8 = aCallable$k;
var isObject$c = isObject$q;
var hasOwn$h = hasOwnProperty_1$1;
var arraySlice$1 = arraySlice$5;
var NATIVE_BIND$2 = functionBindNative$1;
var $Function$1 = Function;
var concat$7 = uncurryThis$m([].concat);
var join = uncurryThis$m([].join);
var factories = {};
var construct$6 = function (C, argsLength, args) {
  if (!hasOwn$h(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function$1('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};
var functionBind$1 = NATIVE_BIND$2 ? $Function$1.bind : function bind(that ) {
  var F = aCallable$8(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice$1(arguments, 1);
  var boundFunction = function bound() {
    var args = concat$7(partArgs, arraySlice$1(arguments));
    return this instanceof boundFunction ? construct$6(F, args.length, args) : F.apply(that, args);
  };
  if (isObject$c(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

var $$H = _export$1;
var bind$m = functionBind$1;
$$H({ target: 'Function', proto: true, forced: Function.bind !== bind$m }, {
  bind: bind$m
});

var getBuiltInPrototypeMethod$9 = getBuiltInPrototypeMethod$b;
var bind$l = getBuiltInPrototypeMethod$9('Function', 'bind');

var isPrototypeOf$9 = objectIsPrototypeOf$1;
var method$7 = bind$l;
var FunctionPrototype$3 = Function.prototype;
var bind$k = function (it) {
  var own = it.bind;
  return it === FunctionPrototype$3 || (isPrototypeOf$9(FunctionPrototype$3, it) && own === FunctionPrototype$3.bind) ? method$7 : own;
};

var parent$B = bind$k;
var bind$j = parent$B;

var parent$A = bind$j;
var bind$i = parent$A;

var parent$z = bind$i;
var bind$h = parent$z;

var bind$g = bind$h;
var _bindInstanceProperty = bind$g;

var $$G = _export$1;
var setPrototypeOf$5 = objectSetPrototypeOf;
$$G({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf$5
});

var path$9 = path$k;
var setPrototypeOf$4 = path$9.Object.setPrototypeOf;

var parent$y = setPrototypeOf$4;
var setPrototypeOf$3 = parent$y;

var parent$x = setPrototypeOf$3;
var setPrototypeOf$2 = parent$x;

var parent$w = setPrototypeOf$2;
var setPrototypeOf$1 = parent$w;

var setPrototypeOf = setPrototypeOf$1;
var _Object$setPrototypeOf = setPrototypeOf;

var regeneratorDefine = {exports: {}};

(function (module) {
var _Object$defineProperty = defineProperty$8;
function _regeneratorDefine(e, r, n, t) {
  var i = _Object$defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      var o = function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorDefine));
getDefaultExportFromCjs(regeneratorDefine.exports);

(function (module) {
var _Symbol = symbol;
var _Object$create = create$2;
var _bindInstanceProperty = bind$g;
var _Object$getPrototypeOf = getPrototypeOf$2;
var _Object$setPrototypeOf = setPrototypeOf;
var regeneratorDefine$1 = regeneratorDefine.exports;
function _regenerator() {
  var e,
    t,
    r = "function" == typeof _Symbol ? _Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = _Object$create(c.prototype);
    return regeneratorDefine$1(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: _bindInstanceProperty(d).call(d, e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = _Object$getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine$1(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(c);
  function f(e) {
    return _Object$setPrototypeOf ? _Object$setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine$1(e, o, "GeneratorFunction")), e.prototype = _Object$create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine$1(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine$1(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine$1(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine$1(u), regeneratorDefine$1(u, o, "Generator"), regeneratorDefine$1(u, n, function () {
    return this;
  }), regeneratorDefine$1(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regenerator$1));
getDefaultExportFromCjs(regenerator$1.exports);

var regeneratorAsync = {exports: {}};

var regeneratorAsyncGen = {exports: {}};

var regeneratorAsyncIterator = {exports: {}};

var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var asyncIterator$4 = WrappedWellKnownSymbolModule$1.f('asyncIterator');

var parent$v = asyncIterator$4;
var asyncIterator$3 = parent$v;

var parent$u = asyncIterator$3;
var asyncIterator$2 = parent$u;

var parent$t = asyncIterator$2;
var asyncIterator$1 = parent$t;

var asyncIterator = asyncIterator$1;

(function (module) {
var _Symbol = symbol;
var _Symbol$asyncIterator = asyncIterator;
var OverloadYield$1 = OverloadYield.exports;
var regeneratorDefine$1 = regeneratorDefine.exports;
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield$1 ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine$1(AsyncIterator.prototype), regeneratorDefine$1(AsyncIterator.prototype, "function" == typeof _Symbol && _Symbol$asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine$1(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorAsyncIterator));
getDefaultExportFromCjs(regeneratorAsyncIterator.exports);

(function (module) {
var _Promise = promise$1;
var regenerator = regenerator$1.exports;
var regeneratorAsyncIterator$1 = regeneratorAsyncIterator.exports;
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator$1(regenerator().w(r, e, t, o), n || _Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorAsyncGen));
getDefaultExportFromCjs(regeneratorAsyncGen.exports);

(function (module) {
var regeneratorAsyncGen$1 = regeneratorAsyncGen.exports;
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen$1(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorAsync));
getDefaultExportFromCjs(regeneratorAsync.exports);

var regeneratorKeys = {exports: {}};

var DESCRIPTORS$a = descriptors$2;
var isArray$2 = isArray$7;
var $TypeError$f = TypeError;
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
  if (isArray$2(O) && !getOwnPropertyDescriptor$2(O, 'length').writable) {
    throw new $TypeError$f('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var tryToString$3 = tryToString$9;
var $TypeError$e = TypeError;
var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$e('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var $$F = _export$1;
var toObject$8 = toObject$f;
var lengthOfArrayLike$3 = lengthOfArrayLike$8;
var setArrayLength$1 = arraySetLength;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var INCORRECT_RESULT = [].unshift(0) !== 1;
var properErrorOnNonWritableLength$1 = function () {
  try {
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED$5 = INCORRECT_RESULT || !properErrorOnNonWritableLength$1();
$$F({ target: 'Array', proto: true, arity: 1, forced: FORCED$5 }, {
  unshift: function unshift(item) {
    var O = toObject$8(this);
    var len = lengthOfArrayLike$3(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger$1(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength$1(O, len + argCount);
  }
});

var getBuiltInPrototypeMethod$8 = getBuiltInPrototypeMethod$b;
var unshift$5 = getBuiltInPrototypeMethod$8('Array', 'unshift');

var isPrototypeOf$8 = objectIsPrototypeOf$1;
var method$6 = unshift$5;
var ArrayPrototype$7 = Array.prototype;
var unshift$4 = function (it) {
  var own = it.unshift;
  return it === ArrayPrototype$7 || (isPrototypeOf$8(ArrayPrototype$7, it) && own === ArrayPrototype$7.unshift) ? method$6 : own;
};

var parent$s = unshift$4;
var unshift$3 = parent$s;

var parent$r = unshift$3;
var unshift$2 = parent$r;

var parent$q = unshift$2;
var unshift$1 = parent$q;

var unshift = unshift$1;

(function (module) {
var _unshiftInstanceProperty = unshift;
function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) _unshiftInstanceProperty(r).call(r, t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorKeys));
getDefaultExportFromCjs(regeneratorKeys.exports);

var regeneratorValues = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
var _Symbol = symbol;
var _Symbol$iterator = iterator$1;
function _typeof(o) {
  "@babel/helpers - typeof";
  return module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(_typeof));
getDefaultExportFromCjs(_typeof.exports);

(function (module) {
var _typeof$1 = _typeof.exports["default"];
var _Symbol = symbol;
var _Symbol$iterator = iterator$1;
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof _Symbol && _Symbol$iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof$1(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorValues));
getDefaultExportFromCjs(regeneratorValues.exports);

(function (module) {
var _Object$getPrototypeOf = getPrototypeOf$2;
var _reverseInstanceProperty = reverse;
var OverloadYield$1 = OverloadYield.exports;
var regenerator = regenerator$1.exports;
var regeneratorAsync$1 = regeneratorAsync.exports;
var regeneratorAsyncGen$1 = regeneratorAsyncGen.exports;
var regeneratorAsyncIterator$1 = regeneratorAsyncIterator.exports;
var regeneratorKeys$1 = regeneratorKeys.exports;
var regeneratorValues$1 = regeneratorValues.exports;
function _regeneratorRuntime() {
  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (_Object$getPrototypeOf ? _Object$getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues$1(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && _reverseInstanceProperty(o).call(o));
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield$1(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator$1,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen$1 : regeneratorAsync$1)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys$1,
      values: regeneratorValues$1
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
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

var globalThis$5 = globalThis_1;
var apply$2 = functionApply$1;
var isCallable$e = isCallable$y;
var ENVIRONMENT = environment;
var USER_AGENT = environmentUserAgent;
var arraySlice = arraySlice$5;
var validateArgumentsLength = validateArgumentsLength$2;
var Function$1 = globalThis$5.Function;
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
  var version = globalThis$5.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();
var schedulersFix$2 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout ) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$e(handler) ? handler : Function$1(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply$2(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$E = _export$1;
var globalThis$4 = globalThis_1;
var schedulersFix$1 = schedulersFix$2;
var setInterval$2 = schedulersFix$1(globalThis$4.setInterval, true);
$$E({ global: true, bind: true, forced: globalThis$4.setInterval !== setInterval$2 }, {
  setInterval: setInterval$2
});

var $$D = _export$1;
var globalThis$3 = globalThis_1;
var schedulersFix = schedulersFix$2;
var setTimeout$3 = schedulersFix(globalThis$3.setTimeout, true);
$$D({ global: true, bind: true, forced: globalThis$3.setTimeout !== setTimeout$3 }, {
  setTimeout: setTimeout$3
});

var path$8 = path$k;
var setInterval$1 = path$8.setInterval;

var setInterval = setInterval$1;

var internalMetadata = {exports: {}};

var fails$m = fails$G;
var arrayBufferNonExtensible = fails$m(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

var fails$l = fails$G;
var isObject$b = isObject$q;
var classof$5 = classofRaw$3;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES$2 = fails$l(function () { $isExtensible(1); });
var objectIsExtensible = (FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject$b(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$5(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var fails$k = fails$G;
var freezing = !fails$k(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$C = _export$1;
var uncurryThis$l = functionUncurryThis$1;
var hiddenKeys$4 = hiddenKeys$a;
var isObject$a = isObject$q;
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
  if (!isObject$a(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
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
  var splice = uncurryThis$l([].splice);
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
    $$C({ target: 'Object', stat: true, forced: true }, {
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

var $$B = _export$1;
var globalThis$2 = globalThis_1;
var InternalMetadataModule = internalMetadata.exports;
var fails$j = fails$G;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$c;
var iterate$f = iterate$l;
var anInstance$1 = anInstance$3;
var isCallable$d = isCallable$y;
var isObject$9 = isObject$q;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var setToStringTag = setToStringTag$8;
var defineProperty$4 = objectDefineProperty$1.f;
var forEach$6 = arrayIteration.forEach;
var DESCRIPTORS$9 = descriptors$2;
var InternalStateModule$2 = internalState$1;
var setInternalState$1 = InternalStateModule$2.set;
var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis$2[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;
  if (!DESCRIPTORS$9 || !isCallable$d(NativeConstructor)
    || !(IS_WEAK || NativePrototype.forEach && !fails$j(function () { new NativeConstructor().entries().next(); }))
  ) {
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState$1(anInstance$1(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (!isNullOrUndefined$2(iterable)) iterate$f(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    forEach$6(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY === 'add' || KEY === 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY === 'clear')) {
        createNonEnumerableProperty$4(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject$9(a)) return KEY === 'get' ? undefined : false;
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
  $$B({ global: true, forced: true }, exported);
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
var bind$f = functionBindContext;
var anInstance = anInstance$3;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var iterate$e = iterate$l;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies = setSpecies$2;
var DESCRIPTORS$8 = descriptors$2;
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
        first: null,
        last: null,
        size: 0
      });
      if (!DESCRIPTORS$8) that.size = 0;
      if (!isNullOrUndefined$1(iterable)) iterate$e(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
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
          next: null,
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
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = null;
          entry = entry.next;
        }
        state.first = state.last = null;
        state.index = create$1(null);
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
        var boundFunction = bind$f(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
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
        last: null
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed) entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = null;
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

var $$A = _export$1;
var uncurryThis$k = functionUncurryThis$1;
var aCallable$7 = aCallable$k;
var requireObjectCoercible$7 = requireObjectCoercible$c;
var iterate$d = iterate$l;
var MapHelpers$9 = mapHelpers;
var IS_PURE = isPure;
var Map$5 = MapHelpers$9.Map;
var has$6 = MapHelpers$9.has;
var get$6 = MapHelpers$9.get;
var set$9 = MapHelpers$9.set;
var push$8 = uncurryThis$k([].push);
$$A({ target: 'Map', stat: true, forced: IS_PURE  }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible$7(items);
    aCallable$7(callbackfn);
    var map = new Map$5();
    var k = 0;
    iterate$d(items, function (value) {
      var key = callbackfn(value, k++);
      if (!has$6(map, key)) set$9(map, key, [value]);
      else push$8(get$6(map, key), value);
    });
    return map;
  }
});

var path$7 = path$k;
var map$9 = path$7.Map;

var parent$p = map$9;
var map$8 = parent$p;

var map$7 = map$8;

var promise = promise$4;

var getBuiltInPrototypeMethod$7 = getBuiltInPrototypeMethod$b;
var concat$6 = getBuiltInPrototypeMethod$7('Array', 'concat');

var isPrototypeOf$7 = objectIsPrototypeOf$1;
var method$5 = concat$6;
var ArrayPrototype$6 = Array.prototype;
var concat$5 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype$6 || (isPrototypeOf$7(ArrayPrototype$6, it) && own === ArrayPrototype$6.concat) ? method$5 : own;
};

var parent$o = concat$5;
var concat$4 = parent$o;

var concat$3 = concat$4;

var path$6 = path$k;
var setTimeout$2 = path$6.setTimeout;

var setTimeout$1 = setTimeout$2;

var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$j = functionUncurryThis$1;
var requireObjectCoercible$6 = requireObjectCoercible$c;
var toString$7 = toString$e;
var whitespaces$1 = whitespaces$2;
var replace = uncurryThis$j(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = toString$7(requireObjectCoercible$6($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};
var stringTrim = {
  start: createMethod$2(1),
  end: createMethod$2(2),
  trim: createMethod$2(3)
};

var globalThis$1 = globalThis_1;
var fails$i = fails$G;
var uncurryThis$i = functionUncurryThis$1;
var toString$6 = toString$e;
var trim$1 = stringTrim.trim;
var whitespaces = whitespaces$2;
var $parseInt$1 = globalThis$1.parseInt;
var Symbol$2 = globalThis$1.Symbol;
var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$i(hex.exec);
var FORCED$4 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  || (ITERATOR$1 && !fails$i(function () { $parseInt$1(Object(ITERATOR$1)); }));
var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
  var S = trim$1(toString$6(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$z = _export$1;
var $parseInt = numberParseInt;
$$z({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});

var path$5 = path$k;
var _parseInt$2 = path$5.parseInt;

var parent$n = _parseInt$2;
var _parseInt$1 = parent$n;

var _parseInt = _parseInt$1;

var $$y = _export$1;
var uncurryThis$h = functionUncurryThis$1;
var $Date = Date;
var thisTimeValue$1 = uncurryThis$h($Date.prototype.getTime);
$$y({ target: 'Date', stat: true }, {
  now: function now() {
    return thisTimeValue$1(new $Date());
  }
});

var path$4 = path$k;
var now$2 = path$4.Date.now;

var parent$m = now$2;
var now$1 = parent$m;

var now = now$1;

var $$x = _export$1;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');
$$x({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  filter: function filter(callbackfn ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var getBuiltInPrototypeMethod$6 = getBuiltInPrototypeMethod$b;
var filter$3 = getBuiltInPrototypeMethod$6('Array', 'filter');

var isPrototypeOf$6 = objectIsPrototypeOf$1;
var method$4 = filter$3;
var ArrayPrototype$5 = Array.prototype;
var filter$2 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$5 || (isPrototypeOf$6(ArrayPrototype$5, it) && own === ArrayPrototype$5.filter) ? method$4 : own;
};

var parent$l = filter$2;
var filter$1 = parent$l;

var filter = filter$1;

var $$w = _export$1;
var $includes = arrayIncludes$1.includes;
var fails$h = fails$G;
var BROKEN_ON_SPARSE = fails$h(function () {
  return !Array(1).includes();
});
$$w({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var getBuiltInPrototypeMethod$5 = getBuiltInPrototypeMethod$b;
var includes$4 = getBuiltInPrototypeMethod$5('Array', 'includes');

var isObject$8 = isObject$q;
var classof$4 = classofRaw$3;
var wellKnownSymbol$4 = wellKnownSymbol$q;
var MATCH$1 = wellKnownSymbol$4('match');
var isRegexp = function (it) {
  var isRegExp;
  return isObject$8(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) === 'RegExp');
};

var isRegExp$1 = isRegexp;
var $TypeError$d = TypeError;
var notARegexp = function (it) {
  if (isRegExp$1(it)) {
    throw new $TypeError$d("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$3 = wellKnownSymbol$q;
var MATCH = wellKnownSymbol$3('match');
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

var $$v = _export$1;
var uncurryThis$g = functionUncurryThis$1;
var notARegExp = notARegexp;
var requireObjectCoercible$5 = requireObjectCoercible$c;
var toString$5 = toString$e;
var correctIsRegExpLogic = correctIsRegexpLogic;
var stringIndexOf = uncurryThis$g(''.indexOf);
$$v({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString ) {
    return !!~stringIndexOf(
      toString$5(requireObjectCoercible$5(this)),
      toString$5(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var getBuiltInPrototypeMethod$4 = getBuiltInPrototypeMethod$b;
var includes$3 = getBuiltInPrototypeMethod$4('String', 'includes');

var isPrototypeOf$5 = objectIsPrototypeOf$1;
var arrayMethod = includes$4;
var stringMethod = includes$3;
var ArrayPrototype$4 = Array.prototype;
var StringPrototype = String.prototype;
var includes$2 = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype$4 || (isPrototypeOf$5(ArrayPrototype$4, it) && own === ArrayPrototype$4.includes)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$5(StringPrototype, it) && own === StringPrototype.includes)) {
    return stringMethod;
  } return own;
};

var parent$k = includes$2;
var includes$1 = parent$k;

var includes = includes$1;

var callBind$3 = {exports: {}};

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr$5 = Object.prototype.toString;
var max$3 = Math.max;
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
    var boundLength = max$3(0, target.length - args.length);
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
var functionBind = Function.prototype.bind || implementation$4;

var esObjectAtoms = Object;

var esErrors = Error;

var _eval = EvalError;

var range = RangeError;

var ref = ReferenceError;

var syntax = SyntaxError;

var type = TypeError;

var uri = URIError;

var abs$2 = Math.abs;

var floor$2 = Math.floor;

var max$2 = Math.max;

var min$3 = Math.min;

var pow$1 = Math.pow;

var round$1 = Math.round;

var _isNaN$1 = Number.isNaN || function isNaN(a) {
	return a !== a;
};

var $isNaN$3 = _isNaN$1;
var sign$1 = function sign(number) {
	if ($isNaN$3(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};

var gOPD$2 = Object.getOwnPropertyDescriptor;

var $gOPD$1 = gOPD$2;
if ($gOPD$1) {
	try {
		$gOPD$1([], 'length');
	} catch (e) {
		$gOPD$1 = null;
	}
}
var gopd$1 = $gOPD$1;

var $defineProperty$5 = Object.defineProperty || false;
if ($defineProperty$5) {
	try {
		$defineProperty$5({}, 'a', { value: 1 });
	} catch (e) {
		$defineProperty$5 = false;
	}
}
var esDefineProperty = $defineProperty$5;

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
	for (var _ in obj) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }
	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }
	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }
	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }
	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor =  (Object.getOwnPropertyDescriptor(obj, sym));
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

var Reflect_getPrototypeOf = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;

var $Object$3 = esObjectAtoms;
var Object_getPrototypeOf = $Object$3.getPrototypeOf || null;

var functionCall$1 = Function.prototype.call;

var functionApply = Function.prototype.apply;

var reflectApply$1 = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

var bind$e = functionBind;
var $apply$1 = functionApply;
var $call$2 = functionCall$1;
var $reflectApply = reflectApply$1;
var actualApply = $reflectApply || bind$e.call($call$2, $apply$1);

var bind$d = functionBind;
var $TypeError$c = type;
var $call$1 = functionCall$1;
var $actualApply = actualApply;
var callBindApplyHelpers = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError$c('a function is required');
	}
	return $actualApply(bind$d, $call$1, args);
};

var callBind$2 = callBindApplyHelpers;
var gOPD$1 = gopd$1;
var hasProtoAccessor;
try {
	hasProtoAccessor =  ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}
var desc = !!hasProtoAccessor && gOPD$1 && gOPD$1(Object.prototype,  ('__proto__'));
var $Object$2 = Object;
var $getPrototypeOf = $Object$2.getPrototypeOf;
var get$5 = desc && typeof desc.get === 'function'
	? callBind$2([desc.get])
	: typeof $getPrototypeOf === 'function'
		?  function getDunder(value) {
			return $getPrototypeOf(value == null ? value : $Object$2(value));
		}
		: false;

var reflectGetProto = Reflect_getPrototypeOf;
var originalGetProto = Object_getPrototypeOf;
var getDunderProto = get$5;
var getProto$1 = reflectGetProto
	? function getProto(O) {
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				return getDunderProto(O);
			}
			: null;

var call$a = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$c = functionBind;
var hasown = bind$c.call(call$a, $hasOwn);

var undefined$1;
var $Object$1 = esObjectAtoms;
var $Error = esErrors;
var $EvalError = _eval;
var $RangeError$2 = range;
var $ReferenceError = ref;
var $SyntaxError$2 = syntax;
var $TypeError$b = type;
var $URIError = uri;
var abs$1 = abs$2;
var floor$1 = floor$2;
var max$1 = max$2;
var min$2 = min$3;
var pow = pow$1;
var round = round$1;
var sign = sign$1;
var $Function = Function;
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};
var $gOPD = gopd$1;
var $defineProperty$4 = esDefineProperty;
var throwTypeError = function () {
	throw new $TypeError$b();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			arguments.callee;
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;
var hasSymbols$1 = hasSymbols$2();
var getProto = getProto$1;
var $ObjectGPO = Object_getPrototypeOf;
var $ReflectGPO = Reflect_getPrototypeOf;
var $apply = functionApply;
var $call = functionCall$1;
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
	__proto__: null,
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
	'%Error%': $Error,
	'%eval%': eval,
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined$1 : Float16Array,
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
	'%IteratorPrototype%': hasSymbols$1 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object$1,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': $RangeError$2,
	'%ReferenceError%': $ReferenceError,
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
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty$4,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs$1,
	'%Math.floor%': floor$1,
	'%Math.max%': max$1,
	'%Math.min%': min$2,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
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
	__proto__: null,
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
var bind$b = functionBind;
var hasOwn$f = hasown;
var $concat = bind$b.call($call, Array.prototype.concat);
var $spliceApply = bind$b.call($apply, Array.prototype.splice);
var $replace = bind$b.call($call, String.prototype.replace);
var $strSlice = bind$b.call($call, String.prototype.slice);
var $exec = bind$b.call($call, RegExp.prototype.exec);
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
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
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

var GetIntrinsic$d = getIntrinsic;
var $defineProperty$3 = GetIntrinsic$d('%Object.defineProperty%', true);
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
var bind = functionBind;
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
}(callBind$3));

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
	var has$5 = Object.prototype.hasOwnProperty;
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
var concat$2 = Array.prototype.concat;
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
		props = concat$2.call(props, Object.getOwnPropertySymbols(map));
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
var isCallable$c = reflectApply
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

var IsCallable$2 = isCallable$c;

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
var callBind$1 = callBind$3.exports;
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
var $isFinite$1 = _isFinite;
var isInteger$1 = function isInteger(argument) {
	if (typeof argument !== 'number' || $isNaN$1(argument) || !$isFinite$1(argument)) {
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
var predicates$1 = {
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
			&& predicates$1['PromiseCapability Record'](value['[[Capability]]']);
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
	var predicate = predicates$1[recordType];
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

var callBind = callBind$3.exports;
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
var global$l =
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$g = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$f = fails$g;
var descriptors$1 = !fails$f(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$e = fails$g;
var functionBindNative = !fails$e(function () {
  var test = (function () {  }).bind();
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;
var call$9 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$9.bind(call$9) : function () {
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

var NATIVE_BIND = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var bind$a = FunctionPrototype$2.bind;
var call$8 = FunctionPrototype$2.call;
var uncurryThis$f = NATIVE_BIND && bind$a.bind(call$8, call$8);
var functionUncurryThis = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis$f(fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var uncurryThis$e = functionUncurryThis;
var toString$4 = uncurryThis$e({}.toString);
var stringSlice$1 = uncurryThis$e(''.slice);
var classofRaw = function (it) {
  return stringSlice$1(toString$4(it), 8, -1);
};

var global$k = global$l;
var uncurryThis$d = functionUncurryThis;
var fails$d = fails$g;
var classof$3 = classofRaw;
var Object$3 = global$k.Object;
var split = uncurryThis$d(''.split);
var indexedObject = fails$d(function () {
  return !Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : Object$3(it);
} : Object$3;

var global$j = global$l;
var TypeError$7 = global$j.TypeError;
var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$7("Can't call method on " + it);
  return it;
};

var IndexedObject$2 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var toIndexedObject$4 = function (it) {
  return IndexedObject$2(requireObjectCoercible$3(it));
};

var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;
var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$i = global$l;
var isCallable$9 = isCallable$b;
var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};
var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
};

var uncurryThis$c = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$c({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$h = global$l;
var userAgent = engineUserAgent;
var process$1 = global$h.process;
var Deno$1 = global$h.Deno;
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
var fails$c = fails$g;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$c(function () {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$g = global$l;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$2 = global$g.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf$4($Symbol.prototype, Object$2(it));
};

var global$f = global$l;
var String$2 = global$f.String;
var tryToString$2 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$e = global$l;
var isCallable$7 = isCallable$b;
var tryToString$1 = tryToString$2;
var TypeError$6 = global$e.TypeError;
var aCallable$6 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$6(tryToString$1(argument) + ' is not a function');
};

var aCallable$5 = aCallable$6;
var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$5(func);
};

var global$d = global$l;
var call$7 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$5 = global$d.TypeError;
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$7(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$7(fn, input))) return val;
  throw TypeError$5("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$c = global$l;
var defineProperty$2 = Object.defineProperty;
var setGlobal$3 = function (key, value) {
  try {
    defineProperty$2(global$c, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$c[key] = value;
  } return value;
};

var global$b = global$l;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$b[SHARED] || setGlobal$2(SHARED, {});
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

var global$a = global$l;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$1 = global$a.Object;
var toObject$7 = function (argument) {
  return Object$1(requireObjectCoercible$2(argument));
};

var uncurryThis$b = functionUncurryThis;
var toObject$6 = toObject$7;
var hasOwnProperty$1 = uncurryThis$b({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$6(it), key);
};

var uncurryThis$a = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$3 = uncurryThis$a(1.0.toString);
var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
};

var global$9 = global$l;
var shared$2 = shared$3.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$9.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$2 = function (name) {
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

var global$8 = global$l;
var call$6 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$1 = wellKnownSymbol$2;
var TypeError$4 = global$8.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');
var toPrimitive$2 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$4("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$7 = global$l;
var isObject$4 = isObject$7;
var document$1 = global$7.document;
var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);
var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors$1;
var fails$b = fails$g;
var createElement = documentCreateElement;
var ie8DomDefine = !DESCRIPTORS$7 && !fails$b(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors$1;
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

var DESCRIPTORS$5 = descriptors$1;
var fails$a = fails$g;
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$a(function () {
  return Object.defineProperty(function () {  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$6 = global$l;
var isObject$3 = isObject$7;
var String$1 = global$6.String;
var TypeError$3 = global$6.TypeError;
var anObject$6 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$3(String$1(argument) + ' is not an object');
};

var global$5 = global$l;
var DESCRIPTORS$4 = descriptors$1;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$5 = anObject$6;
var toPropertyKey = toPropertyKey$2;
var TypeError$2 = global$5.TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$5(O);
  P = toPropertyKey(P);
  anObject$5(Attributes);
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
  anObject$5(O);
  P = toPropertyKey(P);
  anObject$5(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors$1;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;
var createNonEnumerableProperty$3 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$9 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString$1 = uncurryThis$9(Function.toString);
if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString$1(it);
  };
}
var inspectSource$2 = store$1.inspectSource;

var global$4 = global$l;
var isCallable$4 = isCallable$b;
var inspectSource$1 = inspectSource$2;
var WeakMap$2 = global$4.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$2) && /native code/.test(inspectSource$1(WeakMap$2));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys$3 = shared$1('keys');
var sharedKey$1 = function (key) {
  return keys$3[key] || (keys$3[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$3 = global$l;
var uncurryThis$8 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$6 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$3.TypeError;
var WeakMap$1 = global$3.WeakMap;
var set$8, get$4, has$4;
var enforce = function (it) {
  return has$4(it) ? get$4(it) : set$8(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$2(it) || (state = get$4(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  var wmget = uncurryThis$8(store.get);
  var wmhas = uncurryThis$8(store.has);
  var wmset = uncurryThis$8(store.set);
  set$8 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get$4 = function (it) {
    return wmget(store, it) || {};
  };
  has$4 = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set$8 = function (it, metadata) {
    if (hasOwn$6(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get$4 = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has$4 = function (it) {
    return hasOwn$6(it, STATE);
  };
}
var internalState = {
  set: set$8,
  get: get$4,
  has: has$4,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$2 = descriptors$1;
var hasOwn$5 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
var PROPER = EXISTS && (function something() {  }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$2 = global$l;
var isCallable$3 = isCallable$b;
var hasOwn$4 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource = inspectSource$2;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable$3(value)) {
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
  if (O === global$2) {
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
  return isCallable$3(this) && getInternalState(this).source || inspectSource(this);
});

var objectGetOwnPropertyNames = {};

var ceil$1 = Math.ceil;
var floor = Math.floor;
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil$1)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min;
var toLength$2 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0;
};

var toLength$1 = toLength$2;
var lengthOfArrayLike$2 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
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
  includes: createMethod$1(true),
  indexOf: createMethod$1(false)
};

var uncurryThis$7 = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf$6 = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push$7 = uncurryThis$7([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$1, key) && hasOwn$3(O, key) && push$7(result, key);
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
    ~indexOf$6(result, key) || push$7(result, key);
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
var uncurryThis$6 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$4 = anObject$6;
var concat$1 = uncurryThis$6([].concat);
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$4(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
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

var fails$9 = fails$g;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;
var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$2(detection) ? fails$9(detection)
    : !!detection;
};
var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$1 = global$l;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
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
    redefine(target, key, sourceProperty, options);
  }
};

var fails$8 = fails$g;
var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$8(function () {
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$u = _export;
var uncurryThis$5 = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toIndexedObject = toIndexedObject$4;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;
var un$Join = uncurryThis$5([].join);
var ES3_STRINGS = IndexedObject$1 != Object;
var STRICT_METHOD$1 = arrayMethodIsStrict$3('join', ',');
$$u({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var getPrototypeOf$1 = getPrototypeOf$5;

var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var toStringTag$3 = WrappedWellKnownSymbolModule.f('toStringTag');

var parent$j = toStringTag$3;
var toStringTag$2 = parent$j;

var toStringTag$1 = toStringTag$2;

var classof$2 = classof$e;
var hasOwn$1 = hasOwnProperty_1$1;
var isNullOrUndefined = isNullOrUndefined$7;
var wellKnownSymbol = wellKnownSymbol$q;
var Iterators = iterators;
var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;
var isIterable$7 = function (it) {
  if (isNullOrUndefined(it)) return false;
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn$1(Iterators, classof$2(O));
};

var isIterable$6 = isIterable$7;
var isIterable_1 = isIterable$6;

var parent$i = isIterable_1;
var isIterable$5 = parent$i;

var parent$h = isIterable$5;
var isIterable$4 = parent$h;

var parent$g = isIterable$4;
var isIterable$3 = parent$g;

var isIterable$2 = isIterable$3;

var isIterable$1 = isIterable$2;

var $$t = _export$1;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
$$t({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var getBuiltInPrototypeMethod$3 = getBuiltInPrototypeMethod$b;
var map$6 = getBuiltInPrototypeMethod$3('Array', 'map');

var isPrototypeOf$3 = objectIsPrototypeOf$1;
var method$3 = map$6;
var ArrayPrototype$3 = Array.prototype;
var map$5 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$3 || (isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.map) ? method$3 : own;
};

var parent$f = map$5;
var map$4 = parent$f;

var map$3 = map$4;

var $$s = _export$1;
var toObject$5 = toObject$f;
var nativeKeys$1 = objectKeys$5;
var fails$7 = fails$G;
var FAILS_ON_PRIMITIVES$1 = fails$7(function () { nativeKeys$1(1); });
$$s({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys(it) {
    return nativeKeys$1(toObject$5(it));
  }
});

var path$3 = path$k;
var keys$2 = path$3.Object.keys;

var parent$e = keys$2;
var keys$1 = parent$e;

var keys = keys$1;

var DESCRIPTORS$1 = descriptors$2;
var uncurryThis$4 = functionUncurryThis$1;
var call$4 = functionCall$2;
var fails$6 = fails$G;
var objectKeys$1 = objectKeys$5;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols$1;
var propertyIsEnumerableModule = objectPropertyIsEnumerable$1;
var toObject$4 = toObject$f;
var IndexedObject = indexedObject$1;
var $assign = Object.assign;
var defineProperty$1 = Object.defineProperty;
var concat = uncurryThis$4([].concat);
var objectAssign = !$assign || fails$6(function () {
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
  var T = toObject$4(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$1 || call$4(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$r = _export$1;
var assign$3 = objectAssign;
$$r({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$3 }, {
  assign: assign$3
});

var path$2 = path$k;
var assign$2 = path$2.Object.assign;

var parent$d = assign$2;
var assign$1 = parent$d;

var assign = assign$1;

var fails$5 = fails$G;
var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$5(function () {
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var STRICT_METHOD = arrayMethodIsStrict$1('forEach');
var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn ) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

var $$q = _export$1;
var forEach$5 = arrayForEach;
$$q({ target: 'Array', proto: true, forced: [].forEach !== forEach$5 }, {
  forEach: forEach$5
});

var getBuiltInPrototypeMethod$2 = getBuiltInPrototypeMethod$b;
var forEach$4 = getBuiltInPrototypeMethod$2('Array', 'forEach');

var parent$c = forEach$4;
var forEach$3 = parent$c;

var classof$1 = classof$e;
var hasOwn = hasOwnProperty_1$1;
var isPrototypeOf$2 = objectIsPrototypeOf$1;
var method$2 = forEach$3;
var ArrayPrototype$2 = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};
var forEach$2 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.forEach)
    || hasOwn(DOMIterables, classof$1(it)) ? method$2 : own;
};

var forEach$1 = forEach$2;

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
  var prototype = getPrototypeOf$1(value);
  return (prototype === null || prototype === Object.prototype || getPrototypeOf$1(prototype) === null) && !(toStringTag$1 in value) && !isIterable$1(value);
}
function queryString(params) {
  var _context;
  return map$3(_context = keys(params)).call(_context, function (key) {
    var _context2;
    return concat$3(_context2 = "".concat(key, "=")).call(_context2, params[key]);
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

function bind$9(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

const {toString: toString$2} = Object.prototype;
const {getPrototypeOf} = Object;
const {iterator, toStringTag} = Symbol;
const kindOf = (cache => thing => {
    const str = toString$2.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};
const typeOfTest = type => thing => typeof thing === type;
const {isArray} = Array;
const isUndefined = typeOfTest('undefined');
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest('ArrayBuffer');
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}
const isString = typeOfTest('string');
const isFunction = typeOfTest('function');
const isNumber = typeOfTest('number');
const isObject$1 = (thing) => thing !== null && typeof thing === 'object';
const isBoolean = thing => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
const isDate = kindOfTest('Date');
const isFile = kindOfTest('File');
const isBlob = kindOfTest('Blob');
const isFileList = kindOfTest('FileList');
const isStream = (val) => isObject$1(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};
const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;
  if (typeof obj !== 'object') {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind$9(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = (TypedArray => {
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject$1(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing) =>
  thing && (isObject$1(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);
const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);
const isIterable = (thing) => thing != null && isFunction(thing[iterator]);
var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject: isObject$1,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};

function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach(code => {
  descriptors[code] = {value: code};
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

var httpAdapter = null;

function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }
  formData = formData || new (FormData)();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	hasBrowserEnv: hasBrowserEnv,
	hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
	hasStandardBrowserEnv: hasStandardBrowserEnv,
	navigator: _navigator,
	origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = utils$1.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
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
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});
var defaults$1 = defaults;

const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};

const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = utils$1.findKey(self, lHeader);
      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError('Object iterator must return a key-value pair');
        }
        obj[key = entry[0]] = (dest = obj[key]) ?
          (utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]]) : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});
utils$1.freezeMethods(AxiosHeaders);
var AxiosHeaders$1 = AxiosHeaders;

function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

function CanceledError(message, config, request) {
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;

var cookies = platform.hasStandardBrowserEnv ?
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push('path=' + path);
      utils$1.isString(domain) && cookie.push('domain=' + domain);
      secure === true && cookie.push('secure');
      document.cookie = cookie.join('; ');
    },
    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },
    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }
  :
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });
  return config;
}

var resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);
  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
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
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));
      request = null;
    };
    requestData === undefined && requestHeaders.setContentType(null);
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));
      request.upload.addEventListener('progress', uploadThrottled);
      request.upload.addEventListener('loadend', flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal) => signal.addEventListener('abort', onabort));
    const {signal} = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
var composeSignals$1 = composeSignals;

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();
        if (done) {
         _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if(utils$1.isBlob(body)) {
    return body.size;
  }
  if(utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }
  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);
  responseType = responseType ? (responseType + '').toLowerCase() : 'text';
  let composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });
    let response = await fetch(request, fetchOptions);
    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};
      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || 'text';
    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }
    throw AxiosError.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];
    const {length} = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );
      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';
      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

const VERSION = "1.10.0";

const validators$1 = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
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
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const {transitional, paramsSerializer, headers} = config;
    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var Axios$1 = Axios;

class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = onfulfilled => {
      let _resolve;
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
var CancelToken$1 = CancelToken;

function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode$1 = HttpStatusCode;

function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind$9(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});
  utils$1.extend(instance, context, null, {allOwnKeys: true});
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
var axios$1 = axios;

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
  return axios$1.create(newOptions);
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$2;
var objectKeys = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

var $$p = _export;
var toObject$3 = toObject$7;
var nativeKeys = objectKeys;
var fails$4 = fails$g;
var FAILS_ON_PRIMITIVES = fails$4(function () { nativeKeys(1); });
$$p({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject$3(it));
  }
});

var toIntegerOrInfinity = toIntegerOrInfinity$7;
var toString$1 = toString$e;
var requireObjectCoercible$1 = requireObjectCoercible$c;
var $RangeError$1 = RangeError;
var stringRepeat = function repeat(count) {
  var str = toString$1(requireObjectCoercible$1(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var uncurryThis$3 = functionUncurryThis$1;
var toLength = toLength$4;
var toString = toString$e;
var $repeat = stringRepeat;
var requireObjectCoercible = requireObjectCoercible$c;
var repeat = uncurryThis$3($repeat);
var stringSlice = uncurryThis$3(''.slice);
var ceil = Math.ceil;
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};
var stringPad = {
  start: createMethod(false),
  end: createMethod(true)
};

var uncurryThis$2 = functionUncurryThis$1;
var fails$3 = fails$G;
var padStart = stringPad.start;
var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis$2(DatePrototype.getTime);
var getUTCDate = uncurryThis$2(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis$2(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis$2(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis$2(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis$2(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis$2(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis$2(DatePrototype.getUTCSeconds);
var dateToIsoString = (fails$3(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) !== '0385-07-25T07:06:39.999Z';
}) || !fails$3(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!$isFinite(thisTimeValue(this))) throw new $RangeError('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;

var $$o = _export$1;
var call$3 = functionCall$2;
var toObject$2 = toObject$f;
var toPrimitive = toPrimitive$a;
var toISOString = dateToIsoString;
var classof = classofRaw$3;
var fails$2 = fails$G;
var FORCED$3 = fails$2(function () {
  return new Date(NaN).toJSON() !== null
    || call$3(Date.prototype.toJSON, { toISOString: function () { return 1; } }) !== 1;
});
$$o({ target: 'Date', proto: true, forced: FORCED$3 }, {
  toJSON: function toJSON(key) {
    var O = toObject$2(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null :
      (!('toISOString' in O) && classof(O) === 'Date') ? call$3(toISOString, O) : O.toISOString();
  }
});

var path$1 = path$k;
var apply$1 = functionApply$1;
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

var DESCRIPTORS = descriptors$1;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$1 = functionUncurryThis;
var defineProperty = objectDefineProperty.f;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$1(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$1(nameRE.exec);
var NAME = 'name';
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
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

var $$n = _export$1;
var getBuiltIn = getBuiltIn$k;
var apply = functionApply$1;
var bind$8 = functionBind$1;
var aConstructor = aConstructor$2;
var anObject$3 = anObject$h;
var isObject = isObject$q;
var create = objectCreate;
var fails$1 = fails$G;
var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push$6 = [].push;
var NEW_TARGET_BUG = fails$1(function () {
  function F() {  }
  return !(nativeConstruct(function () {  }, [], F) instanceof F);
});
var ARGS_BUG = !fails$1(function () {
  nativeConstruct(function () {  });
});
var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;
$$n({ target: 'Reflect', stat: true, forced: FORCED$2, sham: FORCED$2 }, {
  construct: function construct(Target, args ) {
    aConstructor(Target);
    anObject$3(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
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
      apply(push$6, $args, args);
      return new (apply(bind$8, Target, $args))();
    }
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

var path = path$k;
var construct$5 = path.Reflect.construct;

var parent$a = construct$5;
var construct$4 = parent$a;

var construct$3 = construct$4;

function _setPrototypeOf(t, e) {
  var _context;
  return _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = _Object$create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), _Object$defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof$1(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

function _getPrototypeOf(t) {
  var _context;
  return _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function (t) {
    return t.__proto__ || _Object$getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

var parent$9 = map$8;
var map$2 = parent$9;

var bind$7 = functionBindContext;
var anObject$2 = anObject$h;
var toObject$1 = toObject$f;
var iterate$c = iterate$l;
var collectionFrom = function (C, adder, ENTRY) {
  return function from(source ) {
    var O = toObject$1(source);
    var length = arguments.length;
    var mapFn = length > 1 ? arguments[1] : undefined;
    var mapping = mapFn !== undefined;
    var boundFunction = mapping ? bind$7(mapFn, length > 2 ? arguments[2] : undefined) : undefined;
    var result = new C();
    var n = 0;
    iterate$c(O, function (nextItem) {
      var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
      if (ENTRY) adder(result, anObject$2(entry)[0], entry[1]);
      else adder(result, entry);
    });
    return result;
  };
};

var $$m = _export$1;
var MapHelpers$8 = mapHelpers;
var createCollectionFrom = collectionFrom;
$$m({ target: 'Map', stat: true, forced: true }, {
  from: createCollectionFrom(MapHelpers$8.Map, MapHelpers$8.set, true)
});

var anObject$1 = anObject$h;
var collectionOf = function (C, adder, ENTRY) {
  return function of() {
    var result = new C();
    var length = arguments.length;
    for (var index = 0; index < length; index++) {
      var entry = arguments[index];
      if (ENTRY) adder(result, anObject$1(entry)[0], entry[1]);
      else adder(result, entry);
    } return result;
  };
};

var $$l = _export$1;
var MapHelpers$7 = mapHelpers;
var createCollectionOf = collectionOf;
$$l({ target: 'Map', stat: true, forced: true }, {
  of: createCollectionOf(MapHelpers$7.Map, MapHelpers$7.set, true)
});

var $$k = _export$1;
var call$2 = functionCall$2;
var iterate$b = iterate$l;
var isCallable$1 = isCallable$y;
var aCallable$4 = aCallable$k;
var Map$4 = mapHelpers.Map;
$$k({ target: 'Map', stat: true, forced: true }, {
  keyBy: function keyBy(iterable, keyDerivative) {
    var C = isCallable$1(this) ? this : Map$4;
    var newMap = new C();
    aCallable$4(keyDerivative);
    var setter = aCallable$4(newMap.set);
    iterate$b(iterable, function (element) {
      call$2(setter, newMap, keyDerivative(element), element);
    });
    return newMap;
  }
});

var tryToString = tryToString$9;
var $TypeError$3 = TypeError;
var aMap$g = function (it) {
  if (typeof it == 'object' && 'size' in it && 'has' in it && 'get' in it && 'set' in it && 'delete' in it && 'entries' in it) return it;
  throw new $TypeError$3(tryToString(it) + ' is not a map');
};

var $$j = _export$1;
var aMap$f = aMap$g;
var remove = mapHelpers.remove;
$$j({ target: 'Map', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll() {
    var collection = aMap$f(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});

var $$i = _export$1;
var aMap$e = aMap$g;
var MapHelpers$6 = mapHelpers;
var get$3 = MapHelpers$6.get;
var has$3 = MapHelpers$6.has;
var set$7 = MapHelpers$6.set;
$$i({ target: 'Map', proto: true, real: true, forced: true }, {
  emplace: function emplace(key, handler) {
    var map = aMap$e(this);
    var value, inserted;
    if (has$3(map, key)) {
      value = get$3(map, key);
      if ('update' in handler) {
        value = handler.update(value, key, map);
        set$7(map, key, value);
      } return value;
    }
    inserted = handler.insert(key, map);
    set$7(map, key, inserted);
    return inserted;
  }
});

var call$1 = functionCall$2;
var iterateSimple$1 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call$1(next, iterator)).done) {
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

var $$h = _export$1;
var bind$6 = functionBindContext;
var aMap$d = aMap$g;
var iterate$a = mapIterate;
$$h({ target: 'Map', proto: true, real: true, forced: true }, {
  every: function every(callbackfn ) {
    var map = aMap$d(this);
    var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate$a(map, function (value, key) {
      if (!boundFunction(value, key, map)) return false;
    }, true) !== false;
  }
});

var $$g = _export$1;
var bind$5 = functionBindContext;
var aMap$c = aMap$g;
var MapHelpers$5 = mapHelpers;
var iterate$9 = mapIterate;
var Map$3 = MapHelpers$5.Map;
var set$6 = MapHelpers$5.set;
$$g({ target: 'Map', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn ) {
    var map = aMap$c(this);
    var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map$3();
    iterate$9(map, function (value, key) {
      if (boundFunction(value, key, map)) set$6(newMap, key, value);
    });
    return newMap;
  }
});

var $$f = _export$1;
var bind$4 = functionBindContext;
var aMap$b = aMap$g;
var iterate$8 = mapIterate;
$$f({ target: 'Map', proto: true, real: true, forced: true }, {
  find: function find(callbackfn ) {
    var map = aMap$b(this);
    var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate$8(map, function (value, key) {
      if (boundFunction(value, key, map)) return { value: value };
    }, true);
    return result && result.value;
  }
});

var $$e = _export$1;
var bind$3 = functionBindContext;
var aMap$a = aMap$g;
var iterate$7 = mapIterate;
$$e({ target: 'Map', proto: true, real: true, forced: true }, {
  findKey: function findKey(callbackfn ) {
    var map = aMap$a(this);
    var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate$7(map, function (value, key) {
      if (boundFunction(value, key, map)) return { key: key };
    }, true);
    return result && result.key;
  }
});

var sameValueZero$1 = function (x, y) {
  return x === y || x !== x && y !== y;
};

var $$d = _export$1;
var sameValueZero = sameValueZero$1;
var aMap$9 = aMap$g;
var iterate$6 = mapIterate;
$$d({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate$6(aMap$9(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});

var $$c = _export$1;
var aMap$8 = aMap$g;
var MapHelpers$4 = mapHelpers;
var get$2 = MapHelpers$4.get;
var has$2 = MapHelpers$4.has;
var set$5 = MapHelpers$4.set;
$$c({ target: 'Map', proto: true, real: true, forced: true }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has$2(aMap$8(this), key)) return get$2(this, key);
    set$5(this, key, value);
    return value;
  }
});

var $$b = _export$1;
var aCallable$3 = aCallable$k;
var aMap$7 = aMap$g;
var MapHelpers$3 = mapHelpers;
var get$1 = MapHelpers$3.get;
var has$1 = MapHelpers$3.has;
var set$4 = MapHelpers$3.set;
$$b({ target: 'Map', proto: true, real: true, forced: true }, {
  getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
    aMap$7(this);
    aCallable$3(callbackfn);
    if (has$1(this, key)) return get$1(this, key);
    if (key === 0 && 1 / key === -Infinity) key = 0;
    var value = callbackfn(key);
    set$4(this, key, value);
    return value;
  }
});

var $$a = _export$1;
var aMap$6 = aMap$g;
var iterate$5 = mapIterate;
$$a({ target: 'Map', proto: true, real: true, forced: true }, {
  keyOf: function keyOf(searchElement) {
    var result = iterate$5(aMap$6(this), function (value, key) {
      if (value === searchElement) return { key: key };
    }, true);
    return result && result.key;
  }
});

var $$9 = _export$1;
var bind$2 = functionBindContext;
var aMap$5 = aMap$g;
var MapHelpers$2 = mapHelpers;
var iterate$4 = mapIterate;
var Map$2 = MapHelpers$2.Map;
var set$3 = MapHelpers$2.set;
$$9({ target: 'Map', proto: true, real: true, forced: true }, {
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

var $$8 = _export$1;
var bind$1 = functionBindContext;
var aMap$4 = aMap$g;
var MapHelpers$1 = mapHelpers;
var iterate$3 = mapIterate;
var Map$1 = MapHelpers$1.Map;
var set$2 = MapHelpers$1.set;
$$8({ target: 'Map', proto: true, real: true, forced: true }, {
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

var $$7 = _export$1;
var aMap$3 = aMap$g;
var iterate$2 = iterate$l;
var set$1 = mapHelpers.set;
$$7({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
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

var $$6 = _export$1;
var aCallable$2 = aCallable$k;
var aMap$2 = aMap$g;
var iterate$1 = mapIterate;
var $TypeError$2 = TypeError;
$$6({ target: 'Map', proto: true, real: true, forced: true }, {
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

var $$5 = _export$1;
var bind = functionBindContext;
var aMap$1 = aMap$g;
var iterate = mapIterate;
$$5({ target: 'Map', proto: true, real: true, forced: true }, {
  some: function some(callbackfn ) {
    var map = aMap$1(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return true;
    }, true) === true;
  }
});

var $$4 = _export$1;
var aCallable$1 = aCallable$k;
var aMap = aMap$g;
var MapHelpers = mapHelpers;
var $TypeError$1 = TypeError;
var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;
$$4({ target: 'Map', proto: true, real: true, forced: true }, {
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

var call = functionCall$2;
var aCallable = aCallable$k;
var isCallable = isCallable$y;
var anObject = anObject$h;
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

var $$3 = _export$1;
var upsert$1 = mapUpsert;
$$3({ target: 'Map', proto: true, real: true, forced: true }, {
  upsert: upsert$1
});

var $$2 = _export$1;
var upsert = mapUpsert;
$$2({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
  updateOrInsert: upsert
});

var parent$8 = map$2;
var map$1 = parent$8;

var map = map$1;
var _Map = map;

var $$1 = _export$1;
var uncurryThis = functionUncurryThisClause;
var $indexOf = arrayIncludes$1.indexOf;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED$1 = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');
$$1({ target: 'Array', proto: true, forced: FORCED$1 }, {
  indexOf: function indexOf(searchElement ) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});

var getBuiltInPrototypeMethod$1 = getBuiltInPrototypeMethod$b;
var indexOf$5 = getBuiltInPrototypeMethod$1('Array', 'indexOf');

var isPrototypeOf$1 = objectIsPrototypeOf$1;
var method$1 = indexOf$5;
var ArrayPrototype$1 = Array.prototype;
var indexOf$4 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.indexOf) ? method$1 : own;
};

var parent$7 = indexOf$4;
var indexOf$3 = parent$7;

var parent$6 = indexOf$3;
var indexOf$2 = parent$6;

var parent$5 = indexOf$2;
var indexOf$1 = parent$5;

var indexOf = indexOf$1;
var _indexOfInstanceProperty = indexOf;

function _isNativeFunction(t) {
  try {
    var _context;
    return -1 !== _indexOfInstanceProperty(_context = Function.toString.call(t)).call(_context, "[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

var parent$4 = construct$4;
var construct$2 = parent$4;

var parent$3 = construct$2;
var construct$1 = parent$3;

var construct = construct$1;
var _Reflect$construct = construct;

var $ = _export$1;
var toObject = toObject$f;
var lengthOfArrayLike = lengthOfArrayLike$8;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;
var fails = fails$G;
var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});
var properErrorOnNonWritableLength = function () {
  try {
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
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

var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$b;
var push$5 = getBuiltInPrototypeMethod('Array', 'push');

var isPrototypeOf = objectIsPrototypeOf$1;
var method = push$5;
var ArrayPrototype = Array.prototype;
var push$4 = function (it) {
  var own = it.push;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.push) ? method : own;
};

var parent$2 = push$4;
var push$3 = parent$2;

var parent$1 = push$3;
var push$2 = parent$1;

var parent = push$2;
var push$1 = parent;

var push = push$1;
var _pushInstanceProperty = push;

function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct$1()) return _Reflect$construct.apply(null, arguments);
  var o = [null];
  _pushInstanceProperty(o).apply(o, e);
  var p = new (_bindInstanceProperty(t).apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(t) {
  var r = "function" == typeof _Map ? new _Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = _Object$create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = construct$3(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(construct$3(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
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
        rest.get(concat$3(_context2 = "".concat(options.sso_url)).call(_context2, api.sync)).then(function (res) {
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
        rest.post(concat$3(_context3 = concat$3(_context4 = "".concat(options.sso_url)).call(_context4, api.refresh, "?v=")).call(_context3, rand(11111, 99999)), queryString({
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
          console.error(concat$3(_context6 = "[".concat(e.code, "]")).call(_context6, e.message));
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
        rest.get(concat$3(_context7 = concat$3(_context8 = "".concat(options.sso_url)).call(_context8, api.validate, "?v=")).call(_context7, rand(11111, 99999)), {
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
      var ssoUrl = concat$3(_context9 = "".concat(options.sso_url, "/login?redirect_uri=")).call(_context9, options.redirect_url);
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
      var cookieLogin = Boolean(loginCookie);
      if (cookieLogin) {
        return true;
      }
      var storageLogin = webStorage.get(loginKey);
      return Boolean(storageLogin);
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

module.exports = TokenInjection;
