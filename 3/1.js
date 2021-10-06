//-----CLASS----------------------------
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var tom = new User();
tom.name = "Tom";
tom.age = 36;
console.log("name: " + tom.name + " age: " + tom.age);
//-----Methods--------------------------
var User1 = /** @class */ (function () {
    function User1(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    }
    User1.prototype.print = function () {
        console.log("name: " + this.name + " age: " + this.age);
    };
    User1.prototype.toString = function () {
        return this.name + ": " + this.age;
    };
    return User1;
}());
var rei = new User1("Rei", 19);
rei.print();
console.log(rei.toString());
//-----Readonly--------------------------
var User2 = /** @class */ (function () {
    function User2(userName, userAge) {
        this.name = "Defaul user";
        this.name = userName;
        this.age = userAge;
    }
    User2.prototype.print = function () {
        console.log("name: " + this.name + " age: " + this.age);
    };
    return User2;
}());
var bob = new User2("Bob", 44);
//bob.name = "Bob1"; // error ! readonly
bob.print();
