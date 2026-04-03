import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to `target` when it scrolls into view.
 * Supports suffixes like "+", "k+", "s", "%".
 * For non-numeric values (e.g. "5+", "3+", "10k+"), it auto-detects
 * the numeric part and the suffix.
 */
const AnimatedCounter = ({ value, duration = 1400, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // Parse "5+", "3+", "10k+", "80%", "2s" etc.
  const parseValue = (v) => {
    const str = String(v);
    const match = str.match(/^([\d.]+)(.*)/);
    if (!match) return { num: null, suffix: str };
    const num = parseFloat(match[1]);
    const suffix = match[2] || "";
    // Handle "k" multiplier display
    return { num, suffix };
  };

  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView || num === null) {
      setDisplay(String(value));
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, num, suffix, duration, value]);

  return (
    <span ref={ref} className={className}>
      {inView || num === null ? display : "0" + suffix}
    </span>
  );
};

export default AnimatedCounter;
