import React from 'react';
import Header from './Header';
import ShopSection from './ShopSection';
import Footer from './Footer';
import bgImage from './assets/bg.jpg';

const App = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <main className="pt-20">
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;