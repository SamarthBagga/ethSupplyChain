import React from 'react';
import { LuHeartHandshake } from "react-icons/lu";
import { FcLock, FcGlobe, FcCloseUpMode } from "react-icons/fc";
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import  scm_browser  from '../assets/scm_browser.png';


const Features = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl">Features <br/> we promise</h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-3xl text-emerald-600 md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <LuHeartHandshake />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Transparent and Trustworthy</h1>

                <p className="mt-3 text-gray-500">
                Say goodbye to opacity in your supply chain. Our Ethereum-based solution ensures every transaction and movement is securely recorded on the blockchain, fostering trust among stakeholders. Track the journey of your products in real-time, reducing the risk of fraud and enhancing overall transparency.
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-3xl md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <FcLock />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Security at its Core</h1>

                <p className="mt-3 text-gray-500">
                Rest easy knowing that your data is protected by Ethereum's robust blockchain technology. Our platform employs smart contracts to automate and secure transactions, minimizing the potential for errors and unauthorized access. Your sensitive information is shielded by the power of decentralization.
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-3xl text-rose-600 md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <MdOutlineRocketLaunch />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Efficiency Redefined</h1>

                <p className="mt-3 text-gray-500">
                Boost your operational efficiency with our streamlined processes. Smart contracts automate and execute predefined actions when specific conditions are met, reducing the need for intermediaries and accelerating the pace of your supply chain. Experience a faster, more agile, and cost-effective approach to managing your logistics.                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-3xl text-blue-500 md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <FcGlobe />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Global Reach, Local Impact</h1>

                <p className="mt-3 text-gray-500">
                Expand your horizons with a supply chain solution that transcends borders. Ethereum's decentralized nature enables seamless global collaboration while respecting local regulations. Break down geographical barriers and connect with suppliers, manufacturers, and distributors around the world effortlessly.                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-3xl text-blue-500 md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <FcCloseUpMode />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Sustainability in Focus</h1>

                <p className="mt-3 text-gray-500">
                Embrace sustainability with a supply chain solution designed to minimize waste and environmental impact. Ethereum's energy-efficient consensus mechanism aligns with our commitment to creating a greener future. Join us in building a supply chain that is not only efficient but also environmentally responsible.                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="text-2xl text-amber-800 md:mx-4">
                <div className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <FaSuitcase />
                </div>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize">Tailored for Your Business</h1>

                <p className="mt-3 text-gray-500">
                No two supply chains are alike, and we understand that. Our flexible platform can be customized to meet the unique needs of your business. Whether you're a small-scale producer or a large multinational corporation, our Ethereum-based solution scales with you.                </p>
              </div>
            </div>

          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img className="" src={scm_browser} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
