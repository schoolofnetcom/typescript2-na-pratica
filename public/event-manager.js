define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function () {
        function default_1() {
            //ouvinte
            this.listeners = {};
        }
        default_1.prototype.addListener = function (eventName, callable) {
            if (!(this.listeners[eventName] instanceof Array)) {
                this.listeners[eventName] = [];
            }
            this.listeners[eventName].push(callable);
        };
        default_1.prototype.runEvent = function (eventName) {
            for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
                var callable = _a[_i];
                callable();
            }
        };
        return default_1;
    }());
    exports.default = default_1;
});
//# sourceMappingURL=event-manager.js.map