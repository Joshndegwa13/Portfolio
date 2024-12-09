import React from 'react';
import { motion } from 'framer-motion';

const CarouselDots = ({ total, current, onChange }) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
      {Array.from({ length: total }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-primary scale-125' 
              : 'bg-white/50 hover:bg-white/75'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;