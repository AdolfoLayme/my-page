"use client";

import { motion } from "framer-motion";
import { BlogSection } from "@/data/blogSections";

interface BlogCardProps {
  section: BlogSection;
  index: number;
  onClick: () => void;
}

export const BlogCard = ({ section, index, onClick }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: 15, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10, 
        rotateX: 5, 
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-300 shadow-2xl hover:shadow-3xl perspective-1000 h-80"
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${section.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-90`} />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <motion.div
            className="text-white mb-6 transform-gpu"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={section.icon} 
              alt={`${section.title} icon`}
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          <h3 className="text-3xl font-bold mb-4 text-white">{section.title}</h3>
          <p className="text-white/90 text-lg leading-relaxed">{section.description}</p>
        </div>
        
        <motion.div
          className="text-white/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          Click para explorar →
        </motion.div>
      </div>
    </motion.div>
  );
};
