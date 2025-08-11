"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";
import PageTransition from "./PageTransition";

interface AnimatedLayoutProps {
  children: React.ReactNode;
  showLoader?: boolean;
  loaderText?: string;
  loaderDuration?: number;
}

export default function AnimatedLayout({ 
  children, 
  showLoader = true,
  loaderText = "Welcome",
  loaderDuration = 2500
}: AnimatedLayoutProps) {
  const [isLoading, setIsLoading] = useState(showLoader);
  const pathname = usePathname();

  const getLoaderText = () => {
    switch (pathname) {
      case '/':
        return "Adolfo Layme";
      case '/about':
        return "Conoce mi historia";
      case '/works':
        return "Mis Proyectos";
      case '/blog':
        return "Mi Blog";
      default:
        return loaderText;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, [pathname, loaderDuration]);

  return (
    <>
      {isLoading && (
        <PageLoader 
          text={getLoaderText()}
          duration={loaderDuration}
        />
      )}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <PageTransition key={pathname}>
            {children}
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}
