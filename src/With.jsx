import React, { createContext, useContext, useState } from 'react'

const usercontext=createContext()
const With = () => {
  const [text,setText]=useState("A")
  return (
    <div>
        <usercontext.Provider value={text}>
          <A></A>
        </usercontext.Provider>
    </div>
  )
}
const A=()=>{
  const data=useContext(usercontext)
  return(
    <>

      <h1>{data}</h1>
    </>
  )  
}

export default With
