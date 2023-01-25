const initialstate={
count:0
}
export function reducer(state=initialstate,action){
    switch(action.type){
        case "increment":{
            return state.count=state.count+action.payload;
        }
        case "decrement":{
            return state.count=state.count-action.payload
        }
        default :{
       return state;
        }
    }
}