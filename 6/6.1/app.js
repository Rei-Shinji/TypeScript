var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    User = __decorate([
        sealed
    ], User);
    return User;
}());
//-------------------------
function logger(target) {
    var newConstructor = function (name) {
        console.log("Creating new instance");
        this.name = name;
        this.age = 23;
        this.print = function () {
            console.log(this.name, this.age);
        };
    };
    return newConstructor;
}
var User1 = /** @class */ (function () {
    function User1(name) {
        this.name = name;
    }
    User1.prototype.print = function () {
        console.log(this.name);
    };
    User1 = __decorate([
        logger
    ], User1);
    return User1;
}());
var tom = new User1("Tom");
var bob = new User1("Bob");
tom.print();
bob.print();
