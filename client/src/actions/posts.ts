import { Dispatch } from 'redux'
import * as api from '../api'
import { GET_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes'
import { IPost } from '../types/post'

//Action creator methods
export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPosts()
        dispatch({
            type: GET_ALL,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post: IPost) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: CREATE,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id: string, post: IPost) => async (
    dispatch: Dispatch,
) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({
            type: UPDATE,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id: string | undefined) => async (
    dispatch: Dispatch,
) => {
    try {
        await api.deletePost(id)
        dispatch({
            type: DELETE,
            payload: id,
        })
    } catch (error) {
        console.log(error)
    }
}

export const starPost = (id: string | undefined) => async (
    dispatch: Dispatch,
) => {
    try {
        const { data } = await api.starPost(id)
        dispatch({
            type: UPDATE,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
