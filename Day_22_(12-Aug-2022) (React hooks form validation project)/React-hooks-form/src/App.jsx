import { useState } from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='mt-5'>
      <ContactForm/>
    </Container>
  )
}

export default App
