import {UserType} from "../../Redux/users-reducer";

export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFollowingProgress: (isFetching: boolean, userId: number)=>void
    getUsers: (pageSize: number, currentPage: number) =>void
    getUsersPageChanged: (pageSize: number, currentPage: number) =>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType