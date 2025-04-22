import React, { useState } from "react";

// setting up a state value for all input filed is callled controled input
// d moment u put a value on input iy sees it as readonly
// you must prevent defult behaviour
// 

const Simpleforms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setusers] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError("please fill all fields");
      return;
    }
    setusers([...users, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
    setError("");
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <p className="text-red-500">{error}</p>
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

      {
        users.length > 0 && (
        <div className="myform">
        <h1>List of users</h1>
              
              {
                users.map[(user, index)=>{
                  return (<p key={index}>{user.firstName}{user.lastName}</p>)
                }]
              }

      </div>)}
    </div>
  );
};

export default Simpleforms;
