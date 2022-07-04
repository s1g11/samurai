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
import {dispatchActionType, stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    dispatch: (action: dispatchActionType) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPageData={props.state.dialogsPage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
