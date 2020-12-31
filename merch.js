/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/CheckboxInputGroup.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/CheckboxInputGroup.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CheckboxInputGroup = /*#__PURE__*/function () {\n  function CheckboxInputGroup(_ref) {\n    var labelSelector = _ref.labelSelector,\n        callback = _ref.callback;\n\n    _classCallCheck(this, CheckboxInputGroup);\n\n    this._labels = Array.from(document.querySelectorAll(labelSelector));\n    this._inputs = this._labels.map(function (label) {\n      return label.querySelector('input');\n    });\n    this._callback = callback;\n  }\n\n  _createClass(CheckboxInputGroup, [{\n    key: \"setValues\",\n    value: function setValues(values) {\n      this._inputs.forEach(function (input) {\n        input.checked = values.includes(input.value);\n      });\n    }\n  }, {\n    key: \"getValues\",\n    value: function getValues() {\n      var values = [];\n\n      this._inputs.forEach(function (input) {\n        if (input.checked) {\n          values.push(input.value);\n        }\n      });\n\n      return values;\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      var _this = this;\n\n      this._labels.forEach(function (label) {\n        label.querySelector('click', function () {\n          console.log('LABEL HAS BEEN CLICKED');\n        });\n      });\n\n      this._inputs.forEach(function (input) {\n        input.addEventListener('click', function () {\n          _this._callback(_this.getValues());\n        });\n      });\n    }\n  }]);\n\n  return CheckboxInputGroup;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInputGroup);\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/components/CheckboxInputGroup.js?");

/***/ }),

/***/ "./src/scripts/merch.js":
/*!******************************!*\
  !*** ./src/scripts/merch.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CheckboxInputGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CheckboxInputGroup */ \"./src/scripts/components/CheckboxInputGroup.js\");\n/* harmony import */ var _pages_merch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/merch.css */ \"./src/pages/merch.css\");\n\n\nvar menuButton = document.querySelector('.nav__btn_icon_menu');\nvar exitButton = document.querySelector('.nav__btn_icon_exit');\nvar navItems = document.querySelector('.nav__items');\nmenuButton.addEventListener('click', function (e) {\n  navItems.classList.toggle('nav__items_show');\n});\nexitButton.addEventListener('click', function () {\n  navItems.classList.toggle('nav__items_show');\n});\nvar filterMerchCategories = new _components_CheckboxInputGroup__WEBPACK_IMPORTED_MODULE_0__.default({\n  labelSelector: '.filter-merch__category',\n  callback: function callback() {\n    return console.log('callback has been called');\n  }\n});\nfilterMerchCategories.setEventListeners();\ndocument.querySelector('.filter-merch__category-btn').addEventListener('click', function () {\n  return console.log('button has been clicked!');\n});\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/merch.js?");

/***/ }),

/***/ "./src/pages/merch.css":
/*!*****************************!*\
  !*** ./src/pages/merch.css ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://daniel-naroditsky/./src/pages/merch.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/merch.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;