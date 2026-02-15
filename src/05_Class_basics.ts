//normal class  as javascript
class Person {
    public name: string;
    protected age: number;
    private email: string

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    introduce(): string {
        return `hi my name is ${this.name} and my age is ${this.age}`;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }
}
const person1 = new Person("jay", 24, "jp@gamil.com");
console.log(person1.introduce());
person1.setEmail("hellojp@gmail.com");
console.log(person1.getEmail());

//typeScript class
class Employee {
    constructor(
        private id: number,
        public empName: string,
        protected dempartment: string
    ) { }

    showDetails() {
        return `hello my name is ${this.empName} and i am currently working in ${this.dempartment} department`;
    }
}

const emp1 = new Employee(101, "shreyash", "Software Engineering");
console.log(emp1.showDetails());

//extend class
class Manager extends Employee {
    constructor(
        id: number,
        empName: string,
        dempartment: string,
        private teamSize: number
    ) {
        super(id, empName, dempartment)
    }
    getTeamInfo() {
        return `this team manage by ${this.empName} and his team size is ${this.teamSize}`
    }
}

const manager1 = new Manager(102, "snehal", "Project manager", 2);
console.log(manager1.getTeamInfo());
console.log(manager1.showDetails());



