/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: linear-gradient(135deg, #0088fffc 0%, #ffffff 100%); */
  background-color: #2575fc;
}
#loading {
  width: 100px;
  height: 100px;
}
.searchLogo{
  filter: invert(1);
}
img {
  width: 50px;
  height: 50px;
}
.switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}
.switch {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  margin: 0 15px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2575fc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 32px;
  width: 32px;
  left: 44px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #ff9500;
}

input:checked + .slider:before {
  transform: translateX(-40px);
}

.unit-labels {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;
}

.unit {
  font-weight: 600;
  font-size: 18px;
  color: #333;
  transition: color 0.3s;
}

.unit.active {
  color: #ff9500;
}

.unit:last-child.active {
  color: #2575fc;
}

#header {
  position: static;
  width: 100vw;
  height: 130px;
  background-color: white;
  color: #2575fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 60px;
  border: none;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);
}

#searchBar{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 70px;
}
#cityInput{
  background-color: #679df9;
  color: white;
  font-size: large;
  padding: 16px;
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 40px;
  font-weight: 600;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);
}
#cityInput::placeholder{
  color: rgb(241, 241, 241);
}
#cityInput:focus{
  outline: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
#searchBtn{
  background-color: #ff9500;
  color: white;
  font-size: large;
  padding: 8px;
  height: 65px;
  width: 65px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.1s cubic-bezier(.4,2,.6,1);
}
#searchBtn:active {
  transform: scale(0.95);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
#searchBtn:disabled {
  background-color: #bfbfbf;
  cursor: not-allowed;
}
#mainForcast {
  background-color: white;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  color: #2575fc;
  width: 700px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
#cityTitle {
  font-size: 36px;
  margin-bottom: 10px;
}
#currentTemp{
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 10px;
}
#currnetCondition{
  font-size: 24px;
  margin-bottom: 10px;
}
#currentOthers{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.othersElement{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d2e1fc;
  border-radius: 15px;
  padding: 25px 35px;
  font-weight: 600;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

#fiveDayForcast{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
}
.dayForcast{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 250px;
  height: 280px;
  background-color: #d2e1fc;
  color: #2575fc;
  border-radius: 15px;
  padding: 25px 35px;
  font-weight: 600;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.day{
  font-size: larger;
}
#weatherDetailsText, #fiveDayForcastText{
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}
#weatherDetails{
  display: flex;
  gap: 60px;
  margin-bottom: 60px;
}
.weatherDetail{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 230px;
  background-color: #d2e1fc;
  color: #2575fc;
  border-radius: 15px;
  padding: 25px 35px;
  font-weight: 600;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
#footer{
  background-color: #d2e1fc;
  border-radius: 15px 15px 0px 0px;
  padding: 25px 35px;
  color: #2575fc;
  width: 35vw;
  text-align: center;
}
a{
  color: #2575fc;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  /* background: linear-gradient(135deg, #0088fffc 0%, #ffffff 100%); */\n  background-color: #2575fc;\n}\n#loading {\n  width: 100px;\n  height: 100px;\n}\n.searchLogo{\n  filter: invert(1);\n}\nimg {\n  width: 50px;\n  height: 50px;\n}\n.switch-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 0;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 80px;\n  height: 40px;\n  margin: 0 15px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2575fc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 32px;\n  width: 32px;\n  left: 44px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: #ff9500;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(-40px);\n}\n\n.unit-labels {\n  display: flex;\n  justify-content: space-between;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.unit {\n  font-weight: 600;\n  font-size: 18px;\n  color: #333;\n  transition: color 0.3s;\n}\n\n.unit.active {\n  color: #ff9500;\n}\n\n.unit:last-child.active {\n  color: #2575fc;\n}\n\n#header {\n  position: static;\n  width: 100vw;\n  height: 130px;\n  background-color: white;\n  color: #2575fc;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 40px;\n  margin-bottom: 60px;\n  border: none;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);\n}\n\n#searchBar{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 70px;\n}\n#cityInput{\n  background-color: #679df9;\n  color: white;\n  font-size: large;\n  padding: 16px;\n  width: 400px;\n  height: 50px;\n  border: none;\n  border-radius: 40px;\n  font-weight: 600;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);\n}\n#cityInput::placeholder{\n  color: rgb(241, 241, 241);\n}\n#cityInput:focus{\n  outline: none;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n#searchBtn{\n  background-color: #ff9500;\n  color: white;\n  font-size: large;\n  padding: 8px;\n  height: 65px;\n  width: 65px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.1s cubic-bezier(.4,2,.6,1);\n}\n#searchBtn:active {\n  transform: scale(0.95);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n#searchBtn:disabled {\n  background-color: #bfbfbf;\n  cursor: not-allowed;\n}\n#mainForcast {\n  background-color: white;\n  text-align: center;\n  margin-bottom: 40px;\n  border-radius: 20px;\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  flex-direction: column;\n  color: #2575fc;\n  width: 700px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n#cityTitle {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n#currentTemp{\n  font-size: 72px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n#currnetCondition{\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n#currentOthers{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n}\n.othersElement{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #d2e1fc;\n  border-radius: 15px;\n  padding: 25px 35px;\n  font-weight: 600;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n\n#fiveDayForcast{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 80px;\n}\n.dayForcast{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 250px;\n  height: 280px;\n  background-color: #d2e1fc;\n  color: #2575fc;\n  border-radius: 15px;\n  padding: 25px 35px;\n  font-weight: 600;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n.day{\n  font-size: larger;\n}\n#weatherDetailsText, #fiveDayForcastText{\n  font-size: 30px;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 20px;\n}\n#weatherDetails{\n  display: flex;\n  gap: 60px;\n  margin-bottom: 60px;\n}\n.weatherDetail{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 230px;\n  background-color: #d2e1fc;\n  color: #2575fc;\n  border-radius: 15px;\n  padding: 25px 35px;\n  font-weight: 600;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n#footer{\n  background-color: #d2e1fc;\n  border-radius: 15px 15px 0px 0px;\n  padding: 25px 35px;\n  color: #2575fc;\n  width: 35vw;\n  text-align: center;\n}\na{\n  color: #2575fc;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$":
/*!************************************************************!*\
  !*** ./src/imgs/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AppICon.png": "./src/imgs/AppICon.png",
	"./circle.png": "./src/imgs/circle.png",
	"./clear.png": "./src/imgs/clear.png",
	"./cloud.png": "./src/imgs/cloud.png",
	"./direction.png": "./src/imgs/direction.png",
	"./down.png": "./src/imgs/down.png",
	"./fog.png": "./src/imgs/fog.png",
	"./hussicane.png": "./src/imgs/hussicane.png",
	"./magnify.svg": "./src/imgs/magnify.svg",
	"./partiallyCloudy.png": "./src/imgs/partiallyCloudy.png",
	"./rain.png": "./src/imgs/rain.png",
	"./ray.png": "./src/imgs/ray.png",
	"./ripples.svg": "./src/imgs/ripples.svg",
	"./science.png": "./src/imgs/science.png",
	"./snow.png": "./src/imgs/snow.png",
	"./sun.png": "./src/imgs/sun.png",
	"./water.png": "./src/imgs/water.png",
	"./wind.png": "./src/imgs/wind.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/imgs/AppICon.png":
/*!******************************!*\
  !*** ./src/imgs/AppICon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4a6c530b1283853cdf3.png";

/***/ }),

/***/ "./src/imgs/circle.png":
/*!*****************************!*\
  !*** ./src/imgs/circle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4c448e4491b7b7db0f9c.png";

/***/ }),

/***/ "./src/imgs/clear.png":
/*!****************************!*\
  !*** ./src/imgs/clear.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b536b7ec7c50667a0b10.png";

/***/ }),

/***/ "./src/imgs/cloud.png":
/*!****************************!*\
  !*** ./src/imgs/cloud.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "474546d2dae26e8985be.png";

/***/ }),

/***/ "./src/imgs/direction.png":
/*!********************************!*\
  !*** ./src/imgs/direction.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8ff2489d1e9dd48b057.png";

/***/ }),

/***/ "./src/imgs/down.png":
/*!***************************!*\
  !*** ./src/imgs/down.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "04304bf1d519a6dfaa8e.png";

/***/ }),

/***/ "./src/imgs/fog.png":
/*!**************************!*\
  !*** ./src/imgs/fog.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2ab5ef195e3f561a91cc.png";

/***/ }),

/***/ "./src/imgs/hussicane.png":
/*!********************************!*\
  !*** ./src/imgs/hussicane.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c921b53cc0d6711f96f0.png";

/***/ }),

/***/ "./src/imgs/magnify.svg":
/*!******************************!*\
  !*** ./src/imgs/magnify.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ }),

/***/ "./src/imgs/partiallyCloudy.png":
/*!**************************************!*\
  !*** ./src/imgs/partiallyCloudy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c42d3a5bd5e2ff4b123.png";

/***/ }),

/***/ "./src/imgs/rain.png":
/*!***************************!*\
  !*** ./src/imgs/rain.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "08525d542ae0889429a7.png";

/***/ }),

/***/ "./src/imgs/ray.png":
/*!**************************!*\
  !*** ./src/imgs/ray.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "354bf9ed83088cff26b9.png";

/***/ }),

/***/ "./src/imgs/ripples.svg":
/*!******************************!*\
  !*** ./src/imgs/ripples.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "81610fa16c7e56aa2a69.svg";

/***/ }),

/***/ "./src/imgs/science.png":
/*!******************************!*\
  !*** ./src/imgs/science.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b303e0fc5f5d09104fd.png";

/***/ }),

/***/ "./src/imgs/snow.png":
/*!***************************!*\
  !*** ./src/imgs/snow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe18d3ca171038e9ce52.png";

/***/ }),

/***/ "./src/imgs/sun.png":
/*!**************************!*\
  !*** ./src/imgs/sun.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0606210d8c5b1602db54.png";

/***/ }),

/***/ "./src/imgs/water.png":
/*!****************************!*\
  !*** ./src/imgs/water.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05cd4608d62d4e67f934.png";

/***/ }),

/***/ "./src/imgs/wind.png":
/*!***************************!*\
  !*** ./src/imgs/wind.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "96546865374ad942b80d.png";

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _imgs_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/circle.png */ "./src/imgs/circle.png");



// Webpack will bundle all images from the folder
function importAll(r) {
  let images = {}
  r.keys().forEach(item => { images[item.replace('./', '')] = r(item) })
  return images
}
const images = importAll(__webpack_require__("./src/imgs sync \\.(png%7Cjpe?g%7Csvg)$"))

const apiKey = '4Z97WK7WKB5ECZ9DTRVM2SLUT'

document.addEventListener('DOMContentLoaded', function () {
  const citySearchBar = document.getElementById('cityInput')
  const submitButton = document.getElementById('searchBtn')
  const unitSwitch = document.getElementById('unitSwitch')
  document.getElementById('todaysDate').innerHTML = new Date().toDateString()
  const currentTemp = document.getElementById('currentTemp')
  const currnetCondition = document.getElementById('currnetCondition')
  const mainForcast = document.getElementById('mainForcast')
  const fiveDayForcast = document.getElementById('fiveDayForcast')
  const weatherDetails = document.getElementById('weatherDetails')
  const celsiusLabel = document.getElementById('celsiusLabel');
  const fahrenheitLabel = document.getElementById('fahrenheitLabel')
  const loading = document.getElementById('loading')
  const cityTitle = this.getElementById('cityTitle')

  async function fetchWeather(city, unitGroup) {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=${apiKey}&contentType=json`)
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status)
      }
      const data = await response.json()
      console.log(data)
      return data
    }
    catch (error) {
      console.error('Error fetching weather data:', error)
      return null
    }
  }

  function setConditionImage(condition, dayIndex) {
    const imgElements = document.getElementsByClassName(`day${dayIndex}Img`);
    if (imgElements.length === 0) return; // No such element

    let imgSrc = images['clear.png'];
    if (condition.conditions === 'cloud')
      imgSrc = images['cloud.png'];
    else if (condition.conditions === "Partially cloudy")
      imgSrc = images['partiallyCloudy.png'];
    else if (condition.conditions === "Overcast")
      imgSrc = images['cloud.png'];
    else if (condition.conditions === "Rain" || condition.conditions === "Rain, Partially cloudy" || condition.conditions === "Rain, Overcast")
      imgSrc = images['rain.png'];
    else if (condition.conditions === "Clear" || condition.conditions === "Sunny")
      imgSrc = images['clear.png'];
    else if (condition.conditions === "Snow" || condition.conditions === "Snow, Partially cloudy" || condition.conditions === "Snow, Overcast")
      imgSrc = images['snow.png'];
    else if (condition.conditions === "Fog" || condition.conditions === "Fog, Partially cloudy" || condition.conditions === "Fog, Overcast")
      imgSrc = images['fog.png'];
    else
      imgSrc = images['clear.png'];

    imgElements[0].src = imgSrc; // Set the src of the first matching element
  }

  submitButton.addEventListener('click', () => {
    if (citySearchBar.value.trim() === '') return
    submitButton.disabled = true;
    submitButton.classList.add('disabled')

    loading.style.display = 'block'

    const city = citySearchBar.value
    let unit = ''
    if (unitSwitch.checked) {
      unit = 'metric'
    }
    else {
      unit = 'us'
    }
    fetchWeather(city, unit).then(data => {
      loading.style.display = 'none'
      if (data) {
        renderElements(data, unit)
      } else {
        console.log('Could not retrieve weather data.')
      }
      submitButton.disabled = citySearchBar.value.trim() === ''
    })
  })

  unitSwitch.addEventListener('change', () => {
    let city = citySearchBar.value
    if (city.trim() === '') city = 'latakia'
    let unit = ''
    if (unitSwitch.checked) {
      unit = 'metric'
      fahrenheitLabel.classList.remove('active');
      celsiusLabel.classList.add('active');
    }
    else {
      unit = 'us'
      fahrenheitLabel.classList.add('active');
      celsiusLabel.classList.remove('active');
    }
    fetchWeather(city, unit).then(data => {
      if (data) {
        renderElements(data, unit)
      } else {
        console.log('Could not retrieve weather data.')
      }
    })
  })

  function renderElements(data, unit) {
    mainForcast.innerHTML = `
                    <h2 id="cityTitle">${citySearchBar.value}</h2>
                    <h4 id="todaysDate">${new Date().toDateString()}</h4>
                    <p id="currentTemp">${data.currentConditions.temp}${unit === 'metric' ? '°C' : '°F'}</p>
                    <p id="currnetCondition">${data.currentConditions.conditions}</p>
                    <div id="currentOthers">
                      <div class="feelsLike othersElement">
                        <img src="${images['science.png']}" alt="feelslike" class="icon" />
                        <span class="label">Feels Like</span>
                        <span class="value">${data.currentConditions.feelslike}</span>
                      </div>
                      <div class="humidity othersElement">
                        <img src="${images['water.png']}" alt="feelslike" class="icon" />
                        <span class="label">Humidity</span>
                        <span class="value">${data.currentConditions.humidity}</span>
                      </div>
                      <div class="windSpeed othersElement">
                        <img src="${images['direction.png']}" alt="feelslike" class="icon" />
                        <span class="label">Wind Speed</span>
                        <span class="value">${data.currentConditions.windspeed}</span>
                      </div>
                      <div class="pressure othersElement">
                        <img src="${images['hussicane.png']}" alt="feelslike" class="icon" />
                        <span class="label">Pressure</span>
                        <span class="value">${data.currentConditions.pressure}</span>
                      </div>
                      <div class="UVIndex othersElement">
                        <img src="${images['science.png']}" alt="feelslike" class="icon" />
                        <span class="label">UV Index</span>
                        <span class="value">${data.currentConditions.uvindex}</span>
                      </div>
                      <div class="visibility othersElement">
                        <img src="${images['circle.png']}" alt="feelslike" class="icon" />
                        <span class="label">Visibility</span>
                        <span class="value">${data.currentConditions.visibility}</span>
                      </div>
                    </div>`

    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    fiveDayForcast.innerHTML = `
            <div class="dayForcast day1">
              <span class="day">${dayName[new Date(data.days[1].datetime).getDay()]}</span>
              <img class="dayImg day1Img" src="" alt="">
              <span class="temp">${data.days[1].temp}</span>
              <span class="condition">${data.days[1].conditions}</span>
              <span class="highLow">L:${data.days[1].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[1].tempmax}</span>
            </div>
            <div class="dayForcast day2">
              <span class="day">${dayName[new Date(data.days[2].datetime).getDay()]}</span>
              <img class="dayImg day2Img" src="" alt="">
              <span class="temp">${data.days[2].temp}</span>
              <span class="condition">${data.days[2].conditions}</span>
              <span class="highLow">L:${data.days[2].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[2].tempmax}</span>
            </div>
            <div class="dayForcast day3">
              <span class="day">${dayName[new Date(data.days[3].datetime).getDay()]}</span>
              <img class="dayImg day3Img" src="" alt="">
              <span class="temp">${data.days[3].temp}</span>
              <span class="condition">${data.days[3].conditions}</span>
              <span class="highLow">L:${data.days[3].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[3].tempmax}</span>
            </div>
            <div class="dayForcast day4">
              <span class="day">${dayName[new Date(data.days[4].datetime).getDay()]}</span>
              <img class="dayImg day4Img" src="" alt="">
              <span class="temp">${data.days[4].temp}</span>
              <span class="condition">${data.days[4].conditions}</span>
              <span class="highLow">L:${data.days[4].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[4].tempmax}</span>
            </div>
            <div class="dayForcast day5">
              <span class="day">${dayName[new Date(data.days[5].datetime).getDay()]}</span>
              <img class="dayImg day5Img" src="" alt="">
              <span class="temp">${data.days[5].temp}</span>
              <span class="condition">${data.days[5].conditions}</span>
              <span class="highLow">L:${data.days[5].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[5].tempmax}</span>
            </div>`

    for (let i = 1; i <= 5; i++) {
      setConditionImage(data.days[i], i)
    }

    weatherDetails.innerHTML = `
            <div class="sunrise weatherDetail">
                <img src="${images['sun.png']}" alt="">
                <span>Sunrise</span>
                <span>${data.currentConditions.sunrise}</span>
            </div>
            <div class="sunset weatherDetail">
                <img src="${images['down.png']}" alt="">
                <span>Sunset</span>
                <span>${data.currentConditions.sunset}</span>
            </div>
            <div class="chanceOfRain weatherDetail">
                <img src="${images['rain.png']}" alt="">
                <span>Chance Of Rain</span>
                <span>${data.currentConditions.precipprob}%</span>
            </div>
            <div class="cloudCover weatherDetail">
                <img src="${images['cloud.png']}" alt="">
                <span>Cloud Cover</span>
                <span>${data.currentConditions.cloudcover}%</span>
            </div>`
  }

  fetchWeather('latakia', 'metric').then(data => {
      if (data) {
        renderElements(data, 'metric')
        document.getElementById('cityTitle').textContent = 'Latakia'

      } else {
        console.log('Could not retrieve weather data.')
      }
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFV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QUF3QyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sSUFBSSxxQkFBcUI7QUFDeEc7QUFDQTtBQUNBLGtDQUFrQyxrREFBa0Q7QUFDcEY7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JELHdDQUF3Qyx3QkFBd0I7QUFDaEUsd0NBQXdDLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxJQUFJLHFCQUFxQjtBQUN4RztBQUNBO0FBQ0Esa0NBQWtDLGtEQUFrRDtBQUNwRjtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsd0NBQXdDLHdCQUF3QjtBQUNoRSx3Q0FBd0MscUJBQXFCLE1BQU0sTUFBTSxNQUFNLElBQUkscUJBQXFCO0FBQ3hHOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW1ncy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg4ZmZmYyAwJSwgI2ZmZmZmZiAxMDAlKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzVmYztcbn1cbiNsb2FkaW5nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLnNlYXJjaExvZ297XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zd2l0Y2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzVmYztcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGxlZnQ6IDQ0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDA7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XG59XG5cbi51bml0LWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnVuaXQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuXG4udW5pdC5hY3RpdmUge1xuICBjb2xvcjogI2ZmOTUwMDtcbn1cblxuLnVuaXQ6bGFzdC1jaGlsZC5hY3RpdmUge1xuICBjb2xvcjogIzI1NzVmYztcbn1cblxuI2hlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjU3NWZjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuI3NlYXJjaEJhcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbiNjaXR5SW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzlkZjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4jY2l0eUlucHV0OjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbn1cbiNjaXR5SW5wdXQ6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuI3NlYXJjaEJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoLjQsMiwuNiwxKTtcbn1cbiNzZWFyY2hCdG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4jc2VhcmNoQnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiNtYWluRm9yY2FzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjMjU3NWZjO1xuICB3aWR0aDogNzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuI2NpdHlUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiNjdXJyZW50VGVtcHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2N1cnJuZXRDb25kaXRpb257XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiNjdXJyZW50T3RoZXJze1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMzBweDtcbn1cbi5vdGhlcnNFbGVtZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTFmYztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjVweCAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI2ZpdmVEYXlGb3JjYXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLmRheUZvcmNhc3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTFmYztcbiAgY29sb3I6ICMyNTc1ZmM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDI1cHggMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZGF5e1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbiN3ZWF0aGVyRGV0YWlsc1RleHQsICNmaXZlRGF5Rm9yY2FzdFRleHR7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI3dlYXRoZXJEZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4ud2VhdGhlckRldGFpbHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDIzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlMWZjO1xuICBjb2xvcjogIzI1NzVmYztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMjVweCAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbiNmb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmUxZmM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICBwYWRkaW5nOiAyNXB4IDM1cHg7XG4gIGNvbG9yOiAjMjU3NWZjO1xuICB3aWR0aDogMzV2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXtcbiAgY29sb3I6ICMyNTc1ZmM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDREQUE0RDtBQUM5RDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxRUFBcUU7RUFDckUseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg4ZmZmYyAwJSwgI2ZmZmZmZiAxMDAlKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTc1ZmM7XFxufVxcbiNsb2FkaW5nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5zZWFyY2hMb2dve1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcbmltZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTc1ZmM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIGxlZnQ6IDQ0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XFxufVxcblxcbi51bml0LWxhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi51bml0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogIzMzMztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcblxcbi51bml0LmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZmOTUwMDtcXG59XFxuXFxuLnVuaXQ6bGFzdC1jaGlsZC5hY3RpdmUge1xcbiAgY29sb3I6ICMyNTc1ZmM7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjMjU3NWZjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcblxcbiNzZWFyY2hCYXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG59XFxuI2NpdHlJbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzlkZjk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcbiNjaXR5SW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG59XFxuI2NpdHlJbnB1dDpmb2N1c3tcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuI3NlYXJjaEJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgd2lkdGg6IDY1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllciguNCwyLC42LDEpO1xcbn1cXG4jc2VhcmNoQnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbiNzZWFyY2hCdG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbiNtYWluRm9yY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICMyNTc1ZmM7XFxuICB3aWR0aDogNzAwcHg7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuI2NpdHlUaXRsZSB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4jY3VycmVudFRlbXB7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuI2N1cnJuZXRDb25kaXRpb257XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4jY3VycmVudE90aGVyc3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDMwcHg7XFxufVxcbi5vdGhlcnNFbGVtZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlMWZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuI2ZpdmVEYXlGb3JjYXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxufVxcbi5kYXlGb3JjYXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTFmYztcXG4gIGNvbG9yOiAjMjU3NWZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLmRheXtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG4jd2VhdGhlckRldGFpbHNUZXh0LCAjZml2ZURheUZvcmNhc3RUZXh0e1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiN3ZWF0aGVyRGV0YWlsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4ud2VhdGhlckRldGFpbHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTFmYztcXG4gIGNvbG9yOiAjMjU3NWZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuI2Zvb3RlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmUxZmM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcXG4gIGNvbG9yOiAjMjU3NWZjO1xcbiAgd2lkdGg6IDM1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmF7XFxuICBjb2xvcjogIzI1NzVmYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BcHBJQ29uLnBuZ1wiOiBcIi4vc3JjL2ltZ3MvQXBwSUNvbi5wbmdcIixcblx0XCIuL2NpcmNsZS5wbmdcIjogXCIuL3NyYy9pbWdzL2NpcmNsZS5wbmdcIixcblx0XCIuL2NsZWFyLnBuZ1wiOiBcIi4vc3JjL2ltZ3MvY2xlYXIucG5nXCIsXG5cdFwiLi9jbG91ZC5wbmdcIjogXCIuL3NyYy9pbWdzL2Nsb3VkLnBuZ1wiLFxuXHRcIi4vZGlyZWN0aW9uLnBuZ1wiOiBcIi4vc3JjL2ltZ3MvZGlyZWN0aW9uLnBuZ1wiLFxuXHRcIi4vZG93bi5wbmdcIjogXCIuL3NyYy9pbWdzL2Rvd24ucG5nXCIsXG5cdFwiLi9mb2cucG5nXCI6IFwiLi9zcmMvaW1ncy9mb2cucG5nXCIsXG5cdFwiLi9odXNzaWNhbmUucG5nXCI6IFwiLi9zcmMvaW1ncy9odXNzaWNhbmUucG5nXCIsXG5cdFwiLi9tYWduaWZ5LnN2Z1wiOiBcIi4vc3JjL2ltZ3MvbWFnbmlmeS5zdmdcIixcblx0XCIuL3BhcnRpYWxseUNsb3VkeS5wbmdcIjogXCIuL3NyYy9pbWdzL3BhcnRpYWxseUNsb3VkeS5wbmdcIixcblx0XCIuL3JhaW4ucG5nXCI6IFwiLi9zcmMvaW1ncy9yYWluLnBuZ1wiLFxuXHRcIi4vcmF5LnBuZ1wiOiBcIi4vc3JjL2ltZ3MvcmF5LnBuZ1wiLFxuXHRcIi4vcmlwcGxlcy5zdmdcIjogXCIuL3NyYy9pbWdzL3JpcHBsZXMuc3ZnXCIsXG5cdFwiLi9zY2llbmNlLnBuZ1wiOiBcIi4vc3JjL2ltZ3Mvc2NpZW5jZS5wbmdcIixcblx0XCIuL3Nub3cucG5nXCI6IFwiLi9zcmMvaW1ncy9zbm93LnBuZ1wiLFxuXHRcIi4vc3VuLnBuZ1wiOiBcIi4vc3JjL2ltZ3Mvc3VuLnBuZ1wiLFxuXHRcIi4vd2F0ZXIucG5nXCI6IFwiLi9zcmMvaW1ncy93YXRlci5wbmdcIixcblx0XCIuL3dpbmQucG5nXCI6IFwiLi9zcmMvaW1ncy93aW5kLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWdzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgJy4vaW1ncy9jaXJjbGUucG5nJ1xuXG4vLyBXZWJwYWNrIHdpbGwgYnVuZGxlIGFsbCBpbWFnZXMgZnJvbSB0aGUgZm9sZGVyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBsZXQgaW1hZ2VzID0ge31cbiAgci5rZXlzKCkuZm9yRWFjaChpdGVtID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKSB9KVxuICByZXR1cm4gaW1hZ2VzXG59XG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltZ3MnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSlcblxuY29uc3QgYXBpS2V5ID0gJzRaOTdXSzdXS0I1RUNaOURUUlZNMlNMVVQnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNpdHlTZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUlucHV0JylcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpXG4gIGNvbnN0IHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdFN3aXRjaCcpXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheXNEYXRlJykuaW5uZXJIVE1MID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKVxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpXG4gIGNvbnN0IGN1cnJuZXRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vycm5ldENvbmRpdGlvbicpXG4gIGNvbnN0IG1haW5Gb3JjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Gb3JjYXN0JylcbiAgY29uc3QgZml2ZURheUZvcmNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml2ZURheUZvcmNhc3QnKVxuICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyRGV0YWlscycpXG4gIGNvbnN0IGNlbHNpdXNMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZWxzaXVzTGFiZWwnKTtcbiAgY29uc3QgZmFocmVuaGVpdExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhaHJlbmhlaXRMYWJlbCcpXG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpXG4gIGNvbnN0IGNpdHlUaXRsZSA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlUaXRsZScpXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGNpdHksIHVuaXRHcm91cCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2NpdHl9P3VuaXRHcm91cD0ke3VuaXRHcm91cH0ma2V5PSR7YXBpS2V5fSZjb250ZW50VHlwZT1qc29uYClcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIGVycm9yISBzdGF0dXM6ICcgKyByZXNwb25zZS5zdGF0dXMpXG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6JywgZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbmRpdGlvbkltYWdlKGNvbmRpdGlvbiwgZGF5SW5kZXgpIHtcbiAgICBjb25zdCBpbWdFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGRheSR7ZGF5SW5kZXh9SW1nYCk7XG4gICAgaWYgKGltZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBObyBzdWNoIGVsZW1lbnRcblxuICAgIGxldCBpbWdTcmMgPSBpbWFnZXNbJ2NsZWFyLnBuZyddO1xuICAgIGlmIChjb25kaXRpb24uY29uZGl0aW9ucyA9PT0gJ2Nsb3VkJylcbiAgICAgIGltZ1NyYyA9IGltYWdlc1snY2xvdWQucG5nJ107XG4gICAgZWxzZSBpZiAoY29uZGl0aW9uLmNvbmRpdGlvbnMgPT09IFwiUGFydGlhbGx5IGNsb3VkeVwiKVxuICAgICAgaW1nU3JjID0gaW1hZ2VzWydwYXJ0aWFsbHlDbG91ZHkucG5nJ107XG4gICAgZWxzZSBpZiAoY29uZGl0aW9uLmNvbmRpdGlvbnMgPT09IFwiT3ZlcmNhc3RcIilcbiAgICAgIGltZ1NyYyA9IGltYWdlc1snY2xvdWQucG5nJ107XG4gICAgZWxzZSBpZiAoY29uZGl0aW9uLmNvbmRpdGlvbnMgPT09IFwiUmFpblwiIHx8IGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIlJhaW4sIFBhcnRpYWxseSBjbG91ZHlcIiB8fCBjb25kaXRpb24uY29uZGl0aW9ucyA9PT0gXCJSYWluLCBPdmVyY2FzdFwiKVxuICAgICAgaW1nU3JjID0gaW1hZ2VzWydyYWluLnBuZyddO1xuICAgIGVsc2UgaWYgKGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIkNsZWFyXCIgfHwgY29uZGl0aW9uLmNvbmRpdGlvbnMgPT09IFwiU3VubnlcIilcbiAgICAgIGltZ1NyYyA9IGltYWdlc1snY2xlYXIucG5nJ107XG4gICAgZWxzZSBpZiAoY29uZGl0aW9uLmNvbmRpdGlvbnMgPT09IFwiU25vd1wiIHx8IGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIlNub3csIFBhcnRpYWxseSBjbG91ZHlcIiB8fCBjb25kaXRpb24uY29uZGl0aW9ucyA9PT0gXCJTbm93LCBPdmVyY2FzdFwiKVxuICAgICAgaW1nU3JjID0gaW1hZ2VzWydzbm93LnBuZyddO1xuICAgIGVsc2UgaWYgKGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIkZvZ1wiIHx8IGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIkZvZywgUGFydGlhbGx5IGNsb3VkeVwiIHx8IGNvbmRpdGlvbi5jb25kaXRpb25zID09PSBcIkZvZywgT3ZlcmNhc3RcIilcbiAgICAgIGltZ1NyYyA9IGltYWdlc1snZm9nLnBuZyddO1xuICAgIGVsc2VcbiAgICAgIGltZ1NyYyA9IGltYWdlc1snY2xlYXIucG5nJ107XG5cbiAgICBpbWdFbGVtZW50c1swXS5zcmMgPSBpbWdTcmM7IC8vIFNldCB0aGUgc3JjIG9mIHRoZSBmaXJzdCBtYXRjaGluZyBlbGVtZW50XG4gIH1cblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNpdHlTZWFyY2hCYXIudmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuXG4gICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKVxuXG4gICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgY29uc3QgY2l0eSA9IGNpdHlTZWFyY2hCYXIudmFsdWVcbiAgICBsZXQgdW5pdCA9ICcnXG4gICAgaWYgKHVuaXRTd2l0Y2guY2hlY2tlZCkge1xuICAgICAgdW5pdCA9ICdtZXRyaWMnXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdW5pdCA9ICd1cydcbiAgICB9XG4gICAgZmV0Y2hXZWF0aGVyKGNpdHksIHVuaXQpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbmRlckVsZW1lbnRzKGRhdGEsIHVuaXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IHJldHJpZXZlIHdlYXRoZXIgZGF0YS4nKVxuICAgICAgfVxuICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gY2l0eVNlYXJjaEJhci52YWx1ZS50cmltKCkgPT09ICcnXG4gICAgfSlcbiAgfSlcblxuICB1bml0U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGNpdHlTZWFyY2hCYXIudmFsdWVcbiAgICBpZiAoY2l0eS50cmltKCkgPT09ICcnKSBjaXR5ID0gJ2xhdGFraWEnXG4gICAgbGV0IHVuaXQgPSAnJ1xuICAgIGlmICh1bml0U3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgIHVuaXQgPSAnbWV0cmljJ1xuICAgICAgZmFocmVuaGVpdExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgY2Vsc2l1c0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVuaXQgPSAndXMnXG4gICAgICBmYWhyZW5oZWl0TGFiZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBjZWxzaXVzTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGZldGNoV2VhdGhlcihjaXR5LCB1bml0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVuZGVyRWxlbWVudHMoZGF0YSwgdW5pdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgcmV0cmlldmUgd2VhdGhlciBkYXRhLicpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBmdW5jdGlvbiByZW5kZXJFbGVtZW50cyhkYXRhLCB1bml0KSB7XG4gICAgbWFpbkZvcmNhc3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8aDIgaWQ9XCJjaXR5VGl0bGVcIj4ke2NpdHlTZWFyY2hCYXIudmFsdWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGlkPVwidG9kYXlzRGF0ZVwiPiR7bmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImN1cnJlbnRUZW1wXCI+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXB9JHt1bml0ID09PSAnbWV0cmljJyA/ICfCsEMnIDogJ8KwRid9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImN1cnJuZXRDb25kaXRpb25cIj4ke2RhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9uc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50T3RoZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWxzTGlrZSBvdGhlcnNFbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydzY2llbmNlLnBuZyddfVwiIGFsdD1cImZlZWxzbGlrZVwiIGNsYXNzPVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RmVlbHMgTGlrZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2RhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHkgb3RoZXJzRWxlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snd2F0ZXIucG5nJ119XCIgYWx0PVwiZmVlbHNsaWtlXCIgY2xhc3M9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5IdW1pZGl0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2RhdGEuY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kU3BlZWQgb3RoZXJzRWxlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snZGlyZWN0aW9uLnBuZyddfVwiIGFsdD1cImZlZWxzbGlrZVwiIGNsYXNzPVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+V2luZCBTcGVlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2RhdGEuY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmUgb3RoZXJzRWxlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snaHVzc2ljYW5lLnBuZyddfVwiIGFsdD1cImZlZWxzbGlrZVwiIGNsYXNzPVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UHJlc3N1cmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZXNzdXJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVVZJbmRleCBvdGhlcnNFbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydzY2llbmNlLnBuZyddfVwiIGFsdD1cImZlZWxzbGlrZVwiIGNsYXNzPVwiaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VVYgSW5kZXg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnV2aW5kZXh9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXNpYmlsaXR5IG90aGVyc0VsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2NpcmNsZS5wbmcnXX1cIiBhbHQ9XCJmZWVsc2xpa2VcIiBjbGFzcz1cImljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlZpc2liaWxpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnZpc2liaWxpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICBjb25zdCBkYXlOYW1lID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXVxuXG4gICAgZml2ZURheUZvcmNhc3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheUZvcmNhc3QgZGF5MVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZVtuZXcgRGF0ZShkYXRhLmRheXNbMV0uZGF0ZXRpbWUpLmdldERheSgpXX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJkYXlJbWcgZGF5MUltZ1wiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBcIj4ke2RhdGEuZGF5c1sxXS50ZW1wfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb25cIj4ke2RhdGEuZGF5c1sxXS5jb25kaXRpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdoTG93XCI+TDoke2RhdGEuZGF5c1sxXS50ZW1wbWlufSZuYnNwOyZuYnNwOyZuYnNwO0g6JHtkYXRhLmRheXNbMV0udGVtcG1heH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlGb3JjYXN0IGRheTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWVbbmV3IERhdGUoZGF0YS5kYXlzWzJdLmRhdGV0aW1lKS5nZXREYXkoKV19PC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZGF5SW1nIGRheTJJbWdcIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wXCI+JHtkYXRhLmRheXNbMl0udGVtcH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uZGl0aW9uXCI+JHtkYXRhLmRheXNbMl0uY29uZGl0aW9uc308L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaExvd1wiPkw6JHtkYXRhLmRheXNbMl0udGVtcG1pbn0mbmJzcDsmbmJzcDsmbmJzcDtIOiR7ZGF0YS5kYXlzWzJdLnRlbXBtYXh9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5Rm9yY2FzdCBkYXkzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lW25ldyBEYXRlKGRhdGEuZGF5c1szXS5kYXRldGltZSkuZ2V0RGF5KCldfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImRheUltZyBkYXkzSW1nXCIgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcFwiPiR7ZGF0YS5kYXlzWzNdLnRlbXB9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmRpdGlvblwiPiR7ZGF0YS5kYXlzWzNdLmNvbmRpdGlvbnN9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hMb3dcIj5MOiR7ZGF0YS5kYXlzWzNdLnRlbXBtaW59Jm5ic3A7Jm5ic3A7Jm5ic3A7SDoke2RhdGEuZGF5c1szXS50ZW1wbWF4fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheUZvcmNhc3QgZGF5NFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZVtuZXcgRGF0ZShkYXRhLmRheXNbNF0uZGF0ZXRpbWUpLmdldERheSgpXX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJkYXlJbWcgZGF5NEltZ1wiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBcIj4ke2RhdGEuZGF5c1s0XS50ZW1wfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25kaXRpb25cIj4ke2RhdGEuZGF5c1s0XS5jb25kaXRpb25zfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdoTG93XCI+TDoke2RhdGEuZGF5c1s0XS50ZW1wbWlufSZuYnNwOyZuYnNwOyZuYnNwO0g6JHtkYXRhLmRheXNbNF0udGVtcG1heH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlGb3JjYXN0IGRheTVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWVbbmV3IERhdGUoZGF0YS5kYXlzWzVdLmRhdGV0aW1lKS5nZXREYXkoKV19PC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZGF5SW1nIGRheTVJbWdcIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wXCI+JHtkYXRhLmRheXNbNV0udGVtcH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uZGl0aW9uXCI+JHtkYXRhLmRheXNbNV0uY29uZGl0aW9uc308L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaExvd1wiPkw6JHtkYXRhLmRheXNbNV0udGVtcG1pbn0mbmJzcDsmbmJzcDsmbmJzcDtIOiR7ZGF0YS5kYXlzWzVdLnRlbXBtYXh9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBzZXRDb25kaXRpb25JbWFnZShkYXRhLmRheXNbaV0sIGkpXG4gICAgfVxuXG4gICAgd2VhdGhlckRldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bnJpc2Ugd2VhdGhlckRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ3N1bi5wbmcnXX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TdW5yaXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bnNldCB3ZWF0aGVyRGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snZG93bi5wbmcnXX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TdW5zZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnNldH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFuY2VPZlJhaW4gd2VhdGhlckRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ3JhaW4ucG5nJ119XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q2hhbmNlIE9mIFJhaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZWNpcHByb2J9JTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3VkQ292ZXIgd2VhdGhlckRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2Nsb3VkLnBuZyddfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkNsb3VkIENvdmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jbG91ZGNvdmVyfSU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gIH1cblxuICBmZXRjaFdlYXRoZXIoJ2xhdGFraWEnLCAnbWV0cmljJykudGhlbihkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbmRlckVsZW1lbnRzKGRhdGEsICdtZXRyaWMnKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eVRpdGxlJykudGV4dENvbnRlbnQgPSAnTGF0YWtpYSdcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCByZXRyaWV2ZSB3ZWF0aGVyIGRhdGEuJylcbiAgICAgIH1cbiAgICB9KVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=