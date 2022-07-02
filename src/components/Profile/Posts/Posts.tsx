import React, {LegacyRef} from "react";
import s from './Posts.module.css'
import {Post} from './Post/Post'
import {postDataType, postType} from "../../../redux/state";

type PostsPropsType = {
    postData: postDataType
}

export const Posts = (props: PostsPropsType) => {

    let newPostElement:any = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea ref={newPostElement} placeholder="Type here your new post"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {props.postData.reverse().map((p:postType) => <Post key={p.id} id={p.id} message={p.message} likeCounter={p.likeCounter}/>)}
            </div>
        </div>
    )
}