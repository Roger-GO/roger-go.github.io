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
  if (!lettersContainer) return;

  const letterElements = lettersContainer.querySelectorAll('.letter');
  if (!letterElements.length) return;

  // Clear any existing ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  letterElements.forEach((letter: Element, index: number) => {
    const htmlElement = letter as HTMLElement;
    
    // Set initial state
    gsap.set(htmlElement, { 
      y: 0, 
      rotation: 0, 
      opacity: 1, 
      visibility: 'visible' 
    });

    const speed = parseFloat(htmlElement.getAttribute('data-speed') || '1');
    const rotation = getRandomRotation();

    // Create the main animation
    gsap.to(htmlElement, {
      y: (1 - speed) * ScrollTrigger.maxScroll(window) * 0.3,
      rotation: rotation,
      ease: 'none',
      scrollTrigger: {
        trigger: lettersContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Separate ScrollTrigger for visibility
    ScrollTrigger.create({
      trigger: lettersContainer,
      start: 'top bottom',
      end: 'bottom top',
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
    <div
      key={index}
      className="letter text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[150px] xl:text-[210px] "
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
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
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={theBest} />
          <LetterDisplay word={wayTo} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={predict} />
          <LetterDisplay word={theFuture} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={isTo} />
          <LetterDisplay word={invent} />
          <LetterDisplay word={it} />
        </div>
      </div>
    </div>
  );
}
