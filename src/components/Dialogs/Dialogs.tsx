import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElement = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

    const addMessageHandler = () => {
        props.sendMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={onChangeHandler}
                                  value={props.dialogsPage.newTextMessage}> </textarea>
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;