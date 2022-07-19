import {ActionType} from "./actionType";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null | string, large: null | string }
    large: null | string
    small: null | string
    status: null | string
    uniqueUrlName: null | string
}
type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType[]
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export type SetIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export default usersReducer