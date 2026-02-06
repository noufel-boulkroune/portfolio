import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Database, 
  GitBranch,
  Layers,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
      { name: "iOS Development", level: 85 },
      { name: "Android Development", level: 90 },
      { name: "React Native", level: 70 },
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    skills: [
      { name: "Firebase", level: 92 },
      { name: "REST API", level: 90 },
      { name: "Cloud Functions", level: 80 },
      { name: "Firestore", level: 88 },
      { name: "Authentication", level: 90 },
    ]
  },
  {
    title: "Architecture & Tools",
    icon: Layers,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    skills: [
      { name: "MVVM Pattern", level: 90 },
      { name: "Provider", level: 92 },
      { name: "GetX", level: 85 },
      { name: "Clean Architecture", level: 80 },
      { name: "Dependency Injection", level: 75 },
    ]
  },
  {
    title: "DevOps & Version Control",
    icon: GitBranch,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Fastlane", level: 80 },
      { name: "Firebase Distribution", level: 85 },
      { name: "App Store Publishing", level: 92 },
    ]
  }
];

const SkillBar = ({ skill, delay }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-light-300 font-medium">{skill.name}</span>
        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-300/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategoryCard = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      className={`group relative bg-gradient-to-br ${category.color} rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 rounded-xl bg-dark-200/80 border border-white/10 flex items-center justify-center ${category.iconColor}`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-light">{category.title}</h3>
        </div>

        {/* Skills */}
        <div>
          {category.skills.map((skill, idx) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1 + idx * 0.1} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
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
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
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
          className="text-center mb-16 lg:mb-20"
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
            <Sparkles className="w-3.5 h-3.5" />
            Expertise
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Technical </span>
            <span className="gradient-text-static">Skills</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive toolkit built over 3+ years of mobile development, 
            continuously evolving with the latest technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-light-300/60 text-sm uppercase tracking-wider mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter", "Dart", "Firebase", "iOS", "Android", "REST API",
              "Git", "MVVM", "Provider", "GetX", "Google Maps", "Stripe",
              "Push Notifications", "CI/CD", "App Store", "Play Store"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full bg-dark-200/50 border border-white/5 text-light-300/80 text-sm hover:border-primary/30 hover:text-primary transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
