import React, { useContext, useState } from 'react'
import usercontext from './First'
const Second = () => {
    const {Plus,Minus,count}=useContext(usercontext)
  return (
    <div>
        <button onClick={Plus}>+</button>
        <h1>{count}</h1>
        <button onClick={Minus}>-</button>
    </div>
  )
}

export default Second
