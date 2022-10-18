import React from 'react'
import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'

export default function Navbar() {
  return (
    <div>
      <ul className='setli'>
        <Link to="/Home" style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }}>home</Link>
        <li style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >conatct</li>
        <li style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >
          <Link to="/about">
          About
          </Link>
          </li>
        <li style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >anil</li>
        <Link to="/Contact" style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >Contact us</Link>
        <li style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >peter</li>
        <Link to="/Searchparamsss" style={{ backgroundColor: "grey", borderRadius: "5px", margin: "0 9px" }} >Searchparams</Link>
      </ul>
    </div >
  )
}
