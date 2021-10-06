var person = { name: "Rei", age: 19 };
console.log(person.name);
console.log(person["name"]);
//------------------------------------
var person1 = { name: "Rei", age: 19 };
//person1 = { name: "Rei"}; //error
//------------------------------------
var person2 = { name: "Rei", age: 19 };
console.log(person2.name);
//------------------------------------
var person3 = { name: "Rei", age: 19 };
person3 = { name: "Rei", age: 19 };
//------------------------------------
var person4; //свойство age - необязательное
person4 = { name: "Rei", age: 19 };
console.log(person4.age);
person4 = { name: "Rei" };
console.log(person4.age);
//------------------------------------
var person5 = { name: "Rei", age: 19 };
if (person5.age !== undefined) {
    console.log(person5.age);
}
//------------------------------------
function printUser(user) {
    console.log("name: " + user.name + " age: " + user.age);
}
var rei = { age: 19, name: "Rei" };
printUser(rei);
//------------------------------------
function printUser1(user) {
    console.log("name " + user.name + " age: " + user.age);
}
var rei1 = { name: "Rei", age: 19, isMarried: true };
printUser1(rei1);
//------------------------------------
function defaultUser() {
    return { name: "Rei", age: 19 };
}
var user = defaultUser();
console.log("name: " + user.name + " age: " + user.age);
//------------------------------------
var tom = { name: "Tom", age: 23 };
var bob = { name: "Bob" };
function printUser3(user) {
    if ("age" in user) {
        console.log("Name: " + user.name + " Age: " + user.age);
    }
    else {
        console.log("Name: " + user.name);
    }
}
printUser3(tom);
printUser3(bob);
//------------------------------------
function printUser4(_a) {
    var name = _a.name, age = _a.age;
    console.log("name: " + name + "  age: " + age);
}
var tom1 = { name: "Tom", age: 36 };
printUser4(tom1);
//------------------------------------
function printUser5(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("name: " + name + "  age: " + age);
    }
    else {
        console.log("name: " + name);
    }
}
var tom2 = { name: "Tom" };
printUser5(tom2); // name: Tom
var bob2 = { name: "Bob", age: 44 };
printUser5(bob2); // name: Bob  age: 44
//------------------------------------
function printUser6(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 25 : _b;
    console.log("name: " + name + "  age: " + age);
}
var tom3 = { name: "Tom" };
printUser6(tom3); // name: Tom  age: 25
var bob3 = { name: "Bob", age: 44 };
printUser6(bob3); // name: Bob  age: 44
