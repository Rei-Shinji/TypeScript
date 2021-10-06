function add(a, b){
	return a + b;
}
//вызов
let result1 = add(1, 2); //3
let result2 = add("1","2") //12
console.log(result1, result2);

function add1(a: number, b: number) {
	let result = a + b;
	console.log(result);
}
add1(20, 30);
add1(10, 15);
//add1("1", "2");

let koef: number = 1.5;

function add2(a:number){
	let result = a * koef;
	console.log(result);
}
add2(20);
add2(10);

function add3(a: number, b: number): number {
	return a + b;
}
let result = add3(1, 2);
console.log(result);

function add4(a: number, b: number): void {
	console.log(a + b);
}
add4(10, 20);

function add5(a: number, b: number) {
	return a + b;
}
let result3 = add5(10, 20);

function getName(firstName: string, lastName: string) {
	return firstName + " " + lastName;
}
let name1 = getName("Rei", "Shinji");
//let name2 = getName("Rei", "and", "Shinji"); //error
//let name3 = getName("Rei"); //error
console.log(name1);

function get1Name(firstName: string, lastName="Shinji") {
	return firstName + " " + lastName;
}
let name11 = get1Name("Rei", "Shinji");
console.log(name11);
let name12 = get1Name("Ivan");
console.log(name12);

function defaultLastName(): string {
	return "Smith";
}

function get2Name(firstName: string, lastName: string = defaultLastName()) {
	return firstName + " " + lastName;
}
let name3 = get2Name("Rei");
console.log(name3);