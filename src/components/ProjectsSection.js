import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.5, 0.8, 0.6, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.3, 0.95, 1],
            opacity: [0.5, 0.7, 0.6, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Featured Work
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Professional </span>
            <span className="gradient-text-static">Projects</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Real-world mobile applications I've built and published, showcasing
            cross-platform development expertise with Flutter.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-8 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
