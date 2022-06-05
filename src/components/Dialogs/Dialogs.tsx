import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store from "../../Redux/redux-store";
import {DialogsPageType} from "../../Redux/Store";

type DialogsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    onChangeMessageText: (text: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElement = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>)

    const addMessageHandler = () => {
        props.addMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageText(e.currentTarget.value)
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
                                  value={store.getState().dialogsPage.newTextMessage}>1</textarea>
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