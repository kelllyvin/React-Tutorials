import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl'></h1>
        <p>Page not found</p>
       <Link to="/" className='btn btn-primary'>
         Back To Home
       </Link>
    </div>
  )
}

export default Errorpage