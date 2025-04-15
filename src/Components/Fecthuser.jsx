import React from "react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useFecth } from "../Hooks/usefecth";
// Display FirstName, LastName, Image Gender,
// address{626, main street, missipi}

const url = "https://dummyjson.com/users";

const Fecthuser = () => {
 
 const {isloading, data:{users}} = useFecth(url);

 
  if (isloading) {
    return (
      <div className="flex items-center justify-center h-60">
        <ClipLoader className="#ff0000" />
      </div>
    );
  }
  return (
    <div>
      <h1>List of user</h1>
      <section className="  flex items-center gap-2.5 flex-wrap  ">
        {users.map((user) => {
          const {
            id,
            firstName,
            lastName,
            image,
            gender,
            address: { address, city, state },
          } = user;
          return (
            <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md ">
              <img
                src={image}
                alt=""
                className="w-full object-cover h-[70%] "
              />
              <div className="flex text-xl font-bold ml-5">
                <p>{firstName}</p>,<p>{lastName}</p>
              </div>
              <p className="text-xl font-semi-bold  ml-5">{gender}</p>
              <p className="text-xl font-semi-bold  ml-5">{address}</p>
              <div className="flex text-xl  ml-5">
                <p>{city}</p>,<p>{state}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Fecthuser;
