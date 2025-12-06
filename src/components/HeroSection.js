import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark">
        {/* Gradient orbs with continuous animation */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.1, 1.3, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.2, 0.4, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Grid pattern with subtle movement */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
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
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
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
              Hey! I'm Nawfel, and I build mobile apps. For the past <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]">3 years</span>, I've been creating apps that look good and work great. I use <span className="text-accent font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">Flutter</span> to build for both <span className="text-secondary font-semibold drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">Android and iOS</span> at once, which saves time and keeps things simple. I work with Firebase, REST APIs, and Provider to make apps that are fast and easy to use. I've put several apps on the Play Store and App Store that solve real problems for real people. I love learning new things and taking on fresh challenges.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "3+", label: "Years Exp" },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Play Store Apps" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-dark-200/50 border border-white/5"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderColor: "rgba(0, 212, 255, 0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold gradient-text-static"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-light-300/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-light font-medium rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
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
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-200/80 border border-white/10 text-light-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
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
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating ring */}
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

              {/* Profile Image Container */}
              <motion.div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Image placeholder/loading state */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 rounded-full bg-dark-200 animate-pulse z-10" />
                )}

              {/* Profile Image */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'transform' }}
                >
                <img
                  src="/images/myImage.jpg"
                  alt="Nawfel Boulkroune"
                    className={`w-full h-full object-cover ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ 
                      willChange: 'opacity',
                      transition: 'opacity 0.3s ease-out'
                    }}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -right-4 top-8 px-4 py-2 bg-dark-100/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg"
                  animate={{ 
                    y: [0, -12, 0],
                    x: [0, 3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-sm font-medium text-light">Mobile Dev</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-4 bottom-12 px-4 py-2 bg-dark-100/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg"
                  animate={{ 
                    y: [0, 12, 0],
                    x: [0, -3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-xs font-bold text-dark">3+</span>
                    </motion.div>
                    <span className="text-sm font-medium text-light">Years Exp</span>
              </div>
            </motion.div>
          </motion.div>
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

          {/* Infinite scrolling marquee */}
          <div className="skills-marquee-wrapper">
            <div className="skills-marquee">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 flex-shrink-0 px-4 py-3 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-primary/20 hover:bg-dark-200 transition-all duration-300 group cursor-pointer"
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-300/50 group-hover:bg-primary/10 transition-colors"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
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
