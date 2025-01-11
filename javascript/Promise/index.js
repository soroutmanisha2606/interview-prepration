//koi cheez jo resolev ya reject hogi 
//  or we can say that promise of code execution either it fails or reject 
//it handles asyn operation in js
//parally execution
//3 state 
// 1 . resolve    2.reject   3.pending
//promise is immutable and resolve just once
// a container for future value
//a promise is an object that represents the completion of async operation

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




    /////////////////////////////////////////////////////callback hell
    const cart=["a","b","c"]
    a(cart,function(id){
        b(id,function(payment){
            c(payment,function(successful){
                d(successful)
            })
        })
    })


    ///////////////////promise
    a(cart).then((id)=>b(id))
    .then((payment)=>c(payment))
    .then((successful)=>d(successful))