import { useState } from 'react';
import {logo} from "../images/index"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-gray-700 bg-cream">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="relative md:mt-8">
          
            <img className="h-16 -top-2 -left-3  sm:h-18" src={logo} alt="logo" />
        
          </div>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                style={!isOpen ? { display: 'initial' } : { display: 'none' }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path
                style={isOpen ? { display: 'initial' } : { display: 'none' }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <a className="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">
            Home
          </a>
          <a className="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">
            Tournament
          </a>
       
          <a className="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">
            About Us
          </a>
          <a className="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">
            Contact Us
          </a>
         
          <a className="px-10 py-3 mt-2 text-lg font-semibold text-center bg-black text-white rounded-lg md:mt-8 md:ml-4" href="#">
          Login
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
