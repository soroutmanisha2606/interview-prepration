import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'

const Parent3 = () => {
    const data="hey this is the data which needs to pass to the child C"
    function fun(){
        console.warn("button is clicked");
    }
  return (
    <div>
        <ChildA data={data} fun={fun}/>
        <button onClick={()=>console.warn("parent buton")}>parent button</button>
       
    </div>
  )
}

export default Parent3