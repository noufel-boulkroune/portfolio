import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mb-8 flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 * index, duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-sm text-blue-600 mb-2">{project.category}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <ul className="list-disc list-inside mb-4">
            {project.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-gray-600">
                {task}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Mobile Phone Mockup Section */}
      <div className="relative flex-shrink-0 w-full md:w-[300px] h-[600px] border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-[2rem] shadow-lg overflow-hidden relative">
            {/* Display each image centered in the mockup */}
            {project.images.map((imageSrc, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={imageSrc}
                alt={`${project.title} image ${imgIndex + 1}`}
                className="absolute w-full h-full object-cover transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: imgIndex * 0.5, duration: 0.5 }}
                style={{
                  zIndex: project.images.length - imgIndex, // Ensure the last image is on top
                  display: imgIndex === 0 ? "block" : "none", // Show only the first image initially
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
