import { createContext, useContext, useEffect, useReducer, useState } from "react";
import contactsReducer from "./reduce";
import qs from 'qs';
import { DELETE_CONTACT, UPDATE_CONTACT, ADD_CONTACT, lOAD_CONTACTS } from "./types";
import { axiosPrivateInstance } from "../config/axios";
import { formateContact } from "../utils/formateContact";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./Auth.context";

// create context
export const ContactContext = createContext()

const initialContacts = [
    {
      id: '1',
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'Web Developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '2',
      firstName: 'Ignatius',
      lastName: 'McPhilip',
      email: 'imcphilip1@toplist.cz',
      profession: 'Software Developer',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '3',
      firstName: 'Fletch',
      lastName: 'Veel',
      email: 'fveel2@yellowbook.com',
      profession: 'Graphic Designer',
  
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '4',
      firstName: 'Shawn',
      lastName: 'Lawrenz',
      email: 'slawrenz3@independent.co.uk',
      profession: 'Data entry specialist',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id:' 5',
      firstName: 'Bucky',
      lastName: 'Casaccio',
      email: 'bcasaccio4@netlog.com',
      gender: 'male',
      profession: 'Data scientist',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '6',
      firstName: 'Regan',
      lastName: 'Lodford',
      email: 'rlodford5@nbcnews.com',
      profession: 'python Developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '7',
      firstName: 'Hubert',
      lastName: 'Langhorne',
      email: 'hlanghorne6@thetimes.co.uk',
      gender: 'male',
      profession: 'CPA Marketer',
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
  ]
  // create provider
  export const ContactProvider = ({children}) => {
    const [contacts, dispatch] = useReducer(contactsReducer, initialContacts)
    const [loaded, setLoaded] =useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [pageCount, setPageCount] = useState(null)
    const [trigger, setTrigger] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    const {token, user} = useContext(AuthContext)
    const navigate = useNavigate();
    
    // console.log(searchInput)
    useEffect(() => {
      if(token){
        ;(async () => {
          await loadedContacts()
        })()
      }
    },[token, pageNumber, trigger, searchInput])

    const loadedContacts = async () => {
      const query = qs.stringify({
        sort: ['id:desc'],
        populate: '*',
        pagination: {
          page: pageNumber,
          pageSize: import.meta.env.VITE_PAGE_SIZE,
        },
      },
      {
        encodeValuesOnly: true,
      }
      )

     try{
      const response = await axiosPrivateInstance(token).get(
        `/contacts?${query}`
      );
        console.log(response.data)
        const loadedContacts = response.data.data.map(contact => 
        formateContact(contact)
      )

        // console.log(response.data)
        dispatch({type: lOAD_CONTACTS, payload: loadedContacts})
        //set page count in state
        setPageCount(response.data.meta.pagination.pageCount)

        setLoaded(true)
      // console.log(response.data)
    
     }catch(err) {
      console.log(err.response)
     }
    }

    const deleteContact = async(id) => {
      try{
        const response = await axiosPrivateInstance(token).delete(`/contacts/${id}`)
        // console.log(response.data)
        dispatch({type: DELETE_CONTACT, payload: response.data.data.id})
        // triggering delete event
        setTrigger(!trigger)
        // show toast message 
        toast.success('Contact is deleted successfully')
        // Navigate
        // navigate=('/contacts')
      }catch(err){
        toast.error(err.response?.data?.error?.message)
        console.log(err.response)
      }
    }

      const updateContact = async (contactToUpdate, id) => {
        contactToUpdate = {
          author: user.id,
          ...contactToUpdate, 
        }
        try{
          //send request to the server
          // successfully response 
          const response = await axiosPrivateInstance(token).put(`/contacts/${id}?populate=*`, 
          {
            data: contactToUpdate,
          }
          )
          const contact = formateContact(response.data.data)
          //dispatch here
          dispatch({type:  UPDATE_CONTACT, payload: {id: contact.id, contact}})
          // //show flash message
          toast.success("Contact is Updated Successfully");
          // //redirect to contacts
          navigate(`/contacts/${contact.id}`); 
        }catch(err) {
          console.log(err.response?.data?.error?.message)
        }
      }
    
      const addContact = async(contactData) => {
        // contactData = { // it added in backend...
        //   // author: user.id,  
        //   ...contactData, 
        // }
        // console.log(contactData)
        let {file, ...data} = contactData
        // console.log(file)
        // console.log(data)
        const formData = new FormData()
        formData.append('files.profilePicture', file, file.name)
        formData.append('data', JSON.stringify(contactData))
        console.log(data)
        try {
          const response = await axiosPrivateInstance(token).post(
            "/contacts?populate=*", 
            formData,
          );
          const contact = formateContact(response.data.data)
          //dispatch here
          dispatch({type: ADD_CONTACT, payload: contact})
          // triggering add contact event
          setTrigger(!trigger)
          //show flash message
          toast.success("Contact is Added Successfully");
          //redirect to contacts
          navigate("/contacts");
        }catch(err) {
          toast.error(err.response?.data?.error?.message)
          console.log(err.response)
        }
      }

   const value = {
        loaded,
        contacts,
        deleteContact,
        updateContact,
        addContact,
        pageCount,
        pageNumber,
        setPageNumber,
        setSearchInput,
    }

    return  <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}