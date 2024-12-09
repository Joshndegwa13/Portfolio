import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 20
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-4 top-24 z-50 p-2 rounded-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={springConfig}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ ...springConfig, duration: 0.7 }}
      >
        {isDark ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={springConfig}
          >
            <FiMoon className="w-6 h-6 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={springConfig}
          >
            <FiSun className="w-6 h-6 text-yellow-500" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;