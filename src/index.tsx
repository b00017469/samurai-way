import React from 'react';
import './index.css';
import store from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderRoutTree = ()=>{
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
store.subscribe(rerenderRoutTree)
rerenderRoutTree()