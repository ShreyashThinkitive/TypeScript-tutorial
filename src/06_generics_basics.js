"use strict";
//generics type
function identifyType(arg) {
    return arg;
}
const dummy1 = identifyType("shreyash");
const dummy2 = identifyType(10);
const dummy3 = identifyType(false);
//another term to use generics
function getFirstElement(arr) {
    return arr[0];
}
let mynum = getFirstElement([1, 2, 3, 4, 5]);
let myName = getFirstElement(['sh', 're', 'ya', 'sh']);
console.log(mynum);
console.log(myName);
let stringNumberPair = {
    key: 11,
    value: "demo"
};
console.log(stringNumberPair);
let empDetails = {
    myName: {
        name: "shreyash",
        contact: 8765432233,
        email: "jhgfd@dfgh.hgf"
    },
    office: "banner",
    empid: 123
};
console.log(empDetails);
//Generics in classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItem() {
        return [...this.data];
    }
}
let loacalData = new DataStorage();
loacalData.addItem("hello");
loacalData.addItem("typeScript");
loacalData.removeItem("hello");
console.log(loacalData.getItem());
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
console.log(logLength("hello"));
