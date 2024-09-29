// pages/index.js
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Nav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center flex-1 p-8"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8 text-gray-600">Showcasing my work and projects</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.imageContainer}
        >
          <Image
            src="/profile.jpg"
            alt="Portfolio"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <a
            href="/portfolio"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}


