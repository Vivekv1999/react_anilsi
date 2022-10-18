import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate=useNavigate()
    const locationn=useLocation()
    console.log(locationn);
    
  return (
    <div>
        <div className="container" style={{justifyContent:"center"}}>
            <h1>Home page</h1>
            <h3>heelo, this is home page</h3>
            <h3>we are here for react routing</h3>
            <Link to="/about" >go to about page </Link><br/>
            <button onClick={()=>{navigate('/about')}}>goto about page</button><br/>
            <button onClick={()=>{navigate('/Searchparamsss')}}>go to filter page</button>
        </div>
      
    </div>
  )
}
