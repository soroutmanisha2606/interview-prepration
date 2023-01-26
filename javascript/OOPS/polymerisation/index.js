// In polymorphism, multiple objects will have the same method but different
// implementation and depending upon the user preference the corresponding
// object will be selected and the method corresponding to that object will be executed.

class Data{
    constructor(a){
        this.name=a;
    }
    print(){
        console.log("Data of student 1");
    }
}
class Data2 extends Data{
    constructor(a){
        super(a);
        this.age="21"
    }
    print(){
        console.log("data of student 2");
    }
}
class Data3 extends Data2{
    constructor(a){
        super(a)
    }
    print(){
        console.log("data of student 3");
    }
}
let name1=new Data('mannu');
let name2=new Data2('sorout');
let name3=new Data3('rahul');
console.log(name2);
name1.print();
name2.print();
name3.print();