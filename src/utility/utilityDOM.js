"use strict";
exports.__esModule = true;
var utilityDOM = {
    getEle: function (sign) {
        return document.querySelector(sign);
    },
    setAttr: function (ele, options) {
        for (var key in options) {
            ele.setAttribute(key, options[key]);
        }
        return this;
    },
    setCss: function (ele, options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                var element = options[key];
                ele.style.cssText += "".concat(key, ": ").concat(element, ";");
            }
        }
        return this;
    }
};
exports["default"] = utilityDOM;
