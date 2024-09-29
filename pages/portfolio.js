// pages/portfolio.js
import { motion } from 'framer-motion';
import Nav from '../components/Nav';

const PortfolioSection = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      {/* Resume Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mx-auto py-12"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">My Resume</h2>
        <div className="flex justify-center">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="600px"
            className="border-2 border-gray-300"
          ></iframe>
        </div>
      </motion.section>

     
    </div>
  );
};

export default PortfolioSection;
