interface IUser {
	id: number;
	name: string;
	age?: number;
}
let employee: IUser = {
	id: 1, 
	name: "Alice",
	age: 23
}

function printUser(user: IUser): void {
	console.log("id: ", user.id);
	console.log("name: ", user.name);
	console.log("age: ", user.age);
}
printUser(employee);
//---------------------------------
function buildUser(userId: number, userName: string): IUser {
	return { id: userId, name: userName };
}

let newUser = buildUser(2, "Bill");
console.log("id: ", newUser.id);
console.log("name: ", newUser.name);
//---------------------------------
interface Point {
	readonly x: number;
	readonly y: number;
}
let p: Point = { x: 10, y: 20 };
console.log(p);
//---------------------------------
interface IUseri {
	id: number;
	name: string;
	sayWords(words: string): void;
}
let employee1: IUseri = {
	id: 1,
	name: "Alice",
	sayWords: function(words: string): void {
		console.log(`${name} говорит "${words}"`);
	}
}
employee1.sayWords("Hi?");
//---------------------------------
interface IUser1 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
class User implements IUser{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}
 
let tom = new User(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
//---------------------------------
interface IUser2 {
	id: number;
	name: string;
}
interface IUser2 {
	age: number
}
let employee2: IUser2 = {
	id: 1,
	name: "Alice",
	age: 25
}
function printUser1(user: IUser2): void {
	console.log(`id: ${user.id} name: ${user.name} age: ${user.age}`);
}
printUser1(employee2);
//---------------------------------
interface IMovable {
	speed: number;
	move(): void;
}
interface ICar extends IMovable {
	fill(): void;
}
class Car implements ICar {
	speed: number;
	move(): void {
		console.log("Speed: " + this.speed);
	}
	fill(): void {
		console.log("Yes");
	}
}
let auto = new Car();
auto.speed = 350;
auto.move();
auto.fill();
//---------------------------------
interface FullNameBuilder {
	(name: string, surname: string): string;
}
let simpleBuilder: FullNameBuilder = function (name: string, surname: string): string {
	return "Ytochka " + name + " " + surname;
}
let fullName = simpleBuilder("Rei", "Shinji");
console.log(fullName);
//---------------------------------
interface StringArray {
	[index: number]: string;
}
let phones: StringArray;
phones = ["Nok", "Ia", "33", "10"];

let myPhone1: string = phones[0];
let myPhone2: string = phones[1];
let myPhone3: string = phones[2];
let myPhone4: string = phones[3];
console.log(myPhone1, myPhone2, myPhone3, myPhone4);
//---------------------------------
interface Dictionary {
	[index: string]: string;
}
var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["black"] = "#00ff00";
colors["indigo"] = "#0000ff";
 
console.log(colors["black"]);
//---------------------------------
interface PersonInfo {
	(name: string, surname: string): void;
	fullName: string;
	password: string;
	authenticate(): void;
}
function personBuilder(): PersonInfo {
	let person = <PersonInfo>function (name: string, surname: string): void {
		person.fullName = name + " " + surname;
	};
	person.authenticate = function() {
		console.log(person.fullName + " - password - " + person.password + " ");
	};
	return person;
}
let rei = personBuilder();
rei("Rei", "Shinji");
rei.password ="Ytochka";
rei.authenticate();