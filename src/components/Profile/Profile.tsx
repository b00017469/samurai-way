import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    posts: ProfilePageType
    addPost: (message: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPosts posts ={props.posts} addPost={addPost}/>
    </div>
}

export default Profile;