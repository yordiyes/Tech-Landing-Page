import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting modern, responsive, and user-friendly websites tailored to your needs.",
  },
  {
    title: "Mobile Apps",
    description:
      "Developing seamless cross-platform mobile applications with great user experiences.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Providing scalable, secure, and efficient cloud services for businesses of all sizes.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually stunning and intuitive designs that resonate with your audience.",
  },
  {
    title: "API Development",
    description:
      "Building robust and scalable APIs to power your applications.",
  },
  {
    title: "AI Integration",
    description:
      "Implementing smart AI solutions to automate and enhance your workflows.",
  },
];

const Services = () => {
  return (
    <section
  id="services"
  className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-center relative overflow-hidden"
>
  {/* Subtle Background Animation */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <motion.div
      className="absolute top-[-200px] left-[15%] w-[400px] h-[400px] bg-gradient-to-br from-blue-300 to-purple-300 blur-2xl opacity-20 rounded-full"
      animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-200px] right-[20%] w-[500px] h-[500px] bg-gradient-to-br from-purple-300 to-blue-300 blur-2xl opacity-20 rounded-full"
      animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    />
  </div>

  {/* Section Title */}
  <motion.h2
    className="text-4xl font-extrabold text-gray-800 mb-12 relative"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Our Expertise
  </motion.h2>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{
          scale: 1.05,
          rotate: [0, 1, -1, 0],
          transition: { duration: 0.4 },
        }}
      >
        {/* Decorative Line */}
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"
          layoutId={`line-${index}`}
        />

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 relative">
          {service.title}
        </h3>

        <p className="text-gray-600 relative">{service.description}</p>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-500 opacity-0 rounded-lg blur-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default Services;
