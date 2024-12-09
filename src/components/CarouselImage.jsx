import React from 'react';
import { motion } from 'framer-motion';

const CarouselImage = ({ src, alt, direction, isActive }) => {
  const variants = {
    enter: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 1.1 : 0.9,
      filter: 'blur(8px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 0.9 : 1.1,
      filter: 'blur(8px)',
    }),
  };

  const transition = {
    opacity: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    scale: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    filter: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      className="absolute inset-0 overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain max-h-[725px] transform-gpu"
          loading={isActive ? "eager" : "lazy"}
          decoding="async"
          style={{
            maxWidth: '1365px',
            aspectRatio: 'auto',
            objectPosition: 'center'
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"
      />
    </motion.div>
  );
};

export default CarouselImage;
