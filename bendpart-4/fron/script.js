/* oops in concept*/


/* function PersonName(name,age){
   let pa = {
    name :name,
    age:age,
    talk() {
        console.log(`my name is ${this.name}`)
       }
   }
   return pa;
}
let p1 = PersonName("rahul",18)
let p2 = PersonName("rahul",18)
let p3 = PersonName("rahul",18)*/

/* // constructor - doesn't return anything & start with capital

 function Person(name,age){
    this.name = name;
    this.age= age;
    console.log(this)

};
Person.prototype.talk = function(){
    console.log(`hi my name is ${this.name}`)
};
let l1 = new Person("bhai",55);
let l2 = new Person("bhavdya",55);
let l3 = new Person("karan",55); */



/* question:-
    class Box{
    constructor(name,l,b){
        this.name= name;
        this.l= l;
        this.b= b;
    }
    area(){
        let area = this.l*this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square  extends Box{
    constructor(a){
        super("square",a,a);
    }
    area(){
        let area = this.l*this.b;
        console.log(`Square area is ${area}`);
    }
}
let sq1 = new Square(4);

// output will be 16 */

/* class Person1{
constructor(name,age){
    this.name = name;
    this.age = age;
}
talk(){
    console.log(`my name is ${this.name} and my age is ${this.age}`)
}
}

class Student extends Person1{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}
class Teacher extends Person1{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

let s = new Student("rahul",18,83.40)
let t = new Teacher("Atul",24,"sigma batch")
// let a1 = new Person1("raju", 50);
// let a2 = new Person1("ram", 50);*/
