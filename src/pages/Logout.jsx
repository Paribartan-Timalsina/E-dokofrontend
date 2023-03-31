import React ,{useEffect,useContext}from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const {state,dispatch}=useContext(userContext)
    let navigate=useNavigate()
    useEffect(()=>{
    fetch("/logoutt",{
    
        method: "GET",

        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
         credentials:"include",
         withCredentials:true
      }).then((res)=>{
        
        navigate("/signin")
        console.log("hello")
      })

    },[])
  return (
    <>
    
    </>
  )
}

export default Logout
