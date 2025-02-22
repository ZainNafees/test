import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // Add authentication logic here (if needed)
    navigate("/home"); // Navigate to Home page after login
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Log in to your Account</h1>
        <p className="text-gray-500 mb-6">Welcome back! Select method to log in:</p>

        {/* Social Login */}
        <div className="flex gap-4 w-full max-w-sm">
          <button className="flex items-center justify-center w-full p-3 border rounded-md hover:bg-gray-100">
            <img src="/google.png" alt="Google" className="w-7 h-7 mr-2" /> Login with Google
          </button>
        </div>

        <div className="my-6 w-full max-w-sm border-b border-gray-300 text-center leading-none">
          <span className="bg-white px-4 text-gray-500">or continue with email</span>
        </div>

        {/* Email & Password Form */}
        <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Log in
          </button>
        </form>

        <p className="text-gray-500 mt-6">
          Don’t have an account? <Link to="/Register" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-10 h-full">
        <div className="text-white text-center mb-10">
          <img src="/img.png" alt="Dashboard Preview" className="w-3/4 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Connect with every application.</h2>
          <p className="mt-2 text-gray-200">Everything you need in an easily customizable dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
