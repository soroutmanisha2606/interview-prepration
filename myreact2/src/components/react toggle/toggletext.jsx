import React from 'react'

const ToggleText = () => {
    const [isToggle , setIsToggle] = React.useState(false);
  return (<>
        <h1>{isToggle?'ON':'OFF'}</h1>
        <button onClick={()=>setIsToggle(!isToggle)}>Toggle</button></>
  )
}

export default ToggleText;