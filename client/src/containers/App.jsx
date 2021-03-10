import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from '../store'
import RouteViews from './RouteViews'
import NavBar from './NavBar'

const App = () => {
    return <Provider store={store} >
        <Router >
            <NavBar />
            <RouteViews />
        </Router>
    </Provider >
}

export default App;