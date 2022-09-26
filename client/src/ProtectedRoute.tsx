import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export type ProtectedRouteProps = {
    isAuthenticated: boolean
    authenticationPath: string
} & RouteProps

const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {
    const { isAuthenticated, authenticationPath, ...routeProps } = props

    if (isAuthenticated) {
        return <Route {...routeProps} />
    } else {
        return <Redirect to={{ pathname: authenticationPath }} />
    }
}

export default ProtectedRoute
