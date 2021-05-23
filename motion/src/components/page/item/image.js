"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ImageComponent = void 0;
var component_js_1 = require("../../component.js");
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(title, url) {
        var _this = _super.call(this, "\n            <section class=\"image\">\n                <div class=\"image__holder\">\n                    <img src=\"\" alt=\"\" class=\"image__thumbnail\">\n                </div>\n                <h2 class=\"page-item__title image__title\"></h2>\n            </section>\n        ") || this;
        var imageElement = _this.element.querySelector('.image__thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        var titleElemnt = _this.element.querySelector('.image__title');
        titleElemnt.textContent = title;
        return _this;
    }
    return ImageComponent;
}(component_js_1.BaseComponent));
exports.ImageComponent = ImageComponent;
