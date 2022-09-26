import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { IPost } from '../../types/post'

interface RootState {
    posts: IPost[]
}

const Posts = ({
    setCurrentId,
}: {
    setCurrentId: React.Dispatch<
        React.SetStateAction<null | string | undefined>
    >
}) => {
    const posts = useSelector((state: RootState) => state.posts)
    const classes = useStyles()

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.mainContainer}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map((post: IPost) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Posts
