(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TextEmotion"] = factory();
	else
		root["TextEmotion"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextEmotion = function () {
  function TextEmotion(opt) {
    _classCallCheck(this, TextEmotion);

    /**
     * Face emotion by Kawaii Face
     * https://kawaiiface.net/happy-kawaii-faces/
     */
    this.emotionConfig = {
      face1: '(◕‿◕✿)',
      face2: '(◠‿◠✿)',
      face3: '(◠﹏◠✿)',
      face4: '（＊＾Ｕ＾）人（≧Ｖ≦＊）/',
      face5: 'ôヮô',
      face6: '∧( ‘Θ’ )∧',
      face7: '(¤﹏¤)',
      face8: '●‿●',
      face9: 'ʕ·ᴥ·ʔ',
      face10: '＼（＾○＾）人（＾○＾）／',
      face11: 'ヾ(＠⌒▽⌒＠)ﾉ',
      face12: '(°∀°)',
      face13: 'ヾ｜￣ー￣｜ﾉ',
      face14: '(☉‿☉✿)',
      face15: '┏(＾0＾)┛┗(＾0＾) ┓',
      face16: '(◡‿◡✿)',
      face17: '✿◕ ‿ ◕✿',
      face18: 'ヽ(‘ ∇‘ )ノ',
      face19: '☆(❁‿❁)☆',
      face20: '❀◕ ‿ ◕❀',
      face21: 'ヽ(^◇^*)/',
      face22: '(•⊙ω⊙•)',
      face23: '!⑈ˆ~ˆ!⑈',
      face24: '(*^ -^*)',
      face25: '(⊙‿⊙✿)',
      face26: '◕3◕',
      face27: '(ﾟヮﾟ)',
      face28: '¢‿¢',
      face29: 'ヅ',
      face30: '●ᴥ●',
      face31: '(∪ ◡ ∪)',
      face32: '≖‿≖',
      face33: '≧◡≦',
      face34: '٩◔‿◔۶',
      face35: '｡◕ ‿ ◕｡',
      face36: 'ヾ(＠＾▽＾＠)ﾉ',
      face37: '◃┆◉◡◉┆▷',
      face38: '(✿◠‿◠)',
      face39: '(￣ｰ￣)',
      face40: '╰(◡‿◡✿╰)',
      face41: '~,~',
      face42: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
      face43: '(*~▽~)',
      face44: '❀‿❀',
      face45: '◕‿◕',
      face46: '(^L^)',
      face47: '(^▽^)',
      face48: '◕ ◡ ◕',
      face49: '(◕‿◕✿)',
      face50: '（ ；´Д｀）',
      face51: '⊙﹏⊙',
      face52: '✿｡✿',
      face53: 'ヽ(゜∇゜)ノ',
      face54: '｡(✿‿✿)｡',
      face55: '(´ー｀)',
      face56: 'ツ',
      face57: 'q(❂‿❂)p',
      face58: '( ́ ◕◞ε◟◕`)',
      face59: '☆(◒‿◒)☆',
      face60: '(∩▂∩)',
      face61: '(¬‿¬)',
      face62: '(^Ｏ^)',
      face63: 'ʘ‿ʘ',
      face64: '（’◎’）',
      face65: '(◜௰◝)',
      face66: '(^ｰ^)',
      face67: '(o´ω｀o)',
      face68: '(^з^)-☆',
      face69: '(◕ω◕✿)',
      face70: '(づ｡◕‿‿◕｡)づ',
      face71: '(ﾟ▽^*)',
      face72: '(⌒o⌒)',
      face73: '(｡◕‿◕｡)',
      face74: 'ت',
      face75: '(. ﾟーﾟ)',
      face76: '१✌˚◡˚✌५',
      face77: '＼(●~▽~●)',
      face78: '(*˘︶˘*)',
      face79: '(✪㉨✪)',
      face80: '(ᅌᴗᅌ* )',
      face81: '^L^',
      face82: '(\/) (°„°) (\/)',
      face83: '＼(*^▽^*)/',
      face84: '(◠△◠✿)',
      face85: '( ಠ◡ಠ )',
      face86: '(〃^∇^)ﾉ',
      face87: '^^',
      face88: '|◔◡◉|',
      face89: '(●⌒∇⌒●)',
      face90: '⊂◉‿◉つ',
      face91: '.ʕʘ‿ʘʔ.',
      face92: '(*・∀・*)人(*・∀・*)',
      face93: '＼(^-^)／',
      face94: '∩(︶▽︶)∩',
      face95: '（☉∀☉）',
      face96: '(´ω｀)',
      face97: '●﹏●',
      face98: '（ ´∀｀）☆',
      face99: '•ᴥ•',
      face100: '(≧◡≦)',
      face101: '(◡‿◡✿)',
      face102: '(･ｪ-)',
      face103: '^‿^',
      face104: '٩(̾●̮̮̃̾•̃̾)۶',
      face105: '≖‿≖',
      face106: '(⊙ω⊙✿)',
      face107: '٩(-̮̮̃•̃)',
      face108: '(´･ω･`)',
      face109: '◤(¬‿¬)◥',
      face110: '^.^',
      face111: '(•‿•)',
      face112: '（＾⊆＾）',
      face113: '^( \'‿\' )^',
      face114: '☆d(o⌒∇⌒o)b',
      face115: '∑(゜Д゜;)',
      face116: '(▰˘◡˘▰)',
      face117: '(• ε •)',
      face118: '( ͡° ͜ʖ ͡°)',
      face119: '(\/) (°,,°) (\/)',
      face120: '(￣(エ)￣)',
      face121: '{◕ ◡ ◕}',
      face122: '(>‘o’)>',
      face123: 'シ',
      face124: '(❀‿❀)',
      face125: '< (^^,) >',
      face126: 'ヾ(●⌒∇⌒●)ﾉ',
      face127: '（ ´∀｀）',
      face128: '☾˙❀‿❀˙☽',
      face129: '°٢°',
      face130: '^o^',
      face131: '(=ﾟωﾟ)ﾉ',
      face132: '٩(●̮̮̃•̃)۶',
      face133: '(☞ﾟ∀ﾟ)☞',
      face134: '(=゜ω゜)',
      face135: '(｡✿‿✿｡)',
      face136: 'ó‿ó',
      face137: '◎[▪‿▪]◎',
      face138: '(▰˘◡˘▰)',
      face139: '(︶ω︶)',
      face140: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
      face141: '(◠ω◠✿)',
      face142: '٩(^‿^)۶',
      face143: '(●*∩_∩*●)',
      face144: '٩(-̮̮̃-̃)۶',
      face145: '<丶´Д｀>',
      face146: '(✿◠‿◠)',
      face147: 'ヽ(´▽｀)ノ',
      face148: '(°⌣°)',
      face149: '☆(❁‿❁)☆',
      face150: '(० ्०)',
      face151: '٩(-̮̮̃•̃)۶',
      face152: '（╹ェ╹）',
      face153: 'ᵔᴥᵔ',
      face154: '•(⌚_⌚)•',
      face155: 'ヽ( ´ ∇ ｀ )ノ',
      face156: '（ミ￣ー￣ミ）',
      face157: '(─‿‿─)',
      face158: '~(^з^)-',
      face159: '(*≗*)',
      face160: '~(^з^)-',
      face161: '(´･ω･`)',
      face162: '(｡◕‿◕｡)',
      face163: '.=^.^=',
      face164: '(◠︿◠✿)',
      face165: 'ッ',
      face166: '(`･ω･´)',
      face167: '´ ▽ ` )ﾉ',
      face168: '(´∀｀)',
      face169: '(◑‿◐)',
      face170: 'ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ',
      face171: '˚ᆺ˚',
      face172: 'ヽ(〃＾▽＾〃)ﾉ',
      face173: '｡◕‿◕｡',
      face174: '❀◕ ‿ ◕❀',
      face175: '( °٢° )',
      face176: 'Ü',
      face177: '(●´ω｀●)',
      face178: '<(\'o\'<)',
      face179: '◕‿◕',
      face180: 'ᵔᴥᵔ',
      face181: '◙‿◙'
    };
    this.bracket = [];

    if (opt) {
      this.wrapper = _typeof(opt.wrapper) === 'object' ? opt.wrapper : document.querySelector(opt.wrapper);
      this.emotion = opt.emotion;
      this.animate = opt.animate;
      this.color = opt.color;
      this.background = opt.background;

      this.init();
    }
  }

  _createClass(TextEmotion, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.bracket = [];

      this.emotion.map(function (item) {
        var result = _this.emotionConfig[item];

        _this.bracket.push(result);
      });

      if (this.bracket) {
        this.wrapper.appendChild(this.place(this.bracket[0]));
      }

      if (this.animate) {
        this.createAnimate(this.wrapper);
      }
    }
  }, {
    key: 'createAnimate',
    value: function createAnimate() {
      var _this2 = this;

      var index = 0;

      var animate = function animate() {
        _this2.wrapper.innerHTML = null;
        _this2.wrapper.appendChild(_this2.place(_this2.bracket[index]));

        if (index === _this2.bracket.length - 1) {
          index = 0;
        } else {
          index += 1;
        }

        setTimeout(function () {
          requestAnimationFrame(animate);
        }, _this2.animate[index]);
      };

      requestAnimationFrame(animate);
    }
  }, {
    key: 'place',
    value: function place(emot) {
      var wrap = document.createElement('div');

      wrap.className = 't-animate';
      wrap.innerHTML = emot;

      if (this.color) {
        wrap.style.color = this.color;
      }
      if (this.background) {
        wrap.style.backgroundColor = this.background;
      }

      return wrap;
    }
  }, {
    key: 'replace',
    value: function replace(opt) {
      var _this3 = this;

      var target = opt ? opt.target : '.t-inline';
      var wrapper = document.querySelectorAll(target);

      wrapper.forEach(function (el, index) {
        el.dataset.id = _this3.unique();

        var face = '';
        var delimiter = ' ';

        var dataAttr = el.dataset;

        if (dataAttr.face.indexOf(',') > -1) {
          delimiter = ',';
        }

        face = dataAttr.face.split(delimiter).map(function (item) {
          return item.trim();
        }).filter(function (item) {
          return item !== '';
        });

        _this3.emotion = face;
        _this3.wrapper = document.querySelector(target + '[data-id="' + dataAttr.id + '"]');

        if (dataAttr.color) {
          _this3.color = dataAttr.color;
        }

        if (dataAttr.background) {
          _this3.background = dataAttr.background;
        }

        _this3.init();
      });
    }
  }, {
    key: 'unique',
    value: function unique() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }]);

  return TextEmotion;
}();

exports.default = TextEmotion;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font-size: 48px;\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #DADADA; }\n\n.t-animate {\n  display: inline-block;\n  margin-top: 6px;\n  line-height: .8;\n  padding-bottom: 10px; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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
/* 5 */
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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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
/* 6 */
/***/ (function(module, exports) {


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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=TextEmotion.js.map