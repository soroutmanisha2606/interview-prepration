export const incrementCount = (data)=>({
type:'Increment',
payload:data
}
);
export const decrementCount = (data) =>({
    type:'decrement',
    payload:data
});
export const resetCount = (data)=>({
    type:'reset',
    payload:data
});
export const loading=(data)=>({
    type:"loading",
    payload:data    
})
export const getdata=(data)=>({
    type:"getdata",
    payload:data
    
});
export function getData(){
return async function (dispatch) {
    try {
        dispatch(loading('true'));
        var res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        var res2 = await res1.json();
        dispatch(getData(res2));
        dispatch(loading(false))
    } catch (error) {
        
    }
}
}
