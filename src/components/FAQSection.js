import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your development process?",
    answer: "I follow a structured approach: 1) Discovery & Requirements gathering, 2) Design review (if Figma provided), 3) Development with weekly updates, 4) Testing & QA, 5) Deployment to stores. You'll receive regular progress updates and have access to test builds throughout development."
  },
  {
    question: "How long does it take to build an app?",
    answer: "Timeline depends on complexity. A simple MVP typically takes 4-6 weeks, while complex apps with advanced features can take 3-4 months. I provide detailed timelines after understanding your requirements and always work to deliver on schedule."
  },
  {
    question: "What are your rates?",
    answer: "I offer flexible pricing: fixed project rates for well-defined scopes, or hourly rates for ongoing work. My rates are competitive while ensuring high-quality delivery. Let's discuss your project for a detailed quote."
  },
  {
    question: "Do you handle app store publishing?",
    answer: "Absolutely! I handle the entire publishing process including app preparation, store listing optimization, screenshots, and submission to both Google Play Store and Apple App Store. I've successfully published 5+ apps with zero rejections."
  },
  {
    question: "Will I own the source code?",
    answer: "Yes, absolutely. Upon project completion and final payment, you receive full ownership of all source code, assets, and intellectual property. I can also set up your own GitHub repository for code handover."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, I offer post-launch support packages that include bug fixes, performance monitoring, OS updates compatibility, and feature enhancements. This ensures your app stays up-to-date and runs smoothly."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Definitely. I can take over existing Flutter projects, perform code audits, fix bugs, add new features, or refactor for better performance. I've successfully modernized several legacy Flutter apps."
  },
  {
    question: "How do we communicate during the project?",
    answer: "I use multiple channels for clear communication: Slack/Telegram for quick messages, email for formal updates, and video calls for reviews. I typically respond within a few hours during work hours and provide weekly progress reports."
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className="border-b border-white/5 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-light group-hover:text-primary'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-primary/20 text-primary' : 'bg-dark-200 text-light-300 group-hover:text-primary'
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-light-300/70 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
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
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </motion.span>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">Frequently Asked </span>
            <span className="gradient-text-static">Questions</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Got questions? I've got answers. If you don't find what you're looking for, 
            feel free to reach out directly.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ List */}
          <motion.div
            className="bg-gradient-to-br from-dark-100 to-dark-200 rounded-2xl p-6 border border-white/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {faqs.slice(0, 4).map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-dark-100 to-dark-200 rounded-2xl p-6 border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {faqs.slice(4).map((faq, index) => (
              <FAQItem
                key={index + 4}
                faq={faq}
                index={index + 4}
                isOpen={openIndex === index + 4}
                onToggle={() => setOpenIndex(openIndex === index + 4 ? -1 : index + 4)}
              />
            ))}
          </motion.div>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-light mb-1">Still have questions?</h3>
              <p className="text-light-300/60 text-sm">I'm here to help. Let's chat about your project.</p>
            </div>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary text-dark font-semibold rounded-xl hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
