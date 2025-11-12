import React, { use, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const CardDetails = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [data,setData]=useState({})
  const [loading,setLoading]=useState(true)
  const {user}=use(AuthContext)

   const handleOrder=()=>{

    fetch(`http://localhost:3000/my-orders`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({...data,ordered_by:user.email})
    })
    .then(res=>res.json())
    .then(d=>{
      console.log(d);
      alert('Successfully orderd')
      navigate('/myorders')
    })
    .catch(err=>{
      console.log(err);
    })

   }

  
  useEffect(()=>{

    fetch(`http://localhost:3000/petsupplies/${id}`,{
      headers:{
        authorization:`Bearer ${user.accessToken}`
      }
    })
    .then(res=>res.json())
    .then(d=>{
      setData(d)
      setLoading(false)
    })
        
  },[user,id])

  if(loading){
    return <div>Loading....</div>
  }
  
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="w-100 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="py-6">{data.description}</p>
            <button onClick={handleOrder} className="btn btn-primary rounded-3xl">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
