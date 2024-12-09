import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Loading;