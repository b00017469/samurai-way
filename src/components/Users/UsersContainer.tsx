import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import {MapStatePropsType, UsersPropsType} from "./types";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersAPIComponent extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this)
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged(page: number): void {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        userAPI.getUsers(this.props.pageSize, page)
            .then((response) => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
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
                    pageSize={this.props.pageSize}/>}
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, setIsFetching
})(UsersAPIComponent);