import React from 'react'

const Eventhandeling = () => {
  const handleClick =() =>{
    alert("welcome user")

    const handleClickAgain =(name) =>{
      alert(`wlcome ${name}`)
    }
  }
  return (
    <div className='text-center py-10'>
    <h1 className='text-3xl mb-4'>Responding to  user interction</h1>
    <button onClick ={handleClick}className='mybtn'>Click me</button>
    <button onClick = {() =>handleClickAgain (john)}className='mybtn ml-3'>Click Again</button>
    </div>
  )
}

export default Eventhandeling