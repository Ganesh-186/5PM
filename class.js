// export class person{
//     address = "Pune";
//     name(ns)
// {
//     console.log("My name is " + this.address + " " + ns);
// }
// age(age){
//     console.log("My age is " + age);    
// }
// dob="20-11-1998";
// DOB=()=>console.log(this.dob);
// }

// let p1=new person();
// p1.name("Ganesh");
// //p1.age(25);
// //console.log(p1.dob);   
// p1.DOB(); 

// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
        
//     }
//     teach(){console.log("I am teaching JavaScript");}
//     trainer = function() {
//         console.log("I am a trainer")
//         console.log(this.name)}
// }
// let p1 = new person();
// p1.trainer();
// p1.teach();
// console.log(p1.name);
// console.log(p1.age);




class person_details{
    name = 'Ganesh';
    age = 28;
    address = 'Street';
    greet(){
         console.log('Hi everyone',this.name);
    }
    work = ()=>{
        console.log('Iam doing work',this.age);
    }

}

// let p1 = new person_details();
// //keyword objname = new classname()

// p1.greet();
// p1.work();
// console.log(p1.name);


class Emp{
    constructor(name,age,id){
        this.emp_name = name
        this.emp_age = age
        this.emp_id = id
    }
    
}

// let emp1 = new Emp('Ganesh',28,854540);
// let emp2 = new Emp('Hari',30,82454);


// console.log(emp1.emp_age);

// console.log(emp2.emp_age);

// let emp3 = new Emp('Shanthi',29,79954)
// console.log(emp3.emp_id);


console.log('Hi');
setTimeout(()=>{console.log('Hello')},5000);
console.log('everyone');