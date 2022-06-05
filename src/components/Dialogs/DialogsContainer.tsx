import React from "react";
import {addMessageAC, addNewTextMessageAC, DialogsPageType} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

/*const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

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
}*/

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType ={
    updateMessageText:(text:string)=>void
    sendMessage:()=>void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateMessageText: (text: string) => {
            dispatch(addNewTextMessageAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;