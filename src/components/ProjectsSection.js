import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        className="max-w-full mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <motion.p
          className="text-lg text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore our collection of highlighted works showcasing creativity and
          innovation.
        </motion.p>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 15 }} // Start from a smaller y offset
            whileInView={{ opacity: 1, y: 0 }} // Animate to final state
            transition={{
              delay: 0.1 * index, // Reduced delay for quicker appearance
              duration: 0.5, // Shorter duration for faster animation
            }}
            viewport={{ once: true, amount: 0.2 }} // Trigger sooner in the viewport
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
