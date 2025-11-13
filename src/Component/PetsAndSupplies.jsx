import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const PetsAndSupplies = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(data);
  console.log(cards);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`https://pet-supply-server.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data);
        setLoading(false);
      });
  };
  return (
    <>
      <title>PawMart | Pets&Supplies</title>

      <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-primary  rounded-full">
          {loading ? "Searching...." : "Search"}
        </button>
      </form>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-20 p-5 ">
          {cards.map((d) => (
            <div
              key={d._id}
              className="card border w-96 shadow-sm  transform transition-transform duration-150  hover:-translate-y-4  cursor-pointer  border-[#c74d2f]"
            >
              <figure>
                <img className="p-5" src={d.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {d.name}
                  <div className="badge badge-secondary">{d.category}</div>
                </h2>
                <p>{d.title}</p>
                <div className="card-actions ">
                  <div className="badge font-semibold bg-amber-500 badge-outline">
                    ৳{d.price}
                  </div>
                  <div className="badge bg-green-500 badge-outline">
                    {d.location}
                  </div>
                  <div className="badge bg-blue-300 badge-outline">
                    {d.date}
                  </div>
                </div>
                <Link
                  to={`/card-ditails/${d._id}`}
                  className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white active:scale-95 bg-orange-300 "
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PetsAndSupplies;
