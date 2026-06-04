// ============================================
// JAVASCRIPT OPERATORS - COMPREHENSIVE EXAMPLES
// ============================================

// ===== ARITHMETIC OPERATORS =====
let a = 10;
let b = 3;

console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a + b);
console.log(a ** b);



// ===== COMPARISON OPERATORS =====
let a = 10;
let b = 20;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);


// STRICT EQUALITY 

console.log( 5 === 5);
console.log(5 === '5');

//loose equality

console.log(5 == 5);
console.log(5 == '5');


// ===== LOGICAL OPERATORS =====

console.log(true && true);
console.log(true && false);
console.log(a > b && a == b);
    

// OR (||): 
console.log(true || false);
console.log(false || false);
console.log(a > b || a < b);

// NOT (!):
let isRaining = true;
console.log(isRaining);
console.log(!isRaining);

console.log(!(5 > 10));



// ===== TERNARY OPERATOR (? :) =====
// Syntax: condition ? value_if_true : value_if_false


let student_age = 20;
let status = student_age >= 18 ? "Adult" : "Minor";
console.log(status);

// ===== INCREMENT & DECREMENT OPERATORS =====
let x = 5;

console.log(++x);
console.log(x);

console.log(x++);
console.log(x);

let y = 10;
console.log(--y);
console.log(y);

console.log(y--);
console.log(y);