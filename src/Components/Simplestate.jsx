import React from 'react'
import { useState } from 'react'

const Simplestate  = () => {
    const [name, setName]=useState("Declan")
    const handleNameChange =()=>{
       if(name=="Declan"){
        setName("saka");
       } else{
        setName("Declan")
       }
    }
    const [num, setNum] = useState(0)
    //  increase
    const handleincrease =()=>{
        setNum(num + 1)
    }
    // decrease
    const handledecrease =()=>{
        setNum(num + 1)
    }
    const details = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat omnis perferendis pariatur adipisci
                 aperiam debitis maiores quis incidunt aliquam quam cupiditate, necessitatibus maxime, ullam at inventore
                  quod placeat alias nobis voluptates sequi quae saepe 
                 totam eos architecto! Inventore, necessitatibus perferendis corporis
                 harum fugit repellendus repellat ab soluta nemo, molestiae nobis.`;
                 const [show, setshow] =useState(false)
                 const handleShowDetails =() =>{
                    setshow(!show)
                 }
  return (
    <div className='py-10 text-center'>
        <h1 className='text-3xl font-bold'>UseState</h1>
        <p>My name is {name}</p>
        <button onClick={handleNameChange} className='mybtn'> Change Name</button>
        <h1 className='text-4xl my-3.5'>{num}</h1>
        <button className='mybtn mx-3' onClick={handledecrease}>increase</button>
        <button className='mybtn mx-3' onClick={()=> setNum (0)}>Reset</button>
        <button className='mybtn mx-3' onClick={handledecrease}>Decrease</button>

        <div className='max-w[600px] mx-auto p-3 shadow-lg'>
            <h1 className='text-4xl font bold'>Top Football News</h1>
            <h2 className='text-2xl text-red-500 my-2'>Madrid Demolished at the Emirates stadium</h2>
            <p className='mb-2'>{true ? details : details.substr(0,100)}</p>
            <button onClick ={handleShowDetails}className='mybtn'> {show ?"show Less":"show More"}</button>
        </div>
    </div>
  )
}
export default Simplestate