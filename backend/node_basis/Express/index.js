const express=require('express');
const {router:employeRouter}=require('./router/employee.router.js')
const app=express();
app.use(express.json())
a
app.use((req,res,next)=>{
    next();
})
app.use("/",employeRouter);
///listning on port
app.listen(3005,()=>{
    console.log(`port is listning on port 3000`);
})