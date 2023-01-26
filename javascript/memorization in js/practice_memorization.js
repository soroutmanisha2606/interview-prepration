function sum(x){
    console.log(x);
}
// console.time();
// sum(3,2);
// console.timeEnd();
// console.time();
// sum(3,2);
// console.timeEnd();
//har baar process new starting se chal rha hai
const memo=(fun)=>{
    let cache={};
    return function(n){
        if(n in cache){
            console.log("phele se hi hai")
            return cache[n];
        }
        else {
            console.log("new hai")
            let result=fun(n);
            cache[n]=result;
            return result;
        }

    }
}
const newfxn=memo(sum);
console.time();
newfxn(4);
console.timeEnd();
console.time();
newfxn(4);
console.timeEnd();
console.time();
newfxn(4);
console.timeEnd();
console.time();
newfxn(4);
console.timeEnd();
console.time();
newfxn(4);
console.timeEnd();