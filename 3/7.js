var employee = {
    id: 1,
    name: "Alice",
    age: 23
};
function printUser(user) {
    console.log("id: ", user.id);
    console.log("name: ", user.name);
    console.log("age: ", user.age);
}
printUser(employee);
//---------------------------------
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var newUser = buildUser(2, "Bill");
console.log("id: ", newUser.id);
console.log("name: ", newUser.name);
var p = { x: 10, y: 20 };
console.log(p);
var employee1 = {
    id: 1,
    name: "Alice",
    sayWords: function (words) {
        console.log(name + " \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \"" + words + "\"");
    }
};
employee1.sayWords("Hi?");
var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surname) {
        return this.name + " " + surname;
    };
    return User;
}());
var tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
var employee2 = {
    id: 1,
    name: "Alice",
    age: 25
};
function printUser1(user) {
    console.log("id: " + user.id + " name: " + user.name + " age: " + user.age);
}
printUser1(employee2);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Speed: " + this.speed);
    };
    Car.prototype.fill = function () {
        console.log("Yes");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 350;
auto.move();
auto.fill();
var simpleBuilder = function (name, surname) {
    return "Ytochka " + name + " " + surname;
};
var fullName = simpleBuilder("Rei", "Shinji");
console.log(fullName);
var phones;
phones = ["Nok", "Ia", "33", "10"];
var myPhone1 = phones[0];
var myPhone2 = phones[1];
var myPhone3 = phones[2];
var myPhone4 = phones[3];
console.log(myPhone1, myPhone2, myPhone3, myPhone4);
var colors = {};
colors["red"] = "#ff0000";
colors["black"] = "#00ff00";
colors["indigo"] = "#0000ff";
console.log(colors["black"]);
function personBuilder() {
    var person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " - password - " + person.password + " ");
    };
    return person;
}
var rei = personBuilder();
rei("Rei", "Shinji");
rei.password = "Ytochka";
rei.authenticate();
