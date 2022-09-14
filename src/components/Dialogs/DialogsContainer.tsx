import {
    dialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../App";
import { Dispatch } from 'redux';

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
const mapStateToProps = (state: stateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchToPropsType = {
    sendMessage: () => void
    onMessageChange: (body: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onMessageChange: (body: string) => {
            dispatch(updateNewMessageTextActionCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)