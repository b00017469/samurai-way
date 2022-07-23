import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {HeaderPropsType, MapStatePropsType} from "./types";
import {setUserData} from "../../Redux/auth-reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        userAPI.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
                }
            })
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

export default connect(MapStateToProps, {setUserData})(HeaderContainer)