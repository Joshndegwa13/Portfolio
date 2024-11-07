import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, projectId }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Use projectId to construct the folder path (project1, project2, etc.)
    const projectImages = Array.from({ length: 5 }, (_, i) => `/projects/project${projectId}/${i + 1}.jpg`);
    setImages(projectImages);
  }, [projectId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20"
    >
      <div className="relative pt-[56.25%]">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={images[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          className="absolute top-0 left-0 w-full h-full object-contain bg-slate-900"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1920x1080';
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            onClick={prevImage}
            className="ml-4 bg-black/50 p-3 rounded-full hover:bg-black/75 transition-colors backdrop-blur-sm group"
          >
            <FaChevronLeft className="text-xl group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={nextImage}
            className="mr-4 bg-black/50 p-3 rounded-full hover:bg-black/75 transition-colors backdrop-blur-sm group"
          >
            <FaChevronRight className="text-xl group-hover:scale-125 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent">
          <div className="flex justify-center gap-2 mb-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentImage === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center text-sm text-white/90">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PetPal: Your Ultimate Pet Care Companion",
      description: "PetPal makes pet ownership easy by organizing vet visits, feeding schedules, and grooming reminders in one app. Track essential details and capture memories with a gallery to document your pet’s journey. For happy, healthy pets, PetPal is your go-to solution",
    },
    {
      id: 2,
      title: "Inventa: Simple Inventory Management",
      description: "Inventa is the ideal tool for small businesses to track inventory, manage stock levels, and streamline sales with real-time insights and low-stock alerts. Boost efficiency and stay organized with ease.",
    },
    {
      id: 3,
      title: "Wellness Balance: Personalized Workout Planner",
      description: "Wellness Balance creates customized workouts tailored to your fitness level and goals, whether you're aiming to build muscle or improve endurance. Track and document your daily workouts easily within the app, keeping you motivated and on top of your fitness journey.",
    },
    {
      id: 4,
      title: "Wellness Balance: My Frontend Journey Begins",
      description: "Wellness Balance is my first project, built with HTML, JavaScript, and Tailwind CSS. It sparked my passion for frontend development, blending simplicity with functionality to help users get tailored workouts, keeping you highly motivated in your fitness journey",
    },
  ];

  return (
    <div id="projects" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              projectId={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;