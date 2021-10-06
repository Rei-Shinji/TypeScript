var a = undefined;
var b = null;
var x = undefined;
console.log(x);
x = null;
console.log(x);
x = 5;
console.log(5);
//---------------------------------
var userId = null;
function printId(id) {
    if (id === null) {
        console.log("User -");
    }
    else {
        console.log("id user: " + id);
    }
}
printId(userId); //user -
userId = 45;
printId(userId); // id user = 45
//---------------------------------
var header = document.getElementById("header");
header.innerText = "Hi TypeScript";
//object!.property
//object!.method()
var header1 = null;
header1.innerText = "Hi TypeScript";
