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
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.calculateYears = function (age) {
        return Person.retirementAge - age;
    };
    Person.retirementAge = 65;
    return Person;
}());
var rei = new Person("Rei", 19);
var years = Person.calculateYears(19);
console.log(Person.retirementAge);
console.log("\u0414\u043E \u043F\u0435\u043D\u0441\u0438\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: " + years);
//----------------------
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.calculateYears = function (age) {
        return Person.retirementAge - age;
    };
    Person1.retirementAge = 65;
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person1));
var years1 = Employee.calculateYears(19);
console.log(Employee.retirementAge);
console.log(years1);
