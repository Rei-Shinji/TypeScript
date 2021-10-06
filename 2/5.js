function hello() {
    console.log("Hi TypeScript");
}
;
var message = hello;
message();
//----------------------------------
function sum(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
op = sum;
console.log(op(2, 4));
op = subtract;
console.log(op(6, 4));
//----------------------------------
function sum1(x, y) {
    return x + y;
}
;
function multiply(a, b) {
    return a * b;
}
;
function mathOp(x, y, op) {
    return op(x, y);
}
console.log(mathOp(10, 20, sum));
console.log(mathOp(10, 20, multiply));
function mathOp1(x, y, op) {
    return op(x, y);
}
var sum2 = function (x, y) {
    return x + y;
};
//----------------------------------
console.log(mathOp(10, 20, sum));
var sum4 = function (x, y) { return x + y; };
var result4 = sum4(15, 35);
console.log(result4);
//----------------------------------
var sum5 = function (x, y) { return x + y; };
var result5 = sum5(15, 35);
console.log(result5);
//----------------------------------
var square = function (x) { return x * x; };
var hello1 = function () { return "hi"; };
console.log(square(5));
console.log(hello1());
//----------------------------------
var sum6 = function (x, y) {
    x *= 2;
    return x + y;
};
var result6 = sum6(15, 35);
console.log(result6);
//----------------------------------
function mathOp2(x, y, operation) {
    var result7 = operation(x, y);
    return result7;
}
console.log(mathOp2(10, 20, function (x, y) { return x + y; }));
console.log(mathOp2(10, 20, function (x, y) { return x * y; }));
