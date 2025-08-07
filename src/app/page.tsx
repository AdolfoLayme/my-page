"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Animaciones para los elementos de la página
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const hoverVariants = {
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  }
};

const cardVariants = {
  normal: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  dimmed: {
    opacity: 0.5,
    scale: 0.98,
    filter: "blur(2px)",
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  highlighted: {
    opacity: 1,
    scale: 1.0,
    y: -7,
    filter: "blur(0px)",
    boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      href: "/about",
      title: "My About",
      description: "Conoce sobre mi trayectoria y habilidades",
      image: "/"
    },
    {
      href: "/works",
      title: "My Works",
      description: "Explora mis trabajos y desarrollos recientes",
      image: "/"
    },
    {
      href: "/blog",
      title: "My Blog",
      description: "Lee mis artículos sobre tecnología y otros temas",
      image: "/"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="normal"
            animate={
              hoveredCard === null
                ? "normal"
                : hoveredCard === index
                  ? "highlighted"
                  : "dimmed"
            }
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="will-change-transform"
          >
            <Link href={card.href} className="block">
              <div className="bg-white shadow-md rounded-md w-64 h-70 text-center text-black p-4 cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                  style={{ backgroundImage: `url(${card.image})` }}>
                </div>
                <div className="relative z-10">
                  <h1 className="text-xl font-bold mb-2">{card.title}</h1>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
