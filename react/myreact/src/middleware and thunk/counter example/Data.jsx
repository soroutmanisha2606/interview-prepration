import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata, loading ,getdata2} from '../redux folder of thunk/Action'

const Data = () => {
    useEffect(()=>{
       dispatch( getdata2());
    },[])
    const data=useSelector(state=>state.data);
    const load=useSelector(state=>state.loading);
    const err=useSelector(state=>state.error);
    const dispatch=useDispatch();

  
  
    console.log(data,"dataaa")
    if(load){
        return <h1>....loading</h1>
    }
    if(err){
        return <h1>...something went wrong</h1>
    }
  return (
    <div>
        {
            data.map((e)=>{
                return <div key={e.title} style={{display:"flex",justifyContent:"space-between"}}>
                    <div>{e.id}</div>
                    <div>{e.title}</div>
                </div>
            })
        }
    </div>
  )
}

export default Data