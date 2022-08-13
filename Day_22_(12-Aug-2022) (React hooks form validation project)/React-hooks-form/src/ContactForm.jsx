import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useEffect} from 'react'

const schema = yup.object({
    firstName: yup.string()
    .required('Fist Name is Required')
    .min(3, 'Must be 3 or more letters'),
    lastName: yup.string()
    .required('Last Name is Required')
    .min(3, 'Must be 3 or more letters'),
    email: yup.string()
    .email('Email must be a valid email')
    .required('Email is Required'),
    profession: yup.string()
    .required('Profession is Required')
    .min(3, 'Must be 3 or more letters'),
    imageUrl: yup.string()
    .required('Image Url is Required')
    .url('Image Url must be a valid URL'),
  });

export default function ContactForm() {

        const { 
            register, 
            handleSubmit, 
            formState:{ errors, isSubmitting, isSubmitSuccessful  } } = useForm({
            resolver: yupResolver(schema)
        });
        useEffect(() => {
            if(isSubmitSuccessful){
                reset({
                firstName: '',
                lastName: '',
                email: '',
                profession: '',
                imgUrl: '',
                })
            }
            
          }, [isSubmitSuccessful])

        const onSubmit = data => {
            console.log(data)
        } 

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='fistName' column>
                        First name
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        id='fistName'
                        placeholder="First name"
                        {...register('firstName')}
                        isInvalid={errors?.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.firstName?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='lastName' column>
                        First name
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        id='lastName'
                        placeholder="Last name"
                        {...register('lastName')}
                        isInvalid={errors?.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.lastName?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='email' column>
                        Email
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        id='email'
                        placeholder="Enter Your Email"
                        {...register('email')}
                        isInvalid={errors?.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.email?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='profession' column>
                        Profession
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        id='profession'
                        placeholder="Enter Your Profession"
                        {...register('profession')}
                        isInvalid={errors?.profession}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.profession?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='profession' column>
                        Gender
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        id='profession'
                        placeholder="Enter Your Profession"
                        {...register('profession')}
                        isInvalid={errors?.profession}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.profession?.message}
                    </Form.Control.Feedback>
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
            <Form.Group as={Row} className='mb-4'>
                <Col sm={3} >
                    <Form.Label htmlFor='imageUrl' column>
                        Image Url
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type="url"
                        id='imageUrl'
                        placeholder="Enter Your Image Url"
                        {...register('imageUrl')}
                        isInvalid={errors?.imageUrl}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors?.imageUrl?.message}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                    <div className='mt-4 text-center'>
                        <button
                        typeof='submit'
                        disabled={isSubmitting ? 'disabled': ''}
                        >
                        Submit
                        </button>
                    </div>
                </Col>
            </Row>
        </Form>
    </>
  )
}
