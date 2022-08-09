import React from 'react'
import { useState } from 'react'

import {Form, Button, Col, Row} from 'react-bootstrap'

export default function AddContact({addContact}) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        bio: '',
        dateOfBirth: new Date(),
        gender: 'male',
        image: '',
    })
    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name]: evt.target.value,
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(contact)
        // checking validation


        //Form Submission
        addContact(contact)
    }

    const {firstName, lastName, email, profession, bio, dateOfBirth, gender, image} = contact
  return (
    <>
        <h2 className='text-center mb-5'>Add Contact</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='firstName' column>
                        First Name
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="FistName"
                    id='firstName' 
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='lastName' column>
                        LastName
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="LastName"
                    id='lastName' 
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='email' column>
                        Email
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="email" 
                    placeholder="Email"
                    id='email' 
                    name='email'
                    value={email}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='profession' column>
                    Profession
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="Profession"
                    id='profession' 
                    name='profession'
                    value={profession}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='image' column>
                    Profile Picture
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter link of your profile picture"
                    id='image' 
                    name='image'
                    value={image}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='dateOfBirth' column>
                        Date Of Birth
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="date" 
                    placeholder="dateOfBirth"
                    id='dateOfBirth' 
                    name='dateOfBirth'
                    value={dateOfBirth}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='firstName' column>
                        Gender
                    </Form.Label>
                </Col>
                <Col xs='auto'>
                    <Form.Check
                    type="radio" 
                    name='gender'
                    label='Male'
                    value='male'
                    checked={gender === 'male'}
                    onChange={handleChange}
                    />
                    </Col>
                    <Col xs='auto'>     
                    <Form.Check
                    type="radio" 
                    label='Female'
                    name='gender'
                    value='female'
                    checked={gender === 'female'}
                    onChange={handleChange}
                    />  
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='dateOfBirth' column>
                        Bio
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    as='textarea'
                    type="text" 
                    placeholder="Bio"
                    id='bio' 
                    name='bio'
                    value={bio}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Button className='text-center' variant='primary' size='md' type='submit'>
                Add Contact
            </Button>
        </Form>
    </>
  )
}
