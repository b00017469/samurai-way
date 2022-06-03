import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileType} from "../Profile";
import {addNewTextareaValueAC, addPostAC} from "../../../Redux/profile-reducer";


const MyPosts: React.FC<ProfileType> = (props) => {

    let postElement = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (value: string) => {
        props.dispatch(addNewTextareaValueAC(value))
    }

    const onAddPost = () => {
        props.dispatch(addPostAC())
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={(e) => onChangeHandler(e.currentTarget.value)}
                          value={props.posts.newTextAreaValue}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts;