"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { blogSections, getBlogSectionById } from "@/data/blogSections";
import { BlogCard } from "@/components/ui/BlogCard";

export default function Blog() {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const router = useRouter();

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleSectionClick = (sectionId: string) => {
    const section = getBlogSectionById(sectionId);
    if (section) {
      router.push(section.route);
    } else {
      setSelectedSection(sectionId);
    }
  };

  if (selectedSection) {
    const section = getBlogSectionById(selectedSection);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-black text-white p-4"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {section?.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {section?.description}
          </p>
          <button
            onClick={() => setSelectedSection(null)}
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Volver
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <AnimatePresence>
        {!isStarted ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center flex flex-col items-center justify-center min-h-screen"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Mi Blog
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl text-center"
            >
              "As the Sun rises,<br />
              your journey awaits..."
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.9 }}
              onClick={handleStart}
              className="w-32 h-32 bg-white text-black rounded-full border-2 border-white hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-semibold mx-auto"
            >
              Start
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-6xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 mt-20"
            >
              Welcome Adventurer.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {blogSections.map((section, index) => (
                <BlogCard
                  key={section.id}
                  section={section}
                  index={index}
                  onClick={() => handleSectionClick(section.id)}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}