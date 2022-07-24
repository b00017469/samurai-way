import {ActionType} from "./actionType";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const ADD_NEW_TEXTAREA_VALUE = 'ADD-NEW-TEXTAREA-VALUE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
export type ProfilePageType = typeof initialState
export type AddPostActionType = {
    type: typeof ADD_POST
}
export type AddNewTextareaActionType = {
    type: typeof ADD_NEW_TEXTAREA_VALUE
    message: string
}
export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: UserProfileType
}
export type UserProfileType = typeof initialState.profile

const initialState = {
    posts: [
        {id: '1', message: "Hello, friends!!!", likesCount: 9},
        {id: '2', message: "This is my first post.", likesCount: 11},
        {id: '3', message: "This is my first post.", likesCount: 11}
    ],
    newTextAreaValue: "",
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
}

const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: '4', message: state.newTextAreaValue, likesCount: 0}],
                newTextAreaValue: ''
            }
        case ADD_NEW_TEXTAREA_VALUE:
            return {...state, newTextAreaValue: action.message}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
export const addNewTextareaValueAC = (message: string): AddNewTextareaActionType =>
    ({type: ADD_NEW_TEXTAREA_VALUE, message})
export const setUserProfile = (userProfile: UserProfileType): SetUserProfileType =>
    ({type: SET_USER_PROFILE, profile: userProfile})
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export default profileReducer
