let a: undefined = undefined;
let b: null = null;

let x: number = undefined;
console.log(x);
x = null;
console.log(x);
x = 5;
console.log(5);
//---------------------------------
let userId: number|null = null;

function printId(id: number|null) {
	if (id === null) {
		console.log("User -");
	} else {
		console.log(`id user: ${id}`);
	}
}

printId(userId); //user -
userId = 45;
printId(userId); // id user = 45
//---------------------------------
const header: HTMLElement|null = document.getElementById("header");
header!.innerText = "Hi TypeScript";

//object!.property
//object!.method()

const header1: HTMLElement|null = null;
header1!.innerText = "Hi TypeScript";