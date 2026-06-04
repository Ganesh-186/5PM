let str = "hello world";
let count = 0;
let char = "";
for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
        if(str[i] === str[j]){
            count++;
        }
    }
    char += str[i] +":"+ count + " " ;
    count = 0;
}
console.log(char);