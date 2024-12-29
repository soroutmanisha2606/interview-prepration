import React from 'react'
import { Child3 } from './Child3'

export const Child2 = (props) => {
  return (
    <div>Child2 calling Child3
        <Child3 />
    </div>
  )
}
