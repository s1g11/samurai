import React, {ProfilerProps} from "react";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageData: profilePageType
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts postData={props.profilePageData.postData}/>
        </div>
    )
}