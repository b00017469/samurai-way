import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <Post message={"Hello, friends!!!"} likesCount = {0}/>
            <Post message={"This is my first post."} likesCount = {10}/>
        </div>
    </div>
}

export default MyPosts;