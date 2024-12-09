import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: springConfig
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: springConfig
    },
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={springConfig}
      className={`fixed w-full h-20 z-50 transition-all duration-700 ${
        scrolled 
          ? `${isDark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold"
        >
          <motion.span 
            className="text-primary hover:text-primary-light transition-colors duration-500"
            whileHover={{ scale: 1.05 }}
            transition={springConfig}
          >
            Joshua
          </motion.span>
          <motion.span 
            className="text-primary hover:text-primary-light transition-colors duration-500 ml-2"
            whileHover={{ scale: 1.05 }}
            transition={springConfig}
          >
            Ndegwa
          </motion.span>
        </motion.div>

        <div className="hidden md:flex space-x-2">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
              className="px-4 py-2 cursor-pointer capitalize font-medium hover:text-primary rounded-md transition-colors duration-500"
              activeClass="text-primary"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={springConfig}
              >
                {link}
              </motion.span>
            </Link>
          ))}
        </div>

        <motion.button
          className="md:hidden z-50"
          onClick={() => setNav(!nav)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={springConfig}
        >
          {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`md:hidden absolute w-full ${
              isDark ? 'bg-slate-900/95' : 'bg-white/95'
            } backdrop-blur-md shadow-lg overflow-hidden`}
          >
            {links.map(({ id, link }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="border-b border-gray-200 dark:border-gray-700 last:border-none"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={700}
                  className="px-4 py-4 text-lg cursor-pointer capitalize block hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800/50 transition-all duration-500"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;