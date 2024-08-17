import React, { useContext, useState } from 'react'
import usercontext from './First'
const Third = ( {children}) => {
    const [count,setCount]=useState(0)

    const Plus =()=>{
        setCount(count+1)
    }
    
    const Minus =()=>{
        setCount(count-1)
    }
  return (
        <>
                <usercontext.Provider value={{Plus,Minus,count}}>
                  {children}
                </usercontext.Provider>   
      </>
  )
}


export default Third
