/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
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
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
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
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
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

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
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
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
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
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
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
	  runtime.awrap = function(arg) {
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
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
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

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
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
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
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

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
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

	  runtime.keys = function(object) {
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
	        var i = -1, next = function next() {
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

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
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
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
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

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _run = __webpack_require__(300);

	var _run2 = _interopRequireDefault(_run);

	var _layout = __webpack_require__(427);

	var _layout2 = _interopRequireDefault(_layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
		(0, _run2.default)(document.body);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)))

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

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
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
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
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
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
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
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
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
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
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
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
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
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
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
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

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

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
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
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
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

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
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

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

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
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
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

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
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
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
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
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
				"text json": JSON.parse,

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
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
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
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




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

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (view) {
	  _AppControl2.default.getInst().init(view);
	  console.log('run');
	};

	var _AppControl = __webpack_require__(301);

	var _AppControl2 = _interopRequireDefault(_AppControl);

	var _css = __webpack_require__(402);

	var _css2 = _interopRequireDefault(_css);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(302);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(329);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _inherits2 = __webpack_require__(380);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _BaseControl2 = __webpack_require__(388);

	var _BaseControl3 = _interopRequireDefault(_BaseControl2);

	var _AppConfig = __webpack_require__(389);

	var _AppConfig2 = _interopRequireDefault(_AppConfig);

	var _AppData = __webpack_require__(390);

	var _AppData2 = _interopRequireDefault(_AppData);

	var _GraphControl = __webpack_require__(391);

	var _GraphControl2 = _interopRequireDefault(_GraphControl);

	var _FunctionControl = __webpack_require__(396);

	var _FunctionControl2 = _interopRequireDefault(_FunctionControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 功能控制器
	 */

	// import I18NControl from './I18NControl'
	var AppControl = function (_BaseControl) {
	    (0, _inherits3.default)(AppControl, _BaseControl);
	    (0, _createClass3.default)(AppControl, null, [{
	        key: 'getInst',
	        value: function getInst() {
	            AppControl._inst = AppControl._inst || new AppControl();
	            return AppControl._inst;
	        }

	        /**
	         * 构造
	         */

	        /**
	         * 单例
	         */

	    }]);

	    function AppControl() {
	        (0, _classCallCheck3.default)(this, AppControl);
	        return (0, _possibleConstructorReturn3.default)(this, (AppControl.__proto__ || (0, _getPrototypeOf2.default)(AppControl)).call(this));
	    }

	    /**
	     * 析构
	     */


	    (0, _createClass3.default)(AppControl, [{
	        key: 'destroy',
	        value: function destroy() {
	            this.data.destroy();
	            // this.i18N.destroy();
	            this.config.destroy();
	            this.func.destroy();
	            this.GraphControl.destroy();
	            this.data = null;
	            this.i18N = null;
	            this.config = null;
	            this.func = null;
	            this.animate = null;
	            this.GraphControl = null;
	            this.$view = null;
	            AppControl._inst = null;
	        }

	        /**
	         * 初始化事件
	         */

	    }, {
	        key: 'init',
	        value: function init(view, extendData) {
	            this.$view = $(view);
	            // this.i18N = I18NControl.getInst().init(this)
	            this.config = _AppConfig2.default.getInst().init(this);
	            this.func = _FunctionControl2.default.getInst().init(this);
	            this.GraphControl = _GraphControl2.default.getInst().init(this);
	            this.data = _AppData2.default.getInst().init(this, extendData);
	            return this;
	        }
	    }]);
	    return AppControl;
	}(_BaseControl3.default);

	exports.default = AppControl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)))

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	module.exports = __webpack_require__(315).Object.getPrototypeOf;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(305)
	  , $getPrototypeOf = __webpack_require__(307);

	__webpack_require__(313)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(306);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 306 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(308)
	  , toObject    = __webpack_require__(305)
	  , IE_PROTO    = __webpack_require__(309)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 308 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(310)('keys')
	  , uid    = __webpack_require__(312);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(311)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 312 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(314)
	  , core    = __webpack_require__(315)
	  , fails   = __webpack_require__(324);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(311)
	  , core      = __webpack_require__(315)
	  , ctx       = __webpack_require__(316)
	  , hide      = __webpack_require__(318)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 315 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(317);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 317 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(319)
	  , createDesc = __webpack_require__(327);
	module.exports = __webpack_require__(323) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(320)
	  , IE8_DOM_DEFINE = __webpack_require__(322)
	  , toPrimitive    = __webpack_require__(326)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(323) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(321);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(323) && !__webpack_require__(324)(function(){
	  return Object.defineProperty(__webpack_require__(325)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(324)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(321)
	  , document = __webpack_require__(311).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(321);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(330);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(331);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(360);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(332), __esModule: true };

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(333);
	__webpack_require__(355);
	module.exports = __webpack_require__(359).f('iterator');

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(334)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(336)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(335)
	  , defined   = __webpack_require__(306);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 335 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(337)
	  , $export        = __webpack_require__(314)
	  , redefine       = __webpack_require__(338)
	  , hide           = __webpack_require__(318)
	  , has            = __webpack_require__(308)
	  , Iterators      = __webpack_require__(339)
	  , $iterCreate    = __webpack_require__(340)
	  , setToStringTag = __webpack_require__(353)
	  , getPrototypeOf = __webpack_require__(307)
	  , ITERATOR       = __webpack_require__(354)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 337 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(318);

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(341)
	  , descriptor     = __webpack_require__(327)
	  , setToStringTag = __webpack_require__(353)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(318)(IteratorPrototype, __webpack_require__(354)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(320)
	  , dPs         = __webpack_require__(342)
	  , enumBugKeys = __webpack_require__(351)
	  , IE_PROTO    = __webpack_require__(309)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(325)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(352).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(319)
	  , anObject = __webpack_require__(320)
	  , getKeys  = __webpack_require__(343);

	module.exports = __webpack_require__(323) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(344)
	  , enumBugKeys = __webpack_require__(351);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(308)
	  , toIObject    = __webpack_require__(345)
	  , arrayIndexOf = __webpack_require__(348)(false)
	  , IE_PROTO     = __webpack_require__(309)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(346)
	  , defined = __webpack_require__(306);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(347);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 347 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(345)
	  , toLength  = __webpack_require__(349)
	  , toIndex   = __webpack_require__(350);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(335)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(335)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 351 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(311).document && document.documentElement;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(319).f
	  , has = __webpack_require__(308)
	  , TAG = __webpack_require__(354)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(310)('wks')
	  , uid        = __webpack_require__(312)
	  , Symbol     = __webpack_require__(311).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(356);
	var global        = __webpack_require__(311)
	  , hide          = __webpack_require__(318)
	  , Iterators     = __webpack_require__(339)
	  , TO_STRING_TAG = __webpack_require__(354)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(357)
	  , step             = __webpack_require__(358)
	  , Iterators        = __webpack_require__(339)
	  , toIObject        = __webpack_require__(345);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(336)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 357 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(354);

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(361), __esModule: true };

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(362);
	__webpack_require__(373);
	__webpack_require__(374);
	__webpack_require__(375);
	module.exports = __webpack_require__(315).Symbol;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(311)
	  , has            = __webpack_require__(308)
	  , DESCRIPTORS    = __webpack_require__(323)
	  , $export        = __webpack_require__(314)
	  , redefine       = __webpack_require__(338)
	  , META           = __webpack_require__(363).KEY
	  , $fails         = __webpack_require__(324)
	  , shared         = __webpack_require__(310)
	  , setToStringTag = __webpack_require__(353)
	  , uid            = __webpack_require__(312)
	  , wks            = __webpack_require__(354)
	  , wksExt         = __webpack_require__(359)
	  , wksDefine      = __webpack_require__(364)
	  , keyOf          = __webpack_require__(365)
	  , enumKeys       = __webpack_require__(366)
	  , isArray        = __webpack_require__(369)
	  , anObject       = __webpack_require__(320)
	  , toIObject      = __webpack_require__(345)
	  , toPrimitive    = __webpack_require__(326)
	  , createDesc     = __webpack_require__(327)
	  , _create        = __webpack_require__(341)
	  , gOPNExt        = __webpack_require__(370)
	  , $GOPD          = __webpack_require__(372)
	  , $DP            = __webpack_require__(319)
	  , $keys          = __webpack_require__(343)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(371).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(368).f  = $propertyIsEnumerable;
	  __webpack_require__(367).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(337)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(318)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(312)('meta')
	  , isObject = __webpack_require__(321)
	  , has      = __webpack_require__(308)
	  , setDesc  = __webpack_require__(319).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(324)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(311)
	  , core           = __webpack_require__(315)
	  , LIBRARY        = __webpack_require__(337)
	  , wksExt         = __webpack_require__(359)
	  , defineProperty = __webpack_require__(319).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(343)
	  , toIObject = __webpack_require__(345);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(343)
	  , gOPS    = __webpack_require__(367)
	  , pIE     = __webpack_require__(368);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 367 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 368 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(347);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(345)
	  , gOPN      = __webpack_require__(371).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(344)
	  , hiddenKeys = __webpack_require__(351).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(368)
	  , createDesc     = __webpack_require__(327)
	  , toIObject      = __webpack_require__(345)
	  , toPrimitive    = __webpack_require__(326)
	  , has            = __webpack_require__(308)
	  , IE8_DOM_DEFINE = __webpack_require__(322)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(323) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 373 */
/***/ function(module, exports) {

	

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(364)('asyncIterator');

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(364)('observable');

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(377);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(378), __esModule: true };

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(379);
	var $Object = __webpack_require__(315).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(314);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(323), 'Object', {defineProperty: __webpack_require__(319).f});

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(381);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(385);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(330);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(382), __esModule: true };

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(383);
	module.exports = __webpack_require__(315).Object.setPrototypeOf;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(314);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(384).set});

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(321)
	  , anObject = __webpack_require__(320);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(316)(Function.call, __webpack_require__(372).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(386), __esModule: true };

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(387);
	var $Object = __webpack_require__(315).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(314)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(341)});

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _AppConfig = __webpack_require__(389);

	var _AppConfig2 = _interopRequireDefault(_AppConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 控制器基类
	 *
	 * @author Tiago
	 */
	var BaseControl = function () {
		/**
	  * 构造
	  */
		function BaseControl() {
			(0, _classCallCheck3.default)(this, BaseControl);
		}

		/**
	  * 根据事件类型，获取目标
	  * 主要是为了pad兼容
	  */


		(0, _createClass3.default)(BaseControl, [{
			key: "_getRealEvent",
			value: function _getRealEvent(event) {
				var stopPop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

				stopPop && event.stopPropagation;
				if (event.targetTouches && event.targetTouches.length) return event.targetTouches[0];
				if (event.changedTouches && event.changedTouches.length) return event.changedTouches[0];
				return event;
			}

			/**
	   * 打印调用堆栈
	   */

		}, {
			key: "__",
			value: function __() {
				console.log(this);
				throw new Error('《调用堆栈》');
			}
		}]);
		return BaseControl;
	}();

	exports.default = BaseControl;

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 颗粒配置环境
	 *
	 * @author 
	 */
	var AppConfig = function () {
		function AppConfig() {
			(0, _classCallCheck3.default)(this, AppConfig);
		}

		(0, _createClass3.default)(AppConfig, [{
			key: 'init',


			/**
	   * 初始化
	   */
			value: function init(app) {
				this.app = app;
				this.fontSize = this.app.$view.css('font-size').replace(/px/, '');

				this.parallelLineWidth = 8 * this.fontSize / 24;
				this.unvisibleParallelLineWidth = 24 * this.fontSize / 24;
				this.crossingLineWidth = 9 * this.fontSize / 24;
				this.unvisibleCrossingLineWidth = 27 * this.fontSize / 24;
				this.parallelLineColor = '#005797';
				this.parallelLineSelectedColor = '#ffe013';
				this.crossingLineColor = '#cb1f1f';
				this.initLeftratios = [564 / 1022, 660 / 1022];;
				this.allParallelLinesName = ['l1', 'c1', 'l2', 'c2', 'l3'];
				this.parallelLinesPriority = ['l1', 'l2', 'l3', 'c1', 'c2'];
				this.selectedParallelLine = '';

				this.segmentLineColors = [['#8300de', '#037409'], ['#11b1b7', '#ffe013'], ['#e06313', '#ff6767'], ['#e828c1', '#006de8']];
				// 点参数
				this.pointsNameArr = [['A', 'D'], ['P1', 'Q1'], ['B', 'E'], ['P2', 'Q2'], ['C', 'F']];
				this.pointTextColor = '#333333';
				this.pointRadius = 13 * this.fontSize / 24;
				this.pointStrokeWidth = 3 * this.fontSize / 24;
				this.pointActivedRadius = 16 * this.fontSize / 24;
				this.pointFillColor = '#e06313';
				this.pointStrokeColor = '#ffffff';
				this.pointOutsideRadius = 23 * this.fontSize / 24;
				this.pointOutsideFillColor = '#e06313';
				this.unvisiblePointRadius = 30 * this.fontSize / 24;
				this.unvisiblePointFillColor = 'transparent';

				// this.intersectLineAngle = [ 65, 100];
				// 线参数
				this.lineAAngle = 65 * Math.PI / 180;
				this.lineBAngle = 100 * Math.PI / 180;
				this.lineAX = 0;
				this.lineBX = 0;

				this.lineGap = 9 * this.fontSize / 24 * 2;

				this.segmentShow = ['y1', 'y3', 'y5'];
				this.pixelToLength = 30;

				this.pointArr = [];

				// 文字间隙
				this.textGap = 8 * this.fontSize / 24;

				return this;
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				AppConfig._inst = null;
			}
		}], [{
			key: 'getInst',
			value: function getInst() {
				AppConfig._inst = AppConfig._inst || new AppConfig();
				return AppConfig._inst;
			}

			/**
	   * 单例
	   */

		}]);
		return AppConfig;
	}();

	exports.default = AppConfig;

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppData = function () {
		(0, _createClass3.default)(AppData, null, [{
			key: 'getInst',
			value: function getInst() {
				AppData._inst = AppData._inst || new AppData();
				return AppData._inst;
			}
			/**
	   * 单例
	   */

		}]);

		function AppData() {
			(0, _classCallCheck3.default)(this, AppData);

			this._defaultData = {
				handPause: false,
				lineAAngle: 65 * Math.PI / 180,
				lineBAngle: 100 * Math.PI / 180,
				y0: 0,
				y1: 0,
				y2: 0,
				y3: 0,
				y4: 0,
				y5: 0,
				lineAX: 0,
				lineBX: 0,
				segmentLengthShow: 0, // 是否显示线段长度 0 否 1 是
				segmentRatioShow: 0, // 是否显示线段比例 0 否 1 是
				segmentShow: [],
				showParallelLines: ['l1', 'l2', 'l3'], // 显示的平行线数组
				hiddenParallelLines: ['c1', 'c2'], // 隐藏的平行线数组
				animateShow: 0, // 是否动态演示 0 否 1 演示中 2 暂停
				reset: 0, // 复位是否可点击 0 不可点击 1 可点击
				selectedParallelLine: '', //当前选中的平行线，空时为未选中
				formulaNeedUpdate: false //公式是否需要强制更新
			};

			this.data = {};
		}

		(0, _createClass3.default)(AppData, [{
			key: 'init',
			value: function init(app, data) {
				this.app = app;
				this._init = true;
				if (!data) {
					data = this._defaultData;
				}
				for (var key in data) {
					this[key] = data[key];
				}
				this._init = false;
				this.app.$view.css('visibility', 'visible');

				return this;
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				AppData._inst = null;
			}
		}, {
			key: 'lineAAngle',
			get: function get() {
				return this.data.lineAAngle;
			},
			set: function set(angle) {
				console.log('setangle');
				this.data.lineAAngle = angle;
				this.app.config.lineAAngle = angle;
				this.app.GraphControl.drawByAngle(angle, 'lineA', this._init);
				this.app.GraphControl.drawLineText(this._init, 'lineAX');
			}
		}, {
			key: 'lineBAngle',
			get: function get() {
				return this.data.lineBAngle;
			},
			set: function set(angle) {
				this.data.lineBAngle = angle;
				this.app.config.lineBAngle = angle;
				this.app.GraphControl.drawByAngle(angle, 'lineB', this._init);
				this.app.GraphControl.drawLineText(this._init);
			}
		}, {
			key: 'lineAX',
			get: function get() {
				return this.data.lineAX;
			},
			set: function set(x) {
				console.log('setoffset');
				this.data.lineAX = this.data.lineAX === undefined ? x : this.data.lineAX + x;
				this.app.GraphControl.bringToFront('lineAXGroup');
				this.app.GraphControl.drawByOffset({
					x: x
				}, 'lineAX');
				this.app.GraphControl.drawLineText(this._init, 'lineAX');
				this.app.GraphControl.controlTextShow({ bool: '', init: this._init });
				this.app.GraphControl.controlSegments(this._init, 'lineAX');
			}
		}, {
			key: 'lineBX',
			get: function get() {
				return this.data.lineBX;
			},
			set: function set(x) {
				this.data.lineBX = this.data.lineBX === undefined ? x : this.data.lineBX + x;
				this.app.GraphControl.bringToFront('lineBXGroup');
				this.app.GraphControl.drawByOffset({
					x: x
				}, 'lineBX');
				this.app.GraphControl.drawLineText(this._init);
				this.app.GraphControl.controlTextShow({ bool: '', init: this._init });
				this.app.GraphControl.controlSegments(this._init);
			}
		}, {
			key: 'y0',
			get: function get() {
				return this.data.y0;
			},
			set: function set(diff) {

				this.data.y0 = diff;
				this.app.GraphControl.drawLineText(this._init);
			}
		}, {
			key: 'y1',
			get: function get() {
				return this.data.y1;
			},
			set: function set(diff) {
				this.data.y1 = this.data.y1 === undefined ? diff : Math.round((this.data.y1 + diff) * 1000) / 1000;
				var y = this.data.y1 + this.app.config.y1;
				this.app.GraphControl.bringToFront('y1Group');
				this.app.GraphControl.drawParallelByOffset({
					y: y
				}, 1);
				this.app.GraphControl.drawPointByOffset({
					y: y
				}, 1, this._init);
				this.app.GraphControl.controlSegments(this._init);
				this.app.GraphControl.updateFormula();
			}
		}, {
			key: 'y2',
			get: function get() {
				return this.data.y2;
			},
			set: function set(diff) {
				this.data.y2 = this.data.y2 === undefined ? diff : Math.round((this.data.y2 + diff) * 1000) / 1000;
				var y = this.data.y2 + this.app.config.y2;
				this.app.GraphControl.bringToFront('y2Group');
				this.app.GraphControl.drawParallelByOffset({
					y: y
				}, 2);
				this.app.GraphControl.drawPointByOffset({
					y: y
				}, 2, this._init);
				this.app.GraphControl.controlSegments(this._init);
				this.app.GraphControl.updateFormula();
			}
		}, {
			key: 'y3',
			get: function get() {
				return this.data.y3;
			},
			set: function set(diff) {
				this.data.y3 = this.data.y3 === undefined ? diff : Math.round((this.data.y3 + diff) * 1000) / 1000;
				var y = this.data.y3 + this.app.config.y3;
				this.app.GraphControl.bringToFront('y3Group');
				this.app.GraphControl.drawParallelByOffset({
					y: y
				}, 3);
				this.app.GraphControl.drawPointByOffset({
					y: y
				}, 3, this._init);
				this.app.GraphControl.controlSegments(this._init);
				this.app.GraphControl.updateFormula();
			}
		}, {
			key: 'y4',
			get: function get() {
				return this.data.y4;
			},
			set: function set(diff) {
				this.data.y4 = this.data.y4 === undefined ? diff : Math.round((this.data.y4 + diff) * 1000) / 1000;
				var y = this.data.y4 + this.app.config.y4;
				this.app.GraphControl.bringToFront('y4Group');
				this.app.GraphControl.drawParallelByOffset({
					y: y
				}, 4);
				this.app.GraphControl.drawPointByOffset({
					y: y
				}, 4, this._init);
				this.app.GraphControl.controlSegments(this._init);
				this.app.GraphControl.updateFormula();
			}
		}, {
			key: 'y5',
			get: function get() {
				return this.data.y5;
			},
			set: function set(diff) {
				this.data.y5 = this.data.y5 === undefined ? diff : Math.round((this.data.y5 + diff) * 1000) / 1000;
				var y = this.data.y5 + this.app.config.y5;
				this.app.GraphControl.bringToFront('y5Group');
				this.app.GraphControl.drawParallelByOffset({
					y: y
				}, 5);
				this.app.GraphControl.drawPointByOffset({
					y: y
				}, 5, this._init);
				this.app.GraphControl.controlSegments(this._init);
				this.app.GraphControl.updateFormula();
			}
		}, {
			key: 'segmentShow',
			get: function get() {
				return this.data.segmentShow;
			},
			set: function set(arr) {
				this.data.segmentShow = arr.slice();
				this.app.config.segmentShow = arr.slice();
				this.app.GraphControl.controlSegments(this._init);
			}
		}, {
			key: 'row',
			get: function get() {
				return this.data.row;
			},
			set: function set(i) {
				this.data.row = i;
			}
		}, {
			key: 'segmentLengthShow',
			get: function get() {
				return this.data.segmentLengthShow;
			},
			set: function set(b) {
				this.data.segmentLengthShow = b;
				this.app.config.segmentLengthShow = b;
				this.app.func.updateButtonState('segmentLengthShow', b);
				this.app.GraphControl.updateGraph('segmentLengthShow', b);
			}
		}, {
			key: 'segmentRatioShow',
			get: function get() {
				return this.data.segmentRatioShow;
			},
			set: function set(b) {
				this.data.segmentRatioShow = b;
				this.app.config.segmentRatioShow = b;
				this.app.func.updateButtonState('segmentRatioShow', b);
				this.app.GraphControl.updateGraph('segmentRatioShow', b);
				this.app.GraphControl.updateFormula('segmentRatioShow', b);
			}
		}, {
			key: 'showParallelLines',
			get: function get() {
				return this.data.showParallelLines;
			},
			set: function set(b) {
				var that = this;
				var oldValue = this.data.showParallelLines;
				this.data.showParallelLines = b;
				this.app.config.showParallelLines = b;
				/*
	   更新hiddenParallelLines,segmentShow
	    */
				var hiddenParallelLines = [];
				var segmentShow = [];
				this.app.config.allParallelLinesName.forEach(function (pl, index) {
					if (b.indexOf(pl) != -1) {
						hiddenParallelLines.push(pl);
						segmentShow.push('y' + (index + 1));
					}
				});
				this.hiddenParallelLines = hiddenParallelLines;
				this.segmentShow = segmentShow;
				this.app.func.updateButtonState('showParallelLines', b);
				this.app.GraphControl.updateGraph('showParallelLines', b, oldValue);
				this.app.GraphControl.updateFormula('showParallelLines', b);
			}
		}, {
			key: 'hiddenParallelLines',
			get: function get() {
				return this.data.hiddenParallelLines;
			},
			set: function set(b) {
				return this.data.hiddenParallelLines = b;
				this.app.config.hiddenParallelLines = b;
			}
		}, {
			key: 'animateShow',
			get: function get() {
				return this.data.animateShow;
			},
			set: function set(b) {
				this.data.animateShow = b;
				this.app.func.updateButtonState('animateShow', b);
				this.app.GraphControl.updateFormula('animateShow', b);
				this.app.GraphControl.animateControl(b);
			}
		}, {
			key: 'reset',
			get: function get() {
				return this.data.reset;
			},
			set: function set(b) {
				this.data.reset = b;
				this.app.config.reset = b;
				this.app.func.updateButtonState('reset', b);
				this.app.GraphControl.updateGraph('reset', b);
			}
		}, {
			key: 'selectedParallelLine',
			get: function get() {
				return this.data.selectedParallelLine;
			},
			set: function set(b) {
				this.data.selectedParallelLine = b;
				this.app.config.selectedParallelLine = b;
				this.app.func.updateButtonState('selectedParallelLine', b, this.showParallelLines.length);
				this.app.GraphControl.updateGraph('selectedParallelLine', b);
			}
		}, {
			key: 'formulaNeedUpdate',
			get: function get() {
				return this.data.formulaNeedUpdate;
			},
			set: function set(b) {
				this.data.formulaNeedUpdate = b;
				this.app.config.formulaNeedUpdate = b;
				if (b) {
					this.app.GraphControl.updateFormula('formulaNeedUpdate', b);
					this.data.formulaNeedUpdate = false;
				}
			}
		}, {
			key: 'handPause',
			get: function get() {
				return this.data.handPause;
			},
			set: function set(b) {
				this.data.handPause = b;
			}
		}]);
		return AppData;
	}();

	exports.default = AppData;

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(302);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(329);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _inherits2 = __webpack_require__(380);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _BaseControl2 = __webpack_require__(388);

	var _BaseControl3 = _interopRequireDefault(_BaseControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Snap = __webpack_require__(392);
	var TimelineMax = __webpack_require__(393);

	var GraphControl = function (_BaseControl) {
		(0, _inherits3.default)(GraphControl, _BaseControl);
		(0, _createClass3.default)(GraphControl, null, [{
			key: 'getInst',
			value: function getInst() {
				GraphControl._inst = GraphControl._inst || new GraphControl();

				return GraphControl._inst;
			}

			/**
	   * 构造
	   */

			/**
	   * 单例
	   */

		}]);

		function GraphControl() {
			(0, _classCallCheck3.default)(this, GraphControl);
			return (0, _possibleConstructorReturn3.default)(this, (GraphControl.__proto__ || (0, _getPrototypeOf2.default)(GraphControl)).call(this));
		}

		/**
	  * 析构
	  */


		(0, _createClass3.default)(GraphControl, [{
			key: 'destroy',
			value: function destroy() {
				this.unbindEvent();
				if (this.animateObj) {
					this.animateObj.kill();
					this.animateObj = null;
				}
				GraphControl._inst = null;
			}

			/**
	   * 初始化事件
	   */

		}, {
			key: 'init',
			value: function init(app) {

				this.app = app;

				// 初始化svg界面
				var uid = 'svg' + this.uuid();
				this.container = this.app.$view.find('.parallel-container');
				this.container.html('<svg id="' + uid + '" style="width: 100%;height: 100%;" ></svg>');
				this.$svg = this.app.$view.find('#' + uid);
				this.svg = Snap('#' + uid);

				// svg绘制参数设置
				this.svgWidth = this.$svg.width();
				this.svgHeight = this.$svg.height();

				this.app.config.lineAX = this.app.config.initLeftratios[0] * this.svgWidth;
				this.app.config.lineBX = this.app.config.initLeftratios[1] * this.svgWidth;

				for (var i = 1; i < 6; i++) {
					this.app.config['y' + i] = Math.round((this.svgHeight / 6 * i + this.svgHeight / 15) * 1000) / 1000;
				}

				this.app.config.y0 = 0;

				this.transformPosition = {
					x: 0,
					y: 0
				};

				this.canvasBoundary = {
					minX: -this.svgWidth,
					minY: -this.svgHeight,
					maxX: this.svgWidth * 2,
					maxY: this.svgHeight * 2
				};

				this.pointGroupArr = [];

				this.parallelLineGroupArr = [];

				this.crossingLineArr = [];

				Snap.plugin(function (Snap, Element, Paper, glob) {
					var elproto = Element.prototype;
					elproto.toFront = function (target) {
						if (target) {
							this.appendTo(target);
							return this;
						}
						this.appendTo(this.paper);
					};
					elproto.toBack = function (target) {
						if (target) {
							this.prependTo(target);
							return this;
						}
						this.prependTo(this.paper);
					};

					elproto.setPosition = function (position, direct) {
						switch (this.type) {
							case 'circle':
								if (direct) {
									this.attr({
										'cx': position.x,
										'cy': position.y
									});
								} else {
									this.attr({
										'cx': '+=' + position.x,
										'cy': '+=' + position.y
									});
								}
								break;
							case 'line':
								if (direct) {
									this.attr({
										'x1': position.x1,
										'y1': position.y1,
										'x2': position.x2,
										'y2': position.y2
									});
								} else {
									this.attr({
										'x1': '+=' + position.x,
										'y1': '+=' + position.y,
										'x2': '+=' + position.x,
										'y2': '+=' + position.y
									});
								}
								break;

							default:
								if (direct) {
									this.attr({
										x: position.x,
										y: position.y
									});
								} else {
									this.attr({
										x: '+=' + position.x,
										y: '+=' + position.y
									});
								}
								break;
						}
					};
				});
				this.initFormula();
				this.drawBasic();
				this.bindEvent();
				return this;
			}

			/**
	   * 初始化公式面板
	   */

		}, {
			key: 'initFormula',
			value: function initFormula() {
				this.$formulaContainer = this.app.$view.find(".ParallelLines_formula"); //公式面板,控制线段比例的显示隐藏
				/*
	    三条线时公式形式
	    */
				this.$littileFormula = this.app.$view.find(".formula_little:first");
				//第一项
				this.$littileF_rowTxt1 = this.$littileFormula.find(".rowTxt:first");
				this.$littileF_rowTxt1_member = this.$littileF_rowTxt1.find("i:first");
				this.$littileF_rowTxt1_denominator = this.$littileF_rowTxt1.find("i:last");
				//等号1
				this.$littileF_equal1 = this.$littileFormula.find(".equal:last");
				//第二项
				this.$littileF_rowTxt2 = this.$littileFormula.find(".rowTxt:last");
				this.$littileF_rowTxt2_member = this.$littileF_rowTxt2.find("i:first");
				this.$littileF_rowTxt2_denominator = this.$littileF_rowTxt2.find("i:last");
				//等号2
				this.$littileF_equal2 = this.$littileFormula.find(".equal:last");
				//比例值
				this.$littileF_verMid = this.$littileFormula.find(".verMid");

				/*
	    三条线以上时公式形式
	    */
				this.$manyFormula = this.app.$view.find(".formula_many:first");
				var rowTxts = this.$manyFormula.find(".rowTxt");
				//第一项
				this.$manyF_rowTxt1 = rowTxts.first();
				//第二项
				this.$manyF_rowTxt2 = rowTxts.eq(1);
				//第三项
				this.$manyF_rowTxt3 = rowTxts.last();

				/*
	    有线段等于0时显示
	    */
				this.$equalFormulas = this.app.$view.find(".formula_equal");
			}

			/**
	   * 生成id
	   * @return {[string]} [返回随机字符串]
	   */

		}, {
			key: 'uuid',
			value: function uuid() {
				var s = [],
				    hexDigits = '0123456789abcdef';
				for (var i = 0; i < 10; i++) {
					s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
				}

				return s.join('');
			}

			/**
	   * 绘制基本界面
	   */

		}, {
			key: 'drawBasic',
			value: function drawBasic() {
				this.group = this.svg.g();

				// 相交线A
				var lineA = this.drawLine('crossingLine').addClass('lineA lineAX').data({
					type: 'X',
					classString: 'lineA'
				});

				var lineA2 = this.drawLine('crossingLine').addClass('lineA lineAX').data({
					type: 'X',
					classString: 'lineA'
				}).attr({
					'stroke-opacity': 0.001,
					'strokeWidth': this.app.config.unvisibleCrossingLineWidth
				});

				var textA = this.svg.text(0, 0, 'a').attr({
					fill: this.app.config.crossingLineColor
				}).addClass('textA');
				// 相交线B
				var lineB = this.drawLine('crossingLine').addClass('lineB lineBX').data({
					type: 'X',
					classString: 'lineB'
				});

				var lineB2 = this.drawLine('crossingLine').addClass('lineB lineBX').data({
					type: 'X',
					classString: 'lineB'
				}).attr({
					'stroke-opacity': 0.001,
					'strokeWidth': this.app.config.unvisibleCrossingLineWidth
				});

				var textB = this.svg.text(0, 0, 'b').attr({
					fill: this.app.config.crossingLineColor
				}).addClass('textB');

				// let baseSplit = this.svgHeight / 6;

				for (var i = 1; i < 6; i++) {

					var path = this.drawLine('parallelLine').addClass('parallelLine ' + this.app.config.allParallelLinesName[i - 1] + ' y' + i).data({
						type: 'Y',
						index: i
					});

					var path2 = this.drawLine('parallelLine').addClass('parallelLine ' + ' y' + i).data({
						type: 'Y',
						index: i
					}).attr({
						'stroke-opacity': 0.001,
						'strokeWidth': this.app.config.unvisibleParallelLineWidth
					});

					var text = this.svg.text(22 * this.app.config.fontSize / 24, -this.app.config.parallelLineWidth / 2 - this.app.config.textGap, this.app.config.allParallelLinesName[i - 1].split('')).attr({
						fill: this.app.config.parallelLineColor
					}).addClass('text_parallel_line y' + i);

					var parallelLineGroup = this.svg.g(path2, path, text).addClass('y' + i + 'Group ' + 'parallelLine' + i + 'Group');

					this.group.add(parallelLineGroup);
					this.parallelLineGroupArr.push(parallelLineGroup);
				}

				this.crossingLineArr.push(lineA);
				this.crossingLineArr.push(lineB);

				var lineAGroup = this.svg.g(lineA2, lineA).addClass('lineAXGroup');
				var lineBGroup = this.svg.g(lineB2, lineB).addClass('lineBXGroup');;

				this.group.add(lineAGroup, lineBGroup, textA, textB);

				this.drawPoints();
			}
		}, {
			key: 'drag',
			value: function drag(position) {

				this.transformPosition.x += position.x;
				this.transformPosition.y += position.y;

				if (-this.transformPosition.x < this.canvasBoundary.minX) {
					this.transformPosition.x = -this.canvasBoundary.minX;
				} else if (this.svgWidth - this.transformPosition.x > this.canvasBoundary.maxX) {
					this.transformPosition.x = this.svgWidth - this.canvasBoundary.maxX;
				}

				if (-this.transformPosition.y < this.canvasBoundary.minY) {
					this.transformPosition.y = -this.canvasBoundary.minY;
				} else if (this.svgHeight - this.transformPosition.y > this.canvasBoundary.maxY) {
					this.transformPosition.y = this.svgHeight - this.canvasBoundary.maxY;
				}

				var transformString = 't ' + this.transformPosition.x + ' ' + this.transformPosition.y;

				this.group.transform(transformString);
			}
		}, {
			key: 'controlTextShow',
			value: function controlTextShow() {
				var _this2 = this;

				var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				    _ref$init = _ref.init,
				    init = _ref$init === undefined ? false : _ref$init,
				    _ref$bool = _ref.bool,
				    bool = _ref$bool === undefined ? '' : _ref$bool,
				    _ref$i = _ref.i,
				    i = _ref$i === undefined ? -1 : _ref$i;

				if (bool === '') {
					if (init) {
						[-this.app.config.y1 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <= -this.app.config.y1 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y2 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <= -this.app.config.y2 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y3 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <= -this.app.config.y3 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y4 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <= -this.app.config.y4 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y5 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <= -this.app.config.y5 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX].map(function (b, index) {
							_this2.controlTextShow({
								bool: b,
								i: index
							});
						});
					} else {
						[-(this.app.config.y1 + this.app.data.y1) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <= -(this.app.config.y1 + this.app.data.y1) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y2 + this.app.data.y2) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <= -(this.app.config.y2 + this.app.data.y2) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y3 + this.app.data.y3) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <= -(this.app.config.y3 + this.app.data.y3) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y4 + this.app.data.y4) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <= -(this.app.config.y4 + this.app.data.y4) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y5 + this.app.data.y5) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <= -(this.app.config.y5 + this.app.data.y5) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX].map(function (b, index) {
							_this2.controlTextShow({
								bool: b,
								i: index
							});
						});
					}
				} else {

					if (!bool) {
						this.pointGroupArr[i][0].select('.text_point_left').removeClass('hidden_svg');
						this.pointGroupArr[i][0].select('.text_point_right').addClass('hidden_svg');

						this.pointGroupArr[i][1].select('.text_point_left').addClass('hidden_svg');
						this.pointGroupArr[i][1].select('.text_point_right').removeClass('hidden_svg');
					} else {
						this.pointGroupArr[i][0].select('.text_point_left').addClass('hidden_svg');
						this.pointGroupArr[i][0].select('.text_point_right').removeClass('hidden_svg');

						this.pointGroupArr[i][1].select('.text_point_left').removeClass('hidden_svg');
						this.pointGroupArr[i][1].select('.text_point_right').addClass('hidden_svg');
					}
				}
			}

			// 绘制相交线

		}, {
			key: 'drawLine',
			value: function drawLine(type) {

				var startPoint = {
					x: this.canvasBoundary.minX,
					y: 0
				};
				var endPoint = {
					x: this.canvasBoundary.maxX,
					y: 0
				};

				return this.svg.line(startPoint.x, startPoint.y, endPoint.x, endPoint.y).attr({
					fill: 'none',
					stroke: this.app.config[type + 'Color'],
					strokeWidth: this.app.config[type + 'Width']
				});
			}
		}, {
			key: 'drawPoints',
			value: function drawPoints() {
				var _this3 = this;

				this.pointGroupArr = this.app.config.pointsNameArr.map(function (textArr, i) {

					var unvisibleOutsideCircle1 = _this3.svg.circle(0, 0, _this3.app.config.unvisiblePointRadius).attr({
						fill: _this3.app.config.unvisiblePointFillColor,
						stroke: 'none'
					}).addClass('unvisibleCircle circle lineAX lineAPartY' + (i + 1)).data({
						line: 'lineA',
						type: 'rotate',
						row: 'y' + (i + 1)
					});

					var outsideCircle1 = _this3.svg.circle(0, 0, _this3.app.config.pointOutsideRadius).attr({
						fill: _this3.app.config.pointOutsideFillColor,
						stroke: 'none'
					}).addClass('outsideCircle circle lineAX lineAPartY' + (i + 1)).data({
						line: 'lineA',
						type: 'rotate',
						row: 'y' + (i + 1)
					});
					var circle1 = _this3.svg.circle(0, 0, _this3.app.config.pointRadius).attr({
						fill: _this3.app.config.pointFillColor,
						stroke: _this3.app.config.pointStrokeColor,
						strokeWidth: _this3.app.config.pointStrokeWidth
					}).addClass('circle lineAX lineAPartY' + (i + 1)).data({
						line: 'lineA',
						type: 'rotate',
						row: 'y' + (i + 1)
					});

					var leftText1 = _this3.svg.text(0 - _this3.app.config.pointRadius, 0 - _this3.app.config.pointRadius - _this3.app.config.textGap, textArr[0].split('')).attr({
						fill: _this3.app.config.pointTextColor
					}).addClass('text_point hidden_svg text_point_left lineAX lineAPartY' + (i + 1));

					leftText1.attr({
						x: +leftText1.attr('x') - leftText1.node.clientWidth * 5 / 4
					});

					var rightText1 = _this3.svg.text(0 + _this3.app.config.pointRadius, 0 - _this3.app.config.pointRadius - _this3.app.config.textGap, textArr[0].split('')).attr({
						fill: _this3.app.config.pointTextColor
					}).addClass('text_point hidden_svg text_point_right lineAX lineAPartY' + (i + 1));

					rightText1.attr({
						x: +rightText1.attr('x') + rightText1.node.clientWidth / 4
					});

					var group1 = _this3.svg.g(unvisibleOutsideCircle1, outsideCircle1, circle1, leftText1, rightText1).addClass('pointGroup lineAXGroup y' + (i + 1) + 'Group');

					var unvisibleOutsideCircle2 = _this3.svg.circle(0, 0, _this3.app.config.unvisiblePointRadius).attr({
						fill: _this3.app.config.unvisiblePointFillColor,
						stroke: 'none'
					}).addClass('unvisibleCircle circle lineBX lineBPartY' + (i + 1)).data({
						line: 'lineB',
						type: 'rotate',
						row: 'y' + (i + 1)
					});

					var outsideCircle2 = _this3.svg.circle(0, 0, _this3.app.config.pointOutsideRadius).attr({
						fill: _this3.app.config.pointOutsideFillColor,
						stroke: 'none'
					}).addClass('outsideCircle circle lineBX lineBPartY' + (i + 1)).data({
						line: 'lineB',
						type: 'rotate',
						row: 'y' + (i + 1)
					});
					var circle2 = _this3.svg.circle(0, 0, _this3.app.config.pointRadius).attr({
						fill: _this3.app.config.pointFillColor,
						stroke: _this3.app.config.pointStrokeColor,
						strokeWidth: _this3.app.config.pointStrokeWidth
					}).addClass('circle lineBX lineBPartY' + (i + 1)).data({
						line: 'lineB',
						type: 'rotate',
						row: 'y' + (i + 1)
					});

					var leftText2 = _this3.svg.text(0 - _this3.app.config.pointRadius, 0 - _this3.app.config.pointRadius - _this3.app.config.textGap, textArr[1].split('')).attr({
						fill: _this3.app.config.pointTextColor
					}).addClass('text_point hidden_svg text_point_left lineBX lineBPartY' + (i + 1));

					leftText2.attr({
						x: +leftText2.attr('x') - leftText2.node.clientWidth * 5 / 4
					});

					var rightText2 = _this3.svg.text(0 + _this3.app.config.pointRadius, 0 - _this3.app.config.pointRadius - _this3.app.config.textGap, textArr[1].split('')).attr({
						fill: _this3.app.config.pointTextColor
					}).addClass('text_point hidden_svg text_point_right lineBX lineBPartY' + (i + 1));

					rightText2.attr({
						x: +rightText2.attr('x') + rightText2.node.clientWidth / 4
					});
					var group2 = _this3.svg.g(unvisibleOutsideCircle2, outsideCircle2, circle2, leftText2, rightText2).addClass('pointGroup lineBXGroup y' + (i + 1) + 'Group');

					_this3.group.add(group1, group2);
					return [group1, group2];
				});
			}
		}, {
			key: 'drawSegmentLines',
			value: function drawSegmentLines() {

				var length = this.pointGroupArr.length;
				for (var i = 1; i < length; i++) {
					var leftStartPoint = this.pointGroupArr[i - 1][0];
					var rightstartPoint = this.pointGroupArr[i - 1][1];
					var leftEndPoint = this.pointGroupArr[i][0];
					var rightEndPoint = this.pointGroupArr[i][1];
				}
			}
		}, {
			key: 'drawByAngle',
			value: function drawByAngle(angle, classString, init) {
				var radian = Math.tan(angle);

				var pos = void 0;
				if (init) {
					pos = {
						y1: this.canvasBoundary.minY - this.app.config.lineGap,
						x1: -(this.canvasBoundary.minY - this.app.config.lineGap) / radian + this.app.config[classString + 'X'],
						y2: this.canvasBoundary.maxY + this.app.config.lineGap,
						x2: -(this.canvasBoundary.maxY + this.app.config.lineGap) / radian + this.app.config[classString + 'X']
					};
				} else {
					pos = {
						y1: this.canvasBoundary.minY - this.app.config.lineGap,
						x1: -(this.canvasBoundary.minY - this.app.config.lineGap) / radian + this.app.config[classString + 'X'] + this.app.data[classString + 'X'],
						y2: this.canvasBoundary.maxY + this.app.config.lineGap,
						x2: -(this.canvasBoundary.maxY + this.app.config.lineGap) / radian + this.app.config[classString + 'X'] + this.app.data[classString + 'X']
					};
				}

				[].slice.call(Snap.selectAll('.' + classString)).map(function (el) {
					el.setPosition(pos, true);
				});
			}
		}, {
			key: 'drawByOffset',
			value: function drawByOffset() {
				var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				    _ref2$x = _ref2.x,
				    x = _ref2$x === undefined ? 0 : _ref2$x,
				    _ref2$y = _ref2.y,
				    y = _ref2$y === undefined ? 0 : _ref2$y;

				var classString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var direct = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var pos = {
					x: x,
					y: y
				};
				[].slice.call(Snap.selectAll('.' + classString)).map(function (el) {
					el.setPosition(pos, direct);
				});
			}
		}, {
			key: 'drawParallelByOffset',
			value: function drawParallelByOffset() {
				var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				    _ref3$x = _ref3.x,
				    x = _ref3$x === undefined ? 0 : _ref3$x,
				    _ref3$y = _ref3.y,
				    y = _ref3$y === undefined ? 0 : _ref3$y;

				var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


				var group = Snap.select('.parallelLine' + index + 'Group');

				var originY = group.select('.parallelLine').attr('y1');
				var pos = {
					x: x,
					y: y - originY
				};

				[].slice.call(group.children()).map(function (el) {
					el.setPosition(pos);
				});
			}
		}, {
			key: 'drawLineText',
			value: function drawLineText() {
				var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				var side = arguments[1];

				var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
				    _ref4$x = _ref4.x,
				    x = _ref4$x === undefined ? 0 : _ref4$x,
				    _ref4$y = _ref4.y,
				    y = _ref4$y === undefined ? 0 : _ref4$y;

				var pos1 = void 0,
				    pos2 = void 0;
				var textA = Snap.select('.textA');
				var textB = Snap.select('.textB');
				if (init) {
					pos1 = {
						x: -(y + textA.node.clientHeight) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX - textA.node.clientWidth - this.app.config.textGap,
						y: +textA.node.clientHeight
					};
					pos2 = {
						x: -(y + textB.node.clientHeight) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.config.textGap,
						y: +textB.node.clientHeight
					};

					textA.data({
						x: textA.node.clientWidth,
						y: textA.node.clientHeight
					});
					textB.data({
						y: textB.node.clientHeight
					});
				} else {
					pos1 = {
						x: -(y + textA.data('y')) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX - textA.data('x') + this.app.data.lineAX - this.app.config.textGap,
						y: +textA.data('y')
					};
					pos2 = {
						x: -(y + textB.data('y')) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX + this.app.config.textGap,
						y: +textB.data('y')
					};
				}
				textA.setPosition(pos1, true);
				textB.setPosition(pos2, true);

				if (side) {
					textA.after(textB);
				}
			}
		}, {
			key: 'drawPointByOffset',
			value: function drawPointByOffset() {
				var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				    _ref5$x = _ref5.x,
				    x = _ref5$x === undefined ? 0 : _ref5$x,
				    _ref5$y = _ref5.y,
				    y = _ref5$y === undefined ? 0 : _ref5$y;

				var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var init = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


				var pos1 = void 0,
				    pos2 = void 0;
				if (init) {

					pos1 = {
						x: -y / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX,
						y: y
					};
					pos2 = {
						x: -y / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX,
						y: y
					};
				} else {
					pos1 = {
						x: -y / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX,
						y: y
					};
					pos2 = {
						x: -y / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX,
						y: y
					};
				}

				var point1 = {
					x: +Snap.select('.circle.lineAPartY' + index).attr('cx'),
					y: +Snap.select('.circle.lineAPartY' + index).attr('cy')
				};
				var point2 = {
					x: +Snap.select('.circle.lineBPartY' + index).attr('cx'),
					y: +Snap.select('.circle.lineBPartY' + index).attr('cy')
				};

				var offset1 = {
					x: pos1.x - point1.x,
					y: pos1.y - point1.y
				};
				var offset2 = {
					x: pos2.x - point2.x,
					y: pos2.y - point2.y
				};

				this.drawByOffset(offset1, 'lineAPartY' + index);
				this.drawByOffset(offset2, 'lineBPartY' + index);
				this.controlTextShow({
					bool: pos1.x <= pos2.x,
					i: index - 1
				});
			}
		}, {
			key: 'bringToFront',
			value: function bringToFront(classString) {
				var group = Snap.selectAll('.' + classString);
				if (!classString || !group) {
					return;
				}
				[].slice.call(group).map(function (el) {
					el.toFront(el.parent());
				});
			}
		}, {
			key: 'controlSegments',
			value: function controlSegments(init, side) {
				var _this4 = this;

				if (Snap.selectAll('.segmentGroup')) {
					Snap.selectAll('.segmentGroup').remove();
				}
				this.app.config.segmentShow.sort(function (a, b) {

					if (init) {
						return _this4.app.config[a] > _this4.app.config[b];
					} else {
						return _this4.app.config[a] + _this4.app.data[a] > _this4.app.config[b] + _this4.app.data[b];
					}
				});

				var pointArr = this.app.config.segmentShow.map(function (key) {
					if (init) {
						return [{
							x: -_this4.app.config[key] / Math.tan(_this4.app.config.lineAAngle) + _this4.app.config.lineAX,
							y: _this4.app.config[key]
						}, {
							x: -_this4.app.config[key] / Math.tan(_this4.app.config.lineBAngle) + _this4.app.config.lineBX,
							y: _this4.app.config[key]
						}];
					} else {
						return [{
							x: -(_this4.app.config[key] + _this4.app.data[key]) / Math.tan(_this4.app.config.lineAAngle) + _this4.app.config.lineAX + _this4.app.data.lineAX,
							y: _this4.app.config[key] + _this4.app.data[key]
						}, {
							x: -(_this4.app.config[key] + _this4.app.data[key]) / Math.tan(_this4.app.config.lineBAngle) + _this4.app.config.lineBX + _this4.app.data.lineBX,
							y: _this4.app.config[key] + _this4.app.data[key]
						}];
					}
				});

				for (var i = 1; i < pointArr.length; i++) {
					var segment1 = this.svg.path('M' + pointArr[i - 1][0].x + ' ' + pointArr[i - 1][0].y + ' L' + pointArr[i][0].x + ' ' + pointArr[i][0].y).attr({
						fill: 'none',
						stroke: this.app.config.segmentLineColors[i - 1][0],
						strokeWidth: this.app.config.crossingLineWidth
					}).addClass('segment');

					var segment2 = this.svg.path('M' + pointArr[i - 1][1].x + ' ' + pointArr[i - 1][1].y + ' L' + pointArr[i][1].x + ' ' + pointArr[i][1].y).attr({
						fill: 'none',
						stroke: this.app.config.segmentLineColors[i - 1][1],
						strokeWidth: this.app.config.crossingLineWidth
					}).addClass('segment');

					var length1 = +segment1.getTotalLength();
					var textValue1 = Math.round(length1 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? '0' : '' + Math.round(length1 * 100 / this.app.config.pixelToLength) / 100;
					var center1 = length1 * 100 / this.app.config.pixelToLength / 100 < 0.01 ? {
						x: pointArr[i - 1][0].x,
						y: pointArr[i - 1][0].y
					} : segment1.getPointAtLength(length1 / 2);
					var text1 = null;

					var length2 = +segment2.getTotalLength();
					var textValue2 = Math.round(length2 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? '0' : '' + Math.round(length2 * 100 / this.app.config.pixelToLength) / 100;
					var center2 = length2 * 100 / this.app.config.pixelToLength / 100 < 0.01 ? {
						x: pointArr[i - 1][1].x,
						y: pointArr[i - 1][1].y
					} : segment2.getPointAtLength(length2 / 2);
					var text2 = null;

					var showDecide = center1.x <= center2.x;

					if (showDecide) {

						text1 = this.svg.text(center1.x, center1.y, textValue1).attr({
							fill: this.app.config.crossingLineColor
						}).addClass('segment text_segment');
						text1.attr({
							x: +text1.attr('x') - text1.node.clientWidth - this.app.config.textGap
						});
						text2 = this.svg.text(center2.x, center2.y, textValue2).attr({
							fill: this.app.config.crossingLineColor
						}).addClass('segment text_segment');

						text2.attr({
							x: +text2.attr('x') + this.app.config.textGap
						});
					} else {
						text1 = this.svg.text(center1.x, center1.y, textValue1).attr({
							fill: this.app.config.crossingLineColor
						}).addClass('segment text_segment');

						text1.attr({
							x: +text1.attr('x') + this.app.config.textGap
						});

						text2 = this.svg.text(center2.x, center2.y, textValue2).attr({
							fill: this.app.config.crossingLineColor
						}).addClass('segment text_segment');

						text2.attr({
							x: +text2.attr('x') - text2.node.clientWidth - this.app.config.textGap
						});
					}

					var group2 = this.svg.g(segment2, text2).addClass('segmentGroup');
					var group1 = this.svg.g(segment1, text1).addClass('segmentGroup');

					if (side) {
						this.group.add(group2, group1);
					} else {
						this.group.add(group1, group2);
					}
				}

				this.bringToFront('pointGroup');
				this.updateGraph('segmentRatioShow', this.app.config.segmentRatioShow);
				this.updateGraph('segmentLengthShow', this.app.config.segmentLengthShow);
			}
		}, {
			key: 'animateControl',
			value: function animateControl(state) {

				switch (state) {
					case 0:
						if (this.animateObj) {
							this.animateObj.kill();

							this.animateObj = null;
						}
						break;
					case 1:
						if (this.animateObj) {
							this.animateObj.resume();
							return;
						}
						this.animateObj = this.createAnimate();
						this.animateObj.play();
						break;
					case 2:
						if (this.animateObj) {
							this.animateObj.pause();
						}
						break;
					default:
						if (this.animateObj) {
							this.animateObj.kill();

							this.animateObj = null;
						}
						break;
				}
			}
		}, {
			key: 'createAnimate',
			value: function createAnimate() {
				var _this5 = this;

				this.app.config.segmentShow.sort(function (a, b) {
					return _this5.app.config[a] + _this5.app.data[a] > _this5.app.config[b] + _this5.app.data[b];
				});
				var center = void 0;
				var length = this.app.config.segmentShow.length;
				var even = length % 2 === 0;
				if (even) {

					center = (this.app.config[this.app.config.segmentShow[length - 2]] + this.app.data[this.app.config.segmentShow[length - 2]] + this.app.config[this.app.config.segmentShow[1]] + this.app.data[this.app.config.segmentShow[1]]) / 2;
				} else {
					center = this.app.config[this.app.config.segmentShow[parseInt(length / 2)]] + this.app.data[this.app.config.segmentShow[parseInt(length / 2)]];
				}

				var moveArr = [];
				var t1 = new TimelineMax({
					onUpdate: function onUpdate() {
						var _this6 = this;

						moveArr.map(function (obj) {
							_this6.app.data[obj.y] = obj.start - obj.diff;
							obj.diff = obj.start;
						});
					},
					onComplete: function onComplete() {
						t1.reverse();
					},
					onReverseComplete: function onReverseComplete() {
						moveArr = null;
						this.app.data.animateShow = 0;
					},
					ease: Power0.easeNone,
					callbackScope: this,
					paused: true
				});

				var cover = this.app.config.segmentShow.reduce(function (a, b) {

					return Math.round((_this5.app.config[a] + _this5.app.data[a]) * 1000) === Math.round((_this5.app.config[b] + _this5.app.data[b]) * 1000) ? b : null;
				});

				for (var i = 0; i < length; i++) {

					var myObject = {
						y: this.app.config.segmentShow[i],
						diff: 0,
						start: 0,
						end: center - (this.app.config[this.app.config.segmentShow[i]] + this.app.data[this.app.config.segmentShow[i]])
					};
					if (cover) {
						myObject.end = 0;
					}
					t1.to(myObject, Math.abs(myObject.end - myObject.start) / 50, {
						start: myObject.end
					}, 0);
					moveArr.push(myObject);
				}

				return t1;
			}
		}, {
			key: 'checkOutsideCanvas',
			value: function checkOutsideCanvas() {
				var _this7 = this;

				var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
				    _ref6$x = _ref6.x,
				    x = _ref6$x === undefined ? 0 : _ref6$x,
				    _ref6$y = _ref6.y,
				    y = _ref6$y === undefined ? 0 : _ref6$y,
				    _ref6$type = _ref6.type,
				    type = _ref6$type === undefined ? null : _ref6$type,
				    _ref6$index = _ref6.index,
				    index = _ref6$index === undefined ? -1 : _ref6$index,
				    _ref6$classString = _ref6.classString,
				    classString = _ref6$classString === undefined ? '' : _ref6$classString;

				this.app.config.segmentShow.sort(function (a, b) {
					return _this7.app.config[a] + _this7.app.data[a] > _this7.app.config[b] + _this7.app.data[b];
				});

				switch (type) {
					case 'X':

						var key1 = this.app.config.segmentShow[0];
						var key2 = this.app.config.segmentShow[this.app.config.segmentShow.length - 1];

						var x1 = -(this.app.config[key1] + this.app.data[key1]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'] + x;
						var x2 = -(this.app.config[key2] + this.app.data[key2]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'] + x;

						if (x1 < x2) {

							return x1 - this.app.config.pointRadius > this.canvasBoundary.minX && x2 + this.app.config.pointRadius < this.canvasBoundary.maxX;
						} else {
							return x2 - this.app.config.pointRadius > this.canvasBoundary.minX && x1 + this.app.config.pointRadius < this.canvasBoundary.maxX;
						}

						break;

					case 'Y':

						var pos1 = {
							x: -(this.app.config[index] + this.app.data[index] + y) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX,
							y: this.app.config[index] + this.app.data[index] + y
						};
						var pos2 = {
							x: -(this.app.config[index] + this.app.data[index] + y) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX,
							y: this.app.config[index] + this.app.data[index] + y
						};

						if (pos1.y + this.app.config.pointRadius < this.canvasBoundary.maxY && pos1.y - this.app.config.pointRadius > this.canvasBoundary.minY) {
							if (pos1.x < pos2.x) {
								return pos1.x - this.app.config.pointRadius > this.canvasBoundary.minX && pos2.x < this.canvasBoundary.maxX;
							} else {
								return pos2.x - this.app.config.pointRadius > this.canvasBoundary.minX && pos1.x + this.app.config.pointRadius < this.canvasBoundary.maxX;
							}
						}

						break;

					case 'rotate':

						var cover = this.app.config.segmentShow.reduce(function (a, b) {

							return Math.round((_this7.app.config[a] + _this7.app.data[a]) * 1000) === Math.round((_this7.app.config[b] + _this7.app.data[b]) * 1000) ? b : null;
						});

						if (cover) {
							return;
						}

						var last = this.app.config.segmentShow[this.app.config.segmentShow.length - 1];
						var first = this.app.config.segmentShow[0];
						if (index == first || index == last) {
							return x - this.app.config.pointRadius > this.canvasBoundary.minX && x + this.app.config.pointRadius < this.canvasBoundary.maxX;
						}

						var movepoint = {
							x: x,
							y: y
						};

						var fitstPoint = {
							x: -(this.app.config[first] + this.app.data[first]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'],
							y: this.app.config[first] + this.app.data[first]
						};

						var k = -(movepoint.y - fitstPoint.y) / (movepoint.x - fitstPoint.x);
						var offset = movepoint.x - -movepoint.y / k;

						var checkX = -(this.app.config[last] + this.app.data[last]) / k + offset;

						return checkX - this.app.config.pointRadius > this.canvasBoundary.minX && checkX + this.app.config.pointRadius < this.canvasBoundary.maxX;

						break;
					default:
						break;

				}
			}

			/**
	   * 旋转线段
	   * @param rotateData
	   */

		}, {
			key: 'rotate',
			value: function rotate(rotateData) {
				var _this8 = this;

				//        rotateData.x
				//        rotateData.y
				//        rotateData.row
				//        rotateData.path
				var segmentShow = this.app.config.segmentShow;
				//根据y值排序
				segmentShow.sort(function (a, b) {
					return _this8.app.config[a] + _this8.app.data[a] > _this8.app.config[b] + _this8.app.data[b];
				});

				//算出圆心位置
				var center = {
					x: null,
					y: null
				},
				    line = null,
				    centerPointName = null,
				    centerPoint = null;
				if (rotateData.row === segmentShow[0]) {
					line = segmentShow[segmentShow.length - 1];
				} else {
					line = segmentShow[0];
				}
				centerPointName = rotateData.path + "Part" + line.toUpperCase();
				centerPoint = Snap.selectAll("." + centerPointName)[1];
				center.x = centerPoint.attr("cx");
				center.y = centerPoint.attr("cy");
				var tan = -(rotateData.y - center.y) / (rotateData.x - center.x);
				// tan = Math.tan(75 * Math.PI / 180);
				var angle = Math.atan(tan);
				var offsetx = -(this.app.config[line] + this.app.data[line]) / Math.tan(this.app.data[rotateData.path + 'Angle']) + this.app.config[rotateData.path + 'X'] + this.app.data[rotateData.path + 'X'];
				this.app.config[rotateData.path + 'X'] = offsetx - -(this.app.config[line] + this.app.data[line]) / Math.tan(angle) - this.app.data[rotateData.path + 'X'];
				this.app.data[rotateData.path + 'Angle'] = angle;
				//将点和线提升至最上层
				this.bringToFront(rotateData.path + 'XGroup');
				//更新点的位置
				this.app.data.y1 = 0;
				this.app.data.y2 = 0;
				this.app.data.y3 = 0;
				this.app.data.y4 = 0;
				this.app.data.y5 = 0;
			}

			/**
	   * 绑定svg点击事件
	   */

		}, {
			key: 'bindEvent',
			value: function bindEvent() {
				var _this9 = this;

				var that = this;
				var type = '';
				var target = null;
				var isDrag = false,
				    eventData = {
					x: 0,
					y: 0
				};

				function mousedownEvent(e) {
					if (e.touches) {
						if (e.touches.length === 1) {
							e.preventDefault();
							e = e.changedTouches[0];
						} else {
							return;
						}
					} else {
						e.preventDefault();
						if (e.which !== 1) {
							return;
						}
					}

					Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
					if (that.app.data.animateShow) {
						//演示过程中不可点击
						return;
					}

					target = Snap(e.target);
					type = target.data('type');
					isDrag = false;
					eventData.startX = e.clientX;
					eventData.startY = e.clientY;
					if (type === 'rotate') {
						//选中该点
						var row = target.data('row');
						var targetLine = target.data('line');
						var pointName = targetLine + 'Part' + row.toUpperCase();
						target.parent().select('.outsideCircle').addClass('selectedCircle');
					}

					that.svg.mousemove(mousemoveEvent);
					that.svg.touchmove(mousemoveEvent);
					that.svg.touchcancel(mouseupEvent);
					that.svg.mouseup(mouseupEvent);
					that.svg.touchend(mouseupEvent);
				}

				function mousemoveEvent(e) {
					e.preventDefault();
					if (e.changedTouches) {
						e = e.changedTouches[0];
					}

					eventData.x = e.clientX - eventData.startX;
					eventData.y = e.clientY - eventData.startY;
					Snap.select('.parallelLineSelected') ? that.app.data.selectedParallelLine = '' : null;

					if (Math.abs(eventData.x) > 5 || Math.abs(eventData.y) > 5) {
						isDrag = true;
						that.app.data.reset = 1;
						if (eventData.x + eventData.startX - that.container.offset().left > that.svgWidth || eventData.x + eventData.startX - that.container.offset().left < 0 || eventData.y + eventData.startY - that.container.offset().top < 0 || eventData.y + eventData.startY - that.container.offset().top > that.svgHeight) {
							mouseupEvent();
							return;
						};

						switch (type) {
							case 'Y':
								var index = target.data('index');
								if (that.checkOutsideCanvas({
									y: eventData.y,
									index: 'y' + index,
									type: type
								})) {
									that.app.data['y' + index] = eventData.y;
								}
								break;
							case 'X':
								var classString = target.data('classString');
								if (that.checkOutsideCanvas({
									type: type,
									classString: classString,
									x: eventData.x
								})) {

									that.app.data[classString + 'X'] = eventData.x;
								}
								break;
							case 'rotate':
								var row = target.data('row');
								var targetLine = target.data('line');
								if (that.checkOutsideCanvas({
									type: type,
									x: eventData.x + parseFloat(target.attr("cx")),
									y: parseFloat(target.attr("cy")),
									index: row,
									classString: targetLine
								})) {
									that.rotate({
										x: eventData.x + parseFloat(target.attr("cx")),
										y: parseFloat(target.attr("cy")),
										row: row,
										path: targetLine
									});
								}

								// that.app.data[]
								/*that.rotate({
	           x : eventData.x + parseFloat(target.attr("cx")) ,
	           y : parseFloat(target.attr("cy")),
	           row : row ,
	           path :targetLine
	       });
	       that.app.data[targetLine + 'X'] = eventData.x;*/
								break;
							default:
								that.drag(eventData);
								break;
						}
						eventData.startX = e.clientX;
						eventData.startY = e.clientY;
					}
				}

				function mouseupEvent(e) {
					/*
	    		 取消点的选中状态
	    		 */
					Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
					if (!isDrag && target) {
						/*
	         更新平行线的选中状态
	          */
						var isSelectedBefore = target.hasClass('parallelLineSelected');
						if (!isSelectedBefore && target.hasClass('parallelLine') && that.app.data.showParallelLines.length > 3) {
							var index = target.data('index') - 1;
							that.app.data.selectedParallelLine = that.app.config.allParallelLinesName[index];
						} else {
							if (that.app.data.selectedParallelLine) {
								that.app.data.selectedParallelLine = '';
							}
						}
						that.app.data.reset = 1;
					}
					target = null;
					type = '';
					isDrag = false;
					that.svg.unmousemove();
					that.svg.untouchmove();
					that.svg.untouchcancel();
					that.svg.unmouseup();
					that.svg.untouchend();
				}

				this.svg.mousedown(mousedownEvent);
				this.svg.touchstart(mousedownEvent);

				this.container.on('mouseleave', function (e) {
					Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
					_this9.svg.unmousemove();
					_this9.svg.untouchmove();
					_this9.svg.untouchcancel();
					_this9.svg.unmouseup();
					_this9.svg.untouchend();
				});
			}

			/**
	   * 解绑svg上的事件
	   */

		}, {
			key: 'unbindEvent',
			value: function unbindEvent() {
				this.svg.unmousedown();
				this.svg.untouchstart();
				this.svg.unmousemove();
				this.svg.untouchmove();
				this.svg.unmouseup();
				this.svg.untouchcancel();
				this.svg.untouchend();
			}

			/**
	   * 更新图形
	   * @param item 数据项名称
	   * @param value 数据项新值
	   * @param oldValue 旧数据项
	   */

		}, {
			key: 'updateGraph',
			value: function updateGraph(item, value, oldValue) {
				var _this10 = this;

				switch (item) {
					case 'segmentLengthShow':
						{
							if (value === 1) {
								Snap.selectAll('.segmentGroup').forEach(function (seg) {
									return seg[1].removeClass('hidden_svg');
								});
							} else {
								Snap.selectAll('.segmentGroup').forEach(function (seg) {
									return seg[1].addClass('hidden_svg');
								});
							}
							break;
						}
					case 'segmentRatioShow':
						{
							if (value === 1) {
								Snap.selectAll('.segmentGroup').forEach(function (seg) {
									return seg[0].removeClass('hidden_svg');
								});
							} else {
								Snap.selectAll('.segmentGroup').forEach(function (seg) {
									return seg[0].addClass('hidden_svg');
								});
							}
							break;
						}
					case 'showParallelLines':
						{
							//更新线的显示隐藏
							var allParallelLinesName = this.app.config.allParallelLinesName;
							for (var i = 0; i < allParallelLinesName.length; i++) {
								var targetParallel = this.parallelLineGroupArr[i];
								var targetPoints = this.pointGroupArr[i];
								if (value.indexOf(allParallelLinesName[i]) !== -1) {
									targetParallel.removeClass('hidden_svg');
									targetPoints[0].removeClass('hidden_svg');
									targetPoints[1].removeClass('hidden_svg');
								} else {
									targetParallel.addClass('hidden_svg');
									targetPoints[0].addClass('hidden_svg');
									targetPoints[1].addClass('hidden_svg');
								}
							}

							//添加了数据,计算新线的位置
							if (oldValue && oldValue.length < value.length) {
								var newItem = null;
								value.forEach(function (it) {
									if (oldValue.indexOf(it) === -1) {
										newItem = it;
									}
								});
								//取消选中
								if (this.app.config.selectedParallelLine === newItem) {
									this.app.data.selectedParallelLine = '';
								}

								//根据y值排序
								var index = this.app.config.allParallelLinesName.indexOf(newItem);
								index++;
								var segmentShow = $.extend([], this.app.config.segmentShow);
								segmentShow.splice(segmentShow.indexOf('y' + index), 1);
								segmentShow.sort(function (a, b) {
									return _this10.app.config[a] + _this10.app.data[a] > _this10.app.config[b] + _this10.app.data[b];
								});

								//设置新线位置
								var preY = null,
								    nextY = null;
								if (oldValue.length === 3) {
									preY = this.app.data[segmentShow[0]] + this.app.config[segmentShow[0]];
									nextY = this.app.data[segmentShow[1]] + this.app.config[segmentShow[1]];
								} else {
									preY = this.app.data[segmentShow[2]] + this.app.config[segmentShow[2]];
									nextY = this.app.data[segmentShow[3]] + this.app.config[segmentShow[3]];
								}

								this.app.data['y' + index] = (preY + nextY) / 2 - (this.app.config['y' + index] + this.app.data['y' + index]);
							}
							break;
						}
					case 'animateShow':
						{
							break;
						}
					case 'reset':
						{
							if (!value) {
								this.group.attr('transform', "");
								this.transformPosition = {
									x: 0,
									y: 0
								};
							}
							break;
						}
					case 'selectedParallelLine':
						{
							if (Snap.select('.parallelLineSelected')) {
								Snap.select('.parallelLineSelected').removeClass('parallelLineSelected');
							}
							if (value) {
								var target = Snap.select('.' + value);
								target.addClass('parallelLineSelected');
							}
							break;
						}
				}
			}

			/**
	   * 更新公式
	   * @param item
	   * @param value
	   */

		}, {
			key: 'updateFormula',
			value: function updateFormula(item, value) {
				switch (item) {
					case 'segmentRatioShow':
						{
							if (value === 1) {
								this.$formulaContainer.show();
							} else {
								this.$formulaContainer.hide();
							}
							break;
						}
					case 'animateShow':
						{
							if (value > 0) {
								this.app.data.segmentRatioShow = 1;
							}
							break;
						}
					case 'showParallelLines':
						{
							if (value.length > 3) {
								this.$manyFormula.show();
								this.$littileFormula.hide();
							} else {
								this.$manyFormula.hide();
								this.$littileFormula.show();
							}
							break;
						}
					case 'formulaNeedUpdate':
						{
							break;
						}
				}
				this._updateFormulaText();
			}

			/**
	   * 更新公式文字
	   * @private
	   */

		}, {
			key: '_updateFormulaText',
			value: function _updateFormulaText() {
				var _this11 = this;

				if (!this.app.data) {
					return;
				}
				var segmentShow = this.app.config.segmentShow;

				//根据y值排序
				segmentShow.sort(function (a, b) {
					return _this11.app.config[a] + _this11.app.data[a] > _this11.app.config[b] + _this11.app.data[b];
				});
				console.log(segmentShow);

				//提取公式所需数据
				var data = [],
				    data1 = [],
				    data2 = [],
				    preLineData = null;
				for (var i = 1; i < segmentShow.length; i++) {
					var index = parseInt(segmentShow[i][1]) - 1;
					var preIndex = parseInt(segmentShow[i - 1][1]) - 1;
					var y = this.app.config[segmentShow[i]] + this.app.data[segmentShow[i]];
					var preY = this.app.config[segmentShow[i - 1]] + this.app.data[segmentShow[i - 1]];
					var names = this.app.config.pointsNameArr[index];
					var preNames = this.app.config.pointsNameArr[preIndex];
					var length = Math.round((y - preY) * 100 / this.app.config.pixelToLength) / 100;
					length = length < 0.01 ? 0 : length;
					data1.push(preNames[0] + names[0]);
					data1.push(length);
					data2.push(preNames[1] + names[1]);
					data2.push(length);
				}
				data = data1.concat(data2);

				var indexOfZeroIndex = data.indexOf(0);
				if (indexOfZeroIndex != -1) {
					//线段长度有0
					this._updateEqualFormulaText(true, data);
				} else {
					this._updateEqualFormulaText(false);
				}

				//更新公式
				if (this.app.data.showParallelLines.length === 3) {
					this._updateLittleFormulaText(data);
				} else {
					this._updateManyFormulaText(data);
				}
			}

			/**
	   * 更新三条线时公式文字
	   * @param data 公式数据，格式形如:['AB',1,'BC',1,'DE',1,'EF',1];
	   * @private
	   */

		}, {
			key: '_updateLittleFormulaText',
			value: function _updateLittleFormulaText(data) {
				/* data的格式如下
	    data = ['AB',1,'BC',1,'DE',1,'EF',1];
	    */
				if (data.length < 8) {
					this.$littileFormula.hide();
					return;
				} else {
					this.$littileFormula.show();
				}
				//写入DOM
				for (var i = 0; i < data.length; i += 2) {
					var index = i % 4;
					if (i < 4) {
						this._setFormulaTextToDom({
							container: this.$littileF_rowTxt1,
							type: 1,
							text: data[i],
							index: index
						});
					} else {
						this._setFormulaTextToDom({
							container: this.$littileF_rowTxt2,
							type: 1,
							text: data[i],
							index: index
						});
					}
				}
				var ratio = parseFloat(data[1] / data[3]);
				ratio = Math.round(ratio * 100) / 100;
				if (ratio < 0.01) {
					this.$littileF_verMid.text('x');
					this.$littileF_verMid.css("margin-top", "-0.2em");
					this.$littileFormula.find('.remark').css('display', 'block');
				} else {
					this.$littileF_verMid.text(ratio);
					this.$littileF_verMid.css("margin-top", "auto");
					this.$littileFormula.find('.remark').css('display', 'none');
				}
			}

			/**
	   * 更新多与三条线时公式文字
	   * @param data 公式数据，格式形如:['AP1',1,'P1B',1,'BC',1,'DQ1',1,'Q1E',1,'EF',1];
	   * @private
	   */

		}, {
			key: '_updateManyFormulaText',
			value: function _updateManyFormulaText(data) {
				/* data的格式如下
	    data = ['AP1',1,'P1B',1,'BC',1,'DQ1',1,'Q1E',1,'EF',1];
	    */

				/*
	    处理长度为0的情况
	    */
				if (data.length < 8) {
					this.$manyFormula.hide();
					return;
				} else {
					this.$manyFormula.show();
				}

				this._normalize(data);
				//删除多余项
				var showLength = data.length / 4 - 1;
				for (var i = 0; i < 4; i++) {
					if (i > showLength) {
						var iIndex = i * 2;
						this.$manyF_rowTxt1.find("i").eq(iIndex).hide();
						this.$manyF_rowTxt1.find("i").eq(iIndex + 1).hide();
						this.$manyF_rowTxt2.find("i").eq(iIndex).hide();
						this.$manyF_rowTxt2.find("i").eq(iIndex + 1).hide();
						this.$manyF_rowTxt3.find("span").eq(i + 1).hide();
						if (i > 0) {
							this.$manyF_rowTxt1.find("em").eq(i - 1).hide();
							this.$manyF_rowTxt2.find("em").eq(i - 1).hide();
							this.$manyF_rowTxt3.find("em").eq(i - 1).hide();
						}
					} else {
						var _iIndex = i * 2;
						this.$manyF_rowTxt1.find("i").eq(_iIndex).show();
						this.$manyF_rowTxt1.find("i").eq(_iIndex + 1).show();
						this.$manyF_rowTxt2.find("i").eq(_iIndex).show();
						this.$manyF_rowTxt2.find("i").eq(_iIndex + 1).show();
						this.$manyF_rowTxt3.find("span").eq(i + 1).show();
						if (i > 0) {
							this.$manyF_rowTxt1.find("em").eq(i - 1).show();
							this.$manyF_rowTxt2.find("em").eq(i - 1).show();
							this.$manyF_rowTxt3.find("em").eq(i - 1).show();
						}
					}
				}

				//写入DOM
				var index = 1;
				for (var _i = 0, j = data.length / 2; _i < data.length / 2; _i++, j++) {
					if (_i % 2 === 0) {
						//处理线段文字
						this._setFormulaTextToDom({
							container: this.$manyF_rowTxt1,
							type: 1,
							text: data[_i],
							index: _i
						});
						this._setFormulaTextToDom({
							container: this.$manyF_rowTxt2,
							type: 1,
							text: data[j],
							index: _i
						});
					} else {
						//处理线段长度
						this._setFormulaTextToDom({
							container: this.$manyF_rowTxt3,
							type: 2,
							text: data[_i],
							index: index
						});
						index++;
					}
				}
			}

			/**
	   * 更新等于0情况
	   * @param hasZero 是否有0
	   * @param data 数据
	   * @private
	   */

		}, {
			key: '_updateEqualFormulaText',
			value: function _updateEqualFormulaText(hasZero, data) {
				this.$equalFormulas.hide();
				if (hasZero) {
					var zeroIndex = 0;
					//删除为0的元素，并显示
					for (var i = 1; i < data.length / 2; i += 2) {
						if (data[i] === 0) {
							var seg1Index = i - 1,
							    seg2Index = data.length / 2 + i - 1,
							    zeroText1 = data[seg1Index],
							    zeroText2 = data[seg2Index];
							var $equalFormula = this.$equalFormulas.eq(zeroIndex);

							zeroIndex++;
							this._setFormulaTextToDom({
								container: $equalFormula.find('.rowTxt:first'),
								type: 1,
								text: zeroText1,
								index: 0

							});
							this._setFormulaTextToDom({
								container: $equalFormula.find('.rowTxt:first'),
								type: 1,
								text: zeroText2,
								index: 2

							});
							$equalFormula.show();
							data.splice(seg1Index + 1, 1);
							data.splice(seg1Index, 1);
							seg2Index = seg2Index - 2;
							data.splice(seg2Index + 1, 1);
							data.splice(seg2Index, 1);
							i -= 2;
						}
					}
				}
			}

			/**
	   * 将公式写入到文档中
	   * @param 文字数据
	   * {   container : null, 数据项的外层，指$manyF_rowTxt1,2,3
	          type : null, 数据项的类型，1，线段名称，2，线段长度
	          text : null, 数据项的文字
	          index: null 数据项的序号
	      }
	   * @private
	   */

		}, {
			key: '_setFormulaTextToDom',
			value: function _setFormulaTextToDom(textData) {
				if (textData.type === 1) {
					//type === 1

					var segName = textData.text;
					var letters = [textData.container.find("i").eq(textData.index), textData.container.find("i").eq(textData.index + 1)];
					var letterIndex = 0;
					for (var i = 0; i < segName.length; i++) {
						var currChar = segName[i];
						if (currChar === 'P' || currChar === 'Q') {
							letters[letterIndex].html(segName[i] + '<sub class="TimesNewRoman times36">' + segName[i + 1] + '</sub>');
							i++;
						} else {
							letters[letterIndex].html(segName[i]);
						}
						letterIndex++;
					}
				} else {
					//type === 2

					var target = textData.container.find("span").eq(textData.index);
					target.text(textData.text);
				}
			}

			/**
	   * 将数据变成以1为基底的形式
	   * @param data 原始数据
	   * @returns {*} 标准化后的数据
	   * @private
	   */

		}, {
			key: '_normalize',
			value: function _normalize(data) {
				var min = parseFloat(data[1]);
				for (var i = 1; i < data.length / 2; i += 2) {
					if (min > parseFloat(data[i])) {
						min = parseFloat(data[i]);
					}
				}
				for (var _i2 = 1; _i2 < data.length; _i2 += 2) {
					data[_i2] = Math.round(data[_i2] / min * 100) / 100;
				}
				return data;
			}
		}]);
		return GraphControl;
	}(_BaseControl3.default);

	exports.default = GraphControl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)))

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	(function() {
	var fix = module.exports=0;

	// Snap.svg 0.4.0
	// 
	// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	// 
	// build: 2015-04-07

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	// ┌────────────────────────────────────────────────────────────┐ \\
	// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
	// ├────────────────────────────────────────────────────────────┤ \\
	// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
	// └────────────────────────────────────────────────────────────┘ \\

	(function (glob) {
	    var version = "0.4.2",
	        has = "hasOwnProperty",
	        separator = /[\.\/]/,
	        comaseparator = /\s*,\s*/,
	        wildcard = "*",
	        fun = function () {},
	        numsort = function (a, b) {
	            return a - b;
	        },
	        current_event,
	        stop,
	        events = {n: {}},
	        firstDefined = function () {
	            for (var i = 0, ii = this.length; i < ii; i++) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	        lastDefined = function () {
	            var i = this.length;
	            while (--i) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	    /*\
	     * eve
	     [ method ]

	     * Fires event with given `name`, given scope and other parameters.

	     > Arguments

	     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
	     - scope (object) context for the event handlers
	     - varargs (...) the rest of arguments will be sent to event handlers

	     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
	    \*/
	        eve = function (name, scope) {
	            name = String(name);
	            var e = events,
	                oldstop = stop,
	                args = Array.prototype.slice.call(arguments, 2),
	                listeners = eve.listeners(name),
	                z = 0,
	                f = false,
	                l,
	                indexed = [],
	                queue = {},
	                out = [],
	                ce = current_event,
	                errors = [];
	            out.firstDefined = firstDefined;
	            out.lastDefined = lastDefined;
	            current_event = name;
	            stop = 0;
	            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
	                indexed.push(listeners[i].zIndex);
	                if (listeners[i].zIndex < 0) {
	                    queue[listeners[i].zIndex] = listeners[i];
	                }
	            }
	            indexed.sort(numsort);
	            while (indexed[z] < 0) {
	                l = queue[indexed[z++]];
	                out.push(l.apply(scope, args));
	                if (stop) {
	                    stop = oldstop;
	                    return out;
	                }
	            }
	            for (i = 0; i < ii; i++) {
	                l = listeners[i];
	                if ("zIndex" in l) {
	                    if (l.zIndex == indexed[z]) {
	                        out.push(l.apply(scope, args));
	                        if (stop) {
	                            break;
	                        }
	                        do {
	                            z++;
	                            l = queue[indexed[z]];
	                            l && out.push(l.apply(scope, args));
	                            if (stop) {
	                                break;
	                            }
	                        } while (l)
	                    } else {
	                        queue[l.zIndex] = l;
	                    }
	                } else {
	                    out.push(l.apply(scope, args));
	                    if (stop) {
	                        break;
	                    }
	                }
	            }
	            stop = oldstop;
	            current_event = ce;
	            return out;
	        };
	        // Undocumented. Debug only.
	        eve._events = events;
	    /*\
	     * eve.listeners
	     [ method ]

	     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

	     > Arguments

	     - name (string) name of the event, dot (`.`) or slash (`/`) separated

	     = (array) array of event handlers
	    \*/
	    eve.listeners = function (name) {
	        var names = name.split(separator),
	            e = events,
	            item,
	            items,
	            k,
	            i,
	            ii,
	            j,
	            jj,
	            nes,
	            es = [e],
	            out = [];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            nes = [];
	            for (j = 0, jj = es.length; j < jj; j++) {
	                e = es[j].n;
	                items = [e[names[i]], e[wildcard]];
	                k = 2;
	                while (k--) {
	                    item = items[k];
	                    if (item) {
	                        nes.push(item);
	                        out = out.concat(item.f || []);
	                    }
	                }
	            }
	            es = nes;
	        }
	        return out;
	    };
	    
	    /*\
	     * eve.on
	     [ method ]
	     **
	     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
	     | eve.on("*.under.*", f);
	     | eve("mouse.under.floor"); // triggers f
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
	     > Example:
	     | eve.on("mouse", eatIt)(2);
	     | eve.on("mouse", scream);
	     | eve.on("mouse", catchIt)(1);
	     * This will ensure that `catchIt` function will be called before `eatIt`.
	     *
	     * If you want to put your handler before non-indexed handlers, specify a negative value.
	     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
	    \*/
	    eve.on = function (name, f) {
	        name = String(name);
	        if (typeof f != "function") {
	            return function () {};
	        }
	        var names = name.split(comaseparator);
	        for (var i = 0, ii = names.length; i < ii; i++) {
	            (function (name) {
	                var names = name.split(separator),
	                    e = events,
	                    exist;
	                for (var i = 0, ii = names.length; i < ii; i++) {
	                    e = e.n;
	                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
	                }
	                e.f = e.f || [];
	                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
	                    exist = true;
	                    break;
	                }
	                !exist && e.f.push(f);
	            }(names[i]));
	        }
	        return function (zIndex) {
	            if (+zIndex == +zIndex) {
	                f.zIndex = +zIndex;
	            }
	        };
	    };
	    /*\
	     * eve.f
	     [ method ]
	     **
	     * Returns function that will fire given event with optional arguments.
	     * Arguments that will be passed to the result function will be also
	     * concated to the list of final arguments.
	     | el.onclick = eve.f("click", 1, 2);
	     | eve.on("click", function (a, b, c) {
	     |     console.log(a, b, c); // 1, 2, [event object]
	     | });
	     > Arguments
	     - event (string) event name
	     - varargs (…) and any other arguments
	     = (function) possible event handler function
	    \*/
	    eve.f = function (event) {
	        var attrs = [].slice.call(arguments, 1);
	        return function () {
	            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
	        };
	    };
	    /*\
	     * eve.stop
	     [ method ]
	     **
	     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
	    \*/
	    eve.stop = function () {
	        stop = 1;
	    };
	    /*\
	     * eve.nt
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     > Arguments
	     **
	     - subname (string) #optional subname of the event
	     **
	     = (string) name of the event, if `subname` is not specified
	     * or
	     = (boolean) `true`, if current event’s name contains `subname`
	    \*/
	    eve.nt = function (subname) {
	        if (subname) {
	            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
	        }
	        return current_event;
	    };
	    /*\
	     * eve.nts
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     **
	     = (array) names of the event
	    \*/
	    eve.nts = function () {
	        return current_event.split(separator);
	    };
	    /*\
	     * eve.off
	     [ method ]
	     **
	     * Removes given function from the list of event listeners assigned to given name.
	     * If no arguments specified all the events will be cleared.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	    \*/
	    /*\
	     * eve.unbind
	     [ method ]
	     **
	     * See @eve.off
	    \*/
	    eve.off = eve.unbind = function (name, f) {
	        if (!name) {
	            eve._events = events = {n: {}};
	            return;
	        }
	        var names = name.split(comaseparator);
	        if (names.length > 1) {
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                eve.off(names[i], f);
	            }
	            return;
	        }
	        names = name.split(separator);
	        var e,
	            key,
	            splice,
	            i, ii, j, jj,
	            cur = [events];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            for (j = 0; j < cur.length; j += splice.length - 2) {
	                splice = [j, 1];
	                e = cur[j].n;
	                if (names[i] != wildcard) {
	                    if (e[names[i]]) {
	                        splice.push(e[names[i]]);
	                    }
	                } else {
	                    for (key in e) if (e[has](key)) {
	                        splice.push(e[key]);
	                    }
	                }
	                cur.splice.apply(cur, splice);
	            }
	        }
	        for (i = 0, ii = cur.length; i < ii; i++) {
	            e = cur[i];
	            while (e.n) {
	                if (f) {
	                    if (e.f) {
	                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
	                            e.f.splice(j, 1);
	                            break;
	                        }
	                        !e.f.length && delete e.f;
	                    }
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        var funcs = e.n[key].f;
	                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
	                            funcs.splice(j, 1);
	                            break;
	                        }
	                        !funcs.length && delete e.n[key].f;
	                    }
	                } else {
	                    delete e.f;
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        delete e.n[key].f;
	                    }
	                }
	                e = e.n;
	            }
	        }
	    };
	    /*\
	     * eve.once
	     [ method ]
	     **
	     * Binds given event handler with a given name to only run once then unbind itself.
	     | eve.once("login", f);
	     | eve("login"); // triggers f
	     | eve("login"); // no listeners
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) same return function as @eve.on
	    \*/
	    eve.once = function (name, f) {
	        var f2 = function () {
	            eve.unbind(name, f2);
	            return f.apply(this, arguments);
	        };
	        return eve.on(name, f2);
	    };
	    /*\
	     * eve.version
	     [ property (string) ]
	     **
	     * Current version of the library.
	    \*/
	    eve.version = version;
	    eve.toString = function () {
	        return "You are running Eve " + version;
	    };
	    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function() { return eve; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)))) : (glob.eve = eve));
	})(this);

	(function (glob, factory) {
	    // AMD support
	    if (true) {
	        // Define as an anonymous module
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = function (eve) {
	            return factory(glob, eve);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports != 'undefined') {
	        // Next for Node.js or CommonJS
	        var eve = require('eve');
	        module.exports = factory(glob, eve);
	    } else {
	        // Browser globals (glob is window)
	        // Snap adds itself to window
	        factory(glob, glob.eve);
	    }
	}(window || this, function (window, eve) {

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	var mina = (function (eve) {
	    var animations = {},
	    requestAnimFrame = window.requestAnimationFrame       ||
	                       window.webkitRequestAnimationFrame ||
	                       window.mozRequestAnimationFrame    ||
	                       window.oRequestAnimationFrame      ||
	                       window.msRequestAnimationFrame     ||
	                       function (callback) {
	                           setTimeout(callback, 16);
	                       },
	    isArray = Array.isArray || function (a) {
	        return a instanceof Array ||
	            Object.prototype.toString.call(a) == "[object Array]";
	    },
	    idgen = 0,
	    idprefix = "M" + (+new Date).toString(36),
	    ID = function () {
	        return idprefix + (idgen++).toString(36);
	    },
	    diff = function (a, b, A, B) {
	        if (isArray(a)) {
	            res = [];
	            for (var i = 0, ii = a.length; i < ii; i++) {
	                res[i] = diff(a[i], b, A[i], B);
	            }
	            return res;
	        }
	        var dif = (A - a) / (B - b);
	        return function (bb) {
	            return a + dif * (bb - b);
	        };
	    },
	    timer = Date.now || function () {
	        return +new Date;
	    },
	    sta = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.s;
	        }
	        var ds = a.s - val;
	        a.b += a.dur * ds;
	        a.B += a.dur * ds;
	        a.s = val;
	    },
	    speed = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.spd;
	        }
	        a.spd = val;
	    },
	    duration = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.dur;
	        }
	        a.s = a.s * val / a.dur;
	        a.dur = val;
	    },
	    stopit = function () {
	        var a = this;
	        delete animations[a.id];
	        a.update();
	        eve("mina.stop." + a.id, a);
	    },
	    pause = function () {
	        var a = this;
	        if (a.pdif) {
	            return;
	        }
	        delete animations[a.id];
	        a.update();
	        a.pdif = a.get() - a.b;
	    },
	    resume = function () {
	        var a = this;
	        if (!a.pdif) {
	            return;
	        }
	        a.b = a.get() - a.pdif;
	        delete a.pdif;
	        animations[a.id] = a;
	    },
	    update = function () {
	        var a = this,
	            res;
	        if (isArray(a.start)) {
	            res = [];
	            for (var j = 0, jj = a.start.length; j < jj; j++) {
	                res[j] = +a.start[j] +
	                    (a.end[j] - a.start[j]) * a.easing(a.s);
	            }
	        } else {
	            res = +a.start + (a.end - a.start) * a.easing(a.s);
	        }
	        a.set(res);
	    },
	    frame = function () {
	        var len = 0;
	        for (var i in animations) if (animations.hasOwnProperty(i)) {
	            var a = animations[i],
	                b = a.get(),
	                res;
	            len++;
	            a.s = (b - a.b) / (a.dur / a.spd);
	            if (a.s >= 1) {
	                delete animations[i];
	                a.s = 1;
	                len--;
	                (function (a) {
	                    setTimeout(function () {
	                        eve("mina.finish." + a.id, a);
	                    });
	                }(a));
	            }
	            a.update();
	        }
	        len && requestAnimFrame(frame);
	    },
	    /*\
	     * mina
	     [ method ]
	     **
	     * Generic animation of numbers
	     **
	     - a (number) start _slave_ number
	     - A (number) end _slave_ number
	     - b (number) start _master_ number (start time in general case)
	     - B (number) end _master_ number (end time in gereal case)
	     - get (function) getter of _master_ number (see @mina.time)
	     - set (function) setter of _slave_ number
	     - easing (function) #optional easing function, default is @mina.linear
	     = (object) animation descriptor
	     o {
	     o         id (string) animation id,
	     o         start (number) start _slave_ number,
	     o         end (number) end _slave_ number,
	     o         b (number) start _master_ number,
	     o         s (number) animation status (0..1),
	     o         dur (number) animation duration,
	     o         spd (number) animation speed,
	     o         get (function) getter of _master_ number (see @mina.time),
	     o         set (function) setter of _slave_ number,
	     o         easing (function) easing function, default is @mina.linear,
	     o         status (function) status getter/setter,
	     o         speed (function) speed getter/setter,
	     o         duration (function) duration getter/setter,
	     o         stop (function) animation stopper
	     o         pause (function) pauses the animation
	     o         resume (function) resumes the animation
	     o         update (function) calles setter with the right value of the animation
	     o }
	    \*/
	    mina = function (a, A, b, B, get, set, easing) {
	        var anim = {
	            id: ID(),
	            start: a,
	            end: A,
	            b: b,
	            s: 0,
	            dur: B - b,
	            spd: 1,
	            get: get,
	            set: set,
	            easing: easing || mina.linear,
	            status: sta,
	            speed: speed,
	            duration: duration,
	            stop: stopit,
	            pause: pause,
	            resume: resume,
	            update: update
	        };
	        animations[anim.id] = anim;
	        var len = 0, i;
	        for (i in animations) if (animations.hasOwnProperty(i)) {
	            len++;
	            if (len == 2) {
	                break;
	            }
	        }
	        len == 1 && requestAnimFrame(frame);
	        return anim;
	    };
	    /*\
	     * mina.time
	     [ method ]
	     **
	     * Returns the current time. Equivalent to:
	     | function () {
	     |     return (new Date).getTime();
	     | }
	    \*/
	    mina.time = timer;
	    /*\
	     * mina.getById
	     [ method ]
	     **
	     * Returns an animation by its id
	     - id (string) animation's id
	     = (object) See @mina
	    \*/
	    mina.getById = function (id) {
	        return animations[id] || null;
	    };

	    /*\
	     * mina.linear
	     [ method ]
	     **
	     * Default linear easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.linear = function (n) {
	        return n;
	    };
	    /*\
	     * mina.easeout
	     [ method ]
	     **
	     * Easeout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easeout = function (n) {
	        return Math.pow(n, 1.7);
	    };
	    /*\
	     * mina.easein
	     [ method ]
	     **
	     * Easein easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easein = function (n) {
	        return Math.pow(n, .48);
	    };
	    /*\
	     * mina.easeinout
	     [ method ]
	     **
	     * Easeinout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easeinout = function (n) {
	        if (n == 1) {
	            return 1;
	        }
	        if (n == 0) {
	            return 0;
	        }
	        var q = .48 - n / 1.04,
	            Q = Math.sqrt(.1734 + q * q),
	            x = Q - q,
	            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
	            y = -Q - q,
	            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
	            t = X + Y + .5;
	        return (1 - t) * 3 * t * t + t * t * t;
	    };
	    /*\
	     * mina.backin
	     [ method ]
	     **
	     * Backin easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.backin = function (n) {
	        if (n == 1) {
	            return 1;
	        }
	        var s = 1.70158;
	        return n * n * ((s + 1) * n - s);
	    };
	    /*\
	     * mina.backout
	     [ method ]
	     **
	     * Backout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.backout = function (n) {
	        if (n == 0) {
	            return 0;
	        }
	        n = n - 1;
	        var s = 1.70158;
	        return n * n * ((s + 1) * n + s) + 1;
	    };
	    /*\
	     * mina.elastic
	     [ method ]
	     **
	     * Elastic easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.elastic = function (n) {
	        if (n == !!n) {
	            return n;
	        }
	        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
	            (2 * Math.PI) / .3) + 1;
	    };
	    /*\
	     * mina.bounce
	     [ method ]
	     **
	     * Bounce easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.bounce = function (n) {
	        var s = 7.5625,
	            p = 2.75,
	            l;
	        if (n < (1 / p)) {
	            l = s * n * n;
	        } else {
	            if (n < (2 / p)) {
	                n -= (1.5 / p);
	                l = s * n * n + .75;
	            } else {
	                if (n < (2.5 / p)) {
	                    n -= (2.25 / p);
	                    l = s * n * n + .9375;
	                } else {
	                    n -= (2.625 / p);
	                    l = s * n * n + .984375;
	                }
	            }
	        }
	        return l;
	    };
	    window.mina = mina;
	    return mina;
	})(typeof eve == "undefined" ? function () {} : eve);
	// Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	var Snap = (function(root) {
	Snap.version = "0.4.0";
	/*\
	 * Snap
	 [ method ]
	 **
	 * Creates a drawing surface or wraps existing SVG element.
	 **
	 - width (number|string) width of surface
	 - height (number|string) height of surface
	 * or
	 - DOM (SVGElement) element to be wrapped into Snap structure
	 * or
	 - array (array) array of elements (will return set of elements)
	 * or
	 - query (string) CSS query selector
	 = (object) @Element
	\*/
	function Snap(w, h) {
	    if (w) {
	        if (w.nodeType) {
	            return wrap(w);
	        }
	        if (is(w, "array") && Snap.set) {
	            return Snap.set.apply(Snap, w);
	        }
	        if (w instanceof Element) {
	            return w;
	        }
	        if (h == null) {
	            w = glob.doc.querySelector(String(w));
	            return wrap(w);
	        }
	    }
	    w = w == null ? "100%" : w;
	    h = h == null ? "100%" : h;
	    return new Paper(w, h);
	}
	Snap.toString = function () {
	    return "Snap v" + this.version;
	};
	Snap._ = {};
	var glob = {
	    win: root.window,
	    doc: root.window.document
	};
	Snap._.glob = glob;
	var has = "hasOwnProperty",
	    Str = String,
	    toFloat = parseFloat,
	    toInt = parseInt,
	    math = Math,
	    mmax = math.max,
	    mmin = math.min,
	    abs = math.abs,
	    pow = math.pow,
	    PI = math.PI,
	    round = math.round,
	    E = "",
	    S = " ",
	    objectToString = Object.prototype.toString,
	    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
	    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
	    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	    reURLValue = /^url\(#?([^)]+)\)$/,
	    separator = Snap._.separator = /[,\s]+/,
	    whitespace = /[\s]/g,
	    commaSpaces = /[\s]*,[\s]*/,
	    hsrg = {hs: 1, rg: 1},
	    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
	    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
	    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
	    idgen = 0,
	    idprefix = "S" + (+new Date).toString(36),
	    ID = function (el) {
	        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
	    },
	    xlink = "http://www.w3.org/1999/xlink",
	    xmlns = "http://www.w3.org/2000/svg",
	    hub = {},
	    URL = Snap.url = function (url) {
	        return "url('#" + url + "')";
	    };

	function $(el, attr) {
	    if (attr) {
	        if (el == "#text") {
	            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
	        }
	        if (el == "#comment") {
	            el = glob.doc.createComment(attr.text || attr["#text"] || "");
	        }
	        if (typeof el == "string") {
	            el = $(el);
	        }
	        if (typeof attr == "string") {
	            if (el.nodeType == 1) {
	                if (attr.substring(0, 6) == "xlink:") {
	                    return el.getAttributeNS(xlink, attr.substring(6));
	                }
	                if (attr.substring(0, 4) == "xml:") {
	                    return el.getAttributeNS(xmlns, attr.substring(4));
	                }
	                return el.getAttribute(attr);
	            } else if (attr == "text") {
	                return el.nodeValue;
	            } else {
	                return null;
	            }
	        }
	        if (el.nodeType == 1) {
	            for (var key in attr) if (attr[has](key)) {
	                var val = Str(attr[key]);
	                if (val) {
	                    if (key.substring(0, 6) == "xlink:") {
	                        el.setAttributeNS(xlink, key.substring(6), val);
	                    } else if (key.substring(0, 4) == "xml:") {
	                        el.setAttributeNS(xmlns, key.substring(4), val);
	                    } else {
	                        el.setAttribute(key, val);
	                    }
	                } else {
	                    el.removeAttribute(key);
	                }
	            }
	        } else if ("text" in attr) {
	            el.nodeValue = attr.text;
	        }
	    } else {
	        el = glob.doc.createElementNS(xmlns, el);
	    }
	    return el;
	}
	Snap._.$ = $;
	Snap._.id = ID;
	function getAttrs(el) {
	    var attrs = el.attributes,
	        name,
	        out = {};
	    for (var i = 0; i < attrs.length; i++) {
	        if (attrs[i].namespaceURI == xlink) {
	            name = "xlink:";
	        } else {
	            name = "";
	        }
	        name += attrs[i].name;
	        out[name] = attrs[i].textContent;
	    }
	    return out;
	}
	function is(o, type) {
	    type = Str.prototype.toLowerCase.call(type);
	    if (type == "finite") {
	        return isFinite(o);
	    }
	    if (type == "array" &&
	        (o instanceof Array || Array.isArray && Array.isArray(o))) {
	        return true;
	    }
	    return  (type == "null" && o === null) ||
	            (type == typeof o && o !== null) ||
	            (type == "object" && o === Object(o)) ||
	            objectToString.call(o).slice(8, -1).toLowerCase() == type;
	}
	/*\
	 * Snap.format
	 [ method ]
	 **
	 * Replaces construction of type `{<name>}` to the corresponding argument
	 **
	 - token (string) string to format
	 - json (object) object which properties are used as a replacement
	 = (string) formatted string
	 > Usage
	 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
	 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
	 |     x: 10,
	 |     y: 20,
	 |     dim: {
	 |         width: 40,
	 |         height: 50,
	 |         "negative width": -40
	 |     }
	 | }));
	\*/
	Snap.format = (function () {
	    var tokenRegex = /\{([^\}]+)\}/g,
	        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
	        replacer = function (all, key, obj) {
	            var res = obj;
	            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
	                name = name || quotedName;
	                if (res) {
	                    if (name in res) {
	                        res = res[name];
	                    }
	                    typeof res == "function" && isFunc && (res = res());
	                }
	            });
	            res = (res == null || res == obj ? all : res) + "";
	            return res;
	        };
	    return function (str, obj) {
	        return Str(str).replace(tokenRegex, function (all, key) {
	            return replacer(all, key, obj);
	        });
	    };
	})();
	function clone(obj) {
	    if (typeof obj == "function" || Object(obj) !== obj) {
	        return obj;
	    }
	    var res = new obj.constructor;
	    for (var key in obj) if (obj[has](key)) {
	        res[key] = clone(obj[key]);
	    }
	    return res;
	}
	Snap._.clone = clone;
	function repush(array, item) {
	    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
	        return array.push(array.splice(i, 1)[0]);
	    }
	}
	function cacher(f, scope, postprocessor) {
	    function newf() {
	        var arg = Array.prototype.slice.call(arguments, 0),
	            args = arg.join("\u2400"),
	            cache = newf.cache = newf.cache || {},
	            count = newf.count = newf.count || [];
	        if (cache[has](args)) {
	            repush(count, args);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        count.length >= 1e3 && delete cache[count.shift()];
	        count.push(args);
	        cache[args] = f.apply(scope, arg);
	        return postprocessor ? postprocessor(cache[args]) : cache[args];
	    }
	    return newf;
	}
	Snap._.cacher = cacher;
	function angle(x1, y1, x2, y2, x3, y3) {
	    if (x3 == null) {
	        var x = x1 - x2,
	            y = y1 - y2;
	        if (!x && !y) {
	            return 0;
	        }
	        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
	    } else {
	        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
	    }
	}
	function rad(deg) {
	    return deg % 360 * PI / 180;
	}
	function deg(rad) {
	    return rad * 180 / PI % 360;
	}
	function x_y() {
	    return this.x + S + this.y;
	}
	function x_y_w_h() {
	    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
	}

	/*\
	 * Snap.rad
	 [ method ]
	 **
	 * Transform angle to radians
	 - deg (number) angle in degrees
	 = (number) angle in radians
	\*/
	Snap.rad = rad;
	/*\
	 * Snap.deg
	 [ method ]
	 **
	 * Transform angle to degrees
	 - rad (number) angle in radians
	 = (number) angle in degrees
	\*/
	Snap.deg = deg;
	/*\
	 * Snap.sin
	 [ method ]
	 **
	 * Equivalent to `Math.sin()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) sin
	\*/
	Snap.sin = function (angle) {
	    return math.sin(Snap.rad(angle));
	};
	/*\
	 * Snap.tan
	 [ method ]
	 **
	 * Equivalent to `Math.tan()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) tan
	\*/
	Snap.tan = function (angle) {
	    return math.tan(Snap.rad(angle));
	};
	/*\
	 * Snap.cos
	 [ method ]
	 **
	 * Equivalent to `Math.cos()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) cos
	\*/
	Snap.cos = function (angle) {
	    return math.cos(Snap.rad(angle));
	};
	/*\
	 * Snap.asin
	 [ method ]
	 **
	 * Equivalent to `Math.asin()` only works with degrees, not radians.
	 - num (number) value
	 = (number) asin in degrees
	\*/
	Snap.asin = function (num) {
	    return Snap.deg(math.asin(num));
	};
	/*\
	 * Snap.acos
	 [ method ]
	 **
	 * Equivalent to `Math.acos()` only works with degrees, not radians.
	 - num (number) value
	 = (number) acos in degrees
	\*/
	Snap.acos = function (num) {
	    return Snap.deg(math.acos(num));
	};
	/*\
	 * Snap.atan
	 [ method ]
	 **
	 * Equivalent to `Math.atan()` only works with degrees, not radians.
	 - num (number) value
	 = (number) atan in degrees
	\*/
	Snap.atan = function (num) {
	    return Snap.deg(math.atan(num));
	};
	/*\
	 * Snap.atan2
	 [ method ]
	 **
	 * Equivalent to `Math.atan2()` only works with degrees, not radians.
	 - num (number) value
	 = (number) atan2 in degrees
	\*/
	Snap.atan2 = function (num) {
	    return Snap.deg(math.atan2(num));
	};
	/*\
	 * Snap.angle
	 [ method ]
	 **
	 * Returns an angle between two or three points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 - x3 (number) #optional x coord of third point
	 - y3 (number) #optional y coord of third point
	 = (number) angle in degrees
	\*/
	Snap.angle = angle;
	/*\
	 * Snap.len
	 [ method ]
	 **
	 * Returns distance between two points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 = (number) distance
	\*/
	Snap.len = function (x1, y1, x2, y2) {
	    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
	};
	/*\
	 * Snap.len2
	 [ method ]
	 **
	 * Returns squared distance between two points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 = (number) distance
	\*/
	Snap.len2 = function (x1, y1, x2, y2) {
	    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
	};
	/*\
	 * Snap.closestPoint
	 [ method ]
	 **
	 * Returns closest point to a given one on a given path.
	 > Parameters
	 - path (Element) path element
	 - x (number) x coord of a point
	 - y (number) y coord of a point
	 = (object) in format
	 {
	    x (number) x coord of the point on the path
	    y (number) y coord of the point on the path
	    length (number) length of the path to the point
	    distance (number) distance from the given point to the path
	 }
	\*/
	// Copied from http://bl.ocks.org/mbostock/8027637
	Snap.closestPoint = function (path, x, y) {
	    function distance2(p) {
	        var dx = p.x - x,
	            dy = p.y - y;
	        return dx * dx + dy * dy;
	    }
	    var pathNode = path.node,
	        pathLength = pathNode.getTotalLength(),
	        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
	        best,
	        bestLength,
	        bestDistance = Infinity;

	    // linear scan for coarse approximation
	    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
	        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
	            best = scan, bestLength = scanLength, bestDistance = scanDistance;
	        }
	    }

	    // binary search for precise estimate
	    precision *= .5;
	    while (precision > .5) {
	        var before,
	            after,
	            beforeLength,
	            afterLength,
	            beforeDistance,
	            afterDistance;
	        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
	            best = before, bestLength = beforeLength, bestDistance = beforeDistance;
	        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
	            best = after, bestLength = afterLength, bestDistance = afterDistance;
	        } else {
	            precision *= .5;
	        }
	    }

	    best = {
	        x: best.x,
	        y: best.y,
	        length: bestLength,
	        distance: Math.sqrt(bestDistance)
	    };
	    return best;
	}
	/*\
	 * Snap.is
	 [ method ]
	 **
	 * Handy replacement for the `typeof` operator
	 - o (…) any object or primitive
	 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
	 = (boolean) `true` if given value is of given type
	\*/
	Snap.is = is;
	/*\
	 * Snap.snapTo
	 [ method ]
	 **
	 * Snaps given value to given grid
	 - values (array|number) given array of values or step of the grid
	 - value (number) value to adjust
	 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
	 = (number) adjusted value
	\*/
	Snap.snapTo = function (values, value, tolerance) {
	    tolerance = is(tolerance, "finite") ? tolerance : 10;
	    if (is(values, "array")) {
	        var i = values.length;
	        while (i--) if (abs(values[i] - value) <= tolerance) {
	            return values[i];
	        }
	    } else {
	        values = +values;
	        var rem = value % values;
	        if (rem < tolerance) {
	            return value - rem;
	        }
	        if (rem > values - tolerance) {
	            return value - rem + values;
	        }
	    }
	    return value;
	};
	// Colour
	/*\
	 * Snap.getRGB
	 [ method ]
	 **
	 * Parses color string as RGB object
	 - color (string) color string in one of the following formats:
	 # <ul>
	 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
	 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
	 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
	 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
	 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
	 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
	 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
	 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
	 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
	 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
	 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
	 # </ul>
	 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••,
	 o     error (boolean) true if string can't be parsed
	 o }
	\*/
	Snap.getRGB = cacher(function (colour) {
	    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	    }
	    if (colour == "none") {
	        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
	    }
	    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	    if (!colour) {
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	    }
	    var res,
	        red,
	        green,
	        blue,
	        opacity,
	        t,
	        values,
	        rgb = colour.match(colourRegExp);
	    if (rgb) {
	        if (rgb[2]) {
	            blue = toInt(rgb[2].substring(5), 16);
	            green = toInt(rgb[2].substring(3, 5), 16);
	            red = toInt(rgb[2].substring(1, 3), 16);
	        }
	        if (rgb[3]) {
	            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	            green = toInt((t = rgb[3].charAt(2)) + t, 16);
	            red = toInt((t = rgb[3].charAt(1)) + t, 16);
	        }
	        if (rgb[4]) {
	            values = rgb[4].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red *= 2.55);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green *= 2.55);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue *= 2.55);
	            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	        }
	        if (rgb[5]) {
	            values = rgb[5].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red /= 100);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green /= 100);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue /= 100);
	            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            return Snap.hsb2rgb(red, green, blue, opacity);
	        }
	        if (rgb[6]) {
	            values = rgb[6].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red /= 100);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green /= 100);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue /= 100);
	            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            return Snap.hsl2rgb(red, green, blue, opacity);
	        }
	        red = mmin(math.round(red), 255);
	        green = mmin(math.round(green), 255);
	        blue = mmin(math.round(blue), 255);
	        opacity = mmin(mmax(opacity, 0), 1);
	        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
	        rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	        rgb.opacity = is(opacity, "finite") ? opacity : 1;
	        return rgb;
	    }
	    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	}, Snap);
	/*\
	 * Snap.hsb
	 [ method ]
	 **
	 * Converts HSB values to a hex representation of the color
	 - h (number) hue
	 - s (number) saturation
	 - b (number) value or brightness
	 = (string) hex representation of the color
	\*/
	Snap.hsb = cacher(function (h, s, b) {
	    return Snap.hsb2rgb(h, s, b).hex;
	});
	/*\
	 * Snap.hsl
	 [ method ]
	 **
	 * Converts HSL values to a hex representation of the color
	 - h (number) hue
	 - s (number) saturation
	 - l (number) luminosity
	 = (string) hex representation of the color
	\*/
	Snap.hsl = cacher(function (h, s, l) {
	    return Snap.hsl2rgb(h, s, l).hex;
	});
	/*\
	 * Snap.rgb
	 [ method ]
	 **
	 * Converts RGB values to a hex representation of the color
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (string) hex representation of the color
	\*/
	Snap.rgb = cacher(function (r, g, b, o) {
	    if (is(o, "finite")) {
	        var round = math.round;
	        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
	    }
	    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
	});
	var toHex = function (color) {
	    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
	        red = "rgb(255, 0, 0)";
	    toHex = cacher(function (color) {
	        if (color.toLowerCase() == "red") {
	            return red;
	        }
	        i.style.color = red;
	        i.style.color = color;
	        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	        return out == red ? null : out;
	    });
	    return toHex(color);
	},
	hsbtoString = function () {
	    return "hsb(" + [this.h, this.s, this.b] + ")";
	},
	hsltoString = function () {
	    return "hsl(" + [this.h, this.s, this.l] + ")";
	},
	rgbtoString = function () {
	    return this.opacity == 1 || this.opacity == null ?
	            this.hex :
	            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
	},
	prepareRGB = function (r, g, b) {
	    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
	        b = r.b;
	        g = r.g;
	        r = r.r;
	    }
	    if (g == null && is(r, string)) {
	        var clr = Snap.getRGB(r);
	        r = clr.r;
	        g = clr.g;
	        b = clr.b;
	    }
	    if (r > 1 || g > 1 || b > 1) {
	        r /= 255;
	        g /= 255;
	        b /= 255;
	    }
	    
	    return [r, g, b];
	},
	packageRGB = function (r, g, b, o) {
	    r = math.round(r * 255);
	    g = math.round(g * 255);
	    b = math.round(b * 255);
	    var rgb = {
	        r: r,
	        g: g,
	        b: b,
	        opacity: is(o, "finite") ? o : 1,
	        hex: Snap.rgb(r, g, b),
	        toString: rgbtoString
	    };
	    is(o, "finite") && (rgb.opacity = o);
	    return rgb;
	};
	/*\
	 * Snap.color
	 [ method ]
	 **
	 * Parses the color string and returns an object featuring the color's component values
	 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
	 = (object) Combined RGB/HSB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••,
	 o     error (boolean) `true` if string can't be parsed,
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     v (number) value (brightness),
	 o     l (number) lightness
	 o }
	\*/
	Snap.color = function (clr) {
	    var rgb;
	    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
	        rgb = Snap.hsb2rgb(clr);
	        clr.r = rgb.r;
	        clr.g = rgb.g;
	        clr.b = rgb.b;
	        clr.opacity = 1;
	        clr.hex = rgb.hex;
	    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
	        rgb = Snap.hsl2rgb(clr);
	        clr.r = rgb.r;
	        clr.g = rgb.g;
	        clr.b = rgb.b;
	        clr.opacity = 1;
	        clr.hex = rgb.hex;
	    } else {
	        if (is(clr, "string")) {
	            clr = Snap.getRGB(clr);
	        }
	        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
	            rgb = Snap.rgb2hsl(clr);
	            clr.h = rgb.h;
	            clr.s = rgb.s;
	            clr.l = rgb.l;
	            rgb = Snap.rgb2hsb(clr);
	            clr.v = rgb.b;
	        } else {
	            clr = {hex: "none"};
	            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
	            clr.error = 1;
	        }
	    }
	    clr.toString = rgbtoString;
	    return clr;
	};
	/*\
	 * Snap.hsb2rgb
	 [ method ]
	 **
	 * Converts HSB values to an RGB object
	 - h (number) hue
	 - s (number) saturation
	 - v (number) value or brightness
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••
	 o }
	\*/
	Snap.hsb2rgb = function (h, s, v, o) {
	    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
	        v = h.b;
	        s = h.s;
	        o = h.o;
	        h = h.h;
	    }
	    h *= 360;
	    var R, G, B, X, C;
	    h = (h % 360) / 60;
	    C = v * s;
	    X = C * (1 - abs(h % 2 - 1));
	    R = G = B = v - C;

	    h = ~~h;
	    R += [C, X, 0, 0, X, C][h];
	    G += [X, C, C, X, 0, 0][h];
	    B += [0, 0, X, C, C, X][h];
	    return packageRGB(R, G, B, o);
	};
	/*\
	 * Snap.hsl2rgb
	 [ method ]
	 **
	 * Converts HSL values to an RGB object
	 - h (number) hue
	 - s (number) saturation
	 - l (number) luminosity
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••
	 o }
	\*/
	Snap.hsl2rgb = function (h, s, l, o) {
	    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
	        l = h.l;
	        s = h.s;
	        h = h.h;
	    }
	    if (h > 1 || s > 1 || l > 1) {
	        h /= 360;
	        s /= 100;
	        l /= 100;
	    }
	    h *= 360;
	    var R, G, B, X, C;
	    h = (h % 360) / 60;
	    C = 2 * s * (l < .5 ? l : 1 - l);
	    X = C * (1 - abs(h % 2 - 1));
	    R = G = B = l - C / 2;

	    h = ~~h;
	    R += [C, X, 0, 0, X, C][h];
	    G += [X, C, C, X, 0, 0][h];
	    B += [0, 0, X, C, C, X][h];
	    return packageRGB(R, G, B, o);
	};
	/*\
	 * Snap.rgb2hsb
	 [ method ]
	 **
	 * Converts RGB values to an HSB object
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (object) HSB object in the following format:
	 o {
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     b (number) brightness
	 o }
	\*/
	Snap.rgb2hsb = function (r, g, b) {
	    b = prepareRGB(r, g, b);
	    r = b[0];
	    g = b[1];
	    b = b[2];

	    var H, S, V, C;
	    V = mmax(r, g, b);
	    C = V - mmin(r, g, b);
	    H = (C == 0 ? null :
	         V == r ? (g - b) / C :
	         V == g ? (b - r) / C + 2 :
	                  (r - g) / C + 4
	        );
	    H = ((H + 360) % 6) * 60 / 360;
	    S = C == 0 ? 0 : C / V;
	    return {h: H, s: S, b: V, toString: hsbtoString};
	};
	/*\
	 * Snap.rgb2hsl
	 [ method ]
	 **
	 * Converts RGB values to an HSL object
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (object) HSL object in the following format:
	 o {
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     l (number) luminosity
	 o }
	\*/
	Snap.rgb2hsl = function (r, g, b) {
	    b = prepareRGB(r, g, b);
	    r = b[0];
	    g = b[1];
	    b = b[2];

	    var H, S, L, M, m, C;
	    M = mmax(r, g, b);
	    m = mmin(r, g, b);
	    C = M - m;
	    H = (C == 0 ? null :
	         M == r ? (g - b) / C :
	         M == g ? (b - r) / C + 2 :
	                  (r - g) / C + 4);
	    H = ((H + 360) % 6) * 60 / 360;
	    L = (M + m) / 2;
	    S = (C == 0 ? 0 :
	         L < .5 ? C / (2 * L) :
	                  C / (2 - 2 * L));
	    return {h: H, s: S, l: L, toString: hsltoString};
	};

	// Transformations
	/*\
	 * Snap.parsePathString
	 [ method ]
	 **
	 * Utility method
	 **
	 * Parses given path string into an array of arrays of path segments
	 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
	 = (array) array of segments
	\*/
	Snap.parsePathString = function (pathString) {
	    if (!pathString) {
	        return null;
	    }
	    var pth = Snap.path(pathString);
	    if (pth.arr) {
	        return Snap.path.clone(pth.arr);
	    }
	    
	    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
	        data = [];
	    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
	        data = Snap.path.clone(pathString);
	    }
	    if (!data.length) {
	        Str(pathString).replace(pathCommand, function (a, b, c) {
	            var params = [],
	                name = b.toLowerCase();
	            c.replace(pathValues, function (a, b) {
	                b && params.push(+b);
	            });
	            if (name == "m" && params.length > 2) {
	                data.push([b].concat(params.splice(0, 2)));
	                name = "l";
	                b = b == "m" ? "l" : "L";
	            }
	            if (name == "o" && params.length == 1) {
	                data.push([b, params[0]]);
	            }
	            if (name == "r") {
	                data.push([b].concat(params));
	            } else while (params.length >= paramCounts[name]) {
	                data.push([b].concat(params.splice(0, paramCounts[name])));
	                if (!paramCounts[name]) {
	                    break;
	                }
	            }
	        });
	    }
	    data.toString = Snap.path.toString;
	    pth.arr = Snap.path.clone(data);
	    return data;
	};
	/*\
	 * Snap.parseTransformString
	 [ method ]
	 **
	 * Utility method
	 **
	 * Parses given transform string into an array of transformations
	 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
	 = (array) array of transformations
	\*/
	var parseTransformString = Snap.parseTransformString = function (TString) {
	    if (!TString) {
	        return null;
	    }
	    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
	        data = [];
	    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
	        data = Snap.path.clone(TString);
	    }
	    if (!data.length) {
	        Str(TString).replace(tCommand, function (a, b, c) {
	            var params = [],
	                name = b.toLowerCase();
	            c.replace(pathValues, function (a, b) {
	                b && params.push(+b);
	            });
	            data.push([b].concat(params));
	        });
	    }
	    data.toString = Snap.path.toString;
	    return data;
	};
	function svgTransform2string(tstr) {
	    var res = [];
	    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
	        params = params.split(/\s*,\s*|\s+/);
	        if (name == "rotate" && params.length == 1) {
	            params.push(0, 0);
	        }
	        if (name == "scale") {
	            if (params.length > 2) {
	                params = params.slice(0, 2);
	            } else if (params.length == 2) {
	                params.push(0, 0);
	            }
	            if (params.length == 1) {
	                params.push(params[0], 0, 0);
	            }
	        }
	        if (name == "skewX") {
	            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
	        } else if (name == "skewY") {
	            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
	        } else {
	            res.push([name.charAt(0)].concat(params));
	        }
	        return all;
	    });
	    return res;
	}
	Snap._.svgTransform2string = svgTransform2string;
	Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
	function transform2matrix(tstr, bbox) {
	    var tdata = parseTransformString(tstr),
	        m = new Snap.Matrix;
	    if (tdata) {
	        for (var i = 0, ii = tdata.length; i < ii; i++) {
	            var t = tdata[i],
	                tlen = t.length,
	                command = Str(t[0]).toLowerCase(),
	                absolute = t[0] != command,
	                inver = absolute ? m.invert() : 0,
	                x1,
	                y1,
	                x2,
	                y2,
	                bb;
	            if (command == "t" && tlen == 2){
	                m.translate(t[1], 0);
	            } else if (command == "t" && tlen == 3) {
	                if (absolute) {
	                    x1 = inver.x(0, 0);
	                    y1 = inver.y(0, 0);
	                    x2 = inver.x(t[1], t[2]);
	                    y2 = inver.y(t[1], t[2]);
	                    m.translate(x2 - x1, y2 - y1);
	                } else {
	                    m.translate(t[1], t[2]);
	                }
	            } else if (command == "r") {
	                if (tlen == 2) {
	                    bb = bb || bbox;
	                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                } else if (tlen == 4) {
	                    if (absolute) {
	                        x2 = inver.x(t[2], t[3]);
	                        y2 = inver.y(t[2], t[3]);
	                        m.rotate(t[1], x2, y2);
	                    } else {
	                        m.rotate(t[1], t[2], t[3]);
	                    }
	                }
	            } else if (command == "s") {
	                if (tlen == 2 || tlen == 3) {
	                    bb = bb || bbox;
	                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                } else if (tlen == 4) {
	                    if (absolute) {
	                        x2 = inver.x(t[2], t[3]);
	                        y2 = inver.y(t[2], t[3]);
	                        m.scale(t[1], t[1], x2, y2);
	                    } else {
	                        m.scale(t[1], t[1], t[2], t[3]);
	                    }
	                } else if (tlen == 5) {
	                    if (absolute) {
	                        x2 = inver.x(t[3], t[4]);
	                        y2 = inver.y(t[3], t[4]);
	                        m.scale(t[1], t[2], x2, y2);
	                    } else {
	                        m.scale(t[1], t[2], t[3], t[4]);
	                    }
	                }
	            } else if (command == "m" && tlen == 7) {
	                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
	            }
	        }
	    }
	    return m;
	}
	Snap._.transform2matrix = transform2matrix;
	Snap._unit2px = unit2px;
	var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
	    function (a, b) {
	        var adown = a.nodeType == 9 ? a.documentElement : a,
	            bup = b && b.parentNode;
	            return a == bup || !!(bup && bup.nodeType == 1 && (
	                adown.contains ?
	                    adown.contains(bup) :
	                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
	            ));
	    } :
	    function (a, b) {
	        if (b) {
	            while (b) {
	                b = b.parentNode;
	                if (b == a) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	function getSomeDefs(el) {
	    var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) ||
	            (el.node.parentNode && wrap(el.node.parentNode)) ||
	            Snap.select("svg") ||
	            Snap(0, 0),
	        pdefs = p.select("defs"),
	        defs  = pdefs == null ? false : pdefs.node;
	    if (!defs) {
	        defs = make("defs", p.node).node;
	    }
	    return defs;
	}
	function getSomeSVG(el) {
	    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
	}
	Snap._.getSomeDefs = getSomeDefs;
	Snap._.getSomeSVG = getSomeSVG;
	function unit2px(el, name, value) {
	    var svg = getSomeSVG(el).node,
	        out = {},
	        mgr = svg.querySelector(".svg---mgr");
	    if (!mgr) {
	        mgr = $("rect");
	        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
	        svg.appendChild(mgr);
	    }
	    function getW(val) {
	        if (val == null) {
	            return E;
	        }
	        if (val == +val) {
	            return val;
	        }
	        $(mgr, {width: val});
	        try {
	            return mgr.getBBox().width;
	        } catch (e) {
	            return 0;
	        }
	    }
	    function getH(val) {
	        if (val == null) {
	            return E;
	        }
	        if (val == +val) {
	            return val;
	        }
	        $(mgr, {height: val});
	        try {
	            return mgr.getBBox().height;
	        } catch (e) {
	            return 0;
	        }
	    }
	    function set(nam, f) {
	        if (name == null) {
	            out[nam] = f(el.attr(nam) || 0);
	        } else if (nam == name) {
	            out = f(value == null ? el.attr(nam) || 0 : value);
	        }
	    }
	    switch (el.type) {
	        case "rect":
	            set("rx", getW);
	            set("ry", getH);
	        case "image":
	            set("width", getW);
	            set("height", getH);
	        case "text":
	            set("x", getW);
	            set("y", getH);
	        break;
	        case "circle":
	            set("cx", getW);
	            set("cy", getH);
	            set("r", getW);
	        break;
	        case "ellipse":
	            set("cx", getW);
	            set("cy", getH);
	            set("rx", getW);
	            set("ry", getH);
	        break;
	        case "line":
	            set("x1", getW);
	            set("x2", getW);
	            set("y1", getH);
	            set("y2", getH);
	        break;
	        case "marker":
	            set("refX", getW);
	            set("markerWidth", getW);
	            set("refY", getH);
	            set("markerHeight", getH);
	        break;
	        case "radialGradient":
	            set("fx", getW);
	            set("fy", getH);
	        break;
	        case "tspan":
	            set("dx", getW);
	            set("dy", getH);
	        break;
	        default:
	            set(name, getW);
	    }
	    svg.removeChild(mgr);
	    return out;
	}
	/*\
	 * Snap.select
	 [ method ]
	 **
	 * Wraps a DOM element specified by CSS selector as @Element
	 - query (string) CSS selector of the element
	 = (Element) the current element
	\*/
	Snap.select = function (query) {
	    query = Str(query).replace(/([^\\]):/g, "$1\\:");
	    return wrap(glob.doc.querySelector(query));
	};
	/*\
	 * Snap.selectAll
	 [ method ]
	 **
	 * Wraps DOM elements specified by CSS selector as set or array of @Element
	 - query (string) CSS selector of the element
	 = (Element) the current element
	\*/
	Snap.selectAll = function (query) {
	    var nodelist = glob.doc.querySelectorAll(query),
	        set = (Snap.set || Array)();
	    for (var i = 0; i < nodelist.length; i++) {
	        set.push(wrap(nodelist[i]));
	    }
	    return set;
	};

	function add2group(list) {
	    if (!is(list, "array")) {
	        list = Array.prototype.slice.call(arguments, 0);
	    }
	    var i = 0,
	        j = 0,
	        node = this.node;
	    while (this[i]) delete this[i++];
	    for (i = 0; i < list.length; i++) {
	        if (list[i].type == "set") {
	            list[i].forEach(function (el) {
	                node.appendChild(el.node);
	            });
	        } else {
	            node.appendChild(list[i].node);
	        }
	    }
	    var children = node.childNodes;
	    for (i = 0; i < children.length; i++) {
	        this[j++] = wrap(children[i]);
	    }
	    return this;
	}
	// Hub garbage collector every 10s
	setInterval(function () {
	    for (var key in hub) if (hub[has](key)) {
	        var el = hub[key],
	            node = el.node;
	        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
	            delete hub[key];
	        }
	    }
	}, 1e4);
	function Element(el) {
	    if (el.snap in hub) {
	        return hub[el.snap];
	    }
	    var svg;
	    try {
	        svg = el.ownerSVGElement;
	    } catch(e) {}
	    /*\
	     * Element.node
	     [ property (object) ]
	     **
	     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
	     > Usage
	     | // draw a circle at coordinate 10,10 with radius of 10
	     | var c = paper.circle(10, 10, 10);
	     | c.node.onclick = function () {
	     |     c.attr("fill", "red");
	     | };
	    \*/
	    this.node = el;
	    if (svg) {
	        this.paper = new Paper(svg);
	    }
	    /*\
	     * Element.type
	     [ property (string) ]
	     **
	     * SVG tag name of the given element.
	    \*/
	    this.type = el.tagName || el.nodeName;
	    var id = this.id = ID(this);
	    this.anims = {};
	    this._ = {
	        transform: []
	    };
	    el.snap = id;
	    hub[id] = this;
	    if (this.type == "g") {
	        this.add = add2group;
	    }
	    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
	        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
	            this[method] = Paper.prototype[method];
	        }
	    }
	}
	   /*\
	     * Element.attr
	     [ method ]
	     **
	     * Gets or sets given attributes of the element.
	     **
	     - params (object) contains key-value pairs of attributes you want to set
	     * or
	     - param (string) name of the attribute
	     = (Element) the current element
	     * or
	     = (string) value of attribute
	     > Usage
	     | el.attr({
	     |     fill: "#fc0",
	     |     stroke: "#000",
	     |     strokeWidth: 2, // CamelCase...
	     |     "fill-opacity": 0.5, // or dash-separated names
	     |     width: "*=2" // prefixed values
	     | });
	     | console.log(el.attr("fill")); // #fc0
	     * Prefixed values in format `"+=10"` supported. All four operations
	     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
	     * and `-`: `"+=2em"`.
	    \*/
	    Element.prototype.attr = function (params, value) {
	        var el = this,
	            node = el.node;
	        if (!params) {
	            if (node.nodeType != 1) {
	                return {
	                    text: node.nodeValue
	                };
	            }
	            var attr = node.attributes,
	                out = {};
	            for (var i = 0, ii = attr.length; i < ii; i++) {
	                out[attr[i].nodeName] = attr[i].nodeValue;
	            }
	            return out;
	        }
	        if (is(params, "string")) {
	            if (arguments.length > 1) {
	                var json = {};
	                json[params] = value;
	                params = json;
	            } else {
	                return eve("snap.util.getattr." + params, el).firstDefined();
	            }
	        }
	        for (var att in params) {
	            if (params[has](att)) {
	                eve("snap.util.attr." + att, el, params[att]);
	            }
	        }
	        return el;
	    };
	/*\
	 * Snap.parse
	 [ method ]
	 **
	 * Parses SVG fragment and converts it into a @Fragment
	 **
	 - svg (string) SVG string
	 = (Fragment) the @Fragment
	\*/
	Snap.parse = function (svg) {
	    var f = glob.doc.createDocumentFragment(),
	        full = true,
	        div = glob.doc.createElement("div");
	    svg = Str(svg);
	    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
	        svg = "<svg>" + svg + "</svg>";
	        full = false;
	    }
	    div.innerHTML = svg;
	    svg = div.getElementsByTagName("svg")[0];
	    if (svg) {
	        if (full) {
	            f = svg;
	        } else {
	            while (svg.firstChild) {
	                f.appendChild(svg.firstChild);
	            }
	        }
	    }
	    return new Fragment(f);
	};
	function Fragment(frag) {
	    this.node = frag;
	}
	/*\
	 * Snap.fragment
	 [ method ]
	 **
	 * Creates a DOM fragment from a given list of elements or strings
	 **
	 - varargs (…) SVG string
	 = (Fragment) the @Fragment
	\*/
	Snap.fragment = function () {
	    var args = Array.prototype.slice.call(arguments, 0),
	        f = glob.doc.createDocumentFragment();
	    for (var i = 0, ii = args.length; i < ii; i++) {
	        var item = args[i];
	        if (item.node && item.node.nodeType) {
	            f.appendChild(item.node);
	        }
	        if (item.nodeType) {
	            f.appendChild(item);
	        }
	        if (typeof item == "string") {
	            f.appendChild(Snap.parse(item).node);
	        }
	    }
	    return new Fragment(f);
	};

	function make(name, parent) {
	    var res = $(name);
	    parent.appendChild(res);
	    var el = wrap(res);
	    return el;
	}
	function Paper(w, h) {
	    var res,
	        desc,
	        defs,
	        proto = Paper.prototype;
	    if (w && w.tagName == "svg") {
	        if (w.snap in hub) {
	            return hub[w.snap];
	        }
	        var doc = w.ownerDocument;
	        res = new Element(w);
	        desc = w.getElementsByTagName("desc")[0];
	        defs = w.getElementsByTagName("defs")[0];
	        if (!desc) {
	            desc = $("desc");
	            desc.appendChild(doc.createTextNode("Created with Snap"));
	            res.node.appendChild(desc);
	        }
	        if (!defs) {
	            defs = $("defs");
	            res.node.appendChild(defs);
	        }
	        res.defs = defs;
	        for (var key in proto) if (proto[has](key)) {
	            res[key] = proto[key];
	        }
	        res.paper = res.root = res;
	    } else {
	        res = make("svg", glob.doc.body);
	        $(res.node, {
	            height: h,
	            version: 1.1,
	            width: w,
	            xmlns: xmlns
	        });
	    }
	    return res;
	}
	function wrap(dom) {
	    if (!dom) {
	        return dom;
	    }
	    if (dom instanceof Element || dom instanceof Fragment) {
	        return dom;
	    }
	    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
	        return new Paper(dom);
	    }
	    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
	        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
	    }
	    return new Element(dom);
	}

	Snap._.make = make;
	Snap._.wrap = wrap;
	/*\
	 * Paper.el
	 [ method ]
	 **
	 * Creates an element on paper with a given name and no attributes
	 **
	 - name (string) tag name
	 - attr (object) attributes
	 = (Element) the current element
	 > Usage
	 | var c = paper.circle(10, 10, 10); // is the same as...
	 | var c = paper.el("circle").attr({
	 |     cx: 10,
	 |     cy: 10,
	 |     r: 10
	 | });
	 | // and the same as
	 | var c = paper.el("circle", {
	 |     cx: 10,
	 |     cy: 10,
	 |     r: 10
	 | });
	\*/
	Paper.prototype.el = function (name, attr) {
	    var el = make(name, this.node);
	    attr && el.attr(attr);
	    return el;
	};
	/*\
	 * Element.children
	 [ method ]
	 **
	 * Returns array of all the children of the element.
	 = (array) array of Elements
	\*/
	Element.prototype.children = function () {
	    var out = [],
	        ch = this.node.childNodes;
	    for (var i = 0, ii = ch.length; i < ii; i++) {
	        out[i] = Snap(ch[i]);
	    }
	    return out;
	};
	function jsonFiller(root, o) {
	    for (var i = 0, ii = root.length; i < ii; i++) {
	        var item = {
	                type: root[i].type,
	                attr: root[i].attr()
	            },
	            children = root[i].children();
	        o.push(item);
	        if (children.length) {
	            jsonFiller(children, item.childNodes = []);
	        }
	    }
	}
	/*\
	 * Element.toJSON
	 [ method ]
	 **
	 * Returns object representation of the given element and all its children.
	 = (object) in format
	 o {
	 o     type (string) this.type,
	 o     attr (object) attributes map,
	 o     childNodes (array) optional array of children in the same format
	 o }
	\*/
	Element.prototype.toJSON = function () {
	    var out = [];
	    jsonFiller([this], out);
	    return out[0];
	};
	// default
	eve.on("snap.util.getattr", function () {
	    var att = eve.nt();
	    att = att.substring(att.lastIndexOf(".") + 1);
	    var css = att.replace(/[A-Z]/g, function (letter) {
	        return "-" + letter.toLowerCase();
	    });
	    if (cssAttr[has](css)) {
	        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
	    } else {
	        return $(this.node, att);
	    }
	});
	var cssAttr = {
	    "alignment-baseline": 0,
	    "baseline-shift": 0,
	    "clip": 0,
	    "clip-path": 0,
	    "clip-rule": 0,
	    "color": 0,
	    "color-interpolation": 0,
	    "color-interpolation-filters": 0,
	    "color-profile": 0,
	    "color-rendering": 0,
	    "cursor": 0,
	    "direction": 0,
	    "display": 0,
	    "dominant-baseline": 0,
	    "enable-background": 0,
	    "fill": 0,
	    "fill-opacity": 0,
	    "fill-rule": 0,
	    "filter": 0,
	    "flood-color": 0,
	    "flood-opacity": 0,
	    "font": 0,
	    "font-family": 0,
	    "font-size": 0,
	    "font-size-adjust": 0,
	    "font-stretch": 0,
	    "font-style": 0,
	    "font-variant": 0,
	    "font-weight": 0,
	    "glyph-orientation-horizontal": 0,
	    "glyph-orientation-vertical": 0,
	    "image-rendering": 0,
	    "kerning": 0,
	    "letter-spacing": 0,
	    "lighting-color": 0,
	    "marker": 0,
	    "marker-end": 0,
	    "marker-mid": 0,
	    "marker-start": 0,
	    "mask": 0,
	    "opacity": 0,
	    "overflow": 0,
	    "pointer-events": 0,
	    "shape-rendering": 0,
	    "stop-color": 0,
	    "stop-opacity": 0,
	    "stroke": 0,
	    "stroke-dasharray": 0,
	    "stroke-dashoffset": 0,
	    "stroke-linecap": 0,
	    "stroke-linejoin": 0,
	    "stroke-miterlimit": 0,
	    "stroke-opacity": 0,
	    "stroke-width": 0,
	    "text-anchor": 0,
	    "text-decoration": 0,
	    "text-rendering": 0,
	    "unicode-bidi": 0,
	    "visibility": 0,
	    "word-spacing": 0,
	    "writing-mode": 0
	};

	eve.on("snap.util.attr", function (value) {
	    var att = eve.nt(),
	        attr = {};
	    att = att.substring(att.lastIndexOf(".") + 1);
	    attr[att] = value;
	    var style = att.replace(/-(\w)/gi, function (all, letter) {
	            return letter.toUpperCase();
	        }),
	        css = att.replace(/[A-Z]/g, function (letter) {
	            return "-" + letter.toLowerCase();
	        });
	    if (cssAttr[has](css)) {
	        this.node.style[style] = value == null ? E : value;
	    } else {
	        $(this.node, attr);
	    }
	});
	(function (proto) {}(Paper.prototype));

	// simple ajax
	/*\
	 * Snap.ajax
	 [ method ]
	 **
	 * Simple implementation of Ajax
	 **
	 - url (string) URL
	 - postData (object|string) data for post request
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	 * or
	 - url (string) URL
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	 = (XMLHttpRequest) the XMLHttpRequest object, just in case
	\*/
	Snap.ajax = function (url, postData, callback, scope){
	    var req = new XMLHttpRequest,
	        id = ID();
	    if (req) {
	        if (is(postData, "function")) {
	            scope = callback;
	            callback = postData;
	            postData = null;
	        } else if (is(postData, "object")) {
	            var pd = [];
	            for (var key in postData) if (postData.hasOwnProperty(key)) {
	                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
	            }
	            postData = pd.join("&");
	        }
	        req.open((postData ? "POST" : "GET"), url, true);
	        if (postData) {
	            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	        }
	        if (callback) {
	            eve.once("snap.ajax." + id + ".0", callback);
	            eve.once("snap.ajax." + id + ".200", callback);
	            eve.once("snap.ajax." + id + ".304", callback);
	        }
	        req.onreadystatechange = function() {
	            if (req.readyState != 4) return;
	            eve("snap.ajax." + id + "." + req.status, scope, req);
	        };
	        if (req.readyState == 4) {
	            return req;
	        }
	        req.send(postData);
	        return req;
	    }
	};
	/*\
	 * Snap.load
	 [ method ]
	 **
	 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
	 **
	 - url (string) URL
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	\*/
	Snap.load = function (url, callback, scope) {
	    Snap.ajax(url, function (req) {
	        var f = Snap.parse(req.responseText);
	        scope ? callback.call(scope, f) : callback(f);
	    });
	};
	var getOffset = function (elem) {
	    var box = elem.getBoundingClientRect(),
	        doc = elem.ownerDocument,
	        body = doc.body,
	        docElem = doc.documentElement,
	        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
	        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
	        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
	    return {
	        y: top,
	        x: left
	    };
	};
	/*\
	 * Snap.getElementByPoint
	 [ method ]
	 **
	 * Returns you topmost element under given point.
	 **
	 = (object) Snap element object
	 - x (number) x coordinate from the top left corner of the window
	 - y (number) y coordinate from the top left corner of the window
	 > Usage
	 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
	\*/
	Snap.getElementByPoint = function (x, y) {
	    var paper = this,
	        svg = paper.canvas,
	        target = glob.doc.elementFromPoint(x, y);
	    if (glob.win.opera && target.tagName == "svg") {
	        var so = getOffset(target),
	            sr = target.createSVGRect();
	        sr.x = x - so.x;
	        sr.y = y - so.y;
	        sr.width = sr.height = 1;
	        var hits = target.getIntersectionList(sr, null);
	        if (hits.length) {
	            target = hits[hits.length - 1];
	        }
	    }
	    if (!target) {
	        return null;
	    }
	    return wrap(target);
	};
	/*\
	 * Snap.plugin
	 [ method ]
	 **
	 * Let you write plugins. You pass in a function with five arguments, like this:
	 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
	 |     Snap.newmethod = function () {};
	 |     Element.prototype.newmethod = function () {};
	 |     Paper.prototype.newmethod = function () {};
	 | });
	 * Inside the function you have access to all main objects (and their
	 * prototypes). This allow you to extend anything you want.
	 **
	 - f (function) your plugin body
	\*/
	Snap.plugin = function (f) {
	    f(Snap, Element, Paper, glob, Fragment);
	};
	glob.win.Snap = Snap;
	return Snap;
	}(window || this));

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var elproto = Element.prototype,
	        is = Snap.is,
	        Str = String,
	        unit2px = Snap._unit2px,
	        $ = Snap._.$,
	        make = Snap._.make,
	        getSomeDefs = Snap._.getSomeDefs,
	        has = "hasOwnProperty",
	        E = '',
	        wrap = Snap._.wrap;
	    /*\
	     * Element.getBBox
	     [ method ]
	     **
	     * Returns the bounding box descriptor for the given element
	     **
	     = (object) bounding box descriptor:
	     o {
	     o     cx: (number) x of the center,
	     o     cy: (number) x of the center,
	     o     h: (number) height,
	     o     height: (number) height,
	     o     path: (string) path command for the box,
	     o     r0: (number) radius of a circle that fully encloses the box,
	     o     r1: (number) radius of the smallest circle that can be enclosed,
	     o     r2: (number) radius of the largest circle that can be enclosed,
	     o     vb: (string) box as a viewbox command,
	     o     w: (number) width,
	     o     width: (number) width,
	     o     x2: (number) x of the right side,
	     o     x: (number) x of the left side,
	     o     y2: (number) y of the bottom edge,
	     o     y: (number) y of the top edge
	     o }
	    \*/
	    elproto.getBBox = function (isWithoutTransform) {
	        if (!Snap.Matrix || !Snap.path) {
	            return this.node.getBBox();
	        }
	        var el = this,
	            m = new Snap.Matrix;
	        if (el.removed) {
	            return Snap._.box();
	        }
	        while (el.type == "use") {
	            if (!isWithoutTransform) {
	                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
	            }
	            if (el.original) {
	                el = el.original;
	            } else {
	                var href = el.attr("xlink:href");
	                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
	            }
	        }
	        var _ = el._,
	            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
	        try {
	            if (isWithoutTransform) {
	                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
	                return Snap._.box(_.bboxwt);
	            } else {
	                el.realPath = pathfinder(el);
	                el.matrix = el.transform().localMatrix;
	                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
	                return Snap._.box(_.bbox);
	            }
	        } catch (e) {
	            // Firefox doesn’t give you bbox of hidden element
	            return Snap._.box();
	        }
	    };
	    var propString = function () {
	        return this.string;
	    };
	    function extractTransform(el, tstr) {
	        if (tstr == null) {
	            var doReturn = true;
	            if (el.type == "linearGradient" || el.type == "radialGradient") {
	                tstr = el.node.getAttribute("gradientTransform");
	            } else if (el.type == "pattern") {
	                tstr = el.node.getAttribute("patternTransform");
	            } else {
	                tstr = el.node.getAttribute("transform");
	            }
	            if (!tstr) {
	                return new Snap.Matrix;
	            }
	            tstr = Snap._.svgTransform2string(tstr);
	        } else {
	            if (!Snap._.rgTransform.test(tstr)) {
	                tstr = Snap._.svgTransform2string(tstr);
	            } else {
	                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
	            }
	            if (is(tstr, "array")) {
	                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
	            }
	            el._.transform = tstr;
	        }
	        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
	        if (doReturn) {
	            return m;
	        } else {
	            el.matrix = m;
	        }
	    }
	    /*\
	     * Element.transform
	     [ method ]
	     **
	     * Gets or sets transformation of the element
	     **
	     - tstr (string) transform string in Snap or SVG format
	     = (Element) the current element
	     * or
	     = (object) transformation descriptor:
	     o {
	     o     string (string) transform string,
	     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
	     o     localMatrix (Matrix) matrix of transformations applied only to the element,
	     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
	     o     global (string) global transformation as string,
	     o     local (string) local transformation as string,
	     o     toString (function) returns `string` property
	     o }
	    \*/
	    elproto.transform = function (tstr) {
	        var _ = this._;
	        if (tstr == null) {
	            var papa = this,
	                global = new Snap.Matrix(this.node.getCTM()),
	                local = extractTransform(this),
	                ms = [local],
	                m = new Snap.Matrix,
	                i,
	                localString = local.toTransformString(),
	                string = Str(local) == Str(this.matrix) ?
	                            Str(_.transform) : localString;
	            while (papa.type != "svg" && (papa = papa.parent())) {
	                ms.push(extractTransform(papa));
	            }
	            i = ms.length;
	            while (i--) {
	                m.add(ms[i]);
	            }
	            return {
	                string: string,
	                globalMatrix: global,
	                totalMatrix: m,
	                localMatrix: local,
	                diffMatrix: global.clone().add(local.invert()),
	                global: global.toTransformString(),
	                total: m.toTransformString(),
	                local: localString,
	                toString: propString
	            };
	        }
	        if (tstr instanceof Snap.Matrix) {
	            this.matrix = tstr;
	            this._.transform = tstr.toTransformString();
	        } else {
	            extractTransform(this, tstr);
	        }

	        if (this.node) {
	            if (this.type == "linearGradient" || this.type == "radialGradient") {
	                $(this.node, {gradientTransform: this.matrix});
	            } else if (this.type == "pattern") {
	                $(this.node, {patternTransform: this.matrix});
	            } else {
	                $(this.node, {transform: this.matrix});
	            }
	        }

	        return this;
	    };
	    /*\
	     * Element.parent
	     [ method ]
	     **
	     * Returns the element's parent
	     **
	     = (Element) the parent element
	    \*/
	    elproto.parent = function () {
	        return wrap(this.node.parentNode);
	    };
	    /*\
	     * Element.append
	     [ method ]
	     **
	     * Appends the given element to current one
	     **
	     - el (Element|Set) element to append
	     = (Element) the parent element
	    \*/
	    /*\
	     * Element.add
	     [ method ]
	     **
	     * See @Element.append
	    \*/
	    elproto.append = elproto.add = function (el) {
	        if (el) {
	            if (el.type == "set") {
	                var it = this;
	                el.forEach(function (el) {
	                    it.add(el);
	                });
	                return this;
	            }
	            el = wrap(el);
	            this.node.appendChild(el.node);
	            el.paper = this.paper;
	        }
	        return this;
	    };
	    /*\
	     * Element.appendTo
	     [ method ]
	     **
	     * Appends the current element to the given one
	     **
	     - el (Element) parent element to append to
	     = (Element) the child element
	    \*/
	    elproto.appendTo = function (el) {
	        if (el) {
	            el = wrap(el);
	            el.append(this);
	        }
	        return this;
	    };
	    /*\
	     * Element.prepend
	     [ method ]
	     **
	     * Prepends the given element to the current one
	     **
	     - el (Element) element to prepend
	     = (Element) the parent element
	    \*/
	    elproto.prepend = function (el) {
	        if (el) {
	            if (el.type == "set") {
	                var it = this,
	                    first;
	                el.forEach(function (el) {
	                    if (first) {
	                        first.after(el);
	                    } else {
	                        it.prepend(el);
	                    }
	                    first = el;
	                });
	                return this;
	            }
	            el = wrap(el);
	            var parent = el.parent();
	            this.node.insertBefore(el.node, this.node.firstChild);
	            this.add && this.add();
	            el.paper = this.paper;
	            this.parent() && this.parent().add();
	            parent && parent.add();
	        }
	        return this;
	    };
	    /*\
	     * Element.prependTo
	     [ method ]
	     **
	     * Prepends the current element to the given one
	     **
	     - el (Element) parent element to prepend to
	     = (Element) the child element
	    \*/
	    elproto.prependTo = function (el) {
	        el = wrap(el);
	        el.prepend(this);
	        return this;
	    };
	    /*\
	     * Element.before
	     [ method ]
	     **
	     * Inserts given element before the current one
	     **
	     - el (Element) element to insert
	     = (Element) the parent element
	    \*/
	    elproto.before = function (el) {
	        if (el.type == "set") {
	            var it = this;
	            el.forEach(function (el) {
	                var parent = el.parent();
	                it.node.parentNode.insertBefore(el.node, it.node);
	                parent && parent.add();
	            });
	            this.parent().add();
	            return this;
	        }
	        el = wrap(el);
	        var parent = el.parent();
	        this.node.parentNode.insertBefore(el.node, this.node);
	        this.parent() && this.parent().add();
	        parent && parent.add();
	        el.paper = this.paper;
	        return this;
	    };
	    /*\
	     * Element.after
	     [ method ]
	     **
	     * Inserts given element after the current one
	     **
	     - el (Element) element to insert
	     = (Element) the parent element
	    \*/
	    elproto.after = function (el) {
	        el = wrap(el);
	        var parent = el.parent();
	        if (this.node.nextSibling) {
	            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
	        } else {
	            this.node.parentNode.appendChild(el.node);
	        }
	        this.parent() && this.parent().add();
	        parent && parent.add();
	        el.paper = this.paper;
	        return this;
	    };
	    /*\
	     * Element.insertBefore
	     [ method ]
	     **
	     * Inserts the element after the given one
	     **
	     - el (Element) element next to whom insert to
	     = (Element) the parent element
	    \*/
	    elproto.insertBefore = function (el) {
	        el = wrap(el);
	        var parent = this.parent();
	        el.node.parentNode.insertBefore(this.node, el.node);
	        this.paper = el.paper;
	        parent && parent.add();
	        el.parent() && el.parent().add();
	        return this;
	    };
	    /*\
	     * Element.insertAfter
	     [ method ]
	     **
	     * Inserts the element after the given one
	     **
	     - el (Element) element next to whom insert to
	     = (Element) the parent element
	    \*/
	    elproto.insertAfter = function (el) {
	        el = wrap(el);
	        var parent = this.parent();
	        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
	        this.paper = el.paper;
	        parent && parent.add();
	        el.parent() && el.parent().add();
	        return this;
	    };
	    /*\
	     * Element.remove
	     [ method ]
	     **
	     * Removes element from the DOM
	     = (Element) the detached element
	    \*/
	    elproto.remove = function () {
	        var parent = this.parent();
	        this.node.parentNode && this.node.parentNode.removeChild(this.node);
	        delete this.paper;
	        this.removed = true;
	        parent && parent.add();
	        return this;
	    };
	    /*\
	     * Element.select
	     [ method ]
	     **
	     * Gathers the nested @Element matching the given set of CSS selectors
	     **
	     - query (string) CSS selector
	     = (Element) result of query selection
	    \*/
	    elproto.select = function (query) {
	        query = Str(query).replace(/([^\\]):/g, "$1\\:");
	        return wrap(this.node.querySelector(query));
	    };
	    /*\
	     * Element.selectAll
	     [ method ]
	     **
	     * Gathers nested @Element objects matching the given set of CSS selectors
	     **
	     - query (string) CSS selector
	     = (Set|array) result of query selection
	    \*/
	    elproto.selectAll = function (query) {
	        var nodelist = this.node.querySelectorAll(query),
	            set = (Snap.set || Array)();
	        for (var i = 0; i < nodelist.length; i++) {
	            set.push(wrap(nodelist[i]));
	        }
	        return set;
	    };
	    /*\
	     * Element.asPX
	     [ method ]
	     **
	     * Returns given attribute of the element as a `px` value (not %, em, etc.)
	     **
	     - attr (string) attribute name
	     - value (string) #optional attribute value
	     = (Element) result of query selection
	    \*/
	    elproto.asPX = function (attr, value) {
	        if (value == null) {
	            value = this.attr(attr);
	        }
	        return +unit2px(this, attr, value);
	    };
	    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
	    /*\
	     * Element.use
	     [ method ]
	     **
	     * Creates a `<use>` element linked to the current element
	     **
	     = (Element) the `<use>` element
	    \*/
	    elproto.use = function () {
	        var use,
	            id = this.node.id;
	        if (!id) {
	            id = this.id;
	            $(this.node, {
	                id: id
	            });
	        }
	        if (this.type == "linearGradient" || this.type == "radialGradient" ||
	            this.type == "pattern") {
	            use = make(this.type, this.node.parentNode);
	        } else {
	            use = make("use", this.node.parentNode);
	        }
	        $(use.node, {
	            "xlink:href": "#" + id
	        });
	        use.original = this;
	        return use;
	    };
	    function fixids(el) {
	        var els = el.selectAll("*"),
	            it,
	            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
	            ids = [],
	            uses = {};
	        function urltest(it, name) {
	            var val = $(it.node, name);
	            val = val && val.match(url);
	            val = val && val[2];
	            if (val && val.charAt() == "#") {
	                val = val.substring(1);
	            } else {
	                return;
	            }
	            if (val) {
	                uses[val] = (uses[val] || []).concat(function (id) {
	                    var attr = {};
	                    attr[name] = URL(id);
	                    $(it.node, attr);
	                });
	            }
	        }
	        function linktest(it) {
	            var val = $(it.node, "xlink:href");
	            if (val && val.charAt() == "#") {
	                val = val.substring(1);
	            } else {
	                return;
	            }
	            if (val) {
	                uses[val] = (uses[val] || []).concat(function (id) {
	                    it.attr("xlink:href", "#" + id);
	                });
	            }
	        }
	        for (var i = 0, ii = els.length; i < ii; i++) {
	            it = els[i];
	            urltest(it, "fill");
	            urltest(it, "stroke");
	            urltest(it, "filter");
	            urltest(it, "mask");
	            urltest(it, "clip-path");
	            linktest(it);
	            var oldid = $(it.node, "id");
	            if (oldid) {
	                $(it.node, {id: it.id});
	                ids.push({
	                    old: oldid,
	                    id: it.id
	                });
	            }
	        }
	        for (i = 0, ii = ids.length; i < ii; i++) {
	            var fs = uses[ids[i].old];
	            if (fs) {
	                for (var j = 0, jj = fs.length; j < jj; j++) {
	                    fs[j](ids[i].id);
	                }
	            }
	        }
	    }
	    /*\
	     * Element.clone
	     [ method ]
	     **
	     * Creates a clone of the element and inserts it after the element
	     **
	     = (Element) the clone
	    \*/
	    elproto.clone = function () {
	        var clone = wrap(this.node.cloneNode(true));
	        if ($(clone.node, "id")) {
	            $(clone.node, {id: clone.id});
	        }
	        fixids(clone);
	        clone.insertAfter(this);
	        return clone;
	    };
	    /*\
	     * Element.toDefs
	     [ method ]
	     **
	     * Moves element to the shared `<defs>` area
	     **
	     = (Element) the element
	    \*/
	    elproto.toDefs = function () {
	        var defs = getSomeDefs(this);
	        defs.appendChild(this.node);
	        return this;
	    };
	    /*\
	     * Element.toPattern
	     [ method ]
	     **
	     * Creates a `<pattern>` element from the current element
	     **
	     * To create a pattern you have to specify the pattern rect:
	     - x (string|number)
	     - y (string|number)
	     - width (string|number)
	     - height (string|number)
	     = (Element) the `<pattern>` element
	     * You can use pattern later on as an argument for `fill` attribute:
	     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
	     |         fill: "none",
	     |         stroke: "#bada55",
	     |         strokeWidth: 5
	     |     }).pattern(0, 0, 10, 10),
	     |     c = paper.circle(200, 200, 100);
	     | c.attr({
	     |     fill: p
	     | });
	    \*/
	    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
	        var p = make("pattern", getSomeDefs(this));
	        if (x == null) {
	            x = this.getBBox();
	        }
	        if (is(x, "object") && "x" in x) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            x = x.x;
	        }
	        $(p.node, {
	            x: x,
	            y: y,
	            width: width,
	            height: height,
	            patternUnits: "userSpaceOnUse",
	            id: p.id,
	            viewBox: [x, y, width, height].join(" ")
	        });
	        p.node.appendChild(this.node);
	        return p;
	    };
	// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
	// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
	    /*\
	     * Element.marker
	     [ method ]
	     **
	     * Creates a `<marker>` element from the current element
	     **
	     * To create a marker you have to specify the bounding rect and reference point:
	     - x (number)
	     - y (number)
	     - width (number)
	     - height (number)
	     - refX (number)
	     - refY (number)
	     = (Element) the `<marker>` element
	     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
	    \*/
	    // TODO add usage for markers
	    elproto.marker = function (x, y, width, height, refX, refY) {
	        var p = make("marker", getSomeDefs(this));
	        if (x == null) {
	            x = this.getBBox();
	        }
	        if (is(x, "object") && "x" in x) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            refX = x.refX || x.cx;
	            refY = x.refY || x.cy;
	            x = x.x;
	        }
	        $(p.node, {
	            viewBox: [x, y, width, height].join(" "),
	            markerWidth: width,
	            markerHeight: height,
	            orient: "auto",
	            refX: refX || 0,
	            refY: refY || 0,
	            id: p.id
	        });
	        p.node.appendChild(this.node);
	        return p;
	    };
	    // animation
	    function slice(from, to, f) {
	        return function (arr) {
	            var res = arr.slice(from, to);
	            if (res.length == 1) {
	                res = res[0];
	            }
	            return f ? f(res) : res;
	        };
	    }
	    var Animation = function (attr, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        this.attr = attr;
	        this.dur = ms;
	        easing && (this.easing = easing);
	        callback && (this.callback = callback);
	    };
	    Snap._.Animation = Animation;
	    /*\
	     * Snap.animation
	     [ method ]
	     **
	     * Creates an animation object
	     **
	     - attr (object) attributes of final destination
	     - duration (number) duration of the animation, in milliseconds
	     - easing (function) #optional one of easing functions of @mina or custom one
	     - callback (function) #optional callback function that fires when animation ends
	     = (object) animation object
	    \*/
	    Snap.animation = function (attr, ms, easing, callback) {
	        return new Animation(attr, ms, easing, callback);
	    };
	    /*\
	     * Element.inAnim
	     [ method ]
	     **
	     * Returns a set of animations that may be able to manipulate the current element
	     **
	     = (object) in format:
	     o {
	     o     anim (object) animation object,
	     o     mina (object) @mina object,
	     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
	     o     status (function) gets or sets the status of the animation,
	     o     stop (function) stops the animation
	     o }
	    \*/
	    elproto.inAnim = function () {
	        var el = this,
	            res = [];
	        for (var id in el.anims) if (el.anims[has](id)) {
	            (function (a) {
	                res.push({
	                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
	                    mina: a,
	                    curStatus: a.status(),
	                    status: function (val) {
	                        return a.status(val);
	                    },
	                    stop: function () {
	                        a.stop();
	                    }
	                });
	            }(el.anims[id]));
	        }
	        return res;
	    };
	    /*\
	     * Snap.animate
	     [ method ]
	     **
	     * Runs generic animation of one number into another with a caring function
	     **
	     - from (number|array) number or array of numbers
	     - to (number|array) number or array of numbers
	     - setter (function) caring function that accepts one number argument
	     - duration (number) duration, in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function to execute when animation ends
	     = (object) animation object in @mina format
	     o {
	     o     id (string) animation id, consider it read-only,
	     o     duration (function) gets or sets the duration of the animation,
	     o     easing (function) easing,
	     o     speed (function) gets or sets the speed of the animation,
	     o     status (function) gets or sets the status of the animation,
	     o     stop (function) stops the animation
	     o }
	     | var rect = Snap().rect(0, 0, 10, 10);
	     | Snap.animate(0, 10, function (val) {
	     |     rect.attr({
	     |         x: val
	     |     });
	     | }, 1000);
	     | // in given context is equivalent to
	     | rect.animate({x: 10}, 1000);
	    \*/
	    Snap.animate = function (from, to, setter, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        var now = mina.time(),
	            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
	        callback && eve.once("mina.finish." + anim.id, callback);
	        return anim;
	    };
	    /*\
	     * Element.stop
	     [ method ]
	     **
	     * Stops all the animations for the current element
	     **
	     = (Element) the current element
	    \*/
	    elproto.stop = function () {
	        var anims = this.inAnim();
	        for (var i = 0, ii = anims.length; i < ii; i++) {
	            anims[i].stop();
	        }
	        return this;
	    };
	    /*\
	     * Element.animate
	     [ method ]
	     **
	     * Animates the given attributes of the element
	     **
	     - attrs (object) key-value pairs of destination attributes
	     - duration (number) duration of the animation in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function that executes when the animation ends
	     = (Element) the current element
	    \*/
	    elproto.animate = function (attrs, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        if (attrs instanceof Animation) {
	            callback = attrs.callback;
	            easing = attrs.easing;
	            ms = easing.dur;
	            attrs = attrs.attr;
	        }
	        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
	            el = this;
	        for (var key in attrs) if (attrs[has](key)) {
	            if (el.equal) {
	                eq = el.equal(key, Str(attrs[key]));
	                from = eq.from;
	                to = eq.to;
	                f = eq.f;
	            } else {
	                from = +el.attr(key);
	                to = +attrs[key];
	            }
	            var len = is(from, "array") ? from.length : 1;
	            keys[key] = slice(fkeys.length, fkeys.length + len, f);
	            fkeys = fkeys.concat(from);
	            tkeys = tkeys.concat(to);
	        }
	        var now = mina.time(),
	            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
	                var attr = {};
	                for (var key in keys) if (keys[has](key)) {
	                    attr[key] = keys[key](val);
	                }
	                el.attr(attr);
	            }, easing);
	        el.anims[anim.id] = anim;
	        anim._attrs = attrs;
	        anim._callback = callback;
	        eve("snap.animcreated." + el.id, anim);
	        eve.once("mina.finish." + anim.id, function () {
	            delete el.anims[anim.id];
	            callback && callback.call(el);
	        });
	        eve.once("mina.stop." + anim.id, function () {
	            delete el.anims[anim.id];
	        });
	        return el;
	    };
	    var eldata = {};
	    /*\
	     * Element.data
	     [ method ]
	     **
	     * Adds or retrieves given value associated with given key. (Don’t confuse
	     * with `data-` attributes)
	     *
	     * See also @Element.removeData
	     - key (string) key to store data
	     - value (any) #optional value to store
	     = (object) @Element
	     * or, if value is not specified:
	     = (any) value
	     > Usage
	     | for (var i = 0, i < 5, i++) {
	     |     paper.circle(10 + 15 * i, 10, 10)
	     |          .attr({fill: "#000"})
	     |          .data("i", i)
	     |          .click(function () {
	     |             alert(this.data("i"));
	     |          });
	     | }
	    \*/
	    elproto.data = function (key, value) {
	        var data = eldata[this.id] = eldata[this.id] || {};
	        if (arguments.length == 0){
	            eve("snap.data.get." + this.id, this, data, null);
	            return data;
	        }
	        if (arguments.length == 1) {
	            if (Snap.is(key, "object")) {
	                for (var i in key) if (key[has](i)) {
	                    this.data(i, key[i]);
	                }
	                return this;
	            }
	            eve("snap.data.get." + this.id, this, data[key], key);
	            return data[key];
	        }
	        data[key] = value;
	        eve("snap.data.set." + this.id, this, value, key);
	        return this;
	    };
	    /*\
	     * Element.removeData
	     [ method ]
	     **
	     * Removes value associated with an element by given key.
	     * If key is not provided, removes all the data of the element.
	     - key (string) #optional key
	     = (object) @Element
	    \*/
	    elproto.removeData = function (key) {
	        if (key == null) {
	            eldata[this.id] = {};
	        } else {
	            eldata[this.id] && delete eldata[this.id][key];
	        }
	        return this;
	    };
	    /*\
	     * Element.outerSVG
	     [ method ]
	     **
	     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
	     *
	     * See also @Element.innerSVG
	     = (string) SVG code for the element
	    \*/
	    /*\
	     * Element.toString
	     [ method ]
	     **
	     * See @Element.outerSVG
	    \*/
	    elproto.outerSVG = elproto.toString = toString(1);
	    /*\
	     * Element.innerSVG
	     [ method ]
	     **
	     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
	     = (string) SVG code for the element
	    \*/
	    elproto.innerSVG = toString();
	    function toString(type) {
	        return function () {
	            var res = type ? "<" + this.type : "",
	                attr = this.node.attributes,
	                chld = this.node.childNodes;
	            if (type) {
	                for (var i = 0, ii = attr.length; i < ii; i++) {
	                    res += " " + attr[i].name + '="' +
	                            attr[i].value.replace(/"/g, '\\"') + '"';
	                }
	            }
	            if (chld.length) {
	                type && (res += ">");
	                for (i = 0, ii = chld.length; i < ii; i++) {
	                    if (chld[i].nodeType == 3) {
	                        res += chld[i].nodeValue;
	                    } else if (chld[i].nodeType == 1) {
	                        res += wrap(chld[i]).toString();
	                    }
	                }
	                type && (res += "</" + this.type + ">");
	            } else {
	                type && (res += "/>");
	            }
	            return res;
	        };
	    }
	    elproto.toDataURL = function () {
	        if (window && window.btoa) {
	            var bb = this.getBBox(),
	                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
	                x: +bb.x.toFixed(3),
	                y: +bb.y.toFixed(3),
	                width: +bb.width.toFixed(3),
	                height: +bb.height.toFixed(3),
	                contents: this.outerSVG()
	            });
	            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
	        }
	    };
	    /*\
	     * Fragment.select
	     [ method ]
	     **
	     * See @Element.select
	    \*/
	    Fragment.prototype.select = elproto.select;
	    /*\
	     * Fragment.selectAll
	     [ method ]
	     **
	     * See @Element.selectAll
	    \*/
	    Fragment.prototype.selectAll = elproto.selectAll;
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var objectToString = Object.prototype.toString,
	        Str = String,
	        math = Math,
	        E = "";
	    function Matrix(a, b, c, d, e, f) {
	        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
	            this.a = a.a;
	            this.b = a.b;
	            this.c = a.c;
	            this.d = a.d;
	            this.e = a.e;
	            this.f = a.f;
	            return;
	        }
	        if (a != null) {
	            this.a = +a;
	            this.b = +b;
	            this.c = +c;
	            this.d = +d;
	            this.e = +e;
	            this.f = +f;
	        } else {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.e = 0;
	            this.f = 0;
	        }
	    }
	    (function (matrixproto) {
	        /*\
	         * Matrix.add
	         [ method ]
	         **
	         * Adds the given matrix to existing one
	         - a (number)
	         - b (number)
	         - c (number)
	         - d (number)
	         - e (number)
	         - f (number)
	         * or
	         - matrix (object) @Matrix
	        \*/
	        matrixproto.add = function (a, b, c, d, e, f) {
	            var out = [[], [], []],
	                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
	                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
	                x, y, z, res;

	            if (a && a instanceof Matrix) {
	                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
	            }

	            for (x = 0; x < 3; x++) {
	                for (y = 0; y < 3; y++) {
	                    res = 0;
	                    for (z = 0; z < 3; z++) {
	                        res += m[x][z] * matrix[z][y];
	                    }
	                    out[x][y] = res;
	                }
	            }
	            this.a = out[0][0];
	            this.b = out[1][0];
	            this.c = out[0][1];
	            this.d = out[1][1];
	            this.e = out[0][2];
	            this.f = out[1][2];
	            return this;
	        };
	        /*\
	         * Matrix.invert
	         [ method ]
	         **
	         * Returns an inverted version of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.invert = function () {
	            var me = this,
	                x = me.a * me.d - me.b * me.c;
	            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
	        };
	        /*\
	         * Matrix.clone
	         [ method ]
	         **
	         * Returns a copy of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.clone = function () {
	            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
	        };
	        /*\
	         * Matrix.translate
	         [ method ]
	         **
	         * Translate the matrix
	         - x (number) horizontal offset distance
	         - y (number) vertical offset distance
	        \*/
	        matrixproto.translate = function (x, y) {
	            return this.add(1, 0, 0, 1, x, y);
	        };
	        /*\
	         * Matrix.scale
	         [ method ]
	         **
	         * Scales the matrix
	         - x (number) amount to be scaled, with `1` resulting in no change
	         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
	         - cx (number) #optional horizontal origin point from which to scale
	         - cy (number) #optional vertical origin point from which to scale
	         * Default cx, cy is the middle point of the element.
	        \*/
	        matrixproto.scale = function (x, y, cx, cy) {
	            y == null && (y = x);
	            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
	            this.add(x, 0, 0, y, 0, 0);
	            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
	            return this;
	        };
	        /*\
	         * Matrix.rotate
	         [ method ]
	         **
	         * Rotates the matrix
	         - a (number) angle of rotation, in degrees
	         - x (number) horizontal origin point from which to rotate
	         - y (number) vertical origin point from which to rotate
	        \*/
	        matrixproto.rotate = function (a, x, y) {
	            a = Snap.rad(a);
	            x = x || 0;
	            y = y || 0;
	            var cos = +math.cos(a).toFixed(9),
	                sin = +math.sin(a).toFixed(9);
	            this.add(cos, sin, -sin, cos, x, y);
	            return this.add(1, 0, 0, 1, -x, -y);
	        };
	        /*\
	         * Matrix.x
	         [ method ]
	         **
	         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
	         - x (number)
	         - y (number)
	         = (number) x
	        \*/
	        matrixproto.x = function (x, y) {
	            return x * this.a + y * this.c + this.e;
	        };
	        /*\
	         * Matrix.y
	         [ method ]
	         **
	         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
	         - x (number)
	         - y (number)
	         = (number) y
	        \*/
	        matrixproto.y = function (x, y) {
	            return x * this.b + y * this.d + this.f;
	        };
	        matrixproto.get = function (i) {
	            return +this[Str.fromCharCode(97 + i)].toFixed(4);
	        };
	        matrixproto.toString = function () {
	            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
	        };
	        matrixproto.offset = function () {
	            return [this.e.toFixed(4), this.f.toFixed(4)];
	        };
	        function norm(a) {
	            return a[0] * a[0] + a[1] * a[1];
	        }
	        function normalize(a) {
	            var mag = math.sqrt(norm(a));
	            a[0] && (a[0] /= mag);
	            a[1] && (a[1] /= mag);
	        }
	        /*\
	         * Matrix.determinant
	         [ method ]
	         **
	         * Finds determinant of the given matrix.
	         = (number) determinant
	        \*/
	        matrixproto.determinant = function () {
	            return this.a * this.d - this.b * this.c;
	        };
	        /*\
	         * Matrix.split
	         [ method ]
	         **
	         * Splits matrix into primitive transformations
	         = (object) in format:
	         o dx (number) translation by x
	         o dy (number) translation by y
	         o scalex (number) scale by x
	         o scaley (number) scale by y
	         o shear (number) shear
	         o rotate (number) rotation in deg
	         o isSimple (boolean) could it be represented via simple transformations
	        \*/
	        matrixproto.split = function () {
	            var out = {};
	            // translation
	            out.dx = this.e;
	            out.dy = this.f;

	            // scale and shear
	            var row = [[this.a, this.c], [this.b, this.d]];
	            out.scalex = math.sqrt(norm(row[0]));
	            normalize(row[0]);

	            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
	            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

	            out.scaley = math.sqrt(norm(row[1]));
	            normalize(row[1]);
	            out.shear /= out.scaley;

	            if (this.determinant() < 0) {
	                out.scalex = -out.scalex;
	            }

	            // rotation
	            var sin = -row[0][1],
	                cos = row[1][1];
	            if (cos < 0) {
	                out.rotate = Snap.deg(math.acos(cos));
	                if (sin < 0) {
	                    out.rotate = 360 - out.rotate;
	                }
	            } else {
	                out.rotate = Snap.deg(math.asin(sin));
	            }

	            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
	            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
	            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
	            return out;
	        };
	        /*\
	         * Matrix.toTransformString
	         [ method ]
	         **
	         * Returns transform string that represents given matrix
	         = (string) transform string
	        \*/
	        matrixproto.toTransformString = function (shorter) {
	            var s = shorter || this.split();
	            if (!+s.shear.toFixed(9)) {
	                s.scalex = +s.scalex.toFixed(4);
	                s.scaley = +s.scaley.toFixed(4);
	                s.rotate = +s.rotate.toFixed(4);
	                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + 
	                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
	                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
	            } else {
	                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
	            }
	        };
	    })(Matrix.prototype);
	    /*\
	     * Snap.Matrix
	     [ method ]
	     **
	     * Matrix constructor, extend on your own risk.
	     * To create matrices use @Snap.matrix.
	    \*/
	    Snap.Matrix = Matrix;
	    /*\
	     * Snap.matrix
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns a matrix based on the given parameters
	     - a (number)
	     - b (number)
	     - c (number)
	     - d (number)
	     - e (number)
	     - f (number)
	     * or
	     - svgMatrix (SVGMatrix)
	     = (object) @Matrix
	    \*/
	    Snap.matrix = function (a, b, c, d, e, f) {
	        return new Matrix(a, b, c, d, e, f);
	    };
	});
	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var has = "hasOwnProperty",
	        make = Snap._.make,
	        wrap = Snap._.wrap,
	        is = Snap.is,
	        getSomeDefs = Snap._.getSomeDefs,
	        reURLValue = /^url\(#?([^)]+)\)$/,
	        $ = Snap._.$,
	        URL = Snap.url,
	        Str = String,
	        separator = Snap._.separator,
	        E = "";
	    // Attributes event handlers
	    eve.on("snap.util.attr.mask", function (value) {
	        if (value instanceof Element || value instanceof Fragment) {
	            eve.stop();
	            if (value instanceof Fragment && value.node.childNodes.length == 1) {
	                value = value.node.firstChild;
	                getSomeDefs(this).appendChild(value);
	                value = wrap(value);
	            }
	            if (value.type == "mask") {
	                var mask = value;
	            } else {
	                mask = make("mask", getSomeDefs(this));
	                mask.node.appendChild(value.node);
	            }
	            !mask.node.id && $(mask.node, {
	                id: mask.id
	            });
	            $(this.node, {
	                mask: URL(mask.id)
	            });
	        }
	    });
	    (function (clipIt) {
	        eve.on("snap.util.attr.clip", clipIt);
	        eve.on("snap.util.attr.clip-path", clipIt);
	        eve.on("snap.util.attr.clipPath", clipIt);
	    }(function (value) {
	        if (value instanceof Element || value instanceof Fragment) {
	            eve.stop();
	            if (value.type == "clipPath") {
	                var clip = value;
	            } else {
	                clip = make("clipPath", getSomeDefs(this));
	                clip.node.appendChild(value.node);
	                !clip.node.id && $(clip.node, {
	                    id: clip.id
	                });
	            }
	            $(this.node, {
	                "clip-path": URL(clip.node.id || clip.id)
	            });
	        }
	    }));
	    function fillStroke(name) {
	        return function (value) {
	            eve.stop();
	            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
	                (value.node.firstChild.tagName == "radialGradient" ||
	                value.node.firstChild.tagName == "linearGradient" ||
	                value.node.firstChild.tagName == "pattern")) {
	                value = value.node.firstChild;
	                getSomeDefs(this).appendChild(value);
	                value = wrap(value);
	            }
	            if (value instanceof Element) {
	                if (value.type == "radialGradient" || value.type == "linearGradient"
	                   || value.type == "pattern") {
	                    if (!value.node.id) {
	                        $(value.node, {
	                            id: value.id
	                        });
	                    }
	                    var fill = URL(value.node.id);
	                } else {
	                    fill = value.attr(name);
	                }
	            } else {
	                fill = Snap.color(value);
	                if (fill.error) {
	                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
	                    if (grad) {
	                        if (!grad.node.id) {
	                            $(grad.node, {
	                                id: grad.id
	                            });
	                        }
	                        fill = URL(grad.node.id);
	                    } else {
	                        fill = value;
	                    }
	                } else {
	                    fill = Str(fill);
	                }
	            }
	            var attrs = {};
	            attrs[name] = fill;
	            $(this.node, attrs);
	            this.node.style[name] = E;
	        };
	    }
	    eve.on("snap.util.attr.fill", fillStroke("fill"));
	    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
	    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
	    eve.on("snap.util.grad.parse", function parseGrad(string) {
	        string = Str(string);
	        var tokens = string.match(gradrg);
	        if (!tokens) {
	            return null;
	        }
	        var type = tokens[1],
	            params = tokens[2],
	            stops = tokens[3];
	        params = params.split(/\s*,\s*/).map(function (el) {
	            return +el == el ? +el : el;
	        });
	        if (params.length == 1 && params[0] == 0) {
	            params = [];
	        }
	        stops = stops.split("-");
	        stops = stops.map(function (el) {
	            el = el.split(":");
	            var out = {
	                color: el[0]
	            };
	            if (el[1]) {
	                out.offset = parseFloat(el[1]);
	            }
	            return out;
	        });
	        return {
	            type: type,
	            params: params,
	            stops: stops
	        };
	    });

	    eve.on("snap.util.attr.d", function (value) {
	        eve.stop();
	        if (is(value, "array") && is(value[0], "array")) {
	            value = Snap.path.toString.call(value);
	        }
	        value = Str(value);
	        if (value.match(/[ruo]/i)) {
	            value = Snap.path.toAbsolute(value);
	        }
	        $(this.node, {d: value});
	    })(-1);
	    eve.on("snap.util.attr.#text", function (value) {
	        eve.stop();
	        value = Str(value);
	        var txt = glob.doc.createTextNode(value);
	        while (this.node.firstChild) {
	            this.node.removeChild(this.node.firstChild);
	        }
	        this.node.appendChild(txt);
	    })(-1);
	    eve.on("snap.util.attr.path", function (value) {
	        eve.stop();
	        this.attr({d: value});
	    })(-1);
	    eve.on("snap.util.attr.class", function (value) {
	        eve.stop();
	        this.node.className.baseVal = value;
	    })(-1);
	    eve.on("snap.util.attr.viewBox", function (value) {
	        var vb;
	        if (is(value, "object") && "x" in value) {
	            vb = [value.x, value.y, value.width, value.height].join(" ");
	        } else if (is(value, "array")) {
	            vb = value.join(" ");
	        } else {
	            vb = value;
	        }
	        $(this.node, {
	            viewBox: vb
	        });
	        eve.stop();
	    })(-1);
	    eve.on("snap.util.attr.transform", function (value) {
	        this.transform(value);
	        eve.stop();
	    })(-1);
	    eve.on("snap.util.attr.r", function (value) {
	        if (this.type == "rect") {
	            eve.stop();
	            $(this.node, {
	                rx: value,
	                ry: value
	            });
	        }
	    })(-1);
	    eve.on("snap.util.attr.textpath", function (value) {
	        eve.stop();
	        if (this.type == "text") {
	            var id, tp, node;
	            if (!value && this.textPath) {
	                tp = this.textPath;
	                while (tp.node.firstChild) {
	                    this.node.appendChild(tp.node.firstChild);
	                }
	                tp.remove();
	                delete this.textPath;
	                return;
	            }
	            if (is(value, "string")) {
	                var defs = getSomeDefs(this),
	                    path = wrap(defs.parentNode).path(value);
	                defs.appendChild(path.node);
	                id = path.id;
	                path.attr({id: id});
	            } else {
	                value = wrap(value);
	                if (value instanceof Element) {
	                    id = value.attr("id");
	                    if (!id) {
	                        id = value.id;
	                        value.attr({id: id});
	                    }
	                }
	            }
	            if (id) {
	                tp = this.textPath;
	                node = this.node;
	                if (tp) {
	                    tp.attr({"xlink:href": "#" + id});
	                } else {
	                    tp = $("textPath", {
	                        "xlink:href": "#" + id
	                    });
	                    while (node.firstChild) {
	                        tp.appendChild(node.firstChild);
	                    }
	                    node.appendChild(tp);
	                    this.textPath = wrap(tp);
	                }
	            }
	        }
	    })(-1);
	    eve.on("snap.util.attr.text", function (value) {
	        if (this.type == "text") {
	            var i = 0,
	                node = this.node,
	                tuner = function (chunk) {
	                    var out = $("tspan");
	                    if (is(chunk, "array")) {
	                        for (var i = 0; i < chunk.length; i++) {
	                            out.appendChild(tuner(chunk[i]));
	                        }
	                    } else {
	                        out.appendChild(glob.doc.createTextNode(chunk));
	                    }
	                    out.normalize && out.normalize();
	                    return out;
	                };
	            while (node.firstChild) {
	                node.removeChild(node.firstChild);
	            }
	            var tuned = tuner(value);
	            while (tuned.firstChild) {
	                node.appendChild(tuned.firstChild);
	            }
	        }
	        eve.stop();
	    })(-1);
	    function setFontSize(value) {
	        eve.stop();
	        if (value == +value) {
	            value += "px";
	        }
	        this.node.style.fontSize = value;
	    }
	    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
	    eve.on("snap.util.attr.font-size", setFontSize)(-1);


	    eve.on("snap.util.getattr.transform", function () {
	        eve.stop();
	        return this.transform();
	    })(-1);
	    eve.on("snap.util.getattr.textpath", function () {
	        eve.stop();
	        return this.textPath;
	    })(-1);
	    // Markers
	    (function () {
	        function getter(end) {
	            return function () {
	                eve.stop();
	                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
	                if (style == "none") {
	                    return style;
	                } else {
	                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
	                }
	            };
	        }
	        function setter(end) {
	            return function (value) {
	                eve.stop();
	                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
	                if (value == "" || !value) {
	                    this.node.style[name] = "none";
	                    return;
	                }
	                if (value.type == "marker") {
	                    var id = value.node.id;
	                    if (!id) {
	                        $(value.node, {id: value.id});
	                    }
	                    this.node.style[name] = URL(id);
	                    return;
	                }
	            };
	        }
	        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
	        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
	        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
	        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
	        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
	        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
	        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
	        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
	        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
	        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
	        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
	        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
	    }());
	    eve.on("snap.util.getattr.r", function () {
	        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
	            eve.stop();
	            return $(this.node, "rx");
	        }
	    })(-1);
	    function textExtract(node) {
	        var out = [];
	        var children = node.childNodes;
	        for (var i = 0, ii = children.length; i < ii; i++) {
	            var chi = children[i];
	            if (chi.nodeType == 3) {
	                out.push(chi.nodeValue);
	            }
	            if (chi.tagName == "tspan") {
	                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
	                    out.push(chi.firstChild.nodeValue);
	                } else {
	                    out.push(textExtract(chi));
	                }
	            }
	        }
	        return out;
	    }
	    eve.on("snap.util.getattr.text", function () {
	        if (this.type == "text" || this.type == "tspan") {
	            eve.stop();
	            var out = textExtract(this.node);
	            return out.length == 1 ? out[0] : out;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.#text", function () {
	        return this.node.textContent;
	    })(-1);
	    eve.on("snap.util.getattr.viewBox", function () {
	        eve.stop();
	        var vb = $(this.node, "viewBox");
	        if (vb) {
	            vb = vb.split(separator);
	            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
	        } else {
	            return;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.points", function () {
	        var p = $(this.node, "points");
	        eve.stop();
	        if (p) {
	            return p.split(separator);
	        } else {
	            return;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.path", function () {
	        var p = $(this.node, "d");
	        eve.stop();
	        return p;
	    })(-1);
	    eve.on("snap.util.getattr.class", function () {
	        return this.node.className.baseVal;
	    })(-1);
	    function getFontSize() {
	        eve.stop();
	        return this.node.style.fontSize;
	    }
	    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
	    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
	});

	// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var rgNotSpace = /\S+/g,
	        rgBadSpace = /[\t\r\n\f]/g,
	        rgTrim = /(^\s+|\s+$)/g,
	        Str = String,
	        elproto = Element.prototype;
	    /*\
	     * Element.addClass
	     [ method ]
	     **
	     * Adds given class name or list of class names to the element.
	     - value (string) class name or space separated list of class names
	     **
	     = (Element) original element.
	    \*/
	    elproto.addClass = function (value) {
	        var classes = Str(value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;

	        if (classes.length) {
	            j = 0;
	            while ((clazz = classes[j++])) {
	                pos = curClasses.indexOf(clazz);
	                if (!~pos) {
	                    curClasses.push(clazz);
	                }
	            }

	            finalValue = curClasses.join(" ");
	            if (className != finalValue) {
	                elem.className.baseVal = finalValue;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.removeClass
	     [ method ]
	     **
	     * Removes given class name or list of class names from the element.
	     - value (string) class name or space separated list of class names
	     **
	     = (Element) original element.
	    \*/
	    elproto.removeClass = function (value) {
	        var classes = Str(value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;
	        if (curClasses.length) {
	            j = 0;
	            while ((clazz = classes[j++])) {
	                pos = curClasses.indexOf(clazz);
	                if (~pos) {
	                    curClasses.splice(pos, 1);
	                }
	            }

	            finalValue = curClasses.join(" ");
	            if (className != finalValue) {
	                elem.className.baseVal = finalValue;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.hasClass
	     [ method ]
	     **
	     * Checks if the element has a given class name in the list of class names applied to it.
	     - value (string) class name
	     **
	     = (boolean) `true` if the element has given class
	    \*/
	    elproto.hasClass = function (value) {
	        var elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [];
	        return !!~curClasses.indexOf(value);
	    };
	    /*\
	     * Element.toggleClass
	     [ method ]
	     **
	     * Add or remove one or more classes from the element, depending on either
	     * the class’s presence or the value of the `flag` argument.
	     - value (string) class name or space separated list of class names
	     - flag (boolean) value to determine whether the class should be added or removed
	     **
	     = (Element) original element.
	    \*/
	    elproto.toggleClass = function (value, flag) {
	        if (flag != null) {
	            if (flag) {
	                return this.addClass(value);
	            } else {
	                return this.removeClass(value);
	            }
	        }
	        var classes = (value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;
	        j = 0;
	        while ((clazz = classes[j++])) {
	            pos = curClasses.indexOf(clazz);
	            if (~pos) {
	                curClasses.splice(pos, 1);
	            } else {
	                curClasses.push(clazz);
	            }
	        }

	        finalValue = curClasses.join(" ");
	        if (className != finalValue) {
	            elem.className.baseVal = finalValue;
	        }
	        return this;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var operators = {
	            "+": function (x, y) {
	                    return x + y;
	                },
	            "-": function (x, y) {
	                    return x - y;
	                },
	            "/": function (x, y) {
	                    return x / y;
	                },
	            "*": function (x, y) {
	                    return x * y;
	                }
	        },
	        Str = String,
	        reUnit = /[a-z]+$/i,
	        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
	    function getNumber(val) {
	        return val;
	    }
	    function getUnit(unit) {
	        return function (val) {
	            return +val.toFixed(3) + unit;
	        };
	    }
	    eve.on("snap.util.attr", function (val) {
	        var plus = Str(val).match(reAddon);
	        if (plus) {
	            var evnt = eve.nt(),
	                name = evnt.substring(evnt.lastIndexOf(".") + 1),
	                a = this.attr(name),
	                atr = {};
	            eve.stop();
	            var unit = plus[3] || "",
	                aUnit = a.match(reUnit),
	                op = operators[plus[1]];
	            if (aUnit && aUnit == unit) {
	                val = op(parseFloat(a), +plus[2]);
	            } else {
	                a = this.asPX(name);
	                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
	            }
	            if (isNaN(a) || isNaN(val)) {
	                return;
	            }
	            atr[name] = val;
	            this.attr(atr);
	        }
	    })(-10);
	    eve.on("snap.util.equal", function (name, b) {
	        var A, B, a = Str(this.attr(name) || ""),
	            el = this,
	            bplus = Str(b).match(reAddon);
	        if (bplus) {
	            eve.stop();
	            var unit = bplus[3] || "",
	                aUnit = a.match(reUnit),
	                op = operators[bplus[1]];
	            if (aUnit && aUnit == unit) {
	                return {
	                    from: parseFloat(a),
	                    to: op(parseFloat(a), +bplus[2]),
	                    f: getUnit(aUnit)
	                };
	            } else {
	                a = this.asPX(name);
	                return {
	                    from: a,
	                    to: op(a, this.asPX(name, bplus[2] + unit)),
	                    f: getNumber
	                };
	            }
	        }
	    })(-10);
	});
	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var proto = Paper.prototype,
	        is = Snap.is;
	    /*\
	     * Paper.rect
	     [ method ]
	     *
	     * Draws a rectangle
	     **
	     - x (number) x coordinate of the top left corner
	     - y (number) y coordinate of the top left corner
	     - width (number) width
	     - height (number) height
	     - rx (number) #optional horizontal radius for rounded corners, default is 0
	     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
	     = (object) the `rect` element
	     **
	     > Usage
	     | // regular rectangle
	     | var c = paper.rect(10, 10, 50, 50);
	     | // rectangle with rounded corners
	     | var c = paper.rect(40, 40, 50, 50, 10);
	    \*/
	    proto.rect = function (x, y, w, h, rx, ry) {
	        var attr;
	        if (ry == null) {
	            ry = rx;
	        }
	        if (is(x, "object") && x == "[object Object]") {
	            attr = x;
	        } else if (x != null) {
	            attr = {
	                x: x,
	                y: y,
	                width: w,
	                height: h
	            };
	            if (rx != null) {
	                attr.rx = rx;
	                attr.ry = ry;
	            }
	        }
	        return this.el("rect", attr);
	    };
	    /*\
	     * Paper.circle
	     [ method ]
	     **
	     * Draws a circle
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - r (number) radius
	     = (object) the `circle` element
	     **
	     > Usage
	     | var c = paper.circle(50, 50, 40);
	    \*/
	    proto.circle = function (cx, cy, r) {
	        var attr;
	        if (is(cx, "object") && cx == "[object Object]") {
	            attr = cx;
	        } else if (cx != null) {
	            attr = {
	                cx: cx,
	                cy: cy,
	                r: r
	            };
	        }
	        return this.el("circle", attr);
	    };

	    var preload = (function () {
	        function onerror() {
	            this.parentNode.removeChild(this);
	        }
	        return function (src, f) {
	            var img = glob.doc.createElement("img"),
	                body = glob.doc.body;
	            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
	            img.onload = function () {
	                f.call(img);
	                img.onload = img.onerror = null;
	                body.removeChild(img);
	            };
	            img.onerror = onerror;
	            body.appendChild(img);
	            img.src = src;
	        };
	    }());

	    /*\
	     * Paper.image
	     [ method ]
	     **
	     * Places an image on the surface
	     **
	     - src (string) URI of the source image
	     - x (number) x offset position
	     - y (number) y offset position
	     - width (number) width of the image
	     - height (number) height of the image
	     = (object) the `image` element
	     * or
	     = (object) Snap element object with type `image`
	     **
	     > Usage
	     | var c = paper.image("apple.png", 10, 10, 80, 80);
	    \*/
	    proto.image = function (src, x, y, width, height) {
	        var el = this.el("image");
	        if (is(src, "object") && "src" in src) {
	            el.attr(src);
	        } else if (src != null) {
	            var set = {
	                "xlink:href": src,
	                preserveAspectRatio: "none"
	            };
	            if (x != null && y != null) {
	                set.x = x;
	                set.y = y;
	            }
	            if (width != null && height != null) {
	                set.width = width;
	                set.height = height;
	            } else {
	                preload(src, function () {
	                    Snap._.$(el.node, {
	                        width: this.offsetWidth,
	                        height: this.offsetHeight
	                    });
	                });
	            }
	            Snap._.$(el.node, set);
	        }
	        return el;
	    };
	    /*\
	     * Paper.ellipse
	     [ method ]
	     **
	     * Draws an ellipse
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - rx (number) horizontal radius
	     - ry (number) vertical radius
	     = (object) the `ellipse` element
	     **
	     > Usage
	     | var c = paper.ellipse(50, 50, 40, 20);
	    \*/
	    proto.ellipse = function (cx, cy, rx, ry) {
	        var attr;
	        if (is(cx, "object") && cx == "[object Object]") {
	            attr = cx;
	        } else if (cx != null) {
	            attr ={
	                cx: cx,
	                cy: cy,
	                rx: rx,
	                ry: ry
	            };
	        }
	        return this.el("ellipse", attr);
	    };
	    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
	    /*\
	     * Paper.path
	     [ method ]
	     **
	     * Creates a `<path>` element using the given string as the path's definition
	     - pathString (string) #optional path string in SVG format
	     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
	     | "M10,20L30,40"
	     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
	     *
	     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
	     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
	     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
	     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
	     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
	     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
	     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
	     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
	     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
	     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
	     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
	     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
	     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
	     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
	     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
	     > Usage
	     | var c = paper.path("M10 10L90 90");
	     | // draw a diagonal line:
	     | // move to 10,10, line to 90,90
	    \*/
	    proto.path = function (d) {
	        var attr;
	        if (is(d, "object") && !is(d, "array")) {
	            attr = d;
	        } else if (d) {
	            attr = {d: d};
	        }
	        return this.el("path", attr);
	    };
	    /*\
	     * Paper.g
	     [ method ]
	     **
	     * Creates a group element
	     **
	     - varargs (…) #optional elements to nest within the group
	     = (object) the `g` element
	     **
	     > Usage
	     | var c1 = paper.circle(),
	     |     c2 = paper.rect(),
	     |     g = paper.g(c2, c1); // note that the order of elements is different
	     * or
	     | var c1 = paper.circle(),
	     |     c2 = paper.rect(),
	     |     g = paper.g();
	     | g.add(c2, c1);
	    \*/
	    /*\
	     * Paper.group
	     [ method ]
	     **
	     * See @Paper.g
	    \*/
	    proto.group = proto.g = function (first) {
	        var attr,
	            el = this.el("g");
	        if (arguments.length == 1 && first && !first.type) {
	            el.attr(first);
	        } else if (arguments.length) {
	            el.add(Array.prototype.slice.call(arguments, 0));
	        }
	        return el;
	    };
	    /*\
	     * Paper.svg
	     [ method ]
	     **
	     * Creates a nested SVG element.
	     - x (number) @optional X of the element
	     - y (number) @optional Y of the element
	     - width (number) @optional width of the element
	     - height (number) @optional height of the element
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     **
	     = (object) the `svg` element
	     **
	    \*/
	    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
	        var attrs = {};
	        if (is(x, "object") && y == null) {
	            attrs = x;
	        } else {
	            if (x != null) {
	                attrs.x = x;
	            }
	            if (y != null) {
	                attrs.y = y;
	            }
	            if (width != null) {
	                attrs.width = width;
	            }
	            if (height != null) {
	                attrs.height = height;
	            }
	            if (vbx != null && vby != null && vbw != null && vbh != null) {
	                attrs.viewBox = [vbx, vby, vbw, vbh];
	            }
	        }
	        return this.el("svg", attrs);
	    };
	    /*\
	     * Paper.mask
	     [ method ]
	     **
	     * Equivalent in behaviour to @Paper.g, except it’s a mask.
	     **
	     = (object) the `mask` element
	     **
	    \*/
	    proto.mask = function (first) {
	        var attr,
	            el = this.el("mask");
	        if (arguments.length == 1 && first && !first.type) {
	            el.attr(first);
	        } else if (arguments.length) {
	            el.add(Array.prototype.slice.call(arguments, 0));
	        }
	        return el;
	    };
	    /*\
	     * Paper.ptrn
	     [ method ]
	     **
	     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
	     - x (number) @optional X of the element
	     - y (number) @optional Y of the element
	     - width (number) @optional width of the element
	     - height (number) @optional height of the element
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     **
	     = (object) the `pattern` element
	     **
	    \*/
	    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
	        if (is(x, "object")) {
	            var attr = x;
	        } else {
	            attr = {patternUnits: "userSpaceOnUse"};
	            if (x) {
	                attr.x = x;
	            }
	            if (y) {
	                attr.y = y;
	            }
	            if (width != null) {
	                attr.width = width;
	            }
	            if (height != null) {
	                attr.height = height;
	            }
	            if (vx != null && vy != null && vw != null && vh != null) {
	                attr.viewBox = [vx, vy, vw, vh];
	            } else {
	                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
	            }
	        }
	        return this.el("pattern", attr);
	    };
	    /*\
	     * Paper.use
	     [ method ]
	     **
	     * Creates a <use> element.
	     - id (string) @optional id of element to link
	     * or
	     - id (Element) @optional element to link
	     **
	     = (object) the `use` element
	     **
	    \*/
	    proto.use = function (id) {
	        if (id != null) {
	            if (id instanceof Element) {
	                if (!id.attr("id")) {
	                    id.attr({id: Snap._.id(id)});
	                }
	                id = id.attr("id");
	            }
	            if (String(id).charAt() == "#") {
	                id = id.substring(1);
	            }
	            return this.el("use", {"xlink:href": "#" + id});
	        } else {
	            return Element.prototype.use.call(this);
	        }
	    };
	    /*\
	     * Paper.symbol
	     [ method ]
	     **
	     * Creates a <symbol> element.
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     = (object) the `symbol` element
	     **
	    \*/
	    proto.symbol = function (vx, vy, vw, vh) {
	        var attr = {};
	        if (vx != null && vy != null && vw != null && vh != null) {
	            attr.viewBox = [vx, vy, vw, vh];
	        }

	        return this.el("symbol", attr);
	    };
	    /*\
	     * Paper.text
	     [ method ]
	     **
	     * Draws a text string
	     **
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
	     = (object) the `text` element
	     **
	     > Usage
	     | var t1 = paper.text(50, 50, "Snap");
	     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
	     | // Text path usage
	     | t1.attr({textpath: "M10,10L100,100"});
	     | // or
	     | var pth = paper.path("M10,10L100,100");
	     | t1.attr({textpath: pth});
	    \*/
	    proto.text = function (x, y, text) {
	        var attr = {};
	        if (is(x, "object")) {
	            attr = x;
	        } else if (x != null) {
	            attr = {
	                x: x,
	                y: y,
	                text: text || ""
	            };
	        }
	        return this.el("text", attr);
	    };
	    /*\
	     * Paper.line
	     [ method ]
	     **
	     * Draws a line
	     **
	     - x1 (number) x coordinate position of the start
	     - y1 (number) y coordinate position of the start
	     - x2 (number) x coordinate position of the end
	     - y2 (number) y coordinate position of the end
	     = (object) the `line` element
	     **
	     > Usage
	     | var t1 = paper.line(50, 50, 100, 100);
	    \*/
	    proto.line = function (x1, y1, x2, y2) {
	        var attr = {};
	        if (is(x1, "object")) {
	            attr = x1;
	        } else if (x1 != null) {
	            attr = {
	                x1: x1,
	                x2: x2,
	                y1: y1,
	                y2: y2
	            };
	        }
	        return this.el("line", attr);
	    };
	    /*\
	     * Paper.polyline
	     [ method ]
	     **
	     * Draws a polyline
	     **
	     - points (array) array of points
	     * or
	     - varargs (…) points
	     = (object) the `polyline` element
	     **
	     > Usage
	     | var p1 = paper.polyline([10, 10, 100, 100]);
	     | var p2 = paper.polyline(10, 10, 100, 100);
	    \*/
	    proto.polyline = function (points) {
	        if (arguments.length > 1) {
	            points = Array.prototype.slice.call(arguments, 0);
	        }
	        var attr = {};
	        if (is(points, "object") && !is(points, "array")) {
	            attr = points;
	        } else if (points != null) {
	            attr = {points: points};
	        }
	        return this.el("polyline", attr);
	    };
	    /*\
	     * Paper.polygon
	     [ method ]
	     **
	     * Draws a polygon. See @Paper.polyline
	    \*/
	    proto.polygon = function (points) {
	        if (arguments.length > 1) {
	            points = Array.prototype.slice.call(arguments, 0);
	        }
	        var attr = {};
	        if (is(points, "object") && !is(points, "array")) {
	            attr = points;
	        } else if (points != null) {
	            attr = {points: points};
	        }
	        return this.el("polygon", attr);
	    };
	    // gradients
	    (function () {
	        var $ = Snap._.$;
	        // gradients' helpers
	        function Gstops() {
	            return this.selectAll("stop");
	        }
	        function GaddStop(color, offset) {
	            var stop = $("stop"),
	                attr = {
	                    offset: +offset + "%"
	                };
	            color = Snap.color(color);
	            attr["stop-color"] = color.hex;
	            if (color.opacity < 1) {
	                attr["stop-opacity"] = color.opacity;
	            }
	            $(stop, attr);
	            this.node.appendChild(stop);
	            return this;
	        }
	        function GgetBBox() {
	            if (this.type == "linearGradient") {
	                var x1 = $(this.node, "x1") || 0,
	                    x2 = $(this.node, "x2") || 1,
	                    y1 = $(this.node, "y1") || 0,
	                    y2 = $(this.node, "y2") || 0;
	                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
	            } else {
	                var cx = this.node.cx || .5,
	                    cy = this.node.cy || .5,
	                    r = this.node.r || 0;
	                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
	            }
	        }
	        function gradient(defs, str) {
	            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
	                el;
	            if (!grad) {
	                return null;
	            }
	            grad.params.unshift(defs);
	            if (grad.type.toLowerCase() == "l") {
	                el = gradientLinear.apply(0, grad.params);
	            } else {
	                el = gradientRadial.apply(0, grad.params);
	            }
	            if (grad.type != grad.type.toLowerCase()) {
	                $(el.node, {
	                    gradientUnits: "userSpaceOnUse"
	                });
	            }
	            var stops = grad.stops,
	                len = stops.length,
	                start = 0,
	                j = 0;
	            function seed(i, end) {
	                var step = (end - start) / (i - j);
	                for (var k = j; k < i; k++) {
	                    stops[k].offset = +(+start + step * (k - j)).toFixed(2);
	                }
	                j = i;
	                start = end;
	            }
	            len--;
	            for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
	                seed(i, stops[i].offset);
	            }
	            stops[len].offset = stops[len].offset || 100;
	            seed(len, stops[len].offset);
	            for (i = 0; i <= len; i++) {
	                var stop = stops[i];
	                el.addStop(stop.color, stop.offset);
	            }
	            return el;
	        }
	        function gradientLinear(defs, x1, y1, x2, y2) {
	            var el = Snap._.make("linearGradient", defs);
	            el.stops = Gstops;
	            el.addStop = GaddStop;
	            el.getBBox = GgetBBox;
	            if (x1 != null) {
	                $(el.node, {
	                    x1: x1,
	                    y1: y1,
	                    x2: x2,
	                    y2: y2
	                });
	            }
	            return el;
	        }
	        function gradientRadial(defs, cx, cy, r, fx, fy) {
	            var el = Snap._.make("radialGradient", defs);
	            el.stops = Gstops;
	            el.addStop = GaddStop;
	            el.getBBox = GgetBBox;
	            if (cx != null) {
	                $(el.node, {
	                    cx: cx,
	                    cy: cy,
	                    r: r
	                });
	            }
	            if (fx != null && fy != null) {
	                $(el.node, {
	                    fx: fx,
	                    fy: fy
	                });
	            }
	            return el;
	        }
	        /*\
	         * Paper.gradient
	         [ method ]
	         **
	         * Creates a gradient element
	         **
	         - gradient (string) gradient descriptor
	         > Gradient Descriptor
	         * The gradient descriptor is an expression formatted as
	         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
	         * either linear or radial.  The uppercase `L` or `R` letters
	         * indicate absolute coordinates offset from the SVG surface.
	         * Lowercase `l` or `r` letters indicate coordinates
	         * calculated relative to the element to which the gradient is
	         * applied.  Coordinates specify a linear gradient vector as
	         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
	         * `r` and optional `fx`, `fy` specifying a focal point away
	         * from the center of the circle. Specify `<colors>` as a list
	         * of dash-separated CSS color values.  Each color may be
	         * followed by a custom offset value, separated with a colon
	         * character.
	         > Examples
	         * Linear gradient, relative from top-left corner to bottom-right
	         * corner, from black through red to white:
	         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
	         * Linear gradient, absolute from (0, 0) to (100, 100), from black
	         * through red at 25% to white:
	         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
	         * Radial gradient, relative from the center of the element with radius
	         * half the width, from black to white:
	         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
	         * To apply the gradient:
	         | paper.circle(50, 50, 40).attr({
	         |     fill: g
	         | });
	         = (object) the `gradient` element
	        \*/
	        proto.gradient = function (str) {
	            return gradient(this.defs, str);
	        };
	        proto.gradientLinear = function (x1, y1, x2, y2) {
	            return gradientLinear(this.defs, x1, y1, x2, y2);
	        };
	        proto.gradientRadial = function (cx, cy, r, fx, fy) {
	            return gradientRadial(this.defs, cx, cy, r, fx, fy);
	        };
	        /*\
	         * Paper.toString
	         [ method ]
	         **
	         * Returns SVG code for the @Paper
	         = (string) SVG code for the @Paper
	        \*/
	        proto.toString = function () {
	            var doc = this.node.ownerDocument,
	                f = doc.createDocumentFragment(),
	                d = doc.createElement("div"),
	                svg = this.node.cloneNode(true),
	                res;
	            f.appendChild(d);
	            d.appendChild(svg);
	            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
	            res = d.innerHTML;
	            f.removeChild(f.firstChild);
	            return res;
	        };
	        /*\
	         * Paper.toDataURL
	         [ method ]
	         **
	         * Returns SVG code for the @Paper as Data URI string.
	         = (string) Data URI string
	        \*/
	        proto.toDataURL = function () {
	            if (window && window.btoa) {
	                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
	            }
	        };
	        /*\
	         * Paper.clear
	         [ method ]
	         **
	         * Removes all child nodes of the paper, except <defs>.
	        \*/
	        proto.clear = function () {
	            var node = this.node.firstChild,
	                next;
	            while (node) {
	                next = node.nextSibling;
	                if (node.tagName != "defs") {
	                    node.parentNode.removeChild(node);
	                } else {
	                    proto.clear.call({node: node});
	                }
	                node = next;
	            }
	        };
	    }());
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	        is = Snap.is,
	        clone = Snap._.clone,
	        has = "hasOwnProperty",
	        p2s = /,?([a-z]),?/gi,
	        toFloat = parseFloat,
	        math = Math,
	        PI = math.PI,
	        mmin = math.min,
	        mmax = math.max,
	        pow = math.pow,
	        abs = math.abs;
	    function paths(ps) {
	        var p = paths.ps = paths.ps || {};
	        if (p[ps]) {
	            p[ps].sleep = 100;
	        } else {
	            p[ps] = {
	                sleep: 100
	            };
	        }
	        setTimeout(function () {
	            for (var key in p) if (p[has](key) && key != ps) {
	                p[key].sleep--;
	                !p[key].sleep && delete p[key];
	            }
	        });
	        return p[ps];
	    }
	    function box(x, y, width, height) {
	        if (x == null) {
	            x = y = width = height = 0;
	        }
	        if (y == null) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            x = x.x;
	        }
	        return {
	            x: x,
	            y: y,
	            width: width,
	            w: width,
	            height: height,
	            h: height,
	            x2: x + width,
	            y2: y + height,
	            cx: x + width / 2,
	            cy: y + height / 2,
	            r1: math.min(width, height) / 2,
	            r2: math.max(width, height) / 2,
	            r0: math.sqrt(width * width + height * height) / 2,
	            path: rectPath(x, y, width, height),
	            vb: [x, y, width, height].join(" ")
	        };
	    }
	    function toString() {
	        return this.join(",").replace(p2s, "$1");
	    }
	    function pathClone(pathArray) {
	        var res = clone(pathArray);
	        res.toString = toString;
	        return res;
	    }
	    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
	        if (length == null) {
	            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
	        } else {
	            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
	                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
	        }
	    }
	    function getLengthFactory(istotal, subpath) {
	        function O(val) {
	            return +(+val).toFixed(3);
	        }
	        return Snap._.cacher(function (path, length, onlystart) {
	            if (path instanceof Element) {
	                path = path.attr("d");
	            }
	            path = path2curve(path);
	            var x, y, p, l, sp = "", subpaths = {}, point,
	                len = 0;
	            for (var i = 0, ii = path.length; i < ii; i++) {
	                p = path[i];
	                if (p[0] == "M") {
	                    x = +p[1];
	                    y = +p[2];
	                } else {
	                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                    if (len + l > length) {
	                        if (subpath && !subpaths.start) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            sp += [
	                                "C" + O(point.start.x),
	                                O(point.start.y),
	                                O(point.m.x),
	                                O(point.m.y),
	                                O(point.x),
	                                O(point.y)
	                            ];
	                            if (onlystart) {return sp;}
	                            subpaths.start = sp;
	                            sp = [
	                                "M" + O(point.x),
	                                O(point.y) + "C" + O(point.n.x),
	                                O(point.n.y),
	                                O(point.end.x),
	                                O(point.end.y),
	                                O(p[5]),
	                                O(p[6])
	                            ].join();
	                            len += l;
	                            x = +p[5];
	                            y = +p[6];
	                            continue;
	                        }
	                        if (!istotal && !subpath) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            return point;
	                        }
	                    }
	                    len += l;
	                    x = +p[5];
	                    y = +p[6];
	                }
	                sp += p.shift() + p;
	            }
	            subpaths.end = sp;
	            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
	            return point;
	        }, null, Snap._.clone);
	    }
	    var getTotalLength = getLengthFactory(1),
	        getPointAtLength = getLengthFactory(),
	        getSubpathsAtLength = getLengthFactory(0, 1);
	    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            t13 = pow(t1, 3),
	            t12 = pow(t1, 2),
	            t2 = t * t,
	            t3 = t2 * t,
	            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
	            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
	            ax = t1 * p1x + t * c1x,
	            ay = t1 * p1y + t * c1y,
	            cx = t1 * c2x + t * p2x,
	            cy = t1 * c2y + t * p2y,
	            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
	        // (mx > nx || my < ny) && (alpha += 180);
	        return {
	            x: x,
	            y: y,
	            m: {x: mx, y: my},
	            n: {x: nx, y: ny},
	            start: {x: ax, y: ay},
	            end: {x: cx, y: cy},
	            alpha: alpha
	        };
	    }
	    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	        if (!Snap.is(p1x, "array")) {
	            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
	        }
	        var bbox = curveDim.apply(null, p1x);
	        return box(
	            bbox.min.x,
	            bbox.min.y,
	            bbox.max.x - bbox.min.x,
	            bbox.max.y - bbox.min.y
	        );
	    }
	    function isPointInsideBBox(bbox, x, y) {
	        return  x >= bbox.x &&
	                x <= bbox.x + bbox.width &&
	                y >= bbox.y &&
	                y <= bbox.y + bbox.height;
	    }
	    function isBBoxIntersect(bbox1, bbox2) {
	        bbox1 = box(bbox1);
	        bbox2 = box(bbox2);
	        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
	            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
	            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
	            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
	            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
	            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
	            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
	            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
	            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
	                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
	            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
	                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
	    }
	    function base3(t, p1, p2, p3, p4) {
	        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
	            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
	        return t * t2 - 3 * p1 + 3 * p2;
	    }
	    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
	        if (z == null) {
	            z = 1;
	        }
	        z = z > 1 ? 1 : z < 0 ? 0 : z;
	        var z2 = z / 2,
	            n = 12,
	            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
	            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
	            sum = 0;
	        for (var i = 0; i < n; i++) {
	            var ct = z2 * Tvalues[i] + z2,
	                xbase = base3(ct, x1, x2, x3, x4),
	                ybase = base3(ct, y1, y2, y3, y4),
	                comb = xbase * xbase + ybase * ybase;
	            sum += Cvalues[i] * math.sqrt(comb);
	        }
	        return z2 * sum;
	    }
	    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
	        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
	            return;
	        }
	        var t = 1,
	            step = t / 2,
	            t2 = t - step,
	            l,
	            e = .01;
	        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        while (abs(l - ll) > e) {
	            step /= 2;
	            t2 += (l < ll ? 1 : -1) * step;
	            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        }
	        return t2;
	    }
	    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	        if (
	            mmax(x1, x2) < mmin(x3, x4) ||
	            mmin(x1, x2) > mmax(x3, x4) ||
	            mmax(y1, y2) < mmin(y3, y4) ||
	            mmin(y1, y2) > mmax(y3, y4)
	        ) {
	            return;
	        }
	        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
	            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
	            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	        if (!denominator) {
	            return;
	        }
	        var px = nx / denominator,
	            py = ny / denominator,
	            px2 = +px.toFixed(2),
	            py2 = +py.toFixed(2);
	        if (
	            px2 < +mmin(x1, x2).toFixed(2) ||
	            px2 > +mmax(x1, x2).toFixed(2) ||
	            px2 < +mmin(x3, x4).toFixed(2) ||
	            px2 > +mmax(x3, x4).toFixed(2) ||
	            py2 < +mmin(y1, y2).toFixed(2) ||
	            py2 > +mmax(y1, y2).toFixed(2) ||
	            py2 < +mmin(y3, y4).toFixed(2) ||
	            py2 > +mmax(y3, y4).toFixed(2)
	        ) {
	            return;
	        }
	        return {x: px, y: py};
	    }
	    function inter(bez1, bez2) {
	        return interHelper(bez1, bez2);
	    }
	    function interCount(bez1, bez2) {
	        return interHelper(bez1, bez2, 1);
	    }
	    function interHelper(bez1, bez2, justCount) {
	        var bbox1 = bezierBBox(bez1),
	            bbox2 = bezierBBox(bez2);
	        if (!isBBoxIntersect(bbox1, bbox2)) {
	            return justCount ? 0 : [];
	        }
	        var l1 = bezlen.apply(0, bez1),
	            l2 = bezlen.apply(0, bez2),
	            n1 = ~~(l1 / 8),
	            n2 = ~~(l2 / 8),
	            dots1 = [],
	            dots2 = [],
	            xy = {},
	            res = justCount ? 0 : [];
	        for (var i = 0; i < n1 + 1; i++) {
	            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
	            dots1.push({x: p.x, y: p.y, t: i / n1});
	        }
	        for (i = 0; i < n2 + 1; i++) {
	            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
	            dots2.push({x: p.x, y: p.y, t: i / n2});
	        }
	        for (i = 0; i < n1; i++) {
	            for (var j = 0; j < n2; j++) {
	                var di = dots1[i],
	                    di1 = dots1[i + 1],
	                    dj = dots2[j],
	                    dj1 = dots2[j + 1],
	                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
	                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
	                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
	                if (is) {
	                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
	                        continue;
	                    }
	                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
	                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
	                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
	                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
	                        if (justCount) {
	                            res++;
	                        } else {
	                            res.push({
	                                x: is.x,
	                                y: is.y,
	                                t1: t1,
	                                t2: t2
	                            });
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    function pathIntersection(path1, path2) {
	        return interPathHelper(path1, path2);
	    }
	    function pathIntersectionNumber(path1, path2) {
	        return interPathHelper(path1, path2, 1);
	    }
	    function interPathHelper(path1, path2, justCount) {
	        path1 = path2curve(path1);
	        path2 = path2curve(path2);
	        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
	            res = justCount ? 0 : [];
	        for (var i = 0, ii = path1.length; i < ii; i++) {
	            var pi = path1[i];
	            if (pi[0] == "M") {
	                x1 = x1m = pi[1];
	                y1 = y1m = pi[2];
	            } else {
	                if (pi[0] == "C") {
	                    bez1 = [x1, y1].concat(pi.slice(1));
	                    x1 = bez1[6];
	                    y1 = bez1[7];
	                } else {
	                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
	                    x1 = x1m;
	                    y1 = y1m;
	                }
	                for (var j = 0, jj = path2.length; j < jj; j++) {
	                    var pj = path2[j];
	                    if (pj[0] == "M") {
	                        x2 = x2m = pj[1];
	                        y2 = y2m = pj[2];
	                    } else {
	                        if (pj[0] == "C") {
	                            bez2 = [x2, y2].concat(pj.slice(1));
	                            x2 = bez2[6];
	                            y2 = bez2[7];
	                        } else {
	                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
	                            x2 = x2m;
	                            y2 = y2m;
	                        }
	                        var intr = interHelper(bez1, bez2, justCount);
	                        if (justCount) {
	                            res += intr;
	                        } else {
	                            for (var k = 0, kk = intr.length; k < kk; k++) {
	                                intr[k].segment1 = i;
	                                intr[k].segment2 = j;
	                                intr[k].bez1 = bez1;
	                                intr[k].bez2 = bez2;
	                            }
	                            res = res.concat(intr);
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    function isPointInsidePath(path, x, y) {
	        var bbox = pathBBox(path);
	        return isPointInsideBBox(bbox, x, y) &&
	               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
	    }
	    function pathBBox(path) {
	        var pth = paths(path);
	        if (pth.bbox) {
	            return clone(pth.bbox);
	        }
	        if (!path) {
	            return box();
	        }
	        path = path2curve(path);
	        var x = 0, 
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X.push(x);
	                Y.push(y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X.concat(dim.min.x, dim.max.x);
	                Y = Y.concat(dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin.apply(0, X),
	            ymin = mmin.apply(0, Y),
	            xmax = mmax.apply(0, X),
	            ymax = mmax.apply(0, Y),
	            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
	        pth.bbox = clone(bb);
	        return bb;
	    }
	    function rectPath(x, y, w, h, r) {
	        if (r) {
	            return [
	                ["M", +x + (+r), y],
	                ["l", w - r * 2, 0],
	                ["a", r, r, 0, 0, 1, r, r],
	                ["l", 0, h - r * 2],
	                ["a", r, r, 0, 0, 1, -r, r],
	                ["l", r * 2 - w, 0],
	                ["a", r, r, 0, 0, 1, -r, -r],
	                ["l", 0, r * 2 - h],
	                ["a", r, r, 0, 0, 1, r, -r],
	                ["z"]
	            ];
	        }
	        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
	        res.toString = toString;
	        return res;
	    }
	    function ellipsePath(x, y, rx, ry, a) {
	        if (a == null && ry == null) {
	            ry = rx;
	        }
	        x = +x;
	        y = +y;
	        rx = +rx;
	        ry = +ry;
	        if (a != null) {
	            var rad = Math.PI / 180,
	                x1 = x + rx * Math.cos(-ry * rad),
	                x2 = x + rx * Math.cos(-a * rad),
	                y1 = y + rx * Math.sin(-ry * rad),
	                y2 = y + rx * Math.sin(-a * rad),
	                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
	        } else {
	            res = [
	                ["M", x, y],
	                ["m", 0, -ry],
	                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
	                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
	                ["z"]
	            ];
	        }
	        res.toString = toString;
	        return res;
	    }
	    var unit2px = Snap._unit2px,
	        getPath = {
	        path: function (el) {
	            return el.attr("path");
	        },
	        circle: function (el) {
	            var attr = unit2px(el);
	            return ellipsePath(attr.cx, attr.cy, attr.r);
	        },
	        ellipse: function (el) {
	            var attr = unit2px(el);
	            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
	        },
	        rect: function (el) {
	            var attr = unit2px(el);
	            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
	        },
	        image: function (el) {
	            var attr = unit2px(el);
	            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
	        },
	        line: function (el) {
	            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
	        },
	        polyline: function (el) {
	            return "M" + el.attr("points");
	        },
	        polygon: function (el) {
	            return "M" + el.attr("points") + "z";
	        },
	        deflt: function (el) {
	            var bbox = el.node.getBBox();
	            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	        }
	    };
	    function pathToRelative(pathArray) {
	        var pth = paths(pathArray),
	            lowerCase = String.prototype.toLowerCase;
	        if (pth.rel) {
	            return pathClone(pth.rel);
	        }
	        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
	            pathArray = Snap.parsePathString(pathArray);
	        }
	        var res = [],
	            x = 0,
	            y = 0,
	            mx = 0,
	            my = 0,
	            start = 0;
	        if (pathArray[0][0] == "M") {
	            x = pathArray[0][1];
	            y = pathArray[0][2];
	            mx = x;
	            my = y;
	            start++;
	            res.push(["M", x, y]);
	        }
	        for (var i = start, ii = pathArray.length; i < ii; i++) {
	            var r = res[i] = [],
	                pa = pathArray[i];
	            if (pa[0] != lowerCase.call(pa[0])) {
	                r[0] = lowerCase.call(pa[0]);
	                switch (r[0]) {
	                    case "a":
	                        r[1] = pa[1];
	                        r[2] = pa[2];
	                        r[3] = pa[3];
	                        r[4] = pa[4];
	                        r[5] = pa[5];
	                        r[6] = +(pa[6] - x).toFixed(3);
	                        r[7] = +(pa[7] - y).toFixed(3);
	                        break;
	                    case "v":
	                        r[1] = +(pa[1] - y).toFixed(3);
	                        break;
	                    case "m":
	                        mx = pa[1];
	                        my = pa[2];
	                    default:
	                        for (var j = 1, jj = pa.length; j < jj; j++) {
	                            r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                        }
	                }
	            } else {
	                r = res[i] = [];
	                if (pa[0] == "m") {
	                    mx = pa[1] + x;
	                    my = pa[2] + y;
	                }
	                for (var k = 0, kk = pa.length; k < kk; k++) {
	                    res[i][k] = pa[k];
	                }
	            }
	            var len = res[i].length;
	            switch (res[i][0]) {
	                case "z":
	                    x = mx;
	                    y = my;
	                    break;
	                case "h":
	                    x += +res[i][len - 1];
	                    break;
	                case "v":
	                    y += +res[i][len - 1];
	                    break;
	                default:
	                    x += +res[i][len - 2];
	                    y += +res[i][len - 1];
	            }
	        }
	        res.toString = toString;
	        pth.rel = pathClone(res);
	        return res;
	    }
	    function pathToAbsolute(pathArray) {
	        var pth = paths(pathArray);
	        if (pth.abs) {
	            return pathClone(pth.abs);
	        }
	        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
	            pathArray = Snap.parsePathString(pathArray);
	        }
	        if (!pathArray || !pathArray.length) {
	            return [["M", 0, 0]];
	        }
	        var res = [],
	            x = 0,
	            y = 0,
	            mx = 0,
	            my = 0,
	            start = 0,
	            pa0;
	        if (pathArray[0][0] == "M") {
	            x = +pathArray[0][1];
	            y = +pathArray[0][2];
	            mx = x;
	            my = y;
	            start++;
	            res[0] = ["M", x, y];
	        }
	        var crz = pathArray.length == 3 &&
	            pathArray[0][0] == "M" &&
	            pathArray[1][0].toUpperCase() == "R" &&
	            pathArray[2][0].toUpperCase() == "Z";
	        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
	            res.push(r = []);
	            pa = pathArray[i];
	            pa0 = pa[0];
	            if (pa0 != pa0.toUpperCase()) {
	                r[0] = pa0.toUpperCase();
	                switch (r[0]) {
	                    case "A":
	                        r[1] = pa[1];
	                        r[2] = pa[2];
	                        r[3] = pa[3];
	                        r[4] = pa[4];
	                        r[5] = pa[5];
	                        r[6] = +pa[6] + x;
	                        r[7] = +pa[7] + y;
	                        break;
	                    case "V":
	                        r[1] = +pa[1] + y;
	                        break;
	                    case "H":
	                        r[1] = +pa[1] + x;
	                        break;
	                    case "R":
	                        var dots = [x, y].concat(pa.slice(1));
	                        for (var j = 2, jj = dots.length; j < jj; j++) {
	                            dots[j] = +dots[j] + x;
	                            dots[++j] = +dots[j] + y;
	                        }
	                        res.pop();
	                        res = res.concat(catmullRom2bezier(dots, crz));
	                        break;
	                    case "O":
	                        res.pop();
	                        dots = ellipsePath(x, y, pa[1], pa[2]);
	                        dots.push(dots[0]);
	                        res = res.concat(dots);
	                        break;
	                    case "U":
	                        res.pop();
	                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
	                        r = ["U"].concat(res[res.length - 1].slice(-2));
	                        break;
	                    case "M":
	                        mx = +pa[1] + x;
	                        my = +pa[2] + y;
	                    default:
	                        for (j = 1, jj = pa.length; j < jj; j++) {
	                            r[j] = +pa[j] + ((j % 2) ? x : y);
	                        }
	                }
	            } else if (pa0 == "R") {
	                dots = [x, y].concat(pa.slice(1));
	                res.pop();
	                res = res.concat(catmullRom2bezier(dots, crz));
	                r = ["R"].concat(pa.slice(-2));
	            } else if (pa0 == "O") {
	                res.pop();
	                dots = ellipsePath(x, y, pa[1], pa[2]);
	                dots.push(dots[0]);
	                res = res.concat(dots);
	            } else if (pa0 == "U") {
	                res.pop();
	                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
	                r = ["U"].concat(res[res.length - 1].slice(-2));
	            } else {
	                for (var k = 0, kk = pa.length; k < kk; k++) {
	                    r[k] = pa[k];
	                }
	            }
	            pa0 = pa0.toUpperCase();
	            if (pa0 != "O") {
	                switch (r[0]) {
	                    case "Z":
	                        x = +mx;
	                        y = +my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = r[r.length - 2];
	                        my = r[r.length - 1];
	                    default:
	                        x = r[r.length - 2];
	                        y = r[r.length - 1];
	                }
	            }
	        }
	        res.toString = toString;
	        pth.abs = pathClone(res);
	        return res;
	    }
	    function l2c(x1, y1, x2, y2) {
	        return [x1, y1, x2, y2, x2, y2];
	    }
	    function q2c(x1, y1, ax, ay, x2, y2) {
	        var _13 = 1 / 3,
	            _23 = 2 / 3;
	        return [
	                _13 * x1 + _23 * ax,
	                _13 * y1 + _23 * ay,
	                _13 * x2 + _23 * ax,
	                _13 * y2 + _23 * ay,
	                x2,
	                y2
	            ];
	    }
	    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	        // for more information of where this math came from visit:
	        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	        var _120 = PI * 120 / 180,
	            rad = PI / 180 * (+angle || 0),
	            res = [],
	            xy,
	            rotate = Snap._.cacher(function (x, y, rad) {
	                var X = x * math.cos(rad) - y * math.sin(rad),
	                    Y = x * math.sin(rad) + y * math.cos(rad);
	                return {x: X, y: Y};
	            });
	        if (!recursive) {
	            xy = rotate(x1, y1, -rad);
	            x1 = xy.x;
	            y1 = xy.y;
	            xy = rotate(x2, y2, -rad);
	            x2 = xy.x;
	            y2 = xy.y;
	            var cos = math.cos(PI / 180 * angle),
	                sin = math.sin(PI / 180 * angle),
	                x = (x1 - x2) / 2,
	                y = (y1 - y2) / 2;
	            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	            if (h > 1) {
	                h = math.sqrt(h);
	                rx = h * rx;
	                ry = h * ry;
	            }
	            var rx2 = rx * rx,
	                ry2 = ry * ry,
	                k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                cx = k * rx * y / ry + (x1 + x2) / 2,
	                cy = k * -ry * x / rx + (y1 + y2) / 2,
	                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	            f1 = x1 < cx ? PI - f1 : f1;
	            f2 = x2 < cx ? PI - f2 : f2;
	            f1 < 0 && (f1 = PI * 2 + f1);
	            f2 < 0 && (f2 = PI * 2 + f2);
	            if (sweep_flag && f1 > f2) {
	                f1 = f1 - PI * 2;
	            }
	            if (!sweep_flag && f2 > f1) {
	                f2 = f2 - PI * 2;
	            }
	        } else {
	            f1 = recursive[0];
	            f2 = recursive[1];
	            cx = recursive[2];
	            cy = recursive[3];
	        }
	        var df = f2 - f1;
	        if (abs(df) > _120) {
	            var f2old = f2,
	                x2old = x2,
	                y2old = y2;
	            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	            x2 = cx + rx * math.cos(f2);
	            y2 = cy + ry * math.sin(f2);
	            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	        }
	        df = f2 - f1;
	        var c1 = math.cos(f1),
	            s1 = math.sin(f1),
	            c2 = math.cos(f2),
	            s2 = math.sin(f2),
	            t = math.tan(df / 4),
	            hx = 4 / 3 * rx * t,
	            hy = 4 / 3 * ry * t,
	            m1 = [x1, y1],
	            m2 = [x1 + hx * s1, y1 - hy * c1],
	            m3 = [x2 + hx * s2, y2 - hy * c2],
	            m4 = [x2, y2];
	        m2[0] = 2 * m1[0] - m2[0];
	        m2[1] = 2 * m1[1] - m2[1];
	        if (recursive) {
	            return [m2, m3, m4].concat(res);
	        } else {
	            res = [m2, m3, m4].concat(res).join().split(",");
	            var newres = [];
	            for (var i = 0, ii = res.length; i < ii; i++) {
	                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	            }
	            return newres;
	        }
	    }
	    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t;
	        return {
	            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	        };
	    }
	    
	    // Returns bounding box of cubic bezier curve.
	    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
	    // Original version: NISHIO Hirokazu
	    // Modifications: https://github.com/timo22345
	    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
	        var tvalues = [],
	            bounds = [[], []],
	            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
	        for (var i = 0; i < 2; ++i) {
	            if (i == 0) {
	                b = 6 * x0 - 12 * x1 + 6 * x2;
	                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
	                c = 3 * x1 - 3 * x0;
	            } else {
	                b = 6 * y0 - 12 * y1 + 6 * y2;
	                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
	                c = 3 * y1 - 3 * y0;
	            }
	            if (abs(a) < 1e-12) {
	                if (abs(b) < 1e-12) {
	                    continue;
	                }
	                t = -c / b;
	                if (0 < t && t < 1) {
	                    tvalues.push(t);
	                }
	                continue;
	            }
	            b2ac = b * b - 4 * c * a;
	            sqrtb2ac = math.sqrt(b2ac);
	            if (b2ac < 0) {
	                continue;
	            }
	            t1 = (-b + sqrtb2ac) / (2 * a);
	            if (0 < t1 && t1 < 1) {
	                tvalues.push(t1);
	            }
	            t2 = (-b - sqrtb2ac) / (2 * a);
	            if (0 < t2 && t2 < 1) {
	                tvalues.push(t2);
	            }
	        }

	        var x, y, j = tvalues.length,
	            jlen = j,
	            mt;
	        while (j--) {
	            t = tvalues[j];
	            mt = 1 - t;
	            bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
	            bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
	        }

	        bounds[0][jlen] = x0;
	        bounds[1][jlen] = y0;
	        bounds[0][jlen + 1] = x3;
	        bounds[1][jlen + 1] = y3;
	        bounds[0].length = bounds[1].length = jlen + 2;


	        return {
	          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
	          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
	        };
	    }

	    function path2curve(path, path2) {
	        var pth = !path2 && paths(path);
	        if (!path2 && pth.curve) {
	            return pathClone(pth.curve);
	        }
	        var p = pathToAbsolute(path),
	            p2 = path2 && pathToAbsolute(path2),
	            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	            processPath = function (path, d, pcom) {
	                var nx, ny;
	                if (!path) {
	                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                }
	                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
	                switch (path[0]) {
	                    case "M":
	                        d.X = path[1];
	                        d.Y = path[2];
	                        break;
	                    case "A":
	                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
	                        break;
	                    case "S":
	                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
	                            nx = d.x * 2 - d.bx;          // And reflect the previous
	                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
	                        }
	                        else {                            // or some else or nothing
	                            nx = d.x;
	                            ny = d.y;
	                        }
	                        path = ["C", nx, ny].concat(path.slice(1));
	                        break;
	                    case "T":
	                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
	                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
	                            d.qy = d.y * 2 - d.qy;        // to case "S".
	                        }
	                        else {                            // or something else or nothing
	                            d.qx = d.x;
	                            d.qy = d.y;
	                        }
	                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                        break;
	                    case "Q":
	                        d.qx = path[1];
	                        d.qy = path[2];
	                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                        break;
	                    case "L":
	                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
	                        break;
	                    case "H":
	                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
	                        break;
	                    case "V":
	                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
	                        break;
	                    case "Z":
	                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
	                        break;
	                }
	                return path;
	            },
	            fixArc = function (pp, i) {
	                if (pp[i].length > 7) {
	                    pp[i].shift();
	                    var pi = pp[i];
	                    while (pi.length) {
	                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
	                        p2 && (pcoms2[i] = "A"); // the same as above
	                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
	                    }
	                    pp.splice(i, 1);
	                    ii = mmax(p.length, p2 && p2.length || 0);
	                }
	            },
	            fixM = function (path1, path2, a1, a2, i) {
	                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                    path2.splice(i, 0, ["M", a2.x, a2.y]);
	                    a1.bx = 0;
	                    a1.by = 0;
	                    a1.x = path1[i][1];
	                    a1.y = path1[i][2];
	                    ii = mmax(p.length, p2 && p2.length || 0);
	                }
	            },
	            pcoms1 = [], // path commands of original path p
	            pcoms2 = [], // path commands of original path p2
	            pfirst = "", // temporary holder for original path command
	            pcom = ""; // holder for previous path command of original path
	        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
	            p[i] && (pfirst = p[i][0]); // save current path command

	            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
	            {
	                pcoms1[i] = pfirst; // Save current path command
	                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
	            }
	            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

	            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
	            // which may produce multiple C:s
	            // so we have to make sure that C is also C in original path

	            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

	            if (p2) { // the same procedures is done to p2
	                p2[i] && (pfirst = p2[i][0]);
	                if (pfirst != "C") {
	                    pcoms2[i] = pfirst;
	                    i && (pcom = pcoms2[i - 1]);
	                }
	                p2[i] = processPath(p2[i], attrs2, pcom);

	                if (pcoms2[i] != "A" && pfirst == "C") {
	                    pcoms2[i] = "C";
	                }

	                fixArc(p2, i);
	            }
	            fixM(p, p2, attrs, attrs2, i);
	            fixM(p2, p, attrs2, attrs, i);
	            var seg = p[i],
	                seg2 = p2 && p2[i],
	                seglen = seg.length,
	                seg2len = p2 && seg2.length;
	            attrs.x = seg[seglen - 2];
	            attrs.y = seg[seglen - 1];
	            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	            attrs2.x = p2 && seg2[seg2len - 2];
	            attrs2.y = p2 && seg2[seg2len - 1];
	        }
	        if (!p2) {
	            pth.curve = pathClone(p);
	        }
	        return p2 ? [p, p2] : p;
	    }
	    function mapPath(path, matrix) {
	        if (!matrix) {
	            return path;
	        }
	        var x, y, i, j, ii, jj, pathi;
	        path = path2curve(path);
	        for (i = 0, ii = path.length; i < ii; i++) {
	            pathi = path[i];
	            for (j = 1, jj = pathi.length; j < jj; j += 2) {
	                x = matrix.x(pathi[j], pathi[j + 1]);
	                y = matrix.y(pathi[j], pathi[j + 1]);
	                pathi[j] = x;
	                pathi[j + 1] = y;
	            }
	        }
	        return path;
	    }

	    // http://schepers.cc/getting-to-the-point
	    function catmullRom2bezier(crp, z) {
	        var d = [];
	        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
	            var p = [
	                        {x: +crp[i - 2], y: +crp[i - 1]},
	                        {x: +crp[i],     y: +crp[i + 1]},
	                        {x: +crp[i + 2], y: +crp[i + 3]},
	                        {x: +crp[i + 4], y: +crp[i + 5]}
	                    ];
	            if (z) {
	                if (!i) {
	                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
	                } else if (iLen - 4 == i) {
	                    p[3] = {x: +crp[0], y: +crp[1]};
	                } else if (iLen - 2 == i) {
	                    p[2] = {x: +crp[0], y: +crp[1]};
	                    p[3] = {x: +crp[2], y: +crp[3]};
	                }
	            } else {
	                if (iLen - 4 == i) {
	                    p[3] = p[2];
	                } else if (!i) {
	                    p[0] = {x: +crp[i], y: +crp[i + 1]};
	                }
	            }
	            d.push(["C",
	                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
	                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
	                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
	                  (p[1].y + 6*p[2].y - p[3].y) / 6,
	                  p[2].x,
	                  p[2].y
	            ]);
	        }

	        return d;
	    }

	    // export
	    Snap.path = paths;

	    /*\
	     * Snap.path.getTotalLength
	     [ method ]
	     **
	     * Returns the length of the given path in pixels
	     **
	     - path (string) SVG path string
	     **
	     = (number) length
	    \*/
	    Snap.path.getTotalLength = getTotalLength;
	    /*\
	     * Snap.path.getPointAtLength
	     [ method ]
	     **
	     * Returns the coordinates of the point located at the given length along the given path
	     **
	     - path (string) SVG path string
	     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate,
	     o     y: (number) y coordinate,
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    Snap.path.getPointAtLength = getPointAtLength;
	    /*\
	     * Snap.path.getSubpath
	     [ method ]
	     **
	     * Returns the subpath of a given path between given start and end lengths
	     **
	     - path (string) SVG path string
	     - from (number) length, in pixels, from the start of the path to the start of the segment
	     - to (number) length, in pixels, from the start of the path to the end of the segment
	     **
	     = (string) path string definition for the segment
	    \*/
	    Snap.path.getSubpath = function (path, from, to) {
	        if (this.getTotalLength(path) - to < 1e-6) {
	            return getSubpathsAtLength(path, from).end;
	        }
	        var a = getSubpathsAtLength(path, to, 1);
	        return from ? getSubpathsAtLength(a, from).end : a;
	    };
	    /*\
	     * Element.getTotalLength
	     [ method ]
	     **
	     * Returns the length of the path in pixels (only works for `path` elements)
	     = (number) length
	    \*/
	    elproto.getTotalLength = function () {
	        if (this.node.getTotalLength) {
	            return this.node.getTotalLength();
	        }
	    };
	    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
	    /*\
	     * Element.getPointAtLength
	     [ method ]
	     **
	     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
	     **
	     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate,
	     o     y: (number) y coordinate,
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    elproto.getPointAtLength = function (length) {
	        return getPointAtLength(this.attr("d"), length);
	    };
	    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
	    /*\
	     * Element.getSubpath
	     [ method ]
	     **
	     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
	     **
	     - from (number) length, in pixels, from the start of the path to the start of the segment
	     - to (number) length, in pixels, from the start of the path to the end of the segment
	     **
	     = (string) path string definition for the segment
	    \*/
	    elproto.getSubpath = function (from, to) {
	        return Snap.path.getSubpath(this.attr("d"), from, to);
	    };
	    Snap._.box = box;
	    /*\
	     * Snap.path.findDotsAtSegment
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds dot coordinates on the given cubic beziér curve at the given t
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     - t (number) position on the curve (0..1)
	     = (object) point information in format:
	     o {
	     o     x: (number) x coordinate of the point,
	     o     y: (number) y coordinate of the point,
	     o     m: {
	     o         x: (number) x coordinate of the left anchor,
	     o         y: (number) y coordinate of the left anchor
	     o     },
	     o     n: {
	     o         x: (number) x coordinate of the right anchor,
	     o         y: (number) y coordinate of the right anchor
	     o     },
	     o     start: {
	     o         x: (number) x coordinate of the start of the curve,
	     o         y: (number) y coordinate of the start of the curve
	     o     },
	     o     end: {
	     o         x: (number) x coordinate of the end of the curve,
	     o         y: (number) y coordinate of the end of the curve
	     o     },
	     o     alpha: (number) angle of the curve derivative at the point
	     o }
	    \*/
	    Snap.path.findDotsAtSegment = findDotsAtSegment;
	    /*\
	     * Snap.path.bezierBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns the bounding box of a given cubic beziér curve
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     * or
	     - bez (array) array of six points for beziér curve
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box,
	     o     y: (number) y coordinate of the left top point of the box,
	     o     x2: (number) x coordinate of the right bottom point of the box,
	     o     y2: (number) y coordinate of the right bottom point of the box,
	     o     width: (number) width of the box,
	     o     height: (number) height of the box
	     o }
	    \*/
	    Snap.path.bezierBBox = bezierBBox;
	    /*\
	     * Snap.path.isPointInsideBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside bounding box
	     - bbox (string) bounding box
	     - x (string) x coordinate of the point
	     - y (string) y coordinate of the point
	     = (boolean) `true` if point is inside
	    \*/
	    Snap.path.isPointInsideBBox = isPointInsideBBox;
	    Snap.closest = function (x, y, X, Y) {
	        var r = 100,
	            b = box(x - r / 2, y - r / 2, r, r),
	            inside = [],
	            getter = X[0].hasOwnProperty("x") ? function (i) {
	                return {
	                    x: X[i].x,
	                    y: X[i].y
	                };
	            } : function (i) {
	                return {
	                    x: X[i],
	                    y: Y[i]
	                };
	            },
	            found = 0;
	        while (r <= 1e6 && !found) {
	            for (var i = 0, ii = X.length; i < ii; i++) {
	                var xy = getter(i);
	                if (isPointInsideBBox(b, xy.x, xy.y)) {
	                    found++;
	                    inside.push(xy);
	                    break;
	                }
	            }
	            if (!found) {
	                r *= 2;
	                b = box(x - r / 2, y - r / 2, r, r)
	            }
	        }
	        if (r == 1e6) {
	            return;
	        }
	        var len = Infinity,
	            res;
	        for (i = 0, ii = inside.length; i < ii; i++) {
	            var l = Snap.len(x, y, inside[i].x, inside[i].y);
	            if (len > l) {
	                len = l;
	                inside[i].len = l;
	                res = inside[i];
	            }
	        }
	        return res;
	    };
	    /*\
	     * Snap.path.isBBoxIntersect
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if two bounding boxes intersect
	     - bbox1 (string) first bounding box
	     - bbox2 (string) second bounding box
	     = (boolean) `true` if bounding boxes intersect
	    \*/
	    Snap.path.isBBoxIntersect = isBBoxIntersect;
	    /*\
	     * Snap.path.intersection
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds intersections of two paths
	     - path1 (string) path string
	     - path2 (string) path string
	     = (array) dots of intersection
	     o [
	     o     {
	     o         x: (number) x coordinate of the point,
	     o         y: (number) y coordinate of the point,
	     o         t1: (number) t value for segment of path1,
	     o         t2: (number) t value for segment of path2,
	     o         segment1: (number) order number for segment of path1,
	     o         segment2: (number) order number for segment of path2,
	     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
	     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
	     o     }
	     o ]
	    \*/
	    Snap.path.intersection = pathIntersection;
	    Snap.path.intersectionNumber = pathIntersectionNumber;
	    /*\
	     * Snap.path.isPointInside
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside a given closed path.
	     *
	     * Note: fill mode doesn’t affect the result of this method.
	     - path (string) path string
	     - x (number) x of the point
	     - y (number) y of the point
	     = (boolean) `true` if point is inside the path
	    \*/
	    Snap.path.isPointInside = isPointInsidePath;
	    /*\
	     * Snap.path.getBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns the bounding box of a given path
	     - path (string) path string
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box,
	     o     y: (number) y coordinate of the left top point of the box,
	     o     x2: (number) x coordinate of the right bottom point of the box,
	     o     y2: (number) y coordinate of the right bottom point of the box,
	     o     width: (number) width of the box,
	     o     height: (number) height of the box
	     o }
	    \*/
	    Snap.path.getBBox = pathBBox;
	    Snap.path.get = getPath;
	    /*\
	     * Snap.path.toRelative
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path coordinates into relative values
	     - path (string) path string
	     = (array) path string
	    \*/
	    Snap.path.toRelative = pathToRelative;
	    /*\
	     * Snap.path.toAbsolute
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path coordinates into absolute values
	     - path (string) path string
	     = (array) path string
	    \*/
	    Snap.path.toAbsolute = pathToAbsolute;
	    /*\
	     * Snap.path.toCubic
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to a new path where all segments are cubic beziér curves
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments
	    \*/
	    Snap.path.toCubic = path2curve;
	    /*\
	     * Snap.path.map
	     [ method ]
	     **
	     * Transform the path string with the given matrix
	     - path (string) path string
	     - matrix (object) see @Matrix
	     = (string) transformed path string
	    \*/
	    Snap.path.map = mapPath;
	    Snap.path.toString = toString;
	    Snap.path.clone = pathClone;
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var mmax = Math.max,
	        mmin = Math.min;

	    // Set
	    var Set = function (items) {
	        this.items = [];
		this.bindings = {};
	        this.length = 0;
	        this.type = "set";
	        if (items) {
	            for (var i = 0, ii = items.length; i < ii; i++) {
	                if (items[i]) {
	                    this[this.items.length] = this.items[this.items.length] = items[i];
	                    this.length++;
	                }
	            }
	        }
	    },
	    setproto = Set.prototype;
	    /*\
	     * Set.push
	     [ method ]
	     **
	     * Adds each argument to the current set
	     = (object) original element
	    \*/
	    setproto.push = function () {
	        var item,
	            len;
	        for (var i = 0, ii = arguments.length; i < ii; i++) {
	            item = arguments[i];
	            if (item) {
	                len = this.items.length;
	                this[len] = this.items[len] = item;
	                this.length++;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.pop
	     [ method ]
	     **
	     * Removes last element and returns it
	     = (object) element
	    \*/
	    setproto.pop = function () {
	        this.length && delete this[this.length--];
	        return this.items.pop();
	    };
	    /*\
	     * Set.forEach
	     [ method ]
	     **
	     * Executes given function for each element in the set
	     *
	     * If the function returns `false`, the loop stops running.
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Set object
	    \*/
	    setproto.forEach = function (callback, thisArg) {
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            if (callback.call(thisArg, this.items[i], i) === false) {
	                return this;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.animate
	     [ method ]
	     **
	     * Animates each element in set in sync.
	     *
	     **
	     - attrs (object) key-value pairs of destination attributes
	     - duration (number) duration of the animation in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function that executes when the animation ends
	     * or
	     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
	     > Usage
	     | // animate all elements in set to radius 10
	     | set.animate({r: 10}, 500, mina.easein);
	     | // or
	     | // animate first element to radius 10, but second to radius 20 and in different time
	     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
	     = (Element) the current element
	    \*/
	    setproto.animate = function (attrs, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        if (attrs instanceof Snap._.Animation) {
	            callback = attrs.callback;
	            easing = attrs.easing;
	            ms = easing.dur;
	            attrs = attrs.attr;
	        }
	        var args = arguments;
	        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
	            var each = true;
	        }
	        var begin,
	            handler = function () {
	                if (begin) {
	                    this.b = begin;
	                } else {
	                    begin = this.b;
	                }
	            },
	            cb = 0,
	            set = this,
	            callbacker = callback && function () {
	                if (++cb == set.length) {
	                    callback.call(this);
	                }
	            };
	        return this.forEach(function (el, i) {
	            eve.once("snap.animcreated." + el.id, handler);
	            if (each) {
	                args[i] && el.animate.apply(el, args[i]);
	            } else {
	                el.animate(attrs, ms, easing, callbacker);
	            }
	        });
	    };
	    setproto.remove = function () {
	        while (this.length) {
	            this.pop().remove();
	        }
	        return this;
	    };
	    /*\
	     * Set.bind
	     [ method ]
	     **
	     * Specifies how to handle a specific attribute when applied
	     * to a set.
	     *
	     **
	     - attr (string) attribute name
	     - callback (function) function to run
	     * or
	     - attr (string) attribute name
	     - element (Element) specific element in the set to apply the attribute to
	     * or
	     - attr (string) attribute name
	     - element (Element) specific element in the set to apply the attribute to
	     - eattr (string) attribute on the element to bind the attribute to
	     = (object) Set object
	    \*/
	    setproto.bind = function (attr, a, b) {
	        var data = {};
	        if (typeof a == "function") {
	            this.bindings[attr] = a;
	        } else {
	            var aname = b || attr;
	            this.bindings[attr] = function (v) {
	                data[aname] = v;
	                a.attr(data);
	            };
	        }
	        return this;
	    };
	    setproto.attr = function (value) {
	        var unbound = {};
	        for (var k in value) {
	            if (this.bindings[k]) {
	                this.bindings[k](value[k]);
	            } else {
	                unbound[k] = value[k];
	            }
	        }
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            this.items[i].attr(unbound);
	        }
	        return this;
	    };
	    /*\
	     * Set.clear
	     [ method ]
	     **
	     * Removes all elements from the set
	    \*/
	    setproto.clear = function () {
	        while (this.length) {
	            this.pop();
	        }
	    };
	    /*\
	     * Set.splice
	     [ method ]
	     **
	     * Removes range of elements from the set
	     **
	     - index (number) position of the deletion
	     - count (number) number of element to remove
	     - insertion… (object) #optional elements to insert
	     = (object) set elements that were deleted
	    \*/
	    setproto.splice = function (index, count, insertion) {
	        index = index < 0 ? mmax(this.length + index, 0) : index;
	        count = mmax(0, mmin(this.length - index, count));
	        var tail = [],
	            todel = [],
	            args = [],
	            i;
	        for (i = 2; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        for (i = 0; i < count; i++) {
	            todel.push(this[index + i]);
	        }
	        for (; i < this.length - index; i++) {
	            tail.push(this[index + i]);
	        }
	        var arglen = args.length;
	        for (i = 0; i < arglen + tail.length; i++) {
	            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
	        }
	        i = this.items.length = this.length -= count - arglen;
	        while (this[i]) {
	            delete this[i++];
	        }
	        return new Set(todel);
	    };
	    /*\
	     * Set.exclude
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     - element (object) element to remove
	     = (boolean) `true` if object was found and removed from the set
	    \*/
	    setproto.exclude = function (el) {
	        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
	            this.splice(i, 1);
	            return true;
	        }
	        return false;
	    };
	    setproto.insertAfter = function (el) {
	        var i = this.items.length;
	        while (i--) {
	            this.items[i].insertAfter(el);
	        }
	        return this;
	    };
	    setproto.getBBox = function () {
	        var x = [],
	            y = [],
	            x2 = [],
	            y2 = [];
	        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
	            var box = this.items[i].getBBox();
	            x.push(box.x);
	            y.push(box.y);
	            x2.push(box.x + box.width);
	            y2.push(box.y + box.height);
	        }
	        x = mmin.apply(0, x);
	        y = mmin.apply(0, y);
	        x2 = mmax.apply(0, x2);
	        y2 = mmax.apply(0, y2);
	        return {
	            x: x,
	            y: y,
	            x2: x2,
	            y2: y2,
	            width: x2 - x,
	            height: y2 - y,
	            cx: x + (x2 - x) / 2,
	            cy: y + (y2 - y) / 2
	        };
	    };
	    setproto.clone = function (s) {
	        s = new Set;
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            s.push(this.items[i].clone());
	        }
	        return s;
	    };
	    setproto.toString = function () {
	        return "Snap\u2018s set";
	    };
	    setproto.type = "set";
	    // export
	    Snap.Set = Set;
	    Snap.set = function () {
	        var set = new Set;
	        if (arguments.length) {
	            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
	        }
	        return set;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var names = {},
	        reUnit = /[a-z]+$/i,
	        Str = String;
	    names.stroke = names.fill = "colour";
	    function getEmpty(item) {
	        var l = item[0];
	        switch (l.toLowerCase()) {
	            case "t": return [l, 0, 0];
	            case "m": return [l, 1, 0, 0, 1, 0, 0];
	            case "r": if (item.length == 4) {
	                return [l, 0, item[2], item[3]];
	            } else {
	                return [l, 0];
	            }
	            case "s": if (item.length == 5) {
	                return [l, 1, 1, item[3], item[4]];
	            } else if (item.length == 3) {
	                return [l, 1, 1];
	            } else {
	                return [l, 1];
	            }
	        }
	    }
	    function equaliseTransform(t1, t2, getBBox) {
	        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
	        t1 = Snap.parseTransformString(t1) || [];
	        t2 = Snap.parseTransformString(t2) || [];
	        var maxlength = Math.max(t1.length, t2.length),
	            from = [],
	            to = [],
	            i = 0, j, jj,
	            tt1, tt2;
	        for (; i < maxlength; i++) {
	            tt1 = t1[i] || getEmpty(t2[i]);
	            tt2 = t2[i] || getEmpty(tt1);
	            if ((tt1[0] != tt2[0]) ||
	                (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
	                (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
	                ) {
	                    t1 = Snap._.transform2matrix(t1, getBBox());
	                    t2 = Snap._.transform2matrix(t2, getBBox());
	                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
	                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
	                    break;
	            }
	            from[i] = [];
	            to[i] = [];
	            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
	                j in tt1 && (from[i][j] = tt1[j]);
	                j in tt2 && (to[i][j] = tt2[j]);
	            }
	        }
	        return {
	            from: path2array(from),
	            to: path2array(to),
	            f: getPath(from)
	        };
	    }
	    function getNumber(val) {
	        return val;
	    }
	    function getUnit(unit) {
	        return function (val) {
	            return +val.toFixed(3) + unit;
	        };
	    }
	    function getViewBox(val) {
	        return val.join(" ");
	    }
	    function getColour(clr) {
	        return Snap.rgb(clr[0], clr[1], clr[2]);
	    }
	    function getPath(path) {
	        var k = 0, i, ii, j, jj, out, a, b = [];
	        for (i = 0, ii = path.length; i < ii; i++) {
	            out = "[";
	            a = ['"' + path[i][0] + '"'];
	            for (j = 1, jj = path[i].length; j < jj; j++) {
	                a[j] = "val[" + (k++) + "]";
	            }
	            out += a + "]";
	            b[i] = out;
	        }
	        return Function("val", "return Snap.path.toString.call([" + b + "])");
	    }
	    function path2array(path) {
	        var out = [];
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            for (var j = 1, jj = path[i].length; j < jj; j++) {
	                out.push(path[i][j]);
	            }
	        }
	        return out;
	    }
	    function isNumeric(obj) {
	        return isFinite(parseFloat(obj));
	    }
	    function arrayEqual(arr1, arr2) {
	        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
	            return false;
	        }
	        return arr1.toString() == arr2.toString();
	    }
	    Element.prototype.equal = function (name, b) {
	        return eve("snap.util.equal", this, name, b).firstDefined();
	    };
	    eve.on("snap.util.equal", function (name, b) {
	        var A, B, a = Str(this.attr(name) || ""),
	            el = this;
	        if (isNumeric(a) && isNumeric(b)) {
	            return {
	                from: parseFloat(a),
	                to: parseFloat(b),
	                f: getNumber
	            };
	        }
	        if (names[name] == "colour") {
	            A = Snap.color(a);
	            B = Snap.color(b);
	            return {
	                from: [A.r, A.g, A.b, A.opacity],
	                to: [B.r, B.g, B.b, B.opacity],
	                f: getColour
	            };
	        }
	        if (name == "viewBox") {
	            A = this.attr(name).vb.split(" ").map(Number);
	            B = b.split(" ").map(Number);
	            return {
	                from: A,
	                to: B,
	                f: getViewBox
	            };
	        }
	        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
	            if (b instanceof Snap.Matrix) {
	                b = b.toTransformString();
	            }
	            if (!Snap._.rgTransform.test(b)) {
	                b = Snap._.svgTransform2string(b);
	            }
	            return equaliseTransform(a, b, function () {
	                return el.getBBox(1);
	            });
	        }
	        if (name == "d" || name == "path") {
	            A = Snap.path.toCubic(a, b);
	            return {
	                from: path2array(A[0]),
	                to: path2array(A[1]),
	                f: getPath(A[0])
	            };
	        }
	        if (name == "points") {
	            A = Str(a).split(Snap._.separator);
	            B = Str(b).split(Snap._.separator);
	            return {
	                from: A,
	                to: B,
	                f: function (val) { return val; }
	            };
	        }
	        var aUnit = a.match(reUnit),
	            bUnit = Str(b).match(reUnit);
	        if (aUnit && arrayEqual(aUnit, bUnit)) {
	            return {
	                from: parseFloat(a),
	                to: parseFloat(b),
	                f: getUnit(aUnit)
	            };
	        } else {
	            return {
	                from: this.asPX(name),
	                to: this.asPX(name, b),
	                f: getNumber
	            };
	        }
	    });
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	    has = "hasOwnProperty",
	    supportsTouch = "createTouch" in glob.doc,
	    events = [
	        "click", "dblclick", "mousedown", "mousemove", "mouseout",
	        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
	        "touchcancel"
	    ],
	    touchMap = {
	        mousedown: "touchstart",
	        mousemove: "touchmove",
	        mouseup: "touchend"
	    },
	    getScroll = function (xy, el) {
	        var name = xy == "y" ? "scrollTop" : "scrollLeft",
	            doc = el && el.node ? el.node.ownerDocument : glob.doc;
	        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
	    },
	    preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    addEvent = function (obj, type, fn, element) {
	        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
	            f = function (e) {
	                var scrollY = getScroll("y", element),
	                    scrollX = getScroll("x", element);
	                if (supportsTouch && touchMap[has](type)) {
	                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
	                            var olde = e;
	                            e = e.targetTouches[i];
	                            e.originalEvent = olde;
	                            e.preventDefault = preventTouch;
	                            e.stopPropagation = stopTouch;
	                            break;
	                        }
	                    }
	                }
	                var x = e.clientX + scrollX,
	                    y = e.clientY + scrollY;
	                return fn.call(element, e, x, y);
	            };

	        if (type !== realName) {
	            obj.addEventListener(type, f, false);
	        }

	        obj.addEventListener(realName, f, false);

	        return function () {
	            if (type !== realName) {
	                obj.removeEventListener(type, f, false);
	            }

	            obj.removeEventListener(realName, f, false);
	            return true;
	        };
	    },
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = getScroll("y"),
	            scrollX = getScroll("x"),
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch) {
	                var i = e.touches && e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            var node = dragi.el.node,
	                o,
	                next = node.nextSibling,
	                parent = node.parentNode,
	                display = node.style.display;
	            // glob.win.opera && parent.removeChild(node);
	            // node.style.display = "none";
	            // o = dragi.el.paper.getElementByPoint(x, y);
	            // node.style.display = display;
	            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
	            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
	            x += scrollX;
	            y += scrollY;
	            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        Snap.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	            eve.off("snap.drag.*." + dragi.el.id);
	        }
	        drag = [];
	    };
	    /*\
	     * Element.click
	     [ method ]
	     **
	     * Adds a click event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unclick
	     [ method ]
	     **
	     * Removes a click event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.dblclick
	     [ method ]
	     **
	     * Adds a double click event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.undblclick
	     [ method ]
	     **
	     * Removes a double click event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.mousedown
	     [ method ]
	     **
	     * Adds a mousedown event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousedown
	     [ method ]
	     **
	     * Removes a mousedown event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.mousemove
	     [ method ]
	     **
	     * Adds a mousemove event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousemove
	     [ method ]
	     **
	     * Removes a mousemove event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.mouseout
	     [ method ]
	     **
	     * Adds a mouseout event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseout
	     [ method ]
	     **
	     * Removes a mouseout event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.mouseover
	     [ method ]
	     **
	     * Adds a mouseover event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseover
	     [ method ]
	     **
	     * Removes a mouseover event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.mouseup
	     [ method ]
	     **
	     * Adds a mouseup event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseup
	     [ method ]
	     **
	     * Removes a mouseup event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.touchstart
	     [ method ]
	     **
	     * Adds a touchstart event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchstart
	     [ method ]
	     **
	     * Removes a touchstart event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.touchmove
	     [ method ]
	     **
	     * Adds a touchmove event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchmove
	     [ method ]
	     **
	     * Removes a touchmove event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.touchend
	     [ method ]
	     **
	     * Adds a touchend event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchend
	     [ method ]
	     **
	     * Removes a touchend event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    
	    /*\
	     * Element.touchcancel
	     [ method ]
	     **
	     * Adds a touchcancel event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchcancel
	     [ method ]
	     **
	     * Removes a touchcancel event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    for (var i = events.length; i--;) {
	        (function (eventName) {
	            Snap[eventName] = elproto[eventName] = function (fn, scope) {
	                if (Snap.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({
	                        name: eventName,
	                        f: fn,
	                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
	                    });
	                } else {
	                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
	                        try {
	                            this.events[i].f.call(this);
	                        } catch (e) {}
	                    }
	                }
	                return this;
	            };
	            Snap["un" + eventName] =
	            elproto["un" + eventName] = function (fn) {
	                var events = this.events || [],
	                    l = events.length;
	                while (l--) if (events[l].name == eventName &&
	                               (events[l].f == fn || !fn)) {
	                    events[l].unbind();
	                    events.splice(l, 1);
	                    !events.length && delete this.events;
	                    return this;
	                }
	                return this;
	            };
	        })(events[i]);
	    }
	    /*\
	     * Element.hover
	     [ method ]
	     **
	     * Adds hover event handlers to the element
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     - icontext (object) #optional context for hover in handler
	     - ocontext (object) #optional context for hover out handler
	     = (object) @Element
	    \*/
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    /*\
	     * Element.unhover
	     [ method ]
	     **
	     * Removes hover event handlers from the element
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     = (object) @Element
	    \*/
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    var draggable = [];
	    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
	    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
	    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
	    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
	    /*\
	     * Element.drag
	     [ method ]
	     **
	     * Adds event handlers for an element's drag gesture
	     **
	     - onmove (function) handler for moving
	     - onstart (function) handler for drag start
	     - onend (function) handler for drag end
	     - mcontext (object) #optional context for moving handler
	     - scontext (object) #optional context for drag start handler
	     - econtext (object) #optional context for drag end handler
	     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
	     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
	     * `drag.over.<id>` fires as well.
	     *
	     * Start event and start handler are called in specified context or in context of the element with following parameters:
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * Move event and move handler are called in specified context or in context of the element with following parameters:
	     o dx (number) shift by x from the start point
	     o dy (number) shift by y from the start point
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * End event and end handler are called in specified context or in context of the element with following parameters:
	     o event (object) DOM event object
	     = (object) @Element
	    \*/
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        var el = this;
	        if (!arguments.length) {
	            var origTransform;
	            return el.drag(function (dx, dy) {
	                this.attr({
	                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
	                });
	            }, function () {
	                origTransform = this.transform().local;
	            });
	        }
	        function start(e, x, y) {
	            (e.originalEvent || e).preventDefault();
	            el._drag.x = x;
	            el._drag.y = y;
	            el._drag.id = e.identifier;
	            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
	            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
	            onstart && eve.on("snap.drag.start." + el.id, onstart);
	            onmove && eve.on("snap.drag.move." + el.id, onmove);
	            onend && eve.on("snap.drag.end." + el.id, onend);
	            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
	        }
	        function init(e, x, y) {
	            eve("snap.draginit." + el.id, el, e, x, y);
	        }
	        eve.on("snap.draginit." + el.id, start);
	        el._drag = {};
	        draggable.push({el: el, start: start, init: init});
	        el.mousedown(init);
	        return el;
	    };
	    /*
	     * Element.onDragOver
	     [ method ]
	     **
	     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
	     - f (function) handler for event, first argument would be the element you are dragging over
	    \*/
	    // elproto.onDragOver = function (f) {
	    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
	    // };
	    /*\
	     * Element.undrag
	     [ method ]
	     **
	     * Removes all drag event handlers from the given element
	    \*/
	    elproto.undrag = function () {
	        var i = draggable.length;
	        while (i--) if (draggable[i].el == this) {
	            this.unmousedown(draggable[i].init);
	            draggable.splice(i, 1);
	            eve.unbind("snap.drag.*." + this.id);
	            eve.unbind("snap.draginit." + this.id);
	        }
	        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
	        return this;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	        pproto = Paper.prototype,
	        rgurl = /^\s*url\((.+)\)/,
	        Str = String,
	        $ = Snap._.$;
	    Snap.filter = {};
	    /*\
	     * Paper.filter
	     [ method ]
	     **
	     * Creates a `<filter>` element
	     **
	     - filstr (string) SVG fragment of filter provided as a string
	     = (object) @Element
	     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
	     > Usage
	     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    pproto.filter = function (filstr) {
	        var paper = this;
	        if (paper.type != "svg") {
	            paper = paper.paper;
	        }
	        var f = Snap.parse(Str(filstr)),
	            id = Snap._.id(),
	            width = paper.node.offsetWidth,
	            height = paper.node.offsetHeight,
	            filter = $("filter");
	        $(filter, {
	            id: id,
	            filterUnits: "userSpaceOnUse"
	        });
	        filter.appendChild(f.node);
	        paper.defs.appendChild(filter);
	        return new Element(filter);
	    };
	    
	    eve.on("snap.util.getattr.filter", function () {
	        eve.stop();
	        var p = $(this.node, "filter");
	        if (p) {
	            var match = Str(p).match(rgurl);
	            return match && Snap.select(match[1]);
	        }
	    });
	    eve.on("snap.util.attr.filter", function (value) {
	        if (value instanceof Element && value.type == "filter") {
	            eve.stop();
	            var id = value.node.id;
	            if (!id) {
	                $(value.node, {id: value.id});
	                id = value.id;
	            }
	            $(this.node, {
	                filter: Snap.url(id)
	            });
	        }
	        if (!value || value == "none") {
	            eve.stop();
	            this.node.removeAttribute("filter");
	        }
	    });
	    /*\
	     * Snap.filter.blur
	     [ method ]
	     **
	     * Returns an SVG markup string for the blur filter
	     **
	     - x (number) amount of horizontal blur, in pixels
	     - y (number) #optional amount of vertical blur, in pixels
	     = (string) filter representation
	     > Usage
	     | var f = paper.filter(Snap.filter.blur(5, 10)),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    Snap.filter.blur = function (x, y) {
	        if (x == null) {
	            x = 2;
	        }
	        var def = y == null ? x : [x, y];
	        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
	            def: def
	        });
	    };
	    Snap.filter.blur.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.shadow
	     [ method ]
	     **
	     * Returns an SVG markup string for the shadow filter
	     **
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - blur (number) #optional amount of blur
	     - color (string) #optional color of the shadow
	     - opacity (number) #optional `0..1` opacity of the shadow
	     * or
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - color (string) #optional color of the shadow
	     - opacity (number) #optional `0..1` opacity of the shadow
	     * which makes blur default to `4`. Or
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - opacity (number) #optional `0..1` opacity of the shadow
	     = (string) filter representation
	     > Usage
	     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
	        if (typeof blur == "string") {
	            color = blur;
	            opacity = color;
	            blur = 4;
	        }
	        if (typeof color != "string") {
	            opacity = color;
	            color = "#000";
	        }
	        color = color || "#000";
	        if (blur == null) {
	            blur = 4;
	        }
	        if (opacity == null) {
	            opacity = 1;
	        }
	        if (dx == null) {
	            dx = 0;
	            dy = 2;
	        }
	        if (dy == null) {
	            dy = dx;
	        }
	        color = Snap.color(color);
	        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
	            color: color,
	            dx: dx,
	            dy: dy,
	            blur: blur,
	            opacity: opacity
	        });
	    };
	    Snap.filter.shadow.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.grayscale
	     [ method ]
	     **
	     * Returns an SVG markup string for the grayscale filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.grayscale = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
	            a: 0.2126 + 0.7874 * (1 - amount),
	            b: 0.7152 - 0.7152 * (1 - amount),
	            c: 0.0722 - 0.0722 * (1 - amount),
	            d: 0.2126 - 0.2126 * (1 - amount),
	            e: 0.7152 + 0.2848 * (1 - amount),
	            f: 0.0722 - 0.0722 * (1 - amount),
	            g: 0.2126 - 0.2126 * (1 - amount),
	            h: 0.0722 + 0.9278 * (1 - amount)
	        });
	    };
	    Snap.filter.grayscale.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.sepia
	     [ method ]
	     **
	     * Returns an SVG markup string for the sepia filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.sepia = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
	            a: 0.393 + 0.607 * (1 - amount),
	            b: 0.769 - 0.769 * (1 - amount),
	            c: 0.189 - 0.189 * (1 - amount),
	            d: 0.349 - 0.349 * (1 - amount),
	            e: 0.686 + 0.314 * (1 - amount),
	            f: 0.168 - 0.168 * (1 - amount),
	            g: 0.272 - 0.272 * (1 - amount),
	            h: 0.534 - 0.534 * (1 - amount),
	            i: 0.131 + 0.869 * (1 - amount)
	        });
	    };
	    Snap.filter.sepia.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.saturate
	     [ method ]
	     **
	     * Returns an SVG markup string for the saturate filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.saturate = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
	            amount: 1 - amount
	        });
	    };
	    Snap.filter.saturate.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.hueRotate
	     [ method ]
	     **
	     * Returns an SVG markup string for the hue-rotate filter
	     **
	     - angle (number) angle of rotation
	     = (string) filter representation
	    \*/
	    Snap.filter.hueRotate = function (angle) {
	        angle = angle || 0;
	        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
	            angle: angle
	        });
	    };
	    Snap.filter.hueRotate.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.invert
	     [ method ]
	     **
	     * Returns an SVG markup string for the invert filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.invert = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
	        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
	            amount: amount,
	            amount2: 1 - amount
	        });
	    };
	    Snap.filter.invert.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.brightness
	     [ method ]
	     **
	     * Returns an SVG markup string for the brightness filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.brightness = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
	            amount: amount
	        });
	    };
	    Snap.filter.brightness.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.contrast
	     [ method ]
	     **
	     * Returns an SVG markup string for the contrast filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.contrast = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
	            amount: amount,
	            amount2: .5 - amount / 2
	        });
	    };
	    Snap.filter.contrast.toString = function () {
	        return this();
	    };
	});

	// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var box = Snap._.box,
	        is = Snap.is,
	        firstLetter = /^[^a-z]*([tbmlrc])/i,
	        toString = function () {
	            return "T" + this.dx + "," + this.dy;
	        };
	    /*\
	     * Element.getAlign
	     [ method ]
	     **
	     * Returns shift needed to align the element relatively to given element.
	     * If no elements specified, parent `<svg>` container will be used.
	     - el (object) @optional alignment element
	     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
	     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
	     > Usage
	     | el.transform(el.getAlign(el2, "top"));
	     * or
	     | var dy = el.getAlign(el2, "top").dy;
	    \*/
	    Element.prototype.getAlign = function (el, way) {
	        if (way == null && is(el, "string")) {
	            way = el;
	            el = null;
	        }
	        el = el || this.paper;
	        var bx = el.getBBox ? el.getBBox() : box(el),
	            bb = this.getBBox(),
	            out = {};
	        way = way && way.match(firstLetter);
	        way = way ? way[1].toLowerCase() : "c";
	        switch (way) {
	            case "t":
	                out.dx = 0;
	                out.dy = bx.y - bb.y;
	            break;
	            case "b":
	                out.dx = 0;
	                out.dy = bx.y2 - bb.y2;
	            break;
	            case "m":
	                out.dx = 0;
	                out.dy = bx.cy - bb.cy;
	            break;
	            case "l":
	                out.dx = bx.x - bb.x;
	                out.dy = 0;
	            break;
	            case "r":
	                out.dx = bx.x2 - bb.x2;
	                out.dy = 0;
	            break;
	            default:
	                out.dx = bx.cx - bb.cx;
	                out.dy = 0;
	            break;
	        }
	        out.toString = toString;
	        return out;
	    };
	    /*\
	     * Element.align
	     [ method ]
	     **
	     * Aligns the element relatively to given one via transformation.
	     * If no elements specified, parent `<svg>` container will be used.
	     - el (object) @optional alignment element
	     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
	     = (object) this element
	     > Usage
	     | el.align(el2, "top");
	     * or
	     | el.align("middle");
	    \*/
	    Element.prototype.align = function (el, way) {
	        return this.transform("..." + this.getAlign(el, way));
	    };
	});

	return Snap;
	}));
	}.call(window));

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.18.6
	 * DATE: 2016-07-12
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.0",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.0",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]}; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(394)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=b())}("TimelineMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, $) {/*!
	 * VERSION: 1.19.0
	 * DATE: 2016-07-16
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	!function(a,b){"use strict";var c={},d=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!d.TweenLite){var e,f,g,h,i,j=function(a){var b,c=a.split("."),e=d;for(b=0;b<c.length;b++)e[c[b]]=e=e[c[b]]||{};return e},k=j("com.greensock"),l=1e-10,m=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},n=function(){},o=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),p={},q=function(e,f,g,h){this.sc=p[e]?p[e].sc:[],p[e]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(k){for(var l,m,n,o,r,s=f.length,t=s;--s>-1;)(l=p[f[s]]||new q(f[s],[])).gsClass?(i[s]=l.gsClass,t--):k&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+e).split("."),n=m.pop(),o=j(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(d[n]=c[n]=o,r="undefined"!=typeof module&&module.exports,!r&&"function"=="function"&&__webpack_require__(395))!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if(r)if(e===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},r=a._gsDefine=function(a,b,c,d){return new q(a,b,c,d)},s=k._class=function(a,b,c){return b=b||function(){},r(a,[],function(){return b},c),b};r.globals=d;var t=[0,0,1,1],u=s("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?t.concat(b):t},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?s("easing."+f,null,!0):k.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(g=u.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,w(new u(null,null,1,f),g,"easeOut",!0),w(new u(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),w(new u(null,null,3,f),g,"easeInOut");v.linear=k.easing.Linear.easeIn,v.swing=k.easing.Quad.easeInOut;var x=s("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=x.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,j=this._listeners[a],k=0;for(this!==h||i||h.wake(),null==j&&(this._listeners[a]=j=[]),g=j.length;--g>-1;)f=j[g],f.c===b&&f.s===c?j.splice(g,1):0===k&&f.pr<e&&(k=g+1);j.splice(k,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},g.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!y;)y=a[e[f]+"RequestAnimationFrame"],z=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];s("Ticker",function(a,b){var c,d,e,f,g,j=this,k=A(),m=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,h,i=A()-B;i>o&&(k+=i-p),B+=i,j.time=(B-k)/1e3,b=j.time-g,(!c||b>0||a===!0)&&(j.frame++,g+=b+(b>=f?.004:f-b),h=!0),a!==!0&&(e=d(r)),h&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/l,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(m&&z?z(e):clearTimeout(e),d=n,e=null,j===h&&(i=!1))},j.wake=function(a){null!==e?j.sleep():a?k+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?n:m&&y?y:function(a){return setTimeout(a,1e3*(g-j.time)+1|0)},j===h&&(i=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),g=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),m=a,void j.fps(c)):m},j.fps(a),setTimeout(function(){"auto"===m&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),g=k.Ticker.prototype=new k.events.EventDispatcher,g.constructor=k.Ticker;var C=s("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){i||h.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});h=C.ticker=new k.Ticker,g=C.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1;var D=function(){i&&A()-B>2e3&&h.wake(),setTimeout(D,2e3)};D(),g.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},g.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},g.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},g.render=function(a,b,c){},g.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},g.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},g._enabled=function(a,b){return i||h.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},g._kill=function(a,b){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},g._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},g.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=o(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},g.totalTime=function(a,b,c){if(i||h.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},g.progress=g.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||l,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},g.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(i||a||h.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=s("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=E.prototype=new C,g.constructor=E,g.kill()._gc=!1,g._first=g._last=g._recent=null,g._sortChildren=!1,g.add=g.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},g.rawTime=function(){return i||h.wake(),this._totalTime};var F=s("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&o(b))&&"number"!=typeof b[0])for(this._targets=g=m(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(m(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-l,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};g=F.prototype=new C,g.constructor=F,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=g._lazy=!1,F.version="1.19.0",F.defaultEase=g._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=h,F.autoSleep=120,F.lagSmoothing=function(a,b){h.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k,l="get"===c?a[b]:c,m=typeof a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:l,f:"function"===m,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-l||0};return"number"!==m&&("function"===m&&"get"===c&&(k=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),o.s=l=g?a[k](g):a[k]()),"string"==typeof l&&(g||isNaN(l))?(o.fp=g,j=M(l,d,h||F.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):n||(o.s=parseFloat(l),o.c=parseFloat(d)-o.s||0)),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},O=F._internals={isArray:o,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=h.time,U._startTime=h.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((h.time-V._startTime)*V._timeScale,!1,!1),U.render((h.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),h.frame>=W){W=h.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===h._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||h.sleep()}}},h.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+l,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*l>f-b?l:(f+=a.totalDuration()/a._timeScale/e)>b+l?0:f-b-l};g._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)S[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=F.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof u?k:"function"==typeof k?new u(k,g.easeParams):v[k]||F.defaultEase:F.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&F._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},g._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(g in this.vars)if(l=this.vars[g],S[g])l&&(l instanceof Array||l.push&&o(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(P[g]&&(j=new P[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=N.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),i)},g.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===l&&"isPause"!==this.data)&&j!==a&&(c=!0,j>l&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:l);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==l||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:l)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&k>=.5)&&(k=1-k),3===m&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===m?this.ratio=1-k:2===m?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===l&&g!==l&&(this._rawPrevTime=0))}},g._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((o(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},g.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-l,this.render(Math.min(0,-this._delay))),this},g._enabled=function(a,b){if(i||h.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((o(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=s("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(g=aa.prototype,aa.version="1.19.0",aa.API=2,g._firstPT=null,g._addTween=N,g.setRatio=L,g._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},g._mod=g._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},r.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=s("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},e=a._gsQueue){for(f=0;f<e.length;f++)e[f]();for(g in p)p[g].func||a.console.log("GSAP encountered missing dependency: "+g)}i=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(299)))

/***/ },
/* 395 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getIterator2 = __webpack_require__(397);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(302);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(328);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(329);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _createClass2 = __webpack_require__(376);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _inherits2 = __webpack_require__(380);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _BaseControl2 = __webpack_require__(388);

	var _BaseControl3 = _interopRequireDefault(_BaseControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FunctionControl = function (_BaseControl) {
	    (0, _inherits3.default)(FunctionControl, _BaseControl);
	    (0, _createClass3.default)(FunctionControl, null, [{
	        key: "getInst",
	        value: function getInst() {
	            FunctionControl._inst = FunctionControl._inst || new FunctionControl();

	            return FunctionControl._inst;
	        }

	        /**
	         * 构造
	         */

	        /**
	         * 单例
	         */

	    }]);

	    function FunctionControl() {
	        (0, _classCallCheck3.default)(this, FunctionControl);
	        return (0, _possibleConstructorReturn3.default)(this, (FunctionControl.__proto__ || (0, _getPrototypeOf2.default)(FunctionControl)).call(this));
	    }

	    /**
	     * 初始化事件
	     */


	    (0, _createClass3.default)(FunctionControl, [{
	        key: "init",
	        value: function init(app) {
	            this.app = app; //绑定AppControl到当前对象
	            /**
	             * 按钮
	             */
	            this.container = this.app.$view.find(".ParallelLines_footer");
	            this.lineLengthBtn = this.app.$view.find(".lineHeight"); //线段长度
	            this.proportionBtn = this.app.$view.find(".proportion"); //线段比例
	            this.addParallelBtn = this.app.$view.find(".addParallel"); //增加平行线
	            this.deleteParallelBtn = this.app.$view.find(".deleteParallel"); //删除平行线
	            this.playBtn = this.app.$view.find(".play"); //播放按钮
	            this.pauseBtn = this.app.$view.find(".pause"); //暂停按钮
	            this.resetBtn = this.app.$view.find(".reset"); //重置按钮
	            this.bindEvent();
	            return this;
	        }

	        /**
	         * 绑定事件
	         */

	    }, {
	        key: "bindEvent",
	        value: function bindEvent() {
	            var that = this;
	            this.container.on("click", 'li', function (e) {
	                e.stopPropagation();
	                var $target = $(this);
	                if ($target.hasClass('disabled')) {
	                    return;
	                }
	                if ($target.hasClass('reset')) {
	                    var lineAAngle = 65 * Math.PI / 180,
	                        lineBAngle = 100 * Math.PI / 180;

	                    that.app.data.animateShow = 0;
	                    that.app.data.segmentLengthShow = 0;
	                    that.app.data.segmentRatioShow = 0;
	                    that.app.data.segmentShow = [];
	                    that.app.data.showParallelLines = ['l1', 'l2', 'l3'];
	                    that.app.data.selectedParallelLine = '';
	                    that.app.data.formulaNeedUpdate = false;
	                    that.app.data.reset = 0;
	                    /*
	                     重置相交线的位置和角度
	                     */
	                    that.app.data.lineAX = -that.app.data.lineAX;
	                    that.app.data.lineBX = -that.app.data.lineBX;
	                    that.app.config.lineAX = that.app.config.initLeftratios[0] * that.app.GraphControl.svgWidth;
	                    that.app.config.lineBX = that.app.config.initLeftratios[1] * that.app.GraphControl.svgWidth;
	                    that.app.data.lineAAngle = lineAAngle;
	                    that.app.data.lineBAngle = lineBAngle;

	                    /*
	                    重置平行线的位置
	                     */
	                    that.app.data.y1 = -that.app.data.y1;
	                    that.app.data.y2 = -that.app.data.y2;
	                    that.app.data.y3 = -that.app.data.y3;
	                    that.app.data.y4 = -that.app.data.y4;
	                    that.app.data.y5 = -that.app.data.y5;

	                    return;
	                }
	                that.app.data.reset = 1;
	                if ($target.hasClass('play')) {
	                    that.app.data.animateShow = 1;
	                    that.app.data.selectedParallelLine = '';
	                    return;
	                }
	                if ($target.hasClass('pause')) {
	                    that.app.data.animateShow = 2;
	                    return;
	                }
	                if ($target.hasClass('lineHeight')) {
	                    that.app.data.segmentLengthShow = +!that.app.data.segmentLengthShow;
	                    return;
	                }
	                if ($target.hasClass('proportion')) {
	                    that.app.data.segmentRatioShow = +!that.app.data.segmentRatioShow;
	                    return;
	                }
	                if ($target.hasClass('addParallel')) {
	                    var showParallelLines = that.app.data.showParallelLines.concat();
	                    showParallelLines.push(that._nextLine(showParallelLines));
	                    that.app.data.showParallelLines = showParallelLines.concat();
	                    return;
	                }
	                if ($target.hasClass('deleteParallel') && that.app.data) {
	                    var _showParallelLines = that.app.data.showParallelLines.concat();
	                    var index = null;
	                    for (var i = 0; i < _showParallelLines.length; i++) {
	                        if (_showParallelLines[i] === that.app.data.selectedParallelLine) {
	                            index = i;
	                            break;
	                        }
	                    }
	                    _showParallelLines.splice(index, 1);
	                    that.app.data.showParallelLines = _showParallelLines.concat();
	                    that.app.data.selectedParallelLine = '';
	                    return;
	                }
	            });
	        }

	        /**
	         * 更新按钮状态
	         * @param item 被更新的数据项的名称
	         * @param value 被更新的数据项的值
	         * @param parallelLength 当前平行线的条数,可选，在更新selectedParallelLine时需传入
	         */

	    }, {
	        key: "updateButtonState",
	        value: function updateButtonState(item, value, parallelLength) {
	            switch (item) {
	                case 'animateShow':
	                    {
	                        /*
	                        更新其他关系的按钮状态
	                         */
	                        if (value > 0) {
	                            this.proportionBtn.addClass("disabled");
	                            this.addParallelBtn.addClass("disabled");
	                            this.deleteParallelBtn.addClass("disabled");
	                        } else {
	                            this.proportionBtn.removeClass("disabled");
	                            this.deleteParallelBtn.removeClass("disabled");
	                            if (this.app.data && this.app.data['showParallelLines'].length > 4) {
	                                this.addParallelBtn.addClass("disabled");
	                            } else {
	                                this.addParallelBtn.removeClass("disabled");
	                            }
	                        }
	                        /*
	                        更新按钮状态
	                        */
	                        if (value === 1) {
	                            this.playBtn.hide();
	                            this.pauseBtn.show();
	                        } else {
	                            this.playBtn.show();
	                            this.pauseBtn.hide();
	                        }
	                        /*
	                         更新文字
	                         */
	                        if (value === 2) {
	                            this.playBtn.find('.txt').text('继续');
	                        } else {
	                            this.playBtn.find('.txt').text('演示');
	                        }
	                        break;
	                    }
	                case 'showParallelLines':
	                    {
	                        if (value.length === 5) {
	                            this.addParallelBtn.addClass("disabled");
	                        } else {
	                            this.addParallelBtn.removeClass("disabled");
	                        }
	                        if (value.length === 3) {
	                            this.deleteParallelBtn.addClass("disabled");
	                        } else {
	                            this.deleteParallelBtn.removeClass("disabled");
	                        }
	                        break;
	                    }
	                case 'reset':
	                    {
	                        if (value === 0) {
	                            this.resetBtn.addClass("disabled");
	                        } else {
	                            this.resetBtn.removeClass("disabled");
	                        }
	                        break;
	                    }
	                case 'selectedParallelLine':
	                    {
	                        if (value && parallelLength > 3) {
	                            this.addParallelBtn.hide();
	                            this.deleteParallelBtn.show();
	                        } else {
	                            this.addParallelBtn.show();
	                            this.deleteParallelBtn.hide();
	                        }
	                        break;
	                    }
	                case 'segmentLengthShow':
	                    {
	                        if (value === 0) {
	                            this.lineLengthBtn.removeClass("active");
	                        } else {
	                            this.lineLengthBtn.addClass("active");
	                        }
	                        break;
	                    }
	                case 'segmentRatioShow':
	                    {
	                        if (value === 0) {
	                            this.proportionBtn.removeClass("active");
	                        } else {
	                            this.proportionBtn.addClass("active");
	                        }
	                        break;
	                    }
	            }
	        }

	        /**
	         * 获得下一条平行线的名称
	         * @param currentLines 当前平行线的集合
	         * @private
	         */

	    }, {
	        key: "_nextLine",
	        value: function _nextLine(currentLines) {
	            var allLinesPriority = this.app.config.parallelLinesPriority;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(allLinesPriority), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var line = _step.value;

	                    if (currentLines.indexOf(line) === -1) {
	                        return line;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return null;
	        }

	        /**
	         * 析构
	         */

	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.container.off("click");
	            FunctionControl._inst = null;
	        }
	    }]);
	    return FunctionControl;
	}(_BaseControl3.default);

	exports.default = FunctionControl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(299)))

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(398), __esModule: true };

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(355);
	__webpack_require__(333);
	module.exports = __webpack_require__(399);

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(320)
	  , get      = __webpack_require__(400);
	module.exports = __webpack_require__(315).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(401)
	  , ITERATOR  = __webpack_require__(354)('iterator')
	  , Iterators = __webpack_require__(339);
	module.exports = __webpack_require__(315).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(347)
	  , TAG = __webpack_require__(354)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 402 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */
/***/ function(module, exports) {

	"use strict";

	function winSize() {
	    var t = 0,
	        e = 0;
	    return document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth && (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight), {
	        width: t,
	        height: e
	    };
	}
	function getRatio() {
	    var t = winSize();
	    return t.width / t.height > 1920 / 1080 ? t.height / 1080 : t.width / 1920;
	}
	function layoutReset() {
	    var t = (document.getElementById("wrapper"), document.getElementById("layout")),
	        e = 1920,
	        n = 1080,
	        i = 24,
	        o = function o() {
	        var o,
	            d = window.layoutResetHandles,
	            h = winSize(),
	            u = 0,
	            w = h.width,
	            l = h.height;
	        if (h.width / h.height <= e / n ? (u = h.width / e * i, w = h.width < e ? h.width : e, l = n * w / e, h.height > l) : (u = h.height / n * i, l = h.height < n ? h.height : n, w = e * l / n), t.style.fontSize = u + "px", d) for (o in d) {
	            d[o]();
	        }
	    };
	    o(), window.onresize = function () {
	        o();
	    };
	}
	window.onload = function () {
	    layoutReset();
	}, window.onLayoutReset = function (t) {
	    window.layoutResetHandles || (window.layoutResetHandles = []), window.layoutResetHandles.push(t);
	};

/***/ }
/******/ ]);