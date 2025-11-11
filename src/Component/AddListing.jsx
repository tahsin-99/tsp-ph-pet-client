import React from "react";

const AddListing = () => {
  return (
    <>
      <p className="text-4xl font-bold text-center mt-20 mb-10">
        Add Your Pet & Supplies
      </p>
      <div className="border p-5 w-[800px] mx-auto  rounded-md">
        <form className="">
          <fieldset className="fieldset ">
            <label className="label font-semibold text-black">Your Name</label>
            <input
              type="text"
              name="name"
              className="input  w-150"
              placeholder="Enter Your Name"
              required
            />
            <label for='Dropdown' className="font-semibold">Choose a Category:</label>
            <select id='Dropdown' className="border border-gray-200 w-150 h-10 rounded-sm" name='category'>
                <option value=''>Pets</option>
                <option value=''>Pet Food</option>
                <option value=''>Accessories</option>
                <option value=''>Pet Care Products</option>
            </select>
            <label className="label font-semibold text-black">Price</label>
            <input
              type="text"
              name="name"
              className="input  w-150"
              placeholder="Enter Your Price"
              required
            />
            <label className="label font-semibold text-black">Location</label>
            <input
              type="text"
              name="name"
              className="input  w-150"
              placeholder="Enter Your Location"
              required
            />
            <label className="label font-semibold text-black">Description</label>
            <textarea className="textarea  w-150" placeholder="Write description"></textarea>

            <label className="label font-semibold text-black">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-150"
              placeholder="Enter URL"
              required
            />
            <label className="label font-semibold text-black">Date</label>
             <input type="datetime-local" className="input w-150" />

            <label className="label font-semibold text-black">Email</label>
            <input
              type="email"
              name="email"
              className="input w-150"
              placeholder="Enter Your Email"
              
              required
            />

            <label className="label font-semibold text-black">Password</label>
            <input
              type="password"
              name="password"
              className="input w-150"
              placeholder="Enter Your Password"
              required
            />

            <button type="submit" className="btn btn-primary mt-10">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default AddListing;
