import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; 2025 DevCompany. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#facebook" className="hover:text-blue-500">Facebook</a>
          <a href="#twitter" className="hover:text-blue-500">Twitter</a>
          <a href="#linkedin" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
