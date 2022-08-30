import { v4 as uuidv4 } from 'uuid'
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, lOAD_CONTACTS } from "./types"

const contactsReducer = (state, action) => {
    //state = initialContacts
    //action = {type: 'DELETE_CONTACT', payload: id}  (dispatch)
    const {type, payload} = action
    switch (type){
      case lOAD_CONTACTS:
        return [...action.payload]
      case DELETE_CONTACT:
      const updatedContacts = state.filter(
        (contact) => contact.id !== action.payload
      )
      return [...updatedContacts]

      case ADD_CONTACT: 
      const newContact = {
        ...payload,
      }
      return [newContact, ...state ]

      case UPDATE_CONTACT:
      const {id, contact: contactToUpdate} = payload;
      const contacts = state.map(contact => {
        if(contact.id === id) {
          //Update
          return {
            id,
            ...contactToUpdate,
          }
        }else {
          return contact;
        }
      })
      return [...contacts]

      default:
        return state;
    }
  }

  export default contactsReducer;