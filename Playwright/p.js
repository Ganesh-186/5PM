for(let num=1;num<=100;i++){
    let prime=true;
    for(let i=2;i<num;i++){
        if(num%2===0){
            prime=false;
        }
    }
    if(prime){
        console.log(num);
    }
}