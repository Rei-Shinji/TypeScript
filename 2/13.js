function addNumbers(firstNumber) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    var result = firstNumber;
    for (var i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
var num1 = addNumbers(3, 7, 8);
console.log(num1);
var num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2);
//--------------------------------
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
var numbers = [1, 3, 5, 7, 9];
var num = sum.apply(void 0, numbers);
console.log(num);
//--------------------------------
function sum1(a, b) {
    return a + b;
}
//const numbers = [1, 3, 5, 7, 9] as const;
var numbers1 = [1, 3];
var num3 = sum1.apply(void 0, numbers1); // ! Ошибка - функция sum принимает только два параметра
console.log(num3); // 25
//--------------------------------
function summ(a, b, c) {
    var result = a + b;
    if (c !== undefined) {
        result += c;
    }
    return result;
}
var number1 = [1, 3];
var numm = summ.apply(void 0, number1);
console.log(numm);
var number2 = [1, 3, 7];
var numm1 = summ.apply(void 0, number2);
console.log(numm1);
//--------------------------------
function printValues(name, age) {
    console.log(name);
    console.log(age);
}
var values = ["Tom", 36];
printValues.apply(void 0, values);
//--------------------------------
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
var current1 = Season[2];
console.log(current);
console.log(current1);
current = Season.Autumn;
//--------------------------------
var Season1;
(function (Season1) {
    Season1["Winter"] = "Zima";
    Season1["Spring"] = "Vesna";
    Season1["Summer"] = "Leto";
    Season1["Autumn"] = "Osen'";
})(Season1 || (Season1 = {}));
;
var cur = Season1.Summer;
console.log(cur);
//--------------------------------
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Good Morning");
    }
    else {
        console.log("Good Evening");
    }
}
var cur1 = DayTime.Morning;
welcome(cur1);
welcome(DayTime.Evening);
