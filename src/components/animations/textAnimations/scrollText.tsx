import { MutableRefObject, useEffect, useRef } from 'react';
import './scrollText.css';

const theBest = 'The best ';
const wayTo = 'way to ';
const predict = 'predict ';
const theFuture = 'the future ';
const isTo = 'is to ';
const invent = 'invent ';
const it = 'it';

// CSS3-based animation approach inspired by Bettina Sosa's fluid design
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

  console.log(`LetterCollision: Found ${letterElements.length} letters, setting up CSS animations`);

  // Add CSS classes for smooth animations
  lettersContainer.classList.add('scroll-text-container');
  
  letterElements.forEach((letter: Element, index: number) => {
    const htmlElement = letter as HTMLElement;
    
    // Reset to clean state
    htmlElement.style.transform = 'none';
    htmlElement.style.position = 'static';
    htmlElement.style.display = 'inline-block';
    
    // Add CSS class for animation
    htmlElement.classList.add('scroll-letter');
    
    // Add data attributes for staggered animation
    htmlElement.setAttribute('data-delay', (index * 0.02).toString());
  });
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
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupScrollAnimation(containerRef);
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
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
