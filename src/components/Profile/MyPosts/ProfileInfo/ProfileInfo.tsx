import React from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: UserProfileType
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const {aboutMe, fullName, photos, lookingForAJob, lookingForAJobDescription } = props.profile
    return (<div>
            <div>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                     alt='beauty'/>
            </div>
            <div className={s.descriptionBlock}>
                <img alt='avatar' src={photos.large}/>
                <h3>{fullName}</h3>
                <div>{aboutMe}</div>
                <div>{lookingForAJob ? 'Очень нужна работа!' : 'При бабле!))'}</div>
                <div>{lookingForAJobDescription}</div>
            </div>
        </div>
    )
}