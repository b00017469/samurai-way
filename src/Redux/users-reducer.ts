import {ActionType} from "./actionType";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
type InitialStateType = {
    users: UserType[]
}
export type FollowActionType = {
    type: typeof FOLLOW
    userId: string
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: string
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType[]
}

const initialState: InitialStateType = {
    users: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}
export const followAC = (userId: string): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]): SetUsersActionType => ({type: SET_USERS, users})
export default usersReducer