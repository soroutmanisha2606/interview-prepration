import React from 'react'

const CharacterCount = () => {
    const [charCount, setCharCount] = React.useState(0);
    const countCharCount =(e)=>{
        setCharCount(e.target.value.length)
    }
  return (
    <div><p>Char Count-:{charCount}</p>
        <input placeholder='Enter text' onChange={countCharCount} /></div>
  )
}

export default CharacterCount