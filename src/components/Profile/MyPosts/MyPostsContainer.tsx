import React from "react";
import {ProfileType} from "../Profile";
import {addNewTextareaValueAC, addPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer: React.FC<ProfileType> = (props) => {

    let postElement = props.posts

    const onChangeHandler = (value: string) => {
        props.dispatch(addNewTextareaValueAC(value))
    }

    const onAddPost = () => {
        props.dispatch(addPostAC())
    }

    return    (<MyPosts addPost={onAddPost}
                        onChangePostText={onChangeHandler}
                        profilePage={postElement}/>)
}

export default MyPostsContainer;