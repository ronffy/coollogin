/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! babel-polyfill */1);
	module.exports = __webpack_require__(/*! ./src/js/index */298);


/***/ }),
/* 1 */
/*!***************************************!*\
  !*** ./~/babel-polyfill/lib/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(/*! core-js/shim */ 2);
	
	__webpack_require__(/*! regenerator-runtime/runtime */ 293);
	
	__webpack_require__(/*! core-js/fn/regexp/escape */ 295);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./~/core-js/shim.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./modules/es6.symbol */ 3);
	__webpack_require__(/*! ./modules/es6.object.create */ 52);
	__webpack_require__(/*! ./modules/es6.object.define-property */ 53);
	__webpack_require__(/*! ./modules/es6.object.define-properties */ 54);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ 55);
	__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ 57);
	__webpack_require__(/*! ./modules/es6.object.keys */ 60);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ 61);
	__webpack_require__(/*! ./modules/es6.object.freeze */ 62);
	__webpack_require__(/*! ./modules/es6.object.seal */ 63);
	__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ 64);
	__webpack_require__(/*! ./modules/es6.object.is-frozen */ 65);
	__webpack_require__(/*! ./modules/es6.object.is-sealed */ 66);
	__webpack_require__(/*! ./modules/es6.object.is-extensible */ 67);
	__webpack_require__(/*! ./modules/es6.object.assign */ 68);
	__webpack_require__(/*! ./modules/es6.object.is */ 70);
	__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ 72);
	__webpack_require__(/*! ./modules/es6.object.to-string */ 74);
	__webpack_require__(/*! ./modules/es6.function.bind */ 76);
	__webpack_require__(/*! ./modules/es6.function.name */ 79);
	__webpack_require__(/*! ./modules/es6.function.has-instance */ 80);
	__webpack_require__(/*! ./modules/es6.parse-int */ 81);
	__webpack_require__(/*! ./modules/es6.parse-float */ 85);
	__webpack_require__(/*! ./modules/es6.number.constructor */ 87);
	__webpack_require__(/*! ./modules/es6.number.to-fixed */ 89);
	__webpack_require__(/*! ./modules/es6.number.to-precision */ 92);
	__webpack_require__(/*! ./modules/es6.number.epsilon */ 93);
	__webpack_require__(/*! ./modules/es6.number.is-finite */ 94);
	__webpack_require__(/*! ./modules/es6.number.is-integer */ 95);
	__webpack_require__(/*! ./modules/es6.number.is-nan */ 97);
	__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ 98);
	__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ 99);
	__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ 100);
	__webpack_require__(/*! ./modules/es6.number.parse-float */ 101);
	__webpack_require__(/*! ./modules/es6.number.parse-int */ 102);
	__webpack_require__(/*! ./modules/es6.math.acosh */ 103);
	__webpack_require__(/*! ./modules/es6.math.asinh */ 105);
	__webpack_require__(/*! ./modules/es6.math.atanh */ 106);
	__webpack_require__(/*! ./modules/es6.math.cbrt */ 107);
	__webpack_require__(/*! ./modules/es6.math.clz32 */ 109);
	__webpack_require__(/*! ./modules/es6.math.cosh */ 110);
	__webpack_require__(/*! ./modules/es6.math.expm1 */ 111);
	__webpack_require__(/*! ./modules/es6.math.fround */ 113);
	__webpack_require__(/*! ./modules/es6.math.hypot */ 114);
	__webpack_require__(/*! ./modules/es6.math.imul */ 115);
	__webpack_require__(/*! ./modules/es6.math.log10 */ 116);
	__webpack_require__(/*! ./modules/es6.math.log1p */ 117);
	__webpack_require__(/*! ./modules/es6.math.log2 */ 118);
	__webpack_require__(/*! ./modules/es6.math.sign */ 119);
	__webpack_require__(/*! ./modules/es6.math.sinh */ 120);
	__webpack_require__(/*! ./modules/es6.math.tanh */ 121);
	__webpack_require__(/*! ./modules/es6.math.trunc */ 122);
	__webpack_require__(/*! ./modules/es6.string.from-code-point */ 123);
	__webpack_require__(/*! ./modules/es6.string.raw */ 124);
	__webpack_require__(/*! ./modules/es6.string.trim */ 125);
	__webpack_require__(/*! ./modules/es6.string.iterator */ 126);
	__webpack_require__(/*! ./modules/es6.string.code-point-at */ 131);
	__webpack_require__(/*! ./modules/es6.string.ends-with */ 132);
	__webpack_require__(/*! ./modules/es6.string.includes */ 136);
	__webpack_require__(/*! ./modules/es6.string.repeat */ 137);
	__webpack_require__(/*! ./modules/es6.string.starts-with */ 138);
	__webpack_require__(/*! ./modules/es6.string.anchor */ 139);
	__webpack_require__(/*! ./modules/es6.string.big */ 141);
	__webpack_require__(/*! ./modules/es6.string.blink */ 142);
	__webpack_require__(/*! ./modules/es6.string.bold */ 143);
	__webpack_require__(/*! ./modules/es6.string.fixed */ 144);
	__webpack_require__(/*! ./modules/es6.string.fontcolor */ 145);
	__webpack_require__(/*! ./modules/es6.string.fontsize */ 146);
	__webpack_require__(/*! ./modules/es6.string.italics */ 147);
	__webpack_require__(/*! ./modules/es6.string.link */ 148);
	__webpack_require__(/*! ./modules/es6.string.small */ 149);
	__webpack_require__(/*! ./modules/es6.string.strike */ 150);
	__webpack_require__(/*! ./modules/es6.string.sub */ 151);
	__webpack_require__(/*! ./modules/es6.string.sup */ 152);
	__webpack_require__(/*! ./modules/es6.date.now */ 153);
	__webpack_require__(/*! ./modules/es6.date.to-json */ 154);
	__webpack_require__(/*! ./modules/es6.date.to-iso-string */ 155);
	__webpack_require__(/*! ./modules/es6.date.to-string */ 156);
	__webpack_require__(/*! ./modules/es6.date.to-primitive */ 157);
	__webpack_require__(/*! ./modules/es6.array.is-array */ 159);
	__webpack_require__(/*! ./modules/es6.array.from */ 160);
	__webpack_require__(/*! ./modules/es6.array.of */ 166);
	__webpack_require__(/*! ./modules/es6.array.join */ 167);
	__webpack_require__(/*! ./modules/es6.array.slice */ 169);
	__webpack_require__(/*! ./modules/es6.array.sort */ 170);
	__webpack_require__(/*! ./modules/es6.array.for-each */ 171);
	__webpack_require__(/*! ./modules/es6.array.map */ 175);
	__webpack_require__(/*! ./modules/es6.array.filter */ 176);
	__webpack_require__(/*! ./modules/es6.array.some */ 177);
	__webpack_require__(/*! ./modules/es6.array.every */ 178);
	__webpack_require__(/*! ./modules/es6.array.reduce */ 179);
	__webpack_require__(/*! ./modules/es6.array.reduce-right */ 181);
	__webpack_require__(/*! ./modules/es6.array.index-of */ 182);
	__webpack_require__(/*! ./modules/es6.array.last-index-of */ 183);
	__webpack_require__(/*! ./modules/es6.array.copy-within */ 184);
	__webpack_require__(/*! ./modules/es6.array.fill */ 187);
	__webpack_require__(/*! ./modules/es6.array.find */ 189);
	__webpack_require__(/*! ./modules/es6.array.find-index */ 190);
	__webpack_require__(/*! ./modules/es6.array.species */ 191);
	__webpack_require__(/*! ./modules/es6.array.iterator */ 193);
	__webpack_require__(/*! ./modules/es6.regexp.constructor */ 195);
	__webpack_require__(/*! ./modules/es6.regexp.to-string */ 197);
	__webpack_require__(/*! ./modules/es6.regexp.flags */ 198);
	__webpack_require__(/*! ./modules/es6.regexp.match */ 199);
	__webpack_require__(/*! ./modules/es6.regexp.replace */ 201);
	__webpack_require__(/*! ./modules/es6.regexp.search */ 202);
	__webpack_require__(/*! ./modules/es6.regexp.split */ 203);
	__webpack_require__(/*! ./modules/es6.promise */ 204);
	__webpack_require__(/*! ./modules/es6.map */ 211);
	__webpack_require__(/*! ./modules/es6.set */ 214);
	__webpack_require__(/*! ./modules/es6.weak-map */ 215);
	__webpack_require__(/*! ./modules/es6.weak-set */ 217);
	__webpack_require__(/*! ./modules/es6.typed.array-buffer */ 218);
	__webpack_require__(/*! ./modules/es6.typed.data-view */ 221);
	__webpack_require__(/*! ./modules/es6.typed.int8-array */ 222);
	__webpack_require__(/*! ./modules/es6.typed.uint8-array */ 224);
	__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ 225);
	__webpack_require__(/*! ./modules/es6.typed.int16-array */ 226);
	__webpack_require__(/*! ./modules/es6.typed.uint16-array */ 227);
	__webpack_require__(/*! ./modules/es6.typed.int32-array */ 228);
	__webpack_require__(/*! ./modules/es6.typed.uint32-array */ 229);
	__webpack_require__(/*! ./modules/es6.typed.float32-array */ 230);
	__webpack_require__(/*! ./modules/es6.typed.float64-array */ 231);
	__webpack_require__(/*! ./modules/es6.reflect.apply */ 232);
	__webpack_require__(/*! ./modules/es6.reflect.construct */ 233);
	__webpack_require__(/*! ./modules/es6.reflect.define-property */ 234);
	__webpack_require__(/*! ./modules/es6.reflect.delete-property */ 235);
	__webpack_require__(/*! ./modules/es6.reflect.enumerate */ 236);
	__webpack_require__(/*! ./modules/es6.reflect.get */ 237);
	__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ 238);
	__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ 239);
	__webpack_require__(/*! ./modules/es6.reflect.has */ 240);
	__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ 241);
	__webpack_require__(/*! ./modules/es6.reflect.own-keys */ 242);
	__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ 244);
	__webpack_require__(/*! ./modules/es6.reflect.set */ 245);
	__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ 246);
	__webpack_require__(/*! ./modules/es7.array.includes */ 247);
	__webpack_require__(/*! ./modules/es7.string.at */ 248);
	__webpack_require__(/*! ./modules/es7.string.pad-start */ 249);
	__webpack_require__(/*! ./modules/es7.string.pad-end */ 251);
	__webpack_require__(/*! ./modules/es7.string.trim-left */ 252);
	__webpack_require__(/*! ./modules/es7.string.trim-right */ 253);
	__webpack_require__(/*! ./modules/es7.string.match-all */ 254);
	__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ 255);
	__webpack_require__(/*! ./modules/es7.symbol.observable */ 256);
	__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ 257);
	__webpack_require__(/*! ./modules/es7.object.values */ 258);
	__webpack_require__(/*! ./modules/es7.object.entries */ 260);
	__webpack_require__(/*! ./modules/es7.object.define-getter */ 261);
	__webpack_require__(/*! ./modules/es7.object.define-setter */ 263);
	__webpack_require__(/*! ./modules/es7.object.lookup-getter */ 264);
	__webpack_require__(/*! ./modules/es7.object.lookup-setter */ 265);
	__webpack_require__(/*! ./modules/es7.map.to-json */ 266);
	__webpack_require__(/*! ./modules/es7.set.to-json */ 269);
	__webpack_require__(/*! ./modules/es7.system.global */ 270);
	__webpack_require__(/*! ./modules/es7.error.is-error */ 271);
	__webpack_require__(/*! ./modules/es7.math.iaddh */ 272);
	__webpack_require__(/*! ./modules/es7.math.isubh */ 273);
	__webpack_require__(/*! ./modules/es7.math.imulh */ 274);
	__webpack_require__(/*! ./modules/es7.math.umulh */ 275);
	__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ 276);
	__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ 278);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ 279);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ 280);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ 281);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ 282);
	__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ 283);
	__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ 284);
	__webpack_require__(/*! ./modules/es7.reflect.metadata */ 285);
	__webpack_require__(/*! ./modules/es7.asap */ 286);
	__webpack_require__(/*! ./modules/es7.observable */ 287);
	__webpack_require__(/*! ./modules/web.timers */ 288);
	__webpack_require__(/*! ./modules/web.immediate */ 291);
	__webpack_require__(/*! ./modules/web.dom.iterable */ 292);
	module.exports = __webpack_require__(/*! ./modules/_core */ 9);

/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/es6.symbol.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    has = __webpack_require__(/*! ./_has */ 5),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    META = __webpack_require__(/*! ./_meta */ 22).KEY,
	    $fails = __webpack_require__(/*! ./_fails */ 7),
	    shared = __webpack_require__(/*! ./_shared */ 23),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24),
	    uid = __webpack_require__(/*! ./_uid */ 19),
	    wks = __webpack_require__(/*! ./_wks */ 25),
	    wksExt = __webpack_require__(/*! ./_wks-ext */ 26),
	    wksDefine = __webpack_require__(/*! ./_wks-define */ 27),
	    keyOf = __webpack_require__(/*! ./_keyof */ 29),
	    enumKeys = __webpack_require__(/*! ./_enum-keys */ 42),
	    isArray = __webpack_require__(/*! ./_is-array */ 45),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17),
	    _create = __webpack_require__(/*! ./_object-create */ 46),
	    gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 49),
	    $GOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	    $DP = __webpack_require__(/*! ./_object-dp */ 11),
	    $keys = __webpack_require__(/*! ./_object-keys */ 30),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(/*! ./_object-gopn */ 50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(/*! ./_object-pie */ 44).f = $propertyIsEnumerable;
	  __webpack_require__(/*! ./_object-gops */ 43).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_global.js ***!
  \**************************************/
/***/ (function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_has.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_descriptors.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 7)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_fails.js ***!
  \*************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ }),
/* 8 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_export.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    core = __webpack_require__(/*! ./_core */ 9),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    ctx = __webpack_require__(/*! ./_ctx */ 20),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 9 */
/*!************************************!*\
  !*** ./~/core-js/modules/_core.js ***!
  \************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./~/core-js/modules/_hide.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(/*! ./_object-dp */ 11),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17);
	module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 11 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_object-dp.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(/*! ./_an-object */ 12),
	    IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 14),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 12 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_an-object.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 13 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_is-object.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 14 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(/*! ./_descriptors */ 6) && !__webpack_require__(/*! ./_fails */ 7)(function () {
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 15)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 15 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_dom-create.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    document = __webpack_require__(/*! ./_global */ 4).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_to-primitive.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 17 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_property-desc.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ }),
/* 18 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_redefine.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    has = __webpack_require__(/*! ./_has */ 5),
	    SRC = __webpack_require__(/*! ./_uid */ 19)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(/*! ./_core */ 9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ }),
/* 19 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_uid.js ***!
  \***********************************/
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 20 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_ctx.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 21 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_a-function.js ***!
  \******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 22 */
/*!************************************!*\
  !*** ./~/core-js/modules/_meta.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var META = __webpack_require__(/*! ./_uid */ 19)('meta'),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    has = __webpack_require__(/*! ./_has */ 5),
	    setDesc = __webpack_require__(/*! ./_object-dp */ 11).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(/*! ./_fails */ 7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 23 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_shared.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 24 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(/*! ./_object-dp */ 11).f,
	    has = __webpack_require__(/*! ./_has */ 5),
	    TAG = __webpack_require__(/*! ./_wks */ 25)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_wks.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(/*! ./_shared */ 23)('wks'),
	    uid = __webpack_require__(/*! ./_uid */ 19),
	    _Symbol = __webpack_require__(/*! ./_global */ 4).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 26 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_wks-ext.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(/*! ./_wks */ 25);

/***/ }),
/* 27 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_wks-define.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    core = __webpack_require__(/*! ./_core */ 9),
	    LIBRARY = __webpack_require__(/*! ./_library */ 28),
	    wksExt = __webpack_require__(/*! ./_wks-ext */ 26),
	    defineProperty = __webpack_require__(/*! ./_object-dp */ 11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ }),
/* 28 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_library.js ***!
  \***************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ }),
/* 29 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_keyof.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(/*! ./_object-keys */ 30),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ }),
/* 30 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-keys.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 31),
	    enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 31 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/_object-keys-internal.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(/*! ./_has */ 5),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 36)(false),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ }),
/* 32 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-iobject.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 33),
	    defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ }),
/* 33 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_iobject.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 34 */
/*!***********************************!*\
  !*** ./~/core-js/modules/_cof.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 35 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_defined.js ***!
  \***************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 36 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_array-includes.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 37 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-length.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 38 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_to-integer.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 39 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_to-index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 40 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_shared-key.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(/*! ./_shared */ 23)('keys'),
	    uid = __webpack_require__(/*! ./_uid */ 19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 41 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 42 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_enum-keys.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(/*! ./_object-keys */ 30),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 43),
	    pIE = __webpack_require__(/*! ./_object-pie */ 44);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ }),
/* 43 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gops.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 44 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-pie.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 45 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_is-array.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 46 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_object-create.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(/*! ./_an-object */ 12),
	    dPs = __webpack_require__(/*! ./_object-dps */ 47),
	    enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 15)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-dps.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(/*! ./_object-dp */ 11),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    getKeys = __webpack_require__(/*! ./_object-keys */ 30);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ }),
/* 48 */
/*!************************************!*\
  !*** ./~/core-js/modules/_html.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./_global */ 4).document && document.documentElement;

/***/ }),
/* 49 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_object-gopn-ext.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 50).f,
	    toString = {}.toString;
	
	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gopn.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 31),
	    hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 51 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_object-gopd.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(/*! ./_object-pie */ 44),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    has = __webpack_require__(/*! ./_has */ 5),
	    IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 14),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 52 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.create.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 46) });

/***/ }),
/* 53 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.object.define-property.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 6), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 11).f });

/***/ }),
/* 54 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.object.define-properties.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 6), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ 47) });

/***/ }),
/* 55 */
/*!*********************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	__webpack_require__(/*! ./_object-sap */ 56)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 56 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-sap.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 8),
	    core = __webpack_require__(/*! ./_core */ 9),
	    fails = __webpack_require__(/*! ./_fails */ 7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ }),
/* 57 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 58),
	    $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59);
	
	__webpack_require__(/*! ./_object-sap */ 56)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 58 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_to-object.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ }),
/* 59 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_object-gpo.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(/*! ./_has */ 5),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 60 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.keys.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 58),
	    $keys = __webpack_require__(/*! ./_object-keys */ 30);
	
	__webpack_require__(/*! ./_object-sap */ 56)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 61 */
/*!****************************************************************!*\
  !*** ./~/core-js/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(/*! ./_object-sap */ 56)('getOwnPropertyNames', function () {
	  return __webpack_require__(/*! ./_object-gopn-ext */ 49).f;
	});

/***/ }),
/* 62 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.freeze.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    meta = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ }),
/* 63 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.object.seal.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    meta = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es6.object.prevent-extensions.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    meta = __webpack_require__(/*! ./_meta */ 22).onFreeze;
	
	__webpack_require__(/*! ./_object-sap */ 56)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ }),
/* 65 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-frozen.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ }),
/* 66 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-sealed.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ }),
/* 67 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.object.is-extensible.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	__webpack_require__(/*! ./_object-sap */ 56)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ }),
/* 68 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.object.assign.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 69) });

/***/ }),
/* 69 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_object-assign.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(/*! ./_object-keys */ 30),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 43),
	    pIE = __webpack_require__(/*! ./_object-pie */ 44),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    IObject = __webpack_require__(/*! ./_iobject */ 33),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 7)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ }),
/* 70 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.object.is.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ 71) });

/***/ }),
/* 71 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_same-value.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 73).set });

/***/ }),
/* 73 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_set-proto.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(/*! ./_ctx */ 20)(Function.call, __webpack_require__(/*! ./_object-gopd */ 51).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 74 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.object.to-string.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(/*! ./_classof */ 75),
	    test = {};
	test[__webpack_require__(/*! ./_wks */ 25)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(/*! ./_redefine */ 18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ }),
/* 75 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_classof.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 34),
	    TAG = __webpack_require__(/*! ./_wks */ 25)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 76 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.function.bind.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ 77) });

/***/ }),
/* 77 */
/*!************************************!*\
  !*** ./~/core-js/modules/_bind.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    invoke = __webpack_require__(/*! ./_invoke */ 78),
	    arraySlice = [].slice,
	    factories = {};
	
	var construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */) {
	  var fn = aFunction(this),
	      partArgs = arraySlice.call(arguments, 1);
	  var bound = function bound() /* args... */{
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

/***/ }),
/* 78 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_invoke.js ***!
  \**************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ }),
/* 79 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.function.name.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(/*! ./_object-dp */ 11).f,
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17),
	    has = __webpack_require__(/*! ./_has */ 5),
	    FProto = Function.prototype,
	    nameRE = /^\s*function ([^ (]*)/,
	    NAME = 'name';
	
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(/*! ./_descriptors */ 6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      var that = this,
	          name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch (e) {
	      return '';
	    }
	  }
	});

/***/ }),
/* 80 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.function.has-instance.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    HAS_INSTANCE = __webpack_require__(/*! ./_wks */ 25)('hasInstance'),
	    FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ 11).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	    if (typeof this != 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    }return false;
	  } });

/***/ }),
/* 81 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.parse-int.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $parseInt = __webpack_require__(/*! ./_parse-int */ 82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ }),
/* 82 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_parse-int.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseInt = __webpack_require__(/*! ./_global */ 4).parseInt,
	    $trim = __webpack_require__(/*! ./_string-trim */ 83).trim,
	    ws = __webpack_require__(/*! ./_string-ws */ 84),
	    hex = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ }),
/* 83 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_string-trim.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    defined = __webpack_require__(/*! ./_defined */ 35),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    spaces = __webpack_require__(/*! ./_string-ws */ 84),
	    space = '[' + spaces + ']',
	    non = '\u200B\x85',
	    ltrim = RegExp('^' + space + space + '*'),
	    rtrim = RegExp(space + space + '*$');
	
	var exporter = function exporter(KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ }),
/* 84 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_string-ws.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 85 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.parse-float.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $parseFloat = __webpack_require__(/*! ./_parse-float */ 86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ }),
/* 86 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_parse-float.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseFloat = __webpack_require__(/*! ./_global */ 4).parseFloat,
	    $trim = __webpack_require__(/*! ./_string-trim */ 83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ 84) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3),
	      result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ }),
/* 87 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.constructor.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    has = __webpack_require__(/*! ./_has */ 5),
	    cof = __webpack_require__(/*! ./_cof */ 34),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 50).f,
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 51).f,
	    dP = __webpack_require__(/*! ./_object-dp */ 11).f,
	    $trim = __webpack_require__(/*! ./_string-trim */ 83).trim,
	    NUMBER = 'Number',
	    $Number = global[NUMBER],
	    Base = $Number,
	    proto = $Number.prototype
	// Opera ~12 has broken Object#toString
	,
	    BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ 46)(proto)) == NUMBER,
	    TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0),
	        third,
	        radix,
	        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }return parseInt(digits, radix);
	    }
	  }return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value,
	        that = this;
	    return that instanceof $Number
	    // check on 1..constructor(foo) case
	    && (BROKEN_COF ? fails(function () {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(/*! ./_descriptors */ 6) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(/*! ./_redefine */ 18)(global, NUMBER, $Number);
	}

/***/ }),
/* 88 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_inherit-if-required.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    setPrototypeOf = __webpack_require__(/*! ./_set-proto */ 73).set;
	module.exports = function (that, target, C) {
	  var P,
	      S = target.constructor;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }return that;
	};

/***/ }),
/* 89 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.number.to-fixed.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    aNumberValue = __webpack_require__(/*! ./_a-number-value */ 90),
	    repeat = __webpack_require__(/*! ./_string-repeat */ 91),
	    $toFixed = 1..toFixed,
	    floor = Math.floor,
	    data = [0, 0, 0, 0, 0, 0],
	    ERROR = 'Number.toFixed: incorrect invocation!',
	    ZERO = '0';
	
	var multiply = function multiply(n, c) {
	  var i = -1,
	      c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function divide(n) {
	  var i = 6,
	      c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
	};
	var numToString = function numToString() {
	  var i = 6,
	      s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  }return s;
	};
	var pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function log(x) {
	  var n = 0,
	      x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ 7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR),
	        f = toInteger(fractionDigits),
	        s = '',
	        m = ZERO,
	        e,
	        z,
	        j,
	        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    }return m;
	  }
	});

/***/ }),
/* 90 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_a-number-value.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var cof = __webpack_require__(/*! ./_cof */ 34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

/***/ }),
/* 91 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_string-repeat.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    defined = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this)),
	      res = '',
	      n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  }return res;
	};

/***/ }),
/* 92 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.number.to-precision.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $fails = __webpack_require__(/*! ./_fails */ 7),
	    aNumberValue = __webpack_require__(/*! ./_a-number-value */ 90),
	    $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

/***/ }),
/* 93 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.number.epsilon.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ }),
/* 94 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-finite.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    _isFinite = __webpack_require__(/*! ./_global */ 4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ }),
/* 95 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-integer.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ 96) });

/***/ }),
/* 96 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_is-integer.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ }),
/* 97 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-nan.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    return number != number;
	  }
	});

/***/ }),
/* 98 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.number.is-safe-integer.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    isInteger = __webpack_require__(/*! ./_is-integer */ 96),
	    abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ }),
/* 99 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.max-safe-integer.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ }),
/* 100 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.number.min-safe-integer.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ }),
/* 101 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-float.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $parseFloat = __webpack_require__(/*! ./_parse-float */ 86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ }),
/* 102 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.number.parse-int.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $parseInt = __webpack_require__(/*! ./_parse-int */ 82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ }),
/* 103 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.acosh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    log1p = __webpack_require__(/*! ./_math-log1p */ 104),
	    sqrt = Math.sqrt,
	    $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	&& Math.floor($acosh(Number.MAX_VALUE)) == 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN 
	&& $acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ }),
/* 104 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_math-log1p.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ }),
/* 105 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.asinh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ }),
/* 106 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.atanh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ }),
/* 107 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cbrt.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    sign = __webpack_require__(/*! ./_math-sign */ 108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ }),
/* 108 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_math-sign.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ }),
/* 109 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.clz32.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ }),
/* 110 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.cosh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ }),
/* 111 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.expm1.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $expm1 = __webpack_require__(/*! ./_math-expm1 */ 112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ }),
/* 112 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_math-expm1.js ***!
  \******************************************/
/***/ (function(module, exports) {

	"use strict";
	
	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = !$expm1
	// Old FF bug
	|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	// Tor Browser bug
	|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ }),
/* 113 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.math.fround.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    sign = __webpack_require__(/*! ./_math-sign */ 108),
	    pow = Math.pow,
	    EPSILON = pow(2, -52),
	    EPSILON32 = pow(2, -23),
	    MAX32 = pow(2, 127) * (2 - EPSILON32),
	    MIN32 = pow(2, -126);
	
	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	$export($export.S, 'Math', {
	  fround: function fround(x) {
	    var $abs = Math.abs(x),
	        $sign = sign(x),
	        a,
	        result;
	    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if (result > MAX32 || result != result) return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ }),
/* 114 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.hypot.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(/*! ./_export */ 8),
	    abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0,
	        i = 0,
	        aLen = arguments.length,
	        larg = 0,
	        arg,
	        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ }),
/* 115 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.imul.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff,
	        xn = +x,
	        yn = +y,
	        xl = UINT16 & xn,
	        yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ }),
/* 116 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log10.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ }),
/* 117 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.log1p.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ 104) });

/***/ }),
/* 118 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.log2.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ }),
/* 119 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sign.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ 108) });

/***/ }),
/* 120 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.sinh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    expm1 = __webpack_require__(/*! ./_math-expm1 */ 112),
	    exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ }),
/* 121 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.math.tanh.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    expm1 = __webpack_require__(/*! ./_math-expm1 */ 112),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x),
	        b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ }),
/* 122 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.math.trunc.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ }),
/* 123 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/es6.string.from-code-point.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39),
	    fromCharCode = String.fromCharCode,
	    $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var res = [],
	        aLen = arguments.length,
	        i = 0,
	        code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    }return res.join('');
	  }
	});

/***/ }),
/* 124 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.raw.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    toLength = __webpack_require__(/*! ./_to-length */ 37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw),
	        len = toLength(tpl.length),
	        aLen = arguments.length,
	        res = [],
	        i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    }return res.join('');
	  }
	});

/***/ }),
/* 125 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.trim.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	
	__webpack_require__(/*! ./_string-trim */ 83)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

/***/ }),
/* 126 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.iterator.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(/*! ./_string-at */ 127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 128)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ }),
/* 127 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_string-at.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    defined = __webpack_require__(/*! ./_defined */ 35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 128 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-define.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(/*! ./_library */ 28),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    has = __webpack_require__(/*! ./_has */ 5),
	    Iterators = __webpack_require__(/*! ./_iterators */ 129),
	    $iterCreate = __webpack_require__(/*! ./_iter-create */ 130),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 25)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 129 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iterators.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 130 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-create.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(/*! ./_object-create */ 46),
	    descriptor = __webpack_require__(/*! ./_property-desc */ 17),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 10)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 25)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 131 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es6.string.code-point-at.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $at = __webpack_require__(/*! ./_string-at */ 127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 132 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.string.ends-with.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    context = __webpack_require__(/*! ./_string-context */ 133),
	    ENDS_WITH = 'endsWith',
	    $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH),
	        endPosition = arguments.length > 1 ? arguments[1] : undefined,
	        len = toLength(that.length),
	        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	        search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

/***/ }),
/* 133 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/_string-context.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(/*! ./_is-regexp */ 134),
	    defined = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ }),
/* 134 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_is-regexp.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    cof = __webpack_require__(/*! ./_cof */ 34),
	    MATCH = __webpack_require__(/*! ./_wks */ 25)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ }),
/* 135 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MATCH = __webpack_require__(/*! ./_wks */ 25)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) {/* empty */}
	  }return true;
	};

/***/ }),
/* 136 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.includes.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    context = __webpack_require__(/*! ./_string-context */ 133),
	    INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ }),
/* 137 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.repeat.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(/*! ./_string-repeat */ 91)
	});

/***/ }),
/* 138 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    context = __webpack_require__(/*! ./_string-context */ 133),
	    STARTS_WITH = 'startsWith',
	    $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH),
	        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	        search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

/***/ }),
/* 139 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.anchor.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	
	__webpack_require__(/*! ./_string-html */ 140)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

/***/ }),
/* 140 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_string-html.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    defined = __webpack_require__(/*! ./_defined */ 35),
	    quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function createHTML(string, tag, attribute, value) {
	  var S = String(defined(string)),
	      p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ }),
/* 141 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.big.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	
	__webpack_require__(/*! ./_string-html */ 140)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

/***/ }),
/* 142 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.blink.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	
	__webpack_require__(/*! ./_string-html */ 140)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

/***/ }),
/* 143 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.bold.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	
	__webpack_require__(/*! ./_string-html */ 140)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

/***/ }),
/* 144 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.fixed.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	
	__webpack_require__(/*! ./_string-html */ 140)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

/***/ }),
/* 145 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.string.fontcolor.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	
	__webpack_require__(/*! ./_string-html */ 140)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

/***/ }),
/* 146 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.string.fontsize.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	
	__webpack_require__(/*! ./_string-html */ 140)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

/***/ }),
/* 147 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.string.italics.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	
	__webpack_require__(/*! ./_string-html */ 140)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

/***/ }),
/* 148 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.string.link.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	
	__webpack_require__(/*! ./_string-html */ 140)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

/***/ }),
/* 149 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.string.small.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	
	__webpack_require__(/*! ./_string-html */ 140)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

/***/ }),
/* 150 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.string.strike.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	
	__webpack_require__(/*! ./_string-html */ 140)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

/***/ }),
/* 151 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.sub.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	
	__webpack_require__(/*! ./_string-html */ 140)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

/***/ }),
/* 152 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.string.sup.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	
	__webpack_require__(/*! ./_string-html */ 140)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

/***/ }),
/* 153 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.date.now.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Date', { now: function now() {
	    return new Date().getTime();
	  } });

/***/ }),
/* 154 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.date.to-json.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16);
	
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	      return 1;
	    } }) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key) {
	    var O = toObject(this),
	        pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ }),
/* 155 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-iso-string.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    getTime = Date.prototype.getTime;
	
	var lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function () {
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString() {
	    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	    var d = this,
	        y = d.getUTCFullYear(),
	        m = d.getUTCMilliseconds(),
	        s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ }),
/* 156 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-string.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var DateProto = Date.prototype,
	    INVALID_DATE = 'Invalid Date',
	    TO_STRING = 'toString',
	    $toString = DateProto[TO_STRING],
	    getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(/*! ./_redefine */ 18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ }),
/* 157 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.date.to-primitive.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ 25)('toPrimitive'),
	    proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ 10)(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ 158));

/***/ }),
/* 158 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_date-to-primitive.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ }),
/* 159 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.is-array.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ 45) });

/***/ }),
/* 160 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.from.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(/*! ./_ctx */ 20),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    call = __webpack_require__(/*! ./_iter-call */ 161),
	    isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 162),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    createProperty = __webpack_require__(/*! ./_create-property */ 163),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 164);
	
	$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 165)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ }),
/* 161 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iter-call.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 162 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_is-array-iter.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(/*! ./_iterators */ 129),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 25)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 163 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_create-property.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $defineProperty = __webpack_require__(/*! ./_object-dp */ 11),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ }),
/* 164 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(/*! ./_classof */ 75),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 25)('iterator'),
	    Iterators = __webpack_require__(/*! ./_iterators */ 129);
	module.exports = __webpack_require__(/*! ./_core */ 9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ }),
/* 165 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_iter-detect.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(/*! ./_wks */ 25)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ }),
/* 166 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.array.of.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    createProperty = __webpack_require__(/*! ./_create-property */ 163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  function F() {}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    var index = 0,
	        aLen = arguments.length,
	        result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
	});

/***/ }),
/* 167 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.join.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ 33) != Object || !__webpack_require__(/*! ./_strict-method */ 168)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ }),
/* 168 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_strict-method.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fails = __webpack_require__(/*! ./_fails */ 7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    arg ? method.call(null, function () {}, 1) : method.call(null);
	  });
	};

/***/ }),
/* 169 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.array.slice.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    html = __webpack_require__(/*! ./_html */ 48),
	    cof = __webpack_require__(/*! ./_cof */ 34),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length),
	        klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toIndex(begin, len),
	        upTo = toIndex(end, len),
	        size = toLength(upTo - start),
	        cloned = Array(size),
	        i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    }return cloned;
	  }
	});

/***/ }),
/* 170 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.sort.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    $sort = [].sort,
	    test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(/*! ./_strict-method */ 168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ }),
/* 171 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.for-each.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $forEach = __webpack_require__(/*! ./_array-methods */ 172)(0),
	    STRICT = __webpack_require__(/*! ./_strict-method */ 168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 172 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/_array-methods.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(/*! ./_ctx */ 20),
	    IObject = __webpack_require__(/*! ./_iobject */ 33),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    asc = __webpack_require__(/*! ./_array-species-create */ 173);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	      create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 173 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/_array-species-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 174);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 174 */
/*!*********************************************************!*\
  !*** ./~/core-js/modules/_array-species-constructor.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./_is-object */ 13),
	    isArray = __webpack_require__(/*! ./_is-array */ 45),
	    SPECIES = __webpack_require__(/*! ./_wks */ 25)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }return C === undefined ? Array : C;
	};

/***/ }),
/* 175 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es6.array.map.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $map = __webpack_require__(/*! ./_array-methods */ 172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 176 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.array.filter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $filter = __webpack_require__(/*! ./_array-methods */ 172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 177 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.some.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $some = __webpack_require__(/*! ./_array-methods */ 172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 178 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.array.every.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $every = __webpack_require__(/*! ./_array-methods */ 172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 179 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.array.reduce.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $reduce = __webpack_require__(/*! ./_array-reduce */ 180);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ }),
/* 180 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_array-reduce.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    IObject = __webpack_require__(/*! ./_iobject */ 33),
	    toLength = __webpack_require__(/*! ./_to-length */ 37);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that),
	      self = IObject(O),
	      length = toLength(O.length),
	      index = isRight ? length - 1 : 0,
	      i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  }return memo;
	};

/***/ }),
/* 181 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.array.reduce-right.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $reduce = __webpack_require__(/*! ./_array-reduce */ 180);
	
	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ }),
/* 182 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.index-of.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $indexOf = __webpack_require__(/*! ./_array-includes */ 36)(false),
	    $native = [].indexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ }),
/* 183 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.array.last-index-of.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    $native = [].lastIndexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this),
	        length = toLength(O.length),
	        index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    }return -1;
	  }
	});

/***/ }),
/* 184 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.array.copy-within.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ 185) });
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('copyWithin');

/***/ }),
/* 185 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_array-copy-within.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 37);
	
	module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	  var O = toObject(this),
	      len = toLength(O.length),
	      to = toIndex(target, len),
	      from = toIndex(start, len),
	      end = arguments.length > 2 ? arguments[2] : undefined,
	      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	      inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }return O;
	};

/***/ }),
/* 186 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/_add-to-unscopables.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(/*! ./_wks */ 25)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ 10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ }),
/* 187 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.fill.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ 188) });
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('fill');

/***/ }),
/* 188 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_array-fill.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 37);
	module.exports = function fill(value /*, start = 0, end = @length */) {
	  var O = toObject(this),
	      length = toLength(O.length),
	      aLen = arguments.length,
	      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	      end = aLen > 2 ? arguments[2] : undefined,
	      endPos = end === undefined ? length : toIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  }return O;
	};

/***/ }),
/* 189 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es6.array.find.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $find = __webpack_require__(/*! ./_array-methods */ 172)(5),
	    KEY = 'find',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 186)(KEY);

/***/ }),
/* 190 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.array.find-index.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $find = __webpack_require__(/*! ./_array-methods */ 172)(6),
	    KEY = 'findIndex',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 186)(KEY);

/***/ }),
/* 191 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.array.species.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_set-species */ 192)('Array');

/***/ }),
/* 192 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_set-species.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    dP = __webpack_require__(/*! ./_object-dp */ 11),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6),
	    SPECIES = __webpack_require__(/*! ./_wks */ 25)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ }),
/* 193 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.array.iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 186),
	    step = __webpack_require__(/*! ./_iter-step */ 194),
	    Iterators = __webpack_require__(/*! ./_iterators */ 129),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 128)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 194 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_iter-step.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ }),
/* 195 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.constructor.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88),
	    dP = __webpack_require__(/*! ./_object-dp */ 11).f,
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 50).f,
	    isRegExp = __webpack_require__(/*! ./_is-regexp */ 134),
	    $flags = __webpack_require__(/*! ./_flags */ 196),
	    $RegExp = global.RegExp,
	    Base = $RegExp,
	    proto = $RegExp.prototype,
	    re1 = /a/g,
	    re2 = /a/g
	// "new" creates a new object, old webkit buggy here
	,
	    CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(/*! ./_descriptors */ 6) && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ 7)(function () {
	  re2[__webpack_require__(/*! ./_wks */ 25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp,
	        piRE = isRegExp(p),
	        fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(/*! ./_redefine */ 18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(/*! ./_set-species */ 192)('RegExp');

/***/ }),
/* 196 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_flags.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	
	var anObject = __webpack_require__(/*! ./_an-object */ 12);
	module.exports = function () {
	  var that = anObject(this),
	      result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

/***/ }),
/* 197 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./es6.regexp.flags */ 198);
	var anObject = __webpack_require__(/*! ./_an-object */ 12),
	    $flags = __webpack_require__(/*! ./_flags */ 196),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6),
	    TO_STRING = 'toString',
	    $toString = /./[TO_STRING];
	
	var define = function define(fn) {
	  __webpack_require__(/*! ./_redefine */ 18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(/*! ./_fails */ 7)(function () {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

/***/ }),
/* 198 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(/*! ./_descriptors */ 6) && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ 11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(/*! ./_flags */ 196)
	});

/***/ }),
/* 199 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.match.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@match logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ }),
/* 200 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_fix-re-wks.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(/*! ./_hide */ 10),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    defined = __webpack_require__(/*! ./_defined */ 35),
	    wks = __webpack_require__(/*! ./_wks */ 25);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY),
	      fns = exec(defined, SYMBOL, ''[KEY]),
	      strfn = fns[0],
	      rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

/***/ }),
/* 201 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@replace logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	
	    var O = defined(this),
	        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ }),
/* 202 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.regexp.search.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@search logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ }),
/* 203 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/es6.regexp.split.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@split logic
	__webpack_require__(/*! ./_fix-re-wks */ 200)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	
	  var isRegExp = __webpack_require__(/*! ./_is-regexp */ 134),
	      _split = $split,
	      $push = [].push,
	      $SPLIT = 'split',
	      LENGTH = 'length',
	      LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this),
	        fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ }),
/* 204 */
/*!******************************************!*\
  !*** ./~/core-js/modules/es6.promise.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(/*! ./_library */ 28),
	    global = __webpack_require__(/*! ./_global */ 4),
	    ctx = __webpack_require__(/*! ./_ctx */ 20),
	    classof = __webpack_require__(/*! ./_classof */ 75),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    forOf = __webpack_require__(/*! ./_for-of */ 206),
	    speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 207),
	    task = __webpack_require__(/*! ./_task */ 208).set,
	    microtask = __webpack_require__(/*! ./_microtask */ 209)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(/*! ./_set-to-string-tag */ 24)($Promise, PROMISE);
	__webpack_require__(/*! ./_set-species */ 192)(PROMISE);
	Wrapper = __webpack_require__(/*! ./_core */ 9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 165)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 205 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_an-instance.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ }),
/* 206 */
/*!**************************************!*\
  !*** ./~/core-js/modules/_for-of.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(/*! ./_ctx */ 20),
	    call = __webpack_require__(/*! ./_iter-call */ 161),
	    isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 162),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 164),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ }),
/* 207 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_species-constructor.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(/*! ./_an-object */ 12),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    SPECIES = __webpack_require__(/*! ./_wks */ 25)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 208 */
/*!************************************!*\
  !*** ./~/core-js/modules/_task.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(/*! ./_ctx */ 20),
	    invoke = __webpack_require__(/*! ./_invoke */ 78),
	    html = __webpack_require__(/*! ./_html */ 48),
	    cel = __webpack_require__(/*! ./_dom-create */ 15),
	    global = __webpack_require__(/*! ./_global */ 4),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(/*! ./_cof */ 34)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ }),
/* 209 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/_microtask.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    macrotask = __webpack_require__(/*! ./_task */ 208).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(/*! ./_cof */ 34)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ }),
/* 210 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_redefine-all.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(/*! ./_redefine */ 18);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ }),
/* 211 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.map.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(/*! ./_collection-strong */ 212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(/*! ./_collection */ 213)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ }),
/* 212 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_collection-strong.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(/*! ./_object-dp */ 11).f,
	    create = __webpack_require__(/*! ./_object-create */ 46),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	    ctx = __webpack_require__(/*! ./_ctx */ 20),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    defined = __webpack_require__(/*! ./_defined */ 35),
	    forOf = __webpack_require__(/*! ./_for-of */ 206),
	    $iterDefine = __webpack_require__(/*! ./_iter-define */ 128),
	    step = __webpack_require__(/*! ./_iter-step */ 194),
	    setSpecies = __webpack_require__(/*! ./_set-species */ 192),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6),
	    fastKey = __webpack_require__(/*! ./_meta */ 22).fastKey,
	    SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ }),
/* 213 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_collection.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	    meta = __webpack_require__(/*! ./_meta */ 22),
	    forOf = __webpack_require__(/*! ./_for-of */ 206),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    $iterDetect = __webpack_require__(/*! ./_iter-detect */ 165),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 88);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  var fixMethod = function fixMethod(KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function (a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a);return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b);return this;
	    });
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C()
	    // early implementations not supports chaining
	    ,
	        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    ,
	        THROWS_ON_PRIMITIVES = fails(function () {
	      instance.has(1);
	    })
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    ,
	        ACCEPT_ITERABLES = $iterDetect(function (iter) {
	      new C(iter);
	    }) // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    ,
	        BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C(),
	          index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      }return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ }),
/* 214 */
/*!**************************************!*\
  !*** ./~/core-js/modules/es6.set.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(/*! ./_collection-strong */ 212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(/*! ./_collection */ 213)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ }),
/* 215 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-map.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(/*! ./_array-methods */ 172)(0),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    meta = __webpack_require__(/*! ./_meta */ 22),
	    assign = __webpack_require__(/*! ./_object-assign */ 69),
	    weak = __webpack_require__(/*! ./_collection-weak */ 216),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    getWeak = meta.getWeak,
	    isExtensible = Object.isExtensible,
	    uncaughtFrozenStore = weak.ufstore,
	    tmp = {},
	    InternalMap;
	
	var wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ 213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ }),
/* 216 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_collection-weak.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	    getWeak = __webpack_require__(/*! ./_meta */ 22).getWeak,
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    forOf = __webpack_require__(/*! ./_for-of */ 206),
	    createArrayMethod = __webpack_require__(/*! ./_array-methods */ 172),
	    $has = __webpack_require__(/*! ./_has */ 5),
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ }),
/* 217 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/es6.weak-set.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var weak = __webpack_require__(/*! ./_collection-weak */ 216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(/*! ./_collection */ 213)('WeakSet', function (get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ }),
/* 218 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.array-buffer.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $typed = __webpack_require__(/*! ./_typed */ 219),
	    buffer = __webpack_require__(/*! ./_typed-buffer */ 220),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toIndex = __webpack_require__(/*! ./_to-index */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    ArrayBuffer = __webpack_require__(/*! ./_global */ 4).ArrayBuffer,
	    speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 207),
	    $ArrayBuffer = buffer.ArrayBuffer,
	    $DataView = buffer.DataView,
	    $isView = $typed.ABV && ArrayBuffer.isView,
	    $slice = $ArrayBuffer.prototype.slice,
	    VIEW = $typed.VIEW,
	    ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength,
	        first = toIndex(start, len),
	        final = toIndex(end === undefined ? len : end, len),
	        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	        viewS = new $DataView(this),
	        viewT = new $DataView(result),
	        index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    }return result;
	  }
	});
	
	__webpack_require__(/*! ./_set-species */ 192)(ARRAY_BUFFER);

/***/ }),
/* 219 */
/*!*************************************!*\
  !*** ./~/core-js/modules/_typed.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    uid = __webpack_require__(/*! ./_uid */ 19),
	    TYPED = uid('typed_array'),
	    VIEW = uid('view'),
	    ABV = !!(global.ArrayBuffer && global.DataView),
	    CONSTR = ABV,
	    i = 0,
	    l = 9,
	    Typed;
	
	var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

/***/ }),
/* 220 */
/*!********************************************!*\
  !*** ./~/core-js/modules/_typed-buffer.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./_global */ 4),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6),
	    LIBRARY = __webpack_require__(/*! ./_library */ 28),
	    $typed = __webpack_require__(/*! ./_typed */ 219),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 50).f,
	    dP = __webpack_require__(/*! ./_object-dp */ 11).f,
	    arrayFill = __webpack_require__(/*! ./_array-fill */ 188),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 24),
	    ARRAY_BUFFER = 'ArrayBuffer',
	    DATA_VIEW = 'DataView',
	    PROTOTYPE = 'prototype',
	    WRONG_LENGTH = 'Wrong length!',
	    WRONG_INDEX = 'Wrong index!',
	    $ArrayBuffer = global[ARRAY_BUFFER],
	    $DataView = global[DATA_VIEW],
	    Math = global.Math,
	    RangeError = global.RangeError,
	    Infinity = global.Infinity,
	    BaseBuffer = $ArrayBuffer,
	    abs = Math.abs,
	    pow = Math.pow,
	    floor = Math.floor,
	    log = Math.log,
	    LN2 = Math.LN2,
	    BUFFER = 'buffer',
	    BYTE_LENGTH = 'byteLength',
	    BYTE_OFFSET = 'byteOffset',
	    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes),
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	      i = 0,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	      e,
	      m,
	      c;
	  value = abs(value);
	  if (value != value || value === Infinity) {
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = eLen - 7,
	      i = nBytes - 1,
	      s = buffer[i--],
	      e = s & 127,
	      m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  }return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function packI8(it) {
	  return [it & 0xff];
	};
	var packI16 = function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function packF64(it) {
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function packF32(it) {
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function get() {
	      return this[internal];
	    } });
	};
	
	var get = function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
	};
	
	var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length,
	      byteLength = toLength(numberLength);
	  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH],
	        offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	  }) || !fails(function () {
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2)),
	      $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ }),
/* 221 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/es6.typed.data-view.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ 219).ABV, {
	  DataView: __webpack_require__(/*! ./_typed-buffer */ 220).DataView
	});

/***/ }),
/* 222 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int8-array.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 223 */
/*!*******************************************!*\
  !*** ./~/core-js/modules/_typed-array.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	if (__webpack_require__(/*! ./_descriptors */ 6)) {
	  var LIBRARY = __webpack_require__(/*! ./_library */ 28),
	      global = __webpack_require__(/*! ./_global */ 4),
	      fails = __webpack_require__(/*! ./_fails */ 7),
	      $export = __webpack_require__(/*! ./_export */ 8),
	      $typed = __webpack_require__(/*! ./_typed */ 219),
	      $buffer = __webpack_require__(/*! ./_typed-buffer */ 220),
	      ctx = __webpack_require__(/*! ./_ctx */ 20),
	      anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	      propertyDesc = __webpack_require__(/*! ./_property-desc */ 17),
	      hide = __webpack_require__(/*! ./_hide */ 10),
	      redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	      toInteger = __webpack_require__(/*! ./_to-integer */ 38),
	      toLength = __webpack_require__(/*! ./_to-length */ 37),
	      toIndex = __webpack_require__(/*! ./_to-index */ 39),
	      toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	      has = __webpack_require__(/*! ./_has */ 5),
	      same = __webpack_require__(/*! ./_same-value */ 71),
	      classof = __webpack_require__(/*! ./_classof */ 75),
	      isObject = __webpack_require__(/*! ./_is-object */ 13),
	      toObject = __webpack_require__(/*! ./_to-object */ 58),
	      isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 162),
	      create = __webpack_require__(/*! ./_object-create */ 46),
	      getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	      gOPN = __webpack_require__(/*! ./_object-gopn */ 50).f,
	      getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 164),
	      uid = __webpack_require__(/*! ./_uid */ 19),
	      wks = __webpack_require__(/*! ./_wks */ 25),
	      createArrayMethod = __webpack_require__(/*! ./_array-methods */ 172),
	      createArrayIncludes = __webpack_require__(/*! ./_array-includes */ 36),
	      speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 207),
	      ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ 193),
	      Iterators = __webpack_require__(/*! ./_iterators */ 129),
	      $iterDetect = __webpack_require__(/*! ./_iter-detect */ 165),
	      setSpecies = __webpack_require__(/*! ./_set-species */ 192),
	      arrayFill = __webpack_require__(/*! ./_array-fill */ 188),
	      arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ 185),
	      $DP = __webpack_require__(/*! ./_object-dp */ 11),
	      $GOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	      dP = $DP.f,
	      gOPD = $GOPD.f,
	      RangeError = global.RangeError,
	      TypeError = global.TypeError,
	      Uint8Array = global.Uint8Array,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	      PROTOTYPE = 'prototype',
	      ArrayProto = Array[PROTOTYPE],
	      $ArrayBuffer = $buffer.ArrayBuffer,
	      $DataView = $buffer.DataView,
	      arrayForEach = createArrayMethod(0),
	      arrayFilter = createArrayMethod(2),
	      arraySome = createArrayMethod(3),
	      arrayEvery = createArrayMethod(4),
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      arrayIncludes = createArrayIncludes(true),
	      arrayIndexOf = createArrayIncludes(false),
	      arrayValues = ArrayIterators.values,
	      arrayKeys = ArrayIterators.keys,
	      arrayEntries = ArrayIterators.entries,
	      arrayLastIndexOf = ArrayProto.lastIndexOf,
	      arrayReduce = ArrayProto.reduce,
	      arrayReduceRight = ArrayProto.reduceRight,
	      arrayJoin = ArrayProto.join,
	      arraySort = ArrayProto.sort,
	      arraySlice = ArrayProto.slice,
	      arrayToString = ArrayProto.toString,
	      arrayToLocaleString = ArrayProto.toLocaleString,
	      ITERATOR = wks('iterator'),
	      TAG = wks('toStringTag'),
	      TYPED_CONSTRUCTOR = uid('typed_constructor'),
	      DEF_CONSTRUCTOR = uid('def_constructor'),
	      ALL_CONSTRUCTORS = $typed.CONSTR,
	      TYPED_ARRAY = $typed.TYPED,
	      VIEW = $typed.VIEW,
	      WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function strictToLength(it, SAME) {
	    if (it === undefined) throw TypeError(WRONG_LENGTH);
	    var number = +it,
	        length = toLength(it);
	    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function toOffset(it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    }return new C(length);
	  };
	
	  var speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function fromList(C, list) {
	    var index = 0,
	        length = list.length,
	        result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    }return result;
	  };
	
	  var addGetter = function addGetter(it, key, internal) {
	    dP(it, key, { get: function get() {
	        return this._d[internal];
	      } });
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */) {
	    var O = toObject(source),
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        iterFn = getIterFn(O),
	        i,
	        length,
	        values,
	        result,
	        step,
	        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of() /*...items*/{
	    var index = 0,
	        length = arguments.length,
	        result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    }return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this,
	          length = validate(that).length,
	          middle = Math.floor(length / 2),
	          index = 0,
	          value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      }return that;
	    },
	    some: function some(callbackfn /*, thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this),
	          length = O.length,
	          $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1),
	        length = this.length,
	        src = toObject(arrayLike),
	        len = toLength(src.length),
	        index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() {/* noop */},
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });
	
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	        ISNT_UINT8 = NAME != 'Uint8Array',
	        GETTER = 'get' + KEY,
	        SETTER = 'set' + KEY,
	        TypedArray = global[NAME],
	        Base = TypedArray || {},
	        TAC = TypedArray && getPrototypeOf(TypedArray),
	        FORCED = !TypedArray || !$typed.ABV,
	        O = {},
	        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function getter(that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function setter(that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0,
	            offset = 0,
	            buffer,
	            byteLength,
	            length,
	            klass;
	        if (!isObject(data)) {
	          length = strictToLength(data, true);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!$iterDetect(function (iter) {
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR],
	        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	        $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () {/* empty */};

/***/ }),
/* 224 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint8-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 225 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ }),
/* 226 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int16-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 227 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint16-array.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 228 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.int32-array.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 229 */
/*!*****************************************************!*\
  !*** ./~/core-js/modules/es6.typed.uint32-array.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 230 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.typed.float32-array.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 231 */
/*!******************************************************!*\
  !*** ./~/core-js/modules/es6.typed.float64-array.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_typed-array */ 223)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 232 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.apply.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    rApply = (__webpack_require__(/*! ./_global */ 4).Reflect || {}).apply,
	    fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 7)(function () {
	  rApply(function () {});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target),
	        L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ }),
/* 233 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.construct.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(/*! ./_export */ 8),
	    create = __webpack_require__(/*! ./_object-create */ 46),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    fails = __webpack_require__(/*! ./_fails */ 7),
	    bind = __webpack_require__(/*! ./_bind */ 77),
	    rConstruct = (__webpack_require__(/*! ./_global */ 4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() {}
	  return !(rConstruct(function () {}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () {});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype,
	        instance = create(isObject(proto) ? proto : Object.prototype),
	        result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ }),
/* 234 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.define-property.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(/*! ./_object-dp */ 11),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 7)(function () {
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ }),
/* 235 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.delete-property.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 51).f,
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ }),
/* 236 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.enumerate.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	var Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  var keys = this._k = [] // keys
	  ,
	      key;
	  for (key in iterated) {
	    keys.push(key);
	  }
	};
	__webpack_require__(/*! ./_iter-create */ 130)(Enumerate, 'Object', function () {
	  var that = this,
	      keys = that._k,
	      key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

/***/ }),
/* 237 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    has = __webpack_require__(/*! ./_has */ 5),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    isObject = __webpack_require__(/*! ./_is-object */ 13),
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	function get(target, propertyKey /*, receiver*/) {
	  var receiver = arguments.length < 3 ? target : arguments[2],
	      desc,
	      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });

/***/ }),
/* 238 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ }),
/* 239 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    getProto = __webpack_require__(/*! ./_object-gpo */ 59),
	    anObject = __webpack_require__(/*! ./_an-object */ 12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});

/***/ }),
/* 240 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.has.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

/***/ }),
/* 241 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.is-extensible.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ }),
/* 242 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.own-keys.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ 243) });

/***/ }),
/* 243 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_own-keys.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(/*! ./_object-gopn */ 50),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 43),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    Reflect = __webpack_require__(/*! ./_global */ 4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it)),
	      getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ }),
/* 244 */
/*!*************************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ }),
/* 245 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(/*! ./_object-dp */ 11),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    has = __webpack_require__(/*! ./_has */ 5),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 17),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    isObject = __webpack_require__(/*! ./_is-object */ 13);
	
	function set(target, propertyKey, V /*, receiver*/) {
	  var receiver = arguments.length < 4 ? target : arguments[3],
	      ownDesc = gOPD.f(anObject(target), propertyKey),
	      existingDescriptor,
	      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });

/***/ }),
/* 246 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(/*! ./_export */ 8),
	    setProto = __webpack_require__(/*! ./_set-proto */ 73);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ }),
/* 247 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.array.includes.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $includes = __webpack_require__(/*! ./_array-includes */ 36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(/*! ./_add-to-unscopables */ 186)('includes');

/***/ }),
/* 248 */
/*!********************************************!*\
  !*** ./~/core-js/modules/es7.string.at.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $at = __webpack_require__(/*! ./_string-at */ 127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 249 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-start.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $pad = __webpack_require__(/*! ./_string-pad */ 250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ }),
/* 250 */
/*!******************************************!*\
  !*** ./~/core-js/modules/_string-pad.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(/*! ./_to-length */ 37),
	    repeat = __webpack_require__(/*! ./_string-repeat */ 91),
	    defined = __webpack_require__(/*! ./_defined */ 35);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that)),
	      stringLength = S.length,
	      fillStr = fillString === undefined ? ' ' : String(fillString),
	      intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength,
	      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ }),
/* 251 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.string.pad-end.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $pad = __webpack_require__(/*! ./_string-pad */ 250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ }),
/* 252 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-left.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(/*! ./_string-trim */ 83)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ }),
/* 253 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es7.string.trim-right.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(/*! ./_string-trim */ 83)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ }),
/* 254 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.string.match-all.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    defined = __webpack_require__(/*! ./_defined */ 35),
	    toLength = __webpack_require__(/*! ./_to-length */ 37),
	    isRegExp = __webpack_require__(/*! ./_is-regexp */ 134),
	    getFlags = __webpack_require__(/*! ./_flags */ 196),
	    RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(/*! ./_iter-create */ 130)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this),
	        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ }),
/* 255 */
/*!********************************************************!*\
  !*** ./~/core-js/modules/es7.symbol.async-iterator.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_wks-define */ 27)('asyncIterator');

/***/ }),
/* 256 */
/*!****************************************************!*\
  !*** ./~/core-js/modules/es7.symbol.observable.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./_wks-define */ 27)('observable');

/***/ }),
/* 257 */
/*!**********************************************************************!*\
  !*** ./~/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(/*! ./_export */ 8),
	    ownKeys = __webpack_require__(/*! ./_own-keys */ 243),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 51),
	    createProperty = __webpack_require__(/*! ./_create-property */ 163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object),
	        getDesc = gOPD.f,
	        keys = ownKeys(O),
	        result = {},
	        i = 0,
	        key;
	    while (keys.length > i) {
	      createProperty(result, key = keys[i++], getDesc(O, key));
	    }return result;
	  }
	});

/***/ }),
/* 258 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.object.values.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $values = __webpack_require__(/*! ./_object-to-array */ 259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ }),
/* 259 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/_object-to-array.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(/*! ./_object-keys */ 30),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 32),
	    isEnum = __webpack_require__(/*! ./_object-pie */ 44).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it),
	        keys = getKeys(O),
	        length = keys.length,
	        i = 0,
	        result = [],
	        key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }return result;
	  };
	};

/***/ }),
/* 260 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.object.entries.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $entries = __webpack_require__(/*! ./_object-to-array */ 259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ }),
/* 261 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.define-getter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    $defineProperty = __webpack_require__(/*! ./_object-dp */ 11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});

/***/ }),
/* 262 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/_object-forced-pam.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(/*! ./_library */ 28) || !__webpack_require__(/*! ./_fails */ 7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function () {/* empty */});
	  delete __webpack_require__(/*! ./_global */ 4)[K];
	});

/***/ }),
/* 263 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.define-setter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    $defineProperty = __webpack_require__(/*! ./_object-dp */ 11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});

/***/ }),
/* 264 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.lookup-getter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 265 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.object.lookup-setter.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    toObject = __webpack_require__(/*! ./_to-object */ 58),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 16),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(/*! ./_descriptors */ 6) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 266 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.map.to-json.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 267)('Map') });

/***/ }),
/* 267 */
/*!**************************************************!*\
  !*** ./~/core-js/modules/_collection-to-json.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(/*! ./_classof */ 75),
	    from = __webpack_require__(/*! ./_array-from-iterable */ 268);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ }),
/* 268 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/_array-from-iterable.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var forOf = __webpack_require__(/*! ./_for-of */ 206);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

/***/ }),
/* 269 */
/*!**********************************************!*\
  !*** ./~/core-js/modules/es7.set.to-json.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 267)('Set') });

/***/ }),
/* 270 */
/*!************************************************!*\
  !*** ./~/core-js/modules/es7.system.global.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ 4) });

/***/ }),
/* 271 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/es7.error.is-error.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(/*! ./_export */ 8),
	    cof = __webpack_require__(/*! ./_cof */ 34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});

/***/ }),
/* 272 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.iaddh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ }),
/* 273 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.isubh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ }),
/* 274 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.imulh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >> 16,
	        v1 = $v >> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ }),
/* 275 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.math.umulh.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >>> 16,
	        v1 = $v >>> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ }),
/* 276 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.define-metadata.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  } });

/***/ }),
/* 277 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_metadata.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var Map = __webpack_require__(/*! ./es6.map */ 211),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    shared = __webpack_require__(/*! ./_shared */ 23)('metadata'),
	    store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ 215))());
	
	var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  }return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	      keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    keys.push(key);
	  });
	  return keys;
	};
	var toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	};
	var exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ }),
/* 278 */
/*!**********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.delete-metadata.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    toMetaKey = metadata.key,
	    getOrCreateMetadataMap = metadata.map,
	    store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  } });

/***/ }),
/* 279 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-metadata.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    ordinaryHasOwnMetadata = metadata.has,
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ }),
/* 280 */
/*!************************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(/*! ./es6.set */ 214),
	    from = __webpack_require__(/*! ./_array-from-iterable */ 268),
	    metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P),
	      parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ }),
/* 281 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ }),
/* 282 */
/*!****************************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ }),
/* 283 */
/*!*******************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.has-metadata.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ }),
/* 284 */
/*!***********************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ }),
/* 285 */
/*!***************************************************!*\
  !*** ./~/core-js/modules/es7.reflect.metadata.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(/*! ./_metadata */ 277),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  } });

/***/ }),
/* 286 */
/*!***************************************!*\
  !*** ./~/core-js/modules/es7.asap.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(/*! ./_export */ 8),
	    microtask = __webpack_require__(/*! ./_microtask */ 209)(),
	    process = __webpack_require__(/*! ./_global */ 4).process,
	    isNode = __webpack_require__(/*! ./_cof */ 34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ }),
/* 287 */
/*!*********************************************!*\
  !*** ./~/core-js/modules/es7.observable.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    global = __webpack_require__(/*! ./_global */ 4),
	    core = __webpack_require__(/*! ./_core */ 9),
	    microtask = __webpack_require__(/*! ./_microtask */ 209)(),
	    OBSERVABLE = __webpack_require__(/*! ./_wks */ 25)('observable'),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21),
	    anObject = __webpack_require__(/*! ./_an-object */ 12),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 205),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 210),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    forOf = __webpack_require__(/*! ./_for-of */ 206),
	    RETURN = forOf.RETURN;
	
	var getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function cleanupSubscription(subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer),
	        subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  }if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
	});
	
	var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () {
	  return this;
	});
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(/*! ./_set-species */ 192)('Observable');

/***/ }),
/* 288 */
/*!*****************************************!*\
  !*** ./~/core-js/modules/web.timers.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(/*! ./_global */ 4),
	    $export = __webpack_require__(/*! ./_export */ 8),
	    invoke = __webpack_require__(/*! ./_invoke */ 78),
	    partial = __webpack_require__(/*! ./_partial */ 289),
	    navigator = global.navigator,
	    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function wrap(set) {
	  return MSIE ? function (fn, time /*, ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ }),
/* 289 */
/*!***************************************!*\
  !*** ./~/core-js/modules/_partial.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(/*! ./_path */ 290),
	    invoke = __webpack_require__(/*! ./_invoke */ 78),
	    aFunction = __webpack_require__(/*! ./_a-function */ 21);
	module.exports = function () /* ...pargs */{
	  var fn = aFunction(this),
	      length = arguments.length,
	      pargs = Array(length),
	      i = 0,
	      _ = path._,
	      holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  }return function () /* ...args */{
	    var that = this,
	        aLen = arguments.length,
	        j = 0,
	        k = 0,
	        args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }while (aLen > k) {
	      args.push(arguments[k++]);
	    }return invoke(fn, args, that);
	  };
	};

/***/ }),
/* 290 */
/*!************************************!*\
  !*** ./~/core-js/modules/_path.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./_global */ 4);

/***/ }),
/* 291 */
/*!********************************************!*\
  !*** ./~/core-js/modules/web.immediate.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $task = __webpack_require__(/*! ./_task */ 208);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

/***/ }),
/* 292 */
/*!***********************************************!*\
  !*** ./~/core-js/modules/web.dom.iterable.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(/*! ./es6.array.iterator */ 193),
	    redefine = __webpack_require__(/*! ./_redefine */ 18),
	    global = __webpack_require__(/*! ./_global */ 4),
	    hide = __webpack_require__(/*! ./_hide */ 10),
	    Iterators = __webpack_require__(/*! ./_iterators */ 129),
	    wks = __webpack_require__(/*! ./_wks */ 25),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ }),
/* 293 */
/*!******************************************!*\
  !*** ./~/regenerator-runtime/runtime.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!function (global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
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
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function (arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (_typeof(global.process) === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
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
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
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
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
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
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError("The iterator does not provide a 'throw' method");
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
	
	    if (!info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
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
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
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
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
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
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
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
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
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
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
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
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../webpack/buildin/module.js */ 294)(module)))

/***/ }),
/* 294 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 295 */
/*!***************************************!*\
  !*** ./~/core-js/fn/regexp/escape.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/core.regexp.escape */ 296);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 9).RegExp.escape;

/***/ }),
/* 296 */
/*!*************************************************!*\
  !*** ./~/core-js/modules/core.regexp.escape.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(/*! ./_export */ 8),
	    $re = __webpack_require__(/*! ./_replacer */ 297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) {
	    return $re(it);
	  } });

/***/ }),
/* 297 */
/*!****************************************!*\
  !*** ./~/core-js/modules/_replacer.js ***!
  \****************************************/
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ }),
/* 298 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(/*! ./common/jquery */ 299);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(/*! ../css/reset */ 305);
	
	__webpack_require__(/*! ../css/common */ 307);
	
	__webpack_require__(/*! ../css/index */ 300);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _jquery2.default)('#v-main').show();
		var $modelbox = (0, _jquery2.default)('#v-modelbox');
		(0, _jquery2.default)('#v-btn-login').click(function () {
			toggleModel('login');
		});
		(0, _jquery2.default)('#v-btn-signup').click(function () {
			toggleModel('signup');
		});
	
		function toggleModel(state) {
			state = state || 'login';
			var relati = 'signup';
			state === 'signup' ? relati = 'login' : '';
			$modelbox.addClass('overup-' + state).removeClass('overup-' + relati).find('.modelBox-info').hide().css('opacity', 0);
			(0, _jquery2.default)('.modelBox-' + state).show(function () {
				var _this = this;
	
				setTimeout(function () {
					(0, _jquery2.default)(_this).css('opacity', '1');
				}, 100);
			});
		}
	});
	
	function clog() {
		var _console;
	
		(_console = console).log.apply(_console, arguments);
	}

/***/ }),
/* 299 */
/*!*********************************!*\
  !*** ./src/js/common/jquery.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery JavaScript Library v1.11.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:19Z
	 */
	
	(function (global, factory) {
	
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	
		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	
		// Can't do this because several apps including ASP.NET trace
		// the stack via arguments.caller.callee and Firefox dies if
		// you try to trace through "use strict" call chains. (#13335)
		// Support: Firefox 18+
		//
	
		var deletedIds = [];
	
		var _slice = deletedIds.slice;
	
		var concat = deletedIds.concat;
	
		var push = deletedIds.push;
	
		var indexOf = deletedIds.indexOf;
	
		var class2type = {};
	
		var toString = class2type.toString;
	
		var hasOwn = class2type.hasOwnProperty;
	
		var support = {};
	
		var version = "1.11.3",
	
	
		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
	
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
	
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};
	
		jQuery.fn = jQuery.prototype = {
			// The current version of jQuery being used
			jquery: version,
	
			constructor: jQuery,
	
			// Start with an empty selector
			selector: "",
	
			// The default length of a jQuery object is 0
			length: 0,
	
			toArray: function toArray() {
				return _slice.call(this);
			},
	
			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
				return num != null ?
	
				// Return just the one element from the set
				num < 0 ? this[num + this.length] : this[num] :
	
				// Return all the elements in a clean array
				_slice.call(this);
			},
	
			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {
	
				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);
	
				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;
	
				// Return the newly-formed element set
				return ret;
			},
	
			// Execute a callback for every element in the matched set.
			// (You can seed the arguments with an array of args, but this is
			// only used internally.)
			each: function each(callback, args) {
				return jQuery.each(this, callback, args);
			},
	
			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},
	
			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},
	
			first: function first() {
				return this.eq(0);
			},
	
			last: function last() {
				return this.eq(-1);
			},
	
			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},
	
			end: function end() {
				return this.prevObject || this.constructor(null);
			},
	
			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: deletedIds.sort,
			splice: deletedIds.splice
		};
	
		jQuery.extend = jQuery.fn.extend = function () {
			var src,
			    copyIsArray,
			    copy,
			    name,
			    options,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;
	
			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;
	
				// skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}
	
			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}
	
			// extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];
	
						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}
	
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);
	
							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			// Return the modified object
			return target;
		};
	
		jQuery.extend({
			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	
			// Assume jQuery is ready without the ready module
			isReady: true,
	
			error: function error(msg) {
				throw new Error(msg);
			},
	
			noop: function noop() {},
	
			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},
	
			isArray: Array.isArray || function (obj) {
				return jQuery.type(obj) === "array";
			},
	
			isWindow: function isWindow(obj) {
				/* jshint eqeqeq: false */
				return obj != null && obj == obj.window;
			},
	
			isNumeric: function isNumeric(obj) {
				// parseFloat NaNs numeric-cast false positives (null|true|false|"")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				// adding 1 corrects loss of precision from parseFloat (#15100)
				return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
			},
	
			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},
	
			isPlainObject: function isPlainObject(obj) {
				var key;
	
				// Must be an Object.
				// Because of IE, we also have to check the presence of the constructor property.
				// Make sure that DOM nodes and window objects don't pass through, as well
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}
	
				try {
					// Not own constructor property must be Object
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					// IE8,9 Will throw exceptions on certain host objects #9897
					return false;
				}
	
				// Support: IE<9
				// Handle iteration over inherited properties before own properties.
				if (support.ownLast) {
					for (key in obj) {
						return hasOwn.call(obj, key);
					}
				}
	
				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.
				for (key in obj) {}
	
				return key === undefined || hasOwn.call(obj, key);
			},
	
			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},
	
			// Evaluates a script in a global context
			// Workarounds based on findings by Jim Driscoll
			// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
			globalEval: function globalEval(data) {
				if (data && jQuery.trim(data)) {
					// We use execScript on Internet Explorer
					// We use an anonymous function so that context is window
					// rather than jQuery in Firefox
					(window.execScript || function (data) {
						window["eval"].call(window, data);
					})(data);
				}
			},
	
			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},
	
			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},
	
			// args is for internal usage only
			each: function each(obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);
	
				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					}
	
					// A special, fast, case for the most common use of each
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					}
				}
	
				return obj;
			},
	
			// Support: Android<4.1, IE<9
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},
	
			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];
	
				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}
	
				return ret;
			},
	
			inArray: function inArray(elem, arr, i) {
				var len;
	
				if (arr) {
					if (indexOf) {
						return indexOf.call(arr, elem, i);
					}
	
					len = arr.length;
					i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
	
					for (; i < len; i++) {
						// Skip accessing in sparse arrays
						if (i in arr && arr[i] === elem) {
							return i;
						}
					}
				}
	
				return -1;
			},
	
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;
	
				while (j < len) {
					first[i++] = second[j++];
				}
	
				// Support: IE<9
				// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
				if (len !== len) {
					while (second[j] !== undefined) {
						first[i++] = second[j++];
					}
				}
	
				first.length = i;
	
				return first;
			},
	
			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;
	
				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}
	
				return matches;
			},
	
			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];
	
				// Go through the array, translating each of the items to their new values
				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
	
					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				}
	
				// Flatten any nested arrays
				return concat.apply([], ret);
			},
	
			// A global GUID counter for objects
			guid: 1,
	
			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var args, proxy, tmp;
	
				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}
	
				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}
	
				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};
	
				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
				return proxy;
			},
	
			now: function now() {
				return +new Date();
			},
	
			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});
	
		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});
	
		function isArraylike(obj) {
	
			// Support: iOS 8.2 (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = "length" in obj && obj.length,
			    type = jQuery.type(obj);
	
			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.2.0-pre
	  * http://sizzlejs.com/
	  *
	  * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2014-12-16
	  */
		function (window) {
	
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
	
	
			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
	
	
			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
	
	
			// General-purpose constants
			MAX_NEGATIVE = 1 << 31,
	
	
			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
	
			// Use a stripped-down indexOf as it's faster than native
			// http://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
	
			// Regular expressions
	
			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
	
			// http://www.w3.org/TR/css3-syntax/#characters
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
	
			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = characterEncoding.replace("w", "w#"),
	
	
			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
	
	
			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
	
	
			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
	
	
			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
	
	
			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			};
	
			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?
	
					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :
	
					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}
	
			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType,
				// QSA vars
				i, groups, old, nid, newContext, newSelector;
	
				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
	
				context = context || document;
				results = results || [];
				nodeType = context.nodeType;
	
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
	
					return results;
				}
	
				if (!seed && documentIsHTML) {
	
					// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
						// Speed-up: Sizzle("#ID")
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);
								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document (jQuery #6963)
								if (elem && elem.parentNode) {
									// Handle the case where IE, Opera, and Webkit return items
									// by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								// Context is not a document
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
	
							// Speed-up: Sizzle("TAG")
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
	
							// Speed-up: Sizzle(".CLASS")
						} else if ((m = match[3]) && support.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}
	
					// QSA path
					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType !== 1 && selector;
	
						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);
	
							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";
	
							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}
	
						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
	
				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}
	
			/**
	   * Create key-value caches of limited size
	   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];
	
				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}
	
			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}
	
			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created div and expects a boolean result
	   */
			function assert(fn) {
				var div = document.createElement("div");
	
				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}
	
			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;
	
				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}
	
			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
	
				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}
	
				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}
	
				return a ? 1 : -1;
			}
	
			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;
	
						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}
	
			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}
	
			// Expose support vars for convenience
			support = Sizzle.support = {};
	
			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};
	
			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;
	
				// If no document and documentElement is available, return
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}
	
				// Set our document
				document = doc;
				docElem = doc.documentElement;
				parent = doc.defaultView;
	
				// Support: IE>8
				// If iframe document is assigned to "document" variable and if iframe has been reloaded,
				// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
				// IE6-8 do not support the defaultView property so parent will be undefined
				if (parent && parent !== parent.top) {
					// IE11 does not have attachEvent, so all must suffer
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}
	
				/* Support tests
	   ---------------------------------------------------------------------- */
				documentIsHTML = !isXML(doc);
	
				/* Attributes
	   ---------------------------------------------------------------------- */
	
				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});
	
				/* getElement(s)By*
	   ---------------------------------------------------------------------- */
	
				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});
	
				// Support: IE<9
				support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
	
				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});
	
				// ID find and filter
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find["ID"];
	
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}
	
				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
	
						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
	
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);
	
					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}
	
						return tmp;
					}
					return results;
				};
	
				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};
	
				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */
	
				// QSA and matchesSelector support
	
				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];
	
				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];
	
				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
	
						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}
	
						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}
	
						// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}
	
						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
	
						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibing-combinator selector` fails
						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});
	
					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");
	
						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}
	
						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}
	
				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	
					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");
	
						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}
	
				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	
				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);
	
				// Element contains another
				// Purposefully does not implement inclusive descendent
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
	
				/* Sorting
	   ---------------------------------------------------------------------- */
	
				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {
	
					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}
	
					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
	
					// Otherwise we know they are disconnected
					1;
	
					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
	
						// Choose the first element that is related to our preferred document
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}
	
						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}
	
					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];
	
					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	
						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}
	
					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}
	
					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}
	
					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :
	
					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};
	
				return doc;
			};
	
			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};
	
			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");
	
				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	
					try {
						var ret = matches.call(elem, expr);
	
						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}
	
				return Sizzle(expr, document, null, [elem]).length > 0;
			};
	
			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};
	
			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				var fn = Expr.attrHandle[name.toLowerCase()],
	
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	
				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};
	
			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};
	
			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;
	
				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);
	
				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}
	
				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;
	
				return results;
			};
	
			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;
	
				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes
	
				return ret;
			};
	
			Expr = Sizzle.selectors = {
	
				// Can be adjusted by the user
				cacheLength: 50,
	
				createPseudo: markFunction,
	
				match: matchExpr,
	
				attrHandle: {},
	
				find: {},
	
				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},
	
				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);
	
						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
	
						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}
	
						return match.slice(0, 4);
					},
	
					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();
	
						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}
	
							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
	
							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}
	
						return match;
					},
	
					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];
	
						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}
	
						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";
	
							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
	
							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}
	
						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},
	
				filter: {
	
					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},
	
					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];
	
						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},
	
					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);
	
							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}
	
							result += "";
	
							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},
	
					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";
	
						return first === 1 && last === 0 ?
	
						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;
	
							if (parent) {
	
								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}
	
								start = [forward ? parent.firstChild : parent.lastChild];
	
								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
									// Seek `elem` from a previously-cached index
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];
	
									while (node = ++nodeIndex && node && node[dir] || (
	
									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {
	
										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
	
									// Use previously-cached element index if available
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];
	
									// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
								} else {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	
										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											// Cache the index of each encountered element
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}
	
											if (node === elem) {
												break;
											}
										}
									}
								}
	
								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},
	
					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
	
						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}
	
						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}
	
						return fn;
					}
				},
	
				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));
	
						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;
	
							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),
	
					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),
	
					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),
	
					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),
	
					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},
	
					"root": function root(elem) {
						return elem === docElem;
					},
	
					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},
	
					// Boolean properties
					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},
	
					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},
	
					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},
	
					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}
	
						return elem.selected === true;
					},
	
					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
	
					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},
	
					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},
	
					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},
	
					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},
	
					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (
	
						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},
	
					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),
	
					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),
	
					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),
	
					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};
	
			Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}
	
			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();
	
			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];
	
				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}
	
				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;
	
				while (soFar) {
	
					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}
	
					matched = false;
	
					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}
	
					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}
	
					if (!matched) {
						break;
					}
				}
	
				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};
	
			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}
	
			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;
	
				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :
	
				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];
	
					// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
	
									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									outerCache[dir] = newCache;
	
									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}
	
			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}
	
			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}
	
			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;
	
				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}
	
				return newUnmatched;
			}
	
			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
	
	
					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
	
	
					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?
	
					// ...intermediate processing is necessary
					[] :
	
					// ...otherwise use results directly
					results : matcherIn;
	
					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}
	
					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);
	
						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}
	
					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}
	
							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
	
									seed[temp] = !(results[temp] = elem);
								}
							}
						}
	
						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}
	
			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
	
	
				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];
	
				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
	
						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}
	
				return elementMatcher(matchers);
			}
	
			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
	
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),
	
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;
	
					if (outermost) {
						outermostContext = context !== document && context;
					}
	
					// Add elements passing elementMatchers directly to results
					// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
	
						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}
	
							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
	
					// Apply set filters to unmatched elements
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}
	
						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
	
							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}
	
						// Add matches to results
						push.apply(results, setMatched);
	
						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	
							Sizzle.uniqueSort(results);
						}
					}
	
					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
	
					return unmatched;
				};
	
				return bySet ? markFunction(superMatcher) : superMatcher;
			}
	
			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];
	
				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}
	
					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
	
					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};
	
			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);
	
				results = results || [];
	
				// Try to minimize operations if there is no seed and only one group
				if (match.length === 1) {
	
					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	
						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
	
							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}
	
						selector = selector.slice(tokens.shift().value.length);
					}
	
					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];
	
						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
	
								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}
	
								break;
							}
						}
					}
				}
	
				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};
	
			// One-time assignments
	
			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
	
			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;
	
			// Initialize against the default document
			setDocument();
	
			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});
	
			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
	
			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}
	
			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}
	
			return Sizzle;
		}(window);
	
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
	
		var rneedsContext = jQuery.expr.match.needsContext;
	
		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	
		var risSimple = /^.[^:#\[\.,]*$/;
	
		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					/* jshint -W018 */
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}
	
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}
	
			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}
	
				qualifier = jQuery.filter(qualifier, elements);
			}
	
			return jQuery.grep(elements, function (elem) {
				return jQuery.inArray(elem, qualifier) >= 0 !== not;
			});
		}
	
		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];
	
			if (not) {
				expr = ":not(" + expr + ")";
			}
	
			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};
	
		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret = [],
				    self = this,
				    len = self.length;
	
				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}
	
				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}
	
				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});
	
		// Initialize a jQuery object
	
	
		// A central reference to the root jQuery(document)
		var rootjQuery,
	
	
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}
	
			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
	
				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {
	
					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
	
						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
	
									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}
	
						return this;
	
						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
	
					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}
	
				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
				// Execute immediately if ready is not present
				selector(jQuery);
			}
	
			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray(selector, this);
		};
	
		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;
	
		// Initialize central reference
		rootjQuery = jQuery(document);
	
		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
		jQuery.extend({
			dir: function dir(elem, _dir, until) {
				var matched = [],
				    cur = elem[_dir];
	
				while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
					if (cur.nodeType === 1) {
						matched.push(cur);
					}
					cur = cur[_dir];
				}
				return matched;
			},
	
			sibling: function sibling(n, elem) {
				var r = [];
	
				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						r.push(n);
					}
				}
	
				return r;
			}
		});
	
		jQuery.fn.extend({
			has: function has(target) {
				var i,
				    targets = jQuery(target, this),
				    len = targets.length;
	
				return this.filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},
	
			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
	
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						// Always skip document fragments
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	
							matched.push(cur);
							break;
						}
					}
				}
	
				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},
	
			// Determine the position of an element within
			// the matched set of elements
			index: function index(elem) {
	
				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}
	
				// index in selector
				if (typeof elem === "string") {
					return jQuery.inArray(this[0], jQuery(elem));
				}
	
				// Locate the position of the desired element
				return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this);
			},
	
			add: function add(selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},
	
			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});
	
		function sibling(cur, dir) {
			do {
				cur = cur[dir];
			} while (cur && cur.nodeType !== 1);
	
			return cur;
		}
	
		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function contents(elem) {
				return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var ret = jQuery.map(this, fn, until);
	
				if (name.slice(-5) !== "Until") {
					selector = until;
				}
	
				if (selector && typeof selector === "string") {
					ret = jQuery.filter(selector, ret);
				}
	
				if (this.length > 1) {
					// Remove duplicates
					if (!guaranteedUnique[name]) {
						ret = jQuery.unique(ret);
					}
	
					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						ret = ret.reverse();
					}
				}
	
				return this.pushStack(ret);
			};
		});
		var rnotwhite = /\S+/g;
	
		// String to Object options format cache
		var optionsCache = {};
	
		// Convert String-formatted options into Object-formatted ones and store in cache
		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}
	
		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {
	
			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
	
			var // Flag to know if list is currently firing
			firing,
	
			// Last fire value (for non-forgettable lists)
			memory,
	
			// Flag to know if list was already fired
			_fired,
	
			// End of the loop when firing
			firingLength,
	
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
	
			// First callback to fire (used internally by add and fireWith)
			firingStart,
	
			// Actual callback list
			list = [],
	
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
	
			// Fire callbacks
			fire = function fire(data) {
				memory = options.memory && data;
				_fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
	
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {
						// First, we save the current length
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
						// Do we need to add the callbacks to the
						// current firing batch?
						if (firing) {
							firingLength = list.length;
							// With memory, if we're not firing then
							// we should call right away
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function remove() {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								// Handle firing indexes
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
				// Remove all callbacks from the list
				empty: function empty() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function disable() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function disabled() {
					return !list;
				},
				// Lock the list in its current state
				lock: function lock() {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function locked() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (list && (!_fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};
	
			return self;
		};
	
		jQuery.extend({
	
			Deferred: function Deferred(func) {
				var tuples = [
				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};
	
				// Keep pipe for back-compat
				_promise.pipe = _promise.then;
	
				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];
	
					// promise[ done | fail | progress ] = list.add
					_promise[tuple[1]] = list.add;
	
					// Handle state
					if (stateString) {
						list.add(function () {
							// state = [ resolved | rejected ]
							_state = stateString;
	
							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}
	
					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});
	
				// Make the deferred a promise
				_promise.promise(deferred);
	
				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}
	
				// All done!
				return deferred;
			},
	
			// Deferred helper
			when: function when(subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
	
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
	
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
	
				// Update function for both resolve and progress values
				updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;
	
				// add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}
	
				// if we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}
	
				return deferred.promise();
			}
		});
	
		// The deferred used on DOM ready
		var readyList;
	
		jQuery.fn.ready = function (fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);
	
			return this;
		};
	
		jQuery.extend({
			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,
	
			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,
	
			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},
	
			// Handle when the DOM is ready
			ready: function ready(wait) {
	
				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}
	
				// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
				if (!document.body) {
					return setTimeout(jQuery.ready);
				}
	
				// Remember that the DOM is ready
				jQuery.isReady = true;
	
				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}
	
				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
	
				// Trigger any bound ready events
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});
	
		/**
	  * Clean-up method for dom ready events
	  */
		function detach() {
			if (document.addEventListener) {
				document.removeEventListener("DOMContentLoaded", completed, false);
				window.removeEventListener("load", completed, false);
			} else {
				document.detachEvent("onreadystatechange", completed);
				window.detachEvent("onload", completed);
			}
		}
	
		/**
	  * The ready event handler and self cleanup method
	  */
		function completed() {
			// readyState === "complete" is good enough for us to call the dom ready in oldIE
			if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
				detach();
				jQuery.ready();
			}
		}
	
		jQuery.ready.promise = function (obj) {
			if (!readyList) {
	
				readyList = jQuery.Deferred();
	
				// Catch cases where $(document).ready() is called after the browser event has already occurred.
				// we once tried to use readyState "interactive" here, but it caused issues like the one
				// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
				if (document.readyState === "complete") {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					setTimeout(jQuery.ready);
	
					// Standards-based browsers support DOMContentLoaded
				} else if (document.addEventListener) {
					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", completed, false);
	
					// A fallback to window.onload, that will always work
					window.addEventListener("load", completed, false);
	
					// If IE event model is used
				} else {
					// Ensure firing before onload, maybe late but safe also for iframes
					document.attachEvent("onreadystatechange", completed);
	
					// A fallback to window.onload, that will always work
					window.attachEvent("onload", completed);
	
					// If IE and not a frame
					// continually check to see if the document is ready
					var top = false;
	
					try {
						top = window.frameElement == null && document.documentElement;
					} catch (e) {}
	
					if (top && top.doScroll) {
						(function doScrollCheck() {
							if (!jQuery.isReady) {
	
								try {
									// Use the trick by Diego Perini
									// http://javascript.nwbox.com/IEContentLoaded/
									top.doScroll("left");
								} catch (e) {
									return setTimeout(doScrollCheck, 50);
								}
	
								// detach all dom ready events
								detach();
	
								// and execute any waiting functions
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise(obj);
		};
	
		var strundefined =  true ? "undefined" : _typeof(undefined);
	
		// Support: IE<9
		// Iteration over object's inherited properties before its own
		var i;
		for (i in jQuery(support)) {
			break;
		}
		support.ownLast = i !== "0";
	
		// Note: most support tests are defined in their respective modules.
		// false until the test is run
		support.inlineBlockNeedsLayout = false;
	
		// Execute ASAP in case we need to set body.style.zoom
		jQuery(function () {
			// Minified: var a,b,c,d
			var val, div, body, container;
	
			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				// Return for frameset docs that don't have a body
				return;
			}
	
			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);
	
			if (_typeof(div.style.zoom) !== strundefined) {
				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
				support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
				if (val) {
					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}
	
			body.removeChild(container);
		});
	
		(function () {
			var div = document.createElement("div");
	
			// Execute the test only if not already executed in another module.
			if (support.deleteExpando == null) {
				// Support: IE<9
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
	
			// Null elements to avoid leaks in IE.
			div = null;
		})();
	
		/**
	  * Determines whether an object can have data
	  */
		jQuery.acceptData = function (elem) {
			var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			    nodeType = +elem.nodeType || 1;
	
			// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
			return nodeType !== 1 && nodeType !== 9 ? false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
		};
	
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;
	
		function dataAttr(elem, key, data) {
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
	
				var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
	
				data = elem.getAttribute(name);
	
				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}
	
					// Make sure we set the data so it isn't changed later
					jQuery.data(elem, key, data);
				} else {
					data = undefined;
				}
			}
	
			return data;
		}
	
		// checks a cache object for emptiness
		function isEmptyDataObject(obj) {
			var name;
			for (name in obj) {
	
				// if the public data object is empty, the private is still empty
				if (name === "data" && jQuery.isEmptyObject(obj[name])) {
					continue;
				}
				if (name !== "toJSON") {
					return false;
				}
			}
	
			return true;
		}
	
		function internalData(elem, name, data, pvt /* Internal Use Only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var ret,
			    thisCache,
			    internalKey = jQuery.expando,
	
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
	
			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
				return;
			}
	
			if (!id) {
				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if (isNode) {
					id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}
	
			if (!cache[id]) {
				// Avoid exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				cache[id] = isNode ? {} : { toJSON: jQuery.noop };
			}
	
			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}
	
			thisCache = cache[id];
	
			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}
	
				thisCache = thisCache.data;
			}
	
			if (data !== undefined) {
				thisCache[jQuery.camelCase(name)] = data;
			}
	
			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if (typeof name === "string") {
	
				// First Try to find as-is property data
				ret = thisCache[name];
	
				// Test for null|undefined property data
				if (ret == null) {
	
					// Try to find the camelCased property
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}
	
			return ret;
		}
	
		function internalRemoveData(elem, name, pvt) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var thisCache,
			    i,
			    isNode = elem.nodeType,
	
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;
	
			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if (!cache[id]) {
				return;
			}
	
			if (name) {
	
				thisCache = pvt ? cache[id] : cache[id].data;
	
				if (thisCache) {
	
					// Support array or space separated string names for data keys
					if (!jQuery.isArray(name)) {
	
						// try the string as a key before any manipulation
						if (name in thisCache) {
							name = [name];
						} else {
	
							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					} else {
						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = name.concat(jQuery.map(name, jQuery.camelCase));
					}
	
					i = name.length;
					while (i--) {
						delete thisCache[name[i]];
					}
	
					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
						return;
					}
				}
			}
	
			// See jQuery.data for more information
			if (!pvt) {
				delete cache[id].data;
	
				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}
	
			// Destroy the cache
			if (isNode) {
				jQuery.cleanData([elem], true);
	
				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
				/* jshint eqeqeq: false */
			} else if (support.deleteExpando || cache != cache.window) {
				/* jshint eqeqeq: true */
				delete cache[id];
	
				// When all else fails, null
			} else {
				cache[id] = null;
			}
		}
	
		jQuery.extend({
			cache: {},
	
			// The following elements (space-suffixed to avoid Object.prototype collisions)
			// throw uncatchable exceptions if you attempt to set expando properties
			noData: {
				"applet ": true,
				"embed ": true,
				// ...but Flash objects (which have this classid) *can* handle expandos
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
	
			hasData: function hasData(elem) {
				elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
				return !!elem && !isEmptyDataObject(elem);
			},
	
			data: function data(elem, name, _data) {
				return internalData(elem, name, _data);
			},
	
			removeData: function removeData(elem, name) {
				return internalRemoveData(elem, name);
			},
	
			// For internal use only.
			_data: function _data(elem, name, data) {
				return internalData(elem, name, data, true);
			},
	
			_removeData: function _removeData(elem, name) {
				return internalRemoveData(elem, name, true);
			}
		});
	
		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;
	
				// Special expections of .data basically thwart jQuery.access,
				// so implement the relevant behavior ourselves
	
				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = jQuery.data(elem);
	
						if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
							i = attrs.length;
							while (i--) {
	
								// Support: IE11+
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							jQuery._data(elem, "parsedAttrs", true);
						}
					}
	
					return data;
				}
	
				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						jQuery.data(this, key);
					});
				}
	
				return arguments.length > 1 ?
	
				// Sets one value
				this.each(function () {
					jQuery.data(this, key, value);
				}) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
			},
	
			removeData: function removeData(key) {
				return this.each(function () {
					jQuery.removeData(this, key);
				});
			}
		});
	
		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;
	
				if (elem) {
					type = (type || "fx") + "queue";
					queue = jQuery._data(elem, type);
	
					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = jQuery._data(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},
	
			dequeue: function dequeue(elem, type) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};
	
				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}
	
				if (fn) {
	
					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					// clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}
	
				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},
	
			// not intended for public consumption - generates a queueHooks object, or returns the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return jQuery._data(elem, key) || jQuery._data(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						jQuery._removeData(elem, type + "queue");
						jQuery._removeData(elem, key);
					})
				});
			}
		});
	
		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;
	
				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}
	
				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}
	
				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);
	
					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);
	
					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};
	
				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";
	
				while (i--) {
					tmp = jQuery._data(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	
		var cssExpand = ["Top", "Right", "Bottom", "Left"];
	
		var isHidden = function isHidden(elem, el) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};
	
		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    length = elems.length,
			    bulk = key == null;
	
			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}
	
				// Sets one value
			} else if (value !== undefined) {
				chainable = true;
	
				if (!jQuery.isFunction(value)) {
					raw = true;
				}
	
				if (bulk) {
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;
	
						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}
	
				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}
	
			return chainable ? elems :
	
			// Gets
			bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		};
		var rcheckableType = /^(?:checkbox|radio)$/i;
	
		(function () {
			// Minified: var a,b,c
			var input = document.createElement("input"),
			    div = document.createElement("div"),
			    fragment = document.createDocumentFragment();
	
			// Setup
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
			// IE strips leading whitespace when .innerHTML is used
			support.leadingWhitespace = div.firstChild.nodeType === 3;
	
			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			support.tbody = !div.getElementsByTagName("tbody").length;
	
			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			support.htmlSerialize = !!div.getElementsByTagName("link").length;
	
			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
	
			// Check if a disconnected checkbox will retain its checked
			// value of true after appended to the DOM (IE6/7)
			input.type = "checkbox";
			input.checked = true;
			fragment.appendChild(input);
			support.appendChecked = input.checked;
	
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			// Support: IE6-IE11+
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	
			// #11217 - WebKit loses check when the name is after the checked attribute
			fragment.appendChild(div);
			div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
	
			// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
			// old WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
	
			// Support: IE<9
			// Opera does not clone events (and typeof div.attachEvent === undefined).
			// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
			support.noCloneEvent = true;
			if (div.attachEvent) {
				div.attachEvent("onclick", function () {
					support.noCloneEvent = false;
				});
	
				div.cloneNode(true).click();
			}
	
			// Execute the test only if not already executed in another module.
			if (support.deleteExpando == null) {
				// Support: IE<9
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
		})();
	
		(function () {
			var i,
			    eventName,
			    div = document.createElement("div");
	
			// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
			for (i in { submit: true, change: true, focusin: true }) {
				eventName = "on" + i;
	
				if (!(support[i + "Bubbles"] = eventName in window)) {
					// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
					div.setAttribute(eventName, "t");
					support[i + "Bubbles"] = div.attributes[eventName].expando === false;
				}
			}
	
			// Null elements to avoid leaks in IE.
			div = null;
		})();
	
		var rformElems = /^(?:input|select|textarea)$/i,
		    rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
		function returnTrue() {
			return true;
		}
	
		function returnFalse() {
			return false;
		}
	
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}
	
		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {
	
			global: {},
	
			add: function add(elem, types, handler, data, selector) {
				var tmp,
				    events,
				    t,
				    handleObjIn,
				    special,
				    eventHandle,
				    handleObj,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery._data(elem);
	
				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}
	
				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}
	
				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}
	
				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
					};
					// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
					eventHandle.elem = elem;
				}
	
				// Handle multiple events separated by a space
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}
	
					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};
	
					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;
	
					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};
	
					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);
	
					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;
	
						// Only use addEventListener/attachEvent if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							// Bind the global event handler to the element
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							} else if (elem.attachEvent) {
								elem.attachEvent("on" + type, eventHandle);
							}
						}
					}
	
					if (special.add) {
						special.add.call(elem, handleObj);
	
						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}
	
					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}
	
					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
	
				// Nullify elem to prevent memory leaks in IE
				elem = null;
			},
	
			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {
				var j,
				    handleObj,
				    tmp,
				    origCount,
				    t,
				    events,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery.hasData(elem) && jQuery._data(elem);
	
				if (!elemData || !(events = elemData.events)) {
					return;
				}
	
				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}
	
					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
	
					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];
	
						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);
	
							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}
	
					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}
	
						delete events[type];
					}
				}
	
				// Remove the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
	
					// removeData also checks for emptiness and clears the expando if empty
					// so use it instead of delete
					jQuery._removeData(elem, "events");
				}
			},
	
			trigger: function trigger(event, data, elem, onlyHandlers) {
				var handle,
				    ontype,
				    cur,
				    bubbleType,
				    special,
				    tmp,
				    i,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	
				cur = tmp = elem = elem || document;
	
				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}
	
				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}
	
				if (type.indexOf(".") >= 0) {
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;
	
				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);
	
				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	
				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}
	
				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);
	
				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}
	
				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
	
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}
	
					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}
	
				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
	
					event.type = i > 1 ? bubbleType : special.bindType || type;
	
					// jQuery handler
					handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}
	
					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;
	
				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {
	
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
	
						// Call a native DOM method on the target with the same name name as the event.
						// Can't use an .isFunction() check here because IE6/7 fails that test.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && elem[type] && !jQuery.isWindow(elem)) {
	
							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];
	
							if (tmp) {
								elem[ontype] = null;
							}
	
							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							try {
								elem[type]();
							} catch (e) {
								// IE<9 dies on focus/blur to hidden element (#1486,#12518)
								// only reproducible on winXP IE8 native, not IE9 in IE8 mode
							}
							jQuery.event.triggered = undefined;
	
							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}
	
				return event.result;
			},
	
			dispatch: function dispatch(event) {
	
				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);
	
				var i,
				    ret,
				    handleObj,
				    matched,
				    j,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};
	
				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;
	
				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}
	
				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);
	
				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;
	
					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
	
						// Triggered event must either 1) have no namespace, or
						// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
	
							event.handleObj = handleObj;
							event.data = handleObj.data;
	
							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
	
							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}
	
				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}
	
				return event.result;
			},
	
			handlers: function handlers(event, _handlers) {
				var sel,
				    handleObj,
				    matches,
				    i,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;
	
				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				// Avoid non-left-click bubbling in Firefox (#3861)
				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
	
					/* jshint eqeqeq: false */
					for (; cur != this; cur = cur.parentNode || this) {
						/* jshint eqeqeq: true */
	
						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];
	
								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";
	
								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}
	
				// Add the remaining (directly-bound) handlers
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}
	
				return handlerQueue;
			},
	
			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}
	
				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];
	
				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
	
				event = new jQuery.Event(originalEvent);
	
				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}
	
				// Support: IE<9
				// Fix target property (#1925)
				if (!event.target) {
					event.target = originalEvent.srcElement || document;
				}
	
				// Support: Chrome 23+, Safari?
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}
	
				// Support: IE<9
				// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
				event.metaKey = !!event.metaKey;
	
				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},
	
			// Includes some event props shared by KeyEvent and MouseEvent
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
			fixHooks: {},
	
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {
	
					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}
	
					return event;
				}
			},
	
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(event, original) {
					var body,
					    eventDoc,
					    doc,
					    button = original.button,
					    fromElement = original.fromElement;
	
					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;
	
						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}
	
					// Add relatedTarget, if necessary
					if (!event.relatedTarget && fromElement) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}
	
					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}
	
					return event;
				}
			},
	
			special: {
				load: {
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							try {
								this.focus();
								return false;
							} catch (e) {
								// Support: IE<9
								// If we error on focus to hidden element (#1486, #12518),
								// let .trigger() run the handlers
							}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false;
						}
					},
	
					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},
	
				beforeunload: {
					postDispatch: function postDispatch(event) {
	
						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},
	
			simulate: function simulate(type, elem, event, bubble) {
				// Piggyback on a donor event to simulate a different one.
				// Fake originalEvent to avoid donor's stopPropagation, but if the
				// simulated event prevents default then we do the same on the donor.
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};
	
		jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		} : function (elem, type, handle) {
			var name = "on" + type;
	
			if (elem.detachEvent) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if (_typeof(elem[name]) === strundefined) {
					elem[name] = null;
				}
	
				elem.detachEvent(name, handle);
			}
		};
	
		jQuery.Event = function (src, props) {
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}
	
			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;
	
				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ? returnTrue : returnFalse;
	
				// Event type
			} else {
				this.type = src;
			}
	
			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}
	
			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();
	
			// Mark it as fixed
			this[jQuery.expando] = true;
		};
	
		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
	
			preventDefault: function preventDefault() {
				var e = this.originalEvent;
	
				this.isDefaultPrevented = returnTrue;
				if (!e) {
					return;
				}
	
				// If preventDefault exists, run it on the original event
				if (e.preventDefault) {
					e.preventDefault();
	
					// Support: IE
					// Otherwise set the returnValue property of the original event to false
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;
	
				this.isPropagationStopped = returnTrue;
				if (!e) {
					return;
				}
				// If stopPropagation exists, run it on the original event
				if (e.stopPropagation) {
					e.stopPropagation();
				}
	
				// Support: IE
				// Set the cancelBubble property of the original event to true
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;
	
				this.isImmediatePropagationStopped = returnTrue;
	
				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}
	
				this.stopPropagation();
			}
		};
	
		// Create mouseenter/leave events using mouseover/out and event-time checks
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,
	
				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;
	
					// For mousenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});
	
		// IE submit delegation
		if (!support.submitBubbles) {
	
			jQuery.event.special.submit = {
				setup: function setup() {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					// Lazy-add a submit handler when a descendant form may potentially be submitted
					jQuery.event.add(this, "click._submit keypress._submit", function (e) {
						// Node name check avoids a VML-related crash in IE (#9807)
						var elem = e.target,
						    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
						if (form && !jQuery._data(form, "submitBubbles")) {
							jQuery.event.add(form, "submit._submit", function (event) {
								event._submit_bubble = true;
							});
							jQuery._data(form, "submitBubbles", true);
						}
					});
					// return undefined since we don't need an event listener
				},
	
				postDispatch: function postDispatch(event) {
					// If form was submitted by the user, bubble the event up the tree
					if (event._submit_bubble) {
						delete event._submit_bubble;
						if (this.parentNode && !event.isTrigger) {
							jQuery.event.simulate("submit", this.parentNode, event, true);
						}
					}
				},
	
				teardown: function teardown() {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
					jQuery.event.remove(this, "._submit");
				}
			};
		}
	
		// IE change delegation and checkbox/radio fix
		if (!support.changeBubbles) {
	
			jQuery.event.special.change = {
	
				setup: function setup() {
	
					if (rformElems.test(this.nodeName)) {
						// IE doesn't fire change on a check/radio until blur; trigger it on click
						// after a propertychange. Eat the blur-change in special.change.handle.
						// This still fires onchange a second time for check/radio after blur.
						if (this.type === "checkbox" || this.type === "radio") {
							jQuery.event.add(this, "propertychange._change", function (event) {
								if (event.originalEvent.propertyName === "checked") {
									this._just_changed = true;
								}
							});
							jQuery.event.add(this, "click._change", function (event) {
								if (this._just_changed && !event.isTrigger) {
									this._just_changed = false;
								}
								// Allow triggered, simulated change events (#11500)
								jQuery.event.simulate("change", this, event, true);
							});
						}
						return false;
					}
					// Delegated event; lazy-add a change handler on descendant inputs
					jQuery.event.add(this, "beforeactivate._change", function (e) {
						var elem = e.target;
	
						if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
							jQuery.event.add(elem, "change._change", function (event) {
								if (this.parentNode && !event.isSimulated && !event.isTrigger) {
									jQuery.event.simulate("change", this.parentNode, event, true);
								}
							});
							jQuery._data(elem, "changeBubbles", true);
						}
					});
				},
	
				handle: function handle(event) {
					var elem = event.target;
	
					// Swallow native change events from checkbox/radio, we already triggered them above
					if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
						return event.handleObj.handler.apply(this, arguments);
					}
				},
	
				teardown: function teardown() {
					jQuery.event.remove(this, "._change");
	
					return !rformElems.test(this.nodeName);
				}
			};
		}
	
		// Create "bubbling" focus and blur events
		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
	
				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};
	
				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix);
	
						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						jQuery._data(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix) - 1;
	
						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							jQuery._removeData(doc, fix);
						} else {
							jQuery._data(doc, fix, attaches);
						}
					}
				};
			});
		}
	
		jQuery.fn.extend({
	
			on: function on(types, selector, data, fn, /*INTERNAL*/one) {
				var type, origFn;
	
				// Types can be a map of types/handlers
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					// ( types-Object, selector, data )
					if (typeof selector !== "string") {
						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}
	
				if (data == null && fn == null) {
					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {
						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}
	
				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {
						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};
					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function one(types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},
	
			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});
	
		function createSafeFragment(document) {
			var list = nodeNames.split("|"),
			    safeFrag = document.createDocumentFragment();
	
			if (safeFrag.createElement) {
				while (list.length) {
					safeFrag.createElement(list.pop());
				}
			}
			return safeFrag;
		}
	
		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		    rleadingWhitespace = /^\s+/,
		    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rtbody = /<tbody/i,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	
			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		    safeFragment = createSafeFragment(document),
		    fragmentDiv = safeFragment.appendChild(document.createElement("div"));
	
		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		function getAll(context, tag) {
			var elems,
			    elem,
			    i = 0,
			    found = _typeof(context.getElementsByTagName) !== strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== strundefined ? context.querySelectorAll(tag || "*") : undefined;
	
			if (!found) {
				for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
					if (!tag || jQuery.nodeName(elem, tag)) {
						found.push(elem);
					} else {
						jQuery.merge(found, getAll(elem, tag));
					}
				}
			}
	
			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
		}
	
		// Used in buildFragment, fixes the defaultChecked property
		function fixDefaultChecked(elem) {
			if (rcheckableType.test(elem.type)) {
				elem.defaultChecked = elem.checked;
			}
		}
	
		// Support: IE<8
		// Manipulating tables requires a tbody
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}
	
		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}
	
		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var elem,
			    i = 0;
			for (; (elem = elems[i]) != null; i++) {
				jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
			}
		}
	
		function cloneCopyEvent(src, dest) {
	
			if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
				return;
			}
	
			var type,
			    i,
			    l,
			    oldData = jQuery._data(src),
			    curData = jQuery._data(dest, oldData),
			    events = oldData.events;
	
			if (events) {
				delete curData.handle;
				curData.events = {};
	
				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
	
			// make the cloned public data object a copy from the original
			if (curData.data) {
				curData.data = jQuery.extend({}, curData.data);
			}
		}
	
		function fixCloneNodeIssues(src, dest) {
			var nodeName, e, data;
	
			// We do not need to do anything for non-Elements
			if (dest.nodeType !== 1) {
				return;
			}
	
			nodeName = dest.nodeName.toLowerCase();
	
			// IE6-8 copies events bound via attachEvent when using cloneNode.
			if (!support.noCloneEvent && dest[jQuery.expando]) {
				data = jQuery._data(dest);
	
				for (e in data.events) {
					jQuery.removeEvent(dest, e, data.handle);
				}
	
				// Event data gets referenced instead of copied if the expando gets copied too
				dest.removeAttribute(jQuery.expando);
			}
	
			// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
			if (nodeName === "script" && dest.text !== src.text) {
				disableScript(dest).text = src.text;
				restoreScript(dest);
	
				// IE6-10 improperly clones children of object elements using classid.
				// IE10 throws NoModificationAllowedError if parent is null, #12132.
			} else if (nodeName === "object") {
				if (dest.parentNode) {
					dest.outerHTML = src.outerHTML;
				}
	
				// This path appears unavoidable for IE9. When cloning an object
				// element in IE9, the outerHTML strategy above is not sufficient.
				// If the src has innerHTML and the destination does not,
				// copy the src.innerHTML into the dest.innerHTML. #10324
				if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
					dest.innerHTML = src.innerHTML;
				}
			} else if (nodeName === "input" && rcheckableType.test(src.type)) {
				// IE6-8 fails to persist the checked state of a cloned checkbox
				// or radio button. Worse, IE6-7 fail to give the cloned element
				// a checked appearance if the defaultChecked value isn't also set
	
				dest.defaultChecked = dest.checked = src.checked;
	
				// IE6-7 get confused and end up setting the value of a cloned
				// checkbox/radio button to an empty string instead of "on"
				if (dest.value !== src.value) {
					dest.value = src.value;
				}
	
				// IE6-8 fails to return the selected option to the default selected
				// state when cloning options
			} else if (nodeName === "option") {
				dest.defaultSelected = dest.selected = src.defaultSelected;
	
				// IE6-8 fails to set the defaultValue to the correct value when
				// cloning other types of input fields
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}
	
		jQuery.extend({
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var destElements,
				    node,
				    clone,
				    i,
				    srcElements,
				    inPage = jQuery.contains(elem.ownerDocument, elem);
	
				if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
					clone = elem.cloneNode(true);
	
					// IE<=8 does not properly clone detached, unknown element nodes
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
				}
	
				if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
	
					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);
	
					// Fix all IE cloning issues
					for (i = 0; (node = srcElements[i]) != null; ++i) {
						// Ensure that the destination node is not null; Fixes #9587
						if (destElements[i]) {
							fixCloneNodeIssues(node, destElements[i]);
						}
					}
				}
	
				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);
	
						for (i = 0; (node = srcElements[i]) != null; i++) {
							cloneCopyEvent(node, destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}
	
				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}
	
				destElements = srcElements = node = null;
	
				// Return the cloned set
				return clone;
			},
	
			buildFragment: function buildFragment(elems, context, scripts, selection) {
				var j,
				    elem,
				    contains,
				    tmp,
				    tag,
				    tbody,
				    wrap,
				    l = elems.length,
	
	
				// Ensure a safe fragment
				safe = createSafeFragment(context),
				    nodes = [],
				    i = 0;
	
				for (; i < l; i++) {
					elem = elems[i];
	
					if (elem || elem === 0) {
	
						// Add nodes directly
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
	
							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));
	
							// Convert html into DOM nodes
						} else {
							tmp = tmp || safe.appendChild(context.createElement("div"));
	
							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
	
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
	
							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}
	
							// Manually add leading whitespace removed by IE
							if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
								nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
							}
	
							// Remove IE's autoinserted <tbody> from table fragments
							if (!support.tbody) {
	
								// String was a <table>, *may* have spurious <tbody>
								elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :
	
								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
	
								j = elem && elem.childNodes.length;
								while (j--) {
									if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
										elem.removeChild(tbody);
									}
								}
							}
	
							jQuery.merge(nodes, tmp.childNodes);
	
							// Fix #12392 for WebKit and IE > 9
							tmp.textContent = "";
	
							// Fix #12392 for oldIE
							while (tmp.firstChild) {
								tmp.removeChild(tmp.firstChild);
							}
	
							// Remember the top-level container for proper cleanup
							tmp = safe.lastChild;
						}
					}
				}
	
				// Fix #11356: Clear elements from fragment
				if (tmp) {
					safe.removeChild(tmp);
				}
	
				// Reset defaultChecked for any radios and checkboxes
				// about to be appended to the DOM in IE 6/7 (#8060)
				if (!support.appendChecked) {
					jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
				}
	
				i = 0;
				while (elem = nodes[i++]) {
	
					// #4087 - If origin and destination elements are the same, and this is
					// that element, do not do anything
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}
	
					contains = jQuery.contains(elem.ownerDocument, elem);
	
					// Append to fragment
					tmp = getAll(safe.appendChild(elem), "script");
	
					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}
	
					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}
	
				tmp = null;
	
				return safe;
			},
	
			cleanData: function cleanData(elems, /* internal */acceptData) {
				var elem,
				    type,
				    id,
				    data,
				    i = 0,
				    internalKey = jQuery.expando,
				    cache = jQuery.cache,
				    deleteExpando = support.deleteExpando,
				    special = jQuery.event.special;
	
				for (; (elem = elems[i]) != null; i++) {
					if (acceptData || jQuery.acceptData(elem)) {
	
						id = elem[internalKey];
						data = id && cache[id];
	
						if (data) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
	
										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
	
							// Remove cache only if it was not already removed by jQuery.event.remove
							if (cache[id]) {
	
								delete cache[id];
	
								// IE does not allow us to delete expando properties from nodes,
								// nor does it have a removeAttribute function on Document nodes;
								// we must handle all of these cases
								if (deleteExpando) {
									delete elem[internalKey];
								} else if (_typeof(elem.removeAttribute) !== strundefined) {
									elem.removeAttribute(internalKey);
								} else {
									elem[internalKey] = null;
								}
	
								deletedIds.push(id);
							}
						}
					}
				}
			}
		});
	
		jQuery.fn.extend({
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
				}, null, value, arguments.length);
			},
	
			append: function append() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},
	
			prepend: function prepend() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},
	
			before: function before() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},
	
			after: function after() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},
	
			remove: function remove(selector, keepData /* Internal Use Only */) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;
	
				for (; (elem = elems[i]) != null; i++) {
	
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}
	
					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}
	
				return this;
			},
	
			empty: function empty() {
				var elem,
				    i = 0;
	
				for (; (elem = this[i]) != null; i++) {
					// Remove element nodes and prevent memory leaks
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));
					}
	
					// Remove any remaining nodes
					while (elem.firstChild) {
						elem.removeChild(elem.firstChild);
					}
	
					// If this is a select, ensure that it displays empty (#12336)
					// Support: IE<9
					if (elem.options && jQuery.nodeName(elem, "select")) {
						elem.options.length = 0;
					}
				}
	
				return this;
			},
	
			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},
	
			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;
	
					if (value === undefined) {
						return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
					}
	
					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	
						value = value.replace(rxhtmlTag, "<$1></$2>");
	
						try {
							for (; i < l; i++) {
								// Remove element nodes and prevent memory leaks
								elem = this[i] || {};
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}
	
							elem = 0;
	
							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}
	
					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},
	
			replaceWith: function replaceWith() {
				var arg = arguments[0];
	
				// Make the changes, replacing each context element with the new content
				this.domManip(arguments, function (elem) {
					arg = this.parentNode;
	
					jQuery.cleanData(getAll(this));
	
					if (arg) {
						arg.replaceChild(elem, this);
					}
				});
	
				// Force removal if there was no new content (e.g., from empty arguments)
				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},
	
			detach: function detach(selector) {
				return this.remove(selector, true);
			},
	
			domManip: function domManip(args, callback) {
	
				// Flatten any nested arrays
				args = concat.apply([], args);
	
				var first,
				    node,
				    hasScripts,
				    scripts,
				    doc,
				    fragment,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);
	
				// We can't cloneNode fragments that contain checked, in WebKit
				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}
	
				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;
	
					if (fragment.childNodes.length === 1) {
						fragment = first;
					}
	
					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;
	
						// Use the original fragment for the last item instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;
	
							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);
	
								// Keep references to cloned scripts for later restoration
								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}
	
							callback.call(this[i], node, i);
						}
	
						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;
	
							// Reenable scripts
							jQuery.map(scripts, restoreScript);
	
							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
	
									if (node.src) {
										// Optional AJAX dependency, but won't run scripts if not present
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
									}
								}
							}
						}
	
						// Fix #11809: Avoid leaking memory
						fragment = first = null;
					}
				}
	
				return this;
			}
		});
	
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    i = 0,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1;
	
				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);
	
					// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
					push.apply(ret, elems.get());
				}
	
				return this.pushStack(ret);
			};
		});
	
		var iframe,
		    elemdisplay = {};
	
		/**
	  * Retrieve the actual display of a element
	  * @param {String} name nodeName of the element
	  * @param {Object} doc Document object
	  */
		// Called only from within defaultDisplay
		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
	
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?
	
			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css(elem[0], "display");
	
			// We don't have any data stored on the element,
			// so use "detach" method as fast way to get rid of the element
			elem.detach();
	
			return display;
		}
	
		/**
	  * Try to determine the default display value of an element
	  * @param {String} nodeName
	  */
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];
	
			if (!display) {
				display = actualDisplay(nodeName, doc);
	
				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {
	
					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
	
					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
	
					// Support: IE
					doc.write();
					doc.close();
	
					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}
	
				// Store the correct default display
				elemdisplay[nodeName] = display;
			}
	
			return display;
		}
	
		(function () {
			var shrinkWrapBlocksVal;
	
			support.shrinkWrapBlocks = function () {
				if (shrinkWrapBlocksVal != null) {
					return shrinkWrapBlocksVal;
				}
	
				// Will be changed later if needed.
				shrinkWrapBlocksVal = false;
	
				// Minified: var b,c,d
				var div, body, container;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}
	
				// Setup
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				if (_typeof(div.style.zoom) !== strundefined) {
					// Reset CSS: box-sizing; display; margin; border
					div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
					div.appendChild(document.createElement("div")).style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}
	
				body.removeChild(container);
	
				return shrinkWrapBlocksVal;
			};
		})();
		var rmargin = /^margin/;
	
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	
		var getStyles,
		    curCSS,
		    rposition = /^(top|right|bottom|left)$/;
	
		if (window.getComputedStyle) {
			getStyles = function getStyles(elem) {
				// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
				// IE throws on elements created in popups
				// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
				if (elem.ownerDocument.defaultView.opener) {
					return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
				}
	
				return window.getComputedStyle(elem, null);
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
	
				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
	
				if (computed) {
	
					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}
	
					// A tribute to the "awesome hack by Dean Edwards"
					// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
					// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
					// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
					if (rnumnonpx.test(ret) && rmargin.test(name)) {
	
						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;
	
						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;
	
						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}
	
				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "";
			};
		} else if (document.documentElement.currentStyle) {
			getStyles = function getStyles(elem) {
				return elem.currentStyle;
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var left,
				    rs,
				    rsLeft,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
				ret = computed ? computed[name] : undefined;
	
				// Avoid setting ret to empty string here
				// so we don't default to auto
				if (ret == null && style && style[name]) {
					ret = style[name];
				}
	
				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels
				// but not position css attributes, as those are proportional to the parent element instead
				// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
				if (rnumnonpx.test(ret) && !rposition.test(name)) {
	
					// Remember the original values
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;
	
					// Put in the new values to get a computed value out
					if (rsLeft) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";
	
					// Revert the changed values
					style.left = left;
					if (rsLeft) {
						rs.left = rsLeft;
					}
				}
	
				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "" || "auto";
			};
		}
	
		function addGetHookIf(conditionFn, hookFn) {
			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					var condition = conditionFn();
	
					if (condition == null) {
						// The test was not ready at this point; screw the hook this time
						// but check again when needed next time.
						return;
					}
	
					if (condition) {
						// Hook not needed (or it's not possible to use it due to missing dependency),
						// remove it.
						// Since there are no other hooks for marginRight, remove the whole object.
						delete this.get;
						return;
					}
	
					// Hook needed; redefine it so that the support test is not executed again.
	
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}
	
		(function () {
			// Minified: var b,c,d,e,f,g, h,i
			var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
	
			// Setup
			div = document.createElement("div");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
			style = a && a.style;
	
			// Finish early in limited (non-browser) environments
			if (!style) {
				return;
			}
	
			style.cssText = "float:left;opacity:.5";
	
			// Support: IE<9
			// Make sure that element opacity exists (as opposed to filter)
			support.opacity = style.opacity === "0.5";
	
			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			support.cssFloat = !!style.cssFloat;
	
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";
	
			jQuery.extend(support, {
				reliableHiddenOffsets: function reliableHiddenOffsets() {
					if (reliableHiddenOffsetsVal == null) {
						computeStyleTests();
					}
					return reliableHiddenOffsetsVal;
				},
	
				boxSizingReliable: function boxSizingReliable() {
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return boxSizingReliableVal;
				},
	
				pixelPosition: function pixelPosition() {
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return pixelPositionVal;
				},
	
				// Support: Android 2.3
				reliableMarginRight: function reliableMarginRight() {
					if (reliableMarginRightVal == null) {
						computeStyleTests();
					}
					return reliableMarginRightVal;
				}
			});
	
			function computeStyleTests() {
				// Minified: var b,c,d,j
				var div, body, container, contents;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}
	
				// Setup
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
	
				// Support: IE<9
				// Assume reasonable values in the absence of getComputedStyle
				pixelPositionVal = boxSizingReliableVal = false;
				reliableMarginRightVal = true;
	
				// Check for getComputedStyle so that this code is not run in IE<9.
				if (window.getComputedStyle) {
					pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
					boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
	
					// Support: Android 2.3
					// Div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					contents = div.appendChild(document.createElement("div"));
	
					// Reset CSS: box-sizing; display; margin; border; padding
					contents.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					contents.style.marginRight = contents.style.width = "0";
					div.style.width = "1px";
	
					reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
	
					div.removeChild(contents);
				}
	
				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				contents = div.getElementsByTagName("td");
				contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				if (reliableHiddenOffsetsVal) {
					contents[0].style.display = "";
					contents[1].style.display = "none";
					reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				}
	
				body.removeChild(container);
			}
		})();
	
		// A method for quickly swapping in/out CSS properties to get correct calculations.
		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};
	
			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}
	
			ret = callback.apply(elem, args || []);
	
			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}
	
			return ret;
		};
	
		var ralpha = /alpha\([^)]*\)/i,
		    ropacity = /opacity\s*=\s*([^)]*)/,
	
	
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];
	
		// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(style, name) {
	
			// shortcut for names that are not vendor prefixed
			if (name in style) {
				return name;
			}
	
			// check for vendor prefixed names
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;
	
			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}
	
			return origName;
		}
	
		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;
	
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
	
				values[index] = jQuery._data(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}
	
					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);
	
					if (display && display !== "none" || !hidden) {
						jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}
	
			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}
	
			return elements;
		}
	
		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}
	
		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;
	
			for (; i < 4; i += 2) {
				// both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}
	
				if (isBorderBox) {
					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}
	
					// at this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					// at this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	
					// at this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}
	
			return val;
		}
	
		function getWidthOrHeight(elem, name, extra) {
	
			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
	
			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {
				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}
	
				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}
	
				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
	
				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}
	
			// use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}
	
		jQuery.extend({
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},
	
			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},
	
			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				// normalize float css property
				"float": support.cssFloat ? "cssFloat" : "styleFloat"
			},
	
			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}
	
				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;
	
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
	
				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
					// convert relative number strings (+= or -=) to relative numbers. #7345
					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
						// Fixes bug #9237
						type = "number";
					}
	
					// Make sure that null and NaN values aren't set. See: #7116
					if (value == null || value !== value) {
						return;
					}
	
					// If a number was passed in, add 'px' to the (except for certain CSS properties)
					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}
	
					// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
					// but it would mean to define eight (for every problematic property) identical functions
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}
	
					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
	
						// Support: IE
						// Swallow errors from 'invalid' CSS values (#5509)
						try {
							style[name] = value;
						} catch (e) {}
					}
				} else {
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}
	
					// Otherwise just get the value from the style object
					return style[name];
				}
			},
	
			css: function css(elem, name, extra, styles) {
				var num,
				    val,
				    hooks,
				    origName = jQuery.camelCase(name);
	
				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
	
				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}
	
				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}
	
				//convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}
	
				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});
	
		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},
	
				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});
	
		if (!support.opacity) {
			jQuery.cssHooks.opacity = {
				get: function get(elem, computed) {
					// IE uses filters for opacity
					return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
				},
	
				set: function set(elem, value) {
					var style = elem.style,
					    currentStyle = elem.currentStyle,
					    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					    filter = currentStyle && currentStyle.filter || style.filter || "";
	
					// IE has trouble with opacity if it does not have layout
					// Force it by setting the zoom level
					style.zoom = 1;
	
					// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
					// if value === "", then remove inline opacity #12685
					if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
	
						// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
						// if "filter:" is present at all, clearType is disabled, we want to avoid this
						// style.removeAttribute is IE Only, but so apparently is this code path...
						style.removeAttribute("filter");
	
						// if there is no filter style applied in a css rule or unset inline opacity, we are done
						if (value === "" || currentStyle && !currentStyle.filter) {
							return;
						}
					}
	
					// otherwise, set new filter values
					style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
				}
			};
		}
	
		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});
	
		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
	
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];
	
					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}
	
					return expanded;
				}
			};
	
			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
	
		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;
	
					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;
	
						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}
	
						return map;
					}
	
					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}
	
				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
	
		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;
	
		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];
	
				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];
	
				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;
	
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}
	
				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};
	
		Tween.prototype.init.prototype = Tween.prototype;
	
		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;
	
					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}
	
					// passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css(tween.elem, tween.prop, "");
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};
	
		// Support: IE <=9
		// Panic based approach to setting things on disconnected nodes
	
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};
	
		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};
	
		jQuery.fx = Tween.prototype.init;
	
		// Back Compat <1.8 extension point
		jQuery.fx.step = {};
	
		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
	
	
				// Starting value computation is required for potential unit mismatches
				start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;
	
				if (start && start[3] !== unit) {
					// Trust units reported by jQuery.css
					unit = unit || start[3];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
	
						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}
	
				// Update tween properties
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}
	
				return tween;
			}]
		};
	
		// Animations created synchronously will run synchronously
		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}
	
		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    attrs = { height: type },
			    i = 0;
	
			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}
	
			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}
	
			return attrs;
		}
	
		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
	
					// we're done with this property
					return tween;
				}
			}
		}
	
		function defaultPrefilter(elem, props, opts) {
			/* jshint validthis: true */
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = jQuery._data(elem, "fxshow");
	
			// handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;
	
				anim.always(function () {
					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}
	
			// height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE does not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];
	
				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				display = jQuery.css(elem, "display");
	
				// Test default display if display is currently "none"
				checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
	
				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
	
					// inline-level elements accept inline-block;
					// block-level elements need to be inline with layout
					if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
						style.display = "inline-block";
					} else {
						style.zoom = 1;
					}
				}
			}
	
			if (opts.overflow) {
				style.overflow = "hidden";
				if (!support.shrinkWrapBlocks()) {
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}
			}
	
			// show/hide pass
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
	
						// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
	
					// Any non-fx value stops us from restoring the original display value
				} else {
					display = undefined;
				}
			}
	
			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = jQuery._data(elem, "fxshow", {});
				}
	
				// store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;
					jQuery._removeData(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
	
					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
	
				// If this is a noop like .hide().hide(), restore an overwritten display value
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}
	
		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;
	
			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}
	
				if (index !== name) {
					props[name] = value;
					delete props[index];
				}
	
				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];
	
					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}
	
		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
	
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;
	
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
	
				deferred.notifyWith(elem, [animation, percent, remaining]);
	
				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
	
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;
	
			propFilter(props, animation.opts.specialEasing);
	
			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}
	
			jQuery.map(props, createTween, animation);
	
			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}
	
			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));
	
			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}
	
		jQuery.Animation = jQuery.extend(Animation, {
			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}
	
				var prop,
				    index = 0,
				    length = props.length;
	
				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},
	
			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});
	
		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};
	
			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
	
			// normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}
	
			// Queueing
			opt.old = opt.complete;
	
			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}
	
				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};
	
			return opt;
		};
	
		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
	
				// show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()
	
				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);
	
					// Empty animations, or finishing resolves immediately
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;
	
				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};
	
				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}
	
				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = jQuery._data(this);
	
					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}
	
					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = jQuery._data(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;
	
					// enable finishing flag on private data
					data.finish = true;
	
					// empty the queue first
					jQuery.queue(this, type, []);
	
					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}
	
					// look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}
	
					// look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}
	
					// turn off finishing flag
					delete data.finish;
				});
			}
		});
	
		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});
	
		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});
	
		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    timers = jQuery.timers,
			    i = 0;
	
			fxNow = jQuery.now();
	
			for (; i < timers.length; i++) {
				timer = timers[i];
				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}
	
			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};
	
		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};
	
		jQuery.fx.interval = 13;
	
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};
	
		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};
	
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			// Default speed
			_default: 400
		};
	
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";
	
			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};
	
		(function () {
			// Minified: var a,b,c,d,e
			var input, div, select, a, opt;
	
			// Setup
			div = document.createElement("div");
			div.setAttribute("className", "t");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
	
			// First batch of tests.
			select = document.createElement("select");
			opt = select.appendChild(document.createElement("option"));
			input = div.getElementsByTagName("input")[0];
	
			a.style.cssText = "top:1px";
	
			// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			support.getSetAttribute = div.className !== "t";
	
			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			support.style = /top/.test(a.getAttribute("style"));
	
			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			support.hrefNormalized = a.getAttribute("href") === "/a";
	
			// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
			support.checkOn = !!input.value;
	
			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			support.optSelected = opt.selected;
	
			// Tests for enctype support on a form (#6743)
			support.enctype = !!document.createElement("form").enctype;
	
			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;
	
			// Support: IE8 only
			// Check if we can trust getAttribute("value")
			input = document.createElement("input");
			input.setAttribute("value", "");
			support.input = input.getAttribute("value") === "";
	
			// Check if an input maintains its value after becoming a radio
			input.value = "t";
			input.setAttribute("type", "radio");
			support.radioValue = input.value === "t";
		})();
	
		var rreturn = /\r/g;
	
		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];
	
				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
	
						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}
	
						ret = elem.value;
	
						return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}
	
					return;
				}
	
				isFunction = jQuery.isFunction(value);
	
				return this.each(function (i) {
					var val;
	
					if (this.nodeType !== 1) {
						return;
					}
	
					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}
	
					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}
	
					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
	
					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});
	
		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;
	
						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];
	
							// oldIE doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (
							// Don't return options that are disabled or in a disabled optgroup
							support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
	
								// Get the specific value for the option
								value = jQuery(option).val();
	
								// We don't need an array for one selects
								if (one) {
									return value;
								}
	
								// Multi-Selects return an array
								values.push(value);
							}
						}
	
						return values;
					},
	
					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;
	
						while (i--) {
							option = options[i];
	
							if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
	
								// Support: IE6
								// When new option element is added to select box we need to
								// force reflow of newly added node in order to workaround delay
								// of initialization properties
								try {
									option.selected = optionSet = true;
								} catch (_) {
	
									// Will be executed only in IE6
									option.scrollHeight;
								}
							} else {
								option.selected = false;
							}
						}
	
						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
	
						return options;
					}
				}
			}
		});
	
		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					// Support: Webkit
					// "" is returned instead of "on" if a value isn't specified
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});
	
		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle,
		    ruseDefault = /^(?:checked|selected)$/i,
		    getSetAttribute = support.getSetAttribute,
		    getSetInput = support.input;
	
		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},
	
			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});
	
		jQuery.extend({
			attr: function attr(elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;
	
				// don't get/set attributes on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				// Fallback to prop when attributes are not supported
				if (_typeof(elem.getAttribute) === strundefined) {
					return jQuery.prop(elem, name, value);
				}
	
				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}
	
				if (value !== undefined) {
	
					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);
	
					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				}
			},
	
			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);
	
				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;
	
						// Boolean attributes get special treatment (#10870)
						if (jQuery.expr.match.bool.test(name)) {
							// Set corresponding property to false
							if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
								elem[propName] = false;
								// Support: IE<9
								// Also clear defaultChecked/defaultSelected (if appropriate)
							} else {
								elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
							}
	
							// See #9699 for explanation of this approach (setting first, then removal)
						} else {
							jQuery.attr(elem, name, "");
						}
	
						elem.removeAttribute(getSetAttribute ? name : propName);
					}
				}
			},
	
			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							// Setting the type on a radio button after the value resets the value in IE6-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});
	
		// Hook for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
					// IE<8 needs the *property* name
					elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
	
					// Use defaultChecked and defaultSelected for oldIE
				} else {
					elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
				}
	
				return name;
			}
		};
	
		// Retrieve booleans specially
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
	
			var getter = attrHandle[name] || jQuery.find.attr;
	
			attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			} : function (elem, name, isXML) {
				if (!isXML) {
					return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
				}
			};
		});
	
		// fix oldIE attroperties
		if (!getSetInput || !getSetAttribute) {
			jQuery.attrHooks.value = {
				set: function set(elem, value, name) {
					if (jQuery.nodeName(elem, "input")) {
						// Does not return so that setAttribute is also used
						elem.defaultValue = value;
					} else {
						// Use nodeHook if defined (#1954); otherwise setAttribute is fine
						return nodeHook && nodeHook.set(elem, value, name);
					}
				}
			};
		}
	
		// IE6/7 do not support getting/setting some attributes with get/setAttribute
		if (!getSetAttribute) {
	
			// Use this for any attribute in IE6/7
			// This fixes almost every IE6/7 issue
			nodeHook = {
				set: function set(elem, value, name) {
					// Set the existing or create a new attribute node
					var ret = elem.getAttributeNode(name);
					if (!ret) {
						elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
					}
	
					ret.value = value += "";
	
					// Break association with cloned elements by also using setAttribute (#9646)
					if (name === "value" || value === elem.getAttribute(name)) {
						return value;
					}
				}
			};
	
			// Some attributes are constructed with empty-string values when not defined
			attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
				var ret;
				if (!isXML) {
					return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
				}
			};
	
			// Fixing value retrieval on a button requires this module
			jQuery.valHooks.button = {
				get: function get(elem, name) {
					var ret = elem.getAttributeNode(name);
					if (ret && ret.specified) {
						return ret.value;
					}
				},
				set: nodeHook.set
			};
	
			// Set contenteditable to false on removals(#10429)
			// Setting to empty string throws an error as an invalid value
			jQuery.attrHooks.contenteditable = {
				set: function set(elem, value, name) {
					nodeHook.set(elem, value === "" ? false : value, name);
				}
			};
	
			// Set width and height to auto instead of 0 on empty string( Bug #8150 )
			// This is for removals
			jQuery.each(["width", "height"], function (i, name) {
				jQuery.attrHooks[name] = {
					set: function set(elem, value) {
						if (value === "") {
							elem.setAttribute(name, "auto");
							return value;
						}
					}
				};
			});
		}
	
		if (!support.style) {
			jQuery.attrHooks.style = {
				get: function get(elem) {
					// Return undefined in the case of empty string
					// Note: IE uppercases css property names, but if we were to .toLowerCase()
					// .cssText, that would destroy case senstitivity in URL's, like in "background"
					return elem.style.cssText || undefined;
				},
				set: function set(elem, value) {
					return elem.style.cssText = value + "";
				}
			};
		}
	
		var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		    rclickable = /^(?:a|area)$/i;
	
		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},
	
			removeProp: function removeProp(name) {
				name = jQuery.propFix[name] || name;
				return this.each(function () {
					// try/catch handles cases where IE balks (such as removing a property on window)
					try {
						this[name] = undefined;
						delete this[name];
					} catch (e) {}
				});
			}
		});
	
		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
	
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;
	
				// don't get/set properties on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
	
				if (notxml) {
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}
	
				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},
	
			propHooks: {
				tabIndex: {
					get: function get(elem) {
						// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");
	
						return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
					}
				}
			}
		});
	
		// Some attributes require a special call on IE
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!support.hrefNormalized) {
			// href/src property should get the full normalized URL (#10299/#12915)
			jQuery.each(["href", "src"], function (i, name) {
				jQuery.propHooks[name] = {
					get: function get(elem) {
						return elem.getAttribute(name, 4);
					}
				};
			});
		}
	
		// Support: Safari, IE9+
		// mis-reports the default selected property of an option
		// Accessing the parent's selectedIndex property fixes it
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
	
					if (parent) {
						parent.selectedIndex;
	
						// Make sure that it also works with optgroups, see #5701
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				}
			};
		}
	
		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});
	
		// IE6/7 call enctype encoding
		if (!support.enctype) {
			jQuery.propFix.enctype = "encoding";
		}
	
		var rclass = /[\t\r\n\f]/g;
	
		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}
	
				if (proceed) {
					// The disjunction here is for better compressibility (see removeClass)
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
	
							// only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = arguments.length === 0 || typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
	
							// only assign if different to avoid unneeded rendering.
							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}
	
				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}
	
				return this.each(function () {
					if (type === "string") {
						// toggle individual class names
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];
	
						while (className = classNames[i++]) {
							// check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
	
						// Toggle whole class name
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							// store className if set
							jQuery._data(this, "__className__", this.className);
						}
	
						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
					}
				});
			},
	
			hasClass: function hasClass(selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}
	
				return false;
			}
		});
	
		// Return jQuery for attributes-only inclusion
	
	
		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
	
			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});
	
		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},
	
			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},
	
			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});
	
		var nonce = jQuery.now();
	
		var rquery = /\?/;
	
		var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
		jQuery.parseJSON = function (data) {
			// Attempt to parse using the native JSON parser first
			if (window.JSON && window.JSON.parse) {
				// Support: Android 2.3
				// Workaround failure to string-cast null input
				return window.JSON.parse(data + "");
			}
	
			var requireNonComma,
			    depth = null,
			    str = jQuery.trim(data + "");
	
			// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
			// after removing valid tokens
			return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {
	
				// Force termination if we see a misplaced comma
				if (requireNonComma && comma) {
					depth = 0;
				}
	
				// Perform no more replacements after returning to outermost depth
				if (depth === 0) {
					return token;
				}
	
				// Commas must not follow "[", "{", or ","
				requireNonComma = open || comma;
	
				// Determine new depth
				// array/object open ("[" or "{"): depth += true - false (increment)
				// array/object close ("]" or "}"): depth += false - true (decrement)
				// other cases ("," or primitive): depth += true - true (numeric cast)
				depth += !close - !open;
	
				// Remove this token
				return "";
			})) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
		};
	
		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					// Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					// IE
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};
	
		var
		// Document location
		ajaxLocParts,
		    ajaxLocation,
		    rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		    // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
	
		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
	
	
		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
	
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");
	
		// #8138, IE may throw an exception when accessing
		// a field from window.location if document.domain has been set
		try {
			ajaxLocation = location.href;
		} catch (e) {
			// Use the href attribute of an A element
			// since IE will modify it given document.location
			ajaxLocation = document.createElement("a");
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}
	
		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
	
		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {
	
			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {
	
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}
	
				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
	
				if (jQuery.isFunction(func)) {
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
						// Prepend if requested
						if (dataType.charAt(0) === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
	
							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}
	
		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	
			var inspected = {},
			    seekingTransport = structure === transports;
	
			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}
	
			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}
	
		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var deep,
			    key,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}
	
			return target;
		}
	
		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {
			var firstDataType,
			    ct,
			    finalDataType,
			    type,
			    contents = s.contents,
			    dataTypes = s.dataTypes;
	
			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}
	
			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}
	
			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}
	
			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}
	
		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}
	
			current = dataTypes.shift();
	
			// Convert to each sequential dataType
			while (current) {
	
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}
	
				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}
	
				prev = current;
				current = dataTypes.shift();
	
				if (current) {
	
					// There's only work to do if current dataType is non-auto
					if (current === "*") {
	
						current = prev;
	
						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {
	
						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];
	
						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {
	
								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
	
									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];
	
											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}
	
						// Apply converter (if not an equivalence)
						if (conv !== true) {
	
							// Unless errors are allowed to bubble, catch and return them
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}
				}
			}
	
			return { state: "success", data: response };
		}
	
		jQuery.extend({
	
			// Counter for holding the number of active queries
			active: 0,
	
			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},
	
			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */
	
				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
	
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
	
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
	
				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {
	
					// Convert anything to text
					"* text": String,
	
					// Text to html (true = no transformation)
					"text html": true,
	
					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,
	
					// Parse text as xml
					"text xml": jQuery.parseXML
				},
	
				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},
	
			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?
	
				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
	
				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},
	
			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),
	
			// Main method
			ajax: function ajax(url, options) {
	
				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}
	
				// Force options to be an object
				options = options || {};
	
				var // Cross-domain detection vars
				parts,
	
				// Loop variable
				i,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers as string
				responseHeadersString,
	
				// timeout handle
				timeoutTimer,
	
	
				// To know if global events are to be dispatched
				fireGlobals,
				    transport,
	
				// Response headers
				responseHeaders,
	
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
	
				// Status-dependent callbacks
				_statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									// Lazy-add the new callback in a way that preserves old ones
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
	
				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;
	
				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
	
				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;
	
				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
	
				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}
	
				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}
	
				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
	
				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}
	
				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;
	
				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}
	
				// Uppercase the type
				s.type = s.type.toUpperCase();
	
				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);
	
				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;
	
				// More options handling for requests with no content
				if (!s.hasContent) {
	
					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}
	
					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :
	
						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}
	
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}
	
				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}
	
				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
	
				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}
	
				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					// Abort if not done already and return
					return jqXHR.abort();
				}
	
				// aborting is no longer a cancellation
				strAbort = "abort";
	
				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}
	
				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
	
				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;
	
					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}
	
					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);
							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}
	
				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;
	
					// Called once
					if (state === 2) {
						return;
					}
	
					// State is "done" now
					state = 2;
	
					// Clear timeout if it exists
					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}
	
					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;
	
					// Cache response headers
					responseHeadersString = headers || "";
	
					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;
	
					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;
	
					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}
	
					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);
	
					// If successful, handle type chaining
					if (isSuccess) {
	
						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}
	
						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
	
							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";
	
							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}
	
					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";
	
					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}
	
					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;
	
					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}
	
					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}
	
				return jqXHR;
			},
	
			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},
	
			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});
	
		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				// shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}
	
				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});
	
		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		};
	
		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}
	
				if (this[0]) {
					// The elements to wrap the target around
					var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
	
					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}
	
					wrap.map(function () {
						var elem = this;
	
						while (elem.firstChild && elem.firstChild.nodeType === 1) {
							elem = elem.firstChild;
						}
	
						return elem;
					}).append(this);
				}
	
				return this;
			},
	
			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}
	
				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();
	
					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},
	
			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);
	
				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},
	
			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});
	
		jQuery.expr.filters.hidden = function (elem) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
		};
	
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	
		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
		function buildParams(prefix, obj, traditional, add) {
			var name;
	
			if (jQuery.isArray(obj)) {
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				// Serialize scalar item.
				add(prefix, obj);
			}
		}
	
		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};
	
			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}
	
			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}
	
			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};
	
		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();
	
					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});
	
		// Create the request object
		// (This is still attached to ajaxSettings for backward compatibility)
		jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function () {
	
			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&
	
			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSupported = jQuery.ajaxSettings.xhr();
	
		// Support: IE<10
		// Open requests must be manually aborted on unload (#5280)
		// See https://support.microsoft.com/kb/2856746 for more info
		if (window.attachEvent) {
			window.attachEvent("onunload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key](undefined, true);
				}
			});
		}
	
		// Determine support properties
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		xhrSupported = support.ajax = !!xhrSupported;
	
		// Create transport if the browser can provide an xhr
		if (xhrSupported) {
	
			jQuery.ajaxTransport(function (options) {
				// Cross domain only allowed if supported through XMLHttpRequest
				if (!options.crossDomain || support.cors) {
	
					var _callback;
	
					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr(),
							    id = ++xhrId;
	
							// Open the socket
							xhr.open(options.type, options.url, options.async, options.username, options.password);
	
							// Apply custom fields if provided
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}
	
							// Override mime type if needed
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}
	
							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}
	
							// Set headers
							for (i in headers) {
								// Support: IE<9
								// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
								// request header to a null-value.
								//
								// To keep consistent with other XHR implementations, cast the value
								// to string and ignore `undefined`.
								if (headers[i] !== undefined) {
									xhr.setRequestHeader(i, headers[i] + "");
								}
							}
	
							// Do send the request
							// This may raise an exception which is actually
							// handled in jQuery.ajax (so no try/catch here)
							xhr.send(options.hasContent && options.data || null);
	
							// Listener
							_callback = function callback(_, isAbort) {
								var status, statusText, responses;
	
								// Was never called and is aborted or complete
								if (_callback && (isAbort || xhr.readyState === 4)) {
									// Clean up
									delete xhrCallbacks[id];
									_callback = undefined;
									xhr.onreadystatechange = jQuery.noop;
	
									// Abort manually if needed
									if (isAbort) {
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
	
										// Support: IE<10
										// Accessing binary-data responseText throws an exception
										// (#11426)
										if (typeof xhr.responseText === "string") {
											responses.text = xhr.responseText;
										}
	
										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch (e) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}
	
										// Filter status for non standard behaviors
	
										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if (!status && options.isLocal && !options.crossDomain) {
											status = responses.text ? 200 : 404;
											// IE - #1450: sometimes returns 1223 when it should be 204
										} else if (status === 1223) {
											status = 204;
										}
									}
								}
	
								// Call complete if needed
								if (responses) {
									complete(status, statusText, responses, xhr.getAllResponseHeaders());
								}
							};
	
							if (!options.async) {
								// if we're in sync mode we fire the callback
								_callback();
							} else if (xhr.readyState === 4) {
								// (IE6 & IE7) if it's in cache and has been
								// retrieved directly we need to fire the callback
								setTimeout(_callback);
							} else {
								// Add to the list of active xhr callbacks
								xhr.onreadystatechange = xhrCallbacks[id] = _callback;
							}
						},
	
						abort: function abort() {
							if (_callback) {
								_callback(undefined, true);
							}
						}
					};
				}
			});
		}
	
		// Functions to create xhrs
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		}
	
		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	
		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});
	
		// Handle cache's special case and global
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
				s.global = false;
			}
		});
	
		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {
	
			// This transport only deals with cross domain requests
			if (s.crossDomain) {
	
				var script,
				    head = document.head || jQuery("head")[0] || document.documentElement;
	
				return {
	
					send: function send(_, callback) {
	
						script = document.createElement("script");
	
						script.async = true;
	
						if (s.scriptCharset) {
							script.charset = s.scriptCharset;
						}
	
						script.src = s.url;
	
						// Attach handlers for all browsers
						script.onload = script.onreadystatechange = function (_, isAbort) {
	
							if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
	
								// Handle memory leak in IE
								script.onload = script.onreadystatechange = null;
	
								// Remove the script
								if (script.parentNode) {
									script.parentNode.removeChild(script);
								}
	
								// Dereference the script
								script = null;
	
								// Callback if not abort
								if (!isAbort) {
									callback(200, "success");
								}
							}
						};
	
						// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						head.insertBefore(script, head.firstChild);
					},
	
					abort: function abort() {
						if (script) {
							script.onload(undefined, true);
						}
					}
				};
			}
		});
	
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;
	
		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});
	
		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
	
			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {
	
				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
	
				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}
	
				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};
	
				// force json dataType
				s.dataTypes[0] = "json";
	
				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};
	
				// Clean-up function (fires after converters)
				jqXHR.always(function () {
					// Restore preexisting value
					window[callbackName] = overwritten;
	
					// Save back as free
					if (s[callbackName]) {
						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;
	
						// save the callback name for future use
						oldCallbacks.push(callbackName);
					}
	
					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}
	
					responseContainer = overwritten = undefined;
				});
	
				// Delegate to script
				return "script";
			}
		});
	
		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;
	
			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];
	
			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}
	
			parsed = jQuery.buildFragment([data], context, scripts);
	
			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}
	
			return jQuery.merge([], parsed.childNodes);
		};
	
		// Keep a copy of the old load method
		var _load = jQuery.fn.load;
	
		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}
	
			var selector,
			    response,
			    type,
			    self = this,
			    off = url.indexOf(" ");
	
			if (off >= 0) {
				selector = jQuery.trim(url.slice(off, url.length));
				url = url.slice(0, off);
			}
	
			// If it's a function
			if (jQuery.isFunction(params)) {
	
				// We assume that it's the callback
				callback = params;
				params = undefined;
	
				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}
	
			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,
	
					// if "type" variable is undefined, then "GET" method will be used
					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
	
					// Save response for use in complete callback
					response = arguments;
	
					self.html(selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
	
					// Otherwise use the full result
					responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}
	
			return this;
		};
	
		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});
	
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	
		var docElem = window.document.documentElement;
	
		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
		}
	
		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};
	
				// set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}
	
				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
	
				// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}
	
				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}
	
				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}
	
				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};
	
		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}
	
				var docElem,
				    win,
				    box = { top: 0, left: 0 },
				    elem = this[0],
				    doc = elem && elem.ownerDocument;
	
				if (!doc) {
					return;
				}
	
				docElem = doc.documentElement;
	
				// Make sure it's not a disconnected DOM node
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}
	
				// If we don't have gBCR, just use 0,0 rather than error
				// BlackBerry 5, iOS 3 (original iPhone)
				if (_typeof(elem.getBoundingClientRect) !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
					left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
				};
			},
	
			position: function position() {
				if (!this[0]) {
					return;
				}
	
				var offsetParent,
				    offset,
				    parentOffset = { top: 0, left: 0 },
				    elem = this[0];
	
				// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {
					// we assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
					// Get *real* offsetParent
					offsetParent = this.offsetParent();
	
					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}
	
					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}
	
				// Subtract parent offsets and element margins
				// note: when an element has margin: auto the offsetLeft and marginLeft
				// are the same in Safari causing offset.left to incorrectly be 0
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},
	
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;
	
					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || docElem;
				});
			}
		});
	
		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = /Y/.test(prop);
	
			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);
	
					if (val === undefined) {
						return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
					}
	
					if (win) {
						win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});
	
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});
	
		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	
					return access(this, function (elem, type, value) {
						var doc;
	
						if (jQuery.isWindow(elem)) {
							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}
	
						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;
	
							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}
	
						return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :
	
						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});
	
		// The number of elements contained in the matched element set
		jQuery.fn.size = function () {
			return this.length;
		};
	
		jQuery.fn.andSelf = jQuery.fn.addBack;
	
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
	
		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}
	
			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		};
	
		// Expose jQuery and $ identifiers, even in
		// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
			window.jQuery = window.$ = jQuery;
		}
	
		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 294)(module)))

/***/ }),
/* 300 */
/*!****************************!*\
  !*** ./src/css/index.less ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader!../../~/postcss-loader/lib!../../~/less-loader/dist/cjs.js!./index.less */ 301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ 302)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 301 */
/*!**********************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader/lib!./~/less-loader/dist/cjs.js!./src/css/index.less ***!
  \**********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 304)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, ".root {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(140deg, rgba(0, 86, 103, 0.3), rgba(153, 27, 0, 0.3), rgba(189, 38, 54, 0.3));\n  text-align: center;\n  color: #fff;\n}\n.main {\n  position: relative;\n  width: 640px;\n  margin: 100px auto 0;\n  -webkit-box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.5);\n}\n.main h2 {\n  font-size: 20px;\n  font-weight: bold;\n}\n.main .btn-login {\n  background: #f44336;\n}\n.main .btn-signup {\n  background: #FF9800;\n}\n.main .btnbox {\n  position: relative;\n  z-index: 4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 280px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.main .btnbox .btnbox-btn {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.main .btnbox .btnbox-info {\n  position: relative;\n  width: 80%;\n  margin: 60px auto 0;\n  padding: 15px 0px;\n  border-radius: 3px;\n  background-color: rgba(187, 168, 170, 0.8);\n}\n.main .fordoimg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.main .fordoimg .pimg {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.main .fordoimg .pimg img {\n  margin-left: -199px;\n  margin-top: -175px;\n  -webkit-animation: flout 25s infinite linear;\n          animation: flout 25s infinite linear;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.main .imgbox {\n  z-index: 2;\n  background: rgba(255, 255, 255, 0.8);\n}\n.main .imgbox .pimg img {\n  opacity: .2;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.main .modelBox {\n  z-index: 3;\n  width: 50%;\n  background: #fff;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.main .modelBox .pimg img {\n  opacity: .5;\n}\n.main .modelBox .modelBox-login,\n.main .modelBox .modelBox-signup {\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin-top: 50px;\n  opacity: 0;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  text-align: center;\n}\n.main .modelBox .modelBox-login input,\n.main .modelBox .modelBox-signup input {\n  display: inline-block;\n  width: 80%;\n  padding: 0 10px;\n  margin-top: 25px;\n  line-height: 40px;\n  border: 0;\n  color: #333;\n}\n.main .modelBox.overup-login,\n.main .modelBox.overup-signup {\n  z-index: 7;\n  -webkit-box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);\n}\n.main .modelBox.overup-login {\n  top: -37px;\n  height: 350px;\n}\n.main .modelBox.overup-login .modelBox-login {\n  /*opacity: 1;*/\n}\n.main .modelBox.overup-login .pimg img {\n  margin-top: -137px;\n}\n.main .modelBox.overup-signup {\n  left: 320px;\n  top: -58px;\n  height: 400px;\n}\n.main .modelBox.overup-signup .modelBox-signup {\n  /*opacity: 1;*/\n}\n.main .modelBox.overup-signup .pimg img {\n  margin-left: -520px;\n  margin-top: -118px;\n}\n@-webkit-keyframes flout {\n  0%,\n  100% {\n    -webkit-transform: scale(1) translate(0px);\n            transform: scale(1) translate(0px);\n  }\n  25%,\n  75% {\n    -webkit-transform: scale(1.2) translate(80px);\n            transform: scale(1.2) translate(80px);\n  }\n  50% {\n    -webkit-transform: scale(1.5) translate(40px);\n            transform: scale(1.5) translate(40px);\n  }\n}\n@keyframes flout {\n  0%,\n  100% {\n    -webkit-transform: scale(1) translate(0px);\n            transform: scale(1) translate(0px);\n  }\n  25%,\n  75% {\n    -webkit-transform: scale(1.2) translate(80px);\n            transform: scale(1.2) translate(80px);\n  }\n  50% {\n    -webkit-transform: scale(1.5) translate(40px);\n            transform: scale(1.5) translate(40px);\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 302 */
/*!*****************************************!*\
  !*** ./~/style-loader/lib/addStyles.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	
	var stylesInDom = {};
	
	var	memoize = function (fn) {
		var memo;
	
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};
	
	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});
	
	var getElement = (function (fn) {
		var memo = {};
	
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
	
			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});
	
	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];
	
	var	fixUrls = __webpack_require__(/*! ./urls */ 303);
	
	module.exports = function(list, options) {
		if (true) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
	
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};
	
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();
	
		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";
	
		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";
	
		var styles = listToStyles(list, options);
	
		addStylesToDom(styles, options);
	
		return function update (newList) {
			var mayRemove = [];
	
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
	
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
	
			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}
	
			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
	
				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
	
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};
	
	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
	
			if(domStyle) {
				domStyle.refs++;
	
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
	
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
	
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
	
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};
	
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
	
			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}
	
		return styles;
	}
	
	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)
	
		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
	
		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
	
		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);
	
		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement (options) {
		var style = document.createElement("style");
	
		options.attrs.type = "text/css";
	
		addAttrs(style, options.attrs);
		insertStyleElement(options, style);
	
		return style;
	}
	
	function createLinkElement (options) {
		var link = document.createElement("link");
	
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";
	
		addAttrs(link, options.attrs);
		insertStyleElement(options, link);
	
		return link;
	}
	
	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}
	
	function addStyle (obj, options) {
		var style, update, remove, result;
	
		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);
	
		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
	
			style = singleton || (singleton = createStyleElement(options));
	
			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);
	
		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);
	
				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}
	
		update(obj);
	
		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}
	
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
	
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;
	
			if (childNodes[index]) style.removeChild(childNodes[index]);
	
			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			style.setAttribute("media", media)
		}
	
		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}
	
			style.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
	
		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}
	
		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = link.href;
	
		link.href = URL.createObjectURL(blob);
	
		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 303 */
/*!************************************!*\
  !*** ./~/style-loader/lib/urls.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */
	
	module.exports = function (css) {
		// get current location
		var location = typeof window !== "undefined" && window.location;
	
		if (!location) {
			throw new Error("fixUrls requires window.location");
		}
	
		// blank or null?
		if (!css || typeof css !== "string") {
			return css;
		}
	
		var baseUrl = location.protocol + "//" + location.host;
		var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
	
		// convert each url(...)
		/*
	 This regular expression is just a way to recursively match brackets within
	 a string.
	 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	    (  = Start a capturing group
	      (?:  = Start a non-capturing group
	          [^)(]  = Match anything that isn't a parentheses
	          |  = OR
	          \(  = Match a start parentheses
	              (?:  = Start another non-capturing groups
	                  [^)(]+  = Match anything that isn't a parentheses
	                  |  = OR
	                  \(  = Match a start parentheses
	                      [^)(]*  = Match anything that isn't a parentheses
	                  \)  = Match a end parentheses
	              )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
	  \)  = Match a close parens
	 	 /gi  = Get all matches, not the first.  Be case insensitive.
	  */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
				return $1;
			}).replace(/^'(.*)'$/, function (o, $1) {
				return $1;
			});
	
			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
				return fullMatch;
			}
	
			// convert the url to a full url
			var newUrl;
	
			if (unquotedOrigUrl.indexOf("//") === 0) {
				//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}
	
			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});
	
		// send back the fixed css
		return fixedCss;
	};

/***/ }),
/* 304 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function (useSourceMap) {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if (item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}
	
		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
			});
	
			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}
	
		return [content].join('\n');
	}
	
	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
	
		return '/*# ' + data + ' */';
	}

/***/ }),
/* 305 */
/*!****************************!*\
  !*** ./src/css/reset.less ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader!../../~/postcss-loader/lib!../../~/less-loader/dist/cjs.js!./reset.less */ 306);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ 302)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./reset.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./reset.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 306 */
/*!**********************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader/lib!./~/less-loader/dist/cjs.js!./src/css/reset.less ***!
  \**********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 304)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml,\nbody {\n  font-size: 13px;\n  height: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\nimg {\n  vertical-align: middle;\n}\n/*\n    TODO think about hanlding inheritence differently, maybe letting IE6 fail a bit...\n*/\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nstrong,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nq:before,\nq:after {\n  content: '';\n}\nabbr,\nacronym {\n  border: 0;\n  font-variant: normal;\n}\n/*\n    to preserve line-height and selector appearance\n*/\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\ninput,\ntextarea,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\n    to enable resizing for IE\n*/\ninput,\ntextarea,\nselect {\n  *font-size: 100%;\n}\n/*\n    because legend doesn't inherit in IE\n*/\nlegend {\n  color: #000;\n}\n", ""]);
	
	// exports


/***/ }),
/* 307 */
/*!*****************************!*\
  !*** ./src/css/common.less ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader!../../~/postcss-loader/lib!../../~/less-loader/dist/cjs.js!./common.less */ 308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/lib/addStyles.js */ 302)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./common.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/less-loader/dist/cjs.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 308 */
/*!***********************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader/lib!./~/less-loader/dist/cjs.js!./src/css/common.less ***!
  \***********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 304)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, ".clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n.clearfix:after {\n  clear: both;\n}\n.hide {\n  display: none;\n}\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mt-15 {\n  margin-top: 15px;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.mt-25 {\n  margin-top: 25px;\n}\n.mb-5 {\n  margin-bottom: 5px;\n}\n.mb-10 {\n  margin-bottom: 10px;\n}\n.mb-15 {\n  margin-bottom: 15px;\n}\n.mb-20 {\n  margin-bottom: 20px;\n}\n.mb-25 {\n  margin-bottom: 25px;\n}\n.ml-5 {\n  margin-left: 5px;\n}\n.ml-10 {\n  margin-left: 10px;\n}\n.ml-15 {\n  margin-left: 15px;\n}\n.ml-20 {\n  margin-left: 20px;\n}\n.mr-5 {\n  margin-right: 5px;\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.mr-20 {\n  margin-right: 20px;\n}\n.btn {\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  padding: 8px 0;\n  border-radius: 3px;\n  -webkit-box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);\n          box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  font-size: 15px;\n}\n", ""]);
	
	// exports


/***/ })
/******/ ]);
//# sourceMappingURL=bubble.js.map