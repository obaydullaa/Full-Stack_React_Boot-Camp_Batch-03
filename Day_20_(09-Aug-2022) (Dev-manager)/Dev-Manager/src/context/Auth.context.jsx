import React, {createContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from "react-toastify"
import { axiosPublicInstance, axiosPrivateInstance } from "../config/axios"
import axios from "axios"


export const AuthContext = React.createContext()
    const loadedUser = JSON.parse(localStorage.getItem('user'))
    const loadedToken = JSON.parse(localStorage.getItem('token'))

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(loadedUser ? loadedUser : null)
    const [triggerDelete, setTriggerDelete] = useState(false)
    const [userContacts, setUserContacts] = useState(null)
    const [loaded, setLoaded] = useState(false)
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
    
    useEffect(() => {
        if(user) {
            (async() => {
                await loadUserContact();
            })()
        }
    }, [user, triggerDelete])

    const loadUserContact = async () => {
        try{
            const response = await axiosPrivateInstance.get('/users/me?populate=contacts')
            console.log(response.data)
            setUserContacts(response.data.contacts)
            setLoaded(true); 
        }catch(err) {
            console.log(err.response)
            setLoaded(true);
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
        setTriggerDelete,
        loaded,
        userContacts,
        registerUser,
        login,
        logout,
        user,
        token, 
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 
