import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewTextareaValue, addPost} from "./Redux/State";

export const rerenderRoutTree = ()=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} addArea={addNewTextareaValue}/>,
        document.getElementById('root')
    );
}
subscribe(rerenderRoutTree)
rerenderRoutTree()