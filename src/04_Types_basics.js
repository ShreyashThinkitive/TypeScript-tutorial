"use strict";
let points = {
    x: 20,
    y: 10
};
console.log(points);
let userID = "user_sdfghjkjhgr";
let id = 101;
console.log(userID, id);
let setStatus = (status) => console.log(`status is ${status}...`);
setStatus("pendding");
let myCircle = {
    color: "red",
    radius: 10
};
console.log(myCircle);
//string literal type
let direction;
direction = "east";
console.log(direction);
//numberic literal type
let diceNum;
diceNum = 4;
console.log(diceNum);
let data = {
    status: "success",
    data: "fetch from backend"
}; //for SuccessResponce
console.log(data);
//1st Type assertions
let someValue = "hello";
let strlength = someValue.length;
console.log(strlength);
//2nd Type assertions
let strvalueLen = someValue.length;
console.log(strvalueLen);
//type gurd using typeof
function proccessValue(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.length);
    }
}
proccessValue(1);
proccessValue("hello");
//type gurd using instanceof
class Dog {
    bark() {
        console.log("woof!! woof!!");
    }
}
class Cat {
    meow() {
        console.log("Meow... Meow...");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
