"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn" as const
    }
  }
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      className={`min-h-screen ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={contentVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export { contentVariants };
