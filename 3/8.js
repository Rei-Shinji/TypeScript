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
    function Person(userName) {
        this.name = userName;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(userName, company) {
        var _this = _super.call(this, userName) || this;
        _this.company = company;
        return _this;
    }
    return Employee;
}(Person));
function printPerson(user) {
    console.log("Person " + user.name);
}
function personFactory(userName) {
    return new Employee(userName, "No");
}
var rei = new Employee("Rei", "Playrix");
printPerson(rei);
var alice = personFactory("Alice");
printPerson(alice);
var tom = new Employee("Tom", "Microsoft");
var tomEmployee = tom;
console.log(tomEmployee.company);
var Person1 = /** @class */ (function () {
    function Person1(userName) {
        this.name = userName;
    }
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(userName, company) {
        var _this = _super.call(this, userName) || this;
        _this.company = company;
        return _this;
    }
    return Employee1;
}(Person1));
function printPerson1(user) {
    console.log("IPerson " + user.name);
}
printPerson1({ name: "Sam" });
//-------------------------------
var tom1 = new Employee("Tom", "Microsoft");
if (tom instanceof Person1) {
    console.log("Tom is a Person");
}
else {
    console.log("Tom is not a Person");
}
