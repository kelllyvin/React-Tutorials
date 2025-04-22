import React from "react";
import { useState } from "react";

const Multipleform = () => {
  const [user, setuser] = useState({
    fullName: "",
    email: "",
    age: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const { fullName, email, age } = user;

    if (!fullName.trim() || !email.trim() || !age) {
      setError("please provide sall values");
      return;
    }
    setError("");
    setuser({
      fullName: "",
      email: "",
      age: "",
    });
  };

  return (
    <div className="mt-20">
      <form onSubmit={handlesubmit} className="myform">
        <h1>Submit your details</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          className="myinput"
          placeholder="fullname"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="myinput"
          placeholder="Emailaddress "
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="myinput"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button className="mybtn">submit</button>
      </form>
    </div>
  );
};

export default Multipleform;
