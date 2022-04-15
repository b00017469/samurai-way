import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsType, MessagesType, PostsType} from './App';


let dialogs: DialogsType[] = [
    {id: '1', name: "Dimych"},
    {id: '2', name: "Masha"},
    {id: '3', name: "Pasha"},
    {id: '4', name: "Victor"},
    {id: '5', name: "Tosha"},
    {id: '6', name: "Vova"}
]
let messages: MessagesType[] = [
    {id: '1', message: "Hello!"},
    {id: '2', message: "How are you?"},
    {id: '3', message: "Be be be!!!"}
]
let posts: PostsType[] = [
    {id: '1', message: "Hello, friends!!!", likesCount: 9},
    {id: '2', message: "This is my first post.", likesCount: 11},
    {id: '2', message: "This is my first post.", likesCount: 11}
]

ReactDOM.render(
    <App dialogs = {dialogs} messages = {messages} posts={posts}/>,
  document.getElementById('root')
);