import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

function PublicRoute({children}) {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    const loadedComp = user ? <Navigate to={location?.state?.from ? location?.state?.from : '/contacts'}/> : children
  return <div>{loadedComp}</div>
}

export default PublicRoute