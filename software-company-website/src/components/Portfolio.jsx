import React from 'react';

const projects = [
  { title: 'E-commerce Website', image: '/project1.jpg' },
  { title: 'Social Media App', image: '/project2.jpg' },
  { title: 'Project Management Tool', image: '/project3.jpg' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
