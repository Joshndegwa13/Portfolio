import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import ImageCarousel from './ImageCarousel';

const ProjectCard = memo(({ project, index }) => {
  return (
    <Tilt options={{ max: 15, scale: 1.02, speed: 1000 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-primary/20 transform-gpu"
      >
        <ImageCarousel images={project.images} title={project.title} />

        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold text-primary mb-2"
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          {project.subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              {project.subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
});

const projects = [
  {
    id: 1,
    title: "Medrin Jobs",
    description: "Medrin Jobs is a scalable and user-centric job search platform designed to streamline the recruitment process for both job seekers and employers. The platform consolidates remote, hybrid, and on-site job opportunities, offering advanced filtering, real-time notifications, and secure transactions to enhance the job-seeking experience. Built with a robust technical foundation, it aims to solve the inefficiencies and fragmentation commonly found in current job boards.",
    images: [
      '/projects/medrinjobs/1.jpg',
      '/projects/medrinjobs/2.jpg',
      '/projects/medrinjobs/3.jpg',
      '/projects/medrinjobs/4.jpg',
      '/projects/medrinjobs/5.jpg',
      '/projects/medrinjobs/6.jpg',
      '/projects/medrinjobs/7.jpg',
      '/projects/medrinjobs/8.jpg',
      '/projects/medrinjobs/9.jpg',
      '/projects/medrinjobs/10.jpg'
    ]
  },
  {
    id: 2,
    title: "PetPal: Your Ultimate Pet Care Companion",
    description: "PetPal makes pet ownership easy by organizing vet visits, feeding schedules, and grooming reminders in one app. Track essential details and capture memories with a gallery to document your pet's journey. For happy, healthy pets, PetPal is your go-to solution.",
    images: [
      '/projects/petpal/1.jpg',
      '/projects/petpal/2.jpg',
      '/projects/petpal/3.jpg',
      '/projects/petpal/4.jpg',
      '/projects/petpal/5.jpg',
      '/projects/petpal/6.jpg',
      '/projects/petpal/7.jpg'
    ]
  },
  {
    id: 3,
    title: "Inventa: Simple Inventory Management",
    description: "Inventa is the ideal tool for small businesses to track inventory, manage stock levels, and streamline sales with real-time insights and low-stock alerts. Boost efficiency and stay organized with ease.",
    images: [
      '/projects/inventa/1.jpg',
      '/projects/inventa/2.jpg',
      '/projects/inventa/3.jpg',
      '/projects/inventa/4.jpg',
      '/projects/inventa/5.jpg'
    ]
  },
  {
    id: 4,
    title: "Wellness Balance: Personalized Workout Planner",
    description: "Wellness Balance creates customized workouts tailored to your fitness level and goals, whether you're aiming to build muscle or improve endurance. Track and document your daily workouts easily within the app, keeping you motivated and on top of your fitness journey.",
    images: [
      '/projects/wellness2/1.jpg',
      '/projects/wellness2/2.jpg',
      '/projects/wellness2/3.jpg',
      '/projects/wellness2/4.jpg',
      '/projects/wellness2/5.jpg'
    ]
  },
  {
    id: 5,
    title: "Wellness Balance: My Frontend Journey Begins",
    description: "Built with HTML, JavaScript, and Tailwind CSS, this was my first step into web development. A simpler version focused on basic workout planning and tracking, it represents where my passion for frontend development began.",
    subtitle: "First project that ignited my passion for web development",
    images: [
      '/projects/wellness1/1.jpg',
      '/projects/wellness1/2.jpg',
      '/projects/wellness1/3.jpg',
      '/projects/wellness1/4.jpg',
      '/projects/wellness1/5.jpg'
    ]
  }
];

const Projects = memo(() => {
  return (
    <div id="projects" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
Projects.displayName = 'Projects';

export default Projects;