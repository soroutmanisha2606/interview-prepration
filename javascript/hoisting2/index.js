

let D=12;
console.log(D);
console.log(E);
const E=11;
//reference error
console.log(x);
var x=30;



a();
b();
function a(){
    var x=10;
   // console.log(x,"----a()");

}
function b(){
    var x=20;
  //  console.log(x,"-----b()");
}

////this is the hoisting of let and const in temperal dead zone 
// console.log(alet);
// console.log(bvar)
// let alet=10;
// var bvar=100;
//console.log(c);

let c=10;

// console.log(c);