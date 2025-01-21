import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    image: "/project1.jpg",
    description: "A modern e-commerce platform with secure payment integration, user-friendly navigation, and responsive design.",
  },
  {
    title: "Social Media App",
    image: "/project2.jpg",
    description: "An interactive social networking platform with real-time messaging, media sharing, and user profiles.",
  },
  {
    title: "Project Management Tool",
    image: "/project3.jpg",
    description: "A robust tool to streamline workflows, manage tasks, and collaborate efficiently with your team.",
  },
  {
    title: "Portfolio Website",
    image: "/project4.jpg",
    description: "A personal portfolio showcasing professional projects, skills, and achievements in a visually appealing format.",
  },
  {
    title: "Mobile Banking App",
    image: "/project5.jpg",
    description: "A secure and feature-rich app for seamless banking experiences, including fund transfers and account management.",
  },
  {
    title: "AI Chatbot",
    image: "/project6.jpg",
    description: "An intelligent chatbot offering automated customer support, powered by advanced AI algorithms.",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Thumbnail */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Description */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-lg">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Animations */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
    </section>
  );
};

export default Portfolio;
