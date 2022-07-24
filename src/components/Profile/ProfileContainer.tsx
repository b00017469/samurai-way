import React from "react";
import {getUserProfile} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {MapStateToPropsType, PropsType} from "./types";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
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

export default connect(MapStateToProps, {getUserProfile})(WithUrlDataContainer);