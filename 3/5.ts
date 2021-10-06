class Person {
	name: string;
	age: number;
	private _age: number;
	private _name: string;

	public get age(): number {
		return this._age;
	}

	public set age(n: number) {
		if(n < 0 || n > 110) {
			console.log("ERROR");
		} else {
			this._age = n;
		}
	}
}

let rei = new Person();
rei.name = "Rei";
rei.age = 19;
console.log(rei.age);
rei.age = -1234;
console.log(rei.age);