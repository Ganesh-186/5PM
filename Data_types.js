// JavaScript Data Types

//String

let word= "Hello, World!";
console.log(word);

//Number

let x = 42;
let y = 3.14;
let z = -10;
console.log(x);
console.log(y);
console.log(z); 


// Boolean

let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

// · Undefined

let name;
console.log(name );

// · Null

let address = null;
console.log(address);

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);

// Symbol
let sym = Symbol("id");
console.log(sym);


// Non-Primitive Data Types

// · Array


let  n= [1, 2, 3, 4, 5];
let mixedArray = ["apple", 42, true, null];

console.log(n);
console.log(mixedArray);

console.log(n[0]); // 1
console.log(n[1]); // 2
console.log(n[2]); // 3



// · Object

let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"]
};

console.log(person);





let b=12354789635241566;// till 16 digits it is accurate
console.log(b);
let a =12354789635241566885264555n;
console.log(a);



let person1 = {
    name : "Ganesh",
    age : 23,
    DOB : "20-11-1998",
}
console.log(person1.name);