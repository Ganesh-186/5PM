
// // JAVASCRIPT ARRAYS AND ARRAY METHODS


// // 1. CREATING ARRAYS

// let fruits = ["Apple", "Banana", "Cherry"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = [1, "hello", true, null, undefined];
// let emptyArray = [];


// console.log(numbers);
// console.log(mixed);

// // 2. PUSH - Adds element(s) at the end of array

// let arr1 = [1, 2, 3];
// console.log(arr1);
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// arr1.push(5, 6);
// console.log(arr1); // [1, 2, 3, 4, 5, 6]

// let newarray = arr1.push(7);
// console.log(newarray); // 7

// // 3. POP - Removes and returns last element

// let arr2 = [10, 20, 30, 40];
// console.log(arr2);
// arr2.pop();
// console.log(arr2);
// arr2.pop();
// console.log(arr2); // [10, 20]

// // 4. UNSHIFT - Adds element(s) at the beginning of array

// let arr3 = [2, 3, 4];
// console.log(arr3);
// arr3.unshift(1);
// console.log(arr3); // [1, 2, 3, 4]
// arr3.unshift(-1, 0);
// console.log(arr3); // [-1, 0, 1, 2, 3, 4]


// // 5. SHIFT - Removes and returns first element

// let arr4 = ["a", "b", "c", "d"];
// console.log(arr4);

// arr4.shift();
// console.log(arr4); // ["b", "c", "d"]
// arr4.shift();
// console.log(arr4); // ["c", "d"]

// // 6. REVERSE - Reverses the array in place

// let arr5 = [1, 2, 3, 4, 5];
// console.log(arr5);
// arr5.reverse();
// console.log(arr5); // [5, 4, 3, 2, 1]

// let words = ["Hello", "World", "JavaScript"];
// console.log("Original words:", words);
// words.reverse();
// console.log("After reverse():", words); // ["JavaScript", "World", "Hello"]

// // 7. SORT - Sorts the array in place

// let arr6 = [3, 1, 4, 1, 5, 9, 2, 6];
// console.log(arr6);
// arr6.sort();
// console.log(arr6); // [1, 1, 2, 3, 4, 5, 6, 9]

// let numbers1 = [10, 5, 40, 25, 1000, 1];
// console.log(numbers1);
// numbers1.sort();
// console.log(numbers1); // [1, 10, 1000, 25, 40, 5] - sorts as strings

// // Sorting strings
// let fruits2 = ["banana", "apple", "cherry", "date"];
// console.log(fruits2);
// fruits2.sort();
// console.log(fruits2); // ["apple", "banana", "cherry", "date"]

// // Sorting numbers in descending order (custom comparator)
// let numbers2 = [10, 5, 40, 25, 1000, 1];
// console.log(numbers2);
// numbers2.sort((a, b) => b - a);
// console.log(numbers2); // [1000, 40, 25, 10, 5, 1]

// // Sorting numbers in ascending order (custom comparator)
// let numbers3 = [10, 5, 40, 25, 1000, 1];
// console.log(numbers3);
// numbers3.sort((a, b) => a - b);
// console.log(numbers3); // [1, 5, 10, 25, 40, 1000]

// // 8. CONCAT - Combines arrays (creates new array)

// let arr7 = [1, 2, 3];
// let arr8 = [4, 5, 6];
// console.log(arr7);
// console.log(arr8);
// let combined = arr7.concat(arr8);
// console.log(combined); // [1, 2, 3, 4, 5, 6]
// console.log(arr7); // [1, 2, 3]

// // Concat multiple arrays
// let arr9 = ["a"];
// let arr10 = ["b", "c"];
// let arr11 = ["d"];
// let combined2 = arr9.concat(arr10, arr11);
// console.log(combined2); // ["a", "b", "c", "d"]



// // 9. FILTER - Creates new array with filtered elements

// let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers4);

// let evenNumbers = numbers4.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6, 8, 10]

// // Filter numbers greater than 5
// let greaterThan5 = numbers4.filter(num => num > 5);
// console.log( greaterThan5); // [6, 7, 8, 9, 10]




// // 10. MAP - Creates new array by transforming each element

// let numbers5 = [1, 2, 3, 4, 5];
// console.log(numbers5);

// // Double each number
// let doubled = numbers5.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// // Square each number
// let squared = numbers5.map(num => num ** 2);
// console.log(squared); // [1, 4, 9, 16, 25]


// // 11. REDUCE - Reduces array to single value

// let numbers6 = [1, 2, 3, 4, 5];
// console.log(numbers6);



// let sum2 = numbers6.reduce((acc, num) => acc + num);
// console.log("Sum without initial value:", sum2); // 15

// // Product of all numbers
// let product = numbers6.reduce((acc, num) => acc * num, 1);
// console.log("Product:", product); // 120





let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers4);
numbers4 = numbers4.filter(num => num % 2 === 0);
console.log(numbers4); // [2, 4, 6, 8, 10]); 
console.log(numbers4); // [2, 4, 6, 8, 10]); 

// ========================================
// ARRAY METHOD DEFINITIONS
// ========================================

/*
1. PUSH
   - Adds one or more elements to the end of an array
   - Returns the new length of the array
   - Modifies the original array (mutator method)
   - Syntax: array.push(element1, element2, ...)

2. POP
   - Removes the last element from an array and returns it
   - Returns the removed element
   - Modifies the original array (mutator method)
   - Syntax: array.pop()

3. UNSHIFT
   - Adds one or more elements to the beginning of an array
   - Returns the new length of the array
   - Modifies the original array (mutator method)
   - Syntax: array.unshift(element1, element2, ...)

4. SHIFT
   - Removes the first element from an array and returns it
   - Returns the removed element
   - Modifies the original array (mutator method)
   - Syntax: array.shift()

5. REVERSE
   - Reverses the array in place (first element becomes last, last becomes first)
   - Returns the reversed array
   - Modifies the original array (mutator method)
   - Syntax: array.reverse()

6. SORT
   - Sorts the array in place in ascending order (as strings by default)
   - Returns the sorted array
   - Modifies the original array (mutator method)
   - For numeric sorting, use a comparator function: (a, b) => a - b
   - Syntax: array.sort([compareFn])

7. CONCAT
   - Combines two or more arrays to create a new array
   - Does NOT modify the original arrays
   - Returns a new array containing all elements
   - Syntax: array.concat(array1, array2, ...)

8. FILTER
   - Creates a new array with elements that pass a test function
   - Does NOT modify the original array (accessor method)
   - Returns a new filtered array
   - Syntax: array.filter(callback(element, index, array))

9. MAP
   - Creates a new array by applying a function to each element
   - Does NOT modify the original array (accessor method)
   - Returns a new array with transformed elements
   - Syntax: array.map(callback(element, index, array))

10. REDUCE
    - Reduces an array to a single value using an accumulator
    - Does NOT modify the original array (accessor method)
    - Returns the final accumulated value
    - Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
*/
