import s from "../Dialogs.module.css";
import React from "react";

type messagePropsType = {
    message: string
    id: number
}

export const Message = (props: messagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}