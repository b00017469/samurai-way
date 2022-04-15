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

    let dialogsData = [
        {id: '1', name: "Dimych"},
        {id: '2', name: "Masha"},
        {id: '3', name: "Pasha"},
        {id: '4', name: "Victor"},
        {id: '5', name: "Tosha"},
        {id: '6', name: "Vova"}
    ]
    let messageData = [
        {id: '1', massage: "Hello!"},
        {id: '2', massage: "How are you?"},
        {id: '3', massage: "Be be be!!!"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].massage}/>
                <Message message={messageData[1].massage}/>
                <Message message={messageData[2].massage}/>
            </div>
        </div>
    )
}
export default Dialogs;