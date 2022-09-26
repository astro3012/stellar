import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { IPost } from '../../types/post'
import moment from 'moment'

interface RootState {
    posts: IPost[]
}

type ID_TYPE = string | null | undefined

const Form = ({
    currentId,
    setCurrentId,
}: {
    currentId: ID_TYPE
    setCurrentId: React.Dispatch<React.SetStateAction<ID_TYPE>>
}) => {
    const [postData, setPostData] = useState<IPost>({
        title: '',
        message: '',
        name: '',
        createdBy: '',
        tags: [''],
        selectedFile: '',
        stars: [],
        createdAt: moment.now(),
    })
    const post = useSelector((state: RootState) =>
        currentId ? state.posts.find((p: IPost) => p._id == currentId) : null,
    )
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile') || 'null')

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        currentId
            ? dispatch(
                  updatePost(currentId, {
                      ...postData,
                      name: user?.result?.name,
                  }),
              )
            : dispatch(
                  createPost({
                      ...postData,
                      name: user?.result?.name,
                  }),
              )

        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            title: '',
            message: '',
            name: '',
            createdBy: '',
            tags: [''],
            selectedFile: '',
            stars: [],
            createdAt: moment.now(),
        })
    }

    if (!user) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to stellar.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.form} ${classes.root}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? 'Edit' : 'Create'} a post
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={e =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={e =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={e =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(','),
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }: { base64: string }) =>
                            setPostData({
                                ...postData,
                                selectedFile: base64,
                            })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth
                    color="primary"
                >
                    Liftoff
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    color="secondary"
                    onClick={clear}
                >
                    Reset
                </Button>
            </form>
        </Paper>
    )
}

export default Form
