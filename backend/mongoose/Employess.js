
const fs=require('fs/promises');
async function reademployedata(){
const result =await fs.readFile('./employ.json',{
    encoding:'utf-8'
    ///encoding used for getting data in string format
   });
const employess=JSON.parse(result);
return employess;
}
async function writeTodata(employee){
    const data=JSON.stringify(employee);
    await fs.writeFile('./employ.json',data);
}
////function to get the data
async function getAllEmployees(){
    const employes=await reademployedata();
    return employes;
}
////function to get  the data by single id
async function getemployeebyid(id){
const employees=await reademployedata();
return employees.find(e=>e.id==id);
}
///////add employeee
async function addEmployee(data){
    const employees=await reademployedata();
    let max=0;
    employees.forEach(e => {
        if(max<e.id){
            max=e.id
        }    
    });
    let newid=max+1;
    const newemployee={
        ...data,id:newid
    }
    employees.push(newemployee);
    const updateddata=await writeTodata(employees);
    return newemployee;
}
///delete the data
async function deleteemploye(id){
    const employees=await reademployedata();
     let index=-1;
     employees.forEach((e,i)=>{
        if(id===e.id)
        index=i;
     })
     let deletedEmployeeDetails;
     if(index!=-1){
       let result=employees.splice(index,1);
       await writeTodata(employees)
       if (result.length) {
        deletedEmployeeDetails = result[0];
    } 
     }
   return deletedEmployeeDetails;
}
///update the data
async function updatetheemployes(id,data){
    const employees=await reademployedata();
    let index=-1;
    employees.forEach((e,i)=>{
        if(id==e.id){
            index=i
        }
    })
    if(index!=-1){
        employees[index]={
            ...employees[index],
            ...data
        }
    }
    await writeTodata(employees)
}

module.exports={
    getAllEmployees,
    getemployeebyid,
   addEmployee,
   deleteemploye,
   updatetheemployes
}