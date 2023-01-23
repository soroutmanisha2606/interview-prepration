export const Incremetcount=(data)=>({
    type:"INCRESE",
    payload:data
})
export const Decrementcount=(data)=>({
    type:"decrement",
    payload:data
})
//
export const ResetCount=()=>({
    type:"reset"
})
export const getalldata=(data)=>({
    type:"alldata",
    payload:data
})