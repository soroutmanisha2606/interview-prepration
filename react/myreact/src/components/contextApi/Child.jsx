import { useState } from "react";
import { createContext } from "react";

export const Mycontext=createContext();
export const MycontextProvider=({children})=>{
    const [count,setcount]=useState(10);
    const fun=()=>{
        console.log("my button is clicked");
        setcount(count+10);
    }
    return <>
    <Mycontext.Provider value={{count,fun}}>
 {children}
    </Mycontext.Provider>
    </>
}




//when to use contextApi
//If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
//