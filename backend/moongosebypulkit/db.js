const mongoose=require('mongoose');
const connect=async()=>{
    try {
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/school");
        // await StudentModel.insertMany({name:"rahul",age:22,city:"pune",is_married:true})
        const data=await StudentModel.findOne({name:"rahul"});
        console.log(data);
        const data2=await StudentModel.updateOne({_id:"63d35e55bf9e026e698aacee"},{$set:{name:"rahulkundu"}});
        // console.log(data2);
        const data3=await StudentModel.updateMany({age:21},{$set:{age:99}});
        // console.log(data3);
        const data4=await StudentModel.deleteMany({name:"rahul"});
        const data5=await StudentModel.find().sort({
            age:1
        })  
        // console.log(data5);
        const data6=await StudentModel.countDocuments();
        // console.log(data6);
        const data7=await StudentModel.find({
            name:{
                $lte:'t'
            }
        })
        // console.log(data7);
        const data8=await StudentModel.find({name:"234"});
        console.log(data8);
        //typecaste
    //     let student0ne=new StudentModel({
    //         name:"tannu",
    //         age:30,
    //         city:"palwal",
    //         is_married:false
    //     })
    // await student0ne.save();
        console.log("connected");
        // connection.disconnect();
        // console.log("disconnected");
    } catch (error) {
        console.log(error);
        console.log("error in connection");
        
    }
 
}
//blueprint of data
const studentschema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    is_married:Boolean
})
//////////////////////////collection name
const StudentModel=mongoose.model("student",studentschema)
connect();