var list = [10, 20, 30];
var colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
//----------------------------
var names = ["Tom", "Bob", "Rei"];
console.log(names[2]);
//----------------------------
var people = ["Tom", "Bob", "Sam"];
people[2] = "Rei";
console.log(people[2]);
//----------------------------
var people1 = ["Tom", "Bob", "Sam"];
//people1.push("Rei");    // ! Ошибка
//people1.pop();           // ! Ошибка
//----------------------------
function printUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}
function usersToString(users) {
    return users.join(", ");
}
var people2 = ["Tom", "Bob", "Rei"];
printUsers(people2);
console.log(usersToString(people2));
//----------------------------
var people3 = ["Tom", "Bob", "Rei"];
var first = people3[0], second = people3[1], third = people3[2];
console.log(first);
console.log(second);
console.log(third);
//----------------------------
var people4 = ["Tom", "Bob", "Rei"];
var first1 = people[0], rest = people.slice(1);
console.log(rest[1]);
console.log(rest[0]);
console.log(first1);
//----------------------------
var people5 = ["Tom", "Bob", "Kate", "Rei"];
var second1 = people5[1], forth1 = people5[3];
console.log(second1);
console.log(forth1);
