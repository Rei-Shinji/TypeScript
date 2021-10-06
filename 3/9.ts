function getId<T>(id: T): T {
	return id;
}
let result1 = getId<number>(5);
console.log(result1);
let result2 = getId<string>("abc");
console.log(result2);
//--------------------------------
function getString<T>(arg: Array<T>): string {
	return arg.join(", ");
}
let result = getString<number>([1, 2, 3, 4, 5]);
console.log(result);
//--------------------------------
class User<T> {
	private _id: T;
	constructor(id: T) {
		this._id = id;
	}
	getId(): T {
		return this._id;
	}
}
let tom = new User<number>(3);
console.log(tom.getId());

let alice = new User<string>("Mur");
console.log(alice.getId());
//--------------------------------
interface IUser<T> {
 
    getId(): T;
}
 
class User1<T> implements IUser<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}
//--------------------------------
interface Named {
	name: string;
}
class NameInfo<T extends Named> {
	printName(obj: T): void {
		console.log(`Name: ${obj.name}`);
	}
}
//function compareName<T extends {name: string}>(obj1: T, obj2: T): void {
//	if(obj1.name === obj2.name) {
//		console.log("Sovpadenie");
//	} else {
//		console.log("Razlichie");
//	}
//}
class User2{ 
    constructor(public name: string, public age: number){}
}

//let ivan: {name: string} = {name: "Ivan"};
//let rei: {name: string} = {name: "Rei"};
//compareName<{name: string}>(ivan, rei);

//type Person = {id:number; name:string};
//let tom1: Person = {id:1, name: "Tom"};
//let sam: Person = {id: 2, name: "Sam"};
//compareName<Person>(tom1, sam);

let bob = new User2("Bob", 38);
let nameInfo1 = new NameInfo<User2>();
nameInfo1.printName(bob);
 
type Person = {id:number; name:string}
let tom2: Person = {id:1, name: "Tom"};
let nameInfo2 = new NameInfo<Person>();
nameInfo2.printName(tom2);
//--------------------------------
function userFactory<T>(type: { new (): T; }): T {
	return new type();
}
class User3 {
	constructor() {
		console.log("new object User");
	}
}
let user : User3 = userFactory(User3);