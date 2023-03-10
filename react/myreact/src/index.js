import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Mystore } from './Redux/Store';
import { MycontextProvider } from './components/contextApi/Child';
import { store } from './middleware and thunk/redux folder of thunk/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MycontextProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </MycontextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
