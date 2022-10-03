import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfilePropsType} from "./types";

const Profile: React.FC<UserProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}
                     getStatus={props.getStatus}
                     updateStatus={props.updateStatus}
                     status={props.status}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;