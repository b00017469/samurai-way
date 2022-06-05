import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    posts: ProfilePageType
    dispatch: (action:ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
       <ProfileInfo/>
        <MyPostsContainer posts ={props.posts}  dispatch={props.dispatch} />
    </div>
}

export default Profile;