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

const initialState = {
    postData: [
        {id: v1(), message: "It's my first post!", likeCounter: 4},
        {id: v1(), message: "Hi, how are you?", likeCounter: 2},
        {id: v1(), message: "hey", likeCounter: 0},
        {id: v1(), message: "Yo", likeCounter: 1},
    ],
    newPostText: ''
}

type dispatchActionType = addPostActionType | updateNewPostTextActionType
export const profileReducer = (state: profilePageType = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newPostText}
        }
        case "ADD-POST": {
            if (state.newPostText !== "") {
                return {
                    ...state,
                    postData: [{id: v1(), message: state.newPostText, likeCounter: 0}, ...state.postData],
                    newPostText: ''
                }
            }
            break
        }
        default:
            return state
    }
}

export type addPostActionType = {
    type: 'ADD-POST'
}

export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: string
}
export const addPostActionCreator = (): addPostActionType => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text: string): updateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
} as const)