const initialState: usersPageDataType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(us => us.id === action.payload.userId ? {...us, followed: true} : us)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(us => us.id === action.payload.userId ? {...us, followed: false} : us)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.newUsers}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        default: {
            return state
        }
    }
}

//action creators
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (newUsers: userType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            newUsers
        }
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {totalUsersCount}
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

// types
export type userType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
export type usersPageDataType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type dispatchActionType =
    | followACType
    | unFollowACType
    | setUsersACType
    | setTotalUsersCountACType
    | setCurrentPageACType

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>