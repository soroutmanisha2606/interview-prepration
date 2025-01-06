import React from 'react'

const ReactForms = () => {
    const [formData , setFormData] = React.useState({name:'',email:''});
    const [errorMessage, setErrorMessage] = React.useState({name:false,email:false})
  const handleNameChange = (e) =>{
setFormData({...formData,[e.target.name]:e.target.value});
setErrorMessage({name:false,email:false})
  }
  const handleSubmit = () =>{
    const errors = {
        name:!formData.name.length,
        email:!(formData.email).includes('@')
    }
setErrorMessage(errors)
    if(!errors.name && !errors.email){
        setErrorMessage({name:false,email:false})
        alert('successfully submiteed');
        setFormData({name:'',email:''})
    }
  }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'400px',margin:'auto'}}>
    <input type="text"  name ='name' onChange={handleNameChange} value={formData.name} placeholder='Enter Your name here'/>
    {errorMessage.name?<p style={{color:'red'}}>Name should not be empty</p>:<></>}
    <input type="email" name='email' onChange={handleNameChange} placeholder='Enter your Email Here' value={formData.email}/>
    {errorMessage.email?<p style={{color:'red'}}>Please Enter a valid Email</p>:<></>}
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ReactForms