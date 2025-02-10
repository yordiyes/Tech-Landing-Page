import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1, rotate: 10 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
          className="text-2xl font-extrabold text-blue-400 cursor-pointer"
        >
          DevCompany
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-white">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link, index) => (
            <motion.li
              key={link}
              whileHover={{
                scale: 1.2,
                textShadow: '0px 0px 8px rgba(59, 130, 246, 1)',
                color: '#3b82f6',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer hover:text-blue-500"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -5,
            textShadow: '0px 0px 10px rgba(59, 130, 246, 1)',
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
