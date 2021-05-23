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
exports.PageComponent = exports.PageItemComponent = void 0;
var component_js_1 = require("../component.js");
var PageItemComponent = /** @class */ (function (_super) {
    __extends(PageItemComponent, _super);
    function PageItemComponent() {
        var _this = _super.call(this, "\n            <li class=\"page-item\">\n                <section class=\"page-item__body\">\n                </section>\n                <div class=\"page-item__controls\">\n                    <button class=\"close\">&times;</button>\n                </div>\n            </li>\n        ") || this;
        var closeBtn = _this.element.querySelector('.close');
        closeBtn.onclick = function () {
            _this.closeListener && _this.closeListener();
        };
        return _this;
    }
    PageItemComponent.prototype.addChild = function (child) {
        var container = this.element.querySelector('.page-item__body');
        child.attachTo(container);
    };
    PageItemComponent.prototype.setOnCloseListner = function (listener) {
        this.closeListener = listener;
    };
    return PageItemComponent;
}(component_js_1.BaseComponent));
exports.PageItemComponent = PageItemComponent;
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(pageItemConstructor) {
        var _this = _super.call(this, '<ul class="page"></ul>') || this;
        _this.pageItemConstructor = pageItemConstructor;
        return _this;
    }
    PageComponent.prototype.addChild = function (section) {
        var _this = this;
        var item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListner(function () { return item.removeFrom(_this.element); });
    };
    return PageComponent;
}(component_js_1.BaseComponent));
exports.PageComponent = PageComponent;
