import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export const Child3 = (props) => {
    const {name} = useContext(MyContext)
  return (
    <div >Child 3 By USing the Context Api-:{name}</div>
  )
}
