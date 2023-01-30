const mongoose=require('mongoose');
const loginschema=mongoose.Schema({
    email:String,
    password:Number
})
const Loginmodel=mongoose.model('loginmodel',loginschema);
module.exports={
    Loginmodel
}
//not needed //
///////////
