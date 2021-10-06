let person = {name:"Rei", age: 19};
console.log(person.name);
console.log(person["name"]);
//------------------------------------
let person1 = { name: "Rei", age: 19};
//person1 = { name: "Rei"}; //error
//------------------------------------
let person2: { name: string; age: number } = { name: "Rei", age: 19};
console.log(person2.name);
//------------------------------------
let person3 = { name: "Rei", age: 19 };
person3 = { name: "Rei", age: 19 };
//------------------------------------
let person4: { name: string; age?: number }; //свойство age - необязательное

person4 = { name: "Rei", age: 19 };
console.log(person4.age);
person4 = { name: "Rei" };
console.log(person4.age);
//------------------------------------
let person5: { name: string; age?: number } = { name: "Rei", age: 19 };
if (person5.age !== undefined) {
	console.log(person5.age);
}
//------------------------------------
function printUser(user: { name: string; age: number}) {
	console.log(`name: ${user.name} age: ${user.age}`);
}
let rei = {age: 19, name: "Rei"};
printUser(rei);
//------------------------------------
function printUser1(user: { name: string, age: number}) {
	console.log(`name ${user.name} age: ${user.age}`);
}
let rei1 = { name: "Rei", age: 19, isMarried: true };
printUser1(rei1);
//------------------------------------
function defaultUser(): { name: string, age: number} {
    return { name: "Rei", age: 19 }; 
}
let user = defaultUser();
console.log(`name: ${user.name} age: ${user.age}`);
//------------------------------------
let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
let bob: { name: string; age?: number } = { name: "Bob" };

function printUser3(user: { name: string; age?: number }) {
    if ("age" in user) {
        console.log(`Name: ${user.name} Age: ${user.age}`);
    }
    else {
        console.log(`Name: ${user.name}`);
    }
}
printUser3(tom);
printUser3(bob);
//------------------------------------
function printUser4({name, age}: { name: string; age: number}) {
  console.log(`name: ${name}  age: ${age}`);
}
 
let tom1 = {name: "Tom", age: 36};
printUser4(tom1);
//------------------------------------
function printUser5({name, age}: { name: string; age?: number}) {
  if(age!==undefined){ console.log(`name: ${name}  age: ${age}`);}
  else {console.log(`name: ${name}`);}
}
let tom2 = {name: "Tom"};
printUser5(tom2);     // name: Tom
 
let bob2 = {name: "Bob", age: 44};
printUser5(bob2);     // name: Bob  age: 44
//------------------------------------
function printUser6({name, age = 25}: { name: string; age?: number}) {
  console.log(`name: ${name}  age: ${age}`);
}
 
let tom3 = {name: "Tom"};
printUser6(tom3);     // name: Tom  age: 25
 
let bob3 = {name: "Bob", age: 44};
printUser6(bob3);     // name: Bob  age: 44