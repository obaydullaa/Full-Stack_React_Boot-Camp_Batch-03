
import React from 'react'

import {Button, Card, ListGroup} from 'react-bootstrap'
import {FaEye, FaRegTrashAlt} from 'react-icons/fa'
import {format} from 'date-fns'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

export default function Contact({contact, deleteContact}) {
    const {id, firstName, lastName, email, profession, gender, image, dateOfBirth, bio} = contact

    const handleDelete = (id) => {
        toast.success('Contact is Deleted Successfully')
        deleteContact(id)
    }

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
                            <ListGroup.Item>Date of Birth: {' '} 
                            {dateOfBirth instanceof Object 
                            ? format(dateOfBirth,'dd/MM/yyyy'): dateOfBirth}
                            </ListGroup.Item>
                        </ListGroup>
                        <div className="card-btn mt-3">
                            <Card.Link as={Link} to={`/contacts/${id}`}>
                                <Button variant='warning ms-3' size='md' type='view'>
                                    <FaEye />
                                </Button>
                                </Card.Link>
                                <Card.Link>
                                <Button variant='danger ms-3' size='md' onClick={() => handleDelete(id)}>
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
