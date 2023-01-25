import {legacy_createStore as createStore,applyMiddleware} from "redux";
import { reducer } from "./Reducer";
import thunk from "redux-thunk"
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
        return action(store.dispatch);
    }
    next(action);    
}
const middleware=applyMiddleware(thunk);
export const store=createStore(reducer,middleware);
store.subscribe(()=>{
    console.log("strore get updated",store.getState());
})
/**    cretestore (reducer,initialstate,middleware) **/


// Redux Middleware allows you to intercept every action 
//sent to the reducer so you can make changes to the action or cancel the action.
//. Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run 
//some asynchronous code before dispatching an action. 
//redux middleware called thunk. It allows us to return functions instead of objects from redux actions
//The function returned from action is called a thunk function which is called with two arguments : 
//1 dispatch -it is used to dispatch actions so that reducer can recieve that
// 2 getState-- It gives access to store inside the thunk function.



//////where to use middlewares
//1. logging, routing, asynchronous actions
//2.Redux Middleware allows you to intercept every action sent to the reducer so 
//you can make changes to the action or cancel the action