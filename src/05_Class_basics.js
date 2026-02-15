"use strict";
//normal class  as javascript
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    introduce() {
        return `hi my name is ${this.name} and my age is ${this.age}`;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
const person1 = new Person("jay", 24, "jp@gamil.com");
console.log(person1.introduce());
person1.setEmail("hellojp@gmail.com");
console.log(person1.getEmail());
//typeScript class
class Employee {
    constructor(id, empName, dempartment) {
        this.id = id;
        this.empName = empName;
        this.dempartment = dempartment;
    }
    showDetails() {
        return `hello my name is ${this.empName} and i am currently working in ${this.dempartment} department`;
    }
}
const emp1 = new Employee(101, "shreyash", "Software Engineering");
console.log(emp1.showDetails());
//extend class
class Manager extends Employee {
    constructor(id, empName, dempartment, teamSize) {
        super(id, empName, dempartment);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `this team manage by ${this.empName} and his team size is ${this.teamSize}`;
    }
}
const manager1 = new Manager(102, "snehal", "Project manager", 2);
console.log(manager1.getTeamInfo());
console.log(manager1.showDetails());
