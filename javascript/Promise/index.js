//koi cheez jo resolev ya reject hogi 
//  or we can say that promise of code execution either it gfails or reject 
//it handles asyn operation in js
//parally execution
//3 state 
// 1 . resolve    2.reject   3.pending

let promise=new Promise(function(resolve,reject){
    console.log("pending state");
    setTimeout(() => {
        console.log("my promise is resolved");
        resolve();
    }, 2000);
    })
    console.log(promise);
    promise.then(()=>{
      setTimeout(() => {
        console.log("my 1");
      }, 4000);
    }).then(()=>{
        setTimeout(() => {
            console.log("my 2 ");
        }, 3000);
    }).catch((err)=>{
        console.log(err);
    
    })