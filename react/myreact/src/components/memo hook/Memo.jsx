import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Memo = () => {
    const [btn1,setbt1]=useState(0);
    const [btn2,setbtn2]=useState(0);
function inc1(){
    setbt1(btn1+1);
}
function inc2(){
    setbtn2(btn2+1);
}

 const isEven=useMemo(()=>{
    let i=0;
    while(i<100000000)
i++
    return btn1%2===0;
},[btn1])
//     function isEven(){
//     let i=0;
//         while(i<10000000)
//  i++
//         return btn1%2===0?true:false
//     }
  return (
    <div>
        <button id="btn" onClick={inc1}>btn1-{btn1}</button>
        {isEven?"even":"odd"}
        <button id="btn" onClick={inc2}>btn2-{btn2}</button>
    </div>
  )
}

export default Memo;



//lifecycles
//redux and flux
//event bubbling and capturing & hof

//