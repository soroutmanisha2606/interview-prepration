import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Counter from '../Counter';

const Lifecycle = () => {
    const [state,setstate]=useState(true);

    useEffect(()=>{
      console.log("component is loaded")
      return ()=>{
      console.log("component unmounted");   
      alert("component unmounted");
    }
    })

    ////useeffect mai jo return vaala hota hai vo umountphase mai phase mai hota hai

  return (
    <div>

<button onClick={()=>setstate(false)}>unmount</button>
{
  state?<Counter/>:<h2>Conunter is unmounted</h2>
}
    </div>
  )
}

export default Lifecycle;