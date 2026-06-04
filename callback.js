function a(call){
    console.log("hello");
    call();
}
function b(callback){
    console.log("hi");
    callback();
}
function c(callback){
    console.log("world");
    callback();
}
function d(){
    console.log("java");
}
a(()=>{
    c(()=>{
        b(()=>{
            d()
        })
    })
});
