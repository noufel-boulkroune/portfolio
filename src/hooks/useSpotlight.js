import { useEffect } from "react";

/**
 * Feeds the pointer position into any `.spotlight` element under the cursor
 * as --mx / --my, which the CSS turns into a moving light on fill and border.
 * One document listener for the whole page, throttled to animation frames,
 * and skipped entirely on touch devices.
 */
const useSpotlight = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = null;
    let last = null;

    const apply = () => {
      frame = null;
      const target = last.target.closest?.(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      target.style.setProperty("--my", `${last.clientY - rect.top}px`);
    };

    const onMove = (e) => {
      last = e;
      if (frame === null) frame = requestAnimationFrame(apply);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
};

export default useSpotlight;
