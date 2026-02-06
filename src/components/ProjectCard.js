import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

// Simple image component - no lazy loading complexity
const LazyImage = ({
  src,
  alt,
  className,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-dark-200 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* Loading spinner */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-light-300/40 text-center text-sm">
            <span className="text-2xl">📱</span>
            <p className="mt-2">Failed to load</p>
          </div>
        </div>
      )}

      {/* Image - always rendered */}
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

// Phone mockup component (clean, no notch)
const PhoneMockup = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    {/* Phone shadow */}
    <div className="absolute inset-0 bg-black/30 rounded-[3rem] blur-2xl transform translate-y-4 scale-95" />
    
    {/* Phone body */}
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-[2.5rem] p-2 shadow-phone">
      {/* Inner bezel */}
      <div className="bg-black rounded-[2.2rem] p-1 relative overflow-hidden">
        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5] bg-dark-200">
          {children}
        </div>
      </div>
      
      {/* Side buttons */}
      <div className="absolute right-[-2px] top-28 w-1 h-12 bg-dark-400 rounded-l-sm" />
      <div className="absolute left-[-2px] top-20 w-1 h-8 bg-dark-400 rounded-r-sm" />
      <div className="absolute left-[-2px] top-32 w-1 h-16 bg-dark-400 rounded-r-sm" />
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + 1 >= project.images.length ? 0 : prev + 1
    );
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  const openModal = useCallback(() => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const preloadImages = () => {
      const nextIdx = (currentIndex + 1) % project.images.length;
      const prevIdx = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;

      [nextIdx, prevIdx].forEach((idx) => {
        const img = new Image();
        img.src = project.images[idx];
      });
    };

    preloadImages();
  }, [currentIndex, project.images]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, closeModal, nextImage, prevImage]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <>
      <motion.article
        className="group relative bg-gradient-to-br from-dark-100 to-dark-200 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2 focus-within:ring-offset-dark transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        role="article"
        aria-labelledby={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col lg:flex-row">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
            {/* Category badge */}
          <motion.span
              className="inline-flex items-center self-start px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.span>

            {/* Title */}
            <h3 
              id={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-4 group-hover:gradient-text-static transition-all duration-300"
            >
            {project.title}
          </h3>

            {/* Description */}
            <p className="text-light-300/70 leading-relaxed mb-6 text-sm sm:text-base">
            {project.description}
          </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Key Features
            </h4>
              <ul className="space-y-2">
                {project.tasks.map((task, idx) => (
                <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-light-300/80"
                  initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="line-clamp-2">{task}</span>
                </motion.li>
              ))}
            </ul>
          </div>

            {/* Skills */}
            {project.skills && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-dark-300/50 text-light-300/80 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Store Links */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.playStoreUrl && (
                <motion.a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-300/80 border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View ${project.title} on Google Play Store (opens in new tab)`}
                >
                  <FaGooglePlay className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">Play Store</span>
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </motion.a>
              )}
              {project.appStoreUrl && (
                <motion.a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-300/80 border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View ${project.title} on App Store (opens in new tab)`}
                >
                  <FaAppStore className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">App Store</span>
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Navigation buttons */}
              <motion.button
                className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
                onClick={prevImage}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Previous ${project.title} screenshot`}
                type="button"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </motion.button>

              {/* Phone mockup with images */}
              <div className="mx-12 sm:mx-16">
                <PhoneMockup className="w-48 sm:w-56 md:w-64">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 rounded-lg"
                      onClick={openModal}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openModal();
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${project.title} screenshot ${currentIndex + 1} in full screen`}
                    >
                      <LazyImage
                        src={project.images[currentIndex]}
                        alt={`${project.title} screenshot ${currentIndex + 1} of ${project.images.length}`}
                        className="w-full h-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </PhoneMockup>
              </div>

              <motion.button
                className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
                onClick={nextImage}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Next ${project.title} screenshot`}
                type="button"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
        </div>

            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label={`${project.title} screenshot navigation`}>
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 ${
                    idx === currentIndex
                      ? "bg-primary w-6"
                      : "bg-white/20 hover:bg-white/40 hover:scale-125"
                  }`}
                  aria-label={`Go to ${project.title} screenshot ${idx + 1} of ${project.images.length}`}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-controls={`project-image-${idx}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {showModal && (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-label={`${project.title} screenshot viewer`}
        >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-dark-200/80 border border-white/10 text-light hover:text-primary hover:border-primary/30 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90 transition-all duration-300 z-10"
              onClick={closeModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close image viewer"
              type="button"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            {/* Navigation in modal */}
            <motion.button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-dark-200/80 border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90 transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous screenshot"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            <motion.button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-dark-200/80 border border-white/10 text-light hover:border-primary/30 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90 transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next screenshot"
              type="button"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            {/* Modal content */}
            <motion.div
              className="relative max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              id="modal-content"
            >
              <h2 id="modal-title" className="sr-only">{project.title} Screenshot Viewer</h2>
              <PhoneMockup className="w-full max-w-xs mx-auto">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                    id={`project-image-${currentIndex}`}
                    role="img"
                    aria-label={`${project.title} screenshot ${currentIndex + 1} of ${project.images.length}`}
                  >
                    <LazyImage
                      src={project.images[currentIndex]}
                      alt={`${project.title} screenshot ${currentIndex + 1} of ${project.images.length}`}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </PhoneMockup>

              {/* Modal indicators */}
              <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Screenshot navigation">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90 ${
                      idx === currentIndex
                        ? "bg-primary w-6"
                        : "bg-white/30 hover:bg-white/50 hover:scale-125"
                    }`}
                    aria-label={`Go to screenshot ${idx + 1} of ${project.images.length}`}
                    role="tab"
                    aria-selected={idx === currentIndex}
                    aria-controls={`project-image-${idx}`}
                    type="button"
                  />
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
