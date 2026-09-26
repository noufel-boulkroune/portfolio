import React, { useState, useRef, useCallback, memo } from "react";
import SectionHeader from "./ui/SectionHeader";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Wrench,
  Sparkles,
} from "lucide-react";
// import { FaGooglePlay } from "react-icons/fa";
import Lightbox from "./Lightbox";

// ── Image lists ──────────────────────────────────────────────────────────────
const OLD_IMAGES = [
  "Screenshot_20260402_211344.webp",
  "Screenshot_20260402_211348.webp",
  "Screenshot_20260402_211432.webp",
  "Screenshot_20260402_211539.webp",
  "Screenshot_20260402_211547.webp",
  "Screenshot_20260402_211351.webp",
  "Screenshot_20260402_211400.webp",
  "Screenshot_20260402_211407.webp",
  "Screenshot_20260402_211416.webp",
  "Screenshot_20260402_211426.webp",
].map((n) => `/images/old_amaya_visit_report/${n}`);

const NEW_IMAGES = [
  "0.webp",
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "17.webp",
  "18.webp",
  "19.webp",
  "20.webp",
  "21.webp",
  "22.webp",
].map((n) => (n.startsWith("/") ? n : `/images/new_amaya_visit_report/${n}`));

// ── Lazy image with blur-up loading ─────────────────────────────────────────
const LazyImage = memo(({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className="absolute inset-0 block w-full bg-dark-200"
      onClick={onClick}
      style={{ cursor: onClick ? "zoom-in" : "default" }}
      {...(onClick && { type: "button", "aria-label": `${alt} — view full size` })}
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
        loading="lazy"
        decoding="async"
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
    </Wrapper>
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

// ── Phone Carousel ───────────────────────────────────────────────────────────
const PhoneCarousel = memo(
  ({ images, label, accent, labelColor, onOpenLightbox }) => {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);

    const go = useCallback(
      (delta) => {
        setDir(delta);
        setIndex((prev) => (prev + delta + images.length) % images.length);
      },
      [images.length],
    );

    const goTo = useCallback(
      (i) => {
        setDir(i > index ? 1 : -1);
        setIndex(i);
      },
      [index],
    );

    const slideVariants = {
      enter: (d) => ({ x: d > 0 ? "28%" : "-28%", opacity: 0, scale: 0.93 }),
      center: { x: "0%", opacity: 1, scale: 1 },
      exit: (d) => ({ x: d < 0 ? "28%" : "-28%", opacity: 0, scale: 0.93 }),
    };

    const MAX_DOTS = 12;

    return (
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Label */}
        <span
          className={`text-base sm:text-lg font-bold uppercase tracking-[0.15em] ${labelColor}`}
        >
          {label}
        </span>

        {/* Phone + nav row */}
        <div className="flex items-center gap-3 sm:gap-4 w-full">
          {/* Prev */}
          <motion.button
            onClick={() => go(-1)}
            className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-light hover:text-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Phone — fluid, fills remaining space. Frame stays static (so its
              buttons and drop-shadow are never clipped); only the screenshot
              inside slides, clipped by the screen's own rounded corners. */}
          <div className="relative flex-1">
            <PhoneMockup>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <LazyImage
                    src={images[index]}
                    alt={`${label} screenshot ${index + 1}`}
                    onClick={() => onOpenLightbox(index)}
                  />
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>
          </div>

          {/* Next */}
          <motion.button
            onClick={() => go(1)}
            className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-light hover:text-primary"
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
            <span className="text-xs text-light-300/30 ml-1">
              +{images.length - MAX_DOTS}
            </span>
          )}
        </div>

        {/* Counter */}
        <p className="text-xs text-light-300/40 tabular-nums">
          {index + 1} / {images.length}
        </p>
      </div>
    );
  },
);

// ── Stat card ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label }) => (
  <div className="surface spotlight flex items-start gap-3 p-5">
    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
    <div>
      <p className="text-xl font-bold text-light">{value}</p>
      <p className="text-sm text-light-300 leading-snug">{label}</p>
    </div>
  </div>
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
      <section
        ref={ref}
        id="amaya-showcase"
        className="relative py-16 lg:py-24 bg-dark-100 overflow-hidden"
      >
        <div className="container relative z-10">
          {/* ── Header ── */}
          <SectionHeader index="04" label="Case study · Amaya AG" title="Visit report: before & after">
            Data did not load on first run without a pull-to-refresh, and the
            flow was hard to use in the field. I fixed the loading, rebuilt the
            UX on a new design system, and added GPS flows, annotated photo
            capture and 3-language support.
          </SectionHeader>

          {/* ── Results ── */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-14">
            <StatCard icon={Zap} value="~10 s → 1–2 s" label="Page load (cached)" />
            <StatCard icon={Wrench} value="Fixed" label="First-run data loading" />
            <StatCard icon={Sparkles} value="New UI" label="Design system, GPS, photo notes, 3 languages" />
          </div>

          {/* ── Before / After grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
            {/* BEFORE */}
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Phone — responsive, generous max-width */}
              <div className="w-full max-w-[260px] sm:max-w-[310px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[460px] mx-auto">
                <PhoneCarousel
                  images={OLD_IMAGES}
                  label="Before"
                  accent="gray"
                  labelColor="text-light-300"
                  onOpenLightbox={(i) => openLightbox(OLD_IMAGES, i)}
                />
              </div>
              <p className="text-sm text-light-300 text-center max-w-xs leading-relaxed">
                Original visit-report screens — basic layout, limited
                navigation, single language, data requires pull-to-refresh on
                first run
              </p>
            </motion.div>

            {/* AFTER */}
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
              <p className="text-sm text-light-300 text-center max-w-xs leading-relaxed">
                Rebuilt from scratch — new design system, fixed data loading,
                GPS flows, photo annotations, 3-language support
              </p>
            </motion.div>
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

export default AmayaShowcaseSection;
