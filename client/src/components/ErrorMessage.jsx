import React from "react";
import { connect } from 'react-redux'

const ErrorMessage = ({ error }) => {
    return <>
        <>{error.message && <div>{error.message}</div>}</>
    </>
}

export default connect(store => ({ error: store.error }))(ErrorMessage)