import React from "react";
import { motion } from "framer-motion";

/**
 * Splits text into words that sharpen into place one after another.
 * Used once, on the hero headline, where a little ceremony is earned.
 */
// className goes on each word (not the wrapper) so effects like gradient
// text, which clip to their own glyphs, still apply to the animated words.
const WordReveal = ({ text, delay = 0, stagger = 0.08, className = "" }) => (
  <span aria-label={text}>
    {text.split(" ").map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        aria-hidden="true"
        className={`inline-block whitespace-pre ${className}`}
        initial={{ opacity: 0, y: "0.35em", filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
      >
        {i < text.split(" ").length - 1 ? `${word} ` : word}
      </motion.span>
    ))}
  </span>
);

export default WordReveal;
