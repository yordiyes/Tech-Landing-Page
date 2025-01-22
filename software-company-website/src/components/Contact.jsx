import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative"
    >
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-center">
        Contact Us
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6 p-4 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-red-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
    </section>
  );
};

export default Contact;
