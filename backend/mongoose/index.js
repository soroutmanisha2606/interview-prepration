const express=require('express');
const { connect } = require('mongoose');
const {router:employeRouter}=require('./router/employee.router.js')
const app=express();
app.use(express.json())

app.use((req,res,next)=>{
    next();
})
app.use("/",employeRouter);
///listning on port
connect().then(()=>{
    app.listen(3005,()=>{
        console.log(`port is listning on port 3000`);
    })
})
.catch(()=>{

})
