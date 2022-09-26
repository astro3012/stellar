import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import themes from './themes'
import { Container } from '@material-ui/core'

import Home from './components/Home'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar'
import ProtectedRoute, { ProtectedRouteProps } from './ProtectedRoute'
import { getUserLocalStorage } from './logic'
import { RootState } from './store'

const Routes: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
    console.log(getUserLocalStorage(), 'IN ROUTES')
    const defaultProtectedRouteProps: ProtectedRouteProps = {
        isAuthenticated: isAuth,
        authenticationPath: '/auth',
    }

    return (
        <Switch>
            <ProtectedRoute
                {...defaultProtectedRouteProps}
                exact
                path="/"
                component={Home}
            />
            <Route path="/auth" exact component={Auth} />
        </Switch>
    )
}

const App = () => {
    const user = useSelector((state: RootState) => state.auth.authData)
    // const [isAuth, setIsAuth] = useState(Boolean(user))

    // useEffect(() => {
    //     console.log('User changed')
    //     setIsAuth(Boolean(user))
    // }, [user])

    return (
        <BrowserRouter>
            <ThemeProvider theme={themes.deepBlue}>
                <Container maxWidth="lg">
                    <Navbar />
                    <Routes isAuth={Boolean(user)} />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
