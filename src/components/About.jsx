import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            About
          </p>
        </motion.div>

        {/* First paragraph with slide-up animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mt-10 leading-relaxed"
        >
          Hi, I'm Joshua Ndegwa! I'm a web developer with a deep love for crafting engaging and visually striking front-end experiences. My passion lies in building intuitive, user-centered interfaces that combine creativity with clean, efficient code. From transforming complex concepts into sleek, interactive web applications to enhancing performance and responsiveness, I enjoy every detail of the front-end journey.
        </motion.p>

        {/* Second paragraph with delayed animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl mt-6 leading-relaxed"
        >
          With experience in modern frameworks and a constant drive to learn and adapt, I bring a fresh perspective and a collaborative spirit to every project. I'm always looking to push the boundaries of what's possible on the web and create experiences that leave a lasting impact. Let's connect and make the web a more beautiful, accessible place together.
        </motion.p>
      </div>
    </div>
  );
};

export default About;