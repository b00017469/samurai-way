import {ActionType} from "./actionType";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    followingInProgress: number[]
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
export type SetFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => action.userId !== userId)
            }
        default:
            return state
    }
}
export const followSuccess = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: UserType[]): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setFollowingProgress = (isFetching: boolean, userId: number): SetFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    userAPI.getUsers(pageSize, currentPage)
        .then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
}
export const getUsersPageChanged = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    userAPI.getUsers(pageSize, currentPage)
        .then(response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.items))
        })
}
export const unfollow =(userId:number)=>(dispatch: Dispatch)=>{
    dispatch(setFollowingProgress(true, userId))
    userAPI.unfollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(setFollowingProgress(false, userId))
        })
}
export const follow =(userId:number)=>(dispatch: Dispatch)=>{
    dispatch(setFollowingProgress(true, userId))
    userAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(setFollowingProgress(false, userId))
        })
}

export default usersReducer