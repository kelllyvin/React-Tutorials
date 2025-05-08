import React from 'react';
import Mystore from '../Components/Mystore';
import { AppContext } from '../context';
import { useAppContext } from '../Hooks/useAppcontext';

const About = () => {
   const {value1} =useAppContext (AppContext)
  return (
   
    <div>
      <h1>{value1}</h1>
        <Mystore />
    </div>
  )
}

export default About