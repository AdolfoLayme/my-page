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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isInitialLoad && showLoader) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [pathname, isInitialLoad, showLoader]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setIsInitialLoad(false);
  };

  return (
    <>
      {isLoading && isInitialLoad && (
        <PageLoader 
          text={loaderText}
          duration={loaderDuration}
          onComplete={handleLoaderComplete}
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
