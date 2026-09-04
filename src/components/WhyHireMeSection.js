import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  Clock, 
  Globe, 
  Code2,
  Award,
  ArrowRight
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Cross-Platform Expert",
    description: "One codebase, multiple platforms. Android, iOS, Android TV, and Web—reaching users wherever they are.",
    stat: "4",
    statLabel: "Platforms"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "I've cut page load from ~10 s to 1-2 s cached — an 83%+ improvement — using targeted API queries and multi-layer caching.",
    stat: "83%+",
    statLabel: "Faster Loading"
  },
  {
    icon: Clock,
    title: "Proven Track Record",
    description: "10+ apps published on Play Store and App Store. Real products with real users — including 10k+ downloads on one platform.",
    stat: "10+",
    statLabel: "Live Apps"
  },
  {
    icon: Globe,
    title: "Diverse Experience",
    description: "Built apps across multiple industries—video streaming, maps & tracking, event management, e-commerce, job marketplaces, and delivery platforms.",
    stat: "5+",
    statLabel: "Industries"
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-structured, documented code that's easy to maintain and scale as your app grows.",
    stat: "3+",
    statLabel: "Years Coding"
  },
  {
    icon: Award,
    title: "Full Service",
    description: "From idea to App Store—I handle design, development, testing, publishing, and ongoing support.",
    stat: "Full",
    statLabel: "End-to-End"
  }
];

const ReasonCard = ({ reason, index }) => {
  const Icon = reason.icon;
  
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-dark-100 to-dark-200 rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative">
        {/* Icon and Stat */}
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <div className="text-right">
            <div className="text-2xl font-bold gradient-text-static">{reason.stat}</div>
            <div className="text-xs text-light-300/50">{reason.statLabel}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-light mb-3 group-hover:gradient-text-static transition-all">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="text-light-300/70 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyHireMeSection = () => {
  return (
    <section id="why-hire-me" className="relative py-14 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Award className="w-3.5 h-3.5" />
            Why Choose Me
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Why </span>
            <span className="gradient-text-static">Hire Me?</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm not just another developer—I bring a unique combination of technical expertise, 
            business understanding, and commitment to your success.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Build Something Great
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
