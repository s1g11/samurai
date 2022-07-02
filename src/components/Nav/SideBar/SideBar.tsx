import React from 'react';
import s from './SideBar.module.css'
import {sideBarType} from "../../../redux/state";

type sideBarPropsType = {
    sideBarData: sideBarType
}

export const SideBar = (props: sideBarPropsType) => {

    const getThreeRandomFriends = ():Array<number> => {
        let firstNumber = Math.floor(Math.random() * (props.sideBarData.friends.length))
        let secondNumber = Math.floor(Math.random() * (props.sideBarData.friends.length))
        let thirdNumber = Math.floor(Math.random() * (props.sideBarData.friends.length))
        if (firstNumber !== secondNumber && secondNumber !== thirdNumber && firstNumber !== thirdNumber) {
            return [firstNumber,secondNumber,thirdNumber]
        }
        else {
            return getThreeRandomFriends()
        }
    }

    let randomFriends:number[] = getThreeRandomFriends()

    return (
        <div className={s.sideBar}>
            <p>Your friends:</p>
            <div className={s.friendsContainer}>
                <div className={s.sideBarItem}>
                    <div><img src={props.sideBarData.friends[randomFriends[0]].ava} alt=""/></div>
                    <div>{props.sideBarData.friends[randomFriends[0]].name}</div>
                </div>
                <div className={s.sideBarItem}>
                    <div><img src={props.sideBarData.friends[randomFriends[1]].ava} alt=""/></div>
                    <div>{props.sideBarData.friends[randomFriends[1]].name}</div>
                </div>
                <div className={s.sideBarItem}>
                    <div><img src={props.sideBarData.friends[randomFriends[2]].ava} alt=""/></div>
                    <div>{props.sideBarData.friends[randomFriends[2]].name}</div>
                </div>
            </div>
        </div>
    )
}