import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./Redux/State";

type StateIndexType = {
    store: StoreType
}

const App: React.FC<StateIndexType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs data={props.store.getState().dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile posts={props.store.getState().profilePage}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  addArea={props.store.addNewTextareaValue.bind(props.store)}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

