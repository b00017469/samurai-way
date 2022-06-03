import {ActionType, DialogsPageType} from "./Store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MASSAGE'
export type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
export type AddNewTextMessageActionType = {
    type: typeof ADD_NEW_TEXT_MESSAGE
    message: string
}
const initialState:DialogsPageType = {
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
const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_NEW_TEXT_MESSAGE:
            state.newTextMessage = action.message
            return state
        case ADD_MESSAGE:
            state.messages.push({
                id: '4', message: state.newTextMessage
            })
            state.newTextMessage = ''
            return state
        default:
            return state
    }
}
export const addMessageAC = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const addNewTextMessageAC = (message: string): AddNewTextMessageActionType =>
    ({type: ADD_NEW_TEXT_MESSAGE, message})

export default dialogsReducer