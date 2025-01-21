import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">DevCompany</h1>
        <ul className="flex gap-6">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
