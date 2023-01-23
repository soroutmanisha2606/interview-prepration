import React from 'react'
import ChildB from './ChildB'

const ChildA = ({data,fun}) => {
    console.log("child a is called")
  return (
    <div>
        <ChildB data={data} fun={fun}/>
    </div>
  )
}

export default ChildA