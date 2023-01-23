import React from 'react'

const Lazycomp = () => {

  return (
    <div>
    {setTimeout(() => {
      
    }, 4000)}
    <h2>my component</h2>
    </div>
  )
}

export default Lazycomp