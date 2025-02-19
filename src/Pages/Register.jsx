import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white h-full">
        <h1 className="text-2xl font-bold text-gray-800 mt-5">Create an Account</h1>
        <p className="text-gray-500 mb-6">Sign up to get started:</p>

        {/* Social Login */}
        <div className="flex gap-4 w-full max-w-sm">
          <button className="flex items-center justify-center w-full p-3 border rounded-md hover:bg-gray-100">
            <img src="/google.png" alt="Google" className="w-7 h-7 mr-2" /> SignUp with Google
          </button>
        </div>

        <div className="my-6 w-full max-w-sm border-b border-gray-300 text-center leading-none">
          <span className="bg-white px-4 text-gray-500">or continue with email</span>
        </div>

        {/* Registration Form */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        <p className="text-gray-500 mt-6">
  Already have an account? <Link to="/" className="text-blue-500 hover:underline">Log in</Link>
</p>

      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-10">
  <div className="text-white text-center mb-10">
    <img src="/img.png" alt="Dashboard Preview" className="w-3/4 mx-auto mb-4" />
    <h2 className="text-2xl font-bold">Connect with every application.</h2>
    <p className="mt-2 text-gray-200">Everything you need in an easily customizable dashboard.</p>
  </div>
</div>
    </div>
  );
};

export default Register;
