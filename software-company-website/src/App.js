import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import "./App.css"
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
};
export default App;
