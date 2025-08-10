"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2, 
      staggerChildren: 0.15, 
      delayChildren: 0.3 
    }
  }
};

const navItemVariants = {
  hidden: { 
    opacity: 0, 
    y: -10 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    }
  }
};

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [pathname]);

  const navItems = [
    { 
      name: 'Home', 
      href: '/'
    },
    { 
      name: 'About', 
      href: '/about'
    },
    { 
      name: 'Works', 
      href: '/works'
    },
    { 
      name: 'Blog', 
      href: '/blog'
    }
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav 
        key={animationKey}
        className="relative"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md rounded-full border border-white/10"
          animate={{
            scale: hoveredIndex !== null ? 1.05 : 1,
            borderRadius: hoveredIndex !== null ? "24px" : "50px"
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
        />
        
        <div className="relative flex items-center px-6 py-3">
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                className="relative nav-item-blur"
                variants={navItemVariants}
                animate={{
                  filter: "blur(0px)"
                }}
                transition={{
                  filter: { duration: 0.6, ease: "easeOut", delay: 0.3 + (index * 0.15) }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link 
                  href={item.href}
                  className="relative block px-4 py-2 text-white text-sm font-medium tracking-wide transition-all duration-300 rounded-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                  />
                   
                  <motion.span
                    className="relative"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      x: hoveredIndex === index ? 2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="ml-4 pl-4 border-l border-white/20 nav-item-blur"
            variants={navItemVariants}
            animate={{
              filter: "blur(0px)"
            }}
            transition={{
              filter: { duration: 0.6, ease: "easeOut", delay: 0.3 + (navItems.length * 0.15) }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}
