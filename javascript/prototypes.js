// are the obj that contains the propertiesand methods that can be shared among all instances of an objects

let person = {
    greet : function(){
        console.log('hello----');
    }
}
//
let student = Object.create(person);
student.greet();
// console.log(student.__proto__ == person)
function Person(name){
    this.name = name
};
Person.prototype.age='12'
const ans = new Person('mannu') ;
console.log('PEROSN ----',ans.age)