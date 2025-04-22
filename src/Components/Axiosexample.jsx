import React from 'react'
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com"
})

const Axiosexample = () => {

    const getdata =async()=>{
        //getting axios
        const {data} = await axiosInstance("/products");
        console.log(data);
        
    }
    getdata()

     const getRecipes = async () => {
       //getting axios
       const { data } = await axiosInstance("/recipes");
       console.log(data);
     };
     getRecipes();
  return (
    <div>Axiosexample</div>
  )
}

export default Axiosexample