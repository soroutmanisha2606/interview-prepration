import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrementcount, Incremetcount, ResetCount } from '../Redux/Action.jsx';

const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector(state=>state.increcount);
    console.log(count);
  return (
    <div>
        <button onClick={()=>dispatch(Incremetcount(1))}>Incremnet</button>
        {count}
      <button onClick={()=>dispatch(Decrementcount(1))}> Decrement</button>
      <button onClick={()=>dispatch(ResetCount())}>Reset</button>

    </div>
  )
}

export default Counter