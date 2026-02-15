//object type annotations
let user: { name: string, age: number, isAdmin: boolean } = {
    name: "shreyash",
    age: 25,
    isAdmin: true
}
console.log(user);

//Interface
interface User1 {
    readonly id: number //readOnly can't change it's value
    name: string
    age: number
    isAdmin?: boolean
}

let user1: User1 = {
    id: 1,
    name: "jay",
    age: 24
}
console.log(user1);

//interface with method
interface Product {
    name: string
    price: number
    getDiscount?: (percent: number) => number
    totalPrice?: (getDiscount: number, price: number) => number
}

let laptop: Product = {
    name: "HP omen",
    price: 100000,
    getDiscount: function (percent: number) {
        return laptop.price * (percent / 100);
    },
    totalPrice: function (discount: number, price: number) {
        return price - discount;
    }

}
const discount: number = laptop.getDiscount?.(10) ?? 0;
console.log(laptop.totalPrice?.(discount, laptop.price));

//same name of interface
interface Animal {
    name: string
}
interface Animal {
    age: number
}

let petDetails: Animal = {
    name: "moti",
    age: 9
}
console.log(petDetails);








