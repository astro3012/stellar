import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    IconButton,
} from '@material-ui/core'
import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login'
import GoogleIcon from './googleIcon'
import { LockOutlined } from '@material-ui/icons'
import Input from './Input'
import { signIn, signUp } from '../../actions/auth'

import useStyles from './styles'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isSignUp) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const isLoginResponseOffline = (
        res: any,
    ): res is GoogleLoginResponseOffline => res.hasOwnProperty('code')

    const googleSuccess = async (
        res: GoogleLoginResponse | GoogleLoginResponseOffline,
    ) => {
        if (isLoginResponseOffline(res)) {
            return ''
        }

        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (failResponse: { error: string }) => {
        console.log('Unable to sign in with Google. Please try again.')
        console.log(failResponse.error)
    }
    const switchMode = () => {
        setIsSignUp(prevSignUp => !prevSignUp)
        setShowPassword(false)
    }

    const handleShowPassword = () =>
        setShowPassword(prevShowPassword => !prevShowPassword)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} justify="center">
                        {isSignUp && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Grid item sm={12}>
                            <Input
                                name="email"
                                label="E-mail"
                                handleChange={handleChange}
                                type="email"
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Input
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            {isSignUp && (
                                <Input
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    handleChange={handleChange}
                                    type="password"
                                />
                            )}
                        </Grid>
                        <Grid item sm={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disableElevation
                                className={classes.submit}
                            >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Button>
                        </Grid>
                        <Grid item>
                            <GoogleLogin
                                clientId="10561569054-9msvhp8ijkgnlfqc5be18cvkjsv79io9.apps.googleusercontent.com"
                                render={renderProps => (
                                    <IconButton
                                        aria-label="google-sign-in"
                                        className={classes.googleButton}
                                        color="primary"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <GoogleIcon />
                                    </IconButton>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                        </Grid>
                        <Grid container justify="center">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp
                                        ? 'Already have an account? Sign In'
                                        : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
