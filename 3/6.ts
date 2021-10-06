class Person {
	age: number;
	name: string;

	static retirementAge: number = 65;
	static calculateYears(age: number): number {
		return Person.retirementAge - age;
	}

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
 }

 let rei = new Person("Rei", 19);
 let years = Person.calculateYears(19);
 console.log(Person.retirementAge);
 console.log(`До пенсии осталось: ${years}`);
 //----------------------
 class Person1 {
 	age: number;
 	name: string;

 	static retirementAge: number = 65;
 	static calculateYears(age: number): number {
 		return Person.retirementAge - age;
 	}

 	constructor(name: string, age: number) {
 		this.name = name;
 		this.age = age;
 	}
}
class Employee extends Person1 {}

let years1 = Employee.calculateYears(19);
console.log(Employee.retirementAge);
console.log(years1);