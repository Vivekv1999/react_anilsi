import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate=useNavigate()
  const login=()=>{
    localStorage.setItem('login',true)
    navigate('/')
  }
  

  useEffect(()=>{
    let login=localStorage.getItem('login')
    if(login){
      navigate('/')
    }
})
  return (
    <div className='container'>
      <h1>login page</h1>
<input type="text" /><br/>
<input type="password" /><br/>
<button onClick={login}>login</button>
    </div>
  )
}
