import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from "react-toastify"
import { axiosPublicInstance } from "../config/axios"


export const AuthContext = React.createContext()
    const loadedUser = JSON.parse(localStorage.getItem('user'))
    const loadedToken = JSON.parse(localStorage.getItem('token'))

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(loadedUser ? loadedUser : null)
    const [token, setToken] = useState(loadedToken ? loadedToken : null)
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)

    const registerUser = async (data) => {
        try {
            const response = await axiosPublicInstance.post(
                '/auth/local/register', 
                data
                )

            const {user, jwt} = response.data
            // setting data to the localStorage
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))
            // update state
            setUser(user)
            setToken(jwt)

            toast.success('Registration successfully redirecting...')

            //Redirecting the user
            navigate('/contacts')
            console.log(response.data)
        } catch (err){
            toast.error(err.response?.data?.error?.message)
        }
        
    }

    const login = async (data) => {
        try {
            const response = await axiosPublicInstance.post(
                '/auth/local',data)

            const {user, jwt} = response.data
            // setting data to the localStorage
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))
            // update state
            setUser(user)
            setToken(jwt)

 
            console.log(response.data)
        } catch (err){
            toast.error(err.response?.data?.error?.message)
        }
    }

    const logout = () => {
        // remove data from localStorage
        
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        // remove data from state
        setUser(null)
        setToken(null)

        toast.success('Logout successfully redirecting...')
        navigate('/')
    }

    const value = {
        registerUser,
        login,
        logout,
        user,
        token,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 
