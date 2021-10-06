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
        this._name = name;
        this._year = this.setYear(age);
    }
    Person.prototype.print = function () {
        console.log("Name: " + this._name + " God: " + this._year);
    };
    Person.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person;
}());
var tom = new Person("Tom", 24);
tom.print();
//----------------------------------------------
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.year = this.setYear(age);
    }
    Person1.prototype.printPerson = function () {
        console.log("Name: " + this.name + " Year " + this.year);
    };
    Person1.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.printEmployee = function () {
        this.printPerson();
        console.log("Company: " + this.company);
    };
    return Employee;
}(Person1));
var rei = new Employee("Rei", 19, "Playrix");
rei.printEmployee();
//----------------------------------------------
var Pers = /** @class */ (function () {
    function Pers(name, age) {
        this.name = name;
        this.age = age;
    }
    Pers.prototype.printPers = function () {
        console.log("Name: " + this.name + " Age: " + this.age);
    };
    return Pers;
}());
