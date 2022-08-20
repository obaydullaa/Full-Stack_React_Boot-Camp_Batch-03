import React from 'react'
import { ContactContext } from '../context/Contact.context'
import Contact from '../components/contacts/Contact'

export default function Contacts({deleteContact}) {
  const {contacts} = React.useContext(ContactContext)
  return (
    <>
      <h2 className='text-center'>All Contacts</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
      ))}
    </>
  )
}
