import { AUTH, LOGOUT } from '../constants/actionTypes'
import { getUserLocalStorage } from '../logic'

type AuthActionType =
    | { type: typeof AUTH; data: any }
    | { type: typeof LOGOUT; data: any }

export default (
    state = { authData: getUserLocalStorage() },
    action: AuthActionType,
) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state
    }
}
