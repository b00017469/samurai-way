import {ActionType, ProfilePageType} from "./Store";

const ADD_POST = 'ADD-POST'
const ADD_NEW_TEXTAREA_VALUE = 'ADD-NEW-TEXTAREA-VALUE'
export type AddPostActionType = {
    type: typeof ADD_POST
}
export type AddNewTextareaActionType = {
    type: typeof ADD_NEW_TEXTAREA_VALUE
    message: string
}
const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: "Hello, friends!!!", likesCount: 9},
        {id: '2', message: "This is my first post.", likesCount: 11},
        {id: '3', message: "This is my first post.", likesCount: 11}
    ],
    newTextAreaValue: ""
}
const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: '4', message: state.newTextAreaValue, likesCount: 0
            })
            state.newTextAreaValue = ''
            return state
        case ADD_NEW_TEXTAREA_VALUE:
            state.newTextAreaValue = action.message
            return state
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const addNewTextareaValueAC = (message: string): AddNewTextareaActionType =>
    ({type: ADD_NEW_TEXTAREA_VALUE, message})
export default profileReducer