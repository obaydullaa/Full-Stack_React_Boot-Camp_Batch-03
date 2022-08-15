import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <h2>About</h2>
      <Outlet/>
    </>
  )
}
