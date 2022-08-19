import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import {useParams} from 'react-router-dom'

function EditContact({contacts, updateContact}) {
  const params = useParams()
  const {id} = params
  const foundContact = contacts.find((contact) => contact.id === id)

  return <ContactForm contact={foundContact} updateContact={updateContact} />
}

export default EditContact;