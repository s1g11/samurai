import React from 'react';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {dialogsPageType} from "./redux/dialogs-reducer";
import {profilePageType} from "./redux/profile-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {usersPageDataType} from "./redux/users-reducer";
import UsersContainer from "./components/Users/UsersContainer";

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageDataType
}

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={Profile}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
