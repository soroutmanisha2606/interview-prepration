//iife mtlb immediatly invoked functions
//yeeh self executing functions hote hai ,mtln inko call karne ki jarurat nhi padtti
//aur hum iske variables of outside scope access nhi kar sakte or we can simply say that they are scope is limited within function itself
//try to avoid decalre same names in global scope
//syntax- (fn())();
//
/////
//aur these are work on anonimus fxn
(
    function(){
        var a=10;
        console.log("iffefxn",a)
    }
)();
//
(
    function dbc(){
        console.log("second fxn is called");
    }
)()
let a=10;
console.log(a); //  it will give refrence error thet a is not defined
