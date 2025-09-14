'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceData = [
  {
    title: "Graduate Research / Teaching Assistant",
    company: "Embry-Riddle Aeronautical University",
    duration: "Aug 2021 - Present",
    location: "Daytona Beach, FL",
    responsibilities: [
      "Led machine learning and AI data-driven initiatives in the BID4R lab, directing cross-functional research teams",
      "Conducted research in resilience engineering, bifurcation analysis, aerial robotics, and machine learning applications",
      "Published findings in 10+ conference and symposium proceedings including INCOSE and ASME conferences",
      "Developed and delivered course content for 150+ students in Electrical Engineering and Systems courses",
      "Utilized MATLAB, Python, AnyLogic, and Cloud services for complex dynamic systems modeling"
    ]
  },
  {
    title: "Associate Financial Analyst",
    company: "IMAGINE + INVERSION",
    duration: "Feb 2021 - Aug 2021",
    location: "Madrid, Spain",
    responsibilities: [
      "Engineered data mining strategy utilizing SQL and Excel to evaluate 700+ companies",
      "Achieved 50% reply rate from decision-makers through targeted outreach strategies",
      "Delivered data-driven BI presentations to investment committees",
      "Built financial models to assess tech startups' growth potential and investment viability"
    ]
  },
  {
    title: "Project Manager",
    company: "BALLESOL",
    duration: "Oct 2018 - Jan 2020",
    location: "Madrid, Spain",
    responsibilities: [
      "Led creation and implementation of centralized business model reducing operational costs by 30%",
      "Monitored operational efficiency across 45+ residential sites using custom KPIs",
      "Reduced delivery timelines by 20% through targeted process improvements",
      "Managed cross-functional teams across multiple residential facilities"
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Experience
          </h2>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                    <div>{job.duration}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
