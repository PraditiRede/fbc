import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import ProfilePage from '../pages/ProfilePage'

const RouteViews = ({ auth }) => {
    return <main>
        <Switch>
            <Route
                exact
                path="/"
                render={(props) => <HomePage />}
            />
            <Route
                exact
                path="/register"
                render={() => <AuthPage authType="register" isAuthenticated={auth.isAuthenticated} />}
            />
            <Route
                exact
                path="/login"
                render={() => <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />}
            />
            <Route
                exact
                path="/profile"
                render={() => <ProfilePage user={auth.user} />}
            />
        </Switch>
    </main>
}

export default withRouter(connect((store) => ({ auth: store.auth }))(RouteViews))