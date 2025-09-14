'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '@/components/animations/preLoader';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Remove isLoading dependency to prevent infinite loop

  return (
    <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
  );
}
