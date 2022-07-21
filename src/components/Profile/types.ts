import {UserProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";

export type MapStateToPropsType = {
    profile:UserProfileType
}
export type MapDispatchToPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void

}
export type PathParamsType = {
    userId: string
}
export type UserProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & UserProfilePropsType