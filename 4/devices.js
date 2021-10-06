"use strict";
exports.__esModule = true;
exports.call = exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
exports.Phone = Phone;
function call(phone) {
    console.log("Make a call by", phone.name);
}
exports.call = call;