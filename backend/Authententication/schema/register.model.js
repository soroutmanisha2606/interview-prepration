const mongoose=require('mongoose');
const registerschema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
})
const Registermodel=mongoose.model('registerscehma',registerschema);
module.exports={
    Registermodel
}