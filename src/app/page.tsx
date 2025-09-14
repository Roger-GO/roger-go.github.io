'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import InfiniteSlider from '@/components/home/InfiniteSlider';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';
import Description from '@/components/home/Description/description';
import Experience from '@/components/home/Experience';
import Research from '@/components/home/Research';
import Education from '@/components/home/Education';
import Skills from '@/components/home/Skills';
import ContactInfo from '@/components/home/ContactInfo';
import { useScreenSize } from '@/hooks/useScreenSize';


export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-hidden">
      {/* Only show LetterCollision on desktop to prevent mobile scroll issues */}
      {mounted && !isMobile && <LetterCollision />}
      
      {/* Only show scroll button on desktop */}
      {mounted && !isMobile && showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-4 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold sm:bottom-8"
            onClick={scrollToHero}
          >
            <p>Scroll</p>
            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}
      
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <Description />
      <Experience />
      <Research />
      <Education />
      <Skills />
      <InfiniteSlider />
      <ContactInfo />
      
      {/* Only show ContrastCursor on desktop */}
      {mounted && !isMobile && <ContrastCursor isActive={false} text={'Go to project'} />}
    </div>
  );
}
