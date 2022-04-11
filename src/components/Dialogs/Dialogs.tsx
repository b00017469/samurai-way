import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Masha" id="2"/>
                <DialogItem name="Pasha" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Tosha" id="5"/>
                <DialogItem name="Vova" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello!"/>
                <Message message="How are you?"/>
                <Message message="Be be be!!!"/>
            </div>
        </div>
    )
}
export default Dialogs;