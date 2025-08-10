"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  text?: string;
  duration?: number;
  onComplete?: () => void;
}

const loaderVariants = {
  initial: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const
    }
  }
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeIn" as const
    }
  }
};

export default function PageLoader({ 
  text = "Loading...", 
  duration = 2000,
  onComplete 
}: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 800); // Wait for exit animation
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          variants={loaderVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {text}
            </h1>
            <motion.div
              className="w-16 h-1 bg-white mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                delay: 0.3 
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
