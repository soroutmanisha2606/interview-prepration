
const obj1={
    name:"mannu",
    age:21,
    data:{
        name2:"helo"
    }
    
}
const obj2={
    name:"manisha",
    age:22,
    data:{
        name2:"helo"
    }
    
}
console.log(Object.keys(obj1),"keys of obj1")
function isequal(ob1,ob2){
    const ob1keys=Object.keys(ob1);
    const ob2keys=Object.keys(ob2)
if(ob1keys.length!==ob2keys.length){
    return false;
}

    return ob1keys.every((i)=>ob1[i]===ob2[i])
    
}

console.log(isequal(obj1,obj2))
//by using json.stringify methoid
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
//by using lowdash library
//console.log(_.isequal(obj1,obj2))

//deep comparison
function deepcomaprison(ob1,ob2){
    const ob1keys=Object.keys(ob1);
    const ob2keys=Object.keys(ob2)
if(ob1keys.length!==ob2keys.length){
    return false;
}

    return ob1keys.every((key)=>{
        const val1=ob1[key];
        const val2=ob2[key];
        if(typeof ob1==='object'&& typeof ob2==='object'){
            return deepcomaprison(val1,val2);
        }
        return val1===val2;
    }
    )
    
}
console.log(deepcomaprison(obj1,obj2))



/* 
there are four types of comparisons of objects in js
1.refrencial equality=>(object.is(25,25)     //output true but in case of objects it will only check the refrence)
//like obj1={
    name:"mannnu"
}
obj2={
    name:"mannnu"
}
console.log(Object.is(obj1,obj2)) ///false 
console.log(Object.is(obj1,obj1)) ///true 
   =>we can also comapre by using strict equality comaparison operator   
2.mannually 
3.shallow comaprison
4.deep comparison


*/