import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import axios from "axios";
import defaultUserPhoto from "../../assets/images/defultAvatar.png"


class Users extends React.Component<UsersPropsType> {
    onPageChanged(page:number):void{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);
        return <div>
            <div className={styles.spanHovered}>
                {slicedPages.map(page => <span
                    className={this.props.currentPage===page?styles.selectedPage:''}
                onClick={()=>{this.onPageChanged(page)}}>-{page}-</span>)}
            </div>
            {this.props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img className={styles.userPhoto}
                         src={user.photos.small || defaultUserPhoto}
                         alt='avatar'/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}

                </div>
            </span>
                <span>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'user.location'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            </span>
            </div>)}
        </div>
    }
}

export default Users;
