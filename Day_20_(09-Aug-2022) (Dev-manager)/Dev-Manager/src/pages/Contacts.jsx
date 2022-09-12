import React from 'react'
import { useEffect } from 'react'
import { Pagination } from 'react-bootstrap'
import Contact from '../components/contacts/Contact'
import Loader from '../components/Loader'
import { ContactContext } from '../context/Contact.context'

const generateArr = (num) => {
  const arr = [];
  for(let i = 1; i <=num; i++){
    arr.push(i)
  }
  return arr;
}

export default function Contacts({deleteContact}) {
  const {contacts, loaded, pageNumber, pageCount, setPageNumber} = React.useContext(ContactContext)
  const pageCountArray = generateArr(pageCount)
  const isPageErrorOfBound = pageCount ? pageNumber > pageCount : false;
  
  useEffect(() => {
    if(isPageErrorOfBound){
      setPageNumber(pageNumber - 1)
    }
  })

  const handlePageClick = (evt) => {
    setPageNumber(evt.target.dataset.count)
  }

  return (
    <>
      <h2 className='text-center'>All Contacts</h2>
      {loaded ? ( 
      <> 
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact}/>
        ))}
          <Pagination style={{justifyContent: 'center'}}>
            {pageCountArray.map((count, index) => {
              return (
                <Pagination.Item 
                  key={index}
                  active={count === pageNumber}
                  data-count={count}
                  onClick={handlePageClick}
                 >
                  {count}
              </Pagination.Item>
              )
            })}
          </Pagination>

      </>

      ): (<Loader/>)}
    </>
  )
}
