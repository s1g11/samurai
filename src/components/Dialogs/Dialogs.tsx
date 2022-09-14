import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    onMessageChange: (body: string) => void
    sendMessage: () => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const onKeyDownHandler = (key: string) => key === 'Enter' && props.sendMessage()

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)}
                <div>
                    <textarea onKeyDown={(e)=> onKeyDownHandler(e.key)} placeholder="Type your message" value={props.dialogsPage.newMessageBody} onChange={(e)=>props.onMessageChange(e.currentTarget.value)} cols={30} rows={4}></textarea>
                </div>
                <div>
                    <button onClick={props.sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}