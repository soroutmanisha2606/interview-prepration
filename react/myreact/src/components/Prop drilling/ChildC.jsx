import React from 'react'

const ChildC = ({data,fun}) => {
    console.log("child C is called")


  return (
    <div>
        <h1>{data}</h1>
        <button onClick={fun}>problem</button>
    </div>
  )
}

export default ChildC