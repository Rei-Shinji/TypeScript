let x: number = 10;
let hello: string = "Hello";
let isValid: boolean = true;

let isEnabled: boolean = true;
let isFalse: boolean = false;

console.log(isEnabled);
console.log(isFalse);

let age1: number = 36;
let height: number = 1.68;

let decimal: number = 6;
//16
let hex: number = 0xf00d; //61453
//2
let binary: number = 0b1010; //10
//8
let octal: number = 0o744; //484

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

let firstName: string = "Rei";
let age: number = 19;
let info: string = `Name ${firstName}	Age ${age}`;
console.log(info);

let sentence: string = `Hi!
Good bye...`;
console.log(sentence);

const num1: bigint = BigInt(100);
console.log(num1);

const num2: bigInt = 100n;
console.log(num2);

let hello1 = "hi";
// hello1 = 23;
// error!

let someVar: any = "hi";
console.log(someVar); //it's string
someVar = 20;
console.log(someVar); //it's number

var someArray: any[] = [ 24, "Tom", false];
console.log(someArray);

let x1; //it's any
x1 = 10;
x1 = "hi";

let sum: any;
sum = 1200;
sum = "bla bla bla";
let result: number = sum / 12;
console.log(result); //NaN - строку нельзя разделить на число