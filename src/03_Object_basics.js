"use strict";
//object type annotations
let user = {
    name: "shreyash",
    age: 25,
    isAdmin: true
};
console.log(user);
let user1 = {
    id: 1,
    name: "jay",
    age: 24
};
console.log(user1);
let laptop = {
    name: "HP omen",
    price: 100000,
    getDiscount: function (percent) {
        return laptop.price * (percent / 100);
    },
    totalPrice: function (discount, price) {
        return price - discount;
    }
};
const discount = laptop.getDiscount?.(10) ?? 0;
console.log(laptop.totalPrice?.(discount, laptop.price));
let petDetails = {
    name: "moti",
    age: 9
};
console.log(petDetails);
