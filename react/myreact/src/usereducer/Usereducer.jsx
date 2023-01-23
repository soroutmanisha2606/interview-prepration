//use reducer is similar to the use state means both hooks are used for state management 
//usereducer is used to menage  the complex states
//syntax-- const [initalvalue,dispatch]=useReducer(dispactch,initailvalue)

import React from 'react'
import { useReducer } from 'react'
    const initaialstate=0;
    function reducer(state,action){
        switch(action){
            case "increase":{
                return state+1;
            }
            case "decrease":{
                return state-1;
            }
            default :{
                return state
            }
        }
    }
const Usereducer = () => {
const [count,dispatch] =   useReducer(reducer,initaialstate);
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>dispatch("increase")}>increase</button>
        <button onClick={()=>dispatch("decrease")}>decrease</button>

    </div>
  )
}

export default Usereducer