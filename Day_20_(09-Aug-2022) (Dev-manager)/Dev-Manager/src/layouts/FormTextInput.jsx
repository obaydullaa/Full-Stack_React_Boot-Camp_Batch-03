import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'

function FormTextInput({name, label, placeholder, type='text', errors, register, defaultValue, ...rest}) {
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
            isInvalid={errors?.name}
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