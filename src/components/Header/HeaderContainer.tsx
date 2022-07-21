import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {HeaderPropsType, MapStatePropsType} from "./types";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.setUserData(response.data.data)
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