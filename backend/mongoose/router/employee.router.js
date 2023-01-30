const express=require('express');
const { getAllEmployees, getemployeebyid, addEmployee, deleteemploye, updatetheemployes } = require('../employess');
const router=express.Router();
router.get('/employess',async(req,res)=>{
    const employees= await getAllEmployees();
    res.send({
        data:employees
    });
    console.log('response has been sent')
})
//get employee by id
router.get('/employess/:id',async(req,res)=>{
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
router.post('/employess',async (req,res)=>{
    const data=req.body;
    const employees=await addEmployee(data);
    return res.send({
        data:employees
    })
})
//delete the employe
router.delete('/employess/:id',async (req,res)=>{
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
router.patch('/employess/:id',async(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const employee=await updatetheemployes(Number(id),body);
    
        return res.send({
            data:employee
        })
  
})
module.exports={
    router
}