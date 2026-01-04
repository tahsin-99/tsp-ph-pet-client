import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { creatUser, updateUser, setUser } = useContext(AuthContext);

  const handleRgister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      return setError("Password must have at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setError("Password must have at least one lowercase letter.");
    } else {
      setError("");
    }

    creatUser(email, password)
      .then(result => {
        toast.success('Registration Successfully');
        const user = result.user;

        updateUser(user, { displayName: name, photoURL: image })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: image });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <title>PawMart | Register</title>
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 mt-60">

        {/* Left image */}
        <div className="flex-shrink-0">
          <img 
            width={600} 
            src="https://images.unsplash.com/flagged/photo-1576750838333-bb2fa29750f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Pets with owners" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right form */}
        <div className="card w-full max-w-sm shadow-2xl py-10 bg-white dark:bg-gray-800">
          <h1 className="font-semibold text-2xl text-center text-gray-800 dark:text-gray-100">Register Now</h1>
          <div className="card-body py-5">
            <form onSubmit={handleRgister}>
              <fieldset className="fieldset">
                
                <label className="label text-gray-800 dark:text-gray-100">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  placeholder="Enter Your Name"
                  required
                />

                <label className="label text-gray-800 dark:text-gray-100">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  placeholder="Enter URL"
                  required
                />

                <label className="label text-gray-800 dark:text-gray-100">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  placeholder="Enter Your Email"
                  required
                />

                <label className="label text-gray-800 dark:text-gray-100">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  placeholder="Enter Your Password"
                  required
                />

                {error && <p className='text-sm text-red-500 mt-2'>{error}</p>}

                <button 
                  type="submit" 
                  className="btn mt-4 w-full bg-orange-400 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-600 text-white"
                >
                  Register
                </button>

                <p className="font-semibold text-center pt-5 text-gray-800 dark:text-gray-100">
                  Already have an account?{" "}
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
