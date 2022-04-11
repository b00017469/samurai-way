import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const Dialogs = () =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Masha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Tosha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Vova</NavLink>
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