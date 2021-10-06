let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
//----------------------------
let names: Array<string> = ["Tom", "Bob", "Rei"];
console.log(names[2]);
//----------------------------
const people = ["Tom", "Bob", "Sam"];
people[2] = "Rei";
console.log(people[2]);
//----------------------------
const people1: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
 
//people1.push("Rei");    // ! Ошибка
//people1.pop();           // ! Ошибка
//----------------------------
function printUsers(users: readonly string[]) {
	for(const user of users) {
		console.log(user);
	}
}

function usersToString(users: ReadonlyArray<string>): String{
	return users.join(", ");
}

const people2: readonly string[] = ["Tom", "Bob", "Rei"];

printUsers(people2);
console.log(usersToString(people2));
//----------------------------
const people3: string[] = ["Tom", "Bob", "Rei"];

const [first, second, third] = people3;
console.log(first);
console.log(second);
console.log(third);
//----------------------------
const people4: string[] = ["Tom", "Bob", "Rei"];

const [first1, ...rest] = people;
console.log(rest[1]);
console.log(rest[0]);
console.log(first1);
//----------------------------
const people5: string[]= ["Tom", "Bob", "Kate", "Rei"];
 
const [, second1, ,forth1, ] = people5;
console.log(second1);
console.log(forth1);