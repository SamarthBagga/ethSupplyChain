import React, { useState } from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import { BiMenuAltRight } from "react-icons/bi";
import DeployContract from './DeployContract';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
        <a className="sm:order-1 flex-none text-xl font-semibold" href="#">
          Name
        </a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 shadow-sm"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <BiMenuAltRight
              className={`hs-collapse-open:${isMenuOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" />
          </button>
          <ConnectWallet
              theme="light"
              modalSize="compact"
              showThirdwebBranding={false}
          />
          <DeployContract/>
        </div>
        <div
          id="navbar-alignment"
          className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a className="font-medium text-gray-600 hover:text-gray-400" href="#">
              Link 1
            </a>
            <a className="font-medium text-gray-600 hover:text-gray-400" href="#">
              Link 2
            </a>
            <a className="font-medium text-gray-600 hover:text-gray-400" href="#">
              Link 3
            </a>
            <a className="font-medium text-gray-600 hover:text-gray-400" href="#">
              Link 4
            </a>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
