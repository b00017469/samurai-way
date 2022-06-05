import React from "react";
import {addMessageAC, addNewTextMessageAC} from "../../Redux/dialogs-reducer";
import store from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsContainerType = {}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let dialogsElement = store.getState().dialogsPage

    const addMessageHandler = () => {
        store.dispatch(addMessageAC())
    }
    const onChangeHandler = (text: string) => {
        store.dispatch(addNewTextMessageAC(text))
    }

    return (
        <Dialogs dialogsPage={dialogsElement} addMessage={addMessageHandler}
                 onChangeMessageText={onChangeHandler}/>
    )
}
export default DialogsContainer;