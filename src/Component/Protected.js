import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const {Component}=props;
    const naviagte=useNavigate()

    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){
            naviagte('/Login')
        }
    })

  return (
    <div>
      <Component />
    </div>
  )
}
