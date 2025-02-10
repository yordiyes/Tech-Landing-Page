import React from "react";
import { motion } from "framer-motion";
import com from "../assets/com.jpg";

const projects = [
  {
    title: "E-commerce Website",
    image: { com },
    description:
      "A modern e-commerce platform with secure payment integration, user-friendly navigation, and responsive design.",
  },
  {
    title: "Social Media App",
    image: { com },
    description:
      "An interactive social networking platform with real-time messaging, media sharing, and user profiles.",
  },
  {
    title: "Project Management Tool",
    image: { com },
    description:
      "A robust tool to streamline workflows, manage tasks, and collaborate efficiently with your team.",
  },
  {
    title: "Portfolio Website",
    image: { com },
    description:
      "A personal portfolio showcasing professional projects, skills, and achievements in a visually appealing format.",
  },
  {
    title: "Mobile Banking App",
    image: { com },
    description:
      "A secure and feature-rich app for seamless banking experiences, including fund transfers and account management.",
  },
  {
    title: "AI Chatbot",
    image: { com },
    description:
      "An intelligent chatbot offering automated customer support, powered by advanced AI algorithms.",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-center">
        Our Portfolio
      </h2>
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Thumbnail */}
            <motion.img
              src={com}
              alt={project.title}
              className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Description */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h3
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.4, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Floating Animations */}
      <motion.div
        className="absolute top-0 left-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl -z-10"
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10"
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>
    </motion.section>
  );
};

export default Portfolio;
