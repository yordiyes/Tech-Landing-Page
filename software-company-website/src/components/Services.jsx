import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Web Development', description: 'Modern and responsive websites.' },
  { title: 'Mobile Apps', description: 'Cross-platform mobile applications.' },
  { title: 'Cloud Solutions', description: 'Reliable and scalable cloud services.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
