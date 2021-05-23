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
exports.VideoComponent = void 0;
var component_js_1 = require("../../component.js");
var VideoComponent = /** @class */ (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent(title, url) {
        var _this = _super.call(this, "\n            <section class=\"video\">\n                <div class=\"video__player\">\n                    <iframe class=\"video__iframe\"></iframe>\n                </div>\n                <h3 class=\"page-item__title video__title\"></h3>\n            </section>\n        ") || this;
        var iframeElement = _this.element.querySelector('.video__iframe');
        iframeElement.src = _this.converToEmbeddedURL(url);
        var titleElement = _this.element.querySelector('.video__title');
        titleElement.textContent = title;
        return _this;
    }
    // https://www.youtube.com/watch?v=CiTKqRXZvwQ
    // https://www.youtube.com/embed/CiTKqRXZvwQ <- 이 버전으로 만들어야 함
    // https://youtu.be/CiTKqRXZvwQ
    VideoComponent.prototype.converToEmbeddedURL = function (url) {
        var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([\w-]{11}))|(?:youtu.be\/([\w-]{11})))/;
        var match = (url.match(regExp));
        var id = match ? match[1] || match[2] : undefined;
        if (id) {
            return "https://www.youtube.com/embed/" + id;
        }
        return url;
    };
    return VideoComponent;
}(component_js_1.BaseComponent));
exports.VideoComponent = VideoComponent;
