import React from 'react';
import { Link } from 'react-router-dom';
import scm from '../assets/scm.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from './Features';

const Hero = () => {
  return (
    <>
    <Header />
    
    <div className="container px-6 py-2 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-6xl"> Give your business <br/>a new <span className="text-blue-500">life</span></h1>
                    
                    <p className="mt-3 text-lg text-gray-600">Our platform leverages the transparency, security, and efficiency of blockchain to streamline your business operations, paving the way for a seamless journey from production to delivery!</p>
                    <Link to='/register'>
                    <button className="font-semibold w-full px-5 py-2 mt-6 text-md tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="hidden lg:flex w-full h-full lg:max-w-3xl" src={scm}/>
            </div>
        </div>
    </div>

    <Features />
    
    <Footer />
    </>
  );
};

export default Hero;
