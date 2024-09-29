// pages/contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { TextField, PrimaryButton, MessageBar, MessageBarType } from '@fluentui/react';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e, newValue) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_b4zltns', 'template_7aqmktx', e.target, '5C9osZuCYQRpjhWIs')
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl text-center mx-auto py-12 flex-1"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Me</h2>
        {submitted ? (
          <MessageBar
            messageBarType={MessageBarType.success}
            isMultiline={false}
            className={styles.messageBar}
          >
            Thank you for your message! I'll get back to you soon.
          </MessageBar>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="Your Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.textField}
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.textField}
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.textField}
            />
            <PrimaryButton
              type="submit"
              text="Send Message"
              className={styles.submitButton}
            />
          </form>
        )}
      </motion.main>
      <Footer />
    </div>
  );
};

export default ContactPage;
