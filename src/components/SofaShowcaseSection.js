import React, { useState, useCallback, memo } from "react";
import SectionHeader from "./ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Smartphone, Tablet, Tv, ExternalLink } from "lucide-react";
import Lightbox from "./Lightbox";

// Simple image component
const LazyImage = memo(({ src, alt, className, objectFit = "cover", onClick }) => {
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
            Failed to load
          </div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
    </div>
  );
});

// Phone Mockup -- matches ProjectCard style
const PhoneMockup = memo(({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/30 rounded-[3rem] blur-2xl transform translate-y-4 scale-95" />
    <div className="relative device-frame device-phone rounded-[2.5rem] p-2 shadow-phone">
      <div className="bg-black rounded-[2.2rem] p-1 relative overflow-hidden">
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
));

// Tablet Mockup (landscape iPad Pro 11-inch ~1.43:1 aspect ratio)
const TabletMockup = memo(({ children }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-black/30 rounded-3xl blur-2xl transform translate-y-4 scale-95" />
    <div className="relative device-frame device-tablet rounded-2xl p-2 shadow-phone">
      <div className="bg-black rounded-xl p-1.5 relative overflow-hidden">
        <div className="relative rounded-lg overflow-hidden aspect-[10/7] device-screen">
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
    <div className="relative device-frame device-tv rounded-lg overflow-hidden shadow-phone">
      <div className="bg-black p-3 sm:p-4 rounded-lg">
        <div className="relative rounded overflow-hidden aspect-video device-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none z-10" />
          {children}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 device-tv-stand rounded-b-lg" />
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-2 device-tv-stand rounded-full" />
  </div>
));

// Slide animation variants
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? 30 : -30, opacity: 0 }),
};

// Device Carousel — each carousel manages its own index state
const DeviceCarousel = memo(({ platformKey, images, MockupComponent, onOpenLightbox }) => {
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

  const goToImage = useCallback(
    (idx) => {
      setDirection(idx > currentIndex ? 1 : -1);
      setCurrentIndex(idx);
    },
    [currentIndex]
  );

  return (
    <div className="relative px-2 sm:px-0">
      <div className="relative flex items-center justify-center">
        {/* Prev button */}
        <button
          onClick={prevImage}
          type="button"
          aria-label="Previous screenshot"
          className="absolute left-0 sm:left-2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass text-light hover:text-primary"
        >
          <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        {/* Device mockup */}
        <div
          className={`mx-10 sm:mx-16 ${
            platformKey === "mobile"
              ? "w-44 sm:w-56 md:w-64"
              : platformKey === "tablet"
                ? "w-64 sm:w-96 md:w-[28rem]"
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
                  onClick={() => onOpenLightbox && onOpenLightbox(images, currentIndex)}
                />
              </motion.div>
            </AnimatePresence>
          </MockupComponent>
        </div>

        {/* Next button */}
        <button
          onClick={nextImage}
          type="button"
          aria-label="Next screenshot"
          className="absolute right-0 sm:right-2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass text-light hover:text-primary"
        >
          <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            type="button"
            aria-label={`Go to screenshot ${idx + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-primary w-4"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Tap hint */}
      <p className="text-center text-xs text-light-300/60 mt-3">Tap image to expand</p>
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
      "/images/sofa1.webp",
      "/images/sofa2.webp",
      "/images/sofa3.webp",
      "/images/sofa4.webp",
      "/images/sofa7.webp",
      "/images/sofa5.webp",
      "/images/sofa6.webp",
      "/images/sofa8.webp",
      "/images/sofa9.webp",
      "/images/sofa10.webp",
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
      "/images/sofa_tab1.webp",
      "/images/sofa_tab2.webp",
      "/images/sofa_tab3.webp",
      "/images/sofa_tab4.webp",
      "/images/sofa_tab5.webp",
      "/images/sofa_tab6.webp",
      "/images/sofa_tab7.webp",
      "/images/sofa_tab8.webp",
      "/images/sofa_tab9.webp",
      "/images/sofa_tab10.webp",
      "/images/sofa_tab11.webp",
      "/images/sofa_tab12.webp",
      "/images/sofa_tab13.webp",
    ],
    features: ["Redesigned Screens", "Enhanced Discovery", "Adaptive Layout"],
  },
  {
    key: "tv",
    title: "Android TV",
    subtitle: "Remote Control Navigation",
    icon: Tv,
    MockupComponent: TVMockup,
    images: [
      "/images/sofa_tv1.webp",
      "/images/sofa_tv2.webp",
      "/images/sofa_tv4.webp",
      "/images/sofa_tv5.webp",
      "/images/sofa_tv3.webp",
      "/images/sofa_tv6.webp",
      "/images/sofa_tv7.webp",
      "/images/sofa_tv8.webp",
      "/images/sofa_tv9.webp",
      "/images/sofa_tv10.webp",
    ],
    features: [
      "D-pad Navigation",
      "Voice Search",
      "Custom TV UI",
      "Optimized UX",
    ],
  },
];

// Platform Card
const PlatformCard = memo(({ platform, index, onOpenLightbox }) => {
  const Icon = platform.icon;
  const flipped = index % 2 === 1;

  return (
    <motion.div
      className={`grid gap-8 lg:gap-12 items-center ${
        flipped ? "lg:grid-cols-[1.5fr,1fr]" : "lg:grid-cols-[1fr,1.5fr]"
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Content */}
      <div className={flipped ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <div className="well w-11 h-11 rounded-xl flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-light">
              {platform.title}
            </h3>
            <p className="text-sm lg:text-base text-light-300">
              {platform.subtitle}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mt-6">
          {platform.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-light-300">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-sm lg:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Device Carousel */}
      <div className={`relative ${flipped ? "lg:order-1" : ""}`}>
        <DeviceCarousel
          platformKey={platform.key}
          images={platform.images}
          MockupComponent={platform.MockupComponent}
          onOpenLightbox={onOpenLightbox}
        />
      </div>
    </motion.div>
  );
});

const SofaShowcaseSection = () => {
  // Lightbox state
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <>
      <section
        id="sofaShowcaseSection"
        className="relative py-16 lg:py-24 bg-dark overflow-hidden"
      >
        <div className="container relative z-10">
          {/* Header */}
          <SectionHeader index="03" label="Case study · QIRAT" title="Sofa — one codebase, three screens">
            A Flutter video streaming app for phones, tablets and Android TV,
            with 10k+ downloads on Google Play. MVVM architecture, REST APIs,
            Google Cast and adaptive video quality — and data load time cut
            from 8–10 s to under 1 s.
          </SectionHeader>

          {/* Platform Cards */}
          <div className="space-y-20 lg:space-y-32">
            {platforms.map((platform, index) => (
              <PlatformCard
                key={platform.key}
                platform={platform}
                index={index}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="surface spotlight flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-20 p-6 sm:p-8">
            <div>
              <p className="text-sm font-semibold text-accent mb-1">10k+ downloads</p>
              <p className="text-xl font-bold text-light">Live on Google Play</p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaGooglePlay className="w-5 h-5" aria-hidden="true" />
              View on Play Store
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SofaShowcaseSection;
