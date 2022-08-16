import React from 'react'

import {Button, Navbar, Container, Nav, Form, NavDropdown} from 'react-bootstrap';


export default function Header() {
  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#" className='brand'>Dev Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Contacts</Nav.Link>
                <Nav.Link href="#action2">Register</Nav.Link>
                <Nav.Link href="#" disabled>
                    Contacts
                </Nav.Link>
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
