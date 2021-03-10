import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from "../store/actions"

const NavBar = ({ logout }) => {
    return <div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <a onClick={logout}>Logout</a>
                </li>
            </ul>
        </div>
    </div>
}

export default connect(() => ({}), { logout })(NavBar)
