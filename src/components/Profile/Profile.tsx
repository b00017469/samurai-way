import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    posts: ProfilePageType
    addPost: () => void
    addArea: (message: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPosts posts ={props.posts} addPost={props.addPost} addArea={props.addArea} />
    </div>
}

export default Profile;