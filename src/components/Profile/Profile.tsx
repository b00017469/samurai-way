import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../Redux/profile-reducer";
import {ActionType} from "../../Redux/actionType";

export type ProfileType = {
    posts: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileType> = () => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}

export default Profile;