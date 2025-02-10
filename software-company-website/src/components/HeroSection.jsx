"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactLogo from "../assets/React.png";
import NodeLogo from "../assets/Node.js.png";
import PythonLogo from "../assets/Python.png";


const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex flex-col justify-center items-center relative overflow-hidden text-white" id="home"
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl"
        animate={{ y: [0, 20, -20, 0], x: [0, -20, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-40 right-20 w-48 h-48 bg-pink-500/30 rounded-full blur-2xl"
        animate={{ y: [0, -30, 30, 0], x: [0, 30, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-40 w-56 h-56 bg-green-500/30 rounded-full blur-2xl"
        animate={{ y: [0, 15, -15, 0], x: [0, -25, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Center Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold drop-shadow-lg">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Build
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Ideas
          </motion.span>
        </h1>
        <p className="text-lg mt-4 font-light opacity-80 max-w-xl mx-auto">
          From concepts to creations, unleash your potential in software
          development. Craft the future, one line of code at a time.
        </p>
      </div>

      {/* Animated Code Snippets */}
      <motion.div
        className="absolute z-10 top-24 left-16 bg-gray-800 p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <code className="text-sm text-green-400">
          const buildIdeas = () =&gt; &#123;
          <br />
          &nbsp;&nbsp;console.log("Turning dreams into code!");
          <br />
          &#125;;
        </code>
      </motion.div>
      <motion.div
        className="absolute z-10 bottom-40 right-20 bg-gray-800 p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <code className="text-sm text-blue-400">
          fetch("/api/ideas")
          <br />
          &nbsp;&nbsp;.then((res) =&gt; res.json())
          <br />
          &nbsp;&nbsp;.then((data) =&gt; render(data));
        </code>
      </motion.div>

      {/* Floating Icons */}
      <motion.img
        src={ReactLogo}
        alt="React Icon"
        className="absolute top-1/4 left-1/3 w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
      <motion.img
        src={NodeLogo}
        alt="Node.js Icon"
        className="absolute bottom-1/3 right-1/4 w-16 h-16"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
      <motion.img
        src={PythonLogo}
        alt="Python Icon"
        className="absolute top-1/3 right-1/3 w-16 h-16"
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
