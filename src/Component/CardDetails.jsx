import React, { use, useEffect, useState } from "react";
import {  useParams } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const CardDetails = () => {
  const {id}=useParams()
  const [data,setData]=useState({})
  const [loading,setLoading]=useState(true)
  const {user}=use(AuthContext)

  
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
            <button className="btn btn-primary rounded-3xl">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
