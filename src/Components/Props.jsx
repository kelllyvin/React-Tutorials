import React from 'react'
const Button =({content,bg}) =>{
    return <Button className ={`${bg} text-white mx-2 rounded-lg w-[200px]`}>
         {content} </Button>
}
const Props = () => {
  return (
    <div>
      <h1>Props</h1>
      <Button content={"Sign up"} bg={"bg-black"} />
      <Button content={"Log in"} bg={"bg-red-200"} />
      <Button content={"Register"} bg={"bg-green-500"} />
      <Button content={"Continue with Google"} bg={"bg-amber-400"} />
      <Button content={"Shop Now"} bg={"bg-gray-900"} />
    </div>
  );
}

export default Props