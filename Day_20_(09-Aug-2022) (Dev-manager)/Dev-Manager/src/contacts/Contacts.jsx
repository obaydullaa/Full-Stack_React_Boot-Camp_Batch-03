import React from 'react'
import Contact from './Contact'

export default function Contacts({contacts, deleteContact}) {
  return (
    <>
      <h2 className='text-center'>All Contacts</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
      ))}
    </>
  )
}
