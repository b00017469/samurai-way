import {UserProfileType} from "../../Redux/profile-reducer";

export type MapStateToPropsType = {
    profile:UserProfileType
}
export type MapDispatchToPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void

}
export type UserProfilePropsType = MapStateToPropsType & MapDispatchToPropsType