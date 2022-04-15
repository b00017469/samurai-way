import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: '1', name: "Dimych"},
        {id: '2', name: "Masha"},
        {id: '3', name: "Pasha"},
        {id: '4', name: "Victor"},
        {id: '5', name: "Tosha"},
        {id: '6', name: "Vova"}
    ]
    let messages = [
        {id: '1', massage: "Hello!"},
        {id: '2', massage: "How are you?"},
        {id: '3', massage: "Be be be!!!"}
    ]
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElement = messages.map(m =><Message message={m.massage}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}
export default Dialogs;