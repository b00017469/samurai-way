import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"

const Users = (props: UsersPropsType) => {
    if(props.users.length===0){
        props.setUsers([{
            id: '1',
            photoURL: 'https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg',
            followed: false,
            fullName: 'Pavel',
            status: 'I am a student',
            location: {city: 'Brest', country: 'Belarus'}
        },
            {
                id: '2',
                photoURL: 'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
                followed: true,
                fullName: 'Masha',
                status: 'I want to meet with you',
                location: {city: 'Baranovichy', country: 'Belarus'}
            },
            {
                id: '3',
                photoURL: 'https://3.bp.blogspot.com/-Y096u66r_U8/WHQebMbvCXI/AAAAAAAAEjU/tqCfSi0FZOApfOFMFr1tmwwLv4-NyO_eACLcB/s1600/myAvatar.png',
                followed: false,
                fullName: 'Sanya',
                status: 'I am a programmer',
                location: {city: 'Minsk', country: 'Belarus'}
            }])
    }
    return <div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img className={styles.userPhoto} src={user.photoURL} alt='avatar'/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={()=>props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={()=>props.follow(user.id)}>Follow</button>}

                </div>
            </span>
            <span>
                <div>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </div>
            </span>
        </div>)}
    </div>
}

export default Users;