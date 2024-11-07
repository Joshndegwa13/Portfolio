import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-full text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Web Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-lg sm:text-xl"
          >
            Passionate about creating beautiful and functional web experiences. Skilled in both frontend and backend development, with a primary focus on crafting intuitive, user-centric interfaces using modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group inline-flex items-center gap-2 px-6 py-3 my-2 rounded-md bg-gradient-to-r from-primary to-primary-light cursor-pointer hover:scale-105 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;