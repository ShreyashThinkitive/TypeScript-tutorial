//primative
let message: string = "hello typescript";
console.log(message);

let num: number = 10;
console.log(num);

let isAdmin: boolean = true;
console.log(isAdmin);

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let names: string[] = ["test", "learn", "build"];
console.log(names);

//tuple
let person: [string, number] = ["samrtWorker", 24];
console.log(person);

//Enum
enum Color {
    Blue,
    Red,
    Green
}
let favColor: Color = Color.Red
console.log(favColor);

//any (avoid when it is possible)
let randomValue: any = "shreyash";
randomValue = 10;
randomValue = false
console.log(randomValue);

//unknown(safer that "any")
let userInput: unknown;
userInput = 5;
userInput = "shryash";
userInput = true;
console.log(userInput);

//null
let nullType: null = null;
console.log(nullType);


//undefined
let undefinedType: undefined = undefined;
console.log(undefinedType);










