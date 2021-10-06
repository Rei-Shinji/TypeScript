class Person {
	name: string;
}

class Employee extends Person {
	company: string;
	constructor(name: string, company: string) {
	super();
	this.name = name;
	this.company = company;
	}
	work(): void {
		console.log(`${this.name} работает в компании ${this.company}`);
	}
}

let bob: Employee = new Employee("Bob", "Microsoft");
bob.work();
//-----------------------------
class Person1 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	print(): void {
		console.log(`Name: ${this.name}`);
	}
}

class Employee1 extends Person1 {
	company: string;
	constructor(name: string, company: string) {
		super(name);
		this.company = company;
	}
	print(): void {
		super.print();
		console.log(`Работает в компании: ${this.company}`);
	}
}

let rei: Employee1 = new Employee1("Rei", "Playrix");
rei.print();