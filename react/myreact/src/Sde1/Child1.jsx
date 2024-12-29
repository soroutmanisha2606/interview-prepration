import React from 'react'
import { Child2 } from './Child2'

export const Child1 = (props) => {
  return (
    <div>Child1 calling child2
        <Child2 name={props.name}/>1</div>
  )
}
