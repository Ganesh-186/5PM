let number = [1,2,3,4,5,6,7];

console.log(number[3]);

console.log(number[6]);

//length
console.log(number.length);
console.log(number);

number.push(20)

console.log(number);

number.push(30,20,50);
console.log(number);

//[1,2,3,4,5,6,7,20,30,20,50]
number.pop();
console.log(number);

number.shift();
console.log(number);

number.unshift(33,78)
console.log(number);

number.reverse();
console.log(number);

let num = [11,112,33,432,395,443,456]

/*
[11,112,33,432,395,443,456]

11,112,121,125

11,112,113

11,112,113,121,125,33,395


121,125

33,395

432,443,456

432,443,456

*/
num.sort()
console.log(num);

num.sort((a,b)=>a-b)
console.log(num);

/*
[11,112,33,432,395,443,456]

[11,112,33,432,395,443,456]
[11,33,112,395,432,443,456]

[11,112]

11-112 = - 

[33,432]

33-432 = - 

[395,443]
395-443 = -




*/

num.sort((a,b)=>b-a)
console.log(num);
