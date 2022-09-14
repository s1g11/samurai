import {v1} from "uuid";

export type dialogsPageType = {
    dialogsData: dialogsDataType
    messagesData: messagesDataType
    newMessageBody: string
}
export type dialogsDataType = Array<dialogType>
type dialogType = {
    id: string
    name: string
}
export type messagesDataType = Array<messageType>
export type messageType = {
    id: string
    message: string
}

const initialState: dialogsPageType = {
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
    newMessageBody: '',
}

type dispatchActionType = updateNewMessageTextActionType | sendMessageActionType
export const dialogsReducer = (state = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {...state, newMessageBody: action.newMessageBody}
        }
        case "SEND-MESSAGE": {
            if (state.newMessageBody !== "") {
                return {
                    ...state,
                    messagesData: [...state.messagesData, {id: v1(), message: state.newMessageBody}],
                    newMessageBody: ''
                }
            }
             break
        }
        default: {
            return state
        }
    }
}

type updateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageBody: string
}

type sendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export const sendMessageActionCreator = (): sendMessageActionType => ({type: "SEND-MESSAGE"})
export const updateNewMessageTextActionCreator = (text: string): updateNewMessageTextActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    newMessageBody: text
} as const)