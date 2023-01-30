const express =require('express');
const connection  = require('./connect');
const { Registermodel } = require('./schema/register.model');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app=express();
app.use(express.json());
app.post('/register',(req,res)=>{  
    const {name,password,age,email}=req.body;
    let newPassword = password.toString()
    bcrypt.hash(newPassword, 5, async(err, securepass)=> {
        if(err){
            console.log("error occoured",err)
        }else{
            const user=new Registermodel({name,password:securepass,age,email});
            await user.save();    
            res.send("registerd");
        }
    });
  
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    // console.log(password)
    /////
   
    const user=await Registermodel.find({email});     
        if(user.length>0){  
            let newPassword = password.toString()
            bcrypt.compare(newPassword, user[0].password, (err, result)=> {   
                 if(err) {
                    res.send("wrong crendentials");   
                    console.log(err);       
                 }         
         else   {
        let token = jwt.sign({ foo: 'backend' }, 'manisha');       
        res.send({message:"succefuully login","token":token});        
             }  
            }
    )}
})
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.get('/data',(req,res)=>{
    const token=req.headers.authorization
    jwt.verify(token, 'manisha', function(err, decoded) {
      if(err){
        res.send("invalid token") 
        console.log(err);
      }else {
        res.send("dataa...")
      
      }
      });
    
})

app.listen(8000,async()=>{
    try {
        await connection;
        console.log("app is listning on port 8004 and sucessfully connected with db");
        
    }catch (error) {
        console.log("eroor in connection to dp");
    }
 
});