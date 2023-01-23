//when we need to directly manipulate the dom
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Useref = () => {
    const refelem=useRef();
    
    const [text,settext]=useState("");
    console.log(refelem);
    function fxn(){
        refelem.current.style.color="blue";
        refelem.current.value="mannu sorout"
    }
  return (
    <div>
        <input onChange={(e)=>settext(e.target.value)} type={text} ref={refelem} value={text}/>
        <button onClick={fxn}>handle useref</button>
      
    </div>
  )
}

export default Useref