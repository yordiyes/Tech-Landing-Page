import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} DevCompany. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="#facebook"
            className="hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#twitter"
            className="hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#linkedin"
            className="hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
      {/* Decorative Floating Elements */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 right-10 w-52 h-52 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </footer>
  );
};

export default Footer;
