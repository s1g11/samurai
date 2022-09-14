import {connect} from "react-redux";
import {stateType} from "../../App";
import {
    dispatchActionType,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    usersPageDataType,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type PropsType = mapStateToPropsType & mapDispatchToPropsType
class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const currentPageFromLC = sessionStorage.getItem('currentPage')
        if (currentPageFromLC) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${currentPageFromLC}`).then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
            currentPageFromLC && this.props.setCurrentPage(JSON.parse(currentPageFromLC))
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`).then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
        }
    }

    onPageChanged = (pageNumber: number) => {
        if (pageNumber === this.props.usersPage.currentPage) return
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setCurrentPage(pageNumber)
            sessionStorage.setItem('currentPage', JSON.stringify(pageNumber))
        })
    }

    onFollowHandler = (followStatus: boolean, userId: number) => {
        followStatus ? this.props.unFollow(userId) : this.props.follow(userId)
    }

    render() {
        return <Users usersPage={this.props.usersPage} onPageChanged={this.onPageChanged}
                      onFollowHandler={this.onFollowHandler}/>
    }
}

export type mapStateToPropsType = {
    usersPage: usersPageDataType
}
const mapStateToProps = (state: stateType):mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
}
const mapDispatchToProps = (dispatch: Dispatch<dispatchActionType>):mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)