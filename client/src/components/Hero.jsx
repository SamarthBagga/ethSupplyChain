import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex justify-center max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md text-2xl">
        <Link to="/register">
            <button className="p-4">Register</button>
        </Link>
        <Link to="/login">
            <button className="p-4">Login</button>
        </Link>
    </div>
  )
}

export default Hero