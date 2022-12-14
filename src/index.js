import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import indexReducer from './component/redux/reducers/indexReducer';
import Shopping from './Shopping';
// import {configureStore} from '@reduxjs/toolkit'
// import userSlice from './component/redux/reducers/userReducer';
// import ProductSlice from './component/redux/reducers/productReducer';

// const store = configureStore({
//     reducer:{
//         user: userSlice.reducer,
//         product: ProductSlice.reducer
//     }
// })

const store = createStore(indexReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Shopping />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
