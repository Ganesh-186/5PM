// //syntax
// /*
// if(condition){
// ------
// ------
// }
// else{
//     -------
// }
// */
// let num=11;
// if(num%2==0){
//     console.log('Even');
// }
// else{
//     console.log('odd');
// }

// /*
// if(cond){
// }
// else if(cond){
// }
// else if(cond){
// }
// else{
// }
// */

// let mark =30;
// if(mark>90){
//     console.log('Grade O');
//     if(mark>95){
//         console.log('Super Topper');
//     }
//     else{
//         console.log('Topper');
//     }
// }
// else if(mark>=80){
//     console.log('Grade A');
// }
// else if(mark>=70){
//     console.log('Grade B');
// }
// else if(mark>=60){
//     console.log('Grade C');
// }
// else if(mark>=45){
//     console.log('Grade D');
// }
// else{
//     if(mark>35){
//         console.log('need to improve');
//     }
//     else{
//         console.log('Need more improvement');
//     }
    
// }



//switch
/*
switch(condition or exp){
    case 1:{
    ----------    
    }
    case 2:{
        ------
    }
    case3:{
    --------
    }
    default:{
    }
}
*/

let day ='tue';

switch(day){
    case 'mon':{
        console.log('1st day of the week');
        break;
    }
    case 'tue':{
        console.log('2nd day ');
        break;
    }
    case 'wed':{
        console.log('3rd day');
        break;
    }
    default:{
        console.log('May be thur or fri or sat or sun');
        break;
    }
}