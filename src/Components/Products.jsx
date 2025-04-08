import React from 'react'
import mycar from '..//assets/car.jpg'
import Newcar from '..//assets/Newcar.jpg'

const Products = () => {
  return (
    <div className=" bg-amber-500 flex justify-between items-center gap-6 object-cover rounded-sm my-[10px] w-[500px]">
      <img src={mycar} alt="my car" />
      <img src={Newcar} alt="New car" />
    </div>
  );
}

export default Products