import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function FormTextInput({name, label, placeholder, type='text', errors, register, defaultValue, ...rest}) {
  // console.log(errors?.name)

  const errorCheck = Object.keys(errors).length !== 0; // This should be true, to trigger error

  const errorValueCheck = errors[name]?.message !== undefined
  

  // console.log(`Name: ${name}  + ${errorValueCheck, errorCheck}`)

  return (
    <Form.Group as={Row} className="mb-3">
        <Col sm={3}>
            <Form.Label htmlFor='firstName' column>
               {label}
            </Form.Label>
        </Col>
        <Col sm={9}>
            <Form.Control 
            type={type} 
            placeholder={placeholder}
            id={name} 
            defaultValue={defaultValue}
            {...register(name)}
            isInvalid={errorCheck && errorValueCheck}
            {...rest}
            />
            <Form.Control.Feedback type='invalid' >
                {errors[name]?.message}
            </Form.Control.Feedback>
                
        </Col>
    </Form.Group>
  )
}

export default FormTextInput