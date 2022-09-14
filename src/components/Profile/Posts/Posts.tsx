import React from "react";
import s from './Posts.module.css'
import {Post} from './Post/Post'
import {postType, profilePageType} from "../../../redux/profile-reducer";

type PostsPropsType = {
    profilePage: profilePageType
    clickAddPost: () => void
    onPostChange: (text: string) => void
}

export const Posts = (props: PostsPropsType) => {

    const onKeyDownHandler = (key: string) => key === 'Enter' && props.clickAddPost()

    return (
        <div className={s.posts}>
            <h3 className={s.myPosts}>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={(e) => props.onPostChange(e.currentTarget.value)}
                              value={props.profilePage.newPostText}
                              onKeyDown={(e)=>onKeyDownHandler(e.key)}
                              placeholder="Type here your new post"
                    ></textarea>
                </div>
                <div>
                    <button onClick={props.clickAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {props.profilePage.postData.map((p: postType) => <Post key={p.id} id={p.id} message={p.message}
                                                                       likeCounter={p.likeCounter}/>)}
            </div>
        </div>
    )
}