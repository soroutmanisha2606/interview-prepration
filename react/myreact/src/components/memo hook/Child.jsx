import React from 'react'
import {memo} from 'react'
const Child = ({child}) => {
    console.log("child components rerenders")
  return (
    <div>
       
    </div>
  )
}

export default memo(Child);