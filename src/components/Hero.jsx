import React from 'react';
import { motion, useAnimation, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import Marquee from 'react-fast-marquee';
import { useGesture } from '@use-gesture/react';

const Hero = () => {
  const controls = useAnimation();
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const bind = useGesture({
    onMove: ({ xy: [px, py] }) => {
      x.set(px / 100);
      y.set(py / 100);
    }
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] // Fixed easing curve
      }
    }
  };

  const gradientTextStyle = {
    backgroundImage: 'linear-gradient(45deg, #0D9488, #14B8A6, #0F766E)',
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'gradient 8s ease infinite'
  };

  const techStack = [
    "HTML", "CSS", "Tailwind CSS", "JavaScript", "React",
    "Python", "Flask", "Firebase", "MySQL",
    "Git", "Docker", "Jenkins", "GitHub"
  ];

  return (
    <div 
      {...bind()}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#0D9488" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#0D9488",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true
            }
          },
          background: { color: "transparent" }
        }}
      />

      <motion.div
        style={{ x, y }}
        className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full relative z-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col justify-center h-full text-center md:text-left"
        >
          <motion.h2 
            variants={textVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight gpu-accelerated"
            style={gradientTextStyle}
          >
            Web Developer
          </motion.h2>
          
          <motion.p 
            variants={textVariants}
            className="text-gray-600 dark:text-gray-300 py-4 max-w-2xl mx-auto md:mx-0 text-xl sm:text-2xl leading-relaxed"
          >
            Passionate about creating beautiful and functional web experiences. Skilled in both frontend and backend development, with a primary focus on crafting intuitive, user-centric interfaces using modern web technologies.
          </motion.p>

          <Marquee
            gradient={true}
            speed={50}
            className="my-8 py-4 bg-primary/5 backdrop-blur-sm rounded-lg spring-transition"
          >
            <div className="flex gap-8 px-4">
              {techStack.map((tech) => (
                <span key={tech} className="text-primary-light font-semibold text-lg hover-lift">
                  {tech}
                </span>
              ))}
            </div>
          </Marquee>

          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth
              duration={800}
              className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-light overflow-hidden transition-all hover:scale-105 spring-transition"
            >
              <span className="relative z-10 text-white font-medium">View Work</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;