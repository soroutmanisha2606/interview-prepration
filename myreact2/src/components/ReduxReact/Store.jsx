import * as  createStore from 'redux';

import MyReducer from './Reducer';
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';
export  const MyStore = createStore(MyReducer , applyMiddleware(thunk))