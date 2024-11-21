import React from 'react';
import c0 from './assets/c0.png';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 p-4 font-poppins backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <img src={c0} alt="Logo 0" className="h-10 mt-5" />
          <img src={c1} alt="Logo 1" className="h-10 mt-5" />
          <img src={c2} alt="Logo 2" className="h-[82px]" />
          <img src={c3} alt="Logo 3" className="h-[82px]" />
        </div>
        <div className="text-center text-gray-600">
          <p>© 2024 Sabbati, Inc. All Rights Reserved</p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="#" className="hover:text-blue-600">Guides</a>
            <a href="#" className="hover:text-blue-600">Terms of Sale</a>
            <a href="#" className="hover:text-blue-600">Terms of Use</a>
            <a href="#" className="hover:text-blue-600">Nike Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Your Privacy Choices</a>
            <a href="#" className="hover:text-blue-600">CA Supply Chains Act</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;