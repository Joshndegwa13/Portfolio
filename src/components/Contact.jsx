import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Contact
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <FaEnvelope className="text-4xl text-primary" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <a 
                href="mailto:ndegwajosh7@gmail.com"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                ndegwajosh7@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <FaPhone className="text-4xl text-primary" />
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <a 
                href="tel:+254727435353"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                +254 727 435 353
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <FaLinkedin className="text-4xl text-primary" />
            <div>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <a 
                href="#" // Add your LinkedIn profile URL here
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <FaGithub className="text-4xl text-primary" />
            <div>
              <h3 className="text-xl font-bold">GitHub</h3>
              <a 
                href="#" // Add your GitHub profile URL here
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;