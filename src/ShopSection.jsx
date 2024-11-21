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
    <div className="w-full mb-100">
      <section className="flex items-center justify-between p-8 rounded-lg">
        <div className="flex-1 w-2/5">
          <h2 className="text-7xl font-bold text-blue-900 mb-4 ml-40">
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
          <img src={shopImage} alt="Shop" className="w-full h-auto rounded-lg " />
        </div>
      </section>

      <div className="mt-10 flex justify-between w-full h-[600px] overflow-hidden " >
        <div className="relative w-1/2 h-full">
          {images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Left Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === leftImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => setLeftImageIndex(index)}
                className={`h-2 w-2 rounded-full ${index === leftImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-1/2 h-full">
          {images.slice(3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Right Image ${index + 4}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === rightImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.slice(3).map((_, index) => (
              <button
                key={index}
                onClick={() => setRightImageIndex(index)}
                className={`h-2 w-2 rounded-full ${index === rightImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-12 px-4">
      <h1 className="text-6xl text-blue-900 font-extrabold mb-4">
        GREATNESS.<br />IT ONLY TAKES EVERYTHING.
      </h1>
      <p className="text-lg text-blue-900 font-light mb-6">
        Give it your all in the collection from the player who gave it his all, every game, shot, and point.
      </p>
      <a
        href="#"
        className="bg-blue-800 text-white px-6 py-3 rounded font-bold text-sm inline-block"
      >
        Shop
      </a>
    </div>
    <div className="flex flex-col w-full">
          <img src={sh7} alt="Shop" className="w-full h-auto rounded-lg " />
        </div>

    </div>
  );
};

export default ShopSection;
