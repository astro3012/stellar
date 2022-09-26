import { GET_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes'
import { IPost } from '../types/post'

type PostActionType =
    | { type: typeof GET_ALL; payload: IPost[] }
    | { type: typeof CREATE; payload: IPost[] }
    | { type: typeof UPDATE; payload: IPost }
    | { type: typeof DELETE; payload: string }

export default (posts: IPost[] = [], action: PostActionType) => {
    switch (action.type) {
        case GET_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload]
        case UPDATE:
            return posts.map((post: IPost) =>
                post._id == action.payload._id ? action.payload : post,
            )
        case DELETE:
            return posts.filter((post: IPost) => post._id != action.payload)
        default:
            return posts
    }
}
