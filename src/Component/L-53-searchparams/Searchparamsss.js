import React from 'react'
import { useSearchParams } from 'react-router-dom'

//raect -url ma thi lakhlu lavama mate 
//  ex. -->localhost:3000/searchparams?age=26&city=noida......

export default function Searchparamsss() {
  const [Searchparams, setSearchparams] = useSearchParams()
  //     // ///aa je serch karvi te uupar url ma hocu joiaa===> ahiya apsde url ma age and city nakhau tu jaste add karu manualy
  console.log(Searchparams.get('age'));
  console.log(Searchparams.get('city'));
  const a = Searchparams.get('age')

  return (
    <div>
      <h1>hii</h1>
      <h1>age is : {a}</h1>
      <input type="text" onChange={(e)=>setSearchparams({city:(e.target.value),a})}/>
      <button onClick={() => setSearchparams({ age: 39 },)}>clcik to age </button>
    </div>
  )
}
