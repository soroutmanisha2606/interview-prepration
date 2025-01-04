
const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
    resolve('promise rejected---')
    },2000)
}
fetchData().then((data)=>console.log('data-----',data));



const fetcDataWithError = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('ERROR OCCURED ')
        },1000)
        
    })
}
fetcDataWithError().catch(err=>console.log('ERROR----',err));




//chainedOperations 
const chainedOperations = ()=>{
    return new Promise((resolve)=>{
        resolve(5)
    })
}

chainedOperations().then((ans)=>ans).then((data)=>data+10).then(data2=>console.log(data2*3));



/// fetchMultiple 
const fetchMultiple =()=>{
    const fetch1 = new Promise((resolve)=>{
        resolve('Fecth 1 resolve')
    });
    const fetch2 = new Promise((resolve)=>{
   resolve('Fetch 2 reslve---')
    });
    const fetch3 = new Promise((_, reject)=>{
        reject('Fetch 3 rejected---')
         });
    return Promise.allSettled([fetch1,fetch2,fetch3])
}
fetchMultiple().then((resuts)=>console.log(resuts,'results')).catch(err=>console.log('ERROR---',err))


/// async funtions 
async function namqe() {
    const data = Promise.reject('rejected');
    try {
        const reslt = await data();
        console.log(reslt)
    } catch (error) {
        console.log(error)
    }
}
namqe()