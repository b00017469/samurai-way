import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    posts: ProfilePageType
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPosts posts ={props.posts}/>
    </div>
}

export default Profile;