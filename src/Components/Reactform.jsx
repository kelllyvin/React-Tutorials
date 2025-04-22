import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// react hook from first ting is to import use from, second you register use form handel submit 
// liberies for validaton yup or zod

// defining validation schema

const validationSchema = yup.object().shape({

    firstName: yup.string().required ("First Name is required"),
    LastName: yup.string().required ("Last name is required"),
     email:yup.string().email("invalid email address").required("Email is required"),
     password:yup.string().required("password is required").min(7,"minimum password length is 7")
})





const Reactform = () => {
    const {register,handleSubmit, formState: {errors} } = useForm({resolver:yupResolver(validationSchema)})

    const handleformsubmit =(data) =>{
        console.log(data);
        
    }

  return (
    <div>
      <form
        className="myform bg-white"
        onSubmit={handleSubmit(handleformsubmit)}
      >
        <h1>Submit your details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? " border border-red-500" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>

        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.LastName ? " border border-red-500" : ""
          }`}
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.LastName && errors.LastName.message}
        </p>

        <input
          type="email"
          placeholder="Email Address "
          className={`input mt-2 w-full ${
            errors.email ? " border border-red-500" : ""
          }`}
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>

        <input type="password"  placeholder='password '
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500":""
          
          }`}
        />

        <button type="submit" className="btn btn-accent w-full mt-2.5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Reactform