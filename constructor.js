// function persons(name,age){
//     this.name=name;
//     this.age=age;
//     this.dob="20-11-1998";
//     this.DOB=(a)=>console.log(this.dob+" "+a);
// }

// let std1 = new persons("Ganesh",25);
// std1.DOB(10);



class employee{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    names(num){
        console.log("Employee name is " + num);
    }
}

let emp1 = new employee("Ganesh",25);   
//console.log(emp1.name); // Ganesh
emp1.names("ganesh");