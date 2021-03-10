import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authUser, logout } from '../store/actions'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: "",
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        const { password, username } = this.state
        const { authType } = this.props
        e.preventDefault()
        this.props.authUser(authType || "login", { username, password })
    }

    render() {
        const { password, username } = this.state

        return <div>
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="off"
                    onChange={this.handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={this.handleChange}
                />
                <div>
                    <button type="submit">{this.props.authType}</button>
                </div>
            </form>
        </div>
    }
}

export default connect(() => ({}), { authUser, logout })(Auth)