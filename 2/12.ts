let user: [string, number];
user = ["Rei", 19];
console.log(user[1]);
user[1] = 20;
console.log(user[1]);
for ( const prop of user) {
	console.log(prop);
}
//--------------------------
function printUser(user: [string, number]) {
	console.log(user[0]);
	console.log(user[1]);
}
let rei: [string, number] = ["Rei", 19]
printUser(rei);

function createUser(name: string, age: number) : [string, number] {
	return [name, age];
}
let user1 = createUser("Bob", 41);
console.log(user1[0]);
console.log(user1[1]);
//--------------------------
let bob: [string, number, boolean?] = ["Booooob", 41, true];
let tom: [string, number, boolean?] = ["Tooooom", 36];

function printUser1(useeeer: [string, number, boolean?]) {
	if(useeeer[2]!==undefined) {
	console.log(`name: ${useeeer[0]}, age: ${useeeer[1]}, isMarried: ${useeeer[2]}`);
} else {
	console.log(`name: ${useeeer[0]}, age: ${useeeer[1]}`);
	}
}

printUser1(bob);
printUser1(tom);
//--------------------------
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];

function printMarks(marks: [string, ...number[]]) {
	for(const mark of marks) {
		console.log(mark);
	}
}
printMarks(math);
printMarks(physics);
//--------------------------
const tom1: readonly [string, number] = ["Tom", 36];
console.log(tom1[1]);

function printUser2(user: readonly [string, number]) {
 
    console.log(`name: ${user[0]}  age: ${user[1]}`);
}
function generateUser(): readonly [string, number] {
	return ['Rei', 19];
}
//--------------------------
let sam: [string, number, boolean] = ["Sam", 18, false];
let [username, userage, isMarried] = sam;
console.log(username);
console.log(userage);
console.log(isMarried);

const [username1, ...rest] = sam;
console.log(username1);     
console.log(rest[0]);      
console.log(rest[1]); 

let tom3: [string, number, boolean, number] = ["Tom", 36, false, 170];
const [, age, , height] = tom3;  
console.log(age);       
console.log(height);