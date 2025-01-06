import React from 'react'
import { ThemeContext1 } from './Mycontext/themeProvider'

const ThemeToglle = () => {
const {theme , handleTheme} = React.useContext(ThemeContext1)
  return (
    <div  style={{backgroundColor:theme ==='dark' ? 'grey':'black',width:'100%',height:'100vh'}}>
       <button onClick={handleTheme}>{`Toggle to ${theme} Modde`}</button>
    </div>
  )
}

export default ThemeToglle