// //String

// //keyword variablename = 'value';
// let text = 'Hi How are you';

// let text1 = "Hello I am fine";
// let char = 'A';
// let char1 = "hi hello hello";

// console.log(char.length);
// console.log(char1.length);

// console.log(char1[2]);

// console.log(text1.toUpperCase());
// console.log(char.toLowerCase());

// console.log(char1.indexOf('llo'));
// console.log(char1.indexOf('z'));

// console.log(char1.lastIndexOf('h'));
// console.log(char1.lastIndexOf('H'));
// console.log(char1.lastIndexOf('ho'));
// console.log(char1.lastIndexOf('ll'));

// let line = 'In the meeting';


// console.log(line.indexOf('the'));
// //sunstring(start,end)
// console.log(line.substring(3,6));
// console.log(line.substring(4));

// console.log(line.substring(6,3)); // (3,6)
// console.log(line.substring(-5,10));//(0,10) (0,0)


// //slice(start,end)
// console.log(line.slice(3,6));
// console.log(line.slice(4));

// console.log(line.slice(6,3));
// console.log(line.slice(-5,10));


let text = 'hi how are you?'
console.log(text.indexOf('h'));

console.log(text.indexOf(' '));

console.log(text.lastIndexOf('are you?'));

console.log(text.charAt(12));

console.log(text.includes('hello'));

let text1 ='     Hi      hello      ';
console.log(text1);
console.log(text1.trim());

let fruits = 'Apple,orange,watermelon';
//['apple','orange', 'watermelon']
console.log(fruits.split(","));

let things = fruits.split(',');
console.log(things);

console.log(things.join('-'));

console.log('Hi'+' '+'Hello');

//string1.concat(string2,string3,string4)

let a = 'Hi';
let b = 'Hello';
let c= 'How are you?'
console.log(a.concat(' ',b,' ',c));
console.log(b.concat(' ',c));
