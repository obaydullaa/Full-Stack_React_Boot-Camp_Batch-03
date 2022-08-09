/**
 * Date: 09-08-2022
 * =======================
 * Dev Manager :
 *  CRUD
 *  Form Handling
 *  Remote API server connection and handling
 *  Routing
 *  Context API
 *  Authentication (Registration, Login, Logout)
 *  Advance login - forgot-password, password-reset, email - sending
 *  Image-upload, pagination
 *  Search Functionality
 *  Securely identify the user (Authorization)
 * 
 */

App.jsx ->
==============
1. We get contact info :

    const initialContacts = [
    {
      id: 1,
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'Web Developer',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: '05/11/2021',
      bio: 'All About me',
    },
    {
      id: 2,
      firstName: 'Ignatius',
      lastName: 'McPhilip',
      email: 'imcphilip1@toplist.cz',
      profession: 'Software Developer',
  
      gender: 'Male',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      dateOfBirth: '04/04/2022',
      bio: 'All About me',
    },
    {
      id: 3,
      firstName: 'Fletch',
      lastName: 'Veel',
      email: 'fveel2@yellowbook.com',
      profession: 'Graphic Designer',
  
      gender: 'Male',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      dateOfBirth: '17/05/2022',
      bio: 'All About me',
    },
    {
      id: 4,
      firstName: 'Shawn',
      lastName: 'Lawrenz',
      email: 'slawrenz3@independent.co.uk',
      profession: 'Data entry specialist',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/80.jpg',
      dateOfBirth: '30/07/2022',
      bio: 'All About me',
    },
    {
      id: 5,
      firstName: 'Bucky',
      lastName: 'Casaccio',
      email: 'bcasaccio4@netlog.com',
      gender: 'Male',
      profession: 'Data scientist',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dateOfBirth: '21/03/2022',
      bio: 'All About me',
    },
    {
      id: 6,
      firstName: 'Regan',
      lastName: 'Lodford',
      email: 'rlodford5@nbcnews.com',
      profession: 'python Developer',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      dateOfBirth: '16/01/2022',
      bio: 'All About me',
    },
    {
      id: 7,
      firstName: 'Hubert',
      lastName: 'Langhorne',
      email: 'hlanghorne6@thetimes.co.uk',
      gender: 'Male',
      profession: 'CPA Marketer',
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      dateOfBirth: '05/02/2022',
      bio: 'All About me',
    },
  ]
2. tracking this info we get state -> const [contacts, setContacts] = useState(initialContacts)
3. For organized Create folder: "contacts" folder -> Contacts.jsc
  App.jsx -:
  ==========
  function App() {
    const [contacts, setContacts] = useState(initialContacts)
    return (
      <div>
       <Contacts contacts={contacts}/>
      </div>
    )
  }
  
  export default App
  
  4. এখন আমরা contacts গুলো দেখাবো এই জন্য লুপ করব। যেহেতু লুপ এবং পেজিনেশন করব সেই জন্য আমরা আরেকটা contact নামে কম্পোনেট নিব । সেখানে contact গুলো রাখব ।  
    Contacts.jsx
    ==================
    import React from 'react'
    import Contact from './Contact'

    export default function Contacts({contacts}) {
    return (
        <>
        {contacts.map((contact) => (
            <Contact key='contact.id' contact={contact}/>
        ))}
        </>
    )
    }

    Contact.jsx:
    ====================
    import React from 'react'

    export default function Contact({contact}) {
        console.log(contact)
    return (
        <div>Contact</div>
    )
    }

    // এখন আমরা ব্রাউজারে দেখব contact 7 বার দেখিয়েছে কারণ আমাদের 7 ডাটা আছে ।
5. এখন আমরা src folder এর মধ্য 'layout' folder নিয়ে এর মধ্য Header.jsx নামের ফাইল নিব । react bootstrap থেকে NabBar কপি করে  Header.jsx এর মধ্য পেস্ট করে দিব । 
App.jsx:
import { useState } from 'react'

import Contacts from './contacts/Contacts'
import Header from './layouts/Header';

function App() {
  const [contacts, setContacts] = useState(initialContacts)

  return (
    <div>
      <Header/>
      <Contacts contacts={contacts}/>
    </div>
  )
}

export default App


Heapder.jsx:
=============
import React from 'react'

import {Button, Navbar, Container, Nav, Form, NavDropdown} from 'react-bootstrap';


export default function Header() {
  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#" disabled>
                    Link
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

6. Add font family and text center and some style add
7. Add card markup from card react bootstrap in Contact.jsx
    and dynamically show contacts info
8. add react icons cmd -> yarn add react-icons

Contact.jsx:
=================


import React from 'react'

import {Button, Card, ListGroup} from 'react-bootstrap'
import {FaEye, FaRegTrashAlt} from 'react-icons/fa'

export default function Contact({contact}) {
    console.log(contact)
    const {firstName, lastName, email, profession, gender, image, dateOfBirth, bio} = contact
  return (
    <>
        <Card className='mb-4'>
            <div className='d-flex'>
                <Card.Img className='card-img' src={image} />
                    <Card.Body>
                        <Card.Title>
                          <span className='text-dark'>{firstName} {lastName}</span>
                        </Card.Title>
                        <Card.Subtitle className='mb-3 text-muted'>{profession}</Card.Subtitle>
                        <Card.Text>{bio}</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                            <ListGroup.Item>Email: {email}</ListGroup.Item>
                            <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
                        </ListGroup>
                        <div className="card-btn mt-3">
                            <Card.Link href="#">
                                <Button variant='warning ms-3' size='md' type='view'>
                                    <FaEye />
                                </Button>
                                <Button variant='danger ms-3' size='md' type='view'>
                                    <FaRegTrashAlt />
                                </Button>
                            </Card.Link>
                        </div>
                    </Card.Body>
            </div>
        </Card>
    </>
  )
}

9.এখন আমরা ডিলিট আইকোনে ক্লিক করলে ডিলেইট হয়ে যাবে সেটা করতে হলে id ধরতে হবে । onClick eventlistener add করব। আমাদের ডাটা রয়েছে App.jsx ফাইলে তাই আমরা App.jsx ফাইলে ফাংশন নিব । এবং সেখান থেকে props হিসাবে ডাটা পাঠিয়ে দিব । 
App.jsx :
===========
function App() {
  const [contacts, setContacts] = useState(initialContacts)

  const deleteContact = (id) => { // this
    console.log(id)
  }

  return (
    <>
      <Header/>
      <Container style={{width: '800px', margin: '0 auto'}} className='pt-5'> 
        <Contacts contacts={contacts} deleteContact={deleteContact}/> // this
      </Container>
    </>
  )
}
ফাইনালি Contact.jsx এর মধ্য callback function নিব । যেন সরাসরি কল না হয়ে যায় । 

আমরা id পেয়েগিয়েছি । এখন আমরা যে id পেয়েছি সেটা বাদে বাকি গুলো contacts state এর মধ্য সেট করে দিব । আমরা ডিরেক্ট মডিফাই করতে পারি । এর জন্য আমরা slice use করতে পারি । আমরা জানি  slice অরিজিনিয়াল array কে ডিরেক্ট মডিফাই করে দেয় । কিন্তু আমরা কখনই অরিজিনিয়াল ডাটা কে মডিফাই করব না । তাহলে আমরা aray helper method use করতে পারি । এর মধ্য আমরা filter use করতে পারি । যে আইটেমটার id আসতেছে সেটা বাদে বাকি আইটেম গুলোকে filter করে contact এ সেট করে দিব। contact এ সেটা হওয়া মানে আবার component new করে রিলোড হবে । 


