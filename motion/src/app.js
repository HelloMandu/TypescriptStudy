"use strict";
exports.__esModule = true;
var page_js_1 = require("./components/page/page.js");
var image_js_1 = require("./components/page/item/image.js");
var todo_js_1 = require("./components/page/item/todo.js");
var note_js_1 = require("./components/page/item/note.js");
var page_js_2 = require("./components/page/page.js");
var dialog_js_1 = require("./components/dialog/dialog.js");
var media_input_js_1 = require("./components/dialog/input/media-input.js");
var text_input_js_1 = require("./components/dialog/input/text-input.js");
var video_js_1 = require("./components/page/item/video.js");
var App = /** @class */ (function () {
    function App(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new page_js_1.PageComponent(page_js_2.PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', media_input_js_1.MedialSectionInput, function (input) { return new image_js_1.ImageComponent(input.title, input.url); });
        this.bindElementToDialog('#new-video', media_input_js_1.MedialSectionInput, function (input) { return new video_js_1.VideoComponent(input.title, input.url); });
        this.bindElementToDialog('#new-note', text_input_js_1.TextSectionInput, function (input) { return new note_js_1.NoteComponent(input.title, input.body); });
        this.bindElementToDialog('#new-todo', text_input_js_1.TextSectionInput, function (input) { return new todo_js_1.TodoComponent(input.title, input.body); });
    }
    App.prototype.bindElementToDialog = function (selector, InputComponent, makeSection) {
        var _this = this;
        var element = document.querySelector(selector);
        element.addEventListener('click', function () {
            var dialog = new dialog_js_1.InputDialog();
            var input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(_this.dialogRoot);
            dialog.setOnCloseListner(function () { return dialog.removeFrom(document.body); });
            dialog.setOnSubmitListner(function () {
                var image = makeSection(input);
                _this.page.addChild(image);
                dialog.removeFrom(document.body);
            });
        });
    };
    return App;
}());
new App(document.querySelector('.document'), document.body);
