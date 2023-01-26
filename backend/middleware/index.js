const express=require ('express');
const app=express();

let count=0;
function countfxn(){
    console.log(count++);
}
/////
////
app.use((req,res,next)=>{
   // console.log(res.method,req.path);    
     next();
     countfxn();
})
//second middleware
app.use((req,res,next)=>{
    console.log(req.method,req.path);
    console.log("middleware is called");
    next();
})
///
app.get("/data",(req,res)=>{
    console.log("get data is called");
    res.send({data:"manisha"});
})



app.listen(3000,()=>{
    console.log("app is listning at port 3000");
})
