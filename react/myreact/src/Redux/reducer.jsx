
const init={
    increcount:0,
    myarray:[]

}
const Myreducer = (state=init,action) => {
    switch(action.type){
        case "alldata":{
            return {...state,myarray:action.payload}
        }
        case "INCRESE" :{
            return {...state,increcount:state.increcount+action.payload}
        }
        case "decrement":{
            return {...state,increcount:state.increcount-action.payload}
        }
        case "reset":{
            return {...state,increcount:0}
        }
        default :{
            return state
        }
    }
}

export default Myreducer;