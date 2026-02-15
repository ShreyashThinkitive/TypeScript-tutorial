//generics type
function identifyType<myType>(arg:myType):myType{
    return arg;
}
const dummy1 = identifyType("shreyash");
const dummy2 = identifyType(10);
const dummy3 = identifyType(false);

//another term to use generics
function getFirstElement<T>(arr:T[]):T{
    return arr[0];
}
let mynum = getFirstElement([1,2,3,4,5]);
let myName = getFirstElement(['sh','re','ya','sh']);
console.log(mynum);
console.log(myName);

//generic interface
interface keyValuePair<k,v>{
   key:k
   value:v
}

let stringNumberPair:keyValuePair<number,string> = {
   key:11,
   value:"demo"
}
console.log(stringNumberPair);

//complex generics
interface ComplexInterface<k,v>{
    myName:{
        name:string
        email:k
        contact:v
    }
    office:k
    empid:v
}

let empDetails:ComplexInterface<string,number> = {
    myName:{
        name:"shreyash",
        contact:8765432233,
        email:"jhgfd@dfgh.hgf"
    },
    office:"banner",
    empid:123
}
console.log(empDetails);

//Generics in classes
class DataStorage<T>{
    private data :T[] = [];

    addItem(item:T):void{
        this.data.push(item);
    }

    removeItem(item:T):void{
        this.data = this.data.filter((i:T)=>i!==item)
    }

    getItem():T[]{
        return [...this.data];
    }
}

let loacalData = new DataStorage<string>();
loacalData.addItem("hello");
loacalData.addItem("typeScript");
loacalData.removeItem("hello");
console.log(loacalData.getItem());

//generic constrains
interface LengthWise{
    length:number
}

function logLength<T extends LengthWise>(arg:T){
    console.log(arg.length);
    return arg;
}
console.log(logLength("hello"));



 
 
 