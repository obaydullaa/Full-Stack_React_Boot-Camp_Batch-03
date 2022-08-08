import BaseComponent from 'bootstrap/js/dist/base-component'
import { useState } from 'react'
import {Container, Button, Nav, Navbar, NavDropdown, Alert,} from 'react-bootstrap'
import './App.css'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="light" variant='light'  expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && (<Alert className='mt-5' dismissible onClose={() => setShow(false)}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
      </Alert>)}
      <Button onClick={() => setShow(true)}>Show Alert</Button>;
    </>
  )
}

export default App
