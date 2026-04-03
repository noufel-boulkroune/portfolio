import React, { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeftRight, Zap, Wrench, Sparkles } from "lucide-react";
import Lightbox from "./Lightbox";

// ── Image lists ──────────────────────────────────────────────────────────────
const OLD_IMAGES = [
  "Screenshot_20260402_211344.jpg",
  "Screenshot_20260402_211348.jpg",
  "Screenshot_20260402_211351.jpg",
  "Screenshot_20260402_211400.jpg",
  "Screenshot_20260402_211407.jpg",
  "Screenshot_20260402_211416.jpg",
  "Screenshot_20260402_211426.jpg",
  "Screenshot_20260402_211432.jpg",
  "Screenshot_20260402_211539.jpg",
  "Screenshot_20260402_211547.jpg",
].map((n) => `/images/old_amaya_visit_repot/${n}`);

const NEW_IMAGES = [
  "Screenshot_20260402_212421.jpg",
  "Screenshot_20260402_212426.jpg",
  "Screenshot_20260402_212437.jpg",
  "Screenshot_20260402_212448.jpg",
  "Screenshot_20260402_212504.jpg",
  "Screenshot_20260402_212536.jpg",
  "Screenshot_20260402_212547.jpg",
  "Screenshot_20260402_212553.jpg",
  "Screenshot_20260402_212600.jpg",
  "Screenshot_20260402_212607.jpg",
  "Screenshot_20260402_212612.jpg",
  "Screenshot_20260402_212623.jpg",
  "Screenshot_20260402_212635.jpg",
  "Screenshot_20260402_212704.jpg",
  "Screenshot_20260402_212711.jpg",
  "Screenshot_20260402_212716.jpg",
  "Screenshot_20260402_212718.jpg",
  "Screenshot_20260402_212724.jpg",
  "Screenshot_20260402_212750.jpg",
  "Screenshot_20260402_212823.jpg",
  "Screenshot_20260402_212835.jpg",
  "Screenshot_20260402_212840.jpg",
].map((n) => `/images/new_amaya_visit_repot/${n}`);

// ── Lazy image with blur-up loading ─────────────────────────────────────────
const LazyImage = memo(({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="absolute inset-0 bg-dark-200"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-7 h-7 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-light-300/30 text-xs">Failed to load</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.35s ease" }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {/* Tap hint overlay */}
      {loaded && onClick && (
        <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-white/60 text-[10px] bg-black/50 px-2 py-0.5 rounded-full">
            tap to open
          </span>
        </div>
      )}
    </div>
  );
});

// ── Sofa-style Phone Mockup ──────────────────────────────────────────────────
const PhoneMockup = memo(({ children }) => (
  <div className="relative">
    {/* Shadow */}
    <div className="absolute inset-0 bg-black/30 rounded-[2.5rem] blur-xl transform translate-y-4 scale-95" />
    {/* Body */}
    <div className="relative bg-gradient-to-b from-dark-300 to-dark-400 rounded-[2.2rem] p-1.5 shadow-phone">
      {/* Inner bezel */}
      <div className="bg-black rounded-[2rem] p-0.5 relative overflow-hidden">
        {/* Screen */}
        <div className="relative rounded-[1.8rem] overflow-hidden aspect-[9/19.5] bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  </div>
));

// ── Phone Carousel ───────────────────────────────────────────────────────────
const PhoneCarousel = memo(({ images, label, accent, labelColor, onOpenLightbox }) => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((delta) => {
    setDir(delta);
    setIndex((prev) => (prev + delta + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback((i) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  }, [index]);

  const slideVariants = {
    enter:  (d) => ({ x: d > 0 ? "28%" : "-28%", opacity: 0, scale: 0.93 }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit:   (d) => ({ x: d < 0 ? "28%" : "-28%", opacity: 0, scale: 0.93 }),
  };

  const MAX_DOTS = 12;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Label */}
      <span className={`text-sm font-bold uppercase tracking-[0.15em] ${labelColor}`}>
        {label}
      </span>

      {/* Phone + nav row */}
      <div className="flex items-center gap-3 sm:gap-4 w-full">
        {/* Prev */}
        <motion.button
          onClick={() => go(-1)}
          className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark-200/80 border border-white/10 flex items-center justify-center text-light-300 hover:text-primary hover:border-primary/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        {/* Phone — fluid, fills remaining space */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <PhoneMockup>
                <LazyImage
                  src={images[index]}
                  alt={`${label} screenshot ${index + 1}`}
                  onClick={() => onOpenLightbox(index)}
                />
              </PhoneMockup>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <motion.button
          onClick={() => go(1)}
          className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark-200/80 border border-white/10 flex items-center justify-center text-light-300 hover:text-primary hover:border-primary/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {images.slice(0, MAX_DOTS).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-200 ${
              i === index
                ? accent === "secondary"
                  ? "w-5 h-2 bg-secondary"
                  : "w-5 h-2 bg-primary"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
        {images.length > MAX_DOTS && (
          <span className="text-xs text-light-300/30 ml-1">+{images.length - MAX_DOTS}</span>
        )}
      </div>

      {/* Counter */}
      <p className="text-xs text-light-300/40 tabular-nums">
        {index + 1} / {images.length}
      </p>
    </div>
  );
});

// ── Stat card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div
    className="flex flex-col items-center gap-1.5 px-5 py-4 rounded-2xl bg-dark-200/50 border border-white/5 min-w-[100px]"
    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.12)" }}
    transition={{ duration: 0.2 }}
  >
    <Icon className={`w-5 h-5 ${color}`} />
    <span className={`text-2xl font-extrabold ${color}`}>{value}</span>
    <span className="text-xs text-light-300/50 text-center leading-tight">{label}</span>
  </motion.div>
);

// ── Main Section ─────────────────────────────────────────────────────────────
const AmayaShowcaseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Lightbox state: null = closed, { images, index } = open
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <>
      <section ref={ref} className="relative py-14 lg:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark">
          <motion.div
            className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[200px]"
            animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container relative z-10">
          {/* ── Header ── */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              Before vs After
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-light">Amaya AG — </span>
              <span className="gradient-text-static">Visit Report Redesign</span>
            </motion.h2>

            <motion.p
              className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Fixed data not loading on first run (required pull-to-refresh) and completely
              rebuilt the visit-report UX — improved GPS flows, photo capture with annotations,
              multilingual support, and a brand-new UI system built from scratch.
            </motion.p>
          </motion.div>

          {/* ── Stats + improvements ── */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Load-time stats */}
            <div className="flex flex-wrap justify-center gap-4">
              <StatCard icon={Zap} value="~2s"  label="Load time (cached)"   color="text-primary" />
              <StatCard icon={Zap} value="<10s" label="Load time (first run)" color="text-secondary" />
            </div>

            {/* What was improved */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div
                className="flex items-start gap-3 px-5 py-3.5 rounded-2xl bg-dark-200/50 border border-white/5 max-w-xs"
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-light">UX enhancement</p>
                  <p className="text-xs text-light-300/50 mt-0.5 leading-relaxed">
                    Rebuilt visit-report UI — GPS flows, photo annotations, multi-language support
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 px-5 py-3.5 rounded-2xl bg-dark-200/50 border border-white/5 max-w-xs"
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.2 }}
              >
                <Wrench className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-light">Fixed data loading</p>
                  <p className="text-xs text-light-300/50 mt-0.5 leading-relaxed">
                    Data no longer requires pull-to-refresh on first run
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Before / After grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
            {/* BEFORE */}
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Phone — responsive, generous max-width */}
              <div className="w-full max-w-[260px] sm:max-w-[310px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[460px] mx-auto">
                <PhoneCarousel
                  images={OLD_IMAGES}
                  label="Before"
                  accent="gray"
                  labelColor="text-light-300/50"
                  onOpenLightbox={(i) => openLightbox(OLD_IMAGES, i)}
                />
              </div>
              <p className="text-sm text-light-300/40 text-center max-w-xs leading-relaxed">
                Original visit-report screens — basic layout, limited navigation, single language, data requires pull-to-refresh on first run
              </p>
            </motion.div>

            {/* AFTER */}
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full max-w-[260px] sm:max-w-[310px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[460px] mx-auto">
                <PhoneCarousel
                  images={NEW_IMAGES}
                  label="After"
                  accent="secondary"
                  labelColor="text-secondary"
                  onOpenLightbox={(i) => openLightbox(NEW_IMAGES, i)}
                />
              </div>
              <p className="text-sm text-light-300/40 text-center max-w-xs leading-relaxed">
                Rebuilt from scratch — new design system, fixed data loading, GPS flows, photo annotations, 3-language support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
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

export default AmayaShowcaseSection;
