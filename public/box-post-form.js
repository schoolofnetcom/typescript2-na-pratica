define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxPostForm = /** @class */ (function () {
        function BoxPostForm(eventManager) {
            this.eventManager = eventManager;
            this.buttonListSelector = "#" + BoxPostForm.boxId + ">button[type=button]";
            this.init();
        }
        BoxPostForm.prototype.init = function () {
            var _this = this;
            var buttonForm = document.querySelector(this.buttonListSelector);
            buttonForm.addEventListener('click', function () {
                _this.hiddenBox();
                //const boxList = document.getElementById(BoxPostList.boxId);
                //boxList.removeAttribute('style');
                _this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);
            });
            this.eventManager.addListener(box_post_list_1.default.EVENT_CLICK_HIDDEN_BOX_LIST, function () {
                _this.showBox();
            });
        };
        BoxPostForm.prototype.hiddenBox = function () {
            var boxForm = document.getElementById(BoxPostForm.boxId);
            boxForm.style.display = 'none';
        };
        BoxPostForm.prototype.showBox = function () {
            var boxForm = document.getElementById(BoxPostForm.boxId);
            boxForm.removeAttribute('style');
        };
        BoxPostForm.boxId = 'box-post-form';
        BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';
        return BoxPostForm;
    }());
    exports.default = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map