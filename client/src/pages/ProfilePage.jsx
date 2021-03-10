import React from 'react'
import { Redirect } from 'react-router-dom';

import ErrorMessage from "../components/ErrorMessage"
import api from "../services/api"

const ProfilePage = ({ user }) => {
    return <>
        <ErrorMessage />
        Hello everyone
        <div>{user.username}</div>
    </>
}

export default ProfilePage