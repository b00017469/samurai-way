import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/State";

type DialogsType ={
    data:DialogsPageType
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElement = props.data.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessageHandler = () => {
        let message = newMessage.current?.value
      alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessageHandler}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;