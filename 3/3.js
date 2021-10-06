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
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.prototype.getArea = function () {
        console.log("Not Implemented");
    };
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        var square = this.width * this.height;
        console.log("Area =", square);
    };
    return Rectangle;
}(Figure));
var someFigure = new Rectangle(20, 30);
someFigure.getArea();
//---------------------------------------------
var Figure1 = /** @class */ (function () {
    function Figure1() {
    }
    return Figure1;
}());
var Rectangle1 = /** @class */ (function (_super) {
    __extends(Rectangle1, _super);
    function Rectangle1(x, y, width1, height1) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width1 = width1;
        _this.height1 = height1;
        return _this;
    }
    Rectangle1.prototype.getArea1 = function () {
        var square1 = this.width1 * this.height1;
        console.log("Area =", square1);
    };
    return Rectangle1;
}(Figure1));
var someFigure1 = new Rectangle1(10, 10, 20, 25);
someFigure1.getArea1();
