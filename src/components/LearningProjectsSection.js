import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ExternalLink, Code2, ChevronDown, ChevronUp } from "lucide-react";

// Simple image component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-dark-200 ${className}`}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-light-300/40 text-2xl">📱</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
    </div>
  );
};

// Phone mockup for cards
const MiniPhoneMockup = ({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/20 rounded-[1.5rem] blur-lg transform translate-y-2 scale-95" />
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-[1.3rem] p-1 shadow-lg">
      <div className="bg-black rounded-[1.1rem] p-0.5 relative overflow-hidden">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20" />
        <div className="relative rounded-[1rem] overflow-hidden aspect-[9/19.5] bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const projectsData = [
  {
    id: 1,
    title: "Doctors App",
    description: "Doctor appointment booking app with Flutter, featuring user search, scheduling, and health tracking.",
    technologies: ["Flutter", "MVVM", "Provider", "REST API"],
    images: [
      "/images/doctors2.png",
      "/images/doctors.png",
      "/images/doctors3.png",
      "/images/doctors4.png",
      "/images/doctors5.png",
      "/images/doctors6.png",
    ],
    link: "https://github.com/noufel-boulkroune/DoctorOFM",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "MyShop App",
    description: "Complete e-commerce app with Firebase backend, authentication, and real-time notifications.",
    technologies: ["Flutter", "Firebase", "Auth", "Notifications"],
    images: [
      "/images/myShop2.jpg",
      "/images/myShop.jpg",
      "/images/myShop1.jpg",
      "/images/myShop3.jpg",
    ],
    link: "https://github.com/noufel-boulkroune/E-commerce-shop-app",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Beautiful weather forecast app with modern UI and smooth animations.",
    technologies: ["Flutter", "Dart", "Design"],
    images: ["/images/wether.jpg", "/images/wether1.jpg", "/images/wether2.jpg"],
    link: "",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Multi Store App",
    description: "Multi-vendor marketplace allowing users to shop across stores or create their own.",
    technologies: ["Flutter", "MVVM", "Provider", "Firebase"],
    images: ["/images/ms.jpg", "/images/ms1.jpg", "/images/ms2.jpg", "/images/ms3.jpg"],
    link: "https://github.com/noufel-boulkroune/Multi-Store-App",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "Social Media UI",
    description: "Social media app design with REST API integration for likes and favorites.",
    technologies: ["Flutter", "Dart", "REST API"],
    images: ["/images/mobile_test1.png", "/images/mobile_test2.png"],
    link: "https://github.com/noufel-boulkroune/DeveloperTestUI",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    id: 6,
    title: "Recipes App",
    description: "Recipe discovery app with Firebase backend for storing and sharing recipes.",
    technologies: ["Flutter", "Firebase", "Design"],
    images: ["/images/meal.jpg", "/images/meal1.jpg", "/images/meal2.jpg"],
    link: "",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 7,
    title: "Auth Design",
    description: "Authentication screen designs with social login options for Facebook, Twitter, and Google.",
    technologies: ["Flutter", "Dart", "UI/UX"],
    images: ["/images/auth.jpg", "/images/auth1.jpg", "/images/auth2.jpg"],
    link: "",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 8,
    title: "Market App",
    description: "MVVM architecture market app with smooth navigation and product browsing.",
    technologies: ["Flutter", "Dart", "MVVM"],
    images: ["/images/market.jpg", "/images/market1.jpg", "/images/market2.jpg"],
    link: "https://github.com/noufel-boulkroune/MVVM-Shop-App",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 9,
    title: "Fitness Tracker",
    description: "Weight and health management app with tracking and goal-setting features.",
    technologies: ["Flutter", "Dart", "Health"],
    images: ["/images/h_w.jpg", "/images/h_w1.jpg", "/images/h_w2.jpg"],
    link: "",
    color: "from-lime-500/20 to-green-500/20",
  },
];

const ProjectCardMini = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 30 : -30, opacity: 0 }),
  };

  return (
    <motion.article
      className="group relative bg-gradient-to-br from-dark-100 to-dark-200 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative p-4 sm:p-5 flex flex-col flex-1">
        {/* Phone mockup with image carousel */}
        <div className="relative mb-4">
          <div className="relative flex items-center justify-center">
            {/* Navigation buttons */}
            {project.images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-0 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="w-3 h-3" />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-0 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="w-3 h-3" />
                </motion.button>
              </>
            )}

            <div className="w-32 sm:w-36 mx-8">
              <MiniPhoneMockup>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentImageIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <LazyImage
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </MiniPhoneMockup>
            </div>
          </div>

          {/* Indicators */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-1 mt-3">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(idx > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-1 h-1 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? "bg-primary w-3"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center flex flex-col flex-1">
          <h3 className="text-lg font-bold text-light mb-2 group-hover:gradient-text-static transition-all">
            {project.title}
          </h3>

          <p className="text-sm text-light-300/60 mb-4 line-clamp-2 flex-shrink-0">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4 flex-shrink-0">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-dark-300/80 text-light-300/80 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub link - Always reserve space for consistent height */}
          <div className="mt-auto min-h-[40px] flex items-center justify-center">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-300/80 border border-white/10 text-light-300 hover:text-primary hover:border-primary/30 transition-all text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-4 h-4" />
                View Code
                <ExternalLink className="w-3 h-3 opacity-50" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const INITIAL_COUNT = 3;

const LearningProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);
  const hiddenCount = projectsData.length - INITIAL_COUNT;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Code2 className="w-3.5 h-3.5" />
            Open Source & Practice
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Side </span>
            <span className="gradient-text-static">Projects</span>
          </motion.h2>

          <motion.p
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Personal projects and design explorations built to sharpen skills,
            experiment with new patterns, and push UI boundaries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{
                  duration: 0.38,
                  delay: index >= INITIAL_COUNT ? (index - INITIAL_COUNT) * 0.07 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex"
              >
                <ProjectCardMini project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-white/10 bg-dark-200/50 backdrop-blur-sm text-light-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {hiddenCount} More Projects
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningProjectsSection;
