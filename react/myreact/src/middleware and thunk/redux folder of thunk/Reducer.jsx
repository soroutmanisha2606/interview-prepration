const initialstate={
count:0,
loading:false,
error:false,
data:[]
}
export function reducer(state=initialstate,action){
    switch(action.type){
        case "increment":{
            return {...state,count:state.count+action.payload}
        }
        case "decrement":{
            return  {...state,count:state.count-action.payload}
        }
        case "loading":{
            return {...state,loading:action.payload}
        }
        case "error":{
            return {...state,error:action.payload}
        }
        case "getdata":{
            return {...state,data:action.payload};
        }
        default :{
       return state;
        }
    }
}