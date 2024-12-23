import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <motion.div
          className="flex flex-col gap-8" // Use flex-col to stack the project cards vertically
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
