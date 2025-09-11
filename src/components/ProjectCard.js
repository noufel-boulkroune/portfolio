import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

// Enhanced lazy loading image component with smooth transitions
const LazyImage = ({
  src,
  alt,
  className,
  priority = false,
  onClick,
  imageKey,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imgRef = useRef(null);

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
    setIsTransitioning(true);

    // Small delay to show loading animation
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [src, imageKey]);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsError(false);
    setIsTransitioning(false);
  }, []);

  const handleError = useCallback(() => {
    setIsError(true);
    setIsTransitioning(false);
    console.error("Failed to load image:", src);
  }, [src]);

  const handleClick = useCallback(() => {
    if (onClick && isLoaded && !isError) {
      onClick();
    }
  }, [onClick, isLoaded, isError]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* Loading/Transitioning overlay */}
      {shouldLoad && (!isLoaded || isTransitioning) && !isError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-[32px] z-10">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <div className="text-primary/80 text-xs">Loading...</div>
          </div>
        </div>
      )}

      {/* Error placeholder */}
      {isError && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center rounded-[32px] z-10">
          <div className="text-gray-400 text-center text-sm">
            <div className="text-2xl mb-2">⚠️</div>
            <div>Image failed to load</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-[32px] transition-all duration-500 ${
            isLoaded && !isTransitioning
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
      )}

      {/* Placeholder when not loaded yet */}
      {!shouldLoad && (
        <div className="absolute inset-0 bg-gray-800 rounded-[32px] flex items-center justify-center">
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [tilts, setTilts] = useState([]);

  // Memoize the tilts calculation
  const generateFixedTilts = useCallback(() => {
    const fixedTilts = project.images.map((_, index) => {
      let tilt;
      if (index === 0) {
        tilt = 3;
      } else if (index === 2) {
        tilt = -3;
      } else {
        tilt = 0;
      }
      return { tilt };
    });
    setTilts(fixedTilts);
  }, [project.images]);

  useEffect(() => {
    generateFixedTilts();
  }, [generateFixedTilts]);

  const getImageStyle = useCallback(
    (index) => {
      const { tilt } = tilts[index] || { tilt: 0 };
      return {
        transform: `rotate(${tilt}deg)`,
        zIndex: index === 1 ? 2 : 1,
      };
    },
    [tilts]
  );

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 >= project.images.length ? 0 : prev + 1
    );
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  const openModal = useCallback((image) => {
    setModalImage(image);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setModalImage(null);
  }, []);

  // Memoized desktop images component
  const DesktopImages = React.memo(() => (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-2 justify-center">
      {project.images.map((image, index) => (
        <motion.div
          key={index}
          className="relative w-[330px] h-[700px] bg-black rounded-[40px] p-3 shadow-xl flex justify-center items-center"
          style={getImageStyle(index)}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full rounded-[32px] overflow-hidden relative">
            <LazyImage
              src={image}
              alt={`${project.title} Screenshot ${index + 1}`}
              className="w-full h-full"
              priority={index === 0} // Prioritize first image
              onClick={() => openModal(image)}
              imageKey={index} // Add unique key for transitions
            />
          </div>
        </motion.div>
      ))}
    </div>
  ));

  // Enhanced mobile image component with smooth transitions
  const MobileImage = React.memo(() => (
    <div className="block md:hidden relative flex items-center justify-center min-h-[500px]">
      <motion.button
        className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 absolute left-0 z-20"
        onClick={prevImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <div className="relative w-[260px] h-[560px] bg-black rounded-[40px] p-3 shadow-xl mx-4">
        <div className="w-full h-full object-contain overflow-hidden rounded-[32px] relative">
          <LazyImage
            key={`mobile-${currentIndex}`} // Force re-render on index change
            src={project.images[currentIndex]}
            alt={`${project.title} Screenshot ${currentIndex + 1}`}
            className="w-full h-full"
            priority={true} // Always prioritize mobile current image
            onClick={() => openModal(project.images[currentIndex])}
            imageKey={currentIndex} // Add unique key for smooth transitions
          />
        </div>
      </div>

      <motion.button
        className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 absolute right-0 z-20"
        onClick={nextImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Image indicators for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {project.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentIndex === index
                ? "bg-primary"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  ));

  // Preload next/previous images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      const nextIndex = (currentIndex + 1) % project.images.length;
      const prevIndex =
        currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;

      [nextIndex, prevIndex].forEach((index) => {
        const img = new Image();
        img.src = project.images[index];
      });
    };

    preloadImages();
  }, [currentIndex, project.images]);

  return (
    <motion.div
      className="w-full min-h-[600px] bg-dark rounded-xl shadow-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row h-full bg-black/50">
        {/* Text Area */}
        <div className="w-full md:w-2/5 bg-zinc-900 p-6 md:p-8 flex flex-col justify-center md:items-center items-center text-center space-y-6">
          <motion.span
            className="px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.span>

          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-light leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-primary">
              Key Features:
            </h4>
            <ul className="space-y-3 text-light text-left md:pl-6">
              {project.tasks.map((task, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{task}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {(project.playStoreUrl || project.appStoreUrl) && (
            <div className="flex items-center justify-center space-x-6 mt-6 flex-wrap">
              {project.playStoreUrl && (
                <motion.a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-orange-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGooglePlay size={24} />
                  <span className="ml-2">Get it on Play Store</span>
                </motion.a>
              )}
              {project.appStoreUrl && (
                <motion.a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-orange-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaAppStore size={24} />
                  <span className="ml-2">Get it on App Store</span>
                </motion.a>
              )}
            </div>
          )}
        </div>

        {/* Image Area */}
        <div className="w-full md:w-3/5 bg-zinc-900 p-6 md:p-8 relative flex items-center justify-end">
          <DesktopImages />
          <MobileImage />
        </div>
      </div>

      {/* Enhanced Modal for Enlarged Image */}
      {showModal && modalImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-primary hover:text-orange-300 transition-colors duration-300 bg-black/50 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <div className="bg-black rounded-lg overflow-hidden">
              <LazyImage
                src={modalImage}
                alt="Enlarged project screenshot"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
