import React from 'react'
import { useSearchParams } from 'react-router-dom'


export default function Filter() {
    const [searchhparams,setSearchparams]=useSearchParams()
    const a=searchhparams.get(item)
    console.log(searchhparams.get(age));
    
  return (
    <div>
      <h1>filter page </h1>
      {a}
    </div>
  )
}
