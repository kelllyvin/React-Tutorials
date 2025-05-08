import React from 'react'
import { useRef } from 'react'
import { useRef, useEffect } from 'react'

const Simpleref = () => {
    const headingCContainer = useRef(null)
    console.log((headingCContainer));
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })
    
  return (
    <div className='container'>
          <h1 ref={headingCContainer} className='text-3xl text-center'>
          use Ref  </h1> 

          <form className='myform'>
             <label htmlFor="sub">Subscrube to our newsletter</label>
             <input ref={inputRef} type="email" className='input' />
             <button className='mybtn mt-1'>Subscribe</button>
          </form>

    </div>
    
  )
}

export default Simpleref