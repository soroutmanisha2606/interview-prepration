import React from "react"
export const ThemeContext1 = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme , setTheme] = React.useState('light');
    const handleTheme = () =>{
        setTheme(theme==='light'?'dark':'light')
    };
  return (
    <ThemeContext1.Provider value={{theme,handleTheme}}>{children}</ThemeContext1.Provider>
  )
}

export default ThemeProvider