import React, { use } from "react";
import logo from "../assets/logo.jpg";
import userlogo from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
const Navbar = () => {
  const { logOut, user } = use(AuthContext);
  const navigate = useNavigate();
  

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logout Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <div className="flex flex-col lg:flex-row  text-[20px]  gap-5 font-semibold ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/petsandsupplies">Pet & Supplies</NavLink>

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
    <div className="navbar    border-b border-[#BB86FC]/40 shadow-sm md:ml-30 p-10  lg:mx-auto mt-10 ">
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
          <img className="sm:w-20  " src={logo} alt="" />
          <p className="  sm:text-[48px] font-bold ">PawMart</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/my-profile">
          <img className="w-[45px] rounded-full mr-5"
            src={
              user?.photoURL &&
              typeof user.photoURL &&
              user.photoURL.startsWith("http")
                ? user.photoURL
                : userlogo
            }
            alt="User Avatar"
            
          />
        </Link>

        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <Link
              className="btn btn-outline btn-primary w-[140px]"
              to="/register"
            >
              Register
            </Link>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-primary hover:bg-red-400   w-[140px]"
                to="/login"
              >
                LogOut
              </button>
            ) : (
              <Link
                className="btn btn-primary hover:bg-emerald-600  w-[140px]"
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
