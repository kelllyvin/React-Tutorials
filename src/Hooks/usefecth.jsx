import { useState,useEffect } from "react"



export const useFecth =(api)=>{
    const[data,setData] = useState([]);
    const [isloading, setIsloading] = useState(true)

    const getdata =async () =>{
     const res = await fetch(api)
     const result =await res.json()
     setData(result)
     setIsloading(false)

    }
    useEffect(()=>{
        getdata()

    }, [api])
    return {data, isloading}
}