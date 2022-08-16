import React from 'react'
import {Button, Navbar, Container, Nav, Form, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'

export default function Header() {
  return (
    <>  
        <Navbar bg="light" expand="sm">
            <Container fluid>
            <Navbar.Brand to='/' as={Link} className='brand'>Dev Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link as={NavLink} to='/contacts' >Contacts</Nav.Link>
                    <Nav.Link as={NavLink} to='/add-contact' >Add Contact</Nav.Link>
                    <Nav.Link as={NavLink} to='/register' >Register</Nav.Link>
                    <Nav.Link as={NavLink} to='/login' >Login</Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
