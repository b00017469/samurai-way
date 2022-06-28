import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
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
      follow: (userId: string)=>{
          dispatch(followAC(userId))
      },
      unfollow: (userId: string)=>{
          dispatch(unfollowAC(userId))
      },
      setUsers: (users: UserType[])=>{
          dispatch(setUsersAC(users))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);