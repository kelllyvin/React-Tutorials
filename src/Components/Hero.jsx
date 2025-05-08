import React from "react";

import { useAppContext } from "../Hooks/useAppcontext";
import { AppContext } from "../context";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const { value1 } = useAppContext(AppContext);
  return (
    <div className=" bg-black text-white h-screen max-h-[600px]">
      <div className="container h-full flex felx-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">Buy a <ReactTyped 
           typeSpeed ={80}
           backSpeed = {90}
           strings ={["cars", "yatch", "iland"]}
           loop
           />
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            et, ipsam expedita ducimus veniam mollitia eveniet repudiandae
            officia earum aut. Quidem provident porro illum quod?
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1622481585786-96f376c5d564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV4b3RpYyUyMGxpZ2h0JTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="exotic Cars"
          className="hidden md:block rounded-md w-[350px] h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
