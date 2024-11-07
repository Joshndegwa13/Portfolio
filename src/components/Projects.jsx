import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, projectId }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Generate array of image paths for this project
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
      <div className="relative h-64">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={images[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x600';
          }}
        />
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-2 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <FaChevronRight />
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImage === index ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
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
      title: "Project One",
      description: "Description of project one. Replace this text with your project details. Explain the technologies used, challenges overcome, and the value it provides.",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of project two. Replace this text with your project details. Explain the technologies used, challenges overcome, and the value it provides.",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description of project three. Replace this text with your project details. Explain the technologies used, challenges overcome, and the value it provides.",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description of project four. Replace this text with your project details. Explain the technologies used, challenges overcome, and the value it provides.",
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
              {...project} 
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;