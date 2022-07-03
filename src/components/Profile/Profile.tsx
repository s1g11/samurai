import React, {ProfilerProps} from "react";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    updatePostText: (newPostText:string | undefined) => void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts addPost={props.addPost} updatePostText={props.updatePostText} profilePage={props.profilePage}/>
        </div>
    )
}