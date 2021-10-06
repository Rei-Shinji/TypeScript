class Person {
	private _name: string;
	private _year: number;

	constructor(name: string, age: number) {
		this._name = name;
		this._year = this.setYear(age);
	}
	public print(): void {
		console.log(`Name: ${this._name} God: ${this._year}`);
	}

	private setYear(age: number): number {
		return new Date().getFullYear() - age;
	}
}
let tom = new Person("Tom", 24);
tom.print();
//----------------------------------------------
class Person1 {
	protected name: string;
	private year: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.year = this.setYear(age);
	}
	protected printPerson(): void {
		console.log(`Name: ${this.name} Year ${this.year}`);
	}
	private setYear(age: number): number {
		return new Date().getFullYear() - age;
	}
}
class Employee extends Person1 {
	protected company: string;
	constructor(name: string, age: number, company: string) {
		super(name, age);
		this.company = company;
	}
	public printEmployee(): void {
		this.printPerson();
		console.log(`Company: ${this.company}`);
	}
}

let rei = new Employee("Rei", 19, "Playrix");
rei.printEmployee();
//----------------------------------------------
class Pers {
	constructor(private readonly name: string, private age: number) {	}
	printPers(): void {
		console.log(`Name: ${this.name} Age: ${this.age}`);
	}
}