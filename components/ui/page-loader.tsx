"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const simulateProgress = useCallback(() => {
    let current = 0;

    const interval = setInterval(() => {
      // Accelerate through the middle, slow near start and end
      const increment =
        current < 20
          ? Math.random() * 3 + 1
          : current < 50
            ? Math.random() * 5 + 3
            : current < 80
              ? Math.random() * 4 + 2
              : current < 95
                ? Math.random() * 1.5 + 0.5
                : 0.3;

      current = Math.min(current + increment, 100);
      setProgress(Math.floor(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 300);
        setTimeout(() => setIsVisible(false), 1200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Slight delay before starting so the loader is visible
    const timeout = setTimeout(simulateProgress, 200);
    return () => clearTimeout(timeout);
  }, [simulateProgress]);

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Content wrapper */}
          <motion.div
            className="flex flex-col items-center gap-8"
            animate={isComplete ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Name / brand */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-heading font-medium tracking-[0.3em] uppercase text-muted-foreground"
            >
              Emmanuel Akinola
            </motion.p>

            {/* Percentage counter */}
            <div className="relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-7xl md:text-9xl font-heading font-bold tabular-nums tracking-tighter text-foreground"
              >
                {progress}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 0.4, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-5xl font-heading font-light text-foreground/40 ml-1"
              >
                %
              </motion.span>
            </div>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[1px] bg-border/50 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ...
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Reveal curtains — split screen exit */}
          {isComplete && (
            <>
              <motion.div
                className="absolute top-0 left-0 right-0 h-1/2 bg-background origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-background origin-bottom"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
