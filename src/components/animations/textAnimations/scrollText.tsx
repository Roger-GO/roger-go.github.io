import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const creativity = 'Creativity ';
const is = 'is ';
const my = 'my ';
const craft = 'craft';
const sentence3 = 'abstract thinking is my passion';

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
    // Create a more restrictive scroll trigger that hides letters completely when out of view
    ScrollTrigger.create({
      trigger: lettersContainer,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        gsap.set(letter, { opacity: 1, visibility: 'visible' });
      },
      onLeave: () => {
        gsap.set(letter, { opacity: 0, visibility: 'hidden' });
      },
      onEnterBack: () => {
        gsap.set(letter, { opacity: 1, visibility: 'visible' });
      },
      onLeaveBack: () => {
        gsap.set(letter, { opacity: 0, visibility: 'hidden' });
      }
    });

    // Subtle parallax movement only within the container bounds
    gsap.to(letter, {
      y: (i, el) => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        // Much smaller movement range (50px max)
        return (1 - speed) * 50;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: lettersContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      rotation: getRandomRotation()
    });
  });
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
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth relative z-0 overflow-hidden h-screen">
      <div className="-mt-28 mb-36 flex h-full flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={creativity} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={is} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={my} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={craft} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
