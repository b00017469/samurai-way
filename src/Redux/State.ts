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

export type StoreType = {
    _state: StateType
    getState:()=>StateType
    addPost: ()=>void
    addNewTextareaValue:(massage: string)=>void
    renderTree:()=>void
    subscribe:(callback: () => void)=>void
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
    getState(){return this._state},
    addPost() {
        this._state.profilePage.posts.push({
            id: '4', message: this._state.profilePage.newTextAreaValue, likesCount: 0
        })
        this.renderTree()
        this.addNewTextareaValue('')
    },
    addNewTextareaValue(massage: string) {
        this._state.profilePage.newTextAreaValue = massage
        this.renderTree()
    },
    renderTree() {
        console.log('hello')
    },
    subscribe(callback: () => void) {
        this.renderTree = callback
    }
}

export default store;