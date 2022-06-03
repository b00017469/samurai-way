const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_TEXTAREA_VALUE = 'ADD-NEW-TEXTAREA-VALUE'
const ADD_NEW_TEXT_MESSAGE = 'ADD-NEW-TEXT-MASSAGE'

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
    newTextAreaValue: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newTextMessage: string
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type AddPostActionType = {
    type: typeof ADD_POST
}
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
type AddNewTextareaActionType = {
    type: typeof ADD_NEW_TEXTAREA_VALUE
    message: string
}
type AddNewTextMessageActionType = {
    type: typeof ADD_NEW_TEXT_MESSAGE
    message: string
}
export type ActionType =
    AddPostActionType
    | AddNewTextareaActionType
    | AddNewTextMessageActionType
    | AddMessageActionType
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
    subscribe: (callback: () => void) => void
}

const store: StoreType = {
    _state: {
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
            ],
            newTextMessage: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({
                id: '4', message: this._state.profilePage.newTextAreaValue, likesCount: 0
            })
            this._callSubscriber()
            this._state.profilePage.newTextAreaValue = ''
        } else if (action.type === ADD_NEW_TEXTAREA_VALUE) {
            this._state.profilePage.newTextAreaValue = action.message
            this._callSubscriber()
        } else if (action.type === ADD_NEW_TEXT_MESSAGE) {
            this._state.dialogsPage.newTextMessage = action.message
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messages.push({
                id: '4', message: this._state.dialogsPage.newTextMessage
            })
            this._state.dialogsPage.newTextMessage = ''
            this._callSubscriber()
        }
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    }
}
export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const addNewTextareaValueAC = (message: string): AddNewTextareaActionType =>
    ({type: ADD_NEW_TEXTAREA_VALUE, message})
export const addMessageAC = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const addNewTextMessageAC = (message: string): AddNewTextMessageActionType =>
    ({type: ADD_NEW_TEXT_MESSAGE, message})

export default store;