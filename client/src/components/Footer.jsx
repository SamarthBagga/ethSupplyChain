import React from 'react';
import { FaReddit, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img className="w-auto h-7" src="#" alt="Logo" />
        </a>

        <p className="text-sm text-gray-600">© Copyright 2024. All Rights Reserved.</p>

        <div className="flex -mx-2">
          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500">
            <div className="text-lg fill-current" viewBox="0 0 24 24" fill="none">
              <FaReddit />
            </div>
          </a>

          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500">
            <div className="text-lg fill-current" viewBox="0 0 24 24" fill="none">
              <FaFacebook />
            </div>
          </a>

          <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500">
            <div className="text-lg fill-current" viewBox="0 0 24 24" fill="none">
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
