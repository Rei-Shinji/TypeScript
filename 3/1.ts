//-----CLASS----------------------------
class User {
	name: string;
	age: number;
}
let tom = new User();
tom.name = "Tom";
tom.age = 36;
console.log(`name: ${tom.name} age: ${tom.age}`);
//-----Methods--------------------------
class User1 {
	name: string;
	age: number;

	constructor(userName: string, userAge: number) {
		this.name = userName;
		this.age = userAge;
	}
	print() {
		console.log(`name: ${this.name} age: ${this.age}`);
	}
	toString(): string {
		return `${this.name}: ${this.age}`;
	}
}
let rei = new User1("Rei", 19);
rei.print();
console.log(rei.toString());
//-----Readonly--------------------------
class User2 {
	readonly name: string = "Defaul user";
	age: number;
	constructor(userName: string, userAge: number) {
		this.name = userName;
		this.age = userAge;
	}
	print() {
		console.log(`name: ${this.name} age: ${this.age}`);
	}
}

let bob = new User2("Bob", 44);
//bob.name = "Bob1"; // error ! readonly
bob.print();