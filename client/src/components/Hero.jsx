import React from 'react';
import { Link } from 'react-router-dom';
import truck from '../assets/truck.webp';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-cover bg-center flex items-center justify-center">
      <img src={truck} alt="Hero background" className="absolute inset-0 object-cover w-full h-full opacity-60" />
      <div className="container mx-auto px-4 py-16 text-center z-10">
        <h1 className="text-5xl font-bold text-black mb-8">Welcome to the Website</h1>
        <div className="flex justify-center space-x-4">
          <Link to="/register">
            <button className="py-3 w-40 bg-teal-500 hover:bg-teal-600 rounded-md text-lg font-semibold text-gray-100">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="py-3 w-40 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-semibold text-gray-100">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
