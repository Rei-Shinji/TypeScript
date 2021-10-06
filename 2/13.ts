function addNumbers(firstNumber: number, ...numberArray: number[]): number {
	let result = firstNumber;
	for (let i = 0; i < numberArray.length; i++) {
		result += numberArray[i];
	}
	return result;
}

let num1 = addNumbers(3, 7, 8);
console.log(num1);
let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2);
//--------------------------------
function sum(...args: number[]): number {
	let result = 0;
	for (let i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

const numbers = [1, 3, 5, 7, 9] as const;
let num = sum(...numbers);
console.log(num);
//--------------------------------
function sum1(a: number, b: number): number {
       
    return a + b;
}
//const numbers = [1, 3, 5, 7, 9] as const;
const numbers1 = [1, 3] as const;
let num3 = sum1(...numbers1);  // ! Ошибка - функция sum принимает только два параметра
console.log(num3); // 25
//--------------------------------
function summ(a: number, b: number, c?: number): number {
	let result = a + b;
	if (c!==undefined) { 
		result +=c;
    }
	return result;
}

const number1 = [1, 3] as const;
let numm = summ(...number1);
console.log(numm);

const number2 = [1, 3, 7] as const;
let numm1 = summ(...number2);
console.log(numm1);
//--------------------------------
function printValues(name: string, age: number) {
	console.log(name);
	console.log(age);
}
const values = ["Tom", 36] as const;
printValues(...values);
//--------------------------------
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
var current1: string = Season[2];
console.log(current);
console.log(current1);
current = Season.Autumn;
//--------------------------------
enum Season1 {
	Winter = "Zima",
	Spring = "Vesna",
	Summer = "Leto",
	Autumn = "Osen'"
};
var cur: Season1 = Season1.Summer;
console.log(cur);
//--------------------------------
enum DayTime {
	Morning,
	Evening
};
function welcome(dayTime: DayTime) {
	if (dayTime === DayTime.Morning) {
		console.log("Good Morning");
	} else {
		console.log("Good Evening");
	}
}
let cur1: DayTime = DayTime.Morning;
welcome(cur1);
welcome(DayTime.Evening);