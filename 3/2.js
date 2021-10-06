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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, company) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.company = company;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log(this.name + " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 " + this.company);
    };
    return Employee;
}(Person));
var bob = new Employee("Bob", "Microsoft");
bob.work();
//-----------------------------
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.print = function () {
        console.log("Name: " + this.name);
    };
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, company) {
        var _this = _super.call(this, name) || this;
        _this.company = company;
        return _this;
    }
    Employee1.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438: " + this.company);
    };
    return Employee1;
}(Person1));
var rei = new Employee1("Rei", "Playrix");
rei.print();
