// ..
const obj1 ={
    name :'alen',
    class:21,
}
const obj2 = {
    subject:'hindi',
    ph:930235387
}
const ans = {...obj1,...obj2};
console.log('ans----',Object.assign(obj1,obj2));
let ans2=[]
for(let key in obj2){
    ans2.push([key,obj2[key]])
    // console.log([key,obj2[key]])
}
console.log('ans2----',ans2);

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
};
console.log(".....ARRAY FLAT----",)


const flattenObj =(ob,parentKey='',result={})=>{
for (let key in ob){
    const newKey = parentKey?`${parentKey}.${key}`:key;
    if(typeof ob[key]==='object' && obj[key]!==null){
        flattenObj(ob[key],newKey,result)
    }else{
        result[newKey] = ob[key]
    }
}
return result
}
console.log('FLATTEN OBJ--',flattenObj(obj))


////// ways to campare two objects 
const newObj = {
a:1,b:4,d:{name:'allen',date:'788'}
}
const newObj2 = {
    a:1,b:4,d:{name:'allen',date:'788',rol:'actor'}
}

// console.log({}=={})
console.log('comaprision-----',JSON.stringify(newObj) === JSON.stringify(newObj2))
