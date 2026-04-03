import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import Lightbox from "./Lightbox";

// Simple image with fade-in on load
const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-dark-200 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-light-300/40 text-center text-sm">
            <span className="text-2xl">📱</span>
            <p className="mt-2">Failed to load</p>
          </div>
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

// Phone mockup — matches Sofa style
const PhoneMockup = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] blur-xl transform translate-y-4 scale-95" />
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-[2.2rem] p-1.5 shadow-phone">
      <div className="bg-black rounded-[2rem] p-0.5 relative overflow-hidden">
        <div className="relative rounded-[1.8rem] overflow-hidden aspect-[9/19.5] bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Preload adjacent images
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % project.images.length;
    const prevIdx = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    [nextIdx, prevIdx].forEach((idx) => {
      const img = new Image();
      img.src = project.images[idx];
    });
  }, [currentIndex, project.images]);

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <>
      <motion.article
        className="group relative bg-dark-200/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 hover:bg-dark-200/80 hover:shadow-[0_10px_50px_-10px_rgba(0,212,255,0.2)] focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2 focus-within:ring-offset-dark transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, scale: 1.005 }}
        role="article"
        aria-labelledby={`project-title-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row">
          {/* ── Content ── */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
            <motion.span
              className="inline-flex items-center self-start px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>

            <h3
              id={`project-title-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-4 group-hover:gradient-text-static transition-all duration-300"
            >
              {project.title}
            </h3>

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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-200/50 backdrop-blur-md border border-white/10 text-light hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-200/50 backdrop-blur-md border border-white/10 text-light hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 transition-all duration-300"
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

          {/* ── Phone mockup side ── */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Prev */}
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

              {/* Phone + image */}
              <div className="mx-12 sm:mx-14">
                <PhoneMockup className="w-44 sm:w-52 md:w-60">
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
                    >
                      <LazyImage
                        src={project.images[currentIndex]}
                        alt={`${project.title} screenshot ${currentIndex + 1} of ${project.images.length}`}
                        className="w-full h-full"
                        onClick={openLightbox}
                      />
                    </motion.div>
                  </AnimatePresence>
                </PhoneMockup>

                {/* Tap hint */}
                <p className="text-center text-xs text-light-300/30 mt-3">
                  tap image to expand
                </p>
              </div>

              {/* Next */}
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

            {/* Indicators */}
            <div
              className="flex justify-center gap-2 mt-6"
              role="tablist"
              aria-label={`${project.title} screenshot navigation`}
            >
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
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* ── Lightbox (full-screen, raw image, zoomable) ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            initialIndex={currentIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
