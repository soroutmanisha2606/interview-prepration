//an abstraction is a way of hiding the implementaion and showing only the funcationalities to the users
class User
{
    constructor(A,b){
        this.name=A;
        this.age=b;
         let salary=100;
    }
    print(){
        console.log(this.name," ",this.age);
    }
}
let user1=new User('mannu',21);
user1.salary=1000;
console.log(user1.salary);