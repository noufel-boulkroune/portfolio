import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, ArrowRight, Play, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  // Check if mobile using media query (no state changes)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run once on mount
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Main skills focused on core stack
  const skills = [
    { name: "Flutter", icon: "/images/SVG/flutter-icon.svg" },
    { name: "Dart", icon: "/images/SVG/dart-icon.svg" },
    { name: "Firebase", icon: "/images/SVG/firebase-icon.svg" },
    { name: "Clean Architecture", icon: "/images/SVG/state-managment.svg" },
    { name: "BLoC", icon: "/images/SVG/state-managment.svg" },
    { name: "REST API", icon: "/images/SVG/rest-api-icon.svg" },
    { name: "Provider", icon: "/images/SVG/state-managment.svg" },
    { name: "GetX", icon: "/images/SVG/state-managment.svg" },
    { name: "iOS", icon: "/images/SVG/ios-icon.svg" },
    { name: "Android", icon: "/images/SVG/android-icon.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Static Background - No animations on mobile */}
      <div className="absolute inset-0 bg-dark">
        {/* Gradient orbs - static on mobile, animated on desktop */}
        <div
          className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px]"
          style={{ opacity: 0.3 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px]"
          style={{ opacity: 0.3 }}
        />

        {/* Grid pattern - static */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        {/* Floating particles - desktop only */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
          {[
            {
              w: 3,
              h: 3,
              t: "15%",
              l: "10%",
              dur: 6,
              delay: 0,
              color: "bg-primary/30",
            },
            {
              w: 2,
              h: 2,
              t: "30%",
              l: "85%",
              dur: 8,
              delay: 1,
              color: "bg-secondary/30",
            },
            {
              w: 4,
              h: 4,
              t: "60%",
              l: "5%",
              dur: 7,
              delay: 2,
              color: "bg-accent/20",
            },
            {
              w: 2,
              h: 2,
              t: "75%",
              l: "92%",
              dur: 9,
              delay: 0.5,
              color: "bg-primary/20",
            },
            {
              w: 3,
              h: 3,
              t: "45%",
              l: "50%",
              dur: 5,
              delay: 3,
              color: "bg-secondary/20",
            },
            {
              w: 2,
              h: 2,
              t: "20%",
              l: "65%",
              dur: 10,
              delay: 1.5,
              color: "bg-accent/30",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${p.color}`}
              style={{ width: p.w * 4, height: p.h * 4, top: p.t, left: p.l }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-dark-200/80 border border-white/10 mb-6 shadow-[0_0_20px_rgba(0,212,255,0.1)] backdrop-blur-md"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <span className="text-sm font-medium text-light-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-light">Hi, I'm </span>
              <span className="gradient-text-static">Nawfel</span>
              <br />
              <span className="text-light-300">a Mobile App Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-light-300/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="text-primary font-semibold">
                Mobile App Developer
              </span>{" "}
              with <span className="text-accent font-semibold">3+ years</span>{" "}
              of experience in Flutter and Android, building user-friendly,
              high-performance apps using Flutter, Dart, Firebase, BLoC,
              Provider, GetX, MVVM, and Clean Architecture. Shipped{" "}
              <span className="text-primary font-semibold">5+ apps</span> to the
              Play Store and App Store — including a video streaming app with{" "}
              <span className="text-secondary font-semibold">
                10k+ downloads
              </span>
              , and an agrotech platform with offline-first maps. Proven impact:
              page load improved by{" "}
              <span className="text-secondary font-semibold">83%</span> (from
              60+ seconds to under 10s). I focus on delivering{" "}
              <span className="text-primary font-semibold">
                clean, scalable code
              </span>
              .
            </motion.p>

            {/* Stats - No floating animation */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "3+", label: "Years Exp" },
                { value: "15+", label: "Projects" },
                { value: "5+", label: "Published Apps" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-5 rounded-2xl bg-dark-200/40 border border-white/10 hover:border-primary/30 hover:bg-dark-200/60 transition-all duration-300 shadow-lg backdrop-blur-sm group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-static group-hover:scale-110 transition-transform duration-300 inline-block">
                    <AnimatedCounter value={stat.value} duration={1200} />
                  </div>
                  <div className="text-xs sm:text-sm text-light-300/70 mt-2 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow transition-all duration-300 active:scale-95"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-light font-medium rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 active:scale-95"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Tertiary Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
            >
              <a
                href="/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-light-300/70 hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links - No animation */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mt-6"
            >
              {[
                {
                  href: "https://github.com/noufel-boulkroune",
                  icon: FaGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/nawfelboulkroune/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-200/80 border border-white/10 text-light-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative glow - static */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-60" />

              {/* Rotating rings - only on desktop */}
              {!isMobile && (
                <>
                  <motion.div
                    className="absolute -inset-8 border border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -inset-12 border border-secondary/10 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </>
              )}

              {/* Static rings on mobile */}
              {isMobile && (
                <>
                  <div className="absolute -inset-6 border border-primary/20 rounded-full" />
                  <div className="absolute -inset-10 border border-secondary/10 rounded-full" />
                </>
              )}

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Profile Image - no JS state for loading, pure CSS */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-100 shadow-[0_0_40px_rgba(0,212,255,0.15)] group-hover:shadow-[0_0_60px_rgba(0,212,255,0.3)] transition-shadow duration-500 bg-dark-200 z-10">
                  <img
                    src="/images/myImage.jpg"
                    alt="Nawfel Boulkroune"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    decoding="async"
                    fetchpriority="high"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badges - static on mobile */}
                <div className="absolute -right-2 sm:-right-4 top-6 sm:top-8 px-4 sm:px-5 py-2.5 bg-dark-100/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl z-20 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_currentColor]" />
                    <span className="text-xs sm:text-sm font-bold text-light tracking-wide">
                      Mobile Dev
                    </span>
                  </div>
                </div>

                <div className="absolute -left-2 sm:-left-4 bottom-10 sm:bottom-12 px-4 sm:px-5 py-2.5 bg-dark-100/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl z-20 group-hover:translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <span className="text-[10px] sm:text-xs font-bold text-dark">
                        3+
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-light tracking-wide">
                      Years Exp
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-14 lg:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Tech Stack
            </h2>
            <p className="text-light-300/60">Technologies I work with</p>
          </div>

          {/* Infinite scrolling marquee - CSS only animation */}
          <div className="skills-marquee-wrapper">
            <div className="skills-marquee">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 flex-shrink-0 px-4 py-3 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-primary/20 hover:bg-dark-200 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-300/50 group-hover:bg-primary/10 transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width="24"
                      height="24"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span 
                    className="text-sm text-light-300/80 whitespace-nowrap group-hover:text-light transition-colors max-w-[80px] truncate"
                    title={skill.name}
                  >
                    {skill.name === "Clean Architecture" ? "Clean Arch..." : skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-center text-light-300/40 text-sm mb-6">
            Trusted by clients from different industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Amaya AG", "QIRAT", "MSD Consulting", "Azougui", "Sofa", "Snay3i", "Mziya"].map((client) => (
              <span key={client} className="text-light-300/60 font-semibold text-lg">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
