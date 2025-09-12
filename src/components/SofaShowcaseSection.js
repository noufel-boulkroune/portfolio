import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Simple lazy loading image component
const LazyImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef(null);

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

  const handleLoad = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    console.error("Failed to load image:", src);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {shouldLoad && !isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error placeholder */}
      {isError && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <div className="text-gray-400 text-center text-sm">
            <div>⚠️</div>
            <div>Image failed</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
      )}

      {/* Placeholder when not loaded yet */}
      {!shouldLoad && <div className="absolute inset-0 bg-gray-800"></div>}
    </div>
  );
};

const SofaShowcaseSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    mobile: 0,
    tablet: 0,
    tv: 0,
  });

  const platforms = {
    mobile: {
      title: "Mobile - Custom Figma Design Implementation",
      images: [
        "/images/sofa1.png",
        "/images/sofa2.png",
        "/images/sofa3.png",
        "/images/sofa4.png",
        "/images/sofa7.png",
        "/images/sofa5.png",
        "/images/sofa6.png",
        "/images/sofa8.png",
        "/images/sofa9.png",
        "/images/sofa10.png",
      ],
      features: [
        "Custom Video Player",
        "Multi-language Subtitle Engine",
        "Offline Content Management",
        "Google Cast Integration",
      ],
    },
    tablet: {
      title: "Tablet - Optimized for Bigger Screens",
      images: [
        "/images/sofa_tab1.png",
        "/images/sofa_tab2.png",
        "/images/sofa_tab3.png",
        "/images/sofa_tab4.png",
        "/images/sofa_tab13.png",
        "/images/sofa_tab5.png",
        "/images/sofa_tab6.png",
        "/images/sofa_tab7.png",
        "/images/sofa_tab8.png",
        "/images/sofa_tab9.png",
        "/images/sofa_tab10.png",
        "/images/sofa_tab11.png",
        "/images/sofa_tab12.png",
      ],
      features: [
        "Redesigned Screens & Widgets",
        "Enhanced Content Discovery",
        "Adaptive Layout System",
      ],
    },
    tv: {
      title: "Android TV - Remote Control Navigation",
      images: [
        "/images/sofa_tv1.png",
        "/images/sofa_tv2.png",
        "/images/sofa_tv4.png",

        "/images/sofa_tv5.png",
        "/images/sofa_tv3.png",
        "/images/sofa_tv6.png",

        "/images/sofa_tv7.png",
        "/images/sofa_tv8.png",
        "/images/sofa_tv9.png",
        "/images/sofa_tv10.png",
      ],
      features: [
        "D-pad & Remote Control Focus Management",
        "Voice Search Integration",
        "Custom TV UI & Animations",
        "Optimized TV UX",
      ],
    },
  };

  const nextImage = useCallback(
    (platform) => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [platform]: (prev[platform] + 1) % platforms[platform].images.length,
      }));
    },
    [platforms]
  );

  const prevImage = useCallback(
    (platform) => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [platform]:
          prev[platform] === 0
            ? platforms[platform].images.length - 1
            : prev[platform] - 1,
      }));
    },
    [platforms]
  );

  const goToImage = useCallback((platform, index) => {
    setCurrentImageIndex((prev) => ({ ...prev, [platform]: index }));
  }, []);

  const MockupImage = React.memo(({ platform, images, className }) => {
    const currentImage = images[currentImageIndex[platform]];
    const currentIndex = currentImageIndex[platform];

    return (
      <div className={`relative ${className}`}>
        {/* Device Frame Container - Better responsive padding */}
        <div className="relative mb-6 px-4 sm:px-8 md:px-12 lg:px-16">
          {platform === "mobile" && (
            <div className="relative">
              {/* Phone Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-xl transform translate-x-2 translate-y-2"></div>

              {/* Phone Body */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-2 rounded-[2.5rem] shadow-2xl border border-gray-700 mx-auto w-fit">
                {/* Screen Bezel */}
                <div className="bg-black rounded-[2.2rem] p-1">
                  {/* Screen - Updated dimensions for iPhone 16 Pro Max aspect ratio */}
                  <div className="w-64 h-[550px] sm:w-72 sm:h-[622px] bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    {/* Notch - Updated for iPhone 16 Pro Max Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-5 sm:w-28 sm:h-6 bg-black rounded-full z-20"></div>

                    {/* Screen Content */}
                    <div className="absolute inset-0">
                      <LazyImage
                        key={`mobile-${currentIndex}`}
                        src={currentImage}
                        alt={`Sofa Mobile ${currentIndex + 1}`}
                        className="rounded-[1.8rem]"
                        priority={currentIndex === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {platform === "tablet" && (
            <div className="relative">
              {/* Tablet Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform translate-x-3 translate-y-3"></div>

              {/* Tablet Body - Better responsive sizing */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-2 sm:p-3 rounded-3xl shadow-2xl border border-gray-700 mx-auto w-fit">
                {/* Screen Bezel */}
                <div className="bg-black rounded-2xl p-1 sm:p-2">
                  {/* Screen - More conservative tablet dimensions for mobile viewing */}
                  <div className="w-[280px] h-[190px] sm:w-[350px] sm:h-[240px] md:w-[420px] md:h-[290px] lg:w-[500px] lg:h-[340px] xl:w-[600px] xl:h-[410px] bg-gray-900 rounded-xl overflow-hidden relative">
                    {/* Screen Content */}
                    <LazyImage
                      key={`tablet-${currentIndex}`}
                      src={currentImage}
                      alt={`Sofa Tablet ${currentIndex + 1}`}
                      className="object-contain"
                      priority={currentIndex === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {platform === "tv" && (
            <div className="relative">
              {/* TV Shadow */}
              <div className="absolute inset-0 bg-black/30 rounded-xl blur-2xl transform translate-x-4 translate-y-4"></div>

              {/* TV Body - Made responsive */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden mx-auto w-fit">
                {/* TV Bezel */}
                <div className="bg-black p-3 sm:p-4 md:p-6 rounded-xl">
                  {/* Screen - Responsive TV dimensions */}
                  <div className="w-[280px] h-[160px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[255px] lg:w-[580px] lg:h-[330px] xl:w-[700px] xl:h-[400px] 2xl:w-[800px] 2xl:h-[450px] bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10"></div>

                    {/* Screen Content */}
                    <LazyImage
                      key={`tv-${currentIndex}`}
                      src={currentImage}
                      alt={`Sofa TV ${currentIndex + 1}`}
                      className="object-cover"
                      priority={currentIndex === 0}
                    />
                  </div>
                </div>
              </div>

              {/* TV Stand */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-6 sm:w-24 sm:h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-3 sm:w-40 sm:h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"></div>
            </div>
          )}

          {/* Image Navigation Controls - Better positioning for tablet */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 z-30 flex justify-between w-full ${
              platform === "tablet" ? "left-0 px-2" : "left-4 right-4 px-0"
            }`}
          >
            <motion.button
              onClick={() => prevImage(platform)}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => nextImage(platform)}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(platform, index)}
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
    );
  });

  return (
    <section
      id="sofaShowcaseSection"
      className="py-20 bg-gradient-to-bl from-dark via-black to-dark relative overflow-hidden"
    >
      <div className="mb-24 relative z-10">
        <motion.div
          className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent px-4">
              Sofa – Cross-Platform Streaming Solution
            </h3>
            <p className="text-lg md:text-xl text-light max-w-4xl mx-auto px-4">
              Built Sofa, a cross-platform video streaming app with tailored
              interfaces for mobile, tablet, and Android TV using Flutter.
              Developed using MVVM architecture with Provider for state
              management, converted Figma designs into responsive interfaces,
              and integrated REST APIs with smooth animations. Features include
              remote navigation, Google Cast, subtitle support, and adaptive
              video quality. Reduced data load time from 8–10s to under 1s,
              improving performance by over 80%.
            </p>
          </motion.div>

          {/* Platform sections */}
          <div className="space-y-24 lg:space-y-32">
            {Object.entries(platforms).map(([key, platform], index) => (
              <motion.div
                key={key}
                className={`grid xl:grid-cols-5 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center ${
                  index % 2 === 1 ? "xl:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.8,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Content */}
                <div
                  className={`space-y-6 px-4 lg:px-8 xl:px-12 ${
                    index % 2 === 1
                      ? "xl:col-start-4 xl:col-span-2 lg:col-start-2 lg:col-span-2"
                      : "xl:col-span-2 lg:col-span-2"
                  }`}
                >
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light mb-4">
                    {platform.title}
                  </h4>
                  <div className="grid grid-cols-1 gap-4 mt-8">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-light/80 text-sm md:text-base lg:text-lg">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup */}
                <motion.div
                  className={`flex justify-center ${
                    index % 2 === 1
                      ? "xl:col-start-1 xl:col-span-3 lg:col-start-1 lg:col-span-1"
                      : "xl:col-start-3 xl:col-span-3 lg:col-start-3 lg:col-span-1"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <MockupImage
                    platform={key}
                    images={platform.images}
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Download section */}
          <motion.div
            className="text-center mt-20 pt-16 border-t border-primary/20 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl md:text-2xl font-bold text-light mb-4">
              Live on Google Play Store
            </h4>
            <p className="text-light/70 mb-8 max-w-2xl mx-auto">
              Production-ready streaming application with over 5k+ downloads,
              supporting multiple languages and optimized for Algerian market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-orange-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay size={24} />
                <span className="ml-2">View on Play Store</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default SofaShowcaseSection;
