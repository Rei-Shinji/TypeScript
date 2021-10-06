function add(a, b) {
    return a + b;
}
//вызов
var result1 = add(1, 2); //3
var result2 = add("1", "2"); //12
console.log(result1, result2);
function add1(a, b) {
    var result = a + b;
    console.log(result);
}
add1(20, 30);
add1(10, 15);
//add1("1", "2");
var koef = 1.5;
function add2(a) {
    var result = a * koef;
    console.log(result);
}
add2(20);
add2(10);
function add3(a, b) {
    return a + b;
}
var result = add3(1, 2);
console.log(result);
function add4(a, b) {
    console.log(a + b);
}
add4(10, 20);
function add5(a, b) {
    return a + b;
}
var result3 = add5(10, 20);
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
var name1 = getName("Rei", "Shinji");
//let name2 = getName("Rei", "and", "Shinji"); //error
//let name3 = getName("Rei"); //error
console.log(name1);
function get1Name(firstName, lastName) {
    if (lastName === void 0) { lastName = "Shinji"; }
    return firstName + " " + lastName;
}
var name11 = get1Name("Rei", "Shinji");
console.log(name11);
var name12 = get1Name("Ivan");
console.log(name12);
function defaultLastName() {
    return "Smith";
}
function get2Name(firstName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return firstName + " " + lastName;
}
var name3 = get2Name("Rei");
console.log(name3);
