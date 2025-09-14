'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, DollarSign, Trophy, Star } from 'lucide-react';

// Awards data extracted from the main branch
const awards = [
  {
    id: 1,
    title: "SCEEE Development Grant",
    type: "Research Grant",
    amount: "$80,000",
    organization: "Embry-Riddle Aeronautical University",
    date: "2024-08-01",
    year: "2024",
    location: "Daytona Beach, FL",
    duration: "August 1, 2024 – July 31, 2025",
    role: "Principal Investigator",
    projectTitle: "Combining Biological Inspiration, Machine Learning, and Graph Theory to Improve Early-Stage Electric Grid Transient Response Design",
    description: "This significant research grant supports innovative work at the intersection of biological systems, artificial intelligence, and electrical grid design. The project aims to develop novel approaches for improving the transient response characteristics of electrical grids by drawing inspiration from biological networks and applying advanced machine learning techniques.",
    impact: [
      "Advancing the field of bio-inspired electrical engineering",
      "Developing new methodologies for grid stability analysis",
      "Contributing to critical infrastructure resilience",
      "Supporting graduate student research and development"
    ],
    category: "grant"
  },
  {
    id: 2,
    title: "Graduate Research Symposium - Second Place & People's Choice Award",
    type: "Competition Award",
    amount: "$500",
    organization: "Graduate Research Symposium, Embry-Riddle Aeronautical University",
    date: "2024-04-01",
    year: "2024",
    location: "Daytona Beach, FL",
    duration: "April 2024",
    role: "Researcher",
    projectTitle: "Complex Systems Resilience Analysis Through Bifurcation Theory",
    description: "This dual recognition represents both peer and expert validation of research excellence. The award-winning poster presented groundbreaking work on applying mathematical bifurcation theory to understand and enhance the resilience of complex systems.",
    impact: [
      "Novel application of bifurcation analysis to resilience engineering",
      "Mathematical modeling of complex system behavior",
      "Practical implications for critical infrastructure design",
      "Visualization techniques for complex system dynamics"
    ],
    category: "competition",
    awards: ["Second Place", "People's Choice Award"]
  },
  {
    id: 3,
    title: "Philanthropy Council Grant",
    type: "Research Grant",
    amount: "$4,000",
    organization: "Embry-Riddle Aeronautical University",
    date: "2024-03-01",
    year: "2024",
    location: "Daytona Beach, FL",
    duration: "2024",
    role: "Principal Investigator",
    projectTitle: "UAV Swarm Navigation for Search and Rescue Missions",
    description: "Awarded funding in support of UAV Swarm Navigation for Search and Rescue Missions, funding two mid-range workstations for research. Development of autonomous UAV swarm coordination algorithms for search and rescue mission optimization.",
    impact: [
      "Advancing autonomous systems for emergency response",
      "Developing multi-agent coordination algorithms",
      "Contributing to search and rescue technology",
      "Supporting critical infrastructure for research"
    ],
    category: "grant"
  },
  {
    id: 4,
    title: "SPARK Travel Grant",
    type: "Travel Award",
    amount: "$900",
    organization: "Embry-Riddle Aeronautical University",
    date: "2024-01-01",
    year: "2024-2025",
    location: "Daytona Beach, FL",
    duration: "2024-2025 Academic Year",
    role: "Recipient",
    projectTitle: "Research Dissemination and Conference Participation",
    description: "Awarded for research dissemination and conference participation, supporting the presentation of research findings at national and international conferences.",
    impact: [
      "Enabling research dissemination",
      "Supporting conference participation",
      "Facilitating knowledge sharing",
      "Building professional networks"
    ],
    category: "travel"
  },
  {
    id: 5,
    title: "SPARK Travel Grant",
    type: "Travel Award",
    amount: "$700",
    organization: "Embry-Riddle Aeronautical University",
    date: "2023-08-01",
    year: "2023-2024",
    location: "Daytona Beach, FL",
    duration: "2023-2024 Academic Year",
    role: "Recipient",
    projectTitle: "Research Dissemination and Conference Participation",
    description: "Previous year travel grant awarded for research dissemination and conference participation, supporting the presentation of research findings at academic conferences.",
    impact: [
      "Supporting early career research presentation",
      "Enabling professional development",
      "Facilitating academic networking",
      "Promoting research visibility"
    ],
    category: "travel"
  },
  {
    id: 6,
    title: "Frontiers in Engineering Design Research Summer School (FinDER)",
    type: "Fellowship",
    amount: "Full Support",
    organization: "National Science Foundation",
    date: "2023-07-01",
    year: "2023",
    location: "Various Locations",
    duration: "Summer 2023",
    role: "Selected Participant",
    projectTitle: "Advanced Engineering Design Research Training",
    description: "Selected participant in prestigious summer school program. Received full travel, lodging, and meals support for intensive training in advanced engineering design research methodologies.",
    impact: [
      "Advanced training in design research",
      "Networking with leading researchers",
      "Exposure to cutting-edge methodologies",
      "Professional development opportunity"
    ],
    category: "fellowship"
  }
];

const categoryColors = {
  grant: 'bg-green-100 text-green-800',
  competition: 'bg-purple-100 text-purple-800',
  travel: 'bg-blue-100 text-blue-800',
  fellowship: 'bg-orange-100 text-orange-800'
};

const categoryIcons = {
  grant: DollarSign,
  competition: Trophy,
  travel: MapPin,
  fellowship: Star
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

export default function Awards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in research, innovation, and academic achievement. 
            These awards represent significant contributions to engineering research and education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {awards.map((award) => {
            const IconComponent = categoryIcons[award.category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[award.category as keyof typeof categoryColors]}`}>
                            <IconComponent size={16} />
                            {award.type}
                          </span>
                          {award.awards && (
                            <div className="flex gap-2">
                              {award.awards.map((awardType, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium"
                                >
                                  <Award size={12} />
                                  {awardType}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {award.title}
                        </h2>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {award.amount}
                        </div>
                        <div className="text-sm text-gray-500">{award.year}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{award.organization}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{award.duration}</span>
                      </div>
                    </div>

                    {award.projectTitle && (
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
                        <p className="text-gray-700 font-medium">{award.projectTitle}</p>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{award.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Impact & Contributions</h3>
                      <ul className="space-y-2">
                        {award.impact.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recognition Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$85,600+</div>
                <div className="text-gray-600">Total Grant Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600">Competition Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-600">Fellowship</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
