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
exports.TodoComponent = void 0;
var component_js_1 = require("../../component.js");
var TodoComponent = /** @class */ (function (_super) {
    __extends(TodoComponent, _super);
    function TodoComponent(title, todo) {
        var _this = _super.call(this, "\n            <section class=\"todo\">\n                <h2 class=\"page-item__title todo__title\"></h2>  \n                <input type=\"checkbox\" class=\"todo-checkbox\">\n                <label for=\"todo-checkbox\" class=\"todo-label\"></label>\n            </section>\n        ") || this;
        var titleElement = _this.element.querySelector('.todo__title');
        titleElement.textContent = title;
        var todoElement = _this.element.querySelector('.todo-label');
        todoElement.textContent = todo;
        return _this;
    }
    return TodoComponent;
}(component_js_1.BaseComponent));
exports.TodoComponent = TodoComponent;
