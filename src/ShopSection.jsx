import React, { useState, useEffect } from 'react';
import shopImage from './assets/image1_0.png';

import sh1 from './assets/sh1.png';
import sh2 from './assets/sh2.png';
import sh3 from './assets/sh3.png';
import sh4 from './assets/sh4.png';
import sh5 from './assets/sh5.png';
import sh6 from './assets/sh6.png';
import sh7 from './assets/sh7.png';

const images = [sh1, sh2, sh3, sh4, sh5, sh6];

const ShopSection = () => {
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(0);

  const nextLeftImage = () => {
    setLeftImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const nextRightImage = () => {
    setRightImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const leftInterval = setInterval(nextLeftImage, 4000);
    const rightInterval = setInterval(nextRightImage, 5000);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="w-full m-0 p-0 overflow-hidden bg-">
      {/* First section remains the same */}
      <section className="flex items-center justify-between p-0 m-0 rounded-lg">
        <div className="flex-1 w-2/5">
          <h2 className="text-8xl font-bold text-blue-900 mb-4 ml-40">
            Discover Amazing Products
          </h2>
          <p className="text-gray-600 mb-6 ml-40">
            Explore our wide range of products tailored just for you. Find what you love and enjoy great deals!
          </p>
          <button className="bg-gradient-to-r from-blue-200 to-blue-600 text-white py-3 px-5 rounded-xl transition duration-300 hover:from-blue-300 hover:to-blue-700 ml-40">
            Shop Now!
          </button>
        </div>
        <div className="flex-none w-2/5">
          <img src={shopImage} alt="Shop" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Modern image gallery section */}
      <div className="relative w-full h-[600px] flex overflow-hidden">
        <div className="relative w-1/2 h-full group">
          {images.slice(0, 3).map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === leftImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img
                src={image}
                alt={`Left Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => setLeftImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === leftImageIndex ? 'bg-blue-600 w-6' : 'bg-white/50 hover:bg-blue-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-1/2 h-full group">
          {images.slice(3).map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === rightImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img
                src={image}
                alt={`Right Image ${index + 4}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.slice(3).map((_, index) => (
              <button
                key={index}
                onClick={() => setRightImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === rightImageIndex ? 'bg-blue-600 w-6' : 'bg-white/50 hover:bg-blue-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modern motivational section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight leading-tight">
            GREATNESS IS A JOURNEY.<br />
            EMBRACE EVERY MOMENT.
          </h1>
          <p className="text-xl font-light mb-8 opacity-80">
            Every challenge is an opportunity. Every setback, a lesson. Push beyond limits and redefine your potential.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Full width image */}
      <div className="w-full">
        <img 
          src={sh7} 
          alt="Shop" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default ShopSection;