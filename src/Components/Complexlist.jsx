import React from 'react'

const Complexlist = () => {
    const staff = [
      {
        id: 1,
        Image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
        name: "john Doe",
        role: "chife operator officer",
      },
      {
        id: 2,
        Image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
        name: "Alice Gray",
        role: "Head of Finance",
      },
      {
        id: 3,
        Image:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
        name: "jonny Brian",
        role: "Head of marketing",
      },
      {
        id: 4,
        Image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Alex Johnson",
        role: "creative officer",
      },
      {
        id: 5,
        Image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Willfred Ambars",
        role: "Admin officer",
      },
    ];
    
  return (
    <div className='bg-blue-200 py-10'>
        <h1 className='text-center text-blue-500 text-4xl font-bold'> Meet the Team</h1>
        <p className='my-5 text-center text-md text-black w-[600px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure itaque? 
            Mollitia sint dignissimos suscipit voluptas obcaecati sed quisquam amet omnis placeat. 
            Fugiat facilis nostrum ipsam fugit adipisci quaerat voluptate.</p>
            <div className='flex gap-3.5 max-w-[1000px] flex-wrap mx-auto'>
                {
                    staff.map((member) =>{
                        const{id,Image,name,role} =member
                        return <div key={id} className='w-[320px] bg-white p-2.5 rounded-md'>
                            <img src={Image} alt={name} className='rounded-md h-[300px] w-full object-cover'/>
                            <h1 className='text-blue-900 font-bold text-2xl mt-3'>{name}</h1>
                            <p className='text-gray-500  font-semibold '>{role}</p>
                        </div>
                    })
                }
            </div>
    </div>
  )
}

export default Complexlist