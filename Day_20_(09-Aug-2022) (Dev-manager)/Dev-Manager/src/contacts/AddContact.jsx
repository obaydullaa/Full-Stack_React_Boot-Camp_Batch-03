import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Form, Button, Col, Row} from 'react-bootstrap'
import * as yup from 'yup';
import { useEffect } from 'react';

const schema = yup.object({
    firstName: yup
    .string()
    .required('FistName is Required')
    .min(3, 'FistName must be 3 or more in length'),
    lastName: yup
    .string()
    .required('LastName is Required')
    .min(3, 'LastName must be 3 or more in length'),
    email: yup
    .string()
    .required('Email is Required')
    .email('Must be a valid email'),
    profession: yup
    .string()
    .required('Profession is Required')
    .min(3, 'Profession must be 3 or more in length'),
    bio: yup
    .string()
    .required('Bio is Required')
    .min(10, 'Bio must be 10 or more in length')
    .max(300, 'Bio must be equal or more 300 character'),
    image: yup
    .string()
    .required('Image Url is Required')
    .url('Must be a valid URL'),
  })

export default function AddContact({addContact}) {
    // const [contact, setContact] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     profession: '',
    //     bio: '',
    //     dateOfBirth: new Date(),
    //     gender: 'male',
    //     image: '',
    // })  
   const [birthYear, setBirthYear] = useState(new Date())

    const { register, 
        handleSubmit, 
        watch, 
        setValue,
        reset,
        formState:{ errors, isSubmitting, isSubmitSuccessful },
     } = useForm({
        resolver: yupResolver(schema),
     });
    console.log(errors)

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset({
                firstName: '',
                lastName: '',
                email: '',
                profession: '',
                bio: '',
                image:'',
              })
        }
      }, [isSubmitSuccessful])

      useEffect(() => {
        setValue('dateOfBirth', birthYear)
       },[birthYear]) 

    // const handleChange = (evt) => {
    //     setContact({
    //         ...contact,
    //         [evt.target.name]: evt.target.value,
    //     })
    // }
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     console.log(contact)
    //     // checking validation


    //     //Form Submission
    //     addContact(contact)
    // }
    const onSubmit = data => {
        console.log(data)
    }

    // const {firstName, lastName, email, profession, bio, dateOfBirth, gender, image} = contact
  return (
    <>
        <h2 className='text-center mb-5'>Add Contact</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                    defaultValue=''
                    {...register('firstName')}
                    isInvalid={errors?.firstName}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.firstName?.message}
                    </Form.Control.Feedback>
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
                    defaultValue=''
                    {...register('lastName')}
                    isInvalid={errors?.lastName}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.lastName?.message}
                    </Form.Control.Feedback>
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
                    defaultValue=''
                    {...register('email')}
                    isInvalid={errors?.email}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.email?.message}
                    </Form.Control.Feedback>
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
                    defaultValue=''
                    {...register('profession')}
                    isInvalid={errors?.profession}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.profession?.message}
                    </Form.Control.Feedback>
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
                    defaultValue=''
                    {...register('image')}
                    isInvalid={errors?.image}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.image?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group> 
             <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='dateOfBirth' column>
                        Date Of Birth
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <DatePicker
                        selected={birthYear}
                        name='dateOfBirth'
                        id='dateOfBirth'
                        placeholder='Enter Your Date'
                        maxDate={new Date()}
                        showYearDropdown
                        showMonthDropdown
                        onChange={(date) => setBirthYear(date)}
                    />
                </Col>
            </Form.Group> 
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='gender' column>
                        Gender
                    </Form.Label>
                </Col>
                <Col xs='auto'>
                    <Form.Check
                    type="radio" 
                    label='Male'
                    value='male'
                    defaultChecked={true}
                    {...register('gender')}
                    />
                    </Col>
                    <Col xs='auto'>     
                    <Form.Check
                    type="radio" 
                    label='Female'
                    value='female'
                    {...register('gender')}
                    />  
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='bio' column>
                        Bio
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    as='textarea'
                    type="text" 
                    placeholder="Bio"
                    defaultValue=''
                    {...register('bio')}
                    isInvalid={errors?.bio}
                    />
                    <Form.Control.Feedback type='invalid' >
                        {errors?.bio?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Button 
            className='text-center' 
            variant='primary' size='md' 
            type='submit'
            disabled={isSubmitting? 'disabled':''}
            >
                Add Contact
            </Button>
        </Form>
    </>
  )
}
