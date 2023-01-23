import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './Child'

const Mycom = () => {
    const {count,fun}=useContext(Mycontext);
  return (
    <div><button onClick={fun}>
        click to check the context api ---{count}</button></div>
  )
}

export default Mycom; 