// pages/projects.js
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'Web Development',
    image: '/projects/project1.png',
    link: '/projects/1',
    description: 'A web development project using modern technologies.',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Mobile App',
    image: '/projects/project2.png',
    link: '/projects/2',
    description: 'A mobile app project with a focus on user experience.',
  },
  // Add more projects here
];

const categories = ['All', 'Web Development', 'Mobile App'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto py-12 px-4 flex-1"
      >
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800">
          My Projects
        </h2>
        <div className="flex justify-center mb-12 space-x-2 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.1 }}
              className={`px-5 py-2 rounded-full border${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
              } transition-colors duration-200 ease-in-out m-1`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.category}</p>
                <p className="text-gray-600 flex-grow">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default ProjectsSection;
