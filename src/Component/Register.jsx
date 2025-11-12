import React, { use, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

  const navigate=useNavigate()
  const [error,setError]=useState('')

    const {creatUser,updateUser,setUser}= use(AuthContext)
    const handleRgister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const image=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value

       
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      return setError("Password must have at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setError("Password must have at least one lowercase letter.");
    } else {
      setError("");
    }
        
        creatUser(email,password)
        .then(result=>{
          toast.success('Registration Successfully')
        
        const user=result.user
       
         updateUser(user,{ displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
        
        
        .catch(error=>{
            console.log(error);
        })

    }

    return (
      <>
      <title>PawMart | Register</title>
        <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h1 className="font-semibold text-2xl text-center">Register Now</h1>
        <div className="card-body py-5">
          <form onSubmit={handleRgister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
              />

              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter URL"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />

             {error&& <p className='text-sm text-red-500 mt-2'>{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already have an account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </>
    );
};

export default Register;