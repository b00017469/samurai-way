import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../../assets/images/defultAvatar.png";
import {UserType} from "../../Redux/users-reducer";

type UsersType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <div className={styles.spanHovered}>
                {slicedPages.map((page, index) => <span key={index}
                    className={props.currentPage === page ? styles.selectedPage : ''}
                    onClick={() => {props.onPageChanged(page)}}>-{page}-</span>)}
            </div>
            {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img className={styles.userPhoto}
                         src={user.photos.small || defaultUserPhoto}
                         alt='avatar'/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}

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
    );
};

export default Users;