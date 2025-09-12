import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const theBest = 'The best ';
const wayTo = 'way to ';
const predict = 'predict ';
const theFuture = 'the future ';
const isTo = 'is to ';
const invent = 'invent ';
const it = 'it';

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
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

  console.log(`LetterCollision: Found ${letterElements.length} letters, starting animation`);

  // Clear any existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  letterElements.forEach((letter: Element, index: number) => {
    const htmlElement = letter as HTMLElement;
    
    // Set initial state - ensure all letters start perfectly aligned
    gsap.set(htmlElement, { 
      y: 0, 
      x: 0,
      rotation: 0, 
      opacity: 1, 
      visibility: 'visible',
      transform: 'none' // Clear any existing transforms
    });

    const speed = parseFloat(htmlElement.getAttribute('data-speed') || '1');
    const rotation = getRandomRotation();

    // Create the main animation with fixed range
    gsap.to(htmlElement, {
      y: (1 - speed) * 300, // Fixed 300px range instead of maxScroll
      rotation: rotation,
      ease: 'none',
      scrollTrigger: {
        trigger: lettersContainer,
        start: 'top center', // Start when top of text reaches center of screen
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Separate ScrollTrigger for visibility - keep text visible until scrolled far past
    ScrollTrigger.create({
      trigger: lettersContainer,
      start: 'top bottom',
      end: 'bottom top-=200px', // Hide 200px before leaving viewport
      onEnter: () => gsap.set(htmlElement, { opacity: 1, visibility: 'visible' }),
      onLeave: () => gsap.set(htmlElement, { opacity: 0, visibility: 'hidden' }),
      onEnterBack: () => gsap.set(htmlElement, { opacity: 1, visibility: 'visible' }),
      onLeaveBack: () => gsap.set(htmlElement, { opacity: 0, visibility: 'hidden' })
    });
  });

  // Refresh ScrollTrigger after setup
  ScrollTrigger.refresh();
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <span
      key={index}
      className="letter inline-block text-4xl font-semibold xs:text-5xl xs:leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      data-speed={getRandomSpeed()}
      style={{ transform: 'none' }}
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
      animateLettersOnScroll(containerRef);
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
