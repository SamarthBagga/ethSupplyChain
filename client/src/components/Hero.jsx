import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center max-w-2xl h-60 p-6 bg-cyan-100 text-center border-4 border-slate-800">
        <h2 className="text-5xl font-bold mb-10 text-black">Welcome to Our Website</h2>
        <div className="flex space-x-4">
          <Link to="/register">
            <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-md text-lg font-semibold text-gray-100">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-semibold text-gray-100">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
