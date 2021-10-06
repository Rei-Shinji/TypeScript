var user;
user = ["Rei", 19];
console.log(user[1]);
user[1] = 20;
console.log(user[1]);
for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
    var prop = user_1[_i];
    console.log(prop);
}
//--------------------------
function printUser(user) {
    console.log(user[0]);
    console.log(user[1]);
}
var rei = ["Rei", 19];
printUser(rei);
function createUser(name, age) {
    return [name, age];
}
var user1 = createUser("Bob", 41);
console.log(user1[0]);
console.log(user1[1]);
//--------------------------
var bob = ["Booooob", 41, true];
var tom = ["Tooooom", 36];
function printUser1(useeeer) {
    if (useeeer[2] !== undefined) {
        console.log("name: " + useeeer[0] + ", age: " + useeeer[1] + ", isMarried: " + useeeer[2]);
    }
    else {
        console.log("name: " + useeeer[0] + ", age: " + useeeer[1]);
    }
}
printUser1(bob);
printUser1(tom);
//--------------------------
var math = ["Math", 5, 4, 5, 4, 4];
var physics = ["Physics", 5, 5, 5];
function printMarks(marks) {
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var mark = marks_1[_i];
        console.log(mark);
    }
}
printMarks(math);
printMarks(physics);
//--------------------------
var tom1 = ["Tom", 36];
console.log(tom1[1]);
function printUser2(user) {
    console.log("name: " + user[0] + "  age: " + user[1]);
}
function generateUser() {
    return ['Rei', 19];
}
//--------------------------
var sam = ["Sam", 18, false];
var username = sam[0], userage = sam[1], isMarried = sam[2];
console.log(username);
console.log(userage);
console.log(isMarried);
var username1 = sam[0], rest = sam.slice(1);
console.log(username1);
console.log(rest[0]);
console.log(rest[1]);
var tom3 = ["Tom", 36, false, 170];
var age = tom3[1], height = tom3[3];
console.log(age);
console.log(height);
