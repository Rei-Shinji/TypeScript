var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 110) {
                console.log("ERROR");
            }
            else {
                this._age = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var rei = new Person();
rei.name = "Rei";
rei.age = 19;
console.log(rei.age);
rei.age = -1234;
console.log(rei.age);
