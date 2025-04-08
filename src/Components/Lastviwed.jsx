import React from 'react'
import Lastviwedproduct from './Lastviwedproduct';

const Lastviwed = () => {
    const Recentproduct = [
      {
        id: 1,
        image:
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home-essentials.png",
        title: "EcoFlow",
        price: "159900",
      },
      {
        id: 2,
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/142576/1.jpg?3604",
        title: "infinix mobile",
        price: "103500",
      },
      {
        id: 3,
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/2789333/1.jpg?5340",
        title: "Tecno",
        price: "15000",
      },
    ];
  return (
    <div className="max-w[1300px] mx-auto">
      <div className="bg-red-600 text-3xl font-bold p-3 rounded-t-2xl text-white">
        <h1>Last Viewed</h1>
      </div>
      <section className="flex gap-2 items-center mt-2.5">
        {Recentproduct.map((product) => {
          return <Lastviwedproduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}

export default Lastviwed