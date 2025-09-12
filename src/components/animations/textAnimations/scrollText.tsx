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
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <span
      key={index}
      className="letter inline-block text-4xl font-semibold xs:text-5xl xs:leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      data-speed={getRandomSpeed()}
      style={{ 
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
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth relative z-0 overflow-hidden h-[80vh] sm:h-screen">
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
