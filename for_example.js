// for(let i =1; i<5; i++){
//     let res=''
//     for (let j=5; j>i; j--){
//         res+=' '
//     }
//     for(let k=1; k<=2*i-1; k++){
//     res+='*'
//     }
//     console.log(res);
// }


// for(let i =5; i>0; i--){
//     let res=''
//     for (let j=5; j>i; j--){
//         res+=' '
//     }
//     for(let k=1; k<=2*i-1; k++){
//     res+='*'
//     }
//     console.log(res);
// }

// for(let i =1; i<5; i++){

//     let res=''
//     for(let j=4; j>=i; j--){
//         res+=j;
//     }
//     console.log(res);
// }

    // let n =10;
    // let totalRows = 2 * n - 1;

    // for (let i = 1; i <= totalRows; i++) {
    //     let row = "";

    //     // Determine number of stars
    //     let stars = i <= n ? i : totalRows - i + 1;

    //     // Spaces
    //     for (let j = 1; j <= n - stars; j++) {
    //         row += "  ";
    //     }

    //     // Stars
    //     for (let k = 1; k <= (2 * stars - 1); k++) {
    //         row += "* ";
    //     }

    //     console.log(row);
    // }



let n = 5;

let rows = 2*n-1;

for(let i =1 ; i<=rows; i++){
    let start = i<=n ? i : rows-i+1;
    let res = '';

    for(let j=1; j<=n-start; j++){
        res+='  ';
    }
    for(let k =1; k<=2*start-1; k++){
        res +='* ';
    }
    console.log(res);
}