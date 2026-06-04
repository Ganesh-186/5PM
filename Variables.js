// JavaScript Variables

// · var

// Example:
var x = 5;
console.log("var example:", x);


// Example of redeclaration:
var x = 10;
var x = 20; // No error, but overwrites
console.log("Redeclared var:", x);

// Example for Reassignment
x = 30;
console.log("Reassignment x:", x);

x = 40;
console.log("Reassignment x:", x);


// · let

// Example:
let age = 25;
console.log("let example:", age);


// Reassignment is allowed:
age = 26;
console.log("Reassigned let:", age);


// Cannot redeclare in same scope:
// let y = 5;
// let y = 10; // SyntaxError: Identifier 'y' has already been declared


// · const

// Example:
const PI = 3.14159;
console.log("const example:", PI);

// const must be initialized:
// const uninitializedConst; // SyntaxError: Missing initializer in const declaration

// Cannot reassign:
// PI = 3.14; // TypeError: Assignment to constant variable.


// Example:
// const z; // SyntaxError
// z = 10;

// const a = 1;
// a = 2; // TypeError

// Variable Naming Rules
// When declaring variables, follow these rules for naming:
// - Variable names can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
// - Must start with a letter, underscore (_), or dollar sign ($). Cannot start with a digit.
// - Case sensitive: 'myVar' and 'myvar' are different variables.
// - Cannot use reserved words (e.g., var, let, const, if, function, etc.).
// - Use camelCase for multi-word names (e.g., myVariableName).
// - Use descriptive names that indicate the variable's purpose.
// - Avoid single letters except for loop counters (i, j, k).

// Valid examples:
let myVariable = "valid";
let _privateVar = 42;
let $dollarVar = true;
let camelCaseExample = "good";

// Invalid examples (would cause SyntaxError):

// let 123invalid; // Cannot start with digit
// let var; // Reserved word
// let my-variable; // Hyphen not allowed (use underscore or camelCase)
// let my variable; // Space not allowed


// Theory Part: Understanding JavaScript Variables

// In JavaScript, variables are containers for storing data values. They act as named storage locations that hold information that can be referenced and manipulated throughout your code.

// Key Concepts:

// 1. Variable Declaration:
//    - Declaration is the process of creating a variable and assigning it a name.
//    - In JavaScript, you can declare variables using var, let, or const.

// 2. Variable Initialization:
//    - Initialization is assigning an initial value to a variable.
//    - Variables can be declared without initialization, but const must be initialized at declaration.

// 3. Scope:
//    - Scope determines where a variable is accessible in your code.
//    - var: Function-scoped (accessible within the function where declared).
//    - let and const: Block-scoped (accessible only within the block {} where declared).

// 4. Hoisting:
//    - Hoisting is JavaScript's behavior of moving declarations to the top of their scope.
//    - var declarations are hoisted and initialized with undefined.
//    - let and const are hoisted but not initialized (Temporal Dead Zone).

// 5. Reassignment and Redeclaration:
//    - var: Allows both reassignment and redeclaration.
//    - let: Allows reassignment but not redeclaration in the same scope.
//    - const: Allows neither reassignment nor redeclaration.

// 6. Best Practices:
//    - Use const by default for values that shouldn't change.
//    - Use let for variables that need reassignment.
//    - Avoid var in modern JavaScript due to its scoping issues.
//    - Always declare variables before use.
//    - Use meaningful variable names following camelCase convention.

// Differences between var, let, and const:

// - var: Legacy way, function-scoped, allows redeclaration and reassignment.
// - let: Modern alternative to var, block-scoped, allows reassignment but not redeclaration.
// - const: For constants, block-scoped, requires initialization, no reassignment or redeclaration.

// Variable Types:
// JavaScript is dynamically typed, so variables can hold different types of values:
// - Primitive types: string, number, boolean, undefined, null, symbol, bigint
// - Reference types: object, array, function

// Memory Management:
// Variables store references to values in memory. Primitive values are stored directly,
// while objects are stored as references to heap memory locations.


// Explanation:

// This document covers the fundamentals of JavaScript variables, including the three ways to declare them (var, let, const) with practical examples. Understanding variable declaration, scope, and lifecycle is crucial for writing clean, bug-free JavaScript code. The examples demonstrate common use cases and potential pitfalls. By mastering these concepts, you'll be able to manage data effectively in your JavaScript programs, avoid common errors like reference errors or scope issues, and write more maintainable code. Remember to choose the appropriate declaration keyword based on whether the variable needs to be reassigned and its intended scope.

