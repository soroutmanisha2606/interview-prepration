import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getalldata } from '../Redux/Action';

const Mydata = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.myarray);
    useEffect(()=>{
        getdata()
    },[])
   async function getdata(){
     var res1=await fetch(`https://fakestoreapi.com/products`);
     console.log(res1);
     var rse2=await res1.json();
     dispatch(getalldata(rse2))
     console.log(rse2)
    }
    console.log(data);
  return (
    <div>
Mydata
    </div>
  )
}

export default Mydata