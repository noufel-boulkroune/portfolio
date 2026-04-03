import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Full-screen lightbox.
 *
 * Click zones (when not zoomed):
 *   Left  15 % of screen → previous image
 *   Right 15 % of screen → next image
 *   Center 70 %          → close
 *
 * Zoom: scroll-wheel · +/- buttons
 * Pan:  drag while zoomed
 */
const Lightbox = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const [dir, setDir] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragOrigin, setDragOrigin] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const touchRef = useRef(null);

  // ── Lock scroll ───────────────────────────────────────────────────────────
  useEffect(() => {
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${sbw}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, []);

  // ── Reset on image change ─────────────────────────────────────────────────
  const resetView = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    setLoaded(false);
    resetView();
  }, [index, resetView]);

  // ── Navigate ──────────────────────────────────────────────────────────────
  const go = useCallback(
    (delta) => {
      setDir(delta);
      setIndex((p) => (p + delta + images.length) % images.length);
    },
    [images.length]
  );

  // ── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(4, z + 0.5));
      if (e.key === "-") setZoom((z) => Math.max(1, z - 0.5));
      if (e.key === "0") resetView();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go, onClose, resetView]);

  // ── Scroll to zoom ────────────────────────────────────────────────────────
  const onWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((z) => Math.max(1, Math.min(4, z + (e.deltaY > 0 ? -0.25 : 0.25))));
  }, []);

  // ── Drag (zoom > 1) ───────────────────────────────────────────────────────
  const onMouseDown = useCallback(
    (e) => {
      if (zoom <= 1) return;
      setDragging(true);
      setDragOrigin({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    },
    [zoom, offset]
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      setOffset({ x: e.clientX - dragOrigin.x, y: e.clientY - dragOrigin.y });
    },
    [dragging, dragOrigin]
  );

  const stopDrag = useCallback(() => setDragging(false), []);

  // ── Touch pan ─────────────────────────────────────────────────────────────
  const onTouchStart = useCallback(
    (e) => {
      if (e.touches.length === 1 && zoom > 1) {
        touchRef.current = {
          x: e.touches[0].clientX - offset.x,
          y: e.touches[0].clientY - offset.y,
        };
      }
    },
    [zoom, offset]
  );

  const onTouchMove = useCallback(
    (e) => {
      if (e.touches.length === 1 && zoom > 1 && touchRef.current) {
        setOffset({
          x: e.touches[0].clientX - touchRef.current.x,
          y: e.touches[0].clientY - touchRef.current.y,
        });
      }
    },
    [zoom]
  );

  const onTouchEnd = useCallback(() => {
    touchRef.current = null;
  }, []);

  // ── Slide animation ───────────────────────────────────────────────────────
  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "4%" : "-4%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (d) => ({ x: d < 0 ? "4%" : "-4%", opacity: 0 }),
  };

  const ZONE = "16%"; // left / right click-zone width

  const content = (
    <motion.div
      className="fixed inset-0 z-[200] bg-black/96 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
    >

      {/* ── X close button — always top-right, always visible ────────────── */}
      <button
        className="absolute top-4 right-4 z-[220] w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white/25 text-white hover:bg-white/20 hover:border-white/50 transition-all shadow-lg"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* ── Top-left: counter + zoom controls ────────────────────────────── */}
      <div
        className="absolute top-4 left-4 z-[220] flex items-center gap-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="bg-black/80 border border-white/20 text-white/60 text-sm tabular-nums px-3 py-2 rounded-full select-none">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(1, z - 0.5)); }}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-black/80 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-white/40 text-xs w-10 text-center select-none tabular-nums">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(4, z + 0.5)); }}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-black/80 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        {zoom > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); resetView(); }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/80 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Reset zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* ── Click zones (disabled when zoomed) ───────────────────────────── */}
      {zoom <= 1 && (
        <>
          {/* Left → prev */}
          {images.length > 1 && (
            <div
              className="absolute left-0 top-0 bottom-0 z-[21] group"
              style={{ width: ZONE, cursor: "pointer" }}
              onClick={(e) => { e.stopPropagation(); go(-1); }}
            >
              {/* Arrow hint on hover */}
              <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-transparent group-hover:bg-white/15 text-transparent group-hover:text-white transition-all duration-200">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </div>
          )}

          {/* Right → next */}
          {images.length > 1 && (
            <div
              className="absolute right-0 top-0 bottom-0 z-[21] group"
              style={{ width: ZONE, cursor: "pointer" }}
              onClick={(e) => { e.stopPropagation(); go(1); }}
            >
              <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-transparent group-hover:bg-white/15 text-transparent group-hover:text-white transition-all duration-200">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          )}

          {/* Center → close */}
          <div
            className="absolute top-0 bottom-0 z-[21]"
            style={{
              left: images.length > 1 ? ZONE : 0,
              right: images.length > 1 ? ZONE : 0,
              cursor: "default",
            }}
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          />
        </>
      )}

      {/* ── Image (pointer-events:none so clicks fall through to zones) ──── */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ padding: "5rem 2rem 4rem", pointerEvents: "none" }}
      >
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "5rem 2rem 4rem" }}
          >
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-10 h-10 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={images[index]}
              alt={`Screenshot ${index + 1} of ${images.length}`}
              style={{
                maxHeight: "calc(100vh - 10rem)",
                maxWidth: "calc(100vw - 4rem)",
                objectFit: "contain",
                transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                transition: dragging ? "none" : "transform 0.2s ease, opacity 0.3s ease",
                opacity: loaded ? 1 : 0,
                borderRadius: "8px",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                userSelect: "none",
                pointerEvents: "none",
                display: "block",
              }}
              onLoad={() => setLoaded(true)}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dot indicators ────────────────────────────────────────────────── */}
      {images.length > 1 && images.length <= 25 && (
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-[220] flex-wrap px-8"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`rounded-full transition-all duration-200 ${
                i === index
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Usage hint ───────────────────────────────────────────────────── */}
      {zoom === 1 && loaded && (
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-[220] pointer-events-none">
          <span className="text-white/20 text-xs select-none text-center px-4">
            ← Left edge · Next → Right edge · Anywhere else to close · Scroll to zoom
          </span>
        </div>
      )}
    </motion.div>
  );

  // Render into document.body via Portal — bypasses any ancestor
  // overflow:hidden / transform stacking contexts completely.
  return ReactDOM.createPortal(content, document.body);
};

export default Lightbox;
