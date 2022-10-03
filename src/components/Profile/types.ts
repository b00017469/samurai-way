import {UserProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps} from "react-router-dom";

export type MapStateToPropsType = {
    profile: UserProfileType
    status: string
}
export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type PathParamsType = {
    userId: string
}
export type UserProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & UserProfilePropsType