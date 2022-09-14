import React from "react";
import {
    profilePageType,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {stateType} from "../../../App";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: profilePageType
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

type mapDispatchToPropsType = {
    clickAddPost: () => void
    onPostChange: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        clickAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)