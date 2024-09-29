// pages/about.js
import Nav from '../components/Nav';
//import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  const skills = [
    { name: 'JavaScript / TypeScript', image: '/skills/javascript.png' },
    { name: 'React / Next.js', image: '/skills/react.png' },
    { name: 'Node.js / Express', image: '/skills/react.png' },
    { name: 'HTML / CSS / SASS', image: '/skills/react.png' },
    { name: 'Git / GitHub', image: '/skills/git.png' },
  ];

  return (
    <div className={styles.container}>
      <Nav />
      <motion.main 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
        className={styles.main}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.profileImage}
        >
          <Image 
            src="/portfolio.png" 
            alt="Profile Picture" 
            width={150} 
            height={150} 
            className={styles.image}
          />
        </motion.div>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
        👋🏾 Hello! I'm Anski Saint-Fleur, a passionate developer who loves creating dynamic and engaging web applications. With a background in Computer Science and Innovation, I specialize in full-stack development. When I'm not coding, you can find me playing basketball 🏀, lifting weights 🏋🏾, or learning something new 🧠.
        </p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          className={styles.skills}
        >
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                <Image 
                  src={skill.image} 
                  alt={skill.name} 
                  width={50} 
                  height={50} 
                  className={styles.skillImage}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.main>
    </div>
  );
}
