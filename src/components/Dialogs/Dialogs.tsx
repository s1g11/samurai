import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageData: dialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        let messageText = newMessageElement.current?.value
        alert(messageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPageData.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPageData.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)}
                <div>
                    <textarea ref={newMessageElement} cols={30} rows={4}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}