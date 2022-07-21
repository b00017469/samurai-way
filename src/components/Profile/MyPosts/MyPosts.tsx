import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeHandler = (value: string) => {
        props.addNewTextareaValue(value)
    }

    const addPost = () => {
        props.addPost()
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={(e) => onChangeHandler(e.currentTarget.value)}
                          value={props.profilePage.newTextAreaValue}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}

export default MyPosts;