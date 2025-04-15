import React, { useState } from 'react'

const Switch = () => {
   const [Switch, setswitch] =useState(false) 
    const handleswitchon =() =>{
        setswitch (true)
    }
   
  return (
    <>
      {switchoff ? (
        <div>
          <h1>Light Off </h1>
          <button className="mybtn" onClick={handleswitchon}>
            Switch on
          </button>
        </div>
      ) : (
        <div>
          <h1>Light on</h1>
          <button className="mybtn" onClick={() => setswitch(false)}>
            Switch off
          </button>
        </div>
      )}
    </>
  );
}

export default Switch