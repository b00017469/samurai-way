import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../../assets/images/defultAvatar.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                                        onClick={() => {
                                                            props.onPageChanged(page)
                                                        }}>-{page}-</span>)}
            </div>
            {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                         <img className={styles.userPhoto}
                              src={user.photos.small || defaultUserPhoto}
                              alt='avatar'/>
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "436bdb38-bfa3-4dcc-b208-6cacf9b3b7d8"}
                            })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                        }
                        }>Unfollow</button>
                        : <button onClick={
                            () => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "436bdb38-bfa3-4dcc-b208-6cacf9b3b7d8"}
                                })
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                            }
                        }>Follow</button>}

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