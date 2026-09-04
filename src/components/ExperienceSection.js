import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const experiences = [
  {
    title: "Mobile App Developer",
    company: "Amaya AG",
    location: "Algeria (Remote)",
    type: "Full-time",
    period: "Nov 2025 - Present",
    description: "Agrotech platform — 3 interconnected apps (Advisor, Farmer, Sales) for farm & land management. Built the design system from scratch (typography, color, grid, 40+ components) and used it to redesign 40+ screens across all three apps — visit-report flows, Sales orders/invoices/home, onboarding. Also built offline-first map navigation, local-first data sync, and multi-layer caching that cut page load from ~10s to 1-2s (cached).",
    tags: ["Flutter", "BLoC", "Freezed", "Design Systems", "GeoJSON", "MBTiles", "Unit Tests", "Agile", "Crashlytics"],
    color: "primary"
  },
  {
    title: "Mobile App Developer",
    company: "QIRAT",
    location: "Algeria",
    type: "Full-time",
    period: "Sep 2024 - Oct 2025",
    description: "Built Sofa — a cross-platform Flutter video streaming app with 10k+ Play Store downloads. Delivered separate tailored UIs for mobile, tablet, and Android TV (D-pad navigation, Google Cast, subtitles, adaptive streaming). Optimised API calls and added smart caching, cutting data load time from 8–10 s to under 1 s — an 80%+ improvement. Converted all Figma screens to pixel-perfect Flutter UI.",
    tags: ["Flutter", "Provider", "REST API", "Android TV", "Google Cast", "Adaptive Streaming", "Figma"],
    color: "secondary"
  },
  {
    title: "Mobile App Developer",
    company: "MSD Consulting",
    location: "Algeria (Remote)",
    type: "Contract",
    period: "Dec 2022 - Aug 2025",
    description: "French startup studio — shipped 5 Flutter apps across e-commerce, logistics, and job marketplaces. Built Azougui (grocery delivery, Mauritanian market) with real-time inventory, multi-vendor support, and Google & Apple auth — released on both stores. Built Snay3i (job marketplace) with Google Maps, 3-language support (AR/FR/EN), full Firebase suite, and a React/Node.js back-office admin panel. Shipped Mziya, Laffaiire, and Laffaiire-Tech to the Play Store. Configured Flutter flavors (dev/prod) and eliminated Stripe platform fees by migrating to Standard accounts.",
    tags: ["Flutter", "Firebase", "Google Maps", "Stripe", "GetX", "React", "Node.js", "Flutter Flavors"],
    color: "accent"
  },
  {
    title: "Mobile App Developer",
    company: "Intaj Mohtawayat",
    location: "Algeria",
    type: "Full-time",
    period: "Feb 2024 - Sep 2024",
    description: "Multinational media company — apps for entertainment, education, and event management. Built D-Futures from scratch using Flutter, MVVM, and REST APIs for full event lifecycle management. Improved stability of Smart Panda and Ramadan Awards apps through bug fixes and performance improvements. Mentored junior Flutter developers and conducted code reviews across product and QA teams.",
    tags: ["Flutter", "MVVM", "Provider", "REST APIs", "Code Review", "Mentoring"],
    color: "primary"
  },
  {
    title: "Mobile App Developer",
    company: "SARL MCI",
    location: "Algeria",
    type: "Full-time",
    period: "Apr 2023 - Dec 2023",
    description: "Real estate company — internal Flutter app for tender management, product & stock tracking, and workforce coordination. Designed and implemented clean GetX state management architecture, integrated REST APIs for live inventory data, and set up GitHub version control workflows for the development team. First professional Flutter project delivering a complete business solution end to end.",
    tags: ["Flutter", "GetX", "REST APIs", "GitHub", "Dart"],
    color: "secondary"
  }
];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`relative flex flex-col lg:flex-row items-start gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10 hidden lg:block" />
      
      {/* Content Card */}
      <div className={`w-full lg:w-[calc(50%-40px)] ${isEven ? 'lg:pr-0 lg:text-right' : 'lg:pl-0 lg:text-left'}`}>
        <motion.div
          className="group relative bg-dark-200/40 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-primary/40 hover:bg-dark-200/80 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.3)]"
          whileHover={{ y: -6, scale: 1.02 }}
        >
          {/* Subtle glow effect behind card on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          
          {/* Header */}
          <div className={`relative flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'} mb-4 z-10`}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              <Calendar className="w-3 h-3" />
              {experience.period}
            </span>
            
            <h3 className="text-xl font-bold text-light group-hover:gradient-text-static transition-all">
              {experience.title}
            </h3>
            
            <div className={`flex flex-wrap items-center gap-3 mt-2 text-sm text-light-300/60 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
              <span className="px-2 py-0.5 rounded bg-dark-300/50 text-xs">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className={`relative text-light-300/70 text-sm leading-relaxed ${isEven ? 'lg:text-right' : 'lg:text-left'} z-10 mb-4`}>
            {experience.description}
          </p>

          {/* Tech tags */}
          {experience.tags && (
            <div className={`relative flex flex-wrap gap-1.5 z-10 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
              {experience.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs rounded-md bg-dark-300/60 text-light-300/70 border border-white/5 hover:border-primary/20 hover:text-primary/80 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="hidden lg:block w-[calc(50%-40px)]" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-14 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Professional </span>
            <span className="gradient-text-static">Experience</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Over 3 years of hands-on experience building and shipping mobile apps 
            for companies across different industries.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden lg:block lg:-translate-x-1/2" />
          
          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "5", label: "Companies" },
            { value: "10+", label: "Apps Published" },
            { value: "100%", label: "Store Acceptance" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group text-center p-6 lg:p-8 rounded-3xl bg-dark-200/30 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-dark-200/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:border-primary/30"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text-static mb-3 group-hover:scale-110 transition-transform duration-500 inline-block">
                <AnimatedCounter value={stat.value} duration={1400} />
              </div>
              <div className="text-sm lg:text-base font-medium text-light-300/70 group-hover:text-light-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
