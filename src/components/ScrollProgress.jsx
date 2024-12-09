import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
    mass: 0.8
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary origin-left z-50"
      style={{ 
        scaleX,
        opacity,
        filter: 'blur(0.5px)',
        boxShadow: '0 2px 8px rgba(13, 148, 136, 0.2)'
      }}
    />
  );
};

export default ScrollProgress;