import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {follow, getUsers, getUsersPageChanged, setFollowingProgress, unfollow} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import {MapStatePropsType, UsersPropsType} from "./types";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this)
    }

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged(page: number): void {
        this.props.getUsersPageChanged(this.props.pageSize, page)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users
                    totalCount={this.props.totalCount}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    followingInProgress={this.props.followingInProgress}/>}
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setFollowingProgress, getUsers,
    getUsersPageChanged
})(UsersAPIComponent);