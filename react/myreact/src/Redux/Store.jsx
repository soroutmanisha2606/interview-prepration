import {legacy_createStore as createStore} from "redux";
import Myreducer from "./reducer";
export const Mystore=createStore(Myreducer);
