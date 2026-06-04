
// · Function

// 1. Function Declaration
function sample() {
    let a=10;
    let b=20;
    let sum =a+b;
    console.log(sum);
}
sample(); 

function greeting(name) {
    console.log("Hello, "+ name);
}
greeting("Ganesh");

//with return type
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));



function multiply(x, y) {
    return x * y; // returns a number
}
console.log(multiply(4, 2)); // 8


// Arrow Functions
let divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5


let square = (num) => num * num;
console.log(square(5));

let result = (a,b) =>{
    console.log(a+b);
}
result(10,20);



let shape = (type) => console.log("The shape is: " + type);
shape("Circle");

let area = (radius) => { return 3.14 * radius * radius; };
console.log(area(5));