import React from 'react';
import c0 from './assets/c0.png';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 p-4 font-poppins backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section with Hover Effects */}
        <div className="flex space-x-4 mb-4">
          {[c0, c1, c2, c3].map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Logo ${index}`} 
              className="h-10 mt-5 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
            />
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <i className={`fab fa-${social} text-2xl`}></i>
            </a>
          ))}
        </div>

        {/* Footer Content */}
        <div className="text-center text-gray-600">
          <p className="mb-2">© 2024 Sabbati, Inc. All Rights Reserved</p>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
            {[
              'Guides', 
              'Terms of Sale', 
              'Terms of Use', 
              'Nike Privacy Policy', 
              'Your Privacy Choices', 
              'CA Supply Chains Act'
            ].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="hover:text-blue-600 hover:underline transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 w-full max-w-md">
          <div className="flex">
            <input 
              type="email" 
              placeholder="Subscribe to our newsletter" 
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;