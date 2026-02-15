//type
type Point = {
    x: number
    y: number
}
let points: Point = {
    x: 20,
    y: 10
}
console.log(points);

//type alias in primative
type ID = string | number
let userID: ID = "user_sdfghjkjhgr";
let id: ID = 101;
console.log(userID, id);

//union type (OR)
type Status = "pendding" | "approved" | "rejected";
let setStatus = (status: Status) => console.log(`status is ${status}...`);
setStatus("pendding");

//intersction type (AND)
interface Colorful {
    color: string
}

interface circle {
    radius: number
}

type colorfullcircle = Colorful & circle
let myCircle: colorfullcircle = {
    color: "red",
    radius: 10
}
console.log(myCircle);

//string literal type
let direction: "east" | "west" | "north" | "south";
direction = "east";
console.log(direction);

//numberic literal type
let diceNum: 1 | 2 | 3 | 4 | 5 | 6;
diceNum = 4;
console.log(diceNum);

//combine with other type
type SuccessResponce = {
    status: "success";
    data: any;
}

type ErrorResponce = {
    status: "error";
    message: string;
}

type ApiResponce = SuccessResponce | ErrorResponce;

let data: ApiResponce = {
    status: "success",
    data: "fetch from backend"
}//for SuccessResponce
console.log(data);

//1st Type assertions
let someValue: unknown = "hello";
let strlength: number = (someValue as string).length;
console.log(strlength);

//2nd Type assertions
let strvalueLen: number = (<string>someValue).length;
console.log(strvalueLen);

//type gurd using typeof
function proccessValue(value: number | string) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
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

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);





