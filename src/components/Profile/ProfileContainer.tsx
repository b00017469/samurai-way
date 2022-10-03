import React, {ComponentType} from "react";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {MapStateToPropsType, PropsType} from "./types";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer)
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
  //  withAuthRedirect
)(WithUrlDataContainer)