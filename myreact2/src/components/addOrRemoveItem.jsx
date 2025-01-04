import React from 'react'

const AddOrRemoveItem = () => {
    const [data,setData] = React.useState([]);
    const [formData,setFormData] = React.useState({name1:'',email:''});
    const addData = () =>{
        console.log('FormDtat-',formData)
        
        setData([...data,formData])
    
         setFormData({name1:'',email:''})
    };
    const removeItem =(index)=>{
        console.log(index)
        setData(data.filter((_,i)=>i!==index))
    };
    const onChangeData = (e) =>{
        console.log(e.target)
        setFormData({...formData,[e.target.name]:e.target.value})
    };
  return (
    <div>
        <input type="email" placeholder='Enter email here' name ='email'value={formData.email} onChange={onChangeData}/>
        <input type='text' placeholder='Enter name here' name='name1' value={formData.name1} onChange={onChangeData}/>
        {data.map((d,i)=>{
            return <div style={{border:'1px solid red',width:'200px'}}>
            <div style={{width:'100px'}}>
            <p>{d.name1}</p>
            <p>{d.email}</p>           
            </div>
            <button onClick={()=>removeItem(i)}>DELETE</button>
            </div>
        })}
        <button onClick={addData}>ADD Data</button>
    </div>
  )
}

export default AddOrRemoveItem