import React from 'react'

const Timer = () => {
    const [time , setTime] = React.useState(0);
    const [isRunning , setIsRunning] = React.useState(false);
    React.useEffect(()=>{
        let timer;
        if(isRunning){
            console.log('inside the useEFFECT---')
           timer = setInterval(()=>{
        setTime((prev)=>prev+1)
         },500)
        }
        return ()=> clearInterval(timer)
    },[isRunning]);


const handleStart =() =>{
setIsRunning(true)
}
const handlePause = () =>{
setIsRunning(false)
}
const handleStop = () =>{
    setIsRunning(false)
setTime(0)
}
  return (
    <div>
        <h1>Timer - {time}</h1>
        <button onClick={handleStart}>Start</button>
    <button onClick={handlePause}>Pause</button>
    <button onClick={handleStop}>Stop</button></div>
  )
}

export default Timer