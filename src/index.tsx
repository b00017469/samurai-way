import React from 'react';
import './index.css';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

export const rerenderRoutTree = ()=>{
    ReactDOM.render(<Provider store={store}>
            <App />
    </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderRoutTree)
rerenderRoutTree()