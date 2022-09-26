import axios from 'axios'
import { IPost } from '../types/post'

const API = axios.create({ baseURL: 'http://localhost:5000/' })

API.interceptors.request.use(req => {
    const userProfile = localStorage.getItem('profile')
    if (userProfile) {
        req.headers.authorization = `Bearer ${JSON.parse(userProfile).token}`
    }

    return req
})

// const url = 'https://celeste-project.herokuapp.com/posts'

export const getPosts = () => API.get('/posts')

export const createPost = (newPost: IPost) => API.post('/posts', newPost)

export const updatePost = (id: string, updatedPost: IPost) =>
    API.patch(`/posts/${id}`, updatedPost)

export const deletePost = (id: string | undefined) => API.delete(`/posts/${id}`)

export const starPost = (id: string | undefined) =>
    API.patch(`/posts/${id}/starPost`)

export const signIn = (formData: any) => API.post('/user/signIn', formData)

export const signUp = (formData: any) => API.post('/user/signUp', formData)
