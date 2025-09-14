'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const researchData = [
  {
    title: "SCEEE Development Grant - Bio-inspired Electrical Grid Design",
    subtitle: "Principal Investigator",
    duration: "2024-2025",
    amount: "$80,000",
    description: "Leading research combining biological inspiration, machine learning, and graph theory to improve early-stage electric grid transient response design. This significant research grant supports innovative work at the intersection of biological systems, artificial intelligence, and electrical grid design.",
    tags: ["Machine Learning", "Graph Theory", "Electrical Engineering", "Bio-inspired Design"]
  },
  {
    title: "UAV Swarm Navigation for Search and Rescue",
    subtitle: "Philanthropy Council Grant",
    duration: "2024",
    amount: "$4,000",
    description: "Development of autonomous UAV swarm coordination algorithms for search and rescue mission optimization. Focus on multi-agent systems for emergency response and real-time navigation protocols.",
    tags: ["Autonomous Systems", "Multi-agent Systems", "UAV", "Emergency Response"]
  },
  {
    title: "Complex Systems Resilience Analysis",
    subtitle: "Award-winning Research",
    duration: "2024",
    amount: "2nd Place + People's Choice",
    description: "Groundbreaking work applying mathematical bifurcation theory to understand and enhance the resilience of complex systems. Received Second Place and People's Choice Award at Graduate Research Symposium.",
    tags: ["Bifurcation Analysis", "Complex Systems", "Resilience Engineering", "Mathematical Modeling"]
  }
];

export default function Research() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Research
          </h2>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-1">
            {researchData.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {research.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium mb-1">
                      {research.subtitle}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                    <div className="font-medium">{research.duration}</div>
                    <div className="text-green-600 font-semibold">{research.amount}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {research.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {research.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
