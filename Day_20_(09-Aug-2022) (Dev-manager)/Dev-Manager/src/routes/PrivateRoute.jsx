import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth.context'
import {Navigate, useLocation} from 'react-router-dom'

function PrivateRoute({children}) {
    // Logic
    const {user} = useContext(AuthContext)
    const loadedComp = user ? children: <Navigate to='/login' state={{from: location.pathname }}/>

  return <div>{loadedComp}</div>
}

export default PrivateRoute