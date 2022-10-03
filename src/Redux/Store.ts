import profileReducer, {AddNewTextareaActionType, AddPostActionType, UserProfileType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, AddNewTextMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
type ProfilePageType = {
    posts: PostsType[]
    newTextAreaValue: string
    profile: UserProfileType
    status: string
}
type DialogsPageType = {
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

type ActionType =
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
            newTextAreaValue: "",
            status: '',
            profile: {
                "aboutMe": "я круто чувак 1001%",
                "contacts": {
                    "facebook": "facebook.com",
                    "website": null,
                    "vk": "vk.com/dimych",
                    "twitter": "https://twitter.com/@sdf",
                    "instagram": "instagra.com/sds",
                    "youtube": null,
                    "github": "github.com",
                    "mainLink": null
                },
                "lookingForAJob": true,
                "lookingForAJobDescription": "не ищу, а дурачусь",
                "fullName": "samurai dimych",
                "userId": 2,
                "photos": {
                    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }
            }
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    }
}

export default store;