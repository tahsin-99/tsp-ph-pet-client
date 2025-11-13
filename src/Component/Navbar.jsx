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
    <div className="navbar bg-[#FFE9D2] sm:ml-4 lg:w-full  lg:ml-0   border-b border-[#BB86FC]/40 shadow-sm  text-black   mt-10 ">
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
       {
        user&&(
          <div>

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
          </div>
        )
       }

        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <Link
              className="btn hover:bg-pink-700 hover:text-white border-[#c74d2f] w-[140px]"
              to="/register"
            >
              Register
            </Link>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-[#f97f2d] text-black hover:bg-red-600 hover:text-white  w-[140px]"
                to="/login"
              >
                LogOut
              </button>
            ) : (
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
