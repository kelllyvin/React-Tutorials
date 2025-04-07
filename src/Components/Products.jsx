import React from 'react'
import mycar from '..//assets/car.jpg'
import Newcar from '..//assets/Newcar.jpg'

const Products = () => {
  return (
    <div>
        <img src={mycar}className='w-[700px]' alt="my car" />
        <img src={Newcar} alt="New car" />

    </div>
  )
}

export default Products