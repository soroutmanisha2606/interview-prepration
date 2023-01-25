import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux folder of thunk/Action';

const Counter2 = () => {
    const count=useSelector(state=>state.count);
    console.log(count);
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(increment(1))}>Increment --{count}</button>
        <button onClick={()=>dispatch(decrement(1))}>decrement --{count}</button>
    </div>
  )
}

export default Counter2
//dispatch-maidleware(state)(next)(action)--reducer()
//