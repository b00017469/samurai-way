import {UserDataType} from "../../Redux/auth-reducer";

export type MapStatePropsType = {
    userData: UserDataType
    avatar: string
}
export type MapDispatchPropsType = {
    getAuthUserData: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType