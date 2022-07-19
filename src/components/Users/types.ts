import {UserType} from "../../Redux/users-reducer";

export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number)=>void
    setTotalUsersCount: (totalCount: number)=>void
    setIsFetching: (isFetching:boolean)=>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType