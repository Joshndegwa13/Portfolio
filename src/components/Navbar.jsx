import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full h-20 z-50 transition-transform duration-200 gpu-accelerated ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          <span className="text-primary hover:text-primary-light transition-colors">Joshua</span>
          <span className="text-primary hover:text-primary-light transition-colors ml-2">Ndegwa</span>
        </motion.div>

        <div className="hidden md:flex space-x-2">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
              className="px-4 py-2 cursor-pointer capitalize font-medium hover:text-primary rounded-md transition-colors gpu-accelerated"
              activeClass="text-primary"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="md:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="gpu-accelerated"
          >
            {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {nav && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute w-full bg-slate-900/95 backdrop-blur-md shadow-lg gpu-accelerated"
          >
            {links.map(({ id, link }) => (
              <Link
                key={id}
                onClick={() => setNav(false)}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
                className="px-4 py-4 text-lg cursor-pointer capitalize block hover:text-primary hover:bg-slate-800/50 transition-all"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;