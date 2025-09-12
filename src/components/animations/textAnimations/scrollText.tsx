import { MutableRefObject, useEffect, useRef } from 'react';
import './scrollText.css';

const theBest = 'The best ';
const wayTo = 'way to ';
const predict = 'predict ';
const theFuture = 'the future ';
const isTo = 'is to ';
const invent = 'invent ';
const it = 'it';

// JavaScript-based scroll animation inspired by Bettina Sosa's approach
const setupScrollAnimation = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  if (!lettersContainer) {
    console.log('LetterCollision: Container not found');
    return;
  }

  const letterElements = lettersContainer.querySelectorAll('.letter');
  if (!letterElements.length) {
    console.log('LetterCollision: No letter elements found');
    return;
  }

  console.log(`LetterCollision: Found ${letterElements.length} letters, setting up scroll animations`);

  // Add CSS classes for smooth animations
  lettersContainer.classList.add('scroll-text-container');
  
  // Store original positions and setup scroll animation
  const letterData = Array.from(letterElements).map((letter: Element, index: number) => {
    const htmlElement = letter as HTMLElement;
    
    // Reset to clean state
    htmlElement.style.transform = 'none';
    htmlElement.style.position = 'static';
    htmlElement.style.display = 'inline-block';
    
    // Add CSS class for animation
    htmlElement.classList.add('scroll-letter');
    
    // Store original position and random values for animation
    const rect = htmlElement.getBoundingClientRect();
    return {
      element: htmlElement,
      originalX: rect.left,
      originalY: rect.top,
      randomOffsetX: (Math.random() - 0.5) * 100,
      randomOffsetY: (Math.random() - 0.5) * 100,
      randomRotation: (Math.random() - 0.5) * 60,
      speed: 0.5 + Math.random() * 0.5
    };
  });

  // Scroll event handler
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const containerRect = lettersContainer.getBoundingClientRect();
    const containerTop = containerRect.top + scrollY;
    const containerHeight = containerRect.height;
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight)));
    
    letterData.forEach((letter, index) => {
      const { element, randomOffsetX, randomOffsetY, randomRotation, speed } = letter;
      
      // Apply animation based on scroll progress
      const animatedX = randomOffsetX * scrollProgress * speed;
      const animatedY = randomOffsetY * scrollProgress * speed;
      const animatedRotation = randomRotation * scrollProgress * speed;
      
      element.style.transform = `translate3d(${animatedX}px, ${animatedY}px, 0) rotate(${animatedRotation}deg)`;
    });
  };

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial call
  handleScroll();

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <span
      key={index}
      className="letter inline-block text-4xl font-semibold xs:text-5xl xs:leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      style={{ 
        transform: 'none',
        minWidth: letter === ' ' ? '0.5em' : 'auto'
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let cleanup: (() => void) | undefined;
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      cleanup = setupScrollAnimation(containerRef);
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth relative z-0 overflow-hidden h-screen">
      <div className="-mt-28 mb-36 flex h-full flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap items-baseline leading-none">
          <LetterDisplay word={theBest} />
          <LetterDisplay word={wayTo} />
        </div>
        <div className="flex flex-wrap items-baseline leading-none">
          <LetterDisplay word={predict} />
          <LetterDisplay word={theFuture} />
        </div>
        <div className="flex flex-wrap items-baseline leading-none">
          <LetterDisplay word={isTo} />
          <LetterDisplay word={invent} />
          <LetterDisplay word={it} />
        </div>
      </div>
    </div>
  );
}
