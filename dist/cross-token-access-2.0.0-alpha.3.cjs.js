'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check$1 = function (it) {
  return it && it.Math == Math && it;
};
var global$1e =
  check$1(typeof globalThis == 'object' && globalThis) ||
  check$1(typeof window == 'object' && window) ||
  check$1(typeof self == 'object' && self) ||
  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var FunctionPrototype$6 = Function.prototype;
var apply$9 = FunctionPrototype$6.apply;
var bind$l = FunctionPrototype$6.bind;
var call$m = FunctionPrototype$6.call;
var functionApply$1 = typeof Reflect == 'object' && Reflect.apply || (bind$l ? call$m.bind(apply$9) : function () {
  return call$m.apply(apply$9, arguments);
});

var FunctionPrototype$5 = Function.prototype;
var bind$k = FunctionPrototype$5.bind;
var call$l = FunctionPrototype$5.call;
var callBind$4 = bind$k && bind$k.bind(call$l);
var functionUncurryThis$1 = bind$k ? function (fn) {
  return fn && callBind$4(call$l, fn);
} : function (fn) {
  return fn && function () {
    return call$l.apply(fn, arguments);
  };
};

var isCallable$A = function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor$1 = {};

var fails$w = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$v = fails$w;
var descriptors$1 = !fails$v(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var call$k = Function.prototype.call;
var functionCall$1 = call$k.bind ? call$k.bind(call$k) : function () {
  return call$k.apply(call$k, arguments);
};

var objectPropertyIsEnumerable$1 = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG$1 = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$5(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$9 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$B = functionUncurryThis$1;
var toString$c = uncurryThis$B({}.toString);
var stringSlice$2 = uncurryThis$B(''.slice);
var classofRaw$3 = function (it) {
  return stringSlice$2(toString$c(it), 8, -1);
};

var global$1d = global$1e;
var uncurryThis$A = functionUncurryThis$1;
var fails$u = fails$w;
var classof$g = classofRaw$3;
var Object$a = global$1d.Object;
var split$2 = uncurryThis$A(''.split);
var indexedObject$1 = fails$u(function () {
  return !Object$a('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$g(it) == 'String' ? split$2(it, '') : Object$a(it);
} : Object$a;

var global$1c = global$1e;
var TypeError$r = global$1c.TypeError;
var requireObjectCoercible$7 = function (it) {
  if (it == undefined) throw TypeError$r("Can't call method on " + it);
  return it;
};

var IndexedObject$3 = indexedObject$1;
var requireObjectCoercible$6 = requireObjectCoercible$7;
var toIndexedObject$b = function (it) {
  return IndexedObject$3(requireObjectCoercible$6(it));
};

var isCallable$z = isCallable$A;
var isObject$u = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$z(it);
};

var path$e = {};

var path$d = path$e;
var global$1b = global$1e;
var isCallable$y = isCallable$A;
var aFunction$1 = function (variable) {
  return isCallable$y(variable) ? variable : undefined;
};
var getBuiltIn$j = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path$d[namespace]) || aFunction$1(global$1b[namespace])
    : path$d[namespace] && path$d[namespace][method] || global$1b[namespace] && global$1b[namespace][method];
};

var uncurryThis$z = functionUncurryThis$1;
var objectIsPrototypeOf$1 = uncurryThis$z({}.isPrototypeOf);

var getBuiltIn$i = getBuiltIn$j;
var engineUserAgent$1 = getBuiltIn$i('navigator', 'userAgent') || '';

var global$1a = global$1e;
var userAgent$8 = engineUserAgent$1;
var process$8 = global$1a.process;
var Deno$1 = global$1a.Deno;
var versions$1 = process$8 && process$8.versions || Deno$1 && Deno$1.version;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$1;
if (v8$1) {
  match$1 = v8$1.split('.');
  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
}
if (!version$1 && userAgent$8) {
  match$1 = userAgent$8.match(/Edge\/(\d+)/);
  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$8.match(/Chrome\/(\d+)/);
    if (match$1) version$1 = +match$1[1];
  }
}
var engineV8Version$1 = version$1;

var V8_VERSION$5 = engineV8Version$1;
var fails$t = fails$w;
var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$t(function () {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && V8_VERSION$5 && V8_VERSION$5 < 41;
});

var NATIVE_SYMBOL$3 = nativeSymbol$1;
var useSymbolAsUid$1 = NATIVE_SYMBOL$3
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$19 = global$1e;
var getBuiltIn$h = getBuiltIn$j;
var isCallable$x = isCallable$A;
var isPrototypeOf$9 = objectIsPrototypeOf$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
var Object$9 = global$19.Object;
var isSymbol$7 = USE_SYMBOL_AS_UID$3 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$h('Symbol');
  return isCallable$x($Symbol) && isPrototypeOf$9($Symbol.prototype, Object$9(it));
};

var global$18 = global$1e;
var String$9 = global$18.String;
var tryToString$9 = function (argument) {
  try {
    return String$9(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$17 = global$1e;
var isCallable$w = isCallable$A;
var tryToString$8 = tryToString$9;
var TypeError$q = global$17.TypeError;
var aCallable$d = function (argument) {
  if (isCallable$w(argument)) return argument;
  throw TypeError$q(tryToString$8(argument) + ' is not a function');
};

var aCallable$c = aCallable$d;
var getMethod$7 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$c(func);
};

var global$16 = global$1e;
var call$j = functionCall$1;
var isCallable$v = isCallable$A;
var isObject$t = isObject$u;
var TypeError$p = global$16.TypeError;
var ordinaryToPrimitive$3 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$v(fn = input.toString) && !isObject$t(val = call$j(fn, input))) return val;
  if (isCallable$v(fn = input.valueOf) && !isObject$t(val = call$j(fn, input))) return val;
  if (pref !== 'string' && isCallable$v(fn = input.toString) && !isObject$t(val = call$j(fn, input))) return val;
  throw TypeError$p("Can't convert object to primitive value");
};

var shared$7 = {exports: {}};

var isPure = true;

var global$15 = global$1e;
var defineProperty$g = Object.defineProperty;
var setGlobal$5 = function (key, value) {
  try {
    defineProperty$g(global$15, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$15[key] = value;
  } return value;
};

var global$14 = global$1e;
var setGlobal$4 = setGlobal$5;
var SHARED$1 = '__core-js_shared__';
var store$7 = global$14[SHARED$1] || setGlobal$4(SHARED$1, {});
var sharedStore$1 = store$7;

var store$6 = sharedStore$1;
(shared$7.exports = function (key, value) {
  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: 'pure' ,
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$13 = global$1e;
var requireObjectCoercible$5 = requireObjectCoercible$7;
var Object$8 = global$13.Object;
var toObject$7 = function (argument) {
  return Object$8(requireObjectCoercible$5(argument));
};

var uncurryThis$y = functionUncurryThis$1;
var toObject$6 = toObject$7;
var hasOwnProperty$9 = uncurryThis$y({}.hasOwnProperty);
var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$9(toObject$6(it), key);
};

var uncurryThis$x = functionUncurryThis$1;
var id$3 = 0;
var postfix$1 = Math.random();
var toString$b = uncurryThis$x(1.0.toString);
var uid$6 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$3 + postfix$1, 36);
};

var global$12 = global$1e;
var shared$6 = shared$7.exports;
var hasOwn$l = hasOwnProperty_1$1;
var uid$5 = uid$6;
var NATIVE_SYMBOL$2 = nativeSymbol$1;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
var WellKnownSymbolsStore$1 = shared$6('wks');
var Symbol$6 = global$12.Symbol;
var symbolFor$1 = Symbol$6 && Symbol$6['for'];
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$6 : Symbol$6 && Symbol$6.withoutSetter || uid$5;
var wellKnownSymbol$s = function (name) {
  if (!hasOwn$l(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$2 && hasOwn$l(Symbol$6, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$6[name];
    } else if (USE_SYMBOL_AS_UID$2 && symbolFor$1) {
      WellKnownSymbolsStore$1[name] = symbolFor$1(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1(description);
    }
  } return WellKnownSymbolsStore$1[name];
};

var global$11 = global$1e;
var call$i = functionCall$1;
var isObject$s = isObject$u;
var isSymbol$6 = isSymbol$7;
var getMethod$6 = getMethod$7;
var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
var wellKnownSymbol$r = wellKnownSymbol$s;
var TypeError$o = global$11.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$r('toPrimitive');
var toPrimitive$3 = function (input, pref) {
  if (!isObject$s(input) || isSymbol$6(input)) return input;
  var exoticToPrim = getMethod$6(input, TO_PRIMITIVE$1);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$i(exoticToPrim, input, pref);
    if (!isObject$s(result) || isSymbol$6(result)) return result;
    throw TypeError$o("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$2(input, pref);
};

var toPrimitive$2 = toPrimitive$3;
var isSymbol$5 = isSymbol$7;
var toPropertyKey$6 = function (argument) {
  var key = toPrimitive$2(argument, 'string');
  return isSymbol$5(key) ? key : key + '';
};

var global$10 = global$1e;
var isObject$r = isObject$u;
var document$6 = global$10.document;
var EXISTS$3 = isObject$r(document$6) && isObject$r(document$6.createElement);
var documentCreateElement$2 = function (it) {
  return EXISTS$3 ? document$6.createElement(it) : {};
};

var DESCRIPTORS$g = descriptors$1;
var fails$s = fails$w;
var createElement$3 = documentCreateElement$2;
var ie8DomDefine$1 = !DESCRIPTORS$g && !fails$s(function () {
  return Object.defineProperty(createElement$3('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$f = descriptors$1;
var call$h = functionCall$1;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$8 = createPropertyDescriptor$9;
var toIndexedObject$a = toIndexedObject$b;
var toPropertyKey$5 = toPropertyKey$6;
var hasOwn$k = hasOwnProperty_1$1;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$f ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$a(O);
  P = toPropertyKey$5(P);
  if (IE8_DOM_DEFINE$3) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {  }
  if (hasOwn$k(O, P)) return createPropertyDescriptor$8(!call$h(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var fails$r = fails$w;
var isCallable$u = isCallable$A;
var replacement$1 = /#|\.prototype\./;
var isForced$5 = function (feature, detection) {
  var value = data$2[normalize$1(feature)];
  return value == POLYFILL$1 ? true
    : value == NATIVE$1 ? false
    : isCallable$u(detection) ? fails$r(detection)
    : !!detection;
};
var normalize$1 = isForced$5.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};
var data$2 = isForced$5.data = {};
var NATIVE$1 = isForced$5.NATIVE = 'N';
var POLYFILL$1 = isForced$5.POLYFILL = 'P';
var isForced_1$1 = isForced$5;

var uncurryThis$w = functionUncurryThis$1;
var aCallable$b = aCallable$d;
var bind$j = uncurryThis$w(uncurryThis$w.bind);
var functionBindContext$1 = function (fn, that) {
  aCallable$b(fn);
  return that === undefined ? fn : bind$j ? bind$j(fn, that) : function () {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty$1 = {};

var global$$ = global$1e;
var isObject$q = isObject$u;
var String$8 = global$$.String;
var TypeError$n = global$$.TypeError;
var anObject$k = function (argument) {
  if (isObject$q(argument)) return argument;
  throw TypeError$n(String$8(argument) + ' is not an object');
};

var global$_ = global$1e;
var DESCRIPTORS$e = descriptors$1;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
var anObject$j = anObject$k;
var toPropertyKey$4 = toPropertyKey$6;
var TypeError$m = global$_.TypeError;
var $defineProperty$2 = Object.defineProperty;
objectDefineProperty$1.f = DESCRIPTORS$e ? $defineProperty$2 : function defineProperty(O, P, Attributes) {
  anObject$j(O);
  P = toPropertyKey$4(P);
  anObject$j(Attributes);
  if (IE8_DOM_DEFINE$2) try {
    return $defineProperty$2(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$m('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$d = descriptors$1;
var definePropertyModule$7 = objectDefineProperty$1;
var createPropertyDescriptor$7 = createPropertyDescriptor$9;
var createNonEnumerableProperty$c = DESCRIPTORS$d ? function (object, key, value) {
  return definePropertyModule$7.f(object, key, createPropertyDescriptor$7(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$Z = global$1e;
var apply$8 = functionApply$1;
var uncurryThis$v = functionUncurryThis$1;
var isCallable$t = isCallable$A;
var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;
var isForced$4 = isForced_1$1;
var path$c = path$e;
var bind$i = functionBindContext$1;
var createNonEnumerableProperty$b = createNonEnumerableProperty$c;
var hasOwn$j = hasOwnProperty_1$1;
var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$8(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global$Z : STATIC ? global$Z[TARGET] : (global$Z[TARGET] || {}).prototype;
  var target = GLOBAL ? path$c : path$c[TARGET] || createNonEnumerableProperty$b(path$c, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
  for (key in source) {
    FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    USE_NATIVE = !FORCED && nativeSource && hasOwn$j(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$4(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
    if (options.bind && USE_NATIVE) resultProperty = bind$i(sourceProperty, global$Z);
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    else if (PROTO && isCallable$t(sourceProperty)) resultProperty = uncurryThis$v(sourceProperty);
    else resultProperty = sourceProperty;
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$b(resultProperty, 'sham', true);
    }
    createNonEnumerableProperty$b(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$j(path$c, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$b(path$c, VIRTUAL_PROTOTYPE, {});
      }
      createNonEnumerableProperty$b(path$c[VIRTUAL_PROTOTYPE], key, sourceProperty);
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$b(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var shared$5 = shared$7.exports;
var uid$4 = uid$6;
var keys$8 = shared$5('keys');
var sharedKey$5 = function (key) {
  return keys$8[key] || (keys$8[key] = uid$4(key));
};

var fails$q = fails$w;
var correctPrototypeGetter = !fails$q(function () {
  function F() {  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$Y = global$1e;
var hasOwn$i = hasOwnProperty_1$1;
var isCallable$s = isCallable$A;
var toObject$5 = toObject$7;
var sharedKey$4 = sharedKey$5;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO$1 = sharedKey$4('IE_PROTO');
var Object$7 = global$Y.Object;
var ObjectPrototype = Object$7.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$7.getPrototypeOf : function (O) {
  var object = toObject$5(O);
  if (hasOwn$i(object, IE_PROTO$1)) return object[IE_PROTO$1];
  var constructor = object.constructor;
  if (isCallable$s(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object$7 ? ObjectPrototype : null;
};

var global$X = global$1e;
var isCallable$r = isCallable$A;
var String$7 = global$X.String;
var TypeError$l = global$X.TypeError;
var aPossiblePrototype$3 = function (argument) {
  if (typeof argument == 'object' || isCallable$r(argument)) return argument;
  throw TypeError$l("Can't set " + String$7(argument) + ' as a prototype');
};

var uncurryThis$u = functionUncurryThis$1;
var anObject$i = anObject$k;
var aPossiblePrototype$2 = aPossiblePrototype$3;
var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThis$u(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {  }
  return function setPrototypeOf(O, proto) {
    anObject$i(O);
    aPossiblePrototype$2(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var objectGetOwnPropertyNames$1 = {};

var ceil$1 = Math.ceil;
var floor$1 = Math.floor;
var toIntegerOrInfinity$6 = function (argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil$1)(number);
};

var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
var max$1 = Math.max;
var min$3 = Math.min;
var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$5(index);
  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
var min$2 = Math.min;
var toLength$3 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0;
};

var toLength$2 = toLength$3;
var lengthOfArrayLike$7 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$9 = toIndexedObject$b;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$6 = lengthOfArrayLike$7;
var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$9($this);
    var length = lengthOfArrayLike$6(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
var arrayIncludes$1 = {
  includes: createMethod$4(true),
  indexOf: createMethod$4(false)
};

var hiddenKeys$9 = {};

var uncurryThis$t = functionUncurryThis$1;
var hasOwn$h = hasOwnProperty_1$1;
var toIndexedObject$8 = toIndexedObject$b;
var indexOf$1 = arrayIncludes$1.indexOf;
var hiddenKeys$8 = hiddenKeys$9;
var push$3 = uncurryThis$t([].push);
var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$8(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$h(hiddenKeys$8, key) && hasOwn$h(O, key) && push$3(result, key);
  while (names.length > i) if (hasOwn$h(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$3(result, key);
  }
  return result;
};

var enumBugKeys$5 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$2 = objectKeysInternal$1;
var enumBugKeys$4 = enumBugKeys$5;
var hiddenKeys$7 = enumBugKeys$4.concat('length', 'prototype');
objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$2(O, hiddenKeys$7);
};

var objectGetOwnPropertySymbols$1 = {};

objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

var getBuiltIn$g = getBuiltIn$j;
var uncurryThis$s = functionUncurryThis$1;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols$1;
var anObject$h = anObject$k;
var concat$6 = uncurryThis$s([].concat);
var ownKeys$3 = getBuiltIn$g('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$2.f(anObject$h(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$6(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$g = hasOwnProperty_1$1;
var ownKeys$2 = ownKeys$3;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$6 = objectDefineProperty$1;
var copyConstructorProperties$3 = function (target, source) {
  var keys = ownKeys$2(source);
  var defineProperty = definePropertyModule$6.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$g(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var internalObjectKeys$1 = objectKeysInternal$1;
var enumBugKeys$3 = enumBugKeys$5;
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$3);
};

var DESCRIPTORS$c = descriptors$1;
var definePropertyModule$5 = objectDefineProperty$1;
var anObject$g = anObject$k;
var toIndexedObject$7 = toIndexedObject$b;
var objectKeys$1 = objectKeys$2;
var objectDefineProperties = DESCRIPTORS$c ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$g(O);
  var props = toIndexedObject$7(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$f = getBuiltIn$j;
var html$4 = getBuiltIn$f('document', 'documentElement');

var anObject$f = anObject$k;
var defineProperties$1 = objectDefineProperties;
var enumBugKeys$2 = enumBugKeys$5;
var hiddenKeys$6 = hiddenKeys$9;
var html$3 = html$4;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$3 = sharedKey$5;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey$3('IE_PROTO');
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
  html$3.appendChild(iframe);
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
  var length = enumBugKeys$2.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$2[length]];
  return NullProtoObject();
};
hiddenKeys$6[IE_PROTO] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$f(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties$1(result, Properties);
};

var uncurryThis$r = functionUncurryThis$1;
var arraySlice$6 = uncurryThis$r([].slice);

var uncurryThis$q = functionUncurryThis$1;
var arraySlice$5 = arraySlice$6;
var replace$2 = uncurryThis$q(''.replace);
var split$1 = uncurryThis$q(''.split);
var join = uncurryThis$q([].join);
var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var IS_FIREFOX_OR_SAFARI_STACK = /@[^\n]*\n/.test(TEST) && !/zxcasd/.test(TEST);
var clearErrorStack$1 = function (stack, dropEntries) {
  if (typeof stack != 'string') return stack;
  if (IS_V8_OR_CHAKRA_STACK) {
    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } else if (IS_FIREFOX_OR_SAFARI_STACK) {
    return join(arraySlice$5(split$1(stack, '\n'), dropEntries), '\n');
  } return stack;
};

var isObject$p = isObject$u;
var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
var installErrorCause$1 = function (O, options) {
  if (isObject$p(options) && 'cause' in options) {
    createNonEnumerableProperty$a(O, 'cause', options.cause);
  }
};

var iterators$1 = {};

var wellKnownSymbol$q = wellKnownSymbol$s;
var Iterators$7 = iterators$1;
var ITERATOR$8 = wellKnownSymbol$q('iterator');
var ArrayPrototype$4 = Array.prototype;
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators$7.Array === it || ArrayPrototype$4[ITERATOR$8] === it);
};

var wellKnownSymbol$p = wellKnownSymbol$s;
var TO_STRING_TAG$7 = wellKnownSymbol$p('toStringTag');
var test$1 = {};
test$1[TO_STRING_TAG$7] = 'z';
var toStringTagSupport$1 = String(test$1) === '[object z]';

var global$W = global$1e;
var TO_STRING_TAG_SUPPORT$5 = toStringTagSupport$1;
var isCallable$q = isCallable$A;
var classofRaw$2 = classofRaw$3;
var wellKnownSymbol$o = wellKnownSymbol$s;
var TO_STRING_TAG$6 = wellKnownSymbol$o('toStringTag');
var Object$6 = global$W.Object;
var CORRECT_ARGUMENTS$1 = classofRaw$2(function () { return arguments; }()) == 'Arguments';
var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (error) {  }
};
var classof$f = TO_STRING_TAG_SUPPORT$5 ? classofRaw$2 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (tag = tryGet$1(O = Object$6(it), TO_STRING_TAG$6)) == 'string' ? tag
    : CORRECT_ARGUMENTS$1 ? classofRaw$2(O)
    : (result = classofRaw$2(O)) == 'Object' && isCallable$q(O.callee) ? 'Arguments' : result;
};

var classof$e = classof$f;
var getMethod$5 = getMethod$7;
var Iterators$6 = iterators$1;
var wellKnownSymbol$n = wellKnownSymbol$s;
var ITERATOR$7 = wellKnownSymbol$n('iterator');
var getIteratorMethod$5 = function (it) {
  if (it != undefined) return getMethod$5(it, ITERATOR$7)
    || getMethod$5(it, '@@iterator')
    || Iterators$6[classof$e(it)];
};

var global$V = global$1e;
var call$g = functionCall$1;
var aCallable$a = aCallable$d;
var anObject$e = anObject$k;
var tryToString$7 = tryToString$9;
var getIteratorMethod$4 = getIteratorMethod$5;
var TypeError$k = global$V.TypeError;
var getIterator$3 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable$a(iteratorMethod)) return anObject$e(call$g(iteratorMethod, argument));
  throw TypeError$k(tryToString$7(argument) + ' is not iterable');
};

var call$f = functionCall$1;
var anObject$d = anObject$k;
var getMethod$4 = getMethod$7;
var iteratorClose$3 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$d(iterator);
  try {
    innerResult = getMethod$4(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$f(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$d(innerResult);
  return value;
};

var global$U = global$1e;
var bind$h = functionBindContext$1;
var call$e = functionCall$1;
var anObject$c = anObject$k;
var tryToString$6 = tryToString$9;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var lengthOfArrayLike$5 = lengthOfArrayLike$7;
var isPrototypeOf$8 = objectIsPrototypeOf$1;
var getIterator$2 = getIterator$3;
var getIteratorMethod$3 = getIteratorMethod$5;
var iteratorClose$2 = iteratorClose$3;
var TypeError$j = global$U.TypeError;
var Result$1 = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype$1 = Result$1.prototype;
var iterate$9 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$h(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose$2(iterator, 'normal', condition);
    return new Result$1(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$c(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$3(iterable);
    if (!iterFn) throw TypeError$j(tryToString$6(iterable) + ' is not iterable');
    if (isArrayIteratorMethod$2(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$5(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$8(ResultPrototype$1, result)) return result;
      } return new Result$1(false);
    }
    iterator = getIterator$2(iterable, iterFn);
  }
  next = iterator.next;
  while (!(step = call$e(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$2(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$8(ResultPrototype$1, result)) return result;
  } return new Result$1(false);
};

var global$T = global$1e;
var classof$d = classof$f;
var String$6 = global$T.String;
var toString$a = function (argument) {
  if (classof$d(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$6(argument);
};

var toString$9 = toString$a;
var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$9(argument);
};

var fails$p = fails$w;
var createPropertyDescriptor$6 = createPropertyDescriptor$9;
var errorStackInstallable = !fails$p(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  Object.defineProperty(error, 'stack', createPropertyDescriptor$6(1, 7));
  return error.stack !== 7;
});

var $$l = _export$1;
var global$S = global$1e;
var isPrototypeOf$7 = objectIsPrototypeOf$1;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf$1;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var create$3 = objectCreate;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$c;
var createPropertyDescriptor$5 = createPropertyDescriptor$9;
var clearErrorStack = clearErrorStack$1;
var installErrorCause = installErrorCause$1;
var iterate$8 = iterate$9;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$m = wellKnownSymbol$s;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var TO_STRING_TAG$5 = wellKnownSymbol$m('toStringTag');
var Error$1 = global$S.Error;
var push$2 = [].push;
var $AggregateError = function AggregateError(errors, message ) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf$7(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf$1) {
    that = setPrototypeOf$1(new Error$1(undefined), isInstance ? getPrototypeOf$2(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$3(AggregateErrorPrototype);
    createNonEnumerableProperty$9(that, TO_STRING_TAG$5, 'Error');
  }
  createNonEnumerableProperty$9(that, 'message', normalizeStringArgument(message, ''));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty$9(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate$8(errors, push$2, { that: errorsArray });
  createNonEnumerableProperty$9(that, 'errors', errorsArray);
  return that;
};
if (setPrototypeOf$1) setPrototypeOf$1($AggregateError, Error$1);
else copyConstructorProperties$2($AggregateError, Error$1);
var AggregateErrorPrototype = $AggregateError.prototype = create$3(Error$1.prototype, {
  constructor: createPropertyDescriptor$5(1, $AggregateError),
  message: createPropertyDescriptor$5(1, ''),
  name: createPropertyDescriptor$5(1, 'AggregateError')
});
$$l({ global: true }, {
  AggregateError: $AggregateError
});

var uncurryThis$p = functionUncurryThis$1;
var isCallable$p = isCallable$A;
var store$5 = sharedStore$1;
var functionToString$2 = uncurryThis$p(Function.toString);
if (!isCallable$p(store$5.inspectSource)) {
  store$5.inspectSource = function (it) {
    return functionToString$2(it);
  };
}
var inspectSource$8 = store$5.inspectSource;

var global$R = global$1e;
var isCallable$o = isCallable$A;
var inspectSource$7 = inspectSource$8;
var WeakMap$4 = global$R.WeakMap;
var nativeWeakMap$1 = isCallable$o(WeakMap$4) && /native code/.test(inspectSource$7(WeakMap$4));

var NATIVE_WEAK_MAP$1 = nativeWeakMap$1;
var global$Q = global$1e;
var uncurryThis$o = functionUncurryThis$1;
var isObject$o = isObject$u;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;
var hasOwn$f = hasOwnProperty_1$1;
var shared$4 = sharedStore$1;
var sharedKey$2 = sharedKey$5;
var hiddenKeys$5 = hiddenKeys$9;
var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var TypeError$i = global$Q.TypeError;
var WeakMap$3 = global$Q.WeakMap;
var set$3, get$1, has$7;
var enforce$1 = function (it) {
  return has$7(it) ? get$1(it) : set$3(it, {});
};
var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$o(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$i('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (NATIVE_WEAK_MAP$1 || shared$4.state) {
  var store$4 = shared$4.state || (shared$4.state = new WeakMap$3());
  var wmget$1 = uncurryThis$o(store$4.get);
  var wmhas$1 = uncurryThis$o(store$4.has);
  var wmset$1 = uncurryThis$o(store$4.set);
  set$3 = function (it, metadata) {
    if (wmhas$1(store$4, it)) throw new TypeError$i(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    wmset$1(store$4, it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return wmget$1(store$4, it) || {};
  };
  has$7 = function (it) {
    return wmhas$1(store$4, it);
  };
} else {
  var STATE$1 = sharedKey$2('state');
  hiddenKeys$5[STATE$1] = true;
  set$3 = function (it, metadata) {
    if (hasOwn$f(it, STATE$1)) throw new TypeError$i(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$8(it, STATE$1, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$f(it, STATE$1) ? it[STATE$1] : {};
  };
  has$7 = function (it) {
    return hasOwn$f(it, STATE$1);
  };
}
var internalState$1 = {
  set: set$3,
  get: get$1,
  has: has$7,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var DESCRIPTORS$b = descriptors$1;
var hasOwn$e = hasOwnProperty_1$1;
var FunctionPrototype$4 = Function.prototype;
var getDescriptor$1 = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;
var EXISTS$2 = hasOwn$e(FunctionPrototype$4, 'name');
var PROPER$1 = EXISTS$2 && (function something() {  }).name === 'something';
var CONFIGURABLE$1 = EXISTS$2 && (!DESCRIPTORS$b || (DESCRIPTORS$b && getDescriptor$1(FunctionPrototype$4, 'name').configurable));
var functionName$1 = {
  EXISTS: EXISTS$2,
  PROPER: PROPER$1,
  CONFIGURABLE: CONFIGURABLE$1
};

var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
var redefine$9 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty$7(target, key, value);
};

var fails$o = fails$w;
var isCallable$n = isCallable$A;
var create$2 = objectCreate;
var getPrototypeOf$1 = objectGetPrototypeOf;
var redefine$8 = redefine$9;
var wellKnownSymbol$l = wellKnownSymbol$s;
var ITERATOR$6 = wellKnownSymbol$l('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$o(function () {
  var test = {};
  return IteratorPrototype$1[ITERATOR$6].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$2(IteratorPrototype$1);
if (!isCallable$n(IteratorPrototype$1[ITERATOR$6])) {
  redefine$8(IteratorPrototype$1, ITERATOR$6, function () {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var TO_STRING_TAG_SUPPORT$4 = toStringTagSupport$1;
var classof$c = classof$f;
var objectToString$3 = TO_STRING_TAG_SUPPORT$4 ? {}.toString : function toString() {
  return '[object ' + classof$c(this) + ']';
};

var TO_STRING_TAG_SUPPORT$3 = toStringTagSupport$1;
var defineProperty$f = objectDefineProperty$1.f;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$c;
var hasOwn$d = hasOwnProperty_1$1;
var toString$8 = objectToString$3;
var wellKnownSymbol$k = wellKnownSymbol$s;
var TO_STRING_TAG$4 = wellKnownSymbol$k('toStringTag');
var setToStringTag$6 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$d(target, TO_STRING_TAG$4)) {
      defineProperty$f(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT$3) {
      createNonEnumerableProperty$6(target, 'toString', toString$8);
    }
  }
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$4 = createPropertyDescriptor$9;
var setToStringTag$5 = setToStringTag$6;
var Iterators$5 = iterators$1;
var returnThis$1 = function () { return this; };
var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype, { next: createPropertyDescriptor$4(1, next) });
  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$5[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$k = _export$1;
var call$d = functionCall$1;
var FunctionName = functionName$1;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setToStringTag$4 = setToStringTag$6;
var redefine$7 = redefine$9;
var wellKnownSymbol$j = wellKnownSymbol$s;
var Iterators$4 = iterators$1;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$j('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () { return this; };
var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);
  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };
  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$4[TO_STRING_TAG] = returnThis;
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$d(nativeIterator, this); };
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
        redefine$7(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$k({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if ((FORCED) && IterablePrototype[ITERATOR$5] !== defaultIterator) {
    redefine$7(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$4[NAME] = defaultIterator;
  return methods;
};

var toIndexedObject$6 = toIndexedObject$b;
var Iterators$3 = iterators$1;
var InternalStateModule$7 = internalState$1;
var defineIterator$2 = defineIterator$3;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$6 = InternalStateModule$7.set;
var getInternalState$4 = InternalStateModule$7.getterFor(ARRAY_ITERATOR);
defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$6(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$6(iterated),
    index: 0,
    kind: kind
  });
}, function () {
  var state = getInternalState$4(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');
Iterators$3.Arguments = Iterators$3.Array;

var global$P = global$1e;
var nativePromiseConstructor$1 = global$P.Promise;

var redefine$6 = redefine$9;
var redefineAll$5 = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine$6(target, key, src[key], options);
  } return target;
};

var getBuiltIn$e = getBuiltIn$j;
var definePropertyModule$4 = objectDefineProperty$1;
var wellKnownSymbol$i = wellKnownSymbol$s;
var DESCRIPTORS$a = descriptors$1;
var SPECIES$7 = wellKnownSymbol$i('species');
var setSpecies$4 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$e(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$4.f;
  if (DESCRIPTORS$a && Constructor && !Constructor[SPECIES$7]) {
    defineProperty(Constructor, SPECIES$7, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var global$O = global$1e;
var isPrototypeOf$6 = objectIsPrototypeOf$1;
var TypeError$h = global$O.TypeError;
var anInstance$6 = function (it, Prototype) {
  if (isPrototypeOf$6(Prototype, it)) return it;
  throw TypeError$h('Incorrect invocation');
};

var wellKnownSymbol$h = wellKnownSymbol$s;
var ITERATOR$4 = wellKnownSymbol$h('iterator');
var SAFE_CLOSING$1 = false;
try {
  var called$1 = 0;
  var iteratorWithReturn$1 = {
    next: function () {
      return { done: !!called$1++ };
    },
    'return': function () {
      SAFE_CLOSING$1 = true;
    }
  };
  iteratorWithReturn$1[ITERATOR$4] = function () {
    return this;
  };
  Array.from(iteratorWithReturn$1, function () { throw 2; });
} catch (error) {  }
var checkCorrectnessOfIteration$3 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING$1) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$4] = function () {
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

var uncurryThis$n = functionUncurryThis$1;
var fails$n = fails$w;
var isCallable$m = isCallable$A;
var classof$b = classof$f;
var getBuiltIn$d = getBuiltIn$j;
var inspectSource$6 = inspectSource$8;
var noop$1 = function () {  };
var empty$1 = [];
var construct$1 = getBuiltIn$d('Reflect', 'construct');
var constructorRegExp$1 = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$n(constructorRegExp$1.exec);
var INCORRECT_TO_STRING$1 = !constructorRegExp$1.exec(noop$1);
var isConstructorModern$1 = function (argument) {
  if (!isCallable$m(argument)) return false;
  try {
    construct$1(noop$1, empty$1, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy$1 = function (argument) {
  if (!isCallable$m(argument)) return false;
  switch (classof$b(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  } return INCORRECT_TO_STRING$1 || !!exec$3(constructorRegExp$1, inspectSource$6(argument));
};
var isConstructor$4 = !construct$1 || fails$n(function () {
  var called;
  return isConstructorModern$1(isConstructorModern$1.call)
    || !isConstructorModern$1(Object)
    || !isConstructorModern$1(function () { called = true; })
    || called;
}) ? isConstructorLegacy$1 : isConstructorModern$1;

var global$N = global$1e;
var isConstructor$3 = isConstructor$4;
var tryToString$5 = tryToString$9;
var TypeError$g = global$N.TypeError;
var aConstructor$3 = function (argument) {
  if (isConstructor$3(argument)) return argument;
  throw TypeError$g(tryToString$5(argument) + ' is not a constructor');
};

var anObject$b = anObject$k;
var aConstructor$2 = aConstructor$3;
var wellKnownSymbol$g = wellKnownSymbol$s;
var SPECIES$6 = wellKnownSymbol$g('species');
var speciesConstructor$5 = function (O, defaultConstructor) {
  var C = anObject$b(O).constructor;
  var S;
  return C === undefined || (S = anObject$b(C)[SPECIES$6]) == undefined ? defaultConstructor : aConstructor$2(S);
};

var userAgent$7 = engineUserAgent$1;
var engineIsIos$1 = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$7);

var classof$a = classofRaw$3;
var global$M = global$1e;
var engineIsNode$1 = classof$a(global$M.process) == 'process';

var global$L = global$1e;
var apply$7 = functionApply$1;
var bind$g = functionBindContext$1;
var isCallable$l = isCallable$A;
var hasOwn$c = hasOwnProperty_1$1;
var fails$m = fails$w;
var html$2 = html$4;
var arraySlice$4 = arraySlice$6;
var createElement$2 = documentCreateElement$2;
var IS_IOS$3 = engineIsIos$1;
var IS_NODE$5 = engineIsNode$1;
var set$2 = global$L.setImmediate;
var clear$1 = global$L.clearImmediate;
var process$7 = global$L.process;
var Dispatch$1 = global$L.Dispatch;
var Function$3 = global$L.Function;
var MessageChannel$1 = global$L.MessageChannel;
var String$5 = global$L.String;
var counter$1 = 0;
var queue$1 = {};
var ONREADYSTATECHANGE$1 = 'onreadystatechange';
var location$1, defer$1, channel$1, port$1;
try {
  location$1 = global$L.location;
} catch (error) {  }
var run$1 = function (id) {
  if (hasOwn$c(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};
var runner$1 = function (id) {
  return function () {
    run$1(id);
  };
};
var listener$1 = function (event) {
  run$1(event.data);
};
var post$1 = function (id) {
  global$L.postMessage(String$5(id), location$1.protocol + '//' + location$1.host);
};
if (!set$2 || !clear$1) {
  set$2 = function setImmediate(fn) {
    var args = arraySlice$4(arguments, 1);
    queue$1[++counter$1] = function () {
      apply$7(isCallable$l(fn) ? fn : Function$3(fn), undefined, args);
    };
    defer$1(counter$1);
    return counter$1;
  };
  clear$1 = function clearImmediate(id) {
    delete queue$1[id];
  };
  if (IS_NODE$5) {
    defer$1 = function (id) {
      process$7.nextTick(runner$1(id));
    };
  } else if (Dispatch$1 && Dispatch$1.now) {
    defer$1 = function (id) {
      Dispatch$1.now(runner$1(id));
    };
  } else if (MessageChannel$1 && !IS_IOS$3) {
    channel$1 = new MessageChannel$1();
    port$1 = channel$1.port2;
    channel$1.port1.onmessage = listener$1;
    defer$1 = bind$g(port$1.postMessage, port$1);
  } else if (
    global$L.addEventListener &&
    isCallable$l(global$L.postMessage) &&
    !global$L.importScripts &&
    location$1 && location$1.protocol !== 'file:' &&
    !fails$m(post$1)
  ) {
    defer$1 = post$1;
    global$L.addEventListener('message', listener$1, false);
  } else if (ONREADYSTATECHANGE$1 in createElement$2('script')) {
    defer$1 = function (id) {
      html$2.appendChild(createElement$2('script'))[ONREADYSTATECHANGE$1] = function () {
        html$2.removeChild(this);
        run$1(id);
      };
    };
  } else {
    defer$1 = function (id) {
      setTimeout(runner$1(id), 0);
    };
  }
}
var task$3 = {
  set: set$2,
  clear: clear$1
};

var userAgent$6 = engineUserAgent$1;
var global$K = global$1e;
var engineIsIosPebble$1 = /ipad|iphone|ipod/i.test(userAgent$6) && global$K.Pebble !== undefined;

var userAgent$5 = engineUserAgent$1;
var engineIsWebosWebkit$1 = /web0s(?!.*chrome)/i.test(userAgent$5);

var global$J = global$1e;
var bind$f = functionBindContext$1;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
var macrotask$1 = task$3.set;
var IS_IOS$2 = engineIsIos$1;
var IS_IOS_PEBBLE$1 = engineIsIosPebble$1;
var IS_WEBOS_WEBKIT$1 = engineIsWebosWebkit$1;
var IS_NODE$4 = engineIsNode$1;
var MutationObserver$1 = global$J.MutationObserver || global$J.WebKitMutationObserver;
var document$5 = global$J.document;
var process$6 = global$J.process;
var Promise$2 = global$J.Promise;
var queueMicrotaskDescriptor$1 = getOwnPropertyDescriptor$3(global$J, 'queueMicrotask');
var queueMicrotask$1 = queueMicrotaskDescriptor$1 && queueMicrotaskDescriptor$1.value;
var flush$1, head$1, last$1, notify$3, toggle$1, node$1, promise$6, then$1;
if (!queueMicrotask$1) {
  flush$1 = function () {
    var parent, fn;
    if (IS_NODE$4 && (parent = process$6.domain)) parent.exit();
    while (head$1) {
      fn = head$1.fn;
      head$1 = head$1.next;
      try {
        fn();
      } catch (error) {
        if (head$1) notify$3();
        else last$1 = undefined;
        throw error;
      }
    } last$1 = undefined;
    if (parent) parent.enter();
  };
  if (!IS_IOS$2 && !IS_NODE$4 && !IS_WEBOS_WEBKIT$1 && MutationObserver$1 && document$5) {
    toggle$1 = true;
    node$1 = document$5.createTextNode('');
    new MutationObserver$1(flush$1).observe(node$1, { characterData: true });
    notify$3 = function () {
      node$1.data = toggle$1 = !toggle$1;
    };
  } else if (!IS_IOS_PEBBLE$1 && Promise$2 && Promise$2.resolve) {
    promise$6 = Promise$2.resolve(undefined);
    promise$6.constructor = Promise$2;
    then$1 = bind$f(promise$6.then, promise$6);
    notify$3 = function () {
      then$1(flush$1);
    };
  } else if (IS_NODE$4) {
    notify$3 = function () {
      process$6.nextTick(flush$1);
    };
  } else {
    macrotask$1 = bind$f(macrotask$1, global$J);
    notify$3 = function () {
      macrotask$1(flush$1);
    };
  }
}
var microtask$3 = queueMicrotask$1 || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last$1) last$1.next = task;
  if (!head$1) {
    head$1 = task;
    notify$3();
  } last$1 = task;
};

var newPromiseCapability$5 = {};

var aCallable$9 = aCallable$d;
var PromiseCapability$1 = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$9(resolve);
  this.reject = aCallable$9(reject);
};
newPromiseCapability$5.f = function (C) {
  return new PromiseCapability$1(C);
};

var anObject$a = anObject$k;
var isObject$n = isObject$u;
var newPromiseCapability$4 = newPromiseCapability$5;
var promiseResolve$6 = function (C, x) {
  anObject$a(C);
  if (isObject$n(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$4.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$I = global$1e;
var hostReportErrors$3 = function (a, b) {
  var console = global$I.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$6 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var engineIsBrowser$1 = typeof window == 'object';

var $$j = _export$1;
var IS_PURE = isPure;
var global$H = global$1e;
var getBuiltIn$c = getBuiltIn$j;
var call$c = functionCall$1;
var NativePromise$3 = nativePromiseConstructor$1;
var redefineAll$4 = redefineAll$5;
var setToStringTag$3 = setToStringTag$6;
var setSpecies$3 = setSpecies$4;
var aCallable$8 = aCallable$d;
var isCallable$k = isCallable$A;
var isObject$m = isObject$u;
var anInstance$5 = anInstance$6;
var inspectSource$5 = inspectSource$8;
var iterate$7 = iterate$9;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
var speciesConstructor$4 = speciesConstructor$5;
var task$2 = task$3.set;
var microtask$2 = microtask$3;
var promiseResolve$5 = promiseResolve$6;
var hostReportErrors$2 = hostReportErrors$3;
var newPromiseCapabilityModule$4 = newPromiseCapability$5;
var perform$5 = perform$6;
var InternalStateModule$6 = internalState$1;
var isForced$3 = isForced_1$1;
var wellKnownSymbol$f = wellKnownSymbol$s;
var IS_BROWSER$1 = engineIsBrowser$1;
var IS_NODE$3 = engineIsNode$1;
var V8_VERSION$4 = engineV8Version$1;
var SPECIES$5 = wellKnownSymbol$f('species');
var PROMISE$1 = 'Promise';
var getInternalState$3 = InternalStateModule$6.get;
var setInternalState$5 = InternalStateModule$6.set;
var getInternalPromiseState$1 = InternalStateModule$6.getterFor(PROMISE$1);
var NativePromisePrototype$1 = NativePromise$3 && NativePromise$3.prototype;
var PromiseConstructor$1 = NativePromise$3;
var PromisePrototype$1 = NativePromisePrototype$1;
var TypeError$f = global$H.TypeError;
var document$4 = global$H.document;
var process$5 = global$H.process;
var newPromiseCapability$3 = newPromiseCapabilityModule$4.f;
var newGenericPromiseCapability$1 = newPromiseCapability$3;
var DISPATCH_EVENT$1 = !!(document$4 && document$4.createEvent && global$H.dispatchEvent);
var NATIVE_REJECTION_EVENT$1 = isCallable$k(global$H.PromiseRejectionEvent);
var UNHANDLED_REJECTION$1 = 'unhandledrejection';
var REJECTION_HANDLED$1 = 'rejectionhandled';
var PENDING$1 = 0;
var FULFILLED$1 = 1;
var REJECTED$1 = 2;
var HANDLED$1 = 1;
var UNHANDLED$1 = 2;
var SUBCLASSING$1 = false;
var Internal$1, OwnPromiseCapability$1, PromiseWrapper$1;
var FORCED$4 = isForced$3(PROMISE$1, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$5(PromiseConstructor$1);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor$1);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$4 === 66) return true;
  if (!PromisePrototype$1['finally']) return true;
  if (V8_VERSION$4 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  var promise = new PromiseConstructor$1(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () {  }, function () {  });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$5] = FakePromise;
  SUBCLASSING$1 = promise.then(function () {  }) instanceof FakePromise;
  if (!SUBCLASSING$1) return true;
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER$1 && !NATIVE_REJECTION_EVENT$1;
});
var INCORRECT_ITERATION$1 = FORCED$4 || !checkCorrectnessOfIteration$2(function (iterable) {
  PromiseConstructor$1.all(iterable)['catch'](function () {  });
});
var isThenable$1 = function (it) {
  var then;
  return isObject$m(it) && isCallable$k(then = it.then) ? then : false;
};
var notify$2 = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask$2(function () {
    var value = state.value;
    var ok = state.state == FULFILLED$1;
    var index = 0;
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED$1) onHandleUnhandled$1(state);
            state.rejection = HANDLED$1;
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
            reject(TypeError$f('Promise-chain cycle'));
          } else if (then = isThenable$1(result)) {
            call$c(then, result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled$1(state);
  });
};
var dispatchEvent$1 = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT$1) {
    event = document$4.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$H.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT$1 && (handler = global$H['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION$1) hostReportErrors$2('Unhandled promise rejection', reason);
};
var onUnhandled$1 = function (state) {
  call$c(task$2, global$H, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled$1(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$5(function () {
        if (IS_NODE$3) {
          process$5.emit('unhandledRejection', value, promise);
        } else dispatchEvent$1(UNHANDLED_REJECTION$1, promise, value);
      });
      state.rejection = IS_NODE$3 || isUnhandled$1(state) ? UNHANDLED$1 : HANDLED$1;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled$1 = function (state) {
  return state.rejection !== HANDLED$1 && !state.parent;
};
var onHandleUnhandled$1 = function (state) {
  call$c(task$2, global$H, function () {
    var promise = state.facade;
    if (IS_NODE$3) {
      process$5.emit('rejectionHandled', promise);
    } else dispatchEvent$1(REJECTION_HANDLED$1, promise, state.value);
  });
};
var bind$e = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};
var internalReject$1 = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED$1;
  notify$2(state, true);
};
var internalResolve$1 = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$f("Promise can't be resolved itself");
    var then = isThenable$1(value);
    if (then) {
      microtask$2(function () {
        var wrapper = { done: false };
        try {
          call$c(then, value,
            bind$e(internalResolve$1, wrapper, state),
            bind$e(internalReject$1, wrapper, state)
          );
        } catch (error) {
          internalReject$1(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED$1;
      notify$2(state, false);
    }
  } catch (error) {
    internalReject$1({ done: false }, error, state);
  }
};
if (FORCED$4) {
  PromiseConstructor$1 = function Promise(executor) {
    anInstance$5(this, PromisePrototype$1);
    aCallable$8(executor);
    call$c(Internal$1, this);
    var state = getInternalState$3(this);
    try {
      executor(bind$e(internalResolve$1, state), bind$e(internalReject$1, state));
    } catch (error) {
      internalReject$1(state, error);
    }
  };
  PromisePrototype$1 = PromiseConstructor$1.prototype;
  Internal$1 = function Promise(executor) {
    setInternalState$5(this, {
      type: PROMISE$1,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING$1,
      value: undefined
    });
  };
  Internal$1.prototype = redefineAll$4(PromisePrototype$1, {
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState$1(this);
      var reactions = state.reactions;
      var reaction = newPromiseCapability$3(speciesConstructor$4(this, PromiseConstructor$1));
      reaction.ok = isCallable$k(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$k(onRejected) && onRejected;
      reaction.domain = IS_NODE$3 ? process$5.domain : undefined;
      state.parent = true;
      reactions[reactions.length] = reaction;
      if (state.state != PENDING$1) notify$2(state, false);
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability$1 = function () {
    var promise = new Internal$1();
    var state = getInternalState$3(promise);
    this.promise = promise;
    this.resolve = bind$e(internalResolve$1, state);
    this.reject = bind$e(internalReject$1, state);
  };
  newPromiseCapabilityModule$4.f = newPromiseCapability$3 = function (C) {
    return C === PromiseConstructor$1 || C === PromiseWrapper$1
      ? new OwnPromiseCapability$1(C)
      : newGenericPromiseCapability$1(C);
  };
}
$$j({ global: true, wrap: true, forced: FORCED$4 }, {
  Promise: PromiseConstructor$1
});
setToStringTag$3(PromiseConstructor$1, PROMISE$1, false, true);
setSpecies$3(PROMISE$1);
PromiseWrapper$1 = getBuiltIn$c(PROMISE$1);
$$j({ target: PROMISE$1, stat: true, forced: FORCED$4 }, {
  reject: function reject(r) {
    var capability = newPromiseCapability$3(this);
    call$c(capability.reject, undefined, r);
    return capability.promise;
  }
});
$$j({ target: PROMISE$1, stat: true, forced: IS_PURE  }, {
  resolve: function resolve(x) {
    return promiseResolve$5(this === PromiseWrapper$1 ? PromiseConstructor$1 : this, x);
  }
});
$$j({ target: PROMISE$1, stat: true, forced: INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$5(function () {
      var $promiseResolve = aCallable$8(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$7(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$c($promiseResolve, C, promise).then(function (value) {
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
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$3(C);
    var reject = capability.reject;
    var result = perform$5(function () {
      var $promiseResolve = aCallable$8(C.resolve);
      iterate$7(iterable, function (promise) {
        call$c($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$i = _export$1;
var call$b = functionCall$1;
var aCallable$7 = aCallable$d;
var newPromiseCapabilityModule$3 = newPromiseCapability$5;
var perform$4 = perform$6;
var iterate$6 = iterate$9;
$$i({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$4(function () {
      var promiseResolve = aCallable$7(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$6(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$b(promiseResolve, C, promise).then(function (value) {
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

var $$h = _export$1;
var aCallable$6 = aCallable$d;
var getBuiltIn$b = getBuiltIn$j;
var call$a = functionCall$1;
var newPromiseCapabilityModule$2 = newPromiseCapability$5;
var perform$3 = perform$6;
var iterate$5 = iterate$9;
var PROMISE_ANY_ERROR = 'No one promise resolved';
$$h({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$b('AggregateError');
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$3(function () {
      var promiseResolve = aCallable$6(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$5(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call$a(promiseResolve, C, promise).then(function (value) {
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

var $$g = _export$1;
var NativePromise$2 = nativePromiseConstructor$1;
var fails$l = fails$w;
var getBuiltIn$a = getBuiltIn$j;
var isCallable$j = isCallable$A;
var speciesConstructor$3 = speciesConstructor$5;
var promiseResolve$4 = promiseResolve$6;
var NON_GENERIC$1 = !!NativePromise$2 && fails$l(function () {
  NativePromise$2.prototype['finally'].call({ then: function () {  } }, function () {  });
});
$$g({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC$1 }, {
  'finally': function (onFinally) {
    var C = speciesConstructor$3(this, getBuiltIn$a('Promise'));
    var isFunction = isCallable$j(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve$4(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve$4(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

var uncurryThis$m = functionUncurryThis$1;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
var toString$7 = toString$a;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var charAt$2 = uncurryThis$m(''.charAt);
var charCodeAt$1 = uncurryThis$m(''.charCodeAt);
var stringSlice$1 = uncurryThis$m(''.slice);
var createMethod$3 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$7(requireObjectCoercible$4($this));
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
var toString$6 = toString$a;
var InternalStateModule$5 = internalState$1;
var defineIterator$1 = defineIterator$3;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = InternalStateModule$5.set;
var getInternalState$2 = InternalStateModule$5.getterFor(STRING_ITERATOR);
defineIterator$1(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: toString$6(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$1(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var path$b = path$e;
var promise$5 = path$b.Promise;

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

var DOMIterables = domIterables;
var global$G = global$1e;
var classof$9 = classof$f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
var Iterators$2 = iterators$1;
var wellKnownSymbol$e = wellKnownSymbol$s;
var TO_STRING_TAG$3 = wellKnownSymbol$e('toStringTag');
for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global$G[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof$9(CollectionPrototype) !== TO_STRING_TAG$3) {
    createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
  }
  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
}

var parent$d = promise$5;
var promise$4 = parent$d;

var $$f = _export$1;
var newPromiseCapabilityModule$1 = newPromiseCapability$5;
var perform$2 = perform$6;
$$f({ target: 'Promise', stat: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule$1.f(this);
    var result = perform$2(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

var parent$c = promise$4;
var promise$3 = parent$c;

var promise$2 = promise$3;

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
    promise$2.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise$2(function (resolve, reject) {
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

var $$e = _export$1;
var DESCRIPTORS$9 = descriptors$1;
var objectDefinePropertyModile = objectDefineProperty$1;
$$e({ target: 'Object', stat: true, forced: !DESCRIPTORS$9, sham: !DESCRIPTORS$9 }, {
  defineProperty: objectDefinePropertyModile.f
});

var path$a = path$e;
var Object$5 = path$a.Object;
var defineProperty$d = defineProperty$e.exports = function defineProperty(it, key, desc) {
  return Object$5.defineProperty(it, key, desc);
};
if (Object$5.defineProperty.sham) defineProperty$d.sham = true;

var parent$b = defineProperty$e.exports;
var defineProperty$c = parent$b;

var parent$a = defineProperty$c;
var defineProperty$b = parent$a;

var defineProperty$a = defineProperty$b;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    defineProperty$a(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var check = function (it) {
  return it && it.Math == Math && it;
};
var global$F =
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var shared$3 = {exports: {}};

var global$E = global$F;
var defineProperty$9 = Object.defineProperty;
var setGlobal$3 = function (key, value) {
  try {
    defineProperty$9(global$E, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$E[key] = value;
  } return value;
};

var global$D = global$F;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$D[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.1',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var FunctionPrototype$3 = Function.prototype;
var bind$d = FunctionPrototype$3.bind;
var call$9 = FunctionPrototype$3.call;
var callBind$3 = bind$d && bind$d.bind(call$9);
var functionUncurryThis = bind$d ? function (fn) {
  return fn && callBind$3(call$9, fn);
} : function (fn) {
  return fn && function () {
    return call$9.apply(fn, arguments);
  };
};

var global$C = global$F;
var TypeError$e = global$C.TypeError;
var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw TypeError$e("Can't call method on " + it);
  return it;
};

var global$B = global$F;
var requireObjectCoercible$2 = requireObjectCoercible$3;
var Object$4 = global$B.Object;
var toObject$4 = function (argument) {
  return Object$4(requireObjectCoercible$2(argument));
};

var uncurryThis$l = functionUncurryThis;
var toObject$3 = toObject$4;
var hasOwnProperty$8 = uncurryThis$l({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$8(toObject$3(it), key);
};

var uncurryThis$k = functionUncurryThis;
var id$2 = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$k(1.0.toString);
var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id$2 + postfix, 36);
};

var isCallable$i = function (argument) {
  return typeof argument == 'function';
};

var global$A = global$F;
var isCallable$h = isCallable$i;
var aFunction = function (argument) {
  return isCallable$h(argument) ? argument : undefined;
};
var getBuiltIn$9 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$A[namespace]) : global$A[namespace] && global$A[namespace][method];
};

var getBuiltIn$8 = getBuiltIn$9;
var engineUserAgent = getBuiltIn$8('navigator', 'userAgent') || '';

var global$z = global$F;
var userAgent$4 = engineUserAgent;
var process$4 = global$z.process;
var Deno = global$z.Deno;
var versions = process$4 && process$4.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$4) {
  match = userAgent$4.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$4.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var V8_VERSION$3 = engineV8Version;
var fails$j = fails$k;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$j(function () {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$y = global$F;
var shared$2 = shared$3.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$5 = global$y.Symbol;
var symbolFor = Symbol$5 && Symbol$5['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$2;
var wellKnownSymbol$d = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$b(Symbol$5, name)) {
      WellKnownSymbolsStore[name] = Symbol$5[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var wellKnownSymbol$c = wellKnownSymbol$d;
var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
var test = {};
test[TO_STRING_TAG$2] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var redefine$5 = {exports: {}};

var fails$i = fails$k;
var descriptors = !fails$i(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectDefineProperty = {};

var isCallable$g = isCallable$i;
var isObject$l = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var global$x = global$F;
var isObject$k = isObject$l;
var document$3 = global$x.document;
var EXISTS$1 = isObject$k(document$3) && isObject$k(document$3.createElement);
var documentCreateElement = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$h = fails$k;
var createElement$1 = documentCreateElement;
var ie8DomDefine = !DESCRIPTORS$8 && !fails$h(function () {
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var global$w = global$F;
var isObject$j = isObject$l;
var String$4 = global$w.String;
var TypeError$d = global$w.TypeError;
var anObject$9 = function (argument) {
  if (isObject$j(argument)) return argument;
  throw TypeError$d(String$4(argument) + ' is not an object');
};

var call$8 = Function.prototype.call;
var functionCall = call$8.bind ? call$8.bind(call$8) : function () {
  return call$8.apply(call$8, arguments);
};

var uncurryThis$j = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf);

var global$v = global$F;
var getBuiltIn$7 = getBuiltIn$9;
var isCallable$f = isCallable$i;
var isPrototypeOf$5 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Object$3 = global$v.Object;
var isSymbol$4 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$f($Symbol) && isPrototypeOf$5($Symbol.prototype, Object$3(it));
};

var global$u = global$F;
var String$3 = global$u.String;
var tryToString$4 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$t = global$F;
var isCallable$e = isCallable$i;
var tryToString$3 = tryToString$4;
var TypeError$c = global$t.TypeError;
var aCallable$5 = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw TypeError$c(tryToString$3(argument) + ' is not a function');
};

var aCallable$4 = aCallable$5;
var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$4(func);
};

var global$s = global$F;
var call$7 = functionCall;
var isCallable$d = isCallable$i;
var isObject$i = isObject$l;
var TypeError$b = global$s.TypeError;
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$i(val = call$7(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$i(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$i(val = call$7(fn, input))) return val;
  throw TypeError$b("Can't convert object to primitive value");
};

var global$r = global$F;
var call$6 = functionCall;
var isObject$h = isObject$l;
var isSymbol$3 = isSymbol$4;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$d;
var TypeError$a = global$r.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');
var toPrimitive$1 = function (input, pref) {
  if (!isObject$h(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$h(result) || isSymbol$3(result)) return result;
    throw TypeError$a("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};

var global$q = global$F;
var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var anObject$8 = anObject$9;
var toPropertyKey$2 = toPropertyKey$3;
var TypeError$9 = global$q.TypeError;
var $defineProperty$1 = Object.defineProperty;
objectDefineProperty.f = DESCRIPTORS$7 ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$2(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$9('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$6 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var createNonEnumerableProperty$4 = DESCRIPTORS$6 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var uncurryThis$i = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStore;
var functionToString$1 = uncurryThis$i(Function.toString);
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString$1(it);
  };
}
var inspectSource$4 = store$1.inspectSource;

var global$p = global$F;
var isCallable$b = isCallable$i;
var inspectSource$3 = inspectSource$4;
var WeakMap$2 = global$p.WeakMap;
var nativeWeakMap = isCallable$b(WeakMap$2) && /native code/.test(inspectSource$3(WeakMap$2));

var shared$1 = shared$3.exports;
var uid$1 = uid$3;
var keys$7 = shared$1('keys');
var sharedKey$1 = function (key) {
  return keys$7[key] || (keys$7[key] = uid$1(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$o = global$F;
var uncurryThis$h = functionUncurryThis;
var isObject$g = isObject$l;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$a = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$8 = global$o.TypeError;
var WeakMap$1 = global$o.WeakMap;
var set$1, get, has$6;
var enforce = function (it) {
  return has$6(it) ? get(it) : set$1(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$g(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$8('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  var wmget = uncurryThis$h(store.get);
  var wmhas = uncurryThis$h(store.has);
  var wmset = uncurryThis$h(store.set);
  set$1 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has$6 = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$a(it, STATE)) throw new TypeError$8(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$a(it, STATE) ? it[STATE] : {};
  };
  has$6 = function (it) {
    return hasOwn$a(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get: get,
  has: has$6,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$5 = descriptors;
var hasOwn$9 = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype;
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$9(FunctionPrototype$2, 'name');
var PROPER = EXISTS && (function something() {  }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$2, 'name').configurable));
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$n = global$F;
var isCallable$a = isCallable$i;
var hasOwn$8 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$2 = inspectSource$4;
var InternalStateModule$4 = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule$4.get;
var enforceInternalState = InternalStateModule$4.enforce;
var TEMPLATE = String(String).split('String');
(redefine$5.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable$a(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn$8(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty$2(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global$n) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$2(O, key, value);
})(Function.prototype, 'toString', function toString() {
  return isCallable$a(this) && getInternalState$1(this).source || inspectSource$2(this);
});

var uncurryThis$g = functionUncurryThis;
var toString$4 = uncurryThis$g({}.toString);
var stringSlice = uncurryThis$g(''.slice);
var classofRaw$1 = function (it) {
  return stringSlice(toString$4(it), 8, -1);
};

var global$m = global$F;
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$i;
var classofRaw = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$d;
var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');
var Object$2 = global$m.Object;
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {  }
};
var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$1)) == 'string' ? tag
    : CORRECT_ARGUMENTS ? classofRaw(O)
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$7 = classof$8;
var objectToString$2 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$7(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var redefine$4 = redefine$5.exports;
var toString$3 = objectToString$2;
if (!TO_STRING_TAG_SUPPORT) {
  redefine$4(Object.prototype, 'toString', toString$3, { unsafe: true });
}

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var global$l = global$F;
var uncurryThis$f = functionUncurryThis;
var fails$g = fails$k;
var classof$6 = classofRaw$1;
var Object$1 = global$l.Object;
var split = uncurryThis$f(''.split);
var indexedObject = fails$g(function () {
  return !Object$1('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : Object$1(it);
} : Object$1;

var IndexedObject$2 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$3;
var toIndexedObject$5 = function (it) {
  return IndexedObject$2(requireObjectCoercible$1(it));
};

var DESCRIPTORS$4 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {  }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
};

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
var lengthOfArrayLike$4 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$3(O);
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
  includes: createMethod$2(true),
  indexOf: createMethod$2(false)
};

var uncurryThis$e = functionUncurryThis;
var hasOwn$6 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$1 = uncurryThis$e([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$6(hiddenKeys$2, key) && hasOwn$6(O, key) && push$1(result, key);
  while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

var enumBugKeys$1 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$6 = getBuiltIn$9;
var uncurryThis$d = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;
var concat$5 = uncurryThis$d([].concat);
var ownKeys$1 = getBuiltIn$6('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat$5(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$f = fails$k;
var isCallable$8 = isCallable$i;
var replacement = /#|\.prototype\./;
var isForced$2 = function (feature, detection) {
  var value = data$1[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$8(detection) ? fails$f(detection)
    : !!detection;
};
var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data$1 = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';
var isForced_1 = isForced$2;

var global$k = global$F;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$3 = redefine$5.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$k;
  } else if (STATIC) {
    target = global$k[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$k[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    }
    redefine$3(target, key, sourceProperty, options);
  }
};

var global$j = global$F;
var nativePromiseConstructor = global$j.Promise;

var redefine$2 = redefine$5.exports;
var redefineAll$3 = function (target, src, options) {
  for (var key in src) redefine$2(target, key, src[key], options);
  return target;
};

var global$i = global$F;
var isCallable$7 = isCallable$i;
var String$2 = global$i.String;
var TypeError$7 = global$i.TypeError;
var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$7(argument)) return argument;
  throw TypeError$7("Can't set " + String$2(argument) + ' as a prototype');
};

var uncurryThis$c = functionUncurryThis;
var anObject$6 = anObject$9;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThis$c(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {  }
  return function setPrototypeOf(O, proto) {
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$8 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$9 = wellKnownSymbol$d;
var TO_STRING_TAG = wellKnownSymbol$9('toStringTag');
var setToStringTag$2 = function (it, TAG, STATIC) {
  if (it && !hasOwn$4(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$8(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var getBuiltIn$5 = getBuiltIn$9;
var definePropertyModule$1 = objectDefineProperty;
var wellKnownSymbol$8 = wellKnownSymbol$d;
var DESCRIPTORS$3 = descriptors;
var SPECIES$4 = wellKnownSymbol$8('species');
var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$5(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$1.f;
  if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$4]) {
    defineProperty(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var global$h = global$F;
var isPrototypeOf$4 = objectIsPrototypeOf;
var TypeError$6 = global$h.TypeError;
var anInstance$4 = function (it, Prototype) {
  if (isPrototypeOf$4(Prototype, it)) return it;
  throw TypeError$6('Incorrect invocation');
};

var uncurryThis$b = functionUncurryThis;
var aCallable$3 = aCallable$5;
var bind$c = uncurryThis$b(uncurryThis$b.bind);
var functionBindContext = function (fn, that) {
  aCallable$3(fn);
  return that === undefined ? fn : bind$c ? bind$c(fn, that) : function () {
    return fn.apply(that, arguments);
  };
};

var iterators = {};

var wellKnownSymbol$7 = wellKnownSymbol$d;
var Iterators$1 = iterators;
var ITERATOR$3 = wellKnownSymbol$7('iterator');
var ArrayPrototype$3 = Array.prototype;
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype$3[ITERATOR$3] === it);
};

var classof$5 = classof$8;
var getMethod$1 = getMethod$3;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$d;
var ITERATOR$2 = wellKnownSymbol$6('iterator');
var getIteratorMethod$2 = function (it) {
  if (it != undefined) return getMethod$1(it, ITERATOR$2)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$5(it)];
};

var global$g = global$F;
var call$4 = functionCall;
var aCallable$2 = aCallable$5;
var anObject$5 = anObject$9;
var tryToString$2 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;
var TypeError$5 = global$g.TypeError;
var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$5(call$4(iteratorMethod, argument));
  throw TypeError$5(tryToString$2(argument) + ' is not iterable');
};

var call$3 = functionCall;
var anObject$4 = anObject$9;
var getMethod = getMethod$3;
var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$3(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$4(innerResult);
  return value;
};

var global$f = global$F;
var bind$b = functionBindContext;
var call$2 = functionCall;
var anObject$3 = anObject$9;
var tryToString$1 = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var TypeError$4 = global$f.TypeError;
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$4 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$b(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };
  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError$4(tryToString$1(iterable) + ' is not iterable');
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$3(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = iterator.next;
  while (!(step = call$2(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$3(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$5 = wellKnownSymbol$d;
var ITERATOR$1 = wellKnownSymbol$5('iterator');
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
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) {  }
var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
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

var uncurryThis$a = functionUncurryThis;
var fails$e = fails$k;
var isCallable$6 = isCallable$i;
var classof$4 = classof$8;
var getBuiltIn$4 = getBuiltIn$9;
var inspectSource$1 = inspectSource$4;
var noop = function () {  };
var empty = [];
var construct = getBuiltIn$4('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$a(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function (argument) {
  if (!isCallable$6(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function (argument) {
  if (!isCallable$6(argument)) return false;
  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  } return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
};
var isConstructor$2 = !construct || fails$e(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$e = global$F;
var isConstructor$1 = isConstructor$2;
var tryToString = tryToString$4;
var TypeError$3 = global$e.TypeError;
var aConstructor$1 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw TypeError$3(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$9;
var aConstructor = aConstructor$1;
var wellKnownSymbol$4 = wellKnownSymbol$d;
var SPECIES$3 = wellKnownSymbol$4('species');
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES$3]) == undefined ? defaultConstructor : aConstructor(S);
};

var FunctionPrototype$1 = Function.prototype;
var apply$6 = FunctionPrototype$1.apply;
var bind$a = FunctionPrototype$1.bind;
var call$1 = FunctionPrototype$1.call;
var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$a ? call$1.bind(apply$6) : function () {
  return call$1.apply(apply$6, arguments);
});

var getBuiltIn$3 = getBuiltIn$9;
var html$1 = getBuiltIn$3('document', 'documentElement');

var uncurryThis$9 = functionUncurryThis;
var arraySlice$3 = uncurryThis$9([].slice);

var userAgent$3 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$3);

var classof$3 = classofRaw$1;
var global$d = global$F;
var engineIsNode = classof$3(global$d.process) == 'process';

var global$c = global$F;
var apply$5 = functionApply;
var bind$9 = functionBindContext;
var isCallable$5 = isCallable$i;
var hasOwn$3 = hasOwnProperty_1;
var fails$d = fails$k;
var html = html$1;
var arraySlice$2 = arraySlice$3;
var createElement = documentCreateElement;
var IS_IOS$1 = engineIsIos;
var IS_NODE$2 = engineIsNode;
var set = global$c.setImmediate;
var clear = global$c.clearImmediate;
var process$3 = global$c.process;
var Dispatch = global$c.Dispatch;
var Function$2 = global$c.Function;
var MessageChannel = global$c.MessageChannel;
var String$1 = global$c.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;
try {
  location = global$c.location;
} catch (error) {  }
var run = function (id) {
  if (hasOwn$3(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var runner = function (id) {
  return function () {
    run(id);
  };
};
var listener = function (event) {
  run(event.data);
};
var post = function (id) {
  global$c.postMessage(String$1(id), location.protocol + '//' + location.host);
};
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = arraySlice$2(arguments, 1);
    queue[++counter] = function () {
      apply$5(isCallable$5(fn) ? fn : Function$2(fn), undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  if (IS_NODE$2) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$9(port.postMessage, port);
  } else if (
    global$c.addEventListener &&
    isCallable$5(global$c.postMessage) &&
    !global$c.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$d(post)
  ) {
    defer = post;
    global$c.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
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
  set: set,
  clear: clear
};

var userAgent$2 = engineUserAgent;
var global$b = global$F;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$2) && global$b.Pebble !== undefined;

var userAgent$1 = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

var global$a = global$F;
var bind$8 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$1 = engineIsNode;
var MutationObserver = global$a.MutationObserver || global$a.WebKitMutationObserver;
var document$2 = global$a.document;
var process$2 = global$a.process;
var Promise$1 = global$a.Promise;
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$a, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify$1, toggle, node, promise$1, then;
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    promise$1 = Promise$1.resolve(undefined);
    promise$1.constructor = Promise$1;
    then = bind$8(promise$1.then, promise$1);
    notify$1 = function () {
      then(flush);
    };
  } else if (IS_NODE$1) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  } else {
    macrotask = bind$8(macrotask, global$a);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}
var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var newPromiseCapability$2 = {};

var aCallable$1 = aCallable$5;
var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$1(resolve);
  this.reject = aCallable$1(reject);
};
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var anObject$1 = anObject$9;
var isObject$f = isObject$l;
var newPromiseCapability$1 = newPromiseCapability$2;
var promiseResolve$3 = function (C, x) {
  anObject$1(C);
  if (isObject$f(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$9 = global$F;
var hostReportErrors$1 = function (a, b) {
  var console = global$9.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$1 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var engineIsBrowser = typeof window == 'object';

var $$d = _export;
var global$8 = global$F;
var getBuiltIn$2 = getBuiltIn$9;
var call = functionCall;
var NativePromise$1 = nativePromiseConstructor;
var redefine$1 = redefine$5.exports;
var redefineAll$2 = redefineAll$3;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$2;
var setSpecies$1 = setSpecies$2;
var aCallable = aCallable$5;
var isCallable$4 = isCallable$i;
var isObject$e = isObject$l;
var anInstance$3 = anInstance$4;
var inspectSource = inspectSource$4;
var iterate$3 = iterate$4;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask$1;
var promiseResolve$2 = promiseResolve$3;
var hostReportErrors = hostReportErrors$1;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$1;
var InternalStateModule$3 = internalState;
var isForced = isForced_1;
var wellKnownSymbol$3 = wellKnownSymbol$d;
var IS_BROWSER = engineIsBrowser;
var IS_NODE = engineIsNode;
var V8_VERSION$2 = engineV8Version;
var SPECIES$2 = wellKnownSymbol$3('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule$3.get;
var setInternalState$3 = InternalStateModule$3.set;
var getInternalPromiseState = InternalStateModule$3.getterFor(PROMISE);
var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
var PromiseConstructor = NativePromise$1;
var PromisePrototype = NativePromisePrototype;
var TypeError$2 = global$8.TypeError;
var document$1 = global$8.document;
var process$1 = global$8.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$8.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable$4(global$8.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED$3 = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true;
  if (V8_VERSION$2 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () {  }, function () {  });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$2] = FakePromise;
  SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});
var INCORRECT_ITERATION = FORCED$3 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () {  });
});
var isThenable = function (it) {
  var then;
  return isObject$e(it) && isCallable$4(then = it.then) ? then : false;
};
var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    while (chain.length > index) {
      var reaction = chain[index++];
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
            reject(TypeError$2('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            call(then, result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$8.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global$8['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (state) {
  call(task, global$8, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
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
  call(task, global$8, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};
var bind$7 = function (fn, state, unwrap) {
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
    if (state.facade === value) throw TypeError$2("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind$7(internalResolve, wrapper, state),
            bind$7(internalReject, wrapper, state)
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
if (FORCED$3) {
  PromiseConstructor = function Promise(executor) {
    anInstance$3(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind$7(internalResolve, state), bind$7(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise(executor) {
    setInternalState$3(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll$2(PromisePrototype, {
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reactions = state.reactions;
      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
      reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$4(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      state.parent = true;
      reactions[reactions.length] = reaction;
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind$7(internalResolve, state);
    this.reject = bind$7(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
  if (isCallable$4(NativePromise$1) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;
    if (!SUBCLASSING) {
      redefine$1(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      }, { unsafe: true });
      redefine$1(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) {  }
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}
$$d({ global: true, wrap: true, forced: FORCED$3 }, {
  Promise: PromiseConstructor
});
setToStringTag$1(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);
PromiseWrapper = getBuiltIn$2(PROMISE);
$$d({ target: PROMISE, stat: true, forced: FORCED$3 }, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});
$$d({ target: PROMISE, stat: true, forced: FORCED$3 }, {
  resolve: function resolve(x) {
    return promiseResolve$2(this, x);
  }
});
$$d({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$3(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
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
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate$3(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$c = _export;
var NativePromise = nativePromiseConstructor;
var fails$c = fails$k;
var getBuiltIn$1 = getBuiltIn$9;
var isCallable$3 = isCallable$i;
var speciesConstructor = speciesConstructor$2;
var promiseResolve$1 = promiseResolve$3;
var redefine = redefine$5.exports;
var NON_GENERIC = !!NativePromise && fails$c(function () {
  NativePromise.prototype['finally'].call({ then: function () {  } }, function () {  });
});
$$c({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn$1('Promise'));
    var isFunction = isCallable$3(onFinally);
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
if (isCallable$3(NativePromise)) {
  var method$3 = getBuiltIn$1('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method$3) {
    redefine(NativePromise.prototype, 'finally', method$3, { unsafe: true });
  }
}

var DESCRIPTORS$2 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$8 = functionUncurryThis;
var defineProperty$7 = objectDefineProperty.f;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$8(FunctionPrototype.toString);
var nameRE = /^\s*function ([^ (]*)/;
var regExpExec = uncurryThis$8(nameRE.exec);
var NAME = 'name';
if (DESCRIPTORS$2 && !FUNCTION_NAME_EXISTS) {
  defineProperty$7(FunctionPrototype, NAME, {
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

var runtime = {exports: {}};

(function (module) {
var runtime = (function (exports) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  exports.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  exports.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );
    return exports.isGeneratorFunction(outerFn)
      ? iter
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");
  define(Gp, iteratorSymbol, function() {
    return this;
  });
  define(Gp, "toString", function() {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined$1;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  exports.values = values;
  function doneResult() {
    return { value: undefined$1, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined$1;
        }
        return !! caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined$1;
      }
      return ContinueSentinel;
    }
  };
  return exports;
}(
  module.exports 
));
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
}(runtime));

var regenerator = runtime.exports;

var fails$b = fails$w;
var freezing = !fails$b(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = {exports: {}};

var objectGetOwnPropertyNamesExternal = {};

var classof$2 = classofRaw$3;
var toIndexedObject$1 = toIndexedObject$b;
var $getOwnPropertyNames = objectGetOwnPropertyNames$1.f;
var arraySlice$1 = arraySlice$6;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice$1(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$2(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject$1(it));
};

var fails$a = fails$w;
var arrayBufferNonExtensible = fails$a(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

var fails$9 = fails$w;
var isObject$d = isObject$u;
var classof$1 = classofRaw$3;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES$2 = fails$9(function () { $isExtensible(1); });
var objectIsExtensible = (FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject$d(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$1(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var $$b = _export$1;
var uncurryThis$7 = functionUncurryThis$1;
var hiddenKeys = hiddenKeys$9;
var isObject$c = isObject$u;
var hasOwn$2 = hasOwnProperty_1$1;
var defineProperty$6 = objectDefineProperty$1.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames$1;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible = objectIsExtensible;
var uid = uid$6;
var FREEZING$1 = freezing;
var REQUIRED = false;
var METADATA = uid('meta');
var id$1 = 0;
var setMetadata = function (it) {
  defineProperty$6(it, METADATA, { value: {
    objectID: 'O' + id$1++,
    weakData: {}
  } });
};
var fastKey$1 = function (it, create) {
  if (!isObject$c(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn$2(it, METADATA)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMetadata(it);
  } return it[METADATA].objectID;
};
var getWeakData$1 = function (it, create) {
  if (!hasOwn$2(it, METADATA)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMetadata(it);
  } return it[METADATA].weakData;
};
var onFreeze$1 = function (it) {
  if (FREEZING$1 && REQUIRED && isExtensible(it) && !hasOwn$2(it, METADATA)) setMetadata(it);
  return it;
};
var enable = function () {
  meta.enable = function () {  };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$7([].splice);
  var test = {};
  test[METADATA] = 1;
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };
    $$b({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData$1,
  onFreeze: onFreeze$1
};
hiddenKeys[METADATA] = true;

var $$a = _export$1;
var FREEZING = freezing;
var fails$8 = fails$w;
var isObject$b = isObject$u;
var onFreeze = internalMetadata.exports.onFreeze;
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES$1 = fails$8(function () { $freeze(1); });
$$a({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject$b(it) ? $freeze(onFreeze(it)) : it;
  }
});

var path$9 = path$e;
var freeze$2 = path$9.Object.freeze;

var parent$9 = freeze$2;
var freeze$1 = parent$9;

var freeze = freeze$1;

var classof = classofRaw$3;
var isArray$8 = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

var global$7 = global$1e;
var isArray$7 = isArray$8;
var isConstructor = isConstructor$4;
var isObject$a = isObject$u;
var wellKnownSymbol$2 = wellKnownSymbol$s;
var SPECIES$1 = wellKnownSymbol$2('species');
var Array$2 = global$7.Array;
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$7(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor(C) && (C === Array$2 || isArray$7(C.prototype))) C = undefined;
    else if (isObject$a(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array$2 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$6 = functionBindContext$1;
var uncurryThis$6 = functionUncurryThis$1;
var IndexedObject$1 = indexedObject$1;
var toObject$2 = toObject$7;
var lengthOfArrayLike$1 = lengthOfArrayLike$7;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var push = uncurryThis$6([].push);
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self = IndexedObject$1(O);
    var boundFunction = bind$6(callbackfn, that);
    var length = lengthOfArrayLike$1(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
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
          case 2: push(target, value);
        } else switch (TYPE) {
          case 4: return false;
          case 7: push(target, value);
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  forEach: createMethod$1(0),
  map: createMethod$1(1),
  filter: createMethod$1(2),
  some: createMethod$1(3),
  every: createMethod$1(4),
  find: createMethod$1(5),
  findIndex: createMethod$1(6),
  filterReject: createMethod$1(7)
};

var $$9 = _export$1;
var global$6 = global$1e;
var InternalMetadataModule = internalMetadata.exports;
var fails$7 = fails$w;
var createNonEnumerableProperty = createNonEnumerableProperty$c;
var iterate$2 = iterate$9;
var anInstance$2 = anInstance$6;
var isCallable$2 = isCallable$A;
var isObject$9 = isObject$u;
var setToStringTag = setToStringTag$6;
var defineProperty$5 = objectDefineProperty$1.f;
var forEach$2 = arrayIteration.forEach;
var DESCRIPTORS$1 = descriptors$1;
var InternalStateModule$2 = internalState$1;
var setInternalState$2 = InternalStateModule$2.set;
var internalStateGetterFor$2 = InternalStateModule$2.getterFor;
var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$6[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;
  if (!DESCRIPTORS$1 || !isCallable$2(NativeConstructor)
    || !(IS_WEAK || NativePrototype.forEach && !fails$7(function () { new NativeConstructor().entries().next(); }))
  ) {
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState$2(anInstance$2(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate$2(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor$2(CONSTRUCTOR_NAME);
    forEach$2(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject$9(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });
    IS_WEAK || defineProperty$5(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }
  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$9({ global: true, forced: true }, exported);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

var defineProperty$4 = objectDefineProperty$1.f;
var create = objectCreate;
var redefineAll$1 = redefineAll$5;
var bind$5 = functionBindContext$1;
var anInstance$1 = anInstance$6;
var iterate$1 = iterate$9;
var defineIterator = defineIterator$3;
var setSpecies = setSpecies$4;
var DESCRIPTORS = descriptors$1;
var fastKey = internalMetadata.exports.fastKey;
var InternalStateModule$1 = internalState$1;
var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor$1 = InternalStateModule$1.getterFor;
var collectionStrong$1 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$1(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
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
        if (DESCRIPTORS) state.size++;
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
        if (entry.key == key) return entry;
      }
    };
    redefineAll$1(Prototype, {
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
        if (DESCRIPTORS) state.size = 0;
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
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      forEach: function forEach(callbackfn ) {
        var state = getInternalState(this);
        var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
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
    redefineAll$1(Prototype, IS_MAP ? {
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
    if (DESCRIPTORS) defineProperty$4(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$1(this, {
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
        return { value: undefined, done: true };
      }
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};

var collection$1 = collection$2;
var collectionStrong = collectionStrong$1;
collection$1('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

var path$8 = path$e;
var map$6 = path$8.Map;

var parent$8 = map$6;
var map$5 = parent$8;

var map$4 = map$5;

var promise = promise$4;

var toPropertyKey = toPropertyKey$6;
var definePropertyModule = objectDefineProperty$1;
var createPropertyDescriptor = createPropertyDescriptor$9;
var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var fails$6 = fails$w;
var wellKnownSymbol$1 = wellKnownSymbol$s;
var V8_VERSION$1 = engineV8Version$1;
var SPECIES = wellKnownSymbol$1('species');
var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
  return V8_VERSION$1 >= 51 || !fails$6(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$8 = _export$1;
var global$5 = global$1e;
var fails$5 = fails$w;
var isArray$6 = isArray$8;
var isObject$8 = isObject$u;
var toObject$1 = toObject$7;
var lengthOfArrayLike = lengthOfArrayLike$7;
var createProperty = createProperty$1;
var arraySpeciesCreate = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
var wellKnownSymbol = wellKnownSymbol$s;
var V8_VERSION = engineV8Version$1;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$5.TypeError;
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$5(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');
var isConcatSpreadable = function (O) {
  if (!isObject$8(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$6(O);
};
var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
$$8({ target: 'Array', proto: true, forced: FORCED$2 }, {
  concat: function concat(arg) {
    var O = toObject$1(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER$2) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$2) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var path$7 = path$e;
var entryVirtual$3 = function (CONSTRUCTOR) {
  return path$7[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual$2 = entryVirtual$3;
var concat$4 = entryVirtual$2('Array').concat;

var isPrototypeOf$2 = objectIsPrototypeOf$1;
var method$2 = concat$4;
var ArrayPrototype$2 = Array.prototype;
var concat$3 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.concat) ? method$2 : own;
};

var parent$7 = concat$3;
var concat$2 = parent$7;

var concat$1 = concat$2;

var $$7 = _export$1;
var global$4 = global$1e;
var apply$4 = functionApply$1;
var isCallable$1 = isCallable$A;
var userAgent = engineUserAgent$1;
var arraySlice = arraySlice$6;
var MSIE = /MSIE .\./.test(userAgent);
var Function$1 = global$4.Function;
var wrap = function (scheduler) {
  return function (handler, timeout ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply$4(isCallable$1(handler) ? handler : Function$1(handler), this, args);
    } : handler, timeout);
  };
};
$$7({ global: true, bind: true, forced: MSIE }, {
  setTimeout: wrap(global$4.setTimeout),
  setInterval: wrap(global$4.setInterval)
});

var path$6 = path$e;
var setInterval$1 = path$6.setInterval;

var setInterval = setInterval$1;

var path$5 = path$e;
var setTimeout$2 = path$5.setTimeout;

var setTimeout$1 = setTimeout$2;

var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$5 = functionUncurryThis$1;
var requireObjectCoercible = requireObjectCoercible$7;
var toString$2 = toString$a;
var whitespaces$1 = whitespaces$2;
var replace$1 = uncurryThis$5(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$2(requireObjectCoercible($this));
    if (TYPE & 1) string = replace$1(string, ltrim, '');
    if (TYPE & 2) string = replace$1(string, rtrim, '');
    return string;
  };
};
var stringTrim = {
  start: createMethod(1),
  end: createMethod(2),
  trim: createMethod(3)
};

var global$3 = global$1e;
var fails$4 = fails$w;
var uncurryThis$4 = functionUncurryThis$1;
var toString$1 = toString$a;
var trim$1 = stringTrim.trim;
var whitespaces = whitespaces$2;
var $parseInt$1 = global$3.parseInt;
var Symbol$4 = global$3.Symbol;
var ITERATOR = Symbol$4 && Symbol$4.iterator;
var hex = /^[+-]?0x/i;
var exec$1 = uncurryThis$4(hex.exec);
var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  || (ITERATOR && !fails$4(function () { $parseInt$1(Object(ITERATOR)); }));
var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
  var S = trim$1(toString$1(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$6 = _export$1;
var $parseInt = numberParseInt;
$$6({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var path$4 = path$e;
var _parseInt$2 = path$4.parseInt;

var parent$6 = _parseInt$2;
var _parseInt$1 = parent$6;

var _parseInt = _parseInt$1;

var $$5 = _export$1;
var global$2 = global$1e;
var uncurryThis$3 = functionUncurryThis$1;
var Date$1 = global$2.Date;
var getTime = uncurryThis$3(Date$1.prototype.getTime);
$$5({ target: 'Date', stat: true }, {
  now: function now() {
    return getTime(new Date$1());
  }
});

var path$3 = path$e;
var now$2 = path$3.Date.now;

var parent$5 = now$2;
var now$1 = parent$5;

var now = now$1;

var uncurryThis$2 = functionUncurryThis$1;
var redefineAll = redefineAll$5;
var getWeakData = internalMetadata.exports.getWeakData;
var anObject = anObject$k;
var isObject$7 = isObject$u;
var anInstance = anInstance$6;
var iterate = iterate$9;
var ArrayIterationModule = arrayIteration;
var hasOwn$1 = hasOwnProperty_1$1;
var InternalStateModule = internalState$1;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis$2([].splice);
var id = 0;
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.entries = [];
};
var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};
var collectionWeak$1 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };
    redefineAll(Prototype, {
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject$7(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn$1(data, state.id) && delete data[state.id];
      },
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject$7(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn$1(data, state.id);
      }
    });
    redefineAll(Prototype, IS_MAP ? {
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject$7(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      add: function add(value) {
        return define(this, value, true);
      }
    });
    return Constructor;
  }
};

var collection = collection$2;
var collectionWeak = collectionWeak$1;
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);

var path$2 = path$e;
var weakSet$2 = path$2.WeakSet;

var parent$4 = weakSet$2;
var weakSet$1 = parent$4;

var weakSet = weakSet$1;

var callBind$2 = {exports: {}};

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice$1 = Array.prototype.slice;
var toStr$5 = Object.prototype.toString;
var funcType = '[object Function]';
var implementation$5 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$5.call(target) !== funcType) {
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

var bind$4 = functionBind;
var src = bind$4.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;
var $SyntaxError$1 = SyntaxError;
var $Function = Function;
var $TypeError$5 = TypeError;
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
		$gOPD = null;
	}
}
var throwTypeError = function () {
	throw new $TypeError$5();
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
var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; };
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
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
	'%eval%': eval,
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
	'%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
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
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
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
var bind$3 = functionBind;
var hasOwn = src;
var $concat = bind$3.call(Function.call, Array.prototype.concat);
var $spliceApply = bind$3.call(Function.apply, Array.prototype.splice);
var $replace = bind$3.call(Function.call, String.prototype.replace);
var $strSlice = bind$3.call(Function.call, String.prototype.slice);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
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
		$defineProperty = null;
	}
}
module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
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
}(callBind$2));

var toStr$4 = Object.prototype.toString;
var isArguments$2 = function isArguments(value) {
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
	var isArgs$1 = isArguments$2;
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
var isArgs = isArguments$2;
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
var objectKeys = keysShim;

var keys$6 = objectKeys;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr$2 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction$4 = function (fn) {
	return typeof fn === 'function' && toStr$2.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		for (var _ in obj) {
			return false;
		}
		return obj.x === obj;
	} catch (e) {
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty$3 = function (object, name, value, predicate) {
	if (name in object && (!isFunction$4(predicate) || !predicate())) {
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
	var props = keys$6(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
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
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;
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
		var strClass = toStr$1.call(value);
		return strClass === fnClass || strClass === genClass;
	};

var IsCallable$2 = isCallable;

var IsConstructor$1 = {exports: {}};

var GetIntrinsic$9 = getIntrinsic;

var GetIntrinsic$8 = getIntrinsic;
var has$4 = src;
var $TypeError$4 = GetIntrinsic$8('%TypeError%');
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
		if (has$4(Desc, key) && !allowed[key]) {
			return false;
		}
	}
	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError$4('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};

var GetIntrinsic$7 = getIntrinsic;
var callBind$1 = callBind$2.exports;
var $indexOf = callBind$1(GetIntrinsic$7('String.prototype.indexOf'));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic$7(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind$1(intrinsic);
	}
	return intrinsic;
};

var GetIntrinsic$6 = getIntrinsic;
var $Array = GetIntrinsic$6('%Array%');
var toStr = !$Array.isArray && callBound$1('Object.prototype.toString');
var IsArray = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

var GetIntrinsic$5 = getIntrinsic;
var $defineProperty = GetIntrinsic$5('%Object.defineProperty%', true);
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		$defineProperty = null;
	}
}
var hasArrayLengthDefineBug = Object.defineProperty && Object.defineProperty([], 'length', { value: 1 }).length === 0;
var isArray$5 = hasArrayLengthDefineBug && IsArray;
var callBound = callBound$1;
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var DefineOwnProperty$1 = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
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
		&& isArray$5(O)
		&& O.length !== desc['[[Value]]']
	) {
		O.length = desc['[[Value]]'];
		return O.length === desc['[[Value]]'];
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};

var GetIntrinsic$4 = getIntrinsic;
var $TypeError$3 = GetIntrinsic$4('%TypeError%');
var $SyntaxError = GetIntrinsic$4('%SyntaxError%');
var has$3 = src;
var predicates = {
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
		for (var key in Desc) {
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
var Type$6 = Type$7;
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

var IsPropertyKey$1 = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

var _isNaN = Number.isNaN || function isNaN(a) {
	return a !== a;
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

var has = src;
var GetIntrinsic$3 = getIntrinsic;
var $TypeError$2 = GetIntrinsic$3('%TypeError%');
var Type$3 = Type$7;
var ToBoolean = ToBoolean$1;
var IsCallable$1 = IsCallable$2;
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

var GetIntrinsic$1 = GetIntrinsic$9;
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
var $TypeError = GetIntrinsic('%TypeError%');
var IsConstructor = IsConstructor$1.exports;
var Type$1 = Type$7;
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
function assign (target) {
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

    attributes = assign({}, defaultAttributes, attributes);

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
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
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
var TOKEN_AUTO_SYNC_INTERVAL = 500;
var TOKEN_TYPE = 'token_type';
var TOKEN_SCOPE = 'token_scope';
var TOKEN_CHECK_SUM = 'token_checksum';
var LOGOUT_TIME = 1000 * 86400;
var MAX_REQUEST_TIMES = 20;
var MAX_REQUEST_MESSAGE = 'Number of requests exceeded limit.';

var $$4 = _export$1;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
$$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$1 = entryVirtual$3;
var map$3 = entryVirtual$1('Array').map;

var isPrototypeOf$1 = objectIsPrototypeOf$1;
var method$1 = map$3;
var ArrayPrototype$1 = Array.prototype;
var map$2 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.map) ? method$1 : own;
};

var parent$3 = map$2;
var map$1 = parent$3;

var map = map$1;

var $$3 = _export$1;
var toObject = toObject$7;
var nativeKeys$2 = objectKeys$2;
var fails$3 = fails$w;
var FAILS_ON_PRIMITIVES = fails$3(function () { nativeKeys$2(1); });
$$3({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys$2(toObject(it));
  }
});

var path$1 = path$e;
var keys$5 = path$1.Object.keys;

var parent$2 = keys$5;
var keys$4 = parent$2;

var keys$3 = keys$4;

var fails$2 = fails$k;
var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$2(function () {
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $$2 = _export;
var uncurryThis$1 = functionUncurryThis;
var IndexedObject = indexedObject;
var toIndexedObject = toIndexedObject$5;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
var un$Join = uncurryThis$1([].join);
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD$1 = arrayMethodIsStrict$2('join', ',');
$$2({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function('return this')();
var _root = root$2;

var root$1 = _root;
var Symbol$3 = root$1.Symbol;
var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var nativeObjectToString$1 = objectProto$9.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
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

var objectProto$8 = Object.prototype;
var nativeObjectToString = objectProto$8.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
function baseGetTag$6(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}
var _baseGetTag = baseGetTag$6;

function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject$6;

var baseGetTag$5 = _baseGetTag,
    isObject$5 = isObject_1;
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
function isFunction$3(value) {
  if (!isObject$5(value)) {
    return false;
  }
  var tag = baseGetTag$5(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;

var root = _root;
var coreJsData$1 = root['__core-js_shared__'];
var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
var _isMasked = isMasked$1;

var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource$1;

var isFunction$2 = isFunction_1,
    isMasked = _isMasked,
    isObject$4 = isObject_1,
    toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype,
    objectProto$7 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
function baseIsNative$1(value) {
  if (!isObject$4(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var _getNative = getNative$1;

var getNative = _getNative;
var defineProperty$2 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());
var _defineProperty = defineProperty$2;

var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
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

function eq$2(value, other) {
  return value === other || (value !== value && other !== other);
}
var eq_1 = eq$2;

var baseAssignValue$1 = _baseAssignValue,
    eq$1 = eq_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq$1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;

var assignValue = _assignValue,
    baseAssignValue = _baseAssignValue;
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

function identity$3(value) {
  return value;
}
var identity_1 = identity$3;

function apply$3(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$3;

var apply$2 = _apply;
var nativeMax$1 = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
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
    return apply$2(func, this, otherArgs);
  };
}
var _overRest = overRest$1;

function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;

var constant = constant_1,
    defineProperty = _defineProperty,
    identity$2 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString$1;

var HOT_COUNT = 800,
    HOT_SPAN = 16;
var nativeNow = Date.now;
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
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;

var identity$1 = identity_1,
    overRest = _overRest,
    setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity$1), func + '');
}
var _baseRest = baseRest$1;

var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;

var isFunction$1 = isFunction_1,
    isLength$1 = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$5;

var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
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
    isArrayLike$4 = isArrayLike_1,
    isIndex$1 = _isIndex,
    isObject$3 = isObject_1;
function isIterateeCall$1(value, index, object) {
  if (!isObject$3(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$4(object) && isIndex$1(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;

var baseRest = _baseRest,
    isIterateeCall = _isIterateeCall;
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

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;

function isObjectLike$6(value) {
  return value != null && typeof value == 'object';
}
var isObjectLike_1 = isObjectLike$6;

var baseGetTag$4 = _baseGetTag,
    isObjectLike$5 = isObjectLike_1;
var argsTag$1 = '[object Arguments]';
function baseIsArguments$1(value) {
  return isObjectLike$5(value) && baseGetTag$4(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$4 = isObjectLike_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$4(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments$1;

var isArray$4 = Array.isArray;
var isArray_1 = isArray$4;

var isBuffer$2 = {exports: {}};

function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;

(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;
var freeExports = exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : undefined;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
}(isBuffer$2, isBuffer$2.exports));

var baseGetTag$3 = _baseGetTag,
    isLength = isLength_1,
    isObjectLike$3 = isObjectLike_1;
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag$1 = '[object String]',
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
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$3(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag$3(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;

var _nodeUtil = {exports: {}};

(function (module, exports) {
var freeGlobal = _freeGlobal;
var freeExports = exports && !exports.nodeType && exports;
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());
module.exports = nodeUtil;
}(_nodeUtil, _nodeUtil.exports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$3 = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex = _isIndex,
    isTypedArray = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$3(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           key == 'length' ||
           (isBuff && (key == 'offset' || key == 'parent')) ||
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;

var objectProto$3 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$2;

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

var isObject$2 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike$3 = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike$3(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;

var copyObject = _copyObject,
    createAssigner = _createAssigner,
    keysIn = keysIn_1;
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});
var assignIn_1 = assignIn;

function queryString(params) {
  var _context;
  return map(_context = keys$3(params)).call(_context, function (key) {
    var _context2;
    return concat$1(_context2 = "".concat(key, "=")).call(_context2, params[key]);
  }).join('&');
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function deepMerge() {
  var _context3;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return assignIn_1.apply(void 0, concat$1(_context3 = [null]).call(_context3, args));
}

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray$2(val) {
  return toString.call(val) === '[object Array]';
}
function isUndefined(val) {
  return typeof val === 'undefined';
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}
function isString$2(val) {
  return typeof val === 'string';
}
function isNumber(val) {
  return typeof val === 'number';
}
function isObject$1(val) {
  return val !== null && typeof val === 'object';
}
function isPlainObject$1(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === '[object Date]';
}
function isFile(val) {
  return toString.call(val) === '[object File]';
}
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
function isStream(val) {
  return isObject$1(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
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
function forEach$1(obj, fn) {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  if (typeof obj !== 'object') {
    obj = [obj];
  }
  if (isArray$2(obj)) {
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
    if (isPlainObject$1(result[key]) && isPlainObject$1(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject$1(val)) {
      result[key] = merge({}, val);
    } else if (isArray$2(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach$1(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach$1(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
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
var utils$d = {
  isArray: isArray$2,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString$2,
  isNumber: isNumber,
  isObject: isObject$1,
  isPlainObject: isPlainObject$1,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach$1,
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
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
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
  utils$b.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;

var utils$a = utils$d;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value, name) {
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

var utils$9 = utils$d;
var cookies$1 = (
  utils$9.isStandardBrowserEnv() ?
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));
          if (utils$9.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }
          if (utils$9.isString(path)) {
            cookie.push('path=' + path);
          }
          if (utils$9.isString(domain)) {
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
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
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

var utils$8 = utils$d;
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
  utils$8.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils$8.trim(line.substr(0, i)).toLowerCase();
    val = utils$8.trim(line.substr(i + 1));
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

var utils$7 = utils$d;
var isURLSameOrigin$1 = (
  utils$7.isStandardBrowserEnv() ?
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
        var parsed = (utils$7.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
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

var utils$6 = utils$d;
var settle = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath = buildFullPath$1;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError = createError$2;
var defaults$4 = defaults_1;
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
    if (utils$6.isFormData(requestData)) {
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
      var transitional = config.transitional || defaults$4.transitional;
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
    if (utils$6.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ('setRequestHeader' in request) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          delete requestHeaders[key];
        } else {
          request.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$6.isUndefined(config.withCredentials)) {
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

var utils$5 = utils$d;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
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
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils$5.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
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
    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
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
utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;

var utils$4 = utils$d;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};

var isCancel$2 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var utils$3 = utils$d;
var transformData = transformData$1;
var isCancel$1 = isCancel$2;
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
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
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

var utils$2 = utils$d;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
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
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
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
  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });
  return config;
};

var data = {
  "version": "0.24.0"
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

var utils$1 = utils$d;
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
Axios$1.prototype.request = function request(config) {
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
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
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
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

var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

var utils = utils$d;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);
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
axios$1.isCancel = isCancel$2;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;

var axios = axios$2.exports;

function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;

var overArg$1 = _overArg;
var getPrototype$1 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;

var baseGetTag$2 = _baseGetTag,
    getPrototype = _getPrototype,
    isObjectLike$2 = isObjectLike_1;
var objectTag = '[object Object]';
var funcProto = Function.prototype,
    objectProto$1 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike$2(value) || baseGetTag$2(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;

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
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;

var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
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
    isArrayLike$2 = isArrayLike_1;
function keys$2(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$2;

var baseFor = _baseFor,
    keys$1 = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$1);
}
var _baseForOwn = baseForOwn$1;

var isArrayLike$1 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$1(collection)) {
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
var baseEach$1 = createBaseEach(baseForOwn);
var _baseEach = baseEach$1;

var identity = identity_1;
function castFunction$1(value) {
  return typeof value == 'function' ? value : identity;
}
var _castFunction = castFunction$1;

var arrayEach = _arrayEach,
    baseEach = _baseEach,
    castFunction = _castFunction,
    isArray$1 = isArray_1;
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}
var forEach_1 = forEach;

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
var restPending = new map$4();
var addPending = function addPending(config) {
  var key = [config.method, config.url].join('&');
  config.cancelToken = new axios.CancelToken(function (cancel) {
    if (!restPending.has(key)) restPending.set(key, cancel);
  });
};
var removePending = function removePending(config) {
  var key = [config.method, config.url].join('&');
  if (restPending.has(key)) {
    var cancel = restPending.get(key);
    cancel(key);
    restPending.delete(key);
  }
};
var cancelRequest = function cancelRequest(config) {
  var key = [config.method, config.url].join('&');
  config.cancelToken = new axios.CancelToken(function (cancel) {
    cancel(key);
  });
};
var isCancel = function isCancel(error) {
  return axios.isCancel(error);
};
function checkConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keysArr = [];
  forEach_1(config, function (value, key) {
    if (!Object.prototype.hasOwnProperty.call(baseConfig, key)) {
      keysArr.push(key);
    }
  });
  var diff = keysArr.length && keysArr.length > 0;
  if (diff) console.error("Request config error: [".concat(keysArr, "] not exists!"));
  return diff;
}
var httpRequset = function httpRequset(config) {
  var keyExists = checkConfig(config);
  var newOptions = keyExists ? {} : deepMerge(baseConfig, isPlainObject_1(config) && config);
  return axios.create(newOptions);
};

var fails$1 = fails$w;
var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$1(function () {
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $$1 = _export$1;
var $some = arrayIteration.some;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var STRICT_METHOD = arrayMethodIsStrict('some');
$$1({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn ) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual = entryVirtual$3;
var some$3 = entryVirtual('Array').some;

var isPrototypeOf = objectIsPrototypeOf$1;
var method = some$3;
var ArrayPrototype = Array.prototype;
var some$2 = function (it) {
  var own = it.some;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.some) ? method : own;
};

var parent$1 = some$2;
var some$1 = parent$1;

var some = some$1;

function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);
  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;

function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;

function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;

var baseFindIndex = _baseFindIndex,
    baseIsNaN = _baseIsNaN,
    strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;

var baseGetTag$1 = _baseGetTag,
    isArray = isArray_1,
    isObjectLike$1 = isObjectLike_1;
var stringTag = '[object String]';
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike$1(value) && baseGetTag$1(value) == stringTag);
}
var isString_1 = isString$1;

var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}
var _baseTrim = baseTrim$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;
var symbolTag = '[object Symbol]';
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}
var isSymbol_1 = isSymbol$1;

var baseTrim = _baseTrim,
    isObject = isObject_1,
    isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}
var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;
  return result === result ? (remainder ? result - remainder : result) : 0;
}
var toInteger_1 = toInteger$1;

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;

var arrayMap = _arrayMap;
function baseValues$1(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
var _baseValues = baseValues$1;

var baseValues = _baseValues,
    keys = keys_1;
function values$1(object) {
  return object == null ? [] : baseValues(object, keys(object));
}
var values_1 = values$1;

var baseIndexOf = _baseIndexOf,
    isArrayLike = isArrayLike_1,
    isString = isString_1,
    toInteger = toInteger_1,
    values = values_1;
var nativeMax = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}
var includes_1 = includes;

var $ = _export$1;
var global$1 = global$1e;
var getBuiltIn = getBuiltIn$j;
var apply$1 = functionApply$1;
var uncurryThis = functionUncurryThis$1;
var fails = fails$w;
var Array$1 = global$1.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var fix = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};
var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});
if ($stringify) {
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++) args[i] = arguments[i];
      var result = apply$1($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}

var path = path$e;
var apply = functionApply$1;
if (!path.JSON) path.JSON = { stringify: JSON.stringify };
var stringify$2 = function stringify(it, replacer, space) {
  return apply(path.JSON.stringify, null, arguments);
};

var parent = stringify$2;
var stringify$1 = parent;

var stringify = stringify$1;

var errorMsg = {
  typeVerify: function typeVerify(type) {
    return "[Type Error]: Must be a '".concat(type, "'.");
  }
};
var stringTypeVerify = function stringTypeVerify(string) {
  return !(!isString_1(string) && console.error(errorMsg.typeVerify('string')));
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
  var accessKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  forEach_1(keys, function (value, key) {
    if (some(accessKeys).call(accessKeys, function (token) {
      return includes_1(key, token);
    })) {
      webStorage.set(key, value);
    }
  });
};
var removeTokens = function removeToken() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  forEach_1(keys, function (value) {
    webStorage.remove(value);
  });
};

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
promise_prototype_finally.shim();
var DEFAULTS = freeze({
  sso_url: '',
  cookie_prefix: '',
  redirect_url: '',
  xhr_with: false
});
var _interceptors = new weakSet();
var _reset = new weakSet();
var _autoLogout = new weakSet();
var _exception = new weakSet();
var TokenInjection = function () {
  function TokenInjection() {
    var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, TokenInjection);
    _classPrivateMethodInitSpec(this, _exception);
    _classPrivateMethodInitSpec(this, _autoLogout);
    _classPrivateMethodInitSpec(this, _reset);
    _classPrivateMethodInitSpec(this, _interceptors);
    this.options = deepMerge(DEFAULTS, _options);
    this.tokenKeys = [ACCESS_TOKEN_NAME, TOKEN_EXPIRED_NAME, TOKEN_TYPE, TOKEN_SCOPE, REFRESH_TOKEN_NAME, TOKEN_CHECK_SUM, TOKEN_CREATE_TIME_NAME];
    this.axiosPending = new map$4();
    this.intervalSync = null;
    this.intervalRefresh = null;
    this.syncTimes = 0;
    this.refreshTimes = 0;
    this.rest = httpRequset({
      baseURL: this.options.sso_url,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    _classPrivateMethodGet(this, _interceptors, _interceptors2).call(this);
    this.init();
  }
  _createClass(TokenInjection, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( regenerator.mark(function _callee() {
        var instance;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                instance = this;
                _context.next = 3;
                return instance.sync().then(function (res) {
                  instance.autoSync();
                  instance.autoRefresh();
                  _classPrivateMethodGet(instance, _autoLogout, _autoLogout2).call(instance);
                  return res;
                }).catch(function (error) {
                  return error;
                });
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "sync",
    value: function sync() {
      var instance = this;
      var rest = this.rest,
          tokenKeys = this.tokenKeys;
      return new promise(function (resolve, reject) {
        rest.get(api.sync).then(function (res) {
          var tokenInfo = res.data || {};
          if (res.request.readyState === 4) {
            instance.axiosPending.set('sync', true);
          }
          if (instance.syncTimes >= MAX_REQUEST_TIMES) {
            reject(res);
          }
          instance.syncTimes += 1;
          res.syncTimes = instance.syncTimes;
          setTokens(tokenKeys, tokenInfo);
          resolve(res);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var instance = this;
      var rest = this.rest;
      var refreshToken = webStorage.get(REFRESH_TOKEN_NAME);
      if (!refreshToken) {
        throw _classPrivateMethodGet(instance, _exception, _exception2).call(instance, 'Need Refresh Token !', 401);
      }
      return new promise(function (resolve, reject) {
        var _context2;
        rest.post(concat$1(_context2 = "".concat(api.refresh, "?v=")).call(_context2, rand(11111, 99999)), queryString({
          refresh_token: refreshToken
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (res) {
          if (res.request.readyState === 4) {
            instance.axiosPending.set('refresh', true);
          }
          if (instance.refreshTimes >= MAX_REQUEST_TIMES) {
            reject(res);
          }
          instance.refreshTimes += 1;
          res.refreshTimes = instance.refreshTimes;
          resolve(res);
        }).catch(function (error) {
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
      var tkCheckSum = "".concat(options.cookie_prefix, "tkchecksum") || 'tkchecksum';
      var syncPending = instance.axiosPending.get('sync');
      var checkSumNoEqual = function checkSumNoEqual() {
        return api$1.get(tkCheckSum) !== webStorage.get('token_checksum');
      };
      if (!instance.intervalSync) {
        instance.intervalSync = setInterval( _asyncToGenerator( regenerator.mark(function _callee2() {
          return regenerator.wrap(function _callee2$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(checkSumNoEqual() && !syncPending)) {
                    _context3.next = 3;
                    break;
                  }
                  _context3.next = 3;
                  return instance.sync().then().catch(function (error) {
                    if (error.syncTimes && error.syncTimes >= MAX_REQUEST_TIMES) {
                      alert(MAX_REQUEST_MESSAGE);
                      instance.logoutIAM();
                    }
                    instance.autoSyncStop();
                    setTimeout$1(function () {
                      return instance.autoSync();
                    }, 30000);
                  });
                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee2);
        })), interval * 500 || TOKEN_AUTO_SYNC_INTERVAL);
      }
    }
  }, {
    key: "autoSyncStop",
    value: function autoSyncStop() {
      var instance = this;
      if (instance.intervalSync) {
        clearInterval(instance.intervalSync);
        instance.intervalSync = null;
        instance.axiosPending.set('sync', false);
      }
    }
  }, {
    key: "autoRefresh",
    value: function autoRefresh() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var instance = this;
      var refreshStop = function refreshStop() {
        instance.autoRefreshStop();
        setTimeout$1(function () {
          return instance.autoRefresh();
        }, 30000);
      };
      if (!instance.intervalRefresh) {
        var refreshPending = instance.axiosPending.get('refresh');
        instance.intervalRefresh = setInterval(function () {
          try {
            var nowTime = _parseInt(now() / 1000, 10);
            var createKey = webStorage.get(TOKEN_CREATE_TIME_NAME);
            var createTime = _parseInt(createKey, 10);
            var expiredKey = webStorage.get(TOKEN_EXPIRED_NAME);
            var expireTime = _parseInt(expiredKey, 10);
            var refreshTime = createTime + expireTime - TOKEN_REFRESH_BEFORE;
            if (nowTime >= refreshTime && !refreshPending) {
              instance.refresh().then().catch(function (error) {
                if (error.refreshTimes && error.refreshTimes >= MAX_REQUEST_TIMES) {
                  alert(MAX_REQUEST_MESSAGE);
                  instance.logoutIAM();
                }
                refreshStop();
              });
            }
          } catch (e) {
            var _context4;
            console.log(concat$1(_context4 = "[".concat(e.code, "]")).call(_context4, e.message));
            refreshStop();
          }
        }, interval * 1000 || TOKEN_AUTO_REFRESH_INTERVAL * 1000);
      }
    }
  }, {
    key: "autoRefreshStop",
    value: function autoRefreshStop() {
      var instance = this;
      if (instance.intervalRefresh) {
        clearInterval(instance.intervalRefresh);
        instance.intervalRefresh = null;
        instance.axiosPending.set('refresh', false);
      }
    }
  }, {
    key: "validate",
    value: function validate(token) {
      var rest = this.rest;
      var validateToken = token || '';
      return new promise(function (resolve, reject) {
        var _context5;
        rest.get(concat$1(_context5 = "".concat(api.validate, "?v=")).call(_context5, rand(11111, 99999)), {
          headers: {
            Authorization: "Bearer ".concat(validateToken)
          }
        }).then(function (res) {
          resolve(res);
        }).catch(function (error) {
          reject(error);
        }).finally(function () {
        });
      });
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return webStorage.get(ACCESS_TOKEN_NAME);
    }
  }, {
    key: "loginIAM",
    value: function loginIAM() {
      var _context6;
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = this.options;
      var ssoUrl = concat$1(_context6 = "".concat(options.sso_url, "/login?redirect_uri=")).call(_context6, options.redirect_url) || '';
      window.open(ssoUrl, target || '_self');
    }
  }, {
    key: "logoutIAM",
    value: function logoutIAM() {
      var instance = this;
      var options = this.options;
      _classPrivateMethodGet(instance, _reset, _reset2).call(instance).then(function () {
        window.location.href = "".concat(options.sso_url, "/logout");
      });
    }
  }, {
    key: "isLogin",
    value: function isLogin() {
      var options = this.options;
      var loginKey = "".concat(options.cookie_prefix, "login") || 'login';
      var loginCookie = api$1.get(loginKey);
      return loginCookie && loginCookie === '1';
    }
  }, {
    key: "axiosCreate",
    value: function axiosCreate() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var instance = this;
      instance.options.sso_url = config.baseURL || '';
      instance.rest = httpRequset(config);
      return instance;
    }
  }]);
  return TokenInjection;
}();
function _interceptors2() {
  var instance = this;
  var options = this.options,
      rest = this.rest;
  rest.interceptors.request.use(function (config) {
    if (!options.xhr_with) delete config.headers['X-Requested-With'];
    removePending(config);
    if (instance.isLogin()) {
      addPending(config);
    } else {
      cancelRequest(config);
    }
    return config;
  }, function (error) {
    return promise.reject(error);
  });
  rest.interceptors.response.use(function (res) {
    removePending(res);
    return res;
  }, function (error) {
    if (isCancel(error)) {
      _classPrivateMethodGet(instance, _reset, _reset2).call(instance).then(function () {
        instance.loginIAM();
      });
    }
    return promise.reject(error);
  });
}
function _reset2() {
  return _reset3.apply(this, arguments);
}
function _reset3() {
  _reset3 = _asyncToGenerator( regenerator.mark(function _callee3() {
    var instance;
    return regenerator.wrap(function _callee3$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            instance = this;
            removeTokens(instance.tokenKeys);
            instance.axiosPending.clear();
            instance.intervalSync = null;
            instance.intervalRefresh = null;
            instance.syncTimes = 0;
            instance.refreshTimes = 0;
          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee3, this);
  }));
  return _reset3.apply(this, arguments);
}
function _autoLogout2() {
  var instance = this;
  setTimeout$1(function () {
    return instance.logoutIAM();
  }, LOGOUT_TIME);
}
function _exception2(messageIpt, codeIpt) {
  this.code = codeIpt || 200;
  this.message = messageIpt || 'OK';
  this.name = 'exception';
}

module.exports = TokenInjection;
