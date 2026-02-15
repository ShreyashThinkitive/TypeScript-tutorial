"use strict";
//function
function mes(msg) {
    console.log(msg);
}
mes("hello function");
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
//optiona parameter use "?"
function greet(name, greeting) {
    if (greeting) {
        return `Hello,${name}! and ${greeting}`;
    }
    return `Hello,${name}!`;
}
console.log(greet("shreyash"));
console.log(greet("jay", "congratulation"));
//default paratmeter
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(2));
//Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));
//Arrow function
const divide = (a, b) => a / b;
console.log(divide(10, 2));
//function type
let calculate;
calculate = add;
console.log(calculate(50, 5));
