// console.log("Hi how are you?");
// console.log(`Hi 
//     I am fine
// What about you?`);

// console.log("I am 'Ganesh'")
for(let num = 2; num <= 100;  num++){
    let prime=true;
    for(let i=2; i<num; i++){
        if(num %i == 0){
            prime=false;
            break;
        }
    }
    if(prime){
        console.log(num);
    }
}
console.log(1%2);