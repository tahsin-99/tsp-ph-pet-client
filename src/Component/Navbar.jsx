import React, { use, useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import userlogo from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { logOut, user } = use(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

   useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


 const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.info("Logout Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <div className="flex flex-col lg:flex-row  text-[20px]  gap-5 font-semibold  ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/petsandsupplies">Pet & Supplies</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {user && (
          <>
            <NavLink to="/addlisting">Add Listing</NavLink>
            <NavLink to="/mylisting">My Listing</NavLink>
            <NavLink to="/myorders">My Orders</NavLink>

            
            
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-[#FFE9D2] sm:ml-4 lg:w-full  lg:ml-0   border-b border-[#BB86FC]/40 shadow-sm  text-black    ">
      <div className="navbar-start ">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  text-black"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex  items-center sm:gap-5 ">
          <img className="sm:w-20  w-10  " src={logo} alt="" />
          <p className="  sm:text-[48px] font-bold ">PawMart</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
        <div>
           <input
           onChange={(e)=>handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
        </div>
      <div className="navbar-end">
      {user && (
  <div className="dropdown dropdown-end mr-5">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-12 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
        <img
          src={
            user?.photoURL && user.photoURL.startsWith("http")
              ? user.photoURL
              : userlogo
          }
          alt="User Avatar"
        />
      </div>
    </label>

    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-base-100 text-base-content rounded-xl w-48"
    >
     
      <li>
        <Link
          to="/my-profile"
          className="flex items-center gap-3 rounded-lg 
          bg-orange-200 dark:bg-orange-900/40 
          text-orange-700 dark:text-orange-500
          hover:bg-orange-300 dark:hover:bg-orange-900 transition"
        >
          <span className="text-lg">👤</span>
          Profile
        </Link>
      </li>

      {/* Divider */}
      <div className="divider my-1"></div>

      {/* Logout */}
      <li>
        <button
          onClick={handleLogOut}
          className="flex items-center gap-3 rounded-lg 
          bg-red-100 dark:bg-red-900/40 
          text-red-700 dark:text-red-400
          hover:bg-red-200 dark:hover:bg-red-900 transition"
        >
          <span className="text-lg">🚪</span>
          Logout
        </button>
      </li>
    </ul>
  </div>
)}


        <div className="flex flex-col sm:flex-row gap-4 ">
          {
            user ? null:<div>
            <Link
              className="btn hover:bg-pink-700 hover:text-white border-[#c74d2f] w-[140px]"
              to="/register"
            >
              Register
            </Link>
          </div>
          }
          <div>
            {user ? null: (
              <Link
                className="btn bg-[#c74d2f] text-white hover:bg-emerald-600  w-[140px]"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
