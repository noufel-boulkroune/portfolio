import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Smartphone, Tablet, Tv, ExternalLink } from "lucide-react";

// Simple image component
const LazyImage = memo(({ src, alt, className, objectFit = "cover" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-dark-200 ${className}`}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-light-300/40 text-center text-sm">Failed to load</div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
          } ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
    </div>
  );
});

// Phone Mockup (clean, no notch)
const PhoneMockup = memo(({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] blur-xl transform translate-y-4 scale-95" />
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-[2.2rem] p-1.5 shadow-phone">
      <div className="bg-black rounded-[2rem] p-0.5 relative overflow-hidden">
        <div className="relative rounded-[1.8rem] overflow-hidden aspect-[9/19.5] bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  </div>
));

// Tablet Mockup (landscape iPad Pro 11-inch ~1.43:1 aspect ratio)
const TabletMockup = memo(({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/30 rounded-3xl blur-xl transform translate-y-4 scale-95" />
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-2xl p-2 shadow-phone">
      <div className="bg-black rounded-xl p-1.5 relative overflow-hidden">
        <div className="relative rounded-lg overflow-hidden aspect-[10/7] bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  </div>
));

// TV Mockup
const TVMockup = memo(({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/30 rounded-xl blur-2xl transform translate-y-6 scale-95" />
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-lg overflow-hidden shadow-phone">
      <div className="bg-black p-3 sm:p-4 rounded-lg">
        <div className="relative rounded overflow-hidden aspect-video bg-dark-200 border border-dark-300">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none z-10" />
          {children}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-dark-300 to-dark-400 rounded-b-lg" />
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-2 bg-gradient-to-b from-dark-400 to-dark-300 rounded-full" />
  </div>
));

// Slide animation variants
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? 30 : -30, opacity: 0 }),
};

// Device Carousel - separate component that only re-renders when its own state changes
const DeviceCarousel = memo(({ platformKey, images, MockupComponent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToImage = useCallback((idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center">
        {/* Prev button */}
        <motion.button
          onClick={prevImage}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:border-primary/30 hover:text-primary transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="w-4 h-4" />
        </motion.button>

        {/* Device mockup */}
        <div
          className={`mx-12 sm:mx-16 ${platformKey === "mobile"
            ? "w-48 sm:w-56 md:w-64"
            : platformKey === "tablet"
              ? "w-72 sm:w-96 md:w-[28rem]"
              : "w-full max-w-xl md:max-w-2xl"
            }`}
        >
          <MockupComponent>
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
                  src={images[currentIndex]}
                  alt={`Sofa ${platformKey} ${currentIndex + 1}`}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </MockupComponent>
        </div>

        {/* Next button */}
        <motion.button
          onClick={nextImage}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-dark-100/80 backdrop-blur-sm border border-white/10 text-light hover:border-primary/30 hover:text-primary transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
              ? "bg-primary w-4"
              : "bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
});

// Platform data
const platforms = [
  {
    key: "mobile",
    title: "Mobile",
    subtitle: "Custom Figma Design Implementation",
    icon: Smartphone,
    MockupComponent: PhoneMockup,
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
      "Multi-language Subtitles",
      "Offline Content",
      "Google Cast",
    ],
  },
  {
    key: "tablet",
    title: "Tablet",
    subtitle: "Optimized for Bigger Screens",
    icon: Tablet,
    MockupComponent: TabletMockup,
    images: [
      "/images/sofa_tab1.png",
      "/images/sofa_tab2.png",
      "/images/sofa_tab3.png",
      "/images/sofa_tab4.png",
      "/images/sofa_tab5.png",
      "/images/sofa_tab6.png",
      "/images/sofa_tab7.png",
      "/images/sofa_tab8.png",
      "/images/sofa_tab9.png",
      "/images/sofa_tab10.png",
      "/images/sofa_tab11.png",
      "/images/sofa_tab12.png",
      "/images/sofa_tab13.png",
    ],
    features: [
      "Redesigned Screens",
      "Enhanced Discovery",
      "Adaptive Layout",
    ],
  },
  {
    key: "tv",
    title: "Android TV",
    subtitle: "Remote Control Navigation",
    icon: Tv,
    MockupComponent: TVMockup,
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
      "D-pad Navigation",
      "Voice Search",
      "Custom TV UI",
      "Optimized UX",
    ],
  },
];

// Platform Card - static content, carousel handles its own state
const PlatformCard = memo(({ platform, index }) => {
  const Icon = platform.icon;

  return (
    <motion.div
      className={`grid gap-8 lg:gap-12 items-center ${index % 2 === 0
        ? "lg:grid-cols-[1fr,1.5fr]"
        : "lg:grid-cols-[1.5fr,1fr]"
        }`}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Content */}
      <motion.div
        className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-5 h-5 text-primary" />
          </motion.div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-light">
              {platform.title}
            </h3>
            <p className="text-sm text-light-300/60">{platform.subtitle}</p>
          </div>
        </motion.div>

        <div className="space-y-2 mt-6">
          {platform.features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3 text-light-300/80"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
              />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Device Carousel */}
      <motion.div
        className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <DeviceCarousel
          platformKey={platform.key}
          images={platform.images}
          MockupComponent={platform.MockupComponent}
        />
      </motion.div>
    </motion.div>
  );
});

const SofaShowcaseSection = () => {
  return (
    <section
      id="sofaShowcaseSection"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Latest Project
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="gradient-text-static">Sofa</span>
            <span className="text-light"> – Cross-Platform Streaming</span>
          </motion.h2>

          <motion.p
            className="text-light-300/70 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive video streaming platform built with Flutter for mobile,
            tablet, and Android TV. Features include MVVM architecture, REST API integration,
            Google Cast, and adaptive video quality. Reduced load times from 8-10s to under 1s.
          </motion.p>
        </motion.div>

        {/* Platform Cards */}
        <div className="space-y-20 lg:space-y-32">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.key} platform={platform} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            5k+ Downloads
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-light mb-4">
            Live on Google Play Store
          </h3>

          <p className="text-light-300/60 mb-8 max-w-lg mx-auto">
            Production-ready streaming app supporting multiple languages,
            optimized for the Algerian market.
          </p>

          <motion.a
            href="https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGooglePlay className="w-5 h-5" />
            View on Play Store
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SofaShowcaseSection;
