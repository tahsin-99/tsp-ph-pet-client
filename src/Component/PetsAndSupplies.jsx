import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const PetsAndSupplies = () => {
  const data = useLoaderData();
  const [cards, setCards] = useState(data);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    location: "All",
  });

  // Get unique categories and locations
  const categories = ["All", ...new Set(data.map((d) => d.category))];
  const locations = ["All", ...new Set(data.map((d) => d.location))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    let filtered = data;

    if (filters.search.trim() !== "") {
      const searchText = filters.search.toLowerCase();
      filtered = filtered.filter((d) =>
        d.name.toLowerCase().includes(searchText)
      );
    }

    if (filters.category !== "All") {
      filtered = filtered.filter((d) => d.category === filters.category);
    }

    if (filters.location !== "All") {
      filtered = filtered.filter((d) => d.location === filters.location);
    }

    setCards(filtered);
    setLoading(false);
  };

  return (
    <>
      <title>PawMart | Pets & Supplies</title>

      {/* Filters */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 mt-60"
      >
        {/* Search input */}
        <input
          name="search"
          type="search"
          placeholder="Search by name"
          value={filters.search}
          onChange={handleFilterChange}
          className="input input-sm rounded-full w-40 sm:w-60"
        />

        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="input input-sm rounded-full w-40"
        >
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="input input-sm rounded-full w-40"
        >
          {locations.map((l, i) => (
            <option key={i} value={l}>
              {l}
            </option>
          ))}
        </select>

        {/* Search button on the right side */}
        <button
          type="submit"
          className="btn btn-primary btn-sm rounded-full"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 p-5">
          {cards.length === 0 ? (
            <p className="text-center col-span-full text-lg font-semibold">
              No items found
            </p>
          ) : (
            cards.map((d) => (
              <div
                key={d._id}
                className="card border w-96 shadow-sm transform transition-transform duration-150 hover:-translate-y-2 cursor-pointer border-[#c74d2f] bg-base-100"
              >
                <figure>
                  <img
                    className="p-5 w-full h-56 object-cover rounded-lg"
                    src={d.image}
                    alt={d.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{d.name}</h2>
                  <p>{d.title}</p>
                  <div className="card-actions justify-between mt-2">
                    <div className="badge font-semibold bg-amber-500 badge-outline">
                      ৳{d.price}
                    </div>
                    <div className="badge badge-outline">{d.location}</div>
                  </div>
                  <Link
                    to={`/card-ditails/${d._id}`}
                    className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white active:scale-95 bg-orange-300 mt-3"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PetsAndSupplies;
