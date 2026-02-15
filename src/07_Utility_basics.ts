interface Todo{
    title:string
    description?:string
    createdAt:Date
    completed:boolean
    assignedTo?:string
}

//partial all property make optional
type partialTodo = Partial<Todo>;
let updatedTodo:partialTodo = {
    completed:true
}
console.log(updatedTodo);

//make all property require
type RequireTodo = Required<Todo>;
let allProperties:RequireTodo = {
    title:"gym",
    description:"i want go to the gym",
    assignedTo:"shreyash",
    completed:false,
    createdAt:new Date()
}
console.log(allProperties);

//readonly for all properties
type ReadOnlyTodo = Readonly<Todo>;
let fixedvalue:ReadOnlyTodo={
     title:"gym",
    description:"i want go to the gym",
    assignedTo:"shreyash",
    completed:false,
    createdAt:new Date()
}
console.log(fixedvalue);

//pick only sepecifice properties
type PickTodo = Pick<Todo,"title"|"completed">;
let someProperty:PickTodo={
    title:"hello",
    completed:true
}
console.log(someProperty);

//omit to remove specifice property
type omitType = Omit<Todo,"createdAt">
let withoutCreatedAt:omitType = {
    title:"gym",
    description:"i want go to the gym",
    assignedTo:"shreyash",
    completed:false
}
console.log(withoutCreatedAt);




