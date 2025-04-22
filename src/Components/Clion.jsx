import React from 'react'
import logo from '../assets/logo.png'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import background from '../assets/background.png'





const links = [
  { title: "Home", to: "#" },
  { title: "About", to: "#" },
  { title: "Contact", to: "#" },
  { title: "Resources", to: "#" },
];

const Clion = () => {

const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div className='bhero h-screen bg-cover bg-no-repeat'>
      <nav className="bg-[black] relative">
        <div className="layout1 flex items-center justify-between h-[105px] bg-black">
          <div>
            <img src={logo} alt="Clion logo" />
          </div>
          <div className="hidden lg:flex gap-[40px] text-[20px] font-bold text-[white]">
            {links.map((links, index) => {
              return (
                <a key={index} href={links.to}>
                  {links.title}
                </a>
              );
            })}
          </div>
          <div className="block lg:hidden">
            <button
              className="text-white"
              onClick={() => setisMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose size={30} /> : <IoMenuSharp size={30} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className=" lg:hidden bg-black absolute top-[105px] w-1/2 left-0 p-2.5">
              <div className=" flex flex-col gap-[40px] text-[20px] font-bold text-[#fcfcfc]">
                {links.map((links, index) => {
                  return (
                    <a key={index} href={links.to}>
                      {links.title}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className='bg-url[(./background
      )]'>
        <div className=''>
          <div className="w-full h-[989px] pb-5   ">
            <h1 className="text-black text-3xl lg:text-[42px] mb-4 font-medium">
              Rent rides that suite your personality anytime, anywhere
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clion