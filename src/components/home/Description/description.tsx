import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './anim';
import RoundedButton from '@/components/animations/roundedButton';
import Link from 'next/link';

export default function Description() {
  const phrase1 =
    'A Ph.D. Candidate in Computer Science and Electrical Engineering with expertise in resilience engineering, machine learning, and complex systems analysis.\n\n ';

  const phrase2 =
    'Experienced in leading cross-functional research on bifurcation analysis, aerial robotics, and AI applications for critical infrastructure and aerospace, with 10+ conference and symposium publications.';
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="relative flex flex-col justify-center gap-12 p-8 sm:mt-[200px] sm:flex-row sm:p-20 "
    >
      <div className="space-y-4">
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase1.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase2.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 pb-3 font-light sm:text-lg"
        >
          Currently Graduate Research / Teaching Assistant at Embry-Riddle Aeronautical University, leading machine learning and AI data-driven initiatives in the BID4R lab.
        </motion.p>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 text-lg font-light"
        >
          Skilled in data analytics, cloud computing, and simulation modeling, applying tools such as Python, MATLAB, AnyLogic, and Power BI to deliver data-driven insights for complex systems.
        </motion.p>
        <div data-scroll-speed={0.1}>
          <Link href={'/about'}>
            <RoundedButton className="absolute ml-56 mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-destructive text-white sm:ml-16 sm:mt-16 sm:h-[200px] sm:w-[200px]">
              About me
            </RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
