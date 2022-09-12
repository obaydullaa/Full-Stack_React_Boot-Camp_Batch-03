import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import qs from 'qs';
import { axiosPrivateInstance } from '../config/axios'
import { AuthContext } from '../context/Auth.context'
import { formateContact } from '../utils/formateContact';
import Loader from '../components/Loader';

function Search({searchInput}) {
    const {token} = useContext(AuthContext)
// send API Request
const [searchResults, setSearchResults] = useState(null)
const [loaded, setLoaded] = useState(false)

useEffect(() => {
    if(searchInput){
        (async() => {
            await getResult()
        })()
    }else {
        setLoaded(true)
    }
},[searchInput])

async function getResult() {
    const query = qs.stringify({
        filters: {
           $or: [
               {
                   firstName: {
                       $contains: searchInput,
                   },
               },
               {
                   lastName: {
                       $contains: searchInput,
                   },
               },
               {
                   bio: {
                       $contains: searchInput,
                   },
               },
           ],
       },
    })
    try{
        const response = await axiosPrivateInstance(token).get(
            `/contacts?${query}`
        )
            const data = response.data.data.map((contact) => formateContact(contact))
            setLoaded(true)
            console.log(data)
            setSearchResults(data)
        }
        catch(err){
            console.log(err.response)
            setLoaded(true)
        }
    }

  return (
    <>
        <h2>Searching for {searchInput}...</h2>
        {loaded ?  
            searchResults > 0 ? 
            searchResults.map((contact, index) => (
                <h2 key={index}> {contact.firstName}{contact.lastName}</h2>
            )) :
            <p>No Results Found</p> 
             : <Loader /> 
        }
    </>
  )
}

export default Search