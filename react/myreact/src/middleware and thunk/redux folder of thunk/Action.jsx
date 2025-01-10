export const increment=(data)=>({
    type:"increment",
    payload:data
})
export const decrement=(data)=>({
    type:"decrement",
    payload:data
})
export const loading=(data)=>({
    type:"loading",
    payload:data    
})
export const error=(data)=>({
    type:"loading",
    payload:data    
})
export const getdata=(data)=>({
    type:"getdata",
    payload:data
    
});
export function getdata2(){
    return async function(dispatch){
    try {
        dispatch(loading(true));
        var res1=await fetch('https://jsonplaceholder.typicode.com/posts');
        var res2=await res1.json();
        console.log(res2)
        dispatch(getdata(res2));
        dispatch(loading(false));
    } catch (error) {
        dispatch(error(true));
    }
}
}