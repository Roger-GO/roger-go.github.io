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
  return 0.9 + randomDecimal * (1.3 - 0.9); // Faster, more responsive speed range
}
function getRandomRotation() {
  return Math.random() * 40 - 20; // Reduced rotation range for faster, less chaotic animation
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
    
    // Force reset all properties to ensure perfect alignment
    htmlElement.style.transform = 'none';
    htmlElement.style.position = 'static';
    htmlElement.style.display = 'inline-block';
    
    // Set initial state - ensure all letters start perfectly aligned horizontally
    gsap.set(htmlElement, { 
      y: 0, 
      x: 0,
      rotation: 0, 
      opacity: 1, 
      visibility: 'visible',
      scale: 1,
      clearProps: "all" // Clear all GSAP properties
    });

    const speed = parseFloat(htmlElement.getAttribute('data-speed') || '1');
    const rotation = getRandomRotation();

    // Create ScrollTrigger that only activates when user scrolls down
    ScrollTrigger.create({
      trigger: lettersContainer,
      start: 'top bottom', // Start when text enters viewport
      end: 'bottom top',
      scrub: 0.1, // Very fast response
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Only animate when actively scrolling and progress > 0
        if (self.isActive && self.progress > 0) {
          gsap.to(htmlElement, {
            y: (1 - speed) * 200 * self.progress,
            rotation: rotation * self.progress,
            duration: 0.1,
            ease: 'power2.out'
          });
        } else if (self.progress === 0) {
          // Reset to original position when at start
          gsap.set(htmlElement, {
            y: 0,
            rotation: 0,
            transform: 'none'
          });
        }
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
