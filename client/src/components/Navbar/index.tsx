import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'
import { getUserLocalStorage } from '../../logic'
import useStyles from './styles'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'

interface UserType {
    name: string
    imageUrl: string
}

interface jwtToken {
    name: string
    exp: number
}

const SignOutComponent: React.FC<{
    loggedInUser: UserType
    logoutHandler: any
}> = ({ loggedInUser, logoutHandler }) => {
    return (
        <>
            <Avatar alt={loggedInUser.name} src={loggedInUser.imageUrl}>
                {loggedInUser.name.charAt(0)}
            </Avatar>
            <Typography variant="h6">{loggedInUser.name}</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={logoutHandler}
            >
                Sign Out
            </Button>
        </>
    )
}

const Navbar: React.FC = () => {
    const classes = useStyles()
    const [user, setUser] = useState(getUserLocalStorage)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    console.log(user)

    const logout = () => {
        dispatch({ type: LOGOUT })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        if (token) {
            const decodedToken = decode<jwtToken>(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        }

        setUser(getUserLocalStorage)
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h4"
                >
                    stellar
                </Typography>
                {user ? (
                    <SignOutComponent
                        loggedInUser={user.result}
                        logoutHandler={logout}
                    />
                ) : (
                    <>
                        <Button
                            component={Link}
                            to="/auth"
                            variant="contained"
                            color="secondary"
                        >
                            Sign In
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
