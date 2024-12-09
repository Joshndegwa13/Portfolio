import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaGit, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiBootstrap, SiFlask, SiFirebase, SiMysql, SiJenkins } from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';
import { TbBrandGit } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';
import { Tilt } from 'react-tilt';

// Individual skill card component with animations and tilt effect
const SkillCard = ({ skill, index, isInView }) => {
  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  // Icon hover animation
  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Background glow effect
  const glowVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  return (
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 1000,
        glare: true,
        "max-glare": 0.5
      }}
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
        className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-primary/20 transition-all duration-300"
      >
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl filter blur-xl"
        />
        
        <h3 className="text-2xl font-bold mb-4 text-primary">{skill.title}</h3>
        <div className="grid grid-cols-2 gap-6">
          {skill.skills.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={iconVariants}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-primary-light text-4xl transform-gpu">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Skills data organized by category
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ]
    },
    {
      id: 3,
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jenkins", icon: <SiJenkins /> },
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <BiBrain /> },
        { name: "Collaboration", icon: <HiUserGroup /> },
        { name: "Version Control", icon: <TbBrandGit /> },
        { name: "Continuous Learning", icon: <IoSchoolOutline /> },
      ]
    }
  ];

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div id="skills" className="w-full min-h-screen pt-20">
      <div ref={ref} className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;