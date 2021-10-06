var userId = 2;
console.log("Id: " + userId);
userId = "qwerty";
console.log("Id: " + userId);
function printId(inputId) {
    console.log("Id1: " + inputId);
}
function getId(isNumber) {
    if (isNumber)
        return 1;
    else
        return "1";
}
printId(12345);
printId("qwerty");
console.log(getId(true));
var tom = { name: "Tom", age: 36 };
var bob = { name: "Bob", age: 41 };
function printPerson(user) {
    console.log("Name: " + user.name + " Age: " + user.age);
}
printPerson(tom);
printPerson(bob);
var tom1 = { name: "Tom", age: 36 };
var bob1 = { name: "Bob", age: 41, company: "Microsoft" };
function printPerson1(user) {
    console.log("Name: " + user.name + " Age: " + user.age);
}
printPerson1(tom1);
printPerson1(bob1);
