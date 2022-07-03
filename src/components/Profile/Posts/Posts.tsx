import React, {LegacyRef, RefObject} from "react";
import s from './Posts.module.css'
import {Post} from './Post/Post'
import {postType, profilePageType} from "../../../redux/state";

type PostsPropsType = {
    profilePage: profilePageType
    addPost: () => void
    updatePostText: (newPostText: string | undefined) => void
}

export const Posts = (props: PostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const clickAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updatePostText(newPostElement.current?.value)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}
                              placeholder="Type here your new post"></textarea>
                </div>
                <div>
                    <button onClick={clickAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {props.profilePage.postData.map((p: postType) => <Post key={p.id} id={p.id} message={p.message}
                                                                       likeCounter={p.likeCounter}/>)}
            </div>
        </div>
    )
}