class Person {
	name: string;
	constructor(userName: string) {
		this.name = userName;
	}
}

class Employee extends Person {
	company: string;
	constructor(userName: string, company: string) {
		super(userName);
		this.company = company;
	}
}
function printPerson(user: Person): void {
	console.log(`Person ${user.name}`);
}
function personFactory(userName: string): Person {
	return new Employee(userName, "No");
}
let rei : Person = new Employee("Rei", "Playrix");
printPerson(rei);
let alice = personFactory("Alice");
printPerson(alice);
let tom : Person = new Employee("Tom", "Microsoft");
let tomEmployee: Employee = <Employee>tom;
console.log(tomEmployee.company);
//let tomEmployee: Employee = tom as Employee; // преобразование к типу Employee
//console.log(tomEmployee.company);
//console.log((tom as Employee).company);
//-------------------------------
interface IPerson {
	name: string;
}
class Person1 {
	name: string;
	constructor(userName: string) {
		this.name = userName;
	}
}

class Employee1 extends Person1 {
	company: string;
	constructor(userName: string, company: string) {
		super(userName);
		this.company = company;
	}
}
function printPerson1(user: IPerson): void {
	console.log(`IPerson ${user.name}`);
}
printPerson1({ name: "Sam"});
//-------------------------------
let tom1 = new Employee("Tom", "Microsoft");
if (tom instanceof Person1) {
	console.log("Tom is a Person");
} else {
	console.log("Tom is not a Person");
}