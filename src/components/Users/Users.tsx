import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import axios from "axios";
import defaultUserPhoto from "../../assets/images/defultAvatar.png"

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => props.setUsers(response.data.items))
    }
    return <div>
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
}

export default Users;