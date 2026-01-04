import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { googleLogin, Login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    Login(email, password)
      .then(() => {
        toast.success('Logged in Successfully');
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Logged in Successfully');
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <title>PawMart | Login</title>
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 mt-60">

      
        <div className="flex-shrink-0  ">
          <img 
            width={600} 
            src="https://plus.unsplash.com/premium_photo-1681843815216-f50fc50d0b8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Pets with owners" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Form */}
        <div className="card w-full max-w-sm shadow-2xl py-10 bg-white dark:bg-gray-800">
          <h1 className="font-semibold text-2xl text-center text-gray-800 dark:text-gray-100">
            Login Your Account
          </h1>
          <form onSubmit={handleLogin} className="card-body py-5">
            <fieldset className="fieldset">
              
              <label className="label text-gray-800 dark:text-gray-100">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                placeholder="Email"
                required
              />

              <label className="label text-gray-800 dark:text-gray-100">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn w-full mt-4 bg-orange-400 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-600 text-white"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn w-full mt-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-gray-100 flex items-center justify-center gap-2"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <p className="font-semibold text-center pt-5 text-gray-800 dark:text-gray-100">
                Don’t have an account?{" "}
                <Link className="text-secondary" to="/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
