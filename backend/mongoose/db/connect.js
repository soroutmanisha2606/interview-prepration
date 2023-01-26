//connect to database
//mongoose id used for connectiong to the datatbase

const mongoose=require('mongoose');
async function connect(){

    //if db is secure
    //protocol://username:password@hostname:port/dbname
    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://localhost:27017/employess',(err)=>{
            if(err){
                console.log("error in connecting to the database");
               return reject(err)
            }
           resolve();
    
        })
    })
    
    ///////////////////////////////////////////name of database

}
module.exports=connect