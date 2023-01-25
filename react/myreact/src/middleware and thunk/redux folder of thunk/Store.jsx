import {legacy_createStore as createStore,applyMiddleware} from "redux";
import { reducer } from "./Reducer";

const mymiddleware=(store)=>(next)=>(action)=>{
    console.log("entered into the middleware function");
    // console.log("store is ",store);
    // console.log("action is ",action);
    next(action);
    console.log("exit middleware 1");


}
const mymiddleware2=(store)=>(next)=>(action)=>{
    console.log("entered middleware 2");
   
    next(action);
    console.log("exit middleware2");

}
//dispatch()-----middleware()()()----middleware2()()()-----reducer()

//thunbk middleware used to handle async request
const thunkmiddleware=(store)=>(next)=>(action)=>{
    if(typeof action==='function'){
        return action(store.dispatch)
    }
    next(action);
    
}
const middleware=applyMiddleware(thunkmiddleware)
export const store=createStore(reducer,middleware);
store.subscribe(()=>{
    console.log("strore get updated",store.getState());
})
/**    cretestore (reducer,initialstate,middleware)* */
