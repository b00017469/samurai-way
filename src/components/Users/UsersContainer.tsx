import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
  return {
      follow: (userId: number)=>{
          dispatch(followAC(userId))
      },
      unfollow: (userId: number)=>{
          dispatch(unfollowAC(userId))
      },
      setUsers: (users: UserType[])=>{
          dispatch(setUsersAC(users))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);