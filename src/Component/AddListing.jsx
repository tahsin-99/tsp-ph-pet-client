import React, { use, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddListing = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleCategory = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === "Pets") {
      setPrice(0);
    } else {
      setPrice("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      sellerName: e.target.sellerName.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      title: e.target.title.value,
      description: e.target.description.value,
      image: e.target.photo.value,
      date: e.target.date.value,
      email: e.target.email.value,
    };
    fetch("https://pet-supply-server.vercel.app/petsupplies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added Successfully");
        navigate("/");
      })
      .catch((error) => {
        error;
      });
  };
  return (
    <>
      <title>PawMart | AddList</title>
      <p className="text-4xl font-bold text-center mt-20 mb-10">
        Add Your Pet & Supplies
      </p>
      <div className="p-5">
        <div className="border bg-white  border-[#c74d2f] p-5  lg:mx-auto  rounded-md">
          <form onSubmit={handleSubmit} className="">
            <fieldset className="fieldset ">
              <label className="label font-semibold text-black">Name</label>
              <input
                type="text"
                name="name"
                className="input  border-[#c74d2f] w-full"
                placeholder="Enter Name"
                required
              />
              <label className="label font-semibold text-black">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                className="input  border-[#c74d2f] w-full"
                placeholder="Enter Name"
                required
              />
              <label for="Dropdown"  className="font-semibold">
                <p className="text-black font-semibold">Choose a Category</p>
              </label>
              <select
                id="Dropdown"
                className="border text-black border-[#c74d2f] w-full h-10 rounded-sm"
                name="category"
                onChange={handleCategory}
              >
                <option value="">Select Category</option>
                <option value="Pets">Pets</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Pet Care Products">Pet Care Products</option>
              </select>
              <label className="label font-semibold text-black">Price</label>
              <input
                type="text"
                name="price"
                className="input border-[#c74d2f] w-full"
                placeholder="Enter Your Price"
                onChange={(e) => setPrice(e.target.value)}
                disabled={category === "Pets"}
                value={price}
                required
              />
              <label className="label font-semibold text-black">Location</label>
              <input
                type="text"
                name="location"
                className="input border-[#c74d2f] w-full"
                placeholder="Enter Your Location"
                required
              />
              <label className="label font-semibold text-black">Title</label>
              <input
                type="text"
                name="title"
                className="input border-[#c74d2f] w-full"
                placeholder="Enter Your Title"
                required
              />
              <label className="label font-semibold text-black">
                Description
              </label>
              <textarea
                name="description"
                className="textarea border-[#c74d2f] w-full"
                placeholder="Write description"
              ></textarea>

              <label className="label font-semibold text-black">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input  border-[#c74d2f] w-full"
                placeholder="Enter URL"
                required
              />
              <label className="label font-semibold text-black">Date</label>
              <input
                name="date"
                type="datetime-local"
                className="input  border-[#c74d2f] w-full"
              />

              <label className="label font-semibold text-black">Email</label>
              <input
                type="email"
                name="email"
                className="input  border-[#c74d2f] w-full"
                placeholder="Enter Your Email"
                defaultValue={user.email || ""}
                readOnly
              />

              <button
                type="submit"
                className="btn btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white active:scale-95 bg-orange-300  mt-10"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddListing;
