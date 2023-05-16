import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {isLoggedIn}=useSelector(state=>state.auth)
    if (isLoggedIn) {
        return (
                <Component />
        )
    } else {
        return <Navigate to={"/"} /* to={{ pathname: '/', state: { from: location } }} */ />
    }
}
export default ProtectedRoute;
