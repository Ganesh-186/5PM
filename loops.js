// // for(let i =1 ; i<=20; i--){
// //     if(i%2 == 0){
// //         console.log(i+" is even");
// //     }
    
// //     else{
// //         console.log(i + ' is odd');
// //     }
// // }

// // // 1 is odd
// // // 2 is even


// // for(let i=1;i<100;i++){
// //     let isPrime = true;
// //     for(let j=2;j<i;j++){
// //         if(i%j==0){
// //             isPrime=false;
// //             break;
// //         }
// //     }

// //     if(isPrime){
// //         console.log(i);
// //     }
// // }


// // let i = 1;
// // while(i<40){
// //     console.log(i);
// //     i++;
// // }

// // let number = 30;

// // do{
// //     console.log(number);
// //     number++;
// // }while(number<30)



// // let person = {
// //     name : 'swetha',
// //     age: 30,
// //     address:'unknown'
// // };

// // for(let a in person){
// //     console.log(person[a]);
// // }


// // let arr = [12,46,787,63]

// // for(let a of arr){
// //     console.log(a);
// // }

// // let str = 'Ganesh'
// // for(let a of str){
// //     console.log(a);
// // }




// // let person_details={
// //     name : 'ramya',
// //     age :25,
// //     address:'unknown'
// // }

// // console.log(person_details.name);

// // person_details.name='swetha';
// // console.log(person_details.name);

// // person_details.native = 'Guindy';
// // console.log(person_details);

// // delete person_details.native;
// // console.log(person_details);




// for(let i =2;i<=10;i++){
//     let prime=true;
//     for(let j=2; j<i;j++){
//         if(i%j==0){
//             prime=false
//         }
//     }
//     if(prime){
//         console.log(i);
//     }
// }

// let number = 1;

// while(number<=10){
//     console.log(number);
//     number++;
// }



// let num=100;

// do{
//     console.log(num);
//     num++;
// }while(num<200)


// let obj ={
// name:'ganesh',
// age:27,
// address:'street'}

// for(let a in obj){
// console.log(a);
// console.log(obj[a]);
// }

let str = 'Ganesh'

let str1 =''
for(let a of str){
    str1+=a; //''+G = 'G' +'a' ='Ga' 
}
console.log(str1);


let arr = [1,2,3,4,522,5,32,5654]
let sum=0
for(let a of arr){
    sum +=a; // sum = sum+a 
    /*
    0+1 =1
    1+2 = 3
    3+3 = 6
    */
}
console.log(sum);
