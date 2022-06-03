import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../Redux/State";

export type ProfileType = {
    posts: ProfilePageType
    dispatch: (action:ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPosts posts ={props.posts}  dispatch={props.dispatch} />
    </div>
}

export default Profile;