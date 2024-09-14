import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {Row, Col, Card, ListGroup } from 'react-bootstrap'

export default function About() {
  return (
      <Row> 
      <h2>About</h2>
      <Col sm={5}>
          <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to='/about/singleAbout'>Single About</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='detailsAbout'>Details About</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col sm={7}><Outlet/> </Col>
    </Row>
  )
}
