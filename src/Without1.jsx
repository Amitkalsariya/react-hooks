import React, { useState } from 'react'

const Without1 = () => {
    const [text,setText]=useState("Amii")

  return (
    <div>
        <First value={text}></First>
        <Sec value={text}></Sec>

    </div>
  )
}
const First=({value})=>{
    return(
        <>
            <h1>{value}</h1>
        </>
    )
}
const Sec=({value})=>{
    return(
        <>
            <h1>{value}</h1>
        </>
    )
}
export default Without1
