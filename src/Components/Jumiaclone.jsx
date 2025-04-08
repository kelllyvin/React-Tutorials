import React from 'react'
const Singleproduct =({image,price,title}) => {
    return <div>
        <img src={image} alt={title} />
        <p className='text-3xl font-medium'>{title}</p>
        <p className='text-1xl font-medium'>#{price}</p>
    </div>
}

const Jumiaclone = () => {
  return (
    <div>
      <h1>All products</h1>
      <div className="flex gap-3">
        <Singleproduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/951058/1.jpg?8226"
          }
          price={16500}
          title={"Hikers 32 TV"}
        />
        <Singleproduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2636301/1.jpg?4094"
          }
          price={15000}
          title={"Nexus 32 TV"}
        />
        <Singleproduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/6271583/1.jpg?5337"
          }
          price={17000}
          title={"LeTv 32"}
        />
      </div>
    </div>
  );
}

export default Jumiaclone