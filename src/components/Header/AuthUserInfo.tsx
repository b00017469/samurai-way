import React from 'react';

type AuthUserInfoType = {
    login: string
}

const AuthUserInfo:React.FC<AuthUserInfoType> = (props) => {
    return (
        <div>
            <div>Добро пожаловать,</div>
            <div>{props.login}!</div>
        </div>
    );
};

export default AuthUserInfo;