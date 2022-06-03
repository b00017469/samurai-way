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
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type AddNewTextareaActionType = {
    type: 'ADD-NEW-TEXTAREA-VALUE'
    message: string
}
export type ActionType = AddPostActionType | AddNewTextareaActionType
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    dispatch:(action:ActionType)=>void
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
            ]
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
        if (action.type === 'ADD-POST') {
            this._state.profilePage.posts.push({
                id: '4', message: this._state.profilePage.newTextAreaValue, likesCount: 0
            })
            this._callSubscriber()
            this._state.profilePage.newTextAreaValue = ''
        } else if (action.type === 'ADD-NEW-TEXTAREA-VALUE') {
            this._state.profilePage.newTextAreaValue = action.message
            this._callSubscriber()
        }
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    }
}

export default store;