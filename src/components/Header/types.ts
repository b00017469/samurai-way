import {UserDataType} from "../../Redux/auth-reducer";

export type MapStatePropsType = {
    userData: UserDataType
    avatar: string
}
export type MapDispatchPropsType = {
    setUserData: (data: UserDataType) => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType