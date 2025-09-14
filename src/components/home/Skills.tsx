'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  "Python", "MATLAB", "Machine Learning", "Complex Systems Analysis", 
  "Bifurcation Analysis", "AnyLogic", "Power BI", "SQL", 
  "Google Cloud Platform", "PyTorch", "C++", "JavaScript", "React", "Unity 3D"
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills
          </h2>
        </motion.div>
        
        <div className="mx-auto mt-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100 
                }}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
