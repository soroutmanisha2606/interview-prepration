const express=require('express');
const { getAllEmployees, getemployeebyid, addEmployee, deleteemploye, updatetheemployes } = require('./employess.js');
const app=express();
app.use(express.json())

app.get('/employess',async(req,res)=>{
    const employees= await getAllEmployees();
    res.send({
        data:employees
    });
    console.log('response has been sent')
})
//get employee by id
app.get('/employess/:id',async(req,res)=>{
    const id=req.params.id;
    const employee=await getemployeebyid(Number(id));
  if(employee){
    return   res.send({
        data:employee
    })
  }else{
    return res.status(404).send({
        message:'employee with given id not found'
    })
  }
})
///add the employee
app.post('/employess',async (req,res)=>{
    const data=req.body;
    const employees=await addEmployee(data);
    return res.send({
        data:employees
    })
})
//delete the employe
app.delete('/employess/:id',async (req,res)=>{
    const id=req.params.id;
    const employe=await deleteemploye(Number(id));
    if(employe){
        return  res.send({
            data:employe
        })
    }
    else{
        return res.status(404).send({
            message:'employee with given id not exists'
        })
    }
   
})
app.patch('/employess/:id',async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const employee=await updatetheemployes(Number(id),body);
    
        return res.send({
            data:employee
        })
  
})
///listning on port
app.listen(3005,()=>{
    console.log(`port is listning on port 3000`);
})