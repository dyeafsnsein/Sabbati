import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, UserIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import logo from './assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-4 font-poppins fixed top-0 left-0 right-0 z-50 transition duration-300 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
          <h1 className="text-xl font-bold" style={{ color: '#150259' }}>Sabbati</h1>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-blue-600 font-bold" style={{ color: '#150259' }}>Home</a>
          <a href="#" className="hover:text-blue-600 font-bold" style={{ color: '#150259' }}>Men</a>
          <a href="#" className="hover:text-blue-600 font-bold" style={{ color: '#150259' }}>Women</a>
          
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center hover:text-blue-600 font-bold"
              style={{ color: '#150259' }}
            >
              <ChevronDownIcon className="mr-2 h-4 w-4" fill="#150259" />
              Shop List
            </button>
            {isOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white bg-opacity-70 backdrop-blur-md text-black rounded-lg shadow-lg z-20">
                <ul className="py-2">
                  <li><a href="#" className="flex items-center px-4 py-2 hover:bg-orange-200 transition duration-200"><span className="mr-2">📦</span>Item 1</a></li>
                  <li><a href="#" className="flex items-center px-4 py-2 hover:bg-orange-200 transition duration-200"><span className="mr-2">📦</span>Item 2</a></li>
                  <li><a href="#" className="flex items-center px-4 py-2 hover:bg-orange-200 transition duration-200"><span className="mr-2">📦</span>Item 3</a></li>
                  <li><a href="#" className="flex items-center px-4 py-2 hover:bg-orange-200 transition duration-200"><span className="mr-2">📦</span>Item 4</a></li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center mx-4 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-300 rounded-full p-2 pl-10 focus:outline-none backdrop-blur-md bg-white bg-opacity-30" 
            />
            <MagnifyingGlassIcon className="absolute ml-2 h-5 w-5 text-blue-600" />
          </div>

          <a href=""><UserIcon className="h-6 w-6 text-blue-600 cursor-pointer" style={{color:"#150259"}} /></a>
          <a href=""><HeartIcon className="h-6 w-6 text-blue-600 cursor-pointer" style={{color:"#150259"}}/></a>         
          <a href=""><ShoppingBagIcon className="h-6 w-6 text-blue-600 cursor-pointer" style={{color:"#150259"}}/></a>
        </div>
      </div>
    </nav>
  );
};

export default Header;