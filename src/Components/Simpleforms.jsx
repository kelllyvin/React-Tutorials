import React, { useState } from 'react'

// setting up a state value for all input filed is callled controled input



const Simpleforms = () => {
    const handleFormSubmit =(e)=>{


      e.preventDefault();
    }
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");

  return (
    <div className="mt-20">
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit form</h1>
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn mx-40 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Simpleforms