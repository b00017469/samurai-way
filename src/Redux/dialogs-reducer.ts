import {ActionType} from "./actionType";


const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MASSAGE'
type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}

export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
export type AddNewTextMessageActionType = {
    type: typeof ADD_NEW_TEXT_MESSAGE
    message: string
}
export type InitialStateDialogsType = typeof initialState

const initialState = {
    dialogs: [
        {id: '1', name: "Dimych"},
        {id: '2', name: "Masha"},
        {id: '3', name: "Pasha"},
        {id: '4', name: "Victor"},
        {id: '5', name: "Tosha"},
        {id: '6', name: "Vova"}
    ] as DialogsType[],
    messages: [
        {id: '1', message: "Hello!"},
        {id: '2', message: "How are you?"},
        {id: '3', message: "Be be be!!!"}
    ] as MessagesType[],
    newTextMessage: ""
}

const dialogsReducer = (state:InitialStateDialogsType = initialState, action: ActionType): InitialStateDialogsType => {
    switch (action.type) {
        case ADD_NEW_TEXT_MESSAGE:
            return {...state, newTextMessage: action.message}
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: '4', message: state.newTextMessage}],
                newTextMessage: ''
            }
        default:
            return state
    }
}
export const addMessageAC = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const addNewTextMessageAC = (message: string): AddNewTextMessageActionType =>
    ({type: ADD_NEW_TEXT_MESSAGE, message})

export default dialogsReducer