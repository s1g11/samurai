import React from 'react';
import s from './Users.module.css'
import {User} from "./User/User";
import {mapStateToPropsType} from "./UsersContainer";

type PropsType = mapStateToPropsType & {
    onPageChanged: (pageNumber: number) => void
    onFollowHandler: (followStatus:boolean, userId: number) => void
}

export const Users = (props: PropsType) => {

    const currentPage = props.usersPage.currentPage
    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    const fourthPageClassName = s.PaginatorItem + ' ' + (currentPage >= 4 && currentPage !== pagesCount && s.active)
    const fourthPageNumber = currentPage > 4 && currentPage !== pagesCount ? currentPage : 4

    return (
        <div className={s.users}>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <User onFollowHandler={props.onFollowHandler} userData={u}/>
                </div>)
            }
            <div className={s.Paginator}>
                <button disabled={currentPage === 1} onClick={() => props.onPageChanged(currentPage-1)}>{'<'}</button>
                <div className={s.PaginatorItem + ' ' + (currentPage === 1 && s.active)} onClick={() => props.onPageChanged(1)}>1</div>
                <div className={s.PaginatorItem + ' ' + (currentPage === 2 && s.active)} onClick={() => props.onPageChanged(2)}>2</div>
                <div className={s.PaginatorItem + ' ' + (currentPage === 3 && s.active)} onClick={() => props.onPageChanged(3)}>3</div>
                <div className={fourthPageClassName} onClick={() => props.onPageChanged(fourthPageNumber)}>{fourthPageNumber}</div>
                <div className={s.dots}>...</div>
                <div className={s.PaginatorItem + ' ' + (currentPage === pagesCount && s.active)} onClick={() => props.onPageChanged(pagesCount)}>{pagesCount}</div>
                <button disabled={currentPage === pagesCount} onClick={() => props.onPageChanged(currentPage+1)}>{'>'}</button>
            </div>
        </div>
    )
}