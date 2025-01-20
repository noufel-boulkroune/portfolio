import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-bl from-dark via-black to-dark"
    >
      <motion.div
        className="max-w-full mx-auto px-4 sm:px-16 md:px-8 lg:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <motion.p
          className="text-lg text-center mb-16 text-light"
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.5,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard
              project={project}
              className="bg-dark border border-primary/20 hover:border-primary/40 transition-colors duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
