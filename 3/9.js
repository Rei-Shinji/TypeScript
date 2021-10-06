function getId(id) {
    return id;
}
var result1 = getId(5);
console.log(result1);
var result2 = getId("abc");
console.log(result2);
//--------------------------------
function getString(arg) {
    return arg.join(", ");
}
var result = getString([1, 2, 3, 4, 5]);
console.log(result);
//--------------------------------
var User = /** @class */ (function () {
    function User(id) {
        this._id = id;
    }
    User.prototype.getId = function () {
        return this._id;
    };
    return User;
}());
var tom = new User(3);
console.log(tom.getId());
var alice = new User("Mur");
console.log(alice.getId());
var User1 = /** @class */ (function () {
    function User1(id) {
        this._id = id;
    }
    User1.prototype.getId = function () {
        return this._id;
    };
    return User1;
}());
var NameInfo = /** @class */ (function () {
    function NameInfo() {
    }
    NameInfo.prototype.printName = function (obj) {
        console.log("Name: " + obj.name);
    };
    return NameInfo;
}());
//function compareName<T extends {name: string}>(obj1: T, obj2: T): void {
//	if(obj1.name === obj2.name) {
//		console.log("Sovpadenie");
//	} else {
//		console.log("Razlichie");
//	}
//}
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    return User2;
}());
//let ivan: {name: string} = {name: "Ivan"};
//let rei: {name: string} = {name: "Rei"};
//compareName<{name: string}>(ivan, rei);
//type Person = {id:number; name:string};
//let tom1: Person = {id:1, name: "Tom"};
//let sam: Person = {id: 2, name: "Sam"};
//compareName<Person>(tom1, sam);
var bob = new User2("Bob", 38);
var nameInfo1 = new NameInfo();
nameInfo1.printName(bob);
var tom2 = { id: 1, name: "Tom" };
var nameInfo2 = new NameInfo();
nameInfo2.printName(tom2);
//--------------------------------
function userFactory(type) {
    return new type();
}
var User3 = /** @class */ (function () {
    function User3() {
        console.log("new object User");
    }
    return User3;
}());
var user = userFactory(User3);
