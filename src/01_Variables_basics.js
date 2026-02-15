"use strict";
//primative
let message = "hello typescript";
console.log(message);
let num = 10;
console.log(num);
let isAdmin = true;
console.log(isAdmin);
//Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let names = ["test", "learn", "build"];
console.log(names);
//tuple
let person = ["samrtWorker", 24];
console.log(person);
//Enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let favColor = Color.Red;
console.log(favColor);
//any (avoid when it is possible)
let randomValue = "shreyash";
randomValue = 10;
randomValue = false;
console.log(randomValue);
//unknown(safer that "any")
let userInput;
userInput = 5;
userInput = "shryash";
userInput = true;
console.log(userInput);
//null
let nullType = null;
console.log(nullType);
//undefined
let undefinedType = undefined;
console.log(undefinedType);
