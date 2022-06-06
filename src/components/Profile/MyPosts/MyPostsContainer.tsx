import React from "react";
import {addNewTextareaValueAC, addPostAC, ProfilePageType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


/*const MyPostsContainer: React.FC<ProfileType> = (props) => {

    let postElement = props.posts

    const onChangeHandler = (value: string) => {
        props.dispatch(addNewTextareaValueAC(value))
    }

    const onAddPost = () => {
        props.dispatch(addPostAC())
    }

    return (<MyPosts addPost={onAddPost}
                     onChangePostText={onChangeHandler}
                     profilePage={postElement}/>)
}*/
type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addNewTextareaValue: (value: string) => void
    addPost: () => void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewTextareaValue: (value: string) => {
            dispatch(addNewTextareaValueAC(value))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;