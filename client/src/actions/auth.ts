import { Dispatch } from 'redux'
import * as api from '../api'
import { AUTH } from '../constants/actionTypes'
import { useHistory } from 'react-router-dom'

export const signIn = (formData: any, history: any) => async (
    dispatch: Dispatch,
) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data })

        console.log(data, 'IS HISTORY PUSHED')
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData: any, history: any) => async (
    dispatch: Dispatch,
) => {
    try {
        const { data } = await api.signUp(formData)

        dispatch({ type: AUTH, data })

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
