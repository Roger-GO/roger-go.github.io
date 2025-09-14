'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

// Publication data extracted from the main branch
const publications = [
  {
    id: 1,
    title: "Barriers to sustainable system evolution: A simulation study exploring the transition from private to public transportation",
    authors: "Gracia Otalvaro, R., & Watson, B. C.",
    venue: "International Design Engineering Technical Conferences & Computers and Information in Engineering Conference",
    date: "2024-08-01",
    year: "2024",
    category: "conferences",
    excerpt: "This paper explores barriers to sustainable transportation system evolution through simulation modeling, examining the transition from private to public transportation systems.",
    paperurl: "https://doi.org/10.1115/DETC2024-143201",
    description: "This research investigates the complex dynamics involved in transitioning from private to public transportation systems using advanced simulation modeling techniques. The study identifies key barriers that impede sustainable system evolution and proposes strategies to overcome these challenges."
  },
  {
    id: 2,
    title: "A framework to use bifurcation analysis for insight into complex systems resilience",
    authors: "Gracia Otalvaro, R., & Watson, B. C.",
    venue: "INCOSE International Symposium",
    date: "2024-07-01",
    year: "2024",
    category: "conferences",
    excerpt: "This paper presents a framework utilizing bifurcation analysis to gain insights into complex systems resilience, with applications to critical infrastructure analysis.",
    paperurl: "https://doi.org/10.1002/iis2.13276",
    description: "This research presents a novel framework that leverages bifurcation analysis to understand and enhance the resilience of complex systems. The work demonstrates how mathematical bifurcation theory can provide critical insights into system behavior under various stress conditions."
  },
  {
    id: 3,
    title: "Resilience-based Analysis and Design (ResBAD): A framework for early-stage design",
    authors: "Gracia Otalvaro, R., & Watson, B. C.",
    venue: "INCOSE International Symposium",
    date: "2024-12-01",
    year: "2024",
    category: "conferences",
    excerpt: "This paper introduces ResBAD, a comprehensive framework for incorporating resilience analysis into early-stage system design processes.",
    paperurl: "#",
    description: "The ResBAD framework provides system designers with tools and methodologies to evaluate and enhance system resilience from the earliest stages of the design process, enabling more robust and adaptable systems."
  },
  {
    id: 4,
    title: "Reinforcement Learning for Autonomous UAV Navigation in Complex Environments",
    authors: "Gracia Otalvaro, R.",
    venue: "IEEE Transactions on Aerospace and Electronic Systems",
    date: "2026-01-01",
    year: "2026",
    category: "journal",
    excerpt: "This work presents a reinforcement learning approach for autonomous UAV navigation in complex and dynamic environments.",
    paperurl: "#",
    description: "Developing advanced reinforcement learning algorithms that enable autonomous UAVs to navigate safely and efficiently through complex environments with dynamic obstacles and changing conditions."
  },
  {
    id: 5,
    title: "Master's Thesis: Bio-inspired Design for Resilient Engineering Systems",
    authors: "Gracia Otalvaro, R.",
    venue: "Embry-Riddle Aeronautical University",
    date: "2024-01-01",
    year: "2024",
    category: "thesis",
    excerpt: "This thesis explores how biological systems inspire the design of more resilient engineering systems through biomimetic approaches.",
    paperurl: "#",
    description: "Comprehensive investigation into how principles from biological systems can be applied to engineering design to create more resilient, adaptable, and robust engineered systems."
  },
  {
    id: 6,
    title: "Bachelor's Thesis: Advanced Control Systems for Industrial Automation",
    authors: "Gracia Otalvaro, R.",
    venue: "ICAI Universidad Pontificia de Comillas",
    date: "2020-01-01",
    year: "2020",
    category: "thesis",
    excerpt: "This undergraduate thesis focuses on the development and implementation of advanced control systems for industrial automation applications.",
    paperurl: "#",
    description: "Development of sophisticated control algorithms and systems for industrial automation, with emphasis on efficiency, reliability, and performance optimization in manufacturing environments."
  }
];

const categoryColors = {
  conferences: 'bg-blue-100 text-blue-800',
  journal: 'bg-green-100 text-green-800',
  thesis: 'bg-purple-100 text-purple-800'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Research contributions in resilience engineering, machine learning, complex systems analysis, 
            and sustainable transportation systems. Published in leading conferences and journals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[publication.category as keyof typeof categoryColors]}`}>
                        {publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {publication.title}
                      </h2>
                    </div>
                    {publication.paperurl !== '#' && (
                      <motion.a
                        href={publication.paperurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>

                  <p className="text-gray-700 font-medium mb-2">{publication.authors}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{publication.venue}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{publication.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {publication.excerpt}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {publication.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Resilience Engineering', 'Machine Learning', 'Complex Systems', 'Bifurcation Analysis', 'Sustainable Transportation', 'UAV Navigation', 'Bio-inspired Design'].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
