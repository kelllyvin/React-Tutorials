import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import *  as yup from "yup"
import { Navigate, redirect, useNavigate } from 'react-router-dom';


const loginFormValidator =yup.object().shape({
    email: yup
    .string()
    .email("invalid email address")
    .required("Email is required"),
    password: yup.string().required("password is required")

})



const Login = () => {
    const {register,handleSubmit,
         formState: {errors},
    } =useForm({
        resolver: yupResolver(loginFormValidator)
    });
      const redirect = useNavigate()
    const [error,seterror] = useState(false)
    const onLogin =(data) =>{
        const {email,password} = data

     if(email ==="johndoe@gmail.com" && password === "password"){
               redirect("/Timeline")
        } else{

          seterror(true)
        }


    };
    
  return (
    <div>
        <form onSubmit={handleSubmit(onLogin)}className='myform shadow-2xl'>
            <h1 className='text-2xl'>Login to continue</h1>
            <input type="text" className='input mt-2 w-full'
            placeholder='Email Address' 
            {...register("email")}
            />
            <p className='text-sm text-red-500 mt-0.5'>{errors.email?.message}</p>
            <input type="password"
            className='input mt-2 w-full'
            placeholder='password'
            {...register("password")}
            />
            <p className='text-red-500 mt-0.5'>{errors.password?.message}</p>
   
    {  error &&  <div className='rounded-md w-full bg-red-300 p-3 my-3'>
        <p className='text-red-500'>Invalid email or password</p>
        </div>}
      
            <button className='btn btn-primary w-full mt-2'>Login</button>
        </form>
    </div>
  )
}

export default Login