// const obj1={
//     name:"manisha",
//     printdata:function(home,state){
//         console.log(this.name+" "+home+" "+state);
//     }
// }

// // function print2(){
// //     console.log("hello i am print 2fxn")
// // }
// // const obj2={
// //     name:"sorout",
   
// // }
// // print2.call(obj2)
// // obj1.printdata.call(obj2,"harayana")
// // //apply
// // obj1.printdata.apply(obj2,["palwal","haryana"])
// // //bind
// // const bindmethod=obj1.printdata.bind(obj2)
// // console.log(bindmethod);
// //builin method
// //split  ["h","e","l"]
// //reverse() ["l","e"."h"]
// //join array to string
// function revstring(str){
//   var split_string=str.split("");
//   var rev_str=split_string.reverse();
//   var join_string=rev_str.join("");
//   return join_string;
// }
// console.log(revstring("masai"));

// //by irative
// function revstritrate(str){
//     var revstr="";
//     for(var i=str.length-1;i>=0;i--){
//         revstr+=str[i];
//     }
//     return revstr;
// }
// console.log(revstritrate("helloby"));



//comparison by deep operator 
function deepcomaparition(obj1,obj2){
    const obj1keys=Object.keys(obj1);
    //["name","age"]
    const obj2keys=Object.keys(obj2);
    if(obj1keys.length!==obj2keys.length){
        return false;
    }
    return obj1keys.every((key)=>{
        const val1=obj1[key];
        const val2=obj2[key];
        if(typeof obj1=='object'&&typeof obj2=='object'){
         return   deepcomaparition(val1,val2)
        }
   return val1===val2;
    });


}

const obj1={
    name:"manisha",
    age:21,
    data:{
        roolno:"20"
    }
}
const obj2={
    name:"manisha",age:21,
    data:{
        roolno:"20"
    }
}
console.log(deepcomaparition(obj1,obj2))
function shallowcomp(obj1,obj2){
    const obj1keys=Object.keys(obj1);
    //["name","age"]
    const obj2keys=Object.keys(obj2);
    if(obj1keys.length!==obj2keys.length){
        return false;
    }
    return obj1keys.every((key)=>
       obj1[key]===obj2[key]
    );


}
console.log(shallowcomp(obj1,obj2),"shallow comparison")
