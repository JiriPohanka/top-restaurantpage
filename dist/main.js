/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/createElement.js":
/*!**************************************!*\
  !*** ./src/helpers/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createMenuItem\": () => (/* binding */ createMenuItem)\n/* harmony export */ });\n//factory function for new DOM elements\nfunction createElement(element, atributesObj, parentNode) {\n\n    if (!parentNode) {\n        throw new Error(\"calling createElement helper without parentNode parameter\")\n    }\n\n    const newElement = document.createElement(element)\n    parentNode.appendChild(newElement)\n\n    if (atributesObj.classes) {\n        for (let elClass of atributesObj.classes) {\n            newElement.classList.add(elClass)\n        }\n    }\n\n    if (atributesObj.id) {\n        newElement.setAttribute('id', atributesObj.id)\n    }\n\n    return newElement\n}\n\n\n// to create individual <a><li>Menu Item</li></a>\nfunction createMenuItem(targetPageName, targetURL, parentUL) {\n    if (!parentUL) {\n        throw new Error(\"calling createMenuItem helper without the parentUL parameter\")\n    }\n    \n    const navLink = createElement('a', {classes: ['nav-link']}, parentUL)\n    navLink.setAttribute('href', targetURL)    \n\n    // add text into the menu item\n    createElement('li', {}, navLink).textContent = targetPageName\n\n    return navLink\n}\n\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/helpers/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_createHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/createHeader */ \"./src/javascript/createHeader.js\");\n/* harmony import */ var _javascript_createFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/createFooter */ \"./src/javascript/createFooter.js\");\n/* harmony import */ var _javascript_homepage_onload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/homepage_onload */ \"./src/javascript/homepage_onload.js\");\n\n\n\n\nconsole.log(\"hello world!\")\n\n;(0,_javascript_createHeader__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n;(0,_javascript_homepage_onload__WEBPACK_IMPORTED_MODULE_2__.populateHomePage)()\n\n;(0,_javascript_createFooter__WEBPACK_IMPORTED_MODULE_1__.default)()\n\n//# sourceURL=webpack://top-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/javascript/createFooter.js":
/*!****************************************!*\
  !*** ./src/javascript/createFooter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ \"./src/helpers/createElement.js\");\n\n\nconst createFooter = () => {   \n    const footer = document.querySelector('footer')\n    const navFooter = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav', {classes: ['footer-nav']}, footer)\n    const footerMenuWrap = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {classes: ['nav-wrap-ul']}, navFooter)\n    const menuItem1 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Home', '#', footerMenuWrap)\n    const menuItem2 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Menu', '#', footerMenuWrap)\n    const menuItem3 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Contact', '#', footerMenuWrap)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://top-restaurantpage/./src/javascript/createFooter.js?");

/***/ }),

/***/ "./src/javascript/createHeader.js":
/*!****************************************!*\
  !*** ./src/javascript/createHeader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ \"./src/helpers/createElement.js\");\n\n\nconst createHeader = () => {   \n    const header = document.querySelector('header')\n    const navTop = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav', {classes: ['main-nav']}, header)\n    const topMenuWrap = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {classes: ['nav-wrap-ul']}, navTop)\n    const menuItem1 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Home', '#', topMenuWrap)\n    const menuItem2 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Menu', '#', topMenuWrap)\n    const menuItem3 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)('Contact', '#', topMenuWrap)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://top-restaurantpage/./src/javascript/createHeader.js?");

/***/ }),

/***/ "./src/javascript/homepage_onload.js":
/*!*******************************************!*\
  !*** ./src/javascript/homepage_onload.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateHomePage\": () => (/* binding */ populateHomePage)\n/* harmony export */ });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ \"./src/helpers/createElement.js\");\n\n\nconst contentDiv = document.querySelector('#content')\n\nfunction populateHomePage () {\n\n    // hero slide on top of the landing page\n    const heroSlide = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {classes: ['slide'], id: 'hero-slide'}, contentDiv)\n    const h1 = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {}, heroSlide)\n    h1.textContent = 'Welcome to Pizza Heaven!'\n    const slogan = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, heroSlide)\n    slogan.textContent = \"Pizza lovers' heaven on Earth\"\n    \n\n    // about us slide under hero slide with link to about us page\n    const aboutUsSlide = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {classes: ['slide']}, contentDiv)\n    const aboutUsHeading = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {}, aboutUsSlide)\n    aboutUsHeading.textContent = 'About us'\n    const aboutUsText = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, aboutUsSlide)\n    aboutUsText.textContent = `We are a haven for all the pizza lovers\n    around the World. We put ephasis on fresh ingredients and original\n    recipes straight from the sunny penninsula of Italy. Read more about\n    our history and our philosophy`\n    const aboutUsButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {classes: ['btn']}, aboutUsSlide)\n    aboutUsButton.textContent = 'About us'\n    aboutUsButton.addEventListener('click', () => console.log('leads to aboutUs page'))\n\n    // menu teaser, first 3 pizza items and link to the whole menu page\n    const menuTeaserSlide = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {classes: ['slide']}, contentDiv)\n    const menuTeaserHeading = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {}, menuTeaserSlide)\n    menuTeaserHeading.textContent = 'Our menu'\n    const menuTeaserText = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, menuTeaserSlide)\n    menuTeaserText.textContent = `We offer a wide selection of tasty pizzas.`\n    const menuButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {classes: ['btn']}, menuTeaserSlide)\n    menuButton.textContent = 'See our menu'\n    menuButton.addEventListener('click', () => console.log('leads to menu page'))\n}\n\n\n \n\n//# sourceURL=webpack://top-restaurantpage/./src/javascript/homepage_onload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;