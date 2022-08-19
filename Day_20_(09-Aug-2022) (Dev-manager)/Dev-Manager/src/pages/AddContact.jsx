import React from 'react'
import ContactForm from '../components/contacts/ContactForm'

function AddContact({addContact}) {
  return <ContactForm addContact={addContact} />
}

export default AddContact