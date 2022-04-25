import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewTextareaValue, addPost, StateType} from "./Redux/State";

export const rerenderRoutTree = (state: StateType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} addArea={addNewTextareaValue}/>,
        document.getElementById('root')
    );
}
