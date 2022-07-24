import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {HeaderPropsType, MapStatePropsType} from "./types";
import {getAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userData: state.auth,
        avatar: state.profilePage.profile.photos.small
    }
}

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer)