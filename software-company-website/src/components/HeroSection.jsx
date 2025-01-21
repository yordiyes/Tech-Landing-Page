import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building Innovative Solutions
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We bring your ideas to life with cutting-edge technology.
      </motion.p>
      <motion.a
        href="#contact"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Get Started
      </motion.a>
    </section>
  );
};

export default HeroSection;
