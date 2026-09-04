import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Code2, 
  Palette, 
  Rocket, 
  Wrench, 
  Zap,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom Flutter apps for iOS & Android built to production standard — like Sofa (10k+ downloads) and Amaya AG (3 interconnected field apps). From concept to store submission.",
    features: ["Flutter & Dart", "iOS & Android", "Firebase Integration", "REST API"],
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    icon: Code2,
    title: "App Maintenance & Updates",
    description: "Keep your app healthy with regular updates, bug fixes, and new features. I've maintained apps across 3 companies, including stability improvements on Smart Panda and Ramadan Awards.",
    features: ["Bug Fixes", "Performance Optimization", "SDK Updates", "New Features"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect Flutter UIs from Figma designs. Built a full design system for Amaya AG from scratch — tokens, theme engine, and a complete widget library used across 3 apps.",
    features: ["Figma to Flutter", "Custom Animations", "Design Systems", "Responsive Design"],
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400"
  },
  {
    icon: Rocket,
    title: "App Publishing",
    description: "End-to-end store submission handled. I've published 10+ apps to Play Store & App Store — including Sofa, Azougui, Snay3i, Mziya, and Laffaiire — with ASO and compliance.",
    features: ["Play Store Publishing", "App Store Publishing", "ASO Optimization", "Compliance"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  },
  {
    icon: Wrench,
    title: "API & Backend Integration",
    description: "Connect your app to anything — REST APIs, Firebase, Google Maps, Stripe, and social auth. Built Snay3i with a full Firebase suite and a custom React/Node.js back-office panel.",
    features: ["REST API", "Firebase Suite", "Google Maps", "Stripe & Social Auth"],
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Cut load times and fix slow screens. On Amaya AG I reduced page load from ~10 s to 1-2 s cached (83%+ faster) using targeted API queries and multi-layer caching.",
    features: ["Load Time Reduction", "Multi-layer Caching", "Code Refactoring", "Memory Optimization"],
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  }
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className={`group relative bg-gradient-to-br ${service.color} rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Icon */}
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-dark-200/80 border border-white/10 flex items-center justify-center mb-5 ${service.iconColor}`}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-light mb-3 group-hover:gradient-text-static transition-all">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-light-300/70 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-dark-200/60 text-light-300/80 border border-white/5"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-14 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Zap className="w-3.5 h-3.5" />
            What I Offer
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Services </span>
            <span className="gradient-text-static">& Solutions</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From building new apps from scratch to maintaining existing ones, 
            I provide end-to-end mobile development services tailored to your needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
