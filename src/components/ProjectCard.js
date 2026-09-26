import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowDown } from "lucide-react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import Lightbox from "./Lightbox";

// Simple image with fade-in on load. When it opens the lightbox it is a
// real <button>, so keyboard and screen-reader users can open it too.
const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className={`relative block overflow-hidden bg-dark-200 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "zoom-in" : "default" }}
      {...(onClick && { type: "button", "aria-label": `${alt} — view full size` })}
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
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
    </Wrapper>
  );
};

// Phone mockup — matches Sofa style
const PhoneMockup = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    {/* Phone shadow */}
    <div className="absolute inset-0 bg-black/30 rounded-[3rem] blur-2xl transform translate-y-4 scale-95" />
    
    {/* Phone body */}
    <div className="relative device-frame device-phone rounded-[2.5rem] p-2 shadow-phone">
      {/* Inner bezel */}
      <div className="bg-black rounded-[2.2rem] p-1 relative overflow-hidden">
        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5] device-screen">
          {children}
        </div>
      </div>
      
      {/* Side buttons */}
      <div className="absolute right-[-2px] top-28 w-1 h-12 device-button rounded-l-sm" />
      <div className="absolute left-[-2px] top-20 w-1 h-8 device-button rounded-r-sm" />
      <div className="absolute left-[-2px] top-32 w-1 h-16 device-button rounded-r-sm" />
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

  // Preload adjacent images once the visitor starts browsing this card,
  // so the first page load only fetches one screenshot per project.
  const interacted = useRef(false);
  useEffect(() => {
    if (currentIndex !== 0) interacted.current = true;
    if (!interacted.current) return;
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
        className="surface spotlight overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        aria-labelledby={`project-title-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="relative flex flex-col lg:flex-row">
          {/* ── Content ── */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
            <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
              {project.category}
            </span>

            <h3
              id={`project-title-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-3"
            >
              {project.title}
            </h3>

            <p className="text-light-300 leading-relaxed mb-6 text-[15px] sm:text-base">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="eyebrow mb-3">
                What I did
              </h4>
              <ul className="space-y-2">
                {project.tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-light-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            {project.skills && (
              <div className="mb-6">
                <h4 className="eyebrow mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="well px-2.5 py-1 text-xs font-medium rounded-md text-light-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Store Links */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.caseStudyId && (
                <a
                  href={`#${project.caseStudyId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(project.caseStudyId);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="btn-primary !text-sm !px-5 gap-2"
                >
                  View case study
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.delisted && (
                <span className="well inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-light-300">
                  {project.appStoreUrl ? (
                    <>
                      <FaGooglePlay className="w-4 h-4" aria-hidden="true" />
                      <FaAppStore className="w-4 h-4" aria-hidden="true" />
                      Previously on Google Play &amp; App Store
                    </>
                  ) : (
                    <>
                      <FaGooglePlay className="w-4 h-4" aria-hidden="true" />
                      Previously on Google Play
                    </>
                  )}
                </span>
              )}
              {project.playStoreUrl && !project.delisted && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="well inline-flex items-center gap-2 px-5 py-3 rounded-full text-light hover:text-primary"
                  aria-label={`View ${project.title} on Google Play Store (opens in new tab)`}
                >
                  <FaGooglePlay className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">Play Store</span>
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </a>
              )}
              {project.appStoreUrl && !project.delisted && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="well inline-flex items-center gap-2 px-5 py-3 rounded-full text-light hover:text-primary"
                  aria-label={`View ${project.title} on App Store (opens in new tab)`}
                >
                  <FaAppStore className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">App Store</span>
                  <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* ── Phone mockup side ── */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* Prev */}
              <motion.button
                className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full glass text-light hover:text-primary"
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
                <p className="text-center text-xs text-light-300/60 mt-3">
                  Tap image to expand
                </p>
              </div>

              {/* Next */}
              <motion.button
                className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full glass text-light hover:text-primary"
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
