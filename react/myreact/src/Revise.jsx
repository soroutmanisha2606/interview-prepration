import React from 'react';
import { createContext } from 'react';
import { Child1 } from './Sde1/Child1';
import { MyContext } from './Sde1/MyContext';

export const Revise = (props) => {
   const [name , useState] = React.useState('context api calling and getting')
  return (
    <>
    <h1>Revise</h1>
    <MyContext.Provider value={{name}}>
   <Child1 name={name}/>
   </MyContext.Provider>
    </>
  )
}
