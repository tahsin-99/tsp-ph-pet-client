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

      <p className="text-4xl font-bold text-center mt-20 mb-10
        text-gray-800 dark:text-gray-100">
        Add Your Pet & Supplies
      </p>

      <div className="p-5 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="border bg-white dark:bg-gray-800
          border-[#c74d2f] p-5 lg:mx-auto rounded-md">

          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">

              <label className="label font-semibold text-black dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Enter Name"
                required
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Seller Name
              </label>
              <input
                type="text"
                name="sellerName"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Enter Name"
                required
              />

              <label htmlFor="Dropdown" className="font-semibold">
                <p className="text-black dark:text-gray-200 font-semibold">
                  Choose a Category
                </p>
              </label>

              <select
                id="Dropdown"
                className="border border-[#c74d2f] w-full h-10 rounded-sm
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                name="category"
                onChange={handleCategory}
              >
                <option value="">Select Category</option>
                <option value="Pets">Pets</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Pet Care Products">Pet Care Products</option>
              </select>

              <label className="label font-semibold text-black dark:text-gray-200">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white
                  disabled:opacity-60"
                placeholder="Enter Your Price"
                onChange={(e) => setPrice(e.target.value)}
                disabled={category === "Pets"}
                value={price}
                required
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Enter Your Location"
                required
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Enter Your Title"
                required
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Description
              </label>
              <textarea
                name="description"
                className="textarea border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Write description"
              ></textarea>

              <label className="label font-semibold text-black dark:text-gray-200">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
                placeholder="Enter URL"
                required
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Date
              </label>
              <input
                name="date"
                type="datetime-local"
                className="input border-[#c74d2f] w-full
                  bg-white dark:bg-gray-700
                  text-black dark:text-white"
              />

              <label className="label font-semibold text-black dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input border-[#c74d2f] w-full
                  bg-gray-100 dark:bg-gray-600
                  text-black dark:text-white"
                placeholder="Enter Your Email"
                defaultValue={user.email || ""}
                readOnly
              />

              <button
                type="submit"
                className="btn btn border-[#c74d2f]
                  bg-orange-400 dark:bg-orange-500
                  hover:bg-[#c74d2f] hover:text-white
                  active:scale-95 mt-10"
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
