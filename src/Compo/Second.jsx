import React, { useContext, useState } from 'react'
import usercontext from './First'
const Second = () => {
  const { Plus, Minus, count } = useContext(usercontext)
  return (
    <div>
      <table border={1} cellPadding={2} cellSpacing={5} align='center'>
        <tr>
          <th> <button onClick={Plus}>Increment</button></th>
          <th><h1>{count}</h1></th>
          <th><button onClick={Minus}>Decrement</button></th>
        </tr>
      </table>



    </div>
  )
}

export default Second
