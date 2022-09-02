/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    color: white;\r\n    font-size: 16px;\r\n    background-color: rgba(128, 128, 128, 0.39);\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(50, 111, 145);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.5rem 2rem;\r\n    opacity: 0.99;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding-top: 5rem;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(50, 111, 145);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    opacity: 0.95;\r\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-field {\r\n    opacity: 0.4;\r\n    background-color: white;\r\n    height: 2rem;\r\n    width: 30rem;\r\n    border-radius: 1rem;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1rem;\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.search-input {\r\n    height: 100%;\r\n    gap: 50rem;\r\n    flex-grow: 1;\r\n    opacity: 1;\r\n    outline: none;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 1);\r\n    font-family: 'Rubik', sans-serif;\r\n    font-size: 1.15rem;\r\n    font-weight: bolder;\r\n}\r\n\r\n.search-button {\r\n    background-color: inherit;\r\n    border: none;\r\n    width: 1.5rem;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.search-button:hover {\r\n    scale: 1.2;\r\n}\r\n\r\n\r\n.img-small {\r\n    height: 1.5rem;\r\n    opacity: 1;\r\n  }\r\n\r\n.img-big {\r\n    height: 3rem;\r\n }\r\n\r\n\r\n.weather-report-card {\r\n    width: 20rem;\r\n    height: 16rem;\r\n    background-color: hsla(50, 33%, 25%, .4);\r\n    border-radius: 1rem;\r\n    box-shadow: 0px 5px 20px hsla(50, 33%, 25%, .4);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem 1rem;\r\n    gap: 1rem;\r\n    order: 1\r\n}\r\n\r\n\r\n.weather-report-card-city {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.weather-report-card-description {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.8rem\r\n}\r\n\r\n.weather-report-card-description-temperature {\r\n    font-size: 3rem;\r\n}\r\n\r\n\r\n.weather-report-card-text {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weather-report-card-details-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.weather-report-card-details-item {\r\n    height: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.weather-report-card-img {\r\n    scale: 1.3;\r\n}\r\n\r\n\r\n\r\n.weather-forecast-header {\r\n    display: flex;\r\n    width: 100%;\r\n    padding-left: 4rem;\r\n    align-items: center;\r\n    color: hsla(0, 0%, 55%, 1);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.weather-forecast-container {\r\n    width: 100%;\r\n    height: 15rem;\r\n    display: flex;\r\n    padding-left: 4rem;\r\n    padding-right: 4rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    order: 2\r\n    \r\n}\r\n\r\n.weather-forecast-item {\r\n    height: 100%;\r\n    width: 14rem;\r\n    background-color: hsla(0, 0%, 55%, 0.5);\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: flex-start;\r\n  }\r\n  .weather-forecast-item-header {\r\n    display: flex;\r\n    gap: 1rem;\r\n    height: 2rem;\r\n    align-items: flex-end\r\n  }\r\n  .weather-forecast-item-header-day {\r\n    font-size: 1.5rem;\r\n    font-weight: bolder;\r\n    text-align: end\r\n    \r\n  }\r\n  .weather-forecast-item-header-date {\r\n    text-align: end;\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n\r\n\r\n.weather-forecast-item-temperature-container {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: flex-end;\r\n}\r\n\r\n.weather-forecast-item-temperature-primal {\r\n    font-size: 2rem;\r\n}\r\n\r\n.weather-forecast-item-temperature-secondary {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.weather-forecast-item-text {\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n\r\n.weather-forecast-img {\r\n    height: 4rem;\r\n}\r\n\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\n.weather-forecast-wrapper {\r\n    order: 100\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    color: white;\r\n    font-size: 16px;\r\n    background-color: rgba(128, 128, 128, 0.39);\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(50, 111, 145);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 0.5rem 2rem;\r\n    opacity: 0.99;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding-top: 5rem;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(50, 111, 145);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    opacity: 0.95;\r\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-field {\r\n    opacity: 0.4;\r\n    background-color: white;\r\n    height: 2rem;\r\n    width: 30rem;\r\n    border-radius: 1rem;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1rem;\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.search-input {\r\n    height: 100%;\r\n    gap: 50rem;\r\n    flex-grow: 1;\r\n    opacity: 1;\r\n    outline: none;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 1);\r\n    font-family: 'Rubik', sans-serif;\r\n    font-size: 1.15rem;\r\n    font-weight: bolder;\r\n}\r\n\r\n.search-button {\r\n    background-color: inherit;\r\n    border: none;\r\n    width: 1.5rem;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.search-button:hover {\r\n    scale: 1.2;\r\n}\r\n\r\n\r\n.img-small {\r\n    height: 1.5rem;\r\n    opacity: 1;\r\n  }\r\n\r\n.img-big {\r\n    height: 3rem;\r\n }\r\n\r\n\r\n.weather-report-card {\r\n    width: 20rem;\r\n    height: 16rem;\r\n    background-color: hsla(50, 33%, 25%, .4);\r\n    border-radius: 1rem;\r\n    box-shadow: 0px 5px 20px hsla(50, 33%, 25%, .4);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem 1rem;\r\n    gap: 1rem;\r\n    order: 1\r\n}\r\n\r\n\r\n.weather-report-card-city {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.weather-report-card-description {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.8rem\r\n}\r\n\r\n.weather-report-card-description-temperature {\r\n    font-size: 3rem;\r\n}\r\n\r\n\r\n.weather-report-card-text {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weather-report-card-details-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.weather-report-card-details-item {\r\n    height: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.weather-report-card-img {\r\n    scale: 1.3;\r\n}\r\n\r\n\r\n\r\n.weather-forecast-header {\r\n    display: flex;\r\n    width: 100%;\r\n    padding-left: 4rem;\r\n    align-items: center;\r\n    color: hsla(0, 0%, 55%, 1);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.weather-forecast-container {\r\n    width: 100%;\r\n    height: 15rem;\r\n    display: flex;\r\n    padding-left: 4rem;\r\n    padding-right: 4rem;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    order: 2\r\n    \r\n}\r\n\r\n.weather-forecast-item {\r\n    height: 100%;\r\n    width: 14rem;\r\n    background-color: hsla(0, 0%, 55%, 0.5);\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: flex-start;\r\n  }\r\n  .weather-forecast-item-header {\r\n    display: flex;\r\n    gap: 1rem;\r\n    height: 2rem;\r\n    align-items: flex-end\r\n  }\r\n  .weather-forecast-item-header-day {\r\n    font-size: 1.5rem;\r\n    font-weight: bolder;\r\n    text-align: end\r\n    \r\n  }\r\n  .weather-forecast-item-header-date {\r\n    text-align: end;\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n\r\n\r\n.weather-forecast-item-temperature-container {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: flex-end;\r\n}\r\n\r\n.weather-forecast-item-temperature-primal {\r\n    font-size: 2rem;\r\n}\r\n\r\n.weather-forecast-item-temperature-secondary {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.weather-forecast-item-text {\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n\r\n.weather-forecast-img {\r\n    height: 4rem;\r\n}\r\n\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\n.weather-forecast-wrapper {\r\n    order: 100\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Commons Functions/dateFunctions.js":
/*!************************************************!*\
  !*** ./src/Commons Functions/dateFunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDateToTxt": () => (/* binding */ convertDateToTxt),
/* harmony export */   "convertTxtToDate": () => (/* binding */ convertTxtToDate),
/* harmony export */   "getWeekDay": () => (/* binding */ getWeekDay)
/* harmony export */ });
function convertDateToTxt(date) {
    let month = date.getMonth() + 1
    let day =  date.getDate()
    if (month < 10) {
        month = `0${month}`
    } else month = `${month}`
    if (day< 10) {
        day = `0${day}`
    } else day = `${day}`
    return `${date.getFullYear()}-${month}-${day}`
}

function convertTxtToDate(textDate) {
    const date = new Date(textDate)

}


function getWeekDay(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[date.getDay()]
  }



/***/ }),

/***/ "./src/DOM modules/showForecast.js":
/*!*****************************************!*\
  !*** ./src/DOM modules/showForecast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowForecastContainer": () => (/* binding */ ShowForecastContainer)
/* harmony export */ });
class ShowForecastContainer {
    DOM() {
      const weatherForecastWrapper = document.createElement('div')
      weatherForecastWrapper.classList.add('weather-forecast-wrapper')
      const weatherForecastHeader = document.createElement('h1')
      weatherForecastHeader.classList.add('weather-forecast-header')
      weatherForecastHeader.textContent = 'Daily forecast'
      const weatherForecastContainer = document.createElement('div')
      weatherForecastContainer.classList.add('weather-forecast-container')
      weatherForecastWrapper.append(weatherForecastHeader, weatherForecastContainer)
    
      return weatherForecastWrapper
    }
}





/***/ }),

/***/ "./src/DOM modules/showWeatherDailyForecast.js":
/*!*****************************************************!*\
  !*** ./src/DOM modules/showWeatherDailyForecast.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowForecastItem": () => (/* binding */ ShowForecastItem)
/* harmony export */ });
class ShowForecastItem {
      createItemDOM(forecastItem) {
            const weatherForecastItem = document.createElement('div')
            weatherForecastItem.classList.add('weather-forecast-item')
            const weatherForecastItemHeader = document.createElement('div')
            weatherForecastItemHeader.classList.add('weather-forecast-item-header')
            const weatherForecastItemHeaderDay = document.createElement('div')
            weatherForecastItemHeaderDay.classList.add('weather-forecast-item-header-day')
            weatherForecastItemHeaderDay.textContent = `${forecastItem.weekday}`            
            const weatherForecastItemHeaderDate = document.createElement('div')
            weatherForecastItemHeaderDate.classList.add('weather-forecast-item-header-date')
            weatherForecastItemHeaderDate.textContent = `${forecastItem.date}`

            weatherForecastItemHeader.append(weatherForecastItemHeaderDay, weatherForecastItemHeaderDate) 

            const weatherForecastItemIcon = document.createElement('img') 
            weatherForecastItemIcon.src = `http://openweathermap.org/img/wn/${forecastItem.icon}@2x.png` 
            weatherForecastItemIcon.classList.add('weather-forecast-img')

            const weatherForecastItemTemperatureContainer = document.createElement('div')
            weatherForecastItemTemperatureContainer.classList.add('weather-forecast-item-temperature-container')

            const weatherForecastItemTemperatureDay = document.createElement('div')
            weatherForecastItemTemperatureDay.classList.add('weather-forecast-item-temperature-primal')
            weatherForecastItemTemperatureDay.textContent = `${Math.round(forecastItem.maxTemperature)}°`

            const weatherForecastItemTemperatureNight = document.createElement('div')
            weatherForecastItemTemperatureNight.classList.add('weather-forecast-item-temperature-secondary')
            weatherForecastItemTemperatureNight.textContent = `${Math.round(forecastItem.minTemperature)}°`

            weatherForecastItemTemperatureContainer.append(weatherForecastItemTemperatureDay, 
                                                           weatherForecastItemTemperatureNight)

            const weatherForecastItemText = document.createElement('div')
            weatherForecastItemText.classList.add('weather-forecast-item-text')
            weatherForecastItemText.textContent = `${forecastItem.description}`

            weatherForecastItem.append(weatherForecastItemHeader, 
                                    weatherForecastItemIcon, 
                                    weatherForecastItemTemperatureContainer, 
                                    weatherForecastItemText)                  
            return weatherForecastItem
      }
}



/***/ }),

/***/ "./src/DOM modules/showWeatherReportCard.js":
/*!**************************************************!*\
  !*** ./src/DOM modules/showWeatherReportCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowWeatherReport": () => (/* binding */ ShowWeatherReport)
/* harmony export */ });
class ShowWeatherReport {
    DOM(weatherReport) {
        const wrapper = document.querySelector('.wrapper')
        wrapper.style.background = `url('../src/Images/${weatherReport.description}.jpg')`

        const weatherReportCard = document.createElement('div')
        weatherReportCard.classList.add('weather-report-card')

        const weatherReportCardCity = document.createElement('div')
        weatherReportCardCity.classList.add('weather-report-card-city')
        weatherReportCardCity.textContent = `${weatherReport.city}`

        const weatherReportCardDescription = document.createElement('div')
        weatherReportCardDescription.classList.add('weather-report-card-description')
        const weatherReportCardDescriptionIcon = document.createElement('img')
        weatherReportCardDescriptionIcon.src = `http://openweathermap.org/img/wn/${weatherReport.icon}.png`
        weatherReportCardDescriptionIcon.classList.add('weather-report-card-img')

        const weatherReportCardDescriptionTemperature = document.createElement('div')
        weatherReportCardDescriptionTemperature.classList.add('weather-report-card-description-temperature')
        weatherReportCardDescriptionTemperature.textContent = `${Math.round(weatherReport.temperature)}°C`
       

        weatherReportCardDescription.append(weatherReportCardDescriptionIcon, 
                                            weatherReportCardDescriptionTemperature)

        const weatherReportCardText = document.createElement('div')
        weatherReportCardText.classList.add('weather-report-card-text')
        weatherReportCardText.textContent = `${weatherReport.description}`

        const weatherReportCardDetailsContainer = document.createElement('div')
        weatherReportCardDetailsContainer.classList.add('weather-report-card-details-container')

        const weatherReportCardDetailsFeelsTemp = document.createElement('div')
        weatherReportCardDetailsFeelsTemp.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsFeelsTemp.textContent = `Feels like ${Math.round(weatherReport.feelstemperature)}°`

        const weatherReportCardDetailsWind = document.createElement('div')
        weatherReportCardDetailsWind.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsWind.textContent = `Wind ${Math.round(weatherReport.wind)}m/s`

        const weatherReportCardDetailsPressure = document.createElement('div')
        weatherReportCardDetailsPressure.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsPressure.textContent = `Pressure ${Math.round(weatherReport.pressure * 0.75)}mm`

        const weatherReportCardDetailsHumidity = document.createElement('div')
        weatherReportCardDetailsHumidity.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsHumidity.textContent = `Humidity ${Math.round(weatherReport.humidity)}%`

        weatherReportCardDetailsContainer.append(weatherReportCardDetailsFeelsTemp, 
                                                weatherReportCardDetailsWind, 
                                                weatherReportCardDetailsPressure, 
                                                weatherReportCardDetailsHumidity)

        weatherReportCard.append(weatherReportCardCity, 
                                weatherReportCardDescription, 
                                weatherReportCardText, 
                                weatherReportCardDetailsContainer)
        return weatherReportCard
    }
}




/***/ }),

/***/ "./src/Items modules/createWeatherDailyForecastItem.js":
/*!*************************************************************!*\
  !*** ./src/Items modules/createWeatherDailyForecastItem.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherDailyForecastItem": () => (/* binding */ WeatherDailyForecastItem)
/* harmony export */ });
class WeatherDailyForecastItem {
    constructor(date, 
                tempMin, 
                weekday, 
                tempMax,
                description,
                icon) 
    {
        this.date = date
        this.minTemperature = tempMin
        this.weekday = weekday
        this.maxTemperature = tempMax       
        this.description = description
        this.icon = icon
    }

}



/***/ }),

/***/ "./src/Items modules/createWeatherReport.js":
/*!**************************************************!*\
  !*** ./src/Items modules/createWeatherReport.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherReport": () => (/* binding */ WeatherReport)
/* harmony export */ });
class WeatherReport {
    constructor(city, 
                temperature, 
                description, 
                feelstemperature, 
                pressure, 
                wind, 
                humidity, 
                icon) 
    {
        this.city = city
        this.temperature = temperature
        this.description = description
        this.feelstemperature = feelstemperature
        this.pressure = pressure
        this.wind = wind
        this.humidity = humidity
        this.icon = icon
    }
}




//city = response.name
//description = response.weather[0].main
//temp = response.main.temp
//feels = response.main.feels_like
//pressure = response.main.pressure
//humidity = response.main.humidity
//wind = response.wind.speed
//iconsrc = response.weather[0].icon





/***/ }),

/***/ "./src/Icons/magnify.svg":
/*!*******************************!*\
  !*** ./src/Icons/magnify.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Icons_magnify_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/magnify.svg */ "./src/Icons/magnify.svg");
/* harmony import */ var _Items_modules_createWeatherReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items modules/createWeatherReport */ "./src/Items modules/createWeatherReport.js");
/* harmony import */ var _DOM_modules_showWeatherReportCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM modules/showWeatherReportCard */ "./src/DOM modules/showWeatherReportCard.js");
/* harmony import */ var _Commons_Functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Commons Functions/dateFunctions */ "./src/Commons Functions/dateFunctions.js");
/* harmony import */ var _DOM_modules_showWeatherDailyForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM modules/showWeatherDailyForecast */ "./src/DOM modules/showWeatherDailyForecast.js");
/* harmony import */ var _Items_modules_createWeatherDailyForecastItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Items modules/createWeatherDailyForecastItem */ "./src/Items modules/createWeatherDailyForecastItem.js");
/* harmony import */ var _DOM_modules_showForecast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOM modules/showForecast */ "./src/DOM modules/showForecast.js");









const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)

const header = document.createElement('header')
wrapper.appendChild(header)

const main = document.createElement('main')

const footer = document.createElement('footer')
const legalInfo = document.createElement('div')
legalInfo.classList.add('legal-info')
const siteName = document.createElement('div')
const copyRight = document.createElement('div')
siteName.textContent = `Via OpenWeatherMap`
copyRight.textContent = 'All rights reserved'
legalInfo.append(siteName, copyRight)
footer.appendChild(legalInfo)
wrapper.append(main, footer)



const searchField = document.createElement('div')
searchField.classList.add('search-field')

const searchInput = document.createElement('input')
searchInput.type = 'search'
searchInput.classList.add('search-input')
searchInput.required = true

const searchButton = document.createElement('button')
searchButton.classList.add('search-button')

const searchButtonIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
searchButtonIcon.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", _Icons_magnify_svg__WEBPACK_IMPORTED_MODULE_1__);
searchButtonIcon.setAttribute("viewBox", "0 0 24 24");
searchButtonIcon.classList.add('img-small');
const searchButtonIconImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
searchButtonIconImg.setAttribute(
  "d",
  "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
);
searchButtonIcon.append(searchButtonIconImg);
searchButton.append(searchButtonIcon);

searchButton.addEventListener('click', requestCityWeather())


searchField.append(searchInput, searchButton)

header.append(searchField)

function requestCityWeather() {
  
}

function success(pos) {
  const crd = pos.coords
  getCurrentWeatherReport(crd.latitude, crd.longitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error)




async function getCurrentWeatherReport(latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
  let responseJSON = await response.json()
  
  const weatherReportCard = new _Items_modules_createWeatherReport__WEBPACK_IMPORTED_MODULE_2__.WeatherReport(responseJSON.name, 
                                              responseJSON.main.temp, 
                                              responseJSON.weather[0].main, 
                                              responseJSON.main.feels_like,
                                              responseJSON.main.pressure,
                                              responseJSON.wind.speed,
                                              responseJSON.main.humidity,
                                              responseJSON.weather[0].icon)                        
  const weatherReport = new _DOM_modules_showWeatherReportCard__WEBPACK_IMPORTED_MODULE_3__.ShowWeatherReport().DOM(weatherReportCard)
  main.append(weatherReport)
}




fetch('http://api.openweathermap.org/data/2.5/forecast?lat=59.8322&lon=30.2278&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const weatherForecast = []
        for (let item of response.list) {
          for (let key in item) {
            if (key == 'dt_txt' && item[key].includes('00:00:00')) {
                const night = {}
                let date = new Date(item[key].slice(0,10))
                let weekDay = (0,_Commons_Functions_dateFunctions__WEBPACK_IMPORTED_MODULE_4__.getWeekDay)(date)
                let month = date.toLocaleString("en-us", { month: "short" })
                night.date = `${date.getDate()} ${month}`
                night.tempMin = item.main.temp_min
                night.weekday = weekDay
                weatherForecast.push(night)
            }
            if (key == 'dt_txt' && item[key].includes('12:00:00')) {
                const day = {}
                day.tempMax = item.main.temp_max
                day.description = `${item.weather[0].main}`
                day.icon = `${item.weather[0].icon}`   
                weatherForecast.push(day)
            }
          } 
        } 
        const arr = []
        const wrapper = new _DOM_modules_showForecast__WEBPACK_IMPORTED_MODULE_7__.ShowForecastContainer().DOM()
        main.append(wrapper)
        const container = document.querySelector('.weather-forecast-container')
        for (let i=0; i<weatherForecast.length - 1; i+=2) {
          const obj = Object.assign(weatherForecast[i], weatherForecast[i+1])
          arr.push(obj)
          const forecastItem = new _Items_modules_createWeatherDailyForecastItem__WEBPACK_IMPORTED_MODULE_6__.WeatherDailyForecastItem(obj.date, 
                                                            obj.tempMin, 
                                                            obj.weekday, 
                                                            obj.tempMax,
                                                            obj.description,
                                                            obj.icon)
          const showForecastItem = new _DOM_modules_showWeatherDailyForecast__WEBPACK_IMPORTED_MODULE_5__.ShowForecastItem().createItemDOM(forecastItem)
          container.append(showForecastItem)
        }
      })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsS0FBSyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsU0FBUyxPQUFPLFVBQVUsU0FBUyxPQUFPO0FBQzdIO0FBQ0E7QUFDQSxnQ0FBZ0MsNkVBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUZBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEVBQVU7QUFDeEMsMkRBQTJELGdCQUFnQjtBQUMzRSxnQ0FBZ0MsZ0JBQWdCLEVBQUUsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRFQUFxQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0EsbUNBQW1DLG1HQUF3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1GQUFnQjtBQUN2RDtBQUNBO0FBQ0EsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL0NvbW1vbnMgRnVuY3Rpb25zL2RhdGVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvRE9NIG1vZHVsZXMvc2hvd0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL0RPTSBtb2R1bGVzL3Nob3dXZWF0aGVyRGFpbHlGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9ET00gbW9kdWxlcy9zaG93V2VhdGhlclJlcG9ydENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvSXRlbXMgbW9kdWxlcy9jcmVhdGVXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvSXRlbXMgbW9kdWxlcy9jcmVhdGVXZWF0aGVyUmVwb3J0LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGgxLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzkpO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxMTEsIDE0NSk7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICAgIG9wYWNpdHk6IDAuOTk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTExLCAxNDUpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG9wYWNpdHk6IDAuOTU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLTJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1maWVsZCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBnYXA6IDUwcmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgICBzY2FsZTogMS4yO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaW1nLXNtYWxsIHtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmltZy1iaWcge1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuIH1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSg1MCwgMzMlLCAyNSUsIC40KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IGhzbGEoNTAsIDMzJSwgMjUlLCAuNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBvcmRlcjogMVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1jaXR5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjhyZW1cXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtZGVzY3JpcHRpb24tdGVtcGVyYXR1cmUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1pdGVtIHtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1pbWcge1xcclxcbiAgICBzY2FsZTogMS4zO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogaHNsYSgwLCAwJSwgNTUlLCAxKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG9yZGVyOiAyXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTRyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDU1JSwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICAud2VhdGhlci1mb3JlY2FzdC1pdGVtLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmRcXHJcXG4gIH1cXHJcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyLWRheSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmRcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAud2VhdGhlci1mb3JlY2FzdC1pdGVtLWhlYWRlci1kYXRlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtLXRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtLXRlbXBlcmF0dXJlLXByaW1hbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1zZWNvbmRhcnkge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGVnYWwtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LXdyYXBwZXIge1xcclxcbiAgICBvcmRlcjogMTAwXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7Ozs7Ozs7OztDQVlDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7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LGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7Ozs7QUFJRjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgaDEsIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zOSk7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDExMSwgMTQ1KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC45OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxMTEsIDE0NSk7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC45NTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWZpZWxkIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdhcDogNTByZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHNjYWxlOiAxLjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbWctc21hbGwge1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1nLWJpZyB7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gfVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDUwLCAzMyUsIDI1JSwgLjQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggaHNsYSg1MCwgMzMlLCAyNSUsIC40KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG9yZGVyOiAxXFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWNpdHkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuOHJlbVxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXNjcmlwdGlvbi10ZW1wZXJhdHVyZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWltZyB7XFxyXFxuICAgIHNjYWxlOiAxLjM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBoc2xhKDAsIDAlLCA1NSUsIDEpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgb3JkZXI6IDJcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgNTUlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZFxcclxcbiAgfVxcclxcbiAgLndlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXItZGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZFxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyLWRhdGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtcHJpbWFsIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtLXRlbXBlcmF0dXJlLXNlY29uZGFyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sZWdhbC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3Qtd3JhcHBlciB7XFxyXFxuICAgIG9yZGVyOiAxMDBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb252ZXJ0RGF0ZVRvVHh0KGRhdGUpIHtcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGxldCBkYXkgPSAgZGF0ZS5nZXREYXRlKClcclxuICAgIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YFxyXG4gICAgfSBlbHNlIG1vbnRoID0gYCR7bW9udGh9YFxyXG4gICAgaWYgKGRheTwgMTApIHtcclxuICAgICAgICBkYXkgPSBgMCR7ZGF5fWBcclxuICAgIH0gZWxzZSBkYXkgPSBgJHtkYXl9YFxyXG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9YFxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VHh0VG9EYXRlKHRleHREYXRlKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGV4dERhdGUpXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0V2Vla0RheShkYXRlKSB7XHJcbiAgICBsZXQgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J11cclxuICAgIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldXHJcbiAgfVxyXG5cclxuZXhwb3J0IHtjb252ZXJ0RGF0ZVRvVHh0LCBjb252ZXJ0VHh0VG9EYXRlLCBnZXRXZWVrRGF5fSIsImNsYXNzIFNob3dGb3JlY2FzdENvbnRhaW5lciB7XHJcbiAgICBET00oKSB7XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICB3ZWF0aGVyRm9yZWNhc3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3Qtd3JhcHBlcicpXHJcbiAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgd2VhdGhlckZvcmVjYXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaGVhZGVyJylcclxuICAgICAgd2VhdGhlckZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RhaWx5IGZvcmVjYXN0J1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICB3ZWF0aGVyRm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1jb250YWluZXInKVxyXG4gICAgICB3ZWF0aGVyRm9yZWNhc3RXcmFwcGVyLmFwcGVuZCh3ZWF0aGVyRm9yZWNhc3RIZWFkZXIsIHdlYXRoZXJGb3JlY2FzdENvbnRhaW5lcilcclxuICAgIFxyXG4gICAgICByZXR1cm4gd2VhdGhlckZvcmVjYXN0V3JhcHBlclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Nob3dGb3JlY2FzdENvbnRhaW5lcn1cclxuXHJcbiIsImNsYXNzIFNob3dGb3JlY2FzdEl0ZW0ge1xyXG4gICAgICBjcmVhdGVJdGVtRE9NKGZvcmVjYXN0SXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0nKVxyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyJylcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlckRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXkuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1pdGVtLWhlYWRlci1kYXknKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyRGF5LnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RJdGVtLndlZWtkYXl9YCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXRlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXItZGF0ZScpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXRlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RJdGVtLmRhdGV9YFxyXG5cclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlci5hcHBlbmQod2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlckRheSwgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlckRhdGUpIFxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSBcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Zm9yZWNhc3RJdGVtLmljb259QDJ4LnBuZ2AgXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaW1nJylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZURheS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtcHJpbWFsJylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlRGF5LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChmb3JlY2FzdEl0ZW0ubWF4VGVtcGVyYXR1cmUpfcKwYFxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlTmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVOaWdodC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtc2Vjb25kYXJ5JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlTmlnaHQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0SXRlbS5taW5UZW1wZXJhdHVyZSl9wrBgXHJcblxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kKHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZURheSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlTmlnaHQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS10ZXh0JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdEl0ZW0uZGVzY3JpcHRpb259YFxyXG5cclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbS5hcHBlbmQod2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1JY29uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlQ29udGFpbmVyLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRleHQpICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRm9yZWNhc3RJdGVtXHJcbiAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtTaG93Rm9yZWNhc3RJdGVtfSIsImNsYXNzIFNob3dXZWF0aGVyUmVwb3J0IHtcclxuICAgIERPTSh3ZWF0aGVyUmVwb3J0KSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcuLi9zcmMvSW1hZ2VzLyR7d2VhdGhlclJlcG9ydC5kZXNjcmlwdGlvbn0uanBnJylgXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkJylcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmRDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZENpdHkuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1jaXR5JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZENpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyUmVwb3J0LmNpdHl9YFxyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uSWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyUmVwb3J0Lmljb259LnBuZ2BcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkLWltZycpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25UZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvblRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGVzY3JpcHRpb24tdGVtcGVyYXR1cmUnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQod2VhdGhlclJlcG9ydC50ZW1wZXJhdHVyZSl9wrBDYFxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb24uYXBwZW5kKHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25JY29uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uVGVtcGVyYXR1cmUpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtdGV4dCcpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmRUZXh0LnRleHRDb250ZW50ID0gYCR7d2VhdGhlclJlcG9ydC5kZXNjcmlwdGlvbn1gXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1jb250YWluZXInKVxyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNGZWVsc1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0ZlZWxzVGVtcC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkLWRldGFpbHMtaXRlbScpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzRmVlbHNUZW1wLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtNYXRoLnJvdW5kKHdlYXRoZXJSZXBvcnQuZmVlbHN0ZW1wZXJhdHVyZSl9wrBgXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1dpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1dpbmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWl0ZW0nKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1dpbmQudGV4dENvbnRlbnQgPSBgV2luZCAke01hdGgucm91bmQod2VhdGhlclJlcG9ydC53aW5kKX1tL3NgXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1ByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNQcmVzc3VyZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkLWRldGFpbHMtaXRlbScpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzUHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmUgJHtNYXRoLnJvdW5kKHdlYXRoZXJSZXBvcnQucHJlc3N1cmUgKiAwLjc1KX1tbWBcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzSHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0h1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1pdGVtJylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNIdW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSAke01hdGgucm91bmQod2VhdGhlclJlcG9ydC5odW1pZGl0eSl9JWBcclxuXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNGZWVsc1RlbXAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNXaW5kLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzUHJlc3N1cmUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNIdW1pZGl0eSlcclxuXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmQuYXBwZW5kKHdlYXRoZXJSZXBvcnRDYXJkQ2l0eSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlclJlcG9ydENhcmRUZXh0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNDb250YWluZXIpXHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJSZXBvcnRDYXJkXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1Nob3dXZWF0aGVyUmVwb3J0fSIsImNsYXNzIFdlYXRoZXJEYWlseUZvcmVjYXN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlLCBcclxuICAgICAgICAgICAgICAgIHRlbXBNaW4sIFxyXG4gICAgICAgICAgICAgICAgd2Vla2RheSwgXHJcbiAgICAgICAgICAgICAgICB0ZW1wTWF4LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBpY29uKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXHJcbiAgICAgICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IHRlbXBNaW5cclxuICAgICAgICB0aGlzLndlZWtkYXkgPSB3ZWVrZGF5XHJcbiAgICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHRlbXBNYXggICAgICAgXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5pY29uID0gaWNvblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW19IiwiY2xhc3MgV2VhdGhlclJlcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjaXR5LCBcclxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLCBcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICAgICAgICAgIGZlZWxzdGVtcGVyYXR1cmUsIFxyXG4gICAgICAgICAgICAgICAgcHJlc3N1cmUsIFxyXG4gICAgICAgICAgICAgICAgd2luZCwgXHJcbiAgICAgICAgICAgICAgICBodW1pZGl0eSwgXHJcbiAgICAgICAgICAgICAgICBpY29uKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNpdHkgPSBjaXR5XHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5mZWVsc3RlbXBlcmF0dXJlID0gZmVlbHN0ZW1wZXJhdHVyZVxyXG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBwcmVzc3VyZVxyXG4gICAgICAgIHRoaXMud2luZCA9IHdpbmRcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHlcclxuICAgICAgICB0aGlzLmljb24gPSBpY29uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7V2VhdGhlclJlcG9ydH1cclxuXHJcblxyXG4vL2NpdHkgPSByZXNwb25zZS5uYW1lXHJcbi8vZGVzY3JpcHRpb24gPSByZXNwb25zZS53ZWF0aGVyWzBdLm1haW5cclxuLy90ZW1wID0gcmVzcG9uc2UubWFpbi50ZW1wXHJcbi8vZmVlbHMgPSByZXNwb25zZS5tYWluLmZlZWxzX2xpa2VcclxuLy9wcmVzc3VyZSA9IHJlc3BvbnNlLm1haW4ucHJlc3N1cmVcclxuLy9odW1pZGl0eSA9IHJlc3BvbnNlLm1haW4uaHVtaWRpdHlcclxuLy93aW5kID0gcmVzcG9uc2Uud2luZC5zcGVlZFxyXG4vL2ljb25zcmMgPSByZXNwb25zZS53ZWF0aGVyWzBdLmljb25cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBNYWduaWZpZXIgZnJvbSAnLi9JY29ucy9tYWduaWZ5LnN2ZydcclxuaW1wb3J0IHsgV2VhdGhlclJlcG9ydCB9IGZyb20gJy4vSXRlbXMgbW9kdWxlcy9jcmVhdGVXZWF0aGVyUmVwb3J0J1xyXG5pbXBvcnQgeyBTaG93V2VhdGhlclJlcG9ydCB9IGZyb20gJy4vRE9NIG1vZHVsZXMvc2hvd1dlYXRoZXJSZXBvcnRDYXJkJ1xyXG5pbXBvcnQgeyBnZXRXZWVrRGF5IH0gZnJvbSAnLi9Db21tb25zIEZ1bmN0aW9ucy9kYXRlRnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBTaG93Rm9yZWNhc3RJdGVtIH0gZnJvbSAnLi9ET00gbW9kdWxlcy9zaG93V2VhdGhlckRhaWx5Rm9yZWNhc3QnXHJcbmltcG9ydCB7IFdlYXRoZXJEYWlseUZvcmVjYXN0SXRlbSB9IGZyb20gJy4vSXRlbXMgbW9kdWxlcy9jcmVhdGVXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW0nXHJcbmltcG9ydCB7IFNob3dGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gJy4vRE9NIG1vZHVsZXMvc2hvd0ZvcmVjYXN0J1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpXHJcblxyXG5ib2R5LmFwcGVuZCh3cmFwcGVyKVxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxud3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXHJcblxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG5jb25zdCBsZWdhbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZWdhbEluZm8uY2xhc3NMaXN0LmFkZCgnbGVnYWwtaW5mbycpXHJcbmNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcclxuc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBgVmlhIE9wZW5XZWF0aGVyTWFwYFxyXG5jb3B5UmlnaHQudGV4dENvbnRlbnQgPSAnQWxsIHJpZ2h0cyByZXNlcnZlZCdcclxubGVnYWxJbmZvLmFwcGVuZChzaXRlTmFtZSwgY29weVJpZ2h0KVxyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVnYWxJbmZvKVxyXG53cmFwcGVyLmFwcGVuZChtYWluLCBmb290ZXIpXHJcblxyXG5cclxuXHJcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcclxuc2VhcmNoRmllbGQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWZpZWxkJylcclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5zZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCdcclxuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWlucHV0Jylcclxuc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlXHJcblxyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpXHJcblxyXG5jb25zdCBzZWFyY2hCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbnNlYXJjaEJ1dHRvbkljb24uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwieGxpbms6aHJlZlwiLCBNYWduaWZpZXIpO1xyXG5zZWFyY2hCdXR0b25JY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcbnNlYXJjaEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnaW1nLXNtYWxsJyk7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbkljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gIFwicGF0aFwiXHJcbik7XHJcbnNlYXJjaEJ1dHRvbkljb25JbWcuc2V0QXR0cmlidXRlKFxyXG4gIFwiZFwiLFxyXG4gIFwiTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVpcIlxyXG4pO1xyXG5zZWFyY2hCdXR0b25JY29uLmFwcGVuZChzZWFyY2hCdXR0b25JY29uSW1nKTtcclxuc2VhcmNoQnV0dG9uLmFwcGVuZChzZWFyY2hCdXR0b25JY29uKTtcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcXVlc3RDaXR5V2VhdGhlcigpKVxyXG5cclxuXHJcbnNlYXJjaEZpZWxkLmFwcGVuZChzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uKVxyXG5cclxuaGVhZGVyLmFwcGVuZChzZWFyY2hGaWVsZClcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RDaXR5V2VhdGhlcigpIHtcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gc3VjY2Vzcyhwb3MpIHtcclxuICBjb25zdCBjcmQgPSBwb3MuY29vcmRzXHJcbiAgZ2V0Q3VycmVudFdlYXRoZXJSZXBvcnQoY3JkLmxhdGl0dWRlLCBjcmQubG9uZ2l0dWRlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcclxuICBjb25zb2xlLndhcm4oYEVSUk9SKCR7ZXJyLmNvZGV9KTogJHtlcnIubWVzc2FnZX1gKVxyXG59XHJcblxyXG5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3MsIGVycm9yKVxyXG5cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJSZXBvcnQobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpa2V5ID0gJzVlZmNkMTZlYmQyYTU2MDVhOGJlYmQyMTM5N2YzMTdlJykge1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPSR7YXBpa2V5fSZ1bml0cz1tZXRyaWNgKVxyXG4gIGxldCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICBcclxuICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZCA9IG5ldyBXZWF0aGVyUmVwb3J0KHJlc3BvbnNlSlNPTi5uYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSlNPTi5tYWluLnRlbXAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKU09OLndlYXRoZXJbMF0ubWFpbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpTT04ubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKU09OLm1haW4ucHJlc3N1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpTT04ud2luZC5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSlNPTi5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKU09OLndlYXRoZXJbMF0uaWNvbikgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBjb25zdCB3ZWF0aGVyUmVwb3J0ID0gbmV3IFNob3dXZWF0aGVyUmVwb3J0KCkuRE9NKHdlYXRoZXJSZXBvcnRDYXJkKVxyXG4gIG1haW4uYXBwZW5kKHdlYXRoZXJSZXBvcnQpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9NTkuODMyMiZsb249MzAuMjI3OCZhcHBpZD01ZWZjZDE2ZWJkMmE1NjA1YThiZWJkMjEzOTdmMzE3ZSZ1bml0cz1tZXRyaWMnLCB7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gW11cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHJlc3BvbnNlLmxpc3QpIHtcclxuICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gJ2R0X3R4dCcgJiYgaXRlbVtrZXldLmluY2x1ZGVzKCcwMDowMDowMCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuaWdodCA9IHt9XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGl0ZW1ba2V5XS5zbGljZSgwLDEwKSlcclxuICAgICAgICAgICAgICAgIGxldCB3ZWVrRGF5ID0gZ2V0V2Vla0RheShkYXRlKVxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KVxyXG4gICAgICAgICAgICAgICAgbmlnaHQuZGF0ZSA9IGAke2RhdGUuZ2V0RGF0ZSgpfSAke21vbnRofWBcclxuICAgICAgICAgICAgICAgIG5pZ2h0LnRlbXBNaW4gPSBpdGVtLm1haW4udGVtcF9taW5cclxuICAgICAgICAgICAgICAgIG5pZ2h0LndlZWtkYXkgPSB3ZWVrRGF5XHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3QucHVzaChuaWdodClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09ICdkdF90eHQnICYmIGl0ZW1ba2V5XS5pbmNsdWRlcygnMTI6MDA6MDAnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0ge31cclxuICAgICAgICAgICAgICAgIGRheS50ZW1wTWF4ID0gaXRlbS5tYWluLnRlbXBfbWF4XHJcbiAgICAgICAgICAgICAgICBkYXkuZGVzY3JpcHRpb24gPSBgJHtpdGVtLndlYXRoZXJbMF0ubWFpbn1gXHJcbiAgICAgICAgICAgICAgICBkYXkuaWNvbiA9IGAke2l0ZW0ud2VhdGhlclswXS5pY29ufWAgICBcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdC5wdXNoKGRheSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9IFxyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBTaG93Rm9yZWNhc3RDb250YWluZXIoKS5ET00oKVxyXG4gICAgICAgIG1haW4uYXBwZW5kKHdyYXBwZXIpXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZm9yZWNhc3QtY29udGFpbmVyJylcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8d2VhdGhlckZvcmVjYXN0Lmxlbmd0aCAtIDE7IGkrPTIpIHtcclxuICAgICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24od2VhdGhlckZvcmVjYXN0W2ldLCB3ZWF0aGVyRm9yZWNhc3RbaSsxXSlcclxuICAgICAgICAgIGFyci5wdXNoKG9iailcclxuICAgICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbSA9IG5ldyBXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW0ob2JqLmRhdGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoudGVtcE1pbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai53ZWVrZGF5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnRlbXBNYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmljb24pXHJcbiAgICAgICAgICBjb25zdCBzaG93Rm9yZWNhc3RJdGVtID0gbmV3IFNob3dGb3JlY2FzdEl0ZW0oKS5jcmVhdGVJdGVtRE9NKGZvcmVjYXN0SXRlbSlcclxuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2hvd0ZvcmVjYXN0SXRlbSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==