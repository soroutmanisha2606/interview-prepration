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