import {addPost, stateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updatePostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}