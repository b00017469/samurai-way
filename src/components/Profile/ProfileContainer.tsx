import React from "react";
import {setUserProfile} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {MapStateToPropsType, UserProfilePropsType} from "./types";

class ProfileContainer extends React.Component<UserProfilePropsType> {
    componentDidMount() {
        // this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer);