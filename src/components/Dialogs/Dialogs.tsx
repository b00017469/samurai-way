import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych)
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Tosha
                </div>
                <div className={s.dialog}>
                    Vova
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Be be be!!!
                </div>
            </div>
        </div>
    )
}
export default Dialogs;