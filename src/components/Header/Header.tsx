import React from "react";
import {NavLink} from "react-router-dom";
import AuthUserInfo from "./AuthUserInfo";
import s from './Header.module.css'
import {HeaderPropsType} from "./types";

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <div className={s.loginBlock}>
            {props.userData.isAuth ? <AuthUserInfo login={props.userData.login}/>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;