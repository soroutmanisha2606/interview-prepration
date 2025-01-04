function showThis(){
    console.log(this)
};
const newF = () =>{
    console.log(this)
}
// newF()
// showThis();

const person = {
    name:'annu',
    sayName:()=>{
        return this.name;
    }
}
// console.log(person.sayName())
// const person2 = {
//     name: "Charlie",
//     sayName: function () {
//         function printName() {
//             console.log('perosn---',this.name);
//         }
//         printName();
//     },
// };
// person2.sayName();

const person3 = {
    name: "Diana",
};
function sayName() {
    return this.name;
}
const boundFunction = sayName.bind(person3);
console.log(boundFunction());
