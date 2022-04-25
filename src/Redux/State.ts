import {rerenderRoutTree} from "../render";

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newTextAreaValue:string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
let state: StateType = {
    profilePage: {
        posts: [
            {id: '1', message: "Hello, friends!!!", likesCount: 9},
            {id: '2', message: "This is my first post.", likesCount: 11},
            {id: '3', message: "This is my first post.", likesCount: 11}
        ],
        newTextAreaValue: ""
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: "Dimych"},
            {id: '2', name: "Masha"},
            {id: '3', name: "Pasha"},
            {id: '4', name: "Victor"},
            {id: '5', name: "Tosha"},
            {id: '6', name: "Vova"}
        ],
        messages: [
            {id: '1', message: "Hello!"},
            {id: '2', message: "How are you?"},
            {id: '3', message: "Be be be!!!"}
        ]
    },
    sidebar: {}
}
export const addNewTextareaValue =(m:string)=>{
    state.profilePage.newTextAreaValue = m
    rerenderRoutTree(state)
}
export const addPost = () => {
    debugger
    state.profilePage.posts.push({
        id: '4', message: state.profilePage.newTextAreaValue, likesCount: 0
    })
    rerenderRoutTree(state)
    addNewTextareaValue('')
}
export default state;