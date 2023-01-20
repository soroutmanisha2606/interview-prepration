//memorization is an optimization technique that can be used to reduce time consuming calculations by saving 
//previous input in cache and return the result;
let sum=0;
function calculate(n){
    for(var i=0;i<n;i++)
{
  sum+=i;
}
return sum;
}
// console.time();
// console.log(calculate(5));
// console.timeEnd();


//ab yeh process har baar time lega q ki yeh dobara se initially run hoga to is cheez se bachne ke liye 
//hum result ko cache mai store kara detre haui taki vo result cache se utha le .
const memorization=(fun)=>{
     let cache={};
     return function(n){
        // let n=args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else {
            console.log("ager nhi hai to first time calculate hua");
            let result=fun(n);
            cache[n]=result;
            return result;
        }
     }
}
const efficient_fxn=memorization(calculate);
console.time();
console.log(efficient_fxn(5));
console.timeEnd();

console.time();
console.log(efficient_fxn(5));
console.timeEnd();


/////
function sum2(n)
{
    console.log(n+10);
}
// console.time();
// sum(5);
// console.timeEnd();

const memo=(fun)=>{
    let cache={};
    return function(n){
        if(n in cache){
    console.log("cache mai hai")
            return cache[n];
        }
        else{
            console.log("ager phele se cahe mai nhi hai")
            let result=fun(n);
            cache[n]=result;
            return result;
        }
    }
}
const effi=memo(sum2);
console.time();
console.log(effi(5));
console.timeEnd();
console.time();
console.log(effi(5));
console.timeEnd()




