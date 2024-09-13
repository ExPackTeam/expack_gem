/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./src/js/modals.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ \"./src/js/login.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var bgElements = document.querySelectorAll(\"[class*='bg-']\");\n  bgElements.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"bg-\")) {\n        var colorCode = cls.substring(3);\n        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n          element.style.backgroundColor = \"#\".concat(colorCode);\n        }\n      }\n    });\n  });\n  var mnElements = document.querySelectorAll(\"[class*='fr-']\");\n  mnElements.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"fr-\")) {\n        var colorCode = cls.substring(3);\n        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n          element.style.color = \"#\".concat(colorCode);\n        }\n      }\n    });\n  });\n  var fontWeightClass = document.querySelectorAll(\"[class^='fw-'\");\n  fontWeightClass.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"fw-\")) {\n        var fwValue = cls.substring(3);\n        if (/^\\d+px?$/.test(fwValue)) {\n          element.style.fontWeight = fwValue;\n        }\n      }\n    });\n  });\n  var closingClass = document.getElementByClassName(\"close\");\n  closingClass.textContent = \"&times;\";\n  var elementAlignment = document.querySelectorAll(\"[class^='align-']\");\n  elementAlignment.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"align-\")) {\n        var alignment = cls.substring(5);\n        if (alignment === \"center\" || alignment === \"left\" || alignment === \"right\") {\n          element.style.textAlign = alignment;\n        }\n      }\n    });\n  });\n  var elementPadding = document.querySelectorAll(\"[class^='pad-']\");\n  elementPadding.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"pad-\")) {\n        var paddingValue = cls.substring(5);\n        if (cls.startsWith(\"pad-t-\")) {\n          if (/^\\d+px?$/.test(paddingValue)) {\n            element.style.paddingTop = paddingValue;\n          }\n        } else if (cls.startsWith(\"pad-l-\")) {\n          // left\n          if (/^\\d+px?$/.test(paddingValue)) {\n            element.style.paddingLeft = paddingValue;\n          }\n        } else if (cls.startsWith(\"pad-r-\")) {\n          // right\t\n          if (/^\\d+px?$/.test(paddingValue)) {\n            element.style.paddingRight = paddingValue;\n          }\n        } else if (cls.startsWith(\"pad-b-\")) {\n          // bottom\n          if (/^\\d+px?$/.test(paddingValue)) {\n            element.style.paddingBottom = paddingValue;\n          }\n        } else {\n          if (/^\\d+px?$/.test(paddingValue)) {\n            // padding all\n            element.style.padding = paddingValue;\n          }\n        }\n      }\n    });\n  });\n  // figure out how to have this work for all borders\n  var borderElements = document.querySelectorAll(\"[data-border]\");\n  borderElements.forEach(function (element) {\n    var borderData = element.getAttribute('data-border');\n    if (borderData) {\n      var parts = borderData.split(\" \");\n      parts.forEach(function (part) {\n        if (part.startsWith(\"color-\")) {\n          var colorCode = part.substring(6);\n          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n            element.style.color = \"#\".concat(colorCode);\n          }\n        }\n        if (part.startsWith(\"radius-\")) {\n          var borderRadius = part.substring(7);\n          if (borderRadius.includes(\"%\")) {\n            borderRadius = borderRadius + \"%\";\n          }\n          if (borderRadius) {\n            borderRadius = borderRadius + \"px\";\n          }\n          element.style.borderRadius = borderRadius;\n        }\n        if (part.startsWith(\"size-\")) {\n          var borderSize = part.substring(7);\n          element.style.borderWidth = borderSize;\n        }\n      });\n    }\n  });\n  var imageDimension = document.querySelectorAll(\"[data-image]\");\n  imageDimension.forEach(function (element) {\n    var imageData = element.getAttribute('data-image');\n    if (imageData) {\n      var parts = imageData.split(\" \");\n      parts.forEach(function (parts) {\n        if (part.startsWith(\"height-\")) {\n          var imageHeight = part.substring(6);\n          if (imageHeight.includes(\"%\")) {\n            imageHeight = imageHeight + \"%\";\n          }\n          if (imageHeight.includes(\"em\") || imageHeight.includes(\"-em\")) {\n            imageHeight = imageHeight + \"em\";\n          } else {\n            imageHeight = imageHeight + \"px\";\n          }\n          element.style.height = imageHeight;\n        }\n        if (part.startsWith(\"width-\")) {\n          var imageWidth = part.substring(7);\n          if (imageWidth.includes(\"%\")) {\n            imageWidth = imageWidth + \"%\";\n          }\n          if (imageWidth.includes(\"em\") || imageWidth.includes(\"-em\")) {\n            imageWidth = imageWidth + \"em\";\n          } else {\n            imageWidth = imageWidth + \"px\";\n          }\n          element.style.width = imageWidth;\n        }\n      });\n    }\n  });\n  var marginCheck = document.querySelectorAll(\"[data-margin]\");\n  marginCheck.forEach(function (element) {\n    var parts = element.className.split(\" \");\n    if (parts.startsWith(\"a-\")) {\n      var everyMargin = parts.cls(5);\n      element.style.margin = everyMargin;\n    } else if (parts.startsWith(\"r-\")) {\n      var rightMargin = parts.cls(5);\n      element.style.marginRight = rightMargin;\n    } else if (parts.startsWith(\"l-\")) {}\n  });\n  var indexValue = document.querySelectorAll(\"[data-index]\");\n  indexValue.forEach(function (element) {\n    var indexData = element.getAttribute('data-index');\n    if (indexData) {\n      var parts = indexData.split(\" \");\n      if (parts.startsWith(\"z-\")) {\n        zIndex = part.substring(5);\n        element.style.zIndex = zIndex;\n      }\n    }\n  });\n});\n(0,_modals__WEBPACK_IMPORTED_MODULE_0__.modalFunction)();\n(0,_login_js__WEBPACK_IMPORTED_MODULE_1__.loginOption)();\n\n//# sourceURL=webpack://expack/./src/js/global.js?");
  
  /***/ }),
  
  /***/ "./src/js/login.js":
  /*!*************************!*\
    !*** ./src/js/login.js ***!
    \*************************/
  /***/ (() => {
  
  eval("function loginOption() {\n  var emailClass = document.getElementsByClassName(\"login-email\");\n  var passwordClass = document.getElementsByClassName(\"login-password\");\n  var usernameClass = document.getElementsByClassName(\"login-username\");\n  function hasRequiredClass(elements) {\n    for (var i = 0; i < elements.length; i++) {\n      if (elements[i].classList.contains('required')) {\n        return true;\n      }\n    }\n    return false;\n  }\n  var registerBtn = document.getElementsByClassName(\"register-btn\");\n  if (registerBtn.length > 0) {\n    for (var i = 0; i < registerBtn.length; i++) {\n      registerBtn[i].onclick = function () {\n        var emailRequired = hasRequiredClass(emailClass);\n        var passwordRequired = hasRequiredClass(passwordClass);\n        var usernameRequired = hasRequiredClass(usernameClass);\n        if (emailRequired && emailClass.length > 0) {\n          var emailValue = emailClass[0].value;\n          localStorage.setItem(\"email saved\", emailValue);\n          document.cookie = \"userEmail=\".concat(emailValue);\n        }\n        if (passwordRequired && passwordClass.length > 0) {\n          var passwordValue = passwordClass[0].value;\n          localStorage.setItem(\"password saved\", passwordValue);\n          document.cookie = \"userPassword=\".concat(passwordValue);\n        }\n        if (usernameRequired && usernameClass.length > 0) {\n          var usernameValue = usernameClass[0].value;\n          localStorage.setItem(\"username saved\", usernameValue);\n          document.cookie = \"userUsername=\".concat(usernameValue);\n        }\n      };\n    }\n  } else {\n    console.log(\"no register\");\n  }\n}\n\n//# sourceURL=webpack://expack/./src/js/login.js?");
  
  /***/ }),
  
  /***/ "./src/js/modals.js":
  /*!**************************!*\
    !*** ./src/js/modals.js ***!
    \**************************/
  /***/ (() => {
  
  eval("// modified from w3schools\nfunction modalFunction() {\n  var modal = document.getElementsByClassName(\"modal\");\n  var modalBtn = document.getElementsByClassName(\"modal-btn\");\n  var closeClick = document.getElementsByClassName(\"close\");\n  modalBtn.onclick = function () {\n    modal.style.display = \"block\";\n  };\n  closeClick.onclick = function () {\n    modal.style.display = \"none\";\n  };\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  };\n}\n\n//# sourceURL=webpack://expack/./src/js/modals.js?");
  
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
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
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
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/js/global.js");
  /******/ 	
  /******/ })()
  ;