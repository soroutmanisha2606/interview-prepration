import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { decrementCount, incrementCount, resetCount } from './Action';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.count)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incrementCount(1))}>Increment</button>
    <button onClick={()=>dispatch(decrementCount(1))}>Decrement</button>
    <button onClick={()=>dispatch(resetCount())}>Reset</button>
    </div>
  )
}

export default Counter