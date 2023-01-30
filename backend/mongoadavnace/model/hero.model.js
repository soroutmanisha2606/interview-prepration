const mongoose=require('mongoose');
const heroSechmma=mongoose.Schema({
    name:String,
    age:Number, 
    phno:Number
})
//                              //colection name
const Heromodel=mongoose.model("heros",heroSechmma);
module.exports={
    Heromodel
}