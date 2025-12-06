import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main skills focused on core stack
  const skills = [
    { name: "Flutter", icon: "/images/SVG/flutter-icon.svg" },
    { name: "Dart", icon: "/images/SVG/dart-icon.svg" },
    { name: "Firebase", icon: "/images/SVG/firebase-icon.svg" },
    { name: "REST API", icon: "/images/SVG/rest-api-icon.svg" },
    { name: "iOS", icon: "/images/SVG/ios-icon.svg" },
    { name: "Android", icon: "/images/SVG/android-icon.svg" },
    { name: "Provider", icon: "/images/SVG/state-managment.svg" },
    { name: "GetX", icon: "/images/SVG/state-managment.svg" },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
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
            backgroundSize: '100px 100px'
          }}
        />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200/80 border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
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
              className="text-lg text-light-300/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-justify"
            >
              Hey! I'm Nawfel, and I build mobile apps. For the past <span className="text-primary font-semibold">3 years</span>, I've been creating apps that look good and work great. I use <span className="text-accent font-semibold">Flutter</span> to build for both <span className="text-secondary font-semibold">Android and iOS</span> at once, which saves time and keeps things simple. I work with Firebase, REST APIs, and Provider to make apps that are fast and easy to use. I've put several apps on the Play Store and App Store that solve real problems for real people. I love learning new things and taking on fresh challenges.
            </motion.p>

            {/* Stats - No floating animation */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "3+", label: "Years Exp" },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Play Store Apps" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-static">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-light-300/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow transition-all duration-300 active:scale-95"
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-light font-medium rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </motion.div>

            {/* Social Links - No animation */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mt-8"
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
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-200/80 border border-white/10 text-light-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
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
              <div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-60"
              />

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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Image placeholder/loading state */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 rounded-full bg-dark-200 animate-pulse z-10" />
                )}

                {/* Profile Image */}
                <div
                  className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl"
                >
                  <img
                    src="/images/myImage.jpg"
                    alt="Nawfel Boulkroune"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </div>

                {/* Floating badges - static on mobile */}
                <div
                  className="absolute -right-2 sm:-right-4 top-6 sm:top-8 px-3 sm:px-4 py-2 bg-dark-100/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-light">Mobile Dev</span>
                  </div>
                </div>

                <div
                  className="absolute -left-2 sm:-left-4 bottom-10 sm:bottom-12 px-3 sm:px-4 py-2 bg-dark-100/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-bold text-dark">3+</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-light">Years Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-20 lg:mt-32"
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
                  <span className="text-sm text-light-300/80 whitespace-nowrap group-hover:text-light transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
