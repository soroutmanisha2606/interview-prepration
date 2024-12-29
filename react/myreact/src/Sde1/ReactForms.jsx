import React from 'react'

export const ReactForms = () => {
    const [myname , setName] = React.useState('');
    
    const handleChange =(e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('myname',myname)
        
            }

  return (
    <form onSubmit={handleSubmit}>
        <h1>form 8</h1>
        <input type='text' value ={myname} onChange={handleChange}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
