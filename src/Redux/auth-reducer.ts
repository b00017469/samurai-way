import {ActionType} from "./actionType";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: UserDataType
}

export type UserDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

const initialState: UserDataType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

const authReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            const {login, id, email} = action.data
            return {...state, isAuth: true, login, id, email}
        default:
            return state
    }
}

const setUserData = (data: UserDataType): SetUserDataType => ({type: SET_USER_DATA, data})
export const getAuthUserData = ()=>(dispatch: Dispatch)=>{
    authAPI.me()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
}
export default authReducer

