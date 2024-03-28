import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import samarth from '../assets/samarth.jpg';
import rahul from '../assets/rahul.jpg';


const Team = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl text-center font-semibold text-gray-800 lg:text-4xl">
          Our Team
        </h1>

        <div className="mt-2 text-center">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <p className="max-w-xl text-center mx-auto my-6 text-gray-500">
        At the core of our mission are these passionate individuals, committed to reshaping the future of supply chain management through blockchain technology.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={samarth}
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              samarth bagga
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
              developer
            </p>

            <div className="flex mt-3 -mx-2">
              <a
                href="https://www.linkedin.com/in/samarth-bagga-175453226/"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Linkedin"
              >
                <div className="text-xl fill-current">
                  <FaLinkedin />
                </div>
              </a>

              <a
                href="https://github.com/SamarthBagga"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Github"
              >
                <div className="text-xl fill-current">
                  <FaGithub />
                </div>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Twitter"
              >
                <div className="text-xl fill-current">
                  <FaXTwitter />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={rahul}
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              rahul arora
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
              developer
            </p>

            <div className="flex mt-3 -mx-2">
              <a
                href="https://www.linkedin.com/in/rahularora2715/"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Linkedin"
              >
                <div className="text-xl fill-current">
                  <FaLinkedin />
                </div>
              </a>

              <a
                href="https://github.com/rahularora27"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Github"
              >
                <div className="text-xl fill-current">
                  <FaGithub />
                </div>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                aria-label="Twitter"
              >
                <div className="text-xl fill-current">
                  <FaXTwitter />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
