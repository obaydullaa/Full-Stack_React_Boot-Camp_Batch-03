import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleAbout() {
  const params = useParams()
  console.log(params)
  return (
    <Row>
      <h2>Single About</h2>
      <h4>{params.name}</h4>
    </Row>
  )
}
