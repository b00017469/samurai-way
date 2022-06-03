import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, addNewTextMessageAC, DialogsPageType, StoreType} from "../../Redux/State";

type DialogsType = {
    data: StoreType
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = props.data.getState().dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                                        id={d.id}/>)

    let messageElement = props.data.getState().dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    /* let newMessage = React.createRef<HTMLTextAreaElement>()*/

    const addMessageHandler = () => {
        props.data.dispatch(addMessageAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.data.dispatch(addNewTextMessageAC(e.currentTarget.value))
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
                                   value={props.data.getState().dialogsPage.newTextMessage}></textarea>
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