import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RESUME_URL } from "./HeroSection";

const navLinks = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#sofaShowcaseSection", label: "Case Studies", id: "sofaShowcaseSection" },
  { href: "#contact", label: "Contact", id: "contact" },
];

// Sections that light up a nav link; the Amaya case study maps to "Case Studies".
const sectionToLink = {
  experience: "experience",
  projects: "projects",
  sofaShowcaseSection: "sofaShowcaseSection",
  "amaya-showcase": "sofaShowcaseSection",
  contact: "contact",
};

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    let frame = null;
    const update = () => {
      frame = null;
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      let current = "";
      for (const id of Object.keys(sectionToLink)) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          current = sectionToLink[id];
        }
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "py-3 glass-strong !border-x-0 !border-t-0 !shadow-none"
            : "py-5 bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="inline-flex items-center gap-2 rounded-lg"
              aria-label="Nawfel Boulkroune — back to top"
            >
              <svg width="26" height="26" viewBox="0 0 100 100" aria-hidden="true" className="flex-shrink-0">
                <rect x="10" y="10" width="80" height="80" rx="22" fill="none" stroke="#0071E3" strokeWidth="6" />
                <text x="42" y="68" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="46" fontWeight="800" fill="#1D1D1F" textAnchor="middle">n</text>
                <circle cx="66" cy="62" r="6" fill="#0071E3" />
              </svg>
              <span className="text-xl font-bold text-light tracking-tight">Nawfel</span>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-light-300 hover:text-light"
                  }`}
                  aria-current={activeSection === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ml-3 gap-1.5 !px-4 !py-2 !text-sm"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-dark-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-light" /> : <Menu className="w-5 h-5 text-light" />}
            </button>
          </div>
        </div>
        {/* Reading progress */}
        <motion.div
          className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-[#3AC3FF]"
          style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
          aria-hidden="true"
        />
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              className="fixed top-[64px] left-3 right-3 z-50 md:hidden rounded-2xl glass-strong p-3"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 text-lg font-medium rounded-xl ${
                      activeSection === link.id ? "text-primary bg-primary/10" : "text-light hover:bg-dark-200"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2 mt-2 pt-3 border-t border-white/10">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-full bg-primary text-white"
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/nawfelboulkroune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 text-light-300"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/noufel-boulkroune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 text-light-300"
                  aria-label="GitHub (opens in new tab)"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
