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

/***/ "./src/scripts/blocks/nav.js":
/*!***********************************!*\
  !*** ./src/scripts/blocks/nav.js ***!
  \***********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/scripts/constants/index.js\");\n\n\nfunction handlePageClick(e) {\n  var el = e.target;\n  var isElMenuBtn = el.classList.contains('la-bars');\n  var isElNavItems = el === _constants_index__WEBPACK_IMPORTED_MODULE_0__.navItems || _constants_index__WEBPACK_IMPORTED_MODULE_0__.navItems.contains(el);\n  var isElNavLink = el.classList.contains('nav__link');\n\n  if (!isElMenuBtn && !isElNavItems || isElNavLink) {\n    // eslint-disable-next-line no-use-before-define\n    closeNavMenu();\n  }\n}\n\nfunction openNavMenu() {\n  _constants_index__WEBPACK_IMPORTED_MODULE_0__.navItems.classList.add('nav__items_show');\n  _constants_index__WEBPACK_IMPORTED_MODULE_0__.pageBackground.addEventListener('click', handlePageClick);\n}\n\nfunction closeNavMenu() {\n  _constants_index__WEBPACK_IMPORTED_MODULE_0__.navItems.classList.remove('nav__items_show');\n  _constants_index__WEBPACK_IMPORTED_MODULE_0__.pageBackground.removeEventListener('click', handlePageClick);\n}\n\n_constants_index__WEBPACK_IMPORTED_MODULE_0__.navMenuButton.addEventListener('click', openNavMenu);\n_constants_index__WEBPACK_IMPORTED_MODULE_0__.navExitButton.addEventListener('click', closeNavMenu);\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/blocks/nav.js?");

/***/ }),

/***/ "./src/scripts/blocks/videos.js":
/*!**************************************!*\
  !*** ./src/scripts/blocks/videos.js ***!
  \**************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/scripts/constants/index.js\");\n\n\nfunction sendGetRequest(_ref) {\n  var url = _ref.url;\n  return fetch(url).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(new Error(\"Err: \".concat(res.status)));\n  });\n}\n\nfunction getYoutubeChannelsNewestVideos() {\n  var url = \"https://www.googleapis.com/youtube/v3/search?key=\".concat(\"AIzaSyCMJE-BJQ4OnG25T5y_nue_lxeoUSjed7k\", \"&channelId=\").concat(\"UCHP9CdeguNUI-_nBv_UXBhw\", \"&part=snippet,id&maxResults=5&order=date\");\n  return sendGetRequest({\n    url: url\n  }).then(function (_ref2) {\n    var items = _ref2.items;\n    var videoIds = items.map(function (_ref3) {\n      var videoId = _ref3.id.videoId;\n      return videoId;\n    });\n    return videoIds;\n  }).catch(function (err) {\n    // eslint-disable-next-line no-console\n    console.log(err);\n  });\n}\n\nfunction getYoutubeChannelsMostPopularVideos() {\n  var url = \"https://www.googleapis.com/youtube/v3/search?key=\".concat(\"AIzaSyCMJE-BJQ4OnG25T5y_nue_lxeoUSjed7k\", \"&channelId=\").concat(\"UCHP9CdeguNUI-_nBv_UXBhw\", \"&part=snippet,id&maxResults=3&order=viewCount\");\n  return sendGetRequest({\n    url: url\n  }).then(function (_ref4) {\n    var items = _ref4.items;\n    var videoIds = items.map(function (_ref5) {\n      var videoId = _ref5.id.videoId;\n      return videoId;\n    });\n    return videoIds;\n  }).catch(function (err) {\n    // eslint-disable-next-line no-console\n    console.log(err);\n  });\n}\n\nfunction addYoutubeVideoToList(_ref6) {\n  var list = _ref6.list,\n      videoId = _ref6.videoId,\n      index = _ref6.index;\n  var videoTemplate = document.querySelector('#video__ytplayer');\n  var video = videoTemplate.content.cloneNode(true).querySelector('.video__ytplayer');\n  video.src = \"https://www.youtube.com/embed/\".concat(videoId);\n  list[index].append(video);\n}\n\ngetYoutubeChannelsNewestVideos().then(function (videoIds) {\n  videoIds.forEach(function (videoId, i) {\n    addYoutubeVideoToList({\n      list: _constants_index__WEBPACK_IMPORTED_MODULE_0__.videosNewVideos,\n      videoId: videoId,\n      index: i\n    });\n  });\n});\ngetYoutubeChannelsMostPopularVideos().then(function (videoIds) {\n  videoIds.forEach(function (videoId, i) {\n    addYoutubeVideoToList({\n      list: _constants_index__WEBPACK_IMPORTED_MODULE_0__.videosPopularVideos,\n      videoId: videoId,\n      index: i\n    });\n  });\n});\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/blocks/videos.js?");

/***/ }),

/***/ "./src/scripts/constants/index.js":
/*!****************************************!*\
  !*** ./src/scripts/constants/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export navExitButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export navItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! export navMenuButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pageBackground [provided] [no usage info] [missing usage info prevents renaming] */
/*! export videosNewVideos [provided] [no usage info] [missing usage info prevents renaming] */
/*! export videosPopularVideos [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageBackground\": () => /* binding */ pageBackground,\n/* harmony export */   \"navMenuButton\": () => /* binding */ navMenuButton,\n/* harmony export */   \"navExitButton\": () => /* binding */ navExitButton,\n/* harmony export */   \"navItems\": () => /* binding */ navItems,\n/* harmony export */   \"videosNewVideos\": () => /* binding */ videosNewVideos,\n/* harmony export */   \"videosPopularVideos\": () => /* binding */ videosPopularVideos\n/* harmony export */ });\nvar pageBackground = document.querySelector('.page__background');\nvar navMenuButton = document.querySelector('.nav__btn_icon_menu');\nvar navExitButton = document.querySelector('.nav__btn_icon_exit');\nvar navItems = document.querySelector('.nav__items');\nvar videosNewVideos = Array.from(document.querySelectorAll('.videos__list_group_new .video'));\nvar videosPopularVideos = Array.from(document.querySelectorAll('.videos__list_group_popular .video'));\n\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/constants/index.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/nav */ \"./src/scripts/blocks/nav.js\");\n/* harmony import */ var _blocks_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/videos */ \"./src/scripts/blocks/videos.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n\n\n\n\n//# sourceURL=webpack://daniel-naroditsky/./src/scripts/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://daniel-naroditsky/./src/pages/index.css?");

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
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;