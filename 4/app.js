var Personnel;
(function (Personnel) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Personnel.Employee = Employee;
    var Manager = /** @class */ (function () {
        function Manager(name) {
            this.name = name;
        }
        return Manager;
    }());
    Personnel.Manager = Manager;
})(Personnel || (Personnel = {}));
/// <reference path="personnel.ts" />
var tom = new Personnel.Employee("Tom");
console.log(tom.name);
var sam = new Personnel.Manager("Sam");
console.log(sam.name);
