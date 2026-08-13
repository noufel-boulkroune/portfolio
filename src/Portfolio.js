import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import SofaShowcaseSection from "./components/SofaShowcaseSection";
import AmayaShowcaseSection from "./components/AmayaShowcaseSection";
import ProjectsSection from "./components/ProjectsSection";
import LearningProjectsSection from "./components/LearningProjectsSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import WhyHireMeSection from "./components/WhyHireMeSection";
// import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
// import FloatingCTA from "./components/FloatingCTA";
import projects from "./data/projectsData";

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full glass text-light flex items-center justify-center hover:text-primary transition-colors"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Scroll to top of page"
          type="button"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.div
        className="relative bg-dark min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-dark focus:rounded-lg focus:font-semibold focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Main content */}
        <main id="main-content" tabIndex={-1}>
          {/* Hero Section */}
          <HeroSection />

          {/* ── EXPERIENCE (recruiters see this fast) ────────── */}
          <ExperienceSection />

          {/* ── WORK ─────────────────────────────────────────── */}
          {/* Amaya Visit Report - Before / After Case Study */}
          <AmayaShowcaseSection />

          {/* Sofa - Multi-platform Showcase */}
          <SofaShowcaseSection />

          {/* All Professional Projects */}
          <ProjectsSection projects={projects} />

          {/* Open Source & Practice Projects */}
          <LearningProjectsSection />

          {/* ── SERVICES ─────────────────────────────────────── */}
          <ServicesSection />

          {/* ── CLOSE ────────────────────────────────────────── */}
          {/* Why Hire Me */}
          <WhyHireMeSection />

          {/* Contact */}
          <ContactSection />
        </main>

        {/* Floating CTA */}
        {/* <FloatingCTA /> */}

        {/* Scroll to top button */}
        <ScrollToTop />

      </motion.div>
    </>
  );
};

export default Portfolio;
