import React, { use, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/petsupplies/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(d);
        setLoading(false);
      });
  }, [user, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,

      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      
      date: e.target.date.value,
      email: e.target.email.value,
    };
     fetch(`http://localhost:3000/petsupplies/${data._id}`,
            {
                method:'PUT',
                headers:{
                    "Content-Type":"application/json",
                    authorization: `Bearer ${user.accessToken}`

                },
                body:JSON.stringify(formData),
                
            }
           )
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            toast.success('Updated Successfully')
            navigate('/')
           })
           .catch(error=>{
            error
           })
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <fieldset className="fieldset ">
          <label className="label font-semibold text-black">Produt Name</label>
          <input
            type="text"
            name="name"
            className="input  w-full"
            placeholder="Enter Name"
            defaultValue={data.name}
          />

          <label className="label font-semibold text-black">Category</label>
          <input
            type="text"
            name="category"
            className="input  w-full"
            placeholder="Enter Your Category"
            defaultValue={data.category}
          />

          <label className="label font-semibold text-black">Price</label>
          <input
            type="text"
            name="price"
            className="input  w-full"
            placeholder="Enter Your Price"
            defaultValue={data.price}
          />

          <label className="label font-semibold text-black">Address</label>
          <input
            type="text"
            name="location"
            className="input  w-full"
            placeholder="Enter Your Address"
            defaultValue={data.location}
            required
          />

          <label className="label font-semibold text-black">Date</label>
          <input
            name="date"
            type="datetime-local"
            defaultValue={data.date}
            className="input w-full"
          />

          <label className="label font-semibold text-black">Email</label>
          <input
            type="text"
            name="email"
            className="input w-full"
            placeholder="Enter Your Email"
            defaultValue={data.email}
            required
          />

          <button
            type="submit"
            className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white mt-10 active:scale-95 bg-orange-300"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Update;
