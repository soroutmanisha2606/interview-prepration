const express=require('express');
const { Heromodel } = require('../model/hero.model');
const herorouter=express.Router();
herorouter.get("/hero",async(req,res)=>{
    const data=await Heromodel.find();
    res.send(data);
})
// app.get("/hero",async(req,res)=>{
//     const query=req.query;
//     const data=await Heromodel.find(query);
//     res.send(data);
// })
///if we are having more queries
// herorouter.get("/hero",async(req,res)=>{
//     const name=req.query.name;
//     const age=req.query.age
//     const data=await Heromodel.find({name:name,age:age});
//     res.send(data);

// })
herorouter.post("/hero",async(req,res)=>{
    const data=req.body;
    try {
        const herodata=new Heromodel(data);
        await  herodata.save();
          console.log(herodata);
          res.send("herodata");
    } catch (error) {
        res.send({message:"something went wrong"});
    }
   
})
herorouter.patch("/hero/:id",async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    try {
        const data=await Heromodel.findByIdAndUpdate({_id:id},body);
        console.log(data);
        res.send("patched data");
    } catch (error) {
        res.send("something went wrong");
    }
})
herorouter.delete("/hero/:id",async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    try {
        const data=await Heromodel.findByIdAndDelete({_id:id},body);
        res.send("data is deleted");
        
    } catch (error) {
        res.status(400).send({message:"error in deleteed"});
    }
})
module.exports={
    herorouter
}