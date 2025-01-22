import React from "react";
import { motion } from "framer-motion";
import team from "../assets/team.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* About Content */}
        <motion.div
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Your Digital Journey
          </motion.h3>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At DevCompany, we are dedicated to crafting innovative digital
            solutions tailored to your needs. With a passion for technology and
            creativity, we turn ideas into reality and ensure your success in
            the digital landscape.
          </motion.p>
        </motion.div>

        {/* Decorative Image */}
        <motion.img
          src={team} // Replace with a relevant image
          alt="About Us"
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>

      {/* Floating Animations */}
      {/* <div className="absolute -top-20 left-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-0 right-10 w-52 h-52 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div> */}
     <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 opacity-20 rounded-full blur-3xl z-10"
        animate={{ x: [0, 15, -15, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-green-500 opacity-20 rounded-full blur-3xl z-10"
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>
    </section>
  );
};

export default About;
