let name = "Ganesh";

// String length
console.log(name.length);

// String concatenation (+) - combines two strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);



// toUpperCase() - converts string to uppercase
let str = "Hello World";

console.log(str.toUpperCase());

// toLowerCase() - converts string to lowercase

console.log(str.toLowerCase());

// indexOf() - returns index of first occurrence of a substring

console.log(str.indexOf("o"));
console.log(str.indexOf("World"));
console.log(str.indexOf("xyz"));

// lastIndexOf() - returns index of last occurrence of a substring

console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("l"));

// charAt() - returns character at a specified index

console.log(str.charAt(0));
console.log(str.charAt(6));
console.log(str.charAt(10));

// substring() - extracts characters between two indices, negative indices are not allowed

console.log(str.substring(0, 5));
console.log(str.substring(6,5));
console.log(str.substring(2,-1));
console.log(str.substring(3));



// slice() - extracts a section of a string , negative indices are allowed

console.log(str.slice(0, 5));
console.log(str.slice(6,5));
console.log(str.slice(2,-1));
console.log(str.slice(3));

// replace() - replaces first occurrence of a substring

console.log(str.replace("World", "JavaScript"));
console.log(str.replace("o", "0"));

// replaceAll() - replaces all occurrences of a substring

let text = "apple apple apple banana apple  mango";
console.log(text.replaceAll("apple", "orange"));

let sentence = "The cat sat on the mat";
console.log(sentence.replaceAll("at", "og"));

// trim() - removes whitespace from both ends of a string

let spacedStr = "   Hello World   ";

console.log(spacedStr.trim());

// join() - joins array elements into a string (array method used with strings)

let arr = ["apple", "banana", "orange"];
console.log(arr.join());

// concat() - combines two or more strings

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(str2));

// split() - splits a string into an array of substrings based on a separator
let csv = "John,Doe,30,Engineer";
let csvArray = csv.split(",");
console.log(csvArray);

// includes() - checks if a string contains a specified substring, returns true or false
console.log(str.includes("World"));
console.log(str.includes("JavaScript"));


//string escaping
let quote = "She said, \"Hello!\"";
console.log(quote);

let passage = 'It\'s a nice day!';
console.log(passage);

// to add backslash 
let backslash = "This is a backslash: \\";
console.log(backslash); 




// Definitions of String Methods Used in This Code:

// 1. length - returns the number of characters in a string.
//    Example: "Hello".length returns 5.

// 2. toUpperCase() - Converts all characters in a string to uppercase letters.
//    Example: "hello".toUpperCase() returns "HELLO".

// 3. toLowerCase() - Converts all characters in a string to lowercase letters.
//    Example: "HELLO".toLowerCase() returns "hello".

// 4. indexOf() - Returns the index of the first occurrence of a specified substring within the string.
//    Returns -1 if the substring is not found.
//    Example: "Hello World".indexOf("o") returns 4.

// 5. lastIndexOf() - Returns the index of the last occurrence of a specified substring within the string.
//    Returns -1 if the substring is not found.
//    Example: "Hello World".lastIndexOf("o") returns 7.

// 6. charAt() - Returns the character at a specified index in the string.
//    Example: "Hello".charAt(0) returns "H".

// 7. substring() - Extracts characters from a string between two specified indices (start inclusive, end exclusive).
//    If end value is not specified, extracts till the end of the string. Negative indices are not allowed and treated as 0.
//    If start is greater than end, the method swaps them.
//    Example: "Hello World".substring(0, 5) returns "Hello".

// 8. slice() - Extracts a section of a string and returns it as a new string.
//    Supports negative indices (counting from the end).
//    If start is greater than end, it returns an empty string.
//    Example: "Hello World".slice(0, 5) returns "Hello"; "Hello World".slice(-5) returns "World".

// 9. replace() - Replaces the first occurrence of a substring with a new substring.
//    Example: "Hello World".replace("World", "JavaScript") returns "Hello JavaScript".

// 10. replaceAll() - Replaces all occurrences of a substring with a new substring.
//     Example: "apple apple".replaceAll("apple", "orange") returns "orange orange".

// 11. trim() - Removes whitespace from both the beginning and end of a string.
//     Example: "  Hello  ".trim() returns "Hello".

// 12. join() - An array method that joins all elements of an array into a string, using a specified separator.
//     Example: ["a", "b", "c"].join("-") returns "a-b-c".

// 13. concat() - Combines two or more strings into one string.
//     Example: "Hello".concat(" ", "World") returns "Hello World".

// 14. split() - Splits a string into an array of substrings based on a specified separator.
//     Example: "Hello World".split(" ") returns ["Hello", "World"].

// 15. includes() - Determines whether a string contains a specified substring, returning true or false.
//     Example: "Hello World".includes("World") returns true.

// Additional Notes:
// - String escaping: Using backslashes (\) to include special characters like quotes in strings.
//   Example: "She said, \"Hello!\"" includes double quotes inside the string.
// - The code demonstrates various string operations essential for text manipulation in JavaScript.








//let space = "\t".repeat(5);

// let str = "Hello \t\tWorld";
// console.log(str);


let str = "Hello\" World";
console.log(str);