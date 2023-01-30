const express=require('express');
const connection = require('./db');
const { herorouter } = require('./routes/heroRoute');


const app=express();
app.use(express.json());
app.use("/",herorouter)
app.get('/',(req,res)=>{
    res.send(
        "hello"
    )
})
app.get("/data",(req,res)=>{
    res.send("welocome");
})

app.listen(3007,async()=>{
    try {
       await connection
        console.log("app is listning on port 3007")
    } catch (error) {
        console.log("error in connection to the db");
    }
   
})

//mongodb+srv://manisha123:<password>@cluster0.tfr1v5n.mongodb.net/?retryWrites=true&w=majority