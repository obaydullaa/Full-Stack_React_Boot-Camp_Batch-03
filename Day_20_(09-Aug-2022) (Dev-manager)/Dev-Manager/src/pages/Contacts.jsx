import React from 'react'
import Contact from '../components/contacts/Contact'
import Loader from '../components/Loader'
import { ContactContext } from '../context/Contact.context'

export default function Contacts({deleteContact}) {
  const {contacts, loaded} = React.useContext(ContactContext)
  return (
    <>
      <h2 className='text-center'>All Contacts</h2>
      {loaded ? contacts.map((contact) => (
        <Contact key={contact.id} contact={contact}/>
      )): <Loader/>}
    </>
  )
}
