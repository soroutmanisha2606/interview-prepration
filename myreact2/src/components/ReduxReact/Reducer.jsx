const initialState ={
    count:0,
    data:[],
    loading:'false'
}
const MyReducer = (state=initialState,action) => {
    switch(action.type){
        case 'Increment':{
         return {...state,count:state.count+action.payload}
        }
        case 'decrement' :{
            return {...state,count:state.count-action.payload}
        }
        case 'getdata':{
            return {...state,data:action.payload}
        }
        case 'loading':{
            return {...state,loading:action.payload}
        }
        case 'reset':{
            return {...state , count:0}
        }
        default :{
            return state;
        }
    }

}

export default MyReducer