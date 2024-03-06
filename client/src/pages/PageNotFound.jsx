import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiWarningCircleBold } from "react-icons/pi";

const PageNotFound = () => {

    const navigate = useNavigate();

  return (
    <section class="bg-white">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div class="flex flex-col items-center max-w-sm mx-auto text-center">
            <p class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 ">
                <div className='text-3xl'>
                    <PiWarningCircleBold />
                </div>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-500">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <button onClick={() => navigate(-1)} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                            <div>
                               <FaArrowLeftLong />
                            </div>
                            
                            <span>Go back</span>
                        </button>
                        <Link to='/'>
                        <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                            Take me home
                        </button>
                        </Link>
                    </div>
                </div>
    </div>
    </section>
  )
}

export default PageNotFound