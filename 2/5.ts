function hello() {
	console.log("Hi TypeScript");
};
let message: ()=>void = hello;
message();
//----------------------------------
function sum (x: number, y: number): number {
	return x + y;
};

function subtract (a: number, b: number): number {
	return a - b;
};
let op: (x: number, y: number) => number;

op = sum;
console.log(op(2, 4));

op = subtract;
console.log(op(6, 4));
//----------------------------------
function sum1 (x: number, y: number): number {
	return x + y;
};

function multiply (a: number, b: number): number {
	return a * b;
};

function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
	return op(x, y);
}

console.log(mathOp(10, 20, sum));
console.log(mathOp(10, 20, multiply));
//----------------------------------
type Operation = (a: number, b: number) => number;

function mathOp1(x: number, y: number, op: Operation): number {
	return op(x, y);
}
let sum2: Operation = function(x: number, y: number): number {
	return x + y;
};
//----------------------------------
console.log(mathOp(10, 20, sum));

let sum4 = (x: number, y: number) => x + y;

let result4 = sum4(15, 35);
console.log(result4);
//----------------------------------
let sum5 = (x, y) => x + y;

let result5 = sum5(15, 35);
console.log(result5);
//----------------------------------
let square = x => x * x
let hello1 = () => "hi";

console.log(square(5));
console.log(hello1());
//----------------------------------
let sum6 = (x: number, y: number) => {
	x *= 2;
	return x + y;
}

let result6 = sum6(15, 35);
console.log(result6);
//----------------------------------
function mathOp2(x: number, y: number, operation: (a: number, b: number) => number): number {
	let result7 = operation(x, y);
	return result7;
}

console.log(mathOp2(10, 20, (x, y) => x + y));
console.log(mathOp2(10, 20, (x, y) => x * y));