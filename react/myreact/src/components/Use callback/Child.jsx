import React, { memo } from 'react'

const Child = ({fun,count2}) => {
  console.log("child component caleld")
  return (
    <div>
      <button onClick={(fun)}>child increase ---{count2}</button>
    </div>
  )
}

export default memo(Child);