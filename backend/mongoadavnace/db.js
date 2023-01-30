const mongoose=require('mongoose');  ////////////////////////dbname
const connection=mongoose.connect("mongodb://127.0.0.1:27017/newdata");
require('dotenv').config()
//blueprint

module.exports={
    connection
};