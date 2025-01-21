import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
