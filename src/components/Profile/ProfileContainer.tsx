import React from "react";
import {setUserProfile} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {MapStateToPropsType, PropsType} from "./types";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '2'}`)
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

const WithUrlDataContainer = withRouter(ProfileContainer)
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(MapStateToProps, {setUserProfile})(WithUrlDataContainer);