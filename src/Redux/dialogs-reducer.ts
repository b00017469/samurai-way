import {ActionType} from "./Store";

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
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newTextMessage: string
}
export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
export type AddNewTextMessageActionType = {
    type: typeof ADD_NEW_TEXT_MESSAGE
    message: string
}
const initialState: DialogsPageType = {
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
    ],
    newTextMessage: ""
}

const dialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {
    const copyState = {...state}
    copyState.dialogs = [...state.dialogs]
    copyState.messages = [...state.messages]
    switch (action.type) {
        case ADD_NEW_TEXT_MESSAGE:
            copyState.newTextMessage = action.message
            return copyState
        case ADD_MESSAGE:
            copyState.messages.push({
                id: '4', message: state.newTextMessage
            })
            copyState.newTextMessage = ''
            return copyState
        default:
            return copyState
    }
}
export const addMessageAC = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const addNewTextMessageAC = (message: string): AddNewTextMessageActionType =>
    ({type: ADD_NEW_TEXT_MESSAGE, message})

export default dialogsReducer