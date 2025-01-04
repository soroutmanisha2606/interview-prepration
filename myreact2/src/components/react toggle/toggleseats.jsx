import React, { useState } from 'react'

const Toggleseats = () => {
    const [data , setdata] = useState([]);

    const setTogle =(index)=>{
const clickedBox =  data.filter((seat)=> seat!==index);
if(data.includes(index)){
    console.log('data-',clickedBox)
    setdata(clickedBox);
}else{
    setdata([...data,index])
}

    }
  return (
    <>
    <h1>seletedSeats : {data.length}</h1>
    <div>{[...Array(10)].map((_,index)=>{
return <>   <button onClick={()=>setTogle(index)} style={{backgroundColor:data.includes(index)?'green':'yellow'}} key ={index}>{index+1}</button>
     </>  
     
    })}</div>
    </>
  )
}

export default Toggleseats;