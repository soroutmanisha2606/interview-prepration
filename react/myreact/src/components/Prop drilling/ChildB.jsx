import React from 'react'
import ChildC from './ChildC'

const ChildB = ({data,fun}) => {
    console.log("child B is called")

  return (
    <div>
        <ChildC data={data} fun={fun}/>
    </div>
  )
}

export default ChildB