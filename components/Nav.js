// components/Nav.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className={styles.nav}
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
