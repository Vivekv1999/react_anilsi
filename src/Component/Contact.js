import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Contact() {
  const locationn=useLocation()
    console.log(locationn);
  return (
    <div>
      <h1>contact us page</h1>
      <h2>here wehacesome other business</h2>
      <Link to="Company" state={{name:'anil',age:"28"}}>Company</Link>
      <Link to="Otherbusi">other Business</Link>
      <Outlet/>
    </div>
  )
}
