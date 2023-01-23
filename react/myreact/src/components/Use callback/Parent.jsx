import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Child from './Child'
///in this function when we are having child component inside the parent component then when parent components renders then 
//child component automatically renders when can decreases the performance of our application and we don't whant that so there are two options one is use of memo
//but when we pass the props to the child componets then it again start rendering so we use useCallback to stop this behaviour
//---usage
//When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. Let’s first look at the syntax for how to do this, and then see in which cases it’s useful.

//To cache a function between re-renders of your component, wrap its definition into the useCallback Hook:
const Parent2 = () => {
  const [count,setcount]=useState(0);
  const [count2,setcount2]=useState(10)
  const fun=useCallback(()=>{
   setcount2(count2+10);
  },[count2])
  return (
    <>
    <Child fun={fun} count2={count2}/>
    <div>count -{count}</div>
    <button onClick={()=>setcount(count+1)}>INcrease</button>
    </>
  )
}

export default Parent2