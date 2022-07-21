import {ActionType} from "./actionType";

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

export const setUserData = (data: UserDataType): SetUserDataType => ({type: SET_USER_DATA, data})
export default authReducer

