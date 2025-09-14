'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    degree: "Ph.D. in Computer Science and Electrical Engineering",
    school: "Embry-Riddle Aeronautical University",
    location: "Daytona Beach, FL",
    duration: "2023 - Current",
    gpa: "GPA: 4.0/4.0"
  },
  {
    degree: "Master of Science in Mechanical Engineering",
    school: "Embry-Riddle Aeronautical University", 
    location: "Daytona Beach, FL",
    duration: "2021 - 2022",
    gpa: "GPA: 3.83/4.0"
  },
  {
    degree: "Master of Science in Industrial Technologies Engineering",
    school: "ICAI Universidad Pontificia de Comillas",
    location: "Madrid, Spain",
    duration: "2020 - 2022",
    gpa: ""
  },
  {
    degree: "Bachelor in Industrial Technologies Engineering",
    school: "ICAI Universidad Pontificia de Comillas",
    location: "Madrid, Spain", 
    duration: "2015 - 2020",
    gpa: ""
  }
];

export default function Education() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Education
          </h2>
        </motion.div>
        
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {education.school}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {education.location}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                    <div className="font-medium">{education.duration}</div>
                    {education.gpa && (
                      <div className="text-green-600 font-semibold mt-1">
                        {education.gpa}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
