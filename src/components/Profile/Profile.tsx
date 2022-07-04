import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {dispatchActionType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: dispatchActionType) => void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts dispatch={props.dispatch} profilePage={props.profilePage}/>
        </div>
    )
}