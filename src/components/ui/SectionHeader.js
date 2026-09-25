import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

// Heading, label and intro come into focus together: a short rise plus a
// blur-to-sharp, which reads as "resolving" rather than sliding in.
const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease, delay: i * 0.06 },
  }),
};

const SectionHeader = ({ index, label, title, children, className = "" }) => (
  <motion.header
    className={`mb-10 lg:mb-14 max-w-3xl ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
  >
    <motion.p className="eyebrow mb-3" variants={reveal} custom={0}>
      {index} / {label}
    </motion.p>
    <motion.h2
      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
      variants={reveal}
      custom={1}
    >
      {title}
    </motion.h2>
    {children && (
      <motion.p
        className="text-light-300 text-base sm:text-lg leading-relaxed"
        variants={reveal}
        custom={2}
      >
        {children}
      </motion.p>
    )}
  </motion.header>
);

export default SectionHeader;
