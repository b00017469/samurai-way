import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileType} from "../Profile";


const MyPosts: React.FC<ProfileType> = (props) => {

    let postElement = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newTextPost = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        debugger
        let text = newTextPost.current?.value
        if (typeof text === "string") {
            props.addPost(text)
        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newTextPost}></textarea>
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