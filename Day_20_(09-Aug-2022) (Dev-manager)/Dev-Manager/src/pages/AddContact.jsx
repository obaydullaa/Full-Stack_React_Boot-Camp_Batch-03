import React from 'react'
import { ContactContext } from '../context/Contact.context'
import ContactForm from '../components/contacts/ContactForm'

function AddContact() {
  const {addContact} = React.useContext(ContactContext)

  return <ContactForm addContact={addContact} />
}

export default AddContact