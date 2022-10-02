import React, {ComponentType} from "react";
import {getUserProfile} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {MapStateToPropsType, PropsType} from "./types";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose<ComponentType>(
    connect(MapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(WithUrlDataContainer)