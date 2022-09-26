import React from 'react'
import useStyles from './styles'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    CardHeader,
    Avatar,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import pluralize from 'pluralize'
import { useDispatch } from 'react-redux'
import { deletePost, starPost } from '../../../actions/posts'
import { IPost } from '../../../types/post'
import { GradeOutlined, Grade } from '@material-ui/icons'

const Post = ({
    post,
    setCurrentId,
}: {
    post: IPost
    setCurrentId: React.Dispatch<
        React.SetStateAction<string | null | undefined>
    >
}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('profile') || 'null')

    const Stars = () => {
        const { stars } = post
        if (stars.length > 0) {
            return stars.find(
                star => star === user?.result?.googleId || user?.result?._id,
            ) ? (
                <>
                    <Grade fontSize="small" />
                    &nbsp;
                    {stars.length >= 2
                        ? `You and ${stars.length - 1} ${pluralize(
                              'other',
                              stars.length - 1,
                          )}`
                        : `${stars.length} ${pluralize('star', stars.length)}`}
                </>
            ) : (
                <>
                    <GradeOutlined fontSize="small" />
                    &nbsp;{`${stars.length} ${pluralize('star', stars.length)}`}
                </>
            )
        }

        return (
            <>
                <GradeOutlined fontSize="small" />
                &nbsp;Star
            </>
        )
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                }
                action={
                    (user?.result?.googleId === post?.createdBy ||
                        user?.result?._id === post?.createdBy) && (
                        <IconButton
                            onClick={() => setCurrentId(post._id)}
                            aria-label="settings"
                        >
                            <EditIcon />
                        </IconButton>
                    )
                }
                title={post.name}
                subheader={moment(post.createdAt).fromNow()}
            />
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag: string) => `#${tag} `)}
                </Typography>
            </div>

            <CardContent style={{ paddingTop: '0px' }}>
                <Typography variant="h5" gutterBottom component="h2">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button
                    color="primary"
                    size="small"
                    onClick={() => dispatch(starPost(post._id))}
                    disabled={!user?.result}
                >
                    <Stars />
                </Button>
                {user?.result?.googleId === post?.createdBy ||
                    (user?.result?._id === post?.createdBy && (
                        <Button
                            color="primary"
                            size="small"
                            onClick={() => dispatch(deletePost(post._id))}
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    ))}
            </CardActions>
        </Card>
    )
}

export default Post
