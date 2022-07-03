import {renderEntireTree} from "../render";

export type postDataType = Array<postType>

export type messagesDataType = Array<messageType>

export type dialogsDataType = Array<dialogType>

type friendsType = Array<friendType>

export type postType = {
    id: number
    message: string
    likeCounter: number
}

type messageType = {
    id: number
    message: string
}

type dialogType = {
    id: number
    name: string
}

export type profilePageType = {
    postData: postDataType
    newPostText: string
}

export type dialogsPageType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
}

type friendType = {
    id: number
    name: string
    ava:string
}

export type sideBarType = {
    friends: friendsType
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sideBarData: sideBarType
}

export let state: stateType = {
    profilePage: {
        postData: [
            {id: 1, message: "It's my first post!", likeCounter: 4},
            {id: 2, message: "Hi, how are you?", likeCounter: 2},
            {id: 3, message: "hey", likeCounter: 0},
            {id: 4, message: "Yo", likeCounter: 1},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'How are u?'},
        ],
    },
    sideBarData: {
        friends: [
            {id: 1, name: 'Dimych', ava:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 2, name: 'Viktor', ava:'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg'},
            {id: 3, name: 'Sveta', ava:'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'},
            {id: 4, name: 'Andrew', ava:'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'},
            {id: 5, name: 'Igor', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU'},
            {id: 6, name: 'Ignat', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfDAMqK3mhyikTk6uhY8Bn3HdpjkMvuzLQ&usqp=CAU'},
        ]
    }
}

export const addPost = () => {
    if (state.profilePage.newPostText) {
        let newPost = {
            id: 5, message: state.profilePage.newPostText, likeCounter: 0
        }
        state.profilePage.postData.push(newPost)
        state.profilePage.newPostText = ''
        renderEntireTree(state)
    }
}

export const updateNewPostText = (newPostText:string | undefined) => {
    if (newPostText) {
        state.profilePage.newPostText = newPostText
        renderEntireTree(state)
    }
    else {
        state.profilePage.newPostText = ''
        renderEntireTree(state)
    }
}