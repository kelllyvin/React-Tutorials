import React from "react";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useFecth } from "../Hooks/usefecth";

const url = "https://example-data.draftbit.com/authors?_limit=10";

const Getauthors = () => {
    const {isloading, data:authors} =useFecth(url)

  if (isloading) {
    return (
<div className="flex items-center justify-center h-70%">
        <ClipLoader className="#ff0000" />
      </div>
    );
  }

 return (
    <div>
      Getauthors
      <section className="flex items-center gap-2.5 flex-wrap">
        {authors.map((author) => {
          const { id, imgUrl, person, professions, description, sourceUrl } =
            author;

          return (
            <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md ">
              <img src={imgUrl} alt="" className="w-full object-cover h-70%" />
              <p className=" ml-5 font-semibold">{person}</p>
              <p className=" ml-5 font-semibold">{professions}</p>
              <p className=" ml-5 font-semibold">{description}</p>
              <p className=" ml-5 font-semibold">{sourceUrl}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Getauthors;
