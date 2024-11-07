import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaGit, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiBootstrap, SiFlask, SiFirebase, SiMysql, SiJenkins } from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';
import { TbBrandGit } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={40} /> },
        { name: "CSS", icon: <FaCss3 size={40} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
        { name: "Framer Motion", icon: <SiFramer size={40} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
        { name: "JavaScript", icon: <FaJs size={40} /> },
        { name: "React", icon: <FaReact size={40} /> },
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython size={40} /> },
        { name: "Flask", icon: <SiFlask size={40} /> },
      ]
    },
    {
      id: 3,
      title: "Database & DevOps",
      skills: [
        { name: "Firebase", icon: <SiFirebase size={40} /> },
        { name: "SQL", icon: <SiMysql size={40} /> },
        { name: "Docker", icon: <FaDocker size={40} /> },
        { name: "CI/CD", icon: <SiJenkins size={40} /> },
      ]
    },
    {
      id: 4,
      title: "Version Control",
      skills: [
        { name: "Git", icon: <FaGit size={40} /> },
        { name: "GitHub", icon: <FaGithub size={40} /> },
      ]
    },
    {
      id: 5,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <BiBrain size={40} /> },
        { name: "Collaboration", icon: <HiUserGroup size={40} /> },
        { name: "Communication", icon: <TbBrandGit size={40} /> },
        { name: "Learning & Adaptability", icon: <IoSchoolOutline size={40} /> },
      ]
    }
  ];

  return (
    <div id="skills" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skills.map(({ id, title, skills: skillSet }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-primary/20 transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {skillSet.map(({ name, icon }, index) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-2"
                  >
                    <div className="text-primary-light">{icon}</div>
                    <p className="text-sm text-center">{name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;