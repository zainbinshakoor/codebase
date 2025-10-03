// var a;
// console.log(a); // undefined
// a=10;
// console.log(a); // 10
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;
// let a = 15;
// if(a == 5) {
//     console.log(`The value of A is ${a}`); // 5
// }else {
//     console.log(`The value of A is not 5`); // This will not execute
// }
// a===5||?console.log(`The value of A is ${a}`):console.log(`The value of A is not 5`); // 5
// a===5?console.log(`The value of A is ${a}`):a===10?console.log(`The value of A is ${a}`):console.log(`The value of A is not 5 or 10`); // 5

// let day = 3;
// let day2=day;
// day=4
// console.log(day2);

// let object1 = {
//     name: "Zain",
//     age: 21
// }
// let object2 = object1;
// object2.name = "Ali";
// console.log(object1.name);

//shallow copy or deep copy

// let original={
//     name: "Zain",
//     age: 21,
//     address:{
//         city:'FSD',
//         country:'Pakistan'
//     }
// }

// let shallowCopy = {...original} 

// shallowCopy.name="Ali"
// shallowCopy.address.city="Lahore"

// console.log(original.name);
// console.log(original.address.city);

let original={
    name: "Zain",
    age: 21,
    address:{
        city:'FSD',
        country:'Pakistan'
    }
}


// structuredClone
let deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.name="Ali"
deepCopy.address.city="Lahore"

console.log(original.name);
console.log(original.address.city);
