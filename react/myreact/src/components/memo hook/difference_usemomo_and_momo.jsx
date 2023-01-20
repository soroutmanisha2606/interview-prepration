import React from 'react'
import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [parent,setparent]=useState("hello");
    const [child,setchild]=useState("child")
    function parentfxn(){
       setparent("parent fxn is called");
    //    console.log(parent);
    }
    function childfxn(){
       setchild("child fxn is called");
    //    console.log(child)

    }

    console.log("parent component re-renders");
  return (
    <div>
        <button onClick={parentfxn}>parent</button>
        <Child child={child}/>
        <button onClick={childfxn}>child component</button>
    </div>
  )
}

export default Parent;