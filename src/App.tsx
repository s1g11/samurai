import React from 'react';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    addPost: () => void
    updatePostText: (newPostText:string | undefined) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav sideBarData={props.state.sideBarData}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=><Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
                    <Route path="/dialogs" render={()=><Dialogs dialogsPageData={props.state.dialogsPage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
