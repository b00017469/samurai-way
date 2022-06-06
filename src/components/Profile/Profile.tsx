import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../Redux/profile-reducer";

export type ProfileType = {
    posts: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}

export default Profile;