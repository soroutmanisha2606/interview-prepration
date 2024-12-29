// promises are the js objects that tells us the completion or rejection of asynchronusm code 

// using Promise constructor 
const mypromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        const success = false ;
        if(success){
            resolve('promise is resoved ----')
        }else {
            reject(' Operation Failed ')
        }
    },1000)
})

mypromise.then((res)=>{
    console.log('FulFilled--',res)
}).catch((err)=>{
    console.log('rejected',err)
}).finally(()=>{
    console.log('all clean Up task')
})


/////////
const fetchurl =(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
if(url == 'my'){
    resolve('My promise is resolved ----')
}else {
    reject('my promsie is rejected----')
}
        },1000)
    })
}
console.log('before my promise -----')

fetchurl('y').then((result)=>{console.log('1st then',result)
return result.data}).then((data)=>{console.log('processing data',data)}).catch((err)=>{
    console.log('ERROR _',err)
})


// PROMISE ALLL
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
Promise.all([p1,p2]).then((values)=>{
    console.log('Values---',values)
})



/////////
fetch('https://api.example').then((res)=>{
    if(!res.ok){
        throw new Error('network issue ')
    }
    return res.json()
}).then(data=>console.log(data)).catch(err=>console.log(err, 'ERROR IN FETCHING'))