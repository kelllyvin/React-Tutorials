import React from 'react'
const Product =({image,price, title, Children})=>{
    return(
        <div>
            <img src="{image}" alt="" />
            <p>{title}</p>
             <p>#{price}</p>
            {Children}
        </div>
    )
}


const Propschildren = () => {
  return (
    <div>
      <h1>List of avaliable products</h1>
      <div className="flex gap-3">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/5331304/1.jpg?5279"
          }
          price={12000}
          title={"PowerBank"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/7050583/1.jpg?6610"
          }
          price={120000}
          title={"Phone"}
        />
        <product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?7909"
          }
          price={30000}
          titie={"phone"}
        >
          <p>black friday deal</p>
        </product>
      </div>
    </div>
  );
}

export default Propschildren