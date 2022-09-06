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

/***/ "./src/API modules/weatherAPIfunctions.js":
/*!************************************************!*\
  !*** ./src/API modules/weatherAPIfunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "getCurrentWeatherReport": () => (/* binding */ getCurrentWeatherReport),
/* harmony export */   "requestCityWeather": () => (/* binding */ requestCityWeather),
/* harmony export */   "success": () => (/* binding */ success)
/* harmony export */ });
/* harmony import */ var _Items_modules_createWeatherReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Items modules/createWeatherReport */ "./src/Items modules/createWeatherReport.js");
/* harmony import */ var _DOM_modules_showWeatherReportCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM modules/showWeatherReportCard */ "./src/DOM modules/showWeatherReportCard.js");
/* harmony import */ var _Commons_Functions_dateFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commons Functions/dateFunctions */ "./src/Commons Functions/dateFunctions.js");
/* harmony import */ var _DOM_modules_showWeatherDailyForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM modules/showWeatherDailyForecast */ "./src/DOM modules/showWeatherDailyForecast.js");
/* harmony import */ var _Items_modules_createWeatherDailyForecastItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Items modules/createWeatherDailyForecastItem */ "./src/Items modules/createWeatherDailyForecastItem.js");
/* harmony import */ var _DOM_modules_showForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DOM modules/showForecast */ "./src/DOM modules/showForecast.js");








const defaultLatitude = 55.7504461
const defaultLongitude = 37.6174943

async function requestCityWeather(city, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`)
    let responseJSON = await response.json()
    let responceLatitude = responseJSON[0].lat
    let responceLongitude = responseJSON[0].lon 
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }  
    getCurrentWeatherReport(responceLatitude, responceLongitude)
    getDailyForecast(responceLatitude, responceLongitude)
}
  
function success(pos) {
    const crd = pos.coords
    getCurrentWeatherReport(crd.latitude, crd.longitude)
    getDailyForecast(crd.latitude, crd.longitude)
}

function error() {
    getCurrentWeatherReport(defaultLatitude, defaultLongitude)
    getDailyForecast(defaultLatitude, defaultLongitude)
}
  
async function getCurrentWeatherReport(latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
    let responseJSON = await response.json()
    const weatherReportCard = new _Items_modules_createWeatherReport__WEBPACK_IMPORTED_MODULE_0__.WeatherReport(responseJSON.name, 
                                                responseJSON.main.temp, 
                                                responseJSON.weather[0].main, 
                                                responseJSON.main.feels_like,
                                                responseJSON.main.pressure,
                                                responseJSON.wind.speed,
                                                responseJSON.main.humidity,
                                                responseJSON.weather[0].icon)                        
    const weatherReport = new _DOM_modules_showWeatherReportCard__WEBPACK_IMPORTED_MODULE_1__.ShowWeatherReport().DOM(weatherReportCard)
    const main = document.querySelector('main')
    main.append(weatherReport)
}
  
  
async function getDailyForecast (latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
    let responseJSON = await response.json()
    const weatherForecast = []
    const main = document.querySelector('main')
          for (let item of responseJSON.list) {
            for (let key in item) {
              if (key == 'dt_txt' && item[key].includes('00:00:00')) {
                  const night = {}
                  let date = new Date(item[key].slice(0,10))
                  let weekDay = (0,_Commons_Functions_dateFunctions__WEBPACK_IMPORTED_MODULE_2__.getWeekDay)(date)
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
          const wrapper = new _DOM_modules_showForecast__WEBPACK_IMPORTED_MODULE_5__.ShowForecastContainer().DOM()
          main.append(wrapper)
          const container = document.querySelector('.weather-forecast-container')
          for (let i=0; i<weatherForecast.length - 1; i+=2) {
            const obj = Object.assign(weatherForecast[i], weatherForecast[i+1])
            arr.push(obj)
            const forecastItem = new _Items_modules_createWeatherDailyForecastItem__WEBPACK_IMPORTED_MODULE_4__.WeatherDailyForecastItem(obj.date, 
                                                              obj.tempMin, 
                                                              obj.weekday, 
                                                              obj.tempMax,
                                                              obj.description,
                                                              obj.icon)
            const showForecastItem = new _DOM_modules_showWeatherDailyForecast__WEBPACK_IMPORTED_MODULE_3__.ShowForecastItem().createItemDOM(forecastItem)
            container.append(showForecastItem)
          }
}

  

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
            weatherForecastItemIcon.src = `https://openweathermap.org/img/wn/${forecastItem.icon}@2x.png` 
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
/* harmony import */ var _API_modules_weatherAPIfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API modules/weatherAPIfunctions */ "./src/API modules/weatherAPIfunctions.js");




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

searchButton.addEventListener('click', () => {
  (0,_API_modules_weatherAPIfunctions__WEBPACK_IMPORTED_MODULE_2__.requestCityWeather)(searchInput.value)
})

searchField.append(searchInput, searchButton)
header.append(searchField)

navigator.geolocation.getCurrentPosition(_API_modules_weatherAPIfunctions__WEBPACK_IMPORTED_MODULE_2__.success, _API_modules_weatherAPIfunctions__WEBPACK_IMPORTED_MODULE_2__.error)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtB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O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUN1QjtBQUNvRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSwrQ0FBUztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRkFBa0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFFQUFPLEVBQUUsbUVBQUssQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL0FQSSBtb2R1bGVzL3dlYXRoZXJBUElmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvQ29tbW9ucyBGdW5jdGlvbnMvZGF0ZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9ET00gbW9kdWxlcy9zaG93Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvRE9NIG1vZHVsZXMvc2hvd1dlYXRoZXJEYWlseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL0RPTSBtb2R1bGVzL3Nob3dXZWF0aGVyUmVwb3J0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9JdGVtcyBtb2R1bGVzL2NyZWF0ZVdlYXRoZXJEYWlseUZvcmVjYXN0SXRlbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9JdGVtcyBtb2R1bGVzL2NyZWF0ZVdlYXRoZXJSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgaDEsIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zOSk7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDExMSwgMTQ1KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC45OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxMTEsIDE0NSk7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMC45NTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWZpZWxkIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdhcDogNTByZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHNjYWxlOiAxLjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbWctc21hbGwge1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1nLWJpZyB7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gfVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDUwLCAzMyUsIDI1JSwgLjQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggaHNsYSg1MCwgMzMlLCAyNSUsIC40KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG9yZGVyOiAxXFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWNpdHkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuOHJlbVxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXNjcmlwdGlvbi10ZW1wZXJhdHVyZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWltZyB7XFxyXFxuICAgIHNjYWxlOiAxLjM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBoc2xhKDAsIDAlLCA1NSUsIDEpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgb3JkZXI6IDJcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxNHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgNTUlLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZFxcclxcbiAgfVxcclxcbiAgLndlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXItZGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZFxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyLWRhdGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtcHJpbWFsIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtLXRlbXBlcmF0dXJlLXNlY29uZGFyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sZWdhbC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3Qtd3JhcHBlciB7XFxyXFxuICAgIG9yZGVyOiAxMDBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7Ozs7Ozs7O0NBWUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1Qsd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7Ozs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztBQUVGO0lBQ0ksWUFBWTtDQUNmOzs7QUFHRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDtBQUNKOzs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qjs7QUFFSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1o7RUFDRjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjs7RUFFRjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7OztBQUlGO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOzs7QUFHQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBoMSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM5KTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTExLCAxNDUpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICBvcGFjaXR5OiAwLjk5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDExMSwgMTQ1KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBvcGFjaXR5OiAwLjk1O1xcclxcbiAgICBib3gtc2hhZG93OiAwIC0ycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtZmllbGQge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ2FwOiA1MHJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgc2NhbGU6IDEuMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmltZy1zbWFsbCB7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbi5pbWctYmlnIHtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiB9XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMTZyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoNTAsIDMzJSwgMjUlLCAuNCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCBoc2xhKDUwLCAzMyUsIDI1JSwgLjQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgb3JkZXI6IDFcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtY2l0eSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC44cmVtXFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWRlc2NyaXB0aW9uLXRlbXBlcmF0dXJlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1yZXBvcnQtY2FyZC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLXJlcG9ydC1jYXJkLWRldGFpbHMtaXRlbSB7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItcmVwb3J0LWNhcmQtaW1nIHtcXHJcXG4gICAgc2NhbGU6IDEuMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGhzbGEoMCwgMCUsIDU1JSwgMSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBvcmRlcjogMlxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDE0cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCA1NSUsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcbiAgLndlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kXFxyXFxuICB9XFxyXFxuICAud2VhdGhlci1mb3JlY2FzdC1pdGVtLWhlYWRlci1kYXkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kXFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLndlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXItZGF0ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1wcmltYWwge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWl0ZW0tdGVtcGVyYXR1cmUtc2Vjb25kYXJ5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC1pdGVtLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWZvcmVjYXN0LWltZyB7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxlZ2FsLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci1mb3JlY2FzdC13cmFwcGVyIHtcXHJcXG4gICAgb3JkZXI6IDEwMFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFdlYXRoZXJSZXBvcnQgfSBmcm9tICcuLi9JdGVtcyBtb2R1bGVzL2NyZWF0ZVdlYXRoZXJSZXBvcnQnXHJcbmltcG9ydCB7IFNob3dXZWF0aGVyUmVwb3J0IH0gZnJvbSAnLi4vRE9NIG1vZHVsZXMvc2hvd1dlYXRoZXJSZXBvcnRDYXJkJ1xyXG5pbXBvcnQgeyBnZXRXZWVrRGF5IH0gZnJvbSAnLi4vQ29tbW9ucyBGdW5jdGlvbnMvZGF0ZUZ1bmN0aW9ucydcclxuaW1wb3J0IHsgU2hvd0ZvcmVjYXN0SXRlbSB9IGZyb20gJy4uL0RPTSBtb2R1bGVzL3Nob3dXZWF0aGVyRGFpbHlGb3JlY2FzdCdcclxuaW1wb3J0IHsgV2VhdGhlckRhaWx5Rm9yZWNhc3RJdGVtIH0gZnJvbSAnLi4vSXRlbXMgbW9kdWxlcy9jcmVhdGVXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW0nXHJcbmltcG9ydCB7IFNob3dGb3JlY2FzdENvbnRhaW5lciB9IGZyb20gJy4uL0RPTSBtb2R1bGVzL3Nob3dGb3JlY2FzdCdcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0TGF0aXR1ZGUgPSA1NS43NTA0NDYxXHJcbmNvbnN0IGRlZmF1bHRMb25naXR1ZGUgPSAzNy42MTc0OTQzXHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q2l0eVdlYXRoZXIoY2l0eSwgYXBpa2V5ID0gJzVlZmNkMTZlYmQyYTU2MDVhOGJlYmQyMTM5N2YzMTdlJykge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9MSZhcHBpZD0ke2FwaWtleX1gKVxyXG4gICAgbGV0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgbGV0IHJlc3BvbmNlTGF0aXR1ZGUgPSByZXNwb25zZUpTT05bMF0ubGF0XHJcbiAgICBsZXQgcmVzcG9uY2VMb25naXR1ZGUgPSByZXNwb25zZUpTT05bMF0ubG9uIFxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxyXG4gICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcclxuICAgIH0gIFxyXG4gICAgZ2V0Q3VycmVudFdlYXRoZXJSZXBvcnQocmVzcG9uY2VMYXRpdHVkZSwgcmVzcG9uY2VMb25naXR1ZGUpXHJcbiAgICBnZXREYWlseUZvcmVjYXN0KHJlc3BvbmNlTGF0aXR1ZGUsIHJlc3BvbmNlTG9uZ2l0dWRlKVxyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIHN1Y2Nlc3MocG9zKSB7XHJcbiAgICBjb25zdCBjcmQgPSBwb3MuY29vcmRzXHJcbiAgICBnZXRDdXJyZW50V2VhdGhlclJlcG9ydChjcmQubGF0aXR1ZGUsIGNyZC5sb25naXR1ZGUpXHJcbiAgICBnZXREYWlseUZvcmVjYXN0KGNyZC5sYXRpdHVkZSwgY3JkLmxvbmdpdHVkZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3IoKSB7XHJcbiAgICBnZXRDdXJyZW50V2VhdGhlclJlcG9ydChkZWZhdWx0TGF0aXR1ZGUsIGRlZmF1bHRMb25naXR1ZGUpXHJcbiAgICBnZXREYWlseUZvcmVjYXN0KGRlZmF1bHRMYXRpdHVkZSwgZGVmYXVsdExvbmdpdHVkZSlcclxufVxyXG4gIFxyXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlclJlcG9ydChsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhcGlrZXkgPSAnNWVmY2QxNmViZDJhNTYwNWE4YmViZDIxMzk3ZjMxN2UnKSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9JHthcGlrZXl9JnVuaXRzPW1ldHJpY2ApXHJcbiAgICBsZXQgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZCA9IG5ldyBXZWF0aGVyUmVwb3J0KHJlc3BvbnNlSlNPTi5uYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKU09OLm1haW4udGVtcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSlNPTi53ZWF0aGVyWzBdLm1haW4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpTT04ubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpTT04ubWFpbi5wcmVzc3VyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKU09OLndpbmQuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSlNPTi5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpTT04ud2VhdGhlclswXS5pY29uKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3Qgd2VhdGhlclJlcG9ydCA9IG5ldyBTaG93V2VhdGhlclJlcG9ydCgpLkRPTSh3ZWF0aGVyUmVwb3J0Q2FyZClcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcclxuICAgIG1haW4uYXBwZW5kKHdlYXRoZXJSZXBvcnQpXHJcbn1cclxuICBcclxuICBcclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlGb3JlY2FzdCAobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpa2V5ID0gJzVlZmNkMTZlYmQyYTU2MDVhOGJlYmQyMTM5N2YzMTdlJykge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD0ke2FwaWtleX0mdW5pdHM9bWV0cmljYClcclxuICAgIGxldCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IFtdXHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXHJcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHJlc3BvbnNlSlNPTi5saXN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGtleSA9PSAnZHRfdHh0JyAmJiBpdGVtW2tleV0uaW5jbHVkZXMoJzAwOjAwOjAwJykpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbmlnaHQgPSB7fVxyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGl0ZW1ba2V5XS5zbGljZSgwLDEwKSlcclxuICAgICAgICAgICAgICAgICAgbGV0IHdlZWtEYXkgPSBnZXRXZWVrRGF5KGRhdGUpXHJcbiAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgbmlnaHQuZGF0ZSA9IGAke2RhdGUuZ2V0RGF0ZSgpfSAke21vbnRofWBcclxuICAgICAgICAgICAgICAgICAgbmlnaHQudGVtcE1pbiA9IGl0ZW0ubWFpbi50ZW1wX21pblxyXG4gICAgICAgICAgICAgICAgICBuaWdodC53ZWVrZGF5ID0gd2Vla0RheVxyXG4gICAgICAgICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3QucHVzaChuaWdodClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGtleSA9PSAnZHRfdHh0JyAmJiBpdGVtW2tleV0uaW5jbHVkZXMoJzEyOjAwOjAwJykpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF5ID0ge31cclxuICAgICAgICAgICAgICAgICAgZGF5LnRlbXBNYXggPSBpdGVtLm1haW4udGVtcF9tYXhcclxuICAgICAgICAgICAgICAgICAgZGF5LmRlc2NyaXB0aW9uID0gYCR7aXRlbS53ZWF0aGVyWzBdLm1haW59YFxyXG4gICAgICAgICAgICAgICAgICBkYXkuaWNvbiA9IGAke2l0ZW0ud2VhdGhlclswXS5pY29ufWAgICBcclxuICAgICAgICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0LnB1c2goZGF5KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBjb25zdCBhcnIgPSBbXVxyXG4gICAgICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBTaG93Rm9yZWNhc3RDb250YWluZXIoKS5ET00oKVxyXG4gICAgICAgICAgbWFpbi5hcHBlbmQod3JhcHBlcilcclxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWZvcmVjYXN0LWNvbnRhaW5lcicpXHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8d2VhdGhlckZvcmVjYXN0Lmxlbmd0aCAtIDE7IGkrPTIpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmFzc2lnbih3ZWF0aGVyRm9yZWNhc3RbaV0sIHdlYXRoZXJGb3JlY2FzdFtpKzFdKVxyXG4gICAgICAgICAgICBhcnIucHVzaChvYmopXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbSA9IG5ldyBXZWF0aGVyRGFpbHlGb3JlY2FzdEl0ZW0ob2JqLmRhdGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai50ZW1wTWluLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoud2Vla2RheSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnRlbXBNYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pY29uKVxyXG4gICAgICAgICAgICBjb25zdCBzaG93Rm9yZWNhc3RJdGVtID0gbmV3IFNob3dGb3JlY2FzdEl0ZW0oKS5jcmVhdGVJdGVtRE9NKGZvcmVjYXN0SXRlbSlcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChzaG93Rm9yZWNhc3RJdGVtKVxyXG4gICAgICAgICAgfVxyXG59XHJcblxyXG4gZXhwb3J0IHtyZXF1ZXN0Q2l0eVdlYXRoZXIsIGdldEN1cnJlbnRXZWF0aGVyUmVwb3J0LCBlcnJvciwgc3VjY2Vzc30gIiwiZnVuY3Rpb24gY29udmVydERhdGVUb1R4dChkYXRlKSB7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICBsZXQgZGF5ID0gIGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgICAgIG1vbnRoID0gYDAke21vbnRofWBcclxuICAgIH0gZWxzZSBtb250aCA9IGAke21vbnRofWBcclxuICAgIGlmIChkYXk8IDEwKSB7XHJcbiAgICAgICAgZGF5ID0gYDAke2RheX1gXHJcbiAgICB9IGVsc2UgZGF5ID0gYCR7ZGF5fWBcclxuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fWBcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFR4dFRvRGF0ZSh0ZXh0RGF0ZSkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRleHREYXRlKVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFdlZWtEYXkoZGF0ZSkge1xyXG4gICAgbGV0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXHJcbiAgICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXVxyXG4gIH1cclxuXHJcbmV4cG9ydCB7Y29udmVydERhdGVUb1R4dCwgY29udmVydFR4dFRvRGF0ZSwgZ2V0V2Vla0RheX0iLCJjbGFzcyBTaG93Rm9yZWNhc3RDb250YWluZXIge1xyXG4gICAgRE9NKCkge1xyXG4gICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgd2VhdGhlckZvcmVjYXN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LXdyYXBwZXInKVxyXG4gICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgIHdlYXRoZXJGb3JlY2FzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWhlYWRlcicpXHJcbiAgICAgIHdlYXRoZXJGb3JlY2FzdEhlYWRlci50ZXh0Q29udGVudCA9ICdEYWlseSBmb3JlY2FzdCdcclxuICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgd2VhdGhlckZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtY29udGFpbmVyJylcclxuICAgICAgd2VhdGhlckZvcmVjYXN0V3JhcHBlci5hcHBlbmQod2VhdGhlckZvcmVjYXN0SGVhZGVyLCB3ZWF0aGVyRm9yZWNhc3RDb250YWluZXIpXHJcbiAgICBcclxuICAgICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdFdyYXBwZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtTaG93Rm9yZWNhc3RDb250YWluZXJ9XHJcblxyXG4iLCJjbGFzcyBTaG93Rm9yZWNhc3RJdGVtIHtcclxuICAgICAgY3JlYXRlSXRlbURPTShmb3JlY2FzdEl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1pdGVtJylcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1pdGVtLWhlYWRlcicpXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyRGF5LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS1oZWFkZXItZGF5JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlckRheS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0SXRlbS53ZWVrZGF5fWAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbUhlYWRlckRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyRGF0ZS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWZvcmVjYXN0LWl0ZW0taGVhZGVyLWRhdGUnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyRGF0ZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0SXRlbS5kYXRlfWBcclxuXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXIuYXBwZW5kKHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXksIHdlYXRoZXJGb3JlY2FzdEl0ZW1IZWFkZXJEYXRlKSBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1JY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtmb3JlY2FzdEl0ZW0uaWNvbn1AMngucG5nYCBcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1pbWcnKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1jb250YWluZXInKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlRGF5LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1wcmltYWwnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVEYXkudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGZvcmVjYXN0SXRlbS5tYXhUZW1wZXJhdHVyZSl9wrBgXHJcblxyXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVOaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZU5pZ2h0LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZm9yZWNhc3QtaXRlbS10ZW1wZXJhdHVyZS1zZWNvbmRhcnknKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVOaWdodC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZm9yZWNhc3RJdGVtLm1pblRlbXBlcmF0dXJlKX3CsGBcclxuXHJcbiAgICAgICAgICAgIHdlYXRoZXJGb3JlY2FzdEl0ZW1UZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmQod2VhdGhlckZvcmVjYXN0SXRlbVRlbXBlcmF0dXJlRGF5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVOaWdodClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1mb3JlY2FzdC1pdGVtLXRleHQnKVxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0SXRlbS5kZXNjcmlwdGlvbn1gXHJcblxyXG4gICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtLmFwcGVuZCh3ZWF0aGVyRm9yZWNhc3RJdGVtSGVhZGVyLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlckZvcmVjYXN0SXRlbUljb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGVtcGVyYXR1cmVDb250YWluZXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyRm9yZWNhc3RJdGVtVGV4dCkgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdEl0ZW1cclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Nob3dGb3JlY2FzdEl0ZW19IiwiY2xhc3MgU2hvd1dlYXRoZXJSZXBvcnQge1xyXG4gICAgRE9NKHdlYXRoZXJSZXBvcnQpIHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxyXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJy4uL3NyYy9JbWFnZXMvJHt3ZWF0aGVyUmVwb3J0LmRlc2NyaXB0aW9ufS5qcGcnKWBcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQnKVxyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkQ2l0eS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkLWNpdHknKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkQ2l0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJSZXBvcnQuY2l0eX1gXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1kZXNjcmlwdGlvbicpXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25JY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJSZXBvcnQuaWNvbn0ucG5nYFxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtaW1nJylcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvblRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1kZXNjcmlwdGlvbi10ZW1wZXJhdHVyZScpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyUmVwb3J0LnRlbXBlcmF0dXJlKX3CsENgXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvbi5hcHBlbmQod2VhdGhlclJlcG9ydENhcmREZXNjcmlwdGlvbkljb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGVzY3JpcHRpb25UZW1wZXJhdHVyZSlcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZFRleHQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC10ZXh0JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZFRleHQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyUmVwb3J0LmRlc2NyaXB0aW9ufWBcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0ZlZWxzVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzRmVlbHNUZW1wLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1pdGVtJylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNGZWVsc1RlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke01hdGgucm91bmQod2VhdGhlclJlcG9ydC5mZWVsc3RlbXBlcmF0dXJlKX3CsGBcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzV2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzV2luZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXJlcG9ydC1jYXJkLWRldGFpbHMtaXRlbScpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzV2luZC50ZXh0Q29udGVudCA9IGBXaW5kICR7TWF0aC5yb3VuZCh3ZWF0aGVyUmVwb3J0LndpbmQpfW0vc2BcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzUHJlc3N1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1ByZXNzdXJlLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItcmVwb3J0LWNhcmQtZGV0YWlscy1pdGVtJylcclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNQcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZSAke01hdGgucm91bmQod2VhdGhlclJlcG9ydC5wcmVzc3VyZSAqIDAuNzUpfW1tYFxyXG5cclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgd2VhdGhlclJlcG9ydENhcmREZXRhaWxzSHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1yZXBvcnQtY2FyZC1kZXRhaWxzLWl0ZW0nKVxyXG4gICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0h1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5ICR7TWF0aC5yb3VuZCh3ZWF0aGVyUmVwb3J0Lmh1bWlkaXR5KX0lYFxyXG5cclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNDb250YWluZXIuYXBwZW5kKHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0ZlZWxzVGVtcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc1dpbmQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERldGFpbHNQcmVzc3VyZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0h1bWlkaXR5KVxyXG5cclxuICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZC5hcHBlbmQod2VhdGhlclJlcG9ydENhcmRDaXR5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZERlc2NyaXB0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyUmVwb3J0Q2FyZFRleHQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXJSZXBvcnRDYXJkRGV0YWlsc0NvbnRhaW5lcilcclxuICAgICAgICByZXR1cm4gd2VhdGhlclJlcG9ydENhcmRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U2hvd1dlYXRoZXJSZXBvcnR9IiwiY2xhc3MgV2VhdGhlckRhaWx5Rm9yZWNhc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGUsIFxyXG4gICAgICAgICAgICAgICAgdGVtcE1pbiwgXHJcbiAgICAgICAgICAgICAgICB3ZWVrZGF5LCBcclxuICAgICAgICAgICAgICAgIHRlbXBNYXgsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGljb24pIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuICAgICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gdGVtcE1pblxyXG4gICAgICAgIHRoaXMud2Vla2RheSA9IHdlZWtkYXlcclxuICAgICAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gdGVtcE1heCAgICAgICBcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmljb24gPSBpY29uXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1dlYXRoZXJEYWlseUZvcmVjYXN0SXRlbX0iLCJjbGFzcyBXZWF0aGVyUmVwb3J0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNpdHksIFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmUsIFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgICAgICAgZmVlbHN0ZW1wZXJhdHVyZSwgXHJcbiAgICAgICAgICAgICAgICBwcmVzc3VyZSwgXHJcbiAgICAgICAgICAgICAgICB3aW5kLCBcclxuICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBcclxuICAgICAgICAgICAgICAgIGljb24pIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHlcclxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLmZlZWxzdGVtcGVyYXR1cmUgPSBmZWVsc3RlbXBlcmF0dXJlXHJcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlXHJcbiAgICAgICAgdGhpcy53aW5kID0gd2luZFxyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eVxyXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtXZWF0aGVyUmVwb3J0fVxyXG5cclxuXHJcbi8vY2l0eSA9IHJlc3BvbnNlLm5hbWVcclxuLy9kZXNjcmlwdGlvbiA9IHJlc3BvbnNlLndlYXRoZXJbMF0ubWFpblxyXG4vL3RlbXAgPSByZXNwb25zZS5tYWluLnRlbXBcclxuLy9mZWVscyA9IHJlc3BvbnNlLm1haW4uZmVlbHNfbGlrZVxyXG4vL3ByZXNzdXJlID0gcmVzcG9uc2UubWFpbi5wcmVzc3VyZVxyXG4vL2h1bWlkaXR5ID0gcmVzcG9uc2UubWFpbi5odW1pZGl0eVxyXG4vL3dpbmQgPSByZXNwb25zZS53aW5kLnNwZWVkXHJcbi8vaWNvbnNyYyA9IHJlc3BvbnNlLndlYXRoZXJbMF0uaWNvblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IE1hZ25pZmllciBmcm9tICcuL0ljb25zL21hZ25pZnkuc3ZnJ1xyXG5pbXBvcnQgeyByZXF1ZXN0Q2l0eVdlYXRoZXIsIGdldEN1cnJlbnRXZWF0aGVyUmVwb3J0LCBlcnJvciwgc3VjY2VzcyB9IGZyb20gJy4vQVBJIG1vZHVsZXMvd2VhdGhlckFQSWZ1bmN0aW9ucydcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpXHJcblxyXG5ib2R5LmFwcGVuZCh3cmFwcGVyKVxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuY29uc3QgbGVnYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGVnYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2xlZ2FsLWluZm8nKVxyXG5jb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNpdGVOYW1lLnRleHRDb250ZW50ID0gYFZpYSBPcGVuV2VhdGhlck1hcGBcclxuY29weVJpZ2h0LnRleHRDb250ZW50ID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQnXHJcbmxlZ2FsSW5mby5hcHBlbmQoc2l0ZU5hbWUsIGNvcHlSaWdodClcclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZ2FsSW5mbylcclxud3JhcHBlci5hcHBlbmQobWFpbiwgZm9vdGVyKVxyXG5cclxuXHJcblxyXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNlYXJjaEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1maWVsZCcpXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5zZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCdcclxuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWlucHV0Jylcclxuc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlXHJcblxyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpXHJcblxyXG5jb25zdCBzZWFyY2hCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbnNlYXJjaEJ1dHRvbkljb24uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwieGxpbms6aHJlZlwiLCBNYWduaWZpZXIpO1xyXG5zZWFyY2hCdXR0b25JY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcbnNlYXJjaEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnaW1nLXNtYWxsJyk7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbkljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gIFwicGF0aFwiXHJcbik7XHJcbnNlYXJjaEJ1dHRvbkljb25JbWcuc2V0QXR0cmlidXRlKFxyXG4gIFwiZFwiLFxyXG4gIFwiTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVpcIlxyXG4pO1xyXG5zZWFyY2hCdXR0b25JY29uLmFwcGVuZChzZWFyY2hCdXR0b25JY29uSW1nKTtcclxuc2VhcmNoQnV0dG9uLmFwcGVuZChzZWFyY2hCdXR0b25JY29uKTtcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZXF1ZXN0Q2l0eVdlYXRoZXIoc2VhcmNoSW5wdXQudmFsdWUpXHJcbn0pXHJcblxyXG5zZWFyY2hGaWVsZC5hcHBlbmQoc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbilcclxuaGVhZGVyLmFwcGVuZChzZWFyY2hGaWVsZClcclxuXHJcbm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9