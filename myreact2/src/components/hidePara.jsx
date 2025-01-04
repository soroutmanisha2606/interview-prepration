import React from 'react'

const HidePara = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isVisible,setIsVisible] = React.useState(false)
  return (
    <div>
        {isVisible?<><p>hi this the pargraph</p></>:<></>}
        <button onClick={()=>setIsVisible(!isVisible)}>Toggle Para</button></div>
  )
}

export default HidePara