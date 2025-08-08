"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const navItemVariants = {
  hidden: {opacity: 0, y: -10},
  visible: {opacity: 1, y: 0}
};

export default function Navigation() {
  return (
    <header className="relative w-full">
      <motion.nav 
        className="absolute left-1/2 transform -translate-x-1/2 container mx-auto flex items-center justify-center py-6"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
                <motion.ul className="flex gap-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Works', href: '/works' },
            { name: 'Blog', href: '/blog' }
          ].map((item, index) => (
            <motion.li 
              key={index}
              variants={navItemVariants}
              className="relative group"
            >
              <Link 
                href={item.href}
                className="text-sm font-medium tracking-wider capitalize transition-opacity hover:opacity-80"
              >
                {item.name}
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
}
