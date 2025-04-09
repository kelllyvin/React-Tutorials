import React, { useState } from "react";

const User = () => {
  const [user, setuser] = useState(false);
  const handleLogin = () => {
    setuser(true);
  };

 
  return (
    <>
     { !user ?  <div>
        <h1>you are not logged in</h1>
        <button className="mybtn" onClick={handleLogin}> Log in</button>
      </div> : <div>
        <h1>welcome to your Dashboard</h1>
        <button className="mybtn" onClick={() => setuser(false)}>
          Log out
        </button>
      </div>}
    </>
  );
};

export default User;
