import React from 'react'
// in react curly bracket is usedd for eveluation of js code
const Dynamic = () => {
    const myName ="john Doe"
  return (
    <div className='text-3xl text-center'>
      <h1>DYNAMIC VALUES</h1>
      <p>My name is {myName}</p>
    </div>
  );
}

export default Dynamic