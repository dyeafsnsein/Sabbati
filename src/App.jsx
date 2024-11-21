import React from 'react';
import Header from './Header';
import ShopSection from './ShopSection';
import './App.css';
import bgImage from './assets/bg.jpg';
import Footer from './Footer';

const App = () => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    height: '300vh',
    width: '99vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={sectionStyle} className="flex flex-col">
      <Header />
      <main className="p-4 h-full w-full m-0 p-0 mt-20 mb-[0px]">
        <ShopSection />
        
      </main>
   
      <Footer />
    </div>
  );
};

export default App;