import React from "react";
import s from './Post.module.css'
import ava from '../../../img/ava.jpg'

type PostPropsType = {
    id: string
    message: string
    likeCounter: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={ava} alt=""/>
            <span className={s.postText}>{props.message}</span>
            <div>
                <span className={s.likeCounter}>{props.likeCounter} like</span>
            </div>
        </div>
    )
}