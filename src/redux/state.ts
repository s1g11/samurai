import {v1} from "uuid";

export type profilePageType = {
    postData: postDataType
    newPostText: string
}
export type postDataType = Array<postType>
export type postType = {
    id: string
    message: string
    likeCounter: number
}


export type dialogsPageType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
}
export type dialogsDataType = Array<dialogType>
type dialogType = {
    id: string
    name: string
}


export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type messagesDataType = Array<messageType>
type messageType = {
    id: string
    message: string
}


type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: dispatchActionType) => void
}

export type dispatchActionType = {
    type: string
    newPostText?: string
}

export let store: storeType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), message: "It's my first post!", likeCounter: 4},
                {id: v1(), message: "Hi, how are you?", likeCounter: 2},
                {id: v1(), message: "hey", likeCounter: 0},
                {id: v1(), message: "Yo", likeCounter: 1},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Valera'},
            ],
            messagesData: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'How are u?'},
            ],
        }
    },

    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: dispatchActionType) {
        if (action.type === 'ADD-POST') {
            if (this._state.profilePage.newPostText) {
                let newPost = {
                    id: v1(), message: this._state.profilePage.newPostText, likeCounter: 0
                }
                this._state.profilePage.postData.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
            }
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.newPostText) {
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
            } else {
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
            }
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
})