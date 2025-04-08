import React from 'react'

const Simplelist = () => {
     const customers = ["ade", "jane", "peter"];
     const users =["Paul","Sammy","Danny","Willson","Uzor"]
  return (
    <div>
        <h1>Outputting Lists in React</h1>
        <div>
            {
                customers.map((customer,index)=>{
                return <p key={index}>{customer}</p>
            })
            }
        </div>
         <div>
            <h1>List of users</h1>
          <div>
            {
                users.map((users,index)=>{
                 return<h1 key={index} className='text-green-500'>{users}</h1>
                })
            }
          </div>
           
            
         </div>
    </div>
  )
}

export default Simplelist