import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>contact us page</h1>
      <h2>here wehacesome other business</h2>
      <Link to="Company">Company</Link>
      <Link to="Otherbusi">other Business</Link>
      <Outlet/>
    </div>
  )
}
