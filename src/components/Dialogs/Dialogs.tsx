import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, addNewTextMessageAC} from "../../Redux/dialogs-reducer";
import store from "../../Redux/redux-store";

type DialogsType = {

}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = store.getState().dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                                        id={d.id}/>)

    let messageElement = store.getState().dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    /* let newMessage = React.createRef<HTMLTextAreaElement>()*/

    const addMessageHandler = () => {
        store.dispatch(addMessageAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch(addNewTextMessageAC(e.currentTarget.value))
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
                                   value={store.getState().dialogsPage.newTextMessage}></textarea>
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