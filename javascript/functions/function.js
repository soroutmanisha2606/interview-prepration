//function statement
function a(){
    console.log("a fxn")
}
//function Expression
var a=function(){
    console.log("function expression")
}
//function declerations
//are same as function statement
//Anonymus function
//function (){
//
//}
//Named function Expression
var a=function xyz(){
    console.log("function expression")
}

//Difference between Parameters And Arguments
//First class function
 //  when we pass functions as an arguments then these functions can be returned

//Arrow functions



////////////pure functions
//a pure function is a function that accept an input and returns a value without modifying any data outside 
//its scope


//example of impure function
var x=19;
function add(){
    console.log(x);
    x++;
}
add();
add();
add();
//iske ander bhar ki value par change ho rha hai jo ki idher x hai
//////pure functions


function add1(x,y){
    console.log(x+y);
}
add1(2,3);
add1(2,3);
add1(2,3);




