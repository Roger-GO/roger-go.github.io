'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, Lightbulb, Code, Database, Brain } from 'lucide-react';

// Portfolio data based on research and projects
const portfolioItems = [
  {
    id: 1,
    title: "Bio-inspired Electrical Grid Design",
    category: "Research Project",
    type: "Machine Learning & Bio-inspiration",
    description: "Combining biological inspiration, machine learning, and graph theory to improve early-stage electric grid transient response design. This $80,000 funded project explores how biological networks can inform electrical grid architecture.",
    longDescription: "This groundbreaking research project combines insights from biological systems with advanced machine learning techniques to revolutionize electrical grid design. By studying how biological networks achieve resilience and efficiency, we develop novel approaches for improving grid stability and transient response characteristics.",
    technologies: ["Python", "MATLAB", "Machine Learning", "Graph Theory", "Neural Networks", "Bio-inspired Algorithms"],
    features: [
      "Bio-inspired network topology analysis",
      "Machine learning models for grid optimization",
      "Graph theory applications to electrical systems",
      "Transient response prediction algorithms",
      "Resilience analysis frameworks"
    ],
    status: "In Progress",
    year: "2024-2025",
    funding: "$80,000",
    role: "Principal Investigator",
    image: "/images/portfolio/bio-grid.jpg",
    githubUrl: "#",
    liveUrl: "#",
    color: "from-green-400 to-blue-500"
  },
  {
    id: 2,
    title: "Complex Systems Resilience Framework",
    category: "Research Project",
    type: "Resilience Engineering",
    description: "Award-winning research developing a comprehensive framework for analyzing and enhancing the resilience of complex systems using bifurcation theory and mathematical modeling.",
    longDescription: "This research presents a novel framework that leverages bifurcation analysis to understand and enhance the resilience of complex systems. The work demonstrates how mathematical bifurcation theory can provide critical insights into system behavior under various stress conditions.",
    technologies: ["MATLAB", "Python", "Bifurcation Analysis", "Complex Systems", "Mathematical Modeling", "AnyLogic"],
    features: [
      "Bifurcation analysis implementation",
      "Complex system stability assessment",
      "Resilience metrics development",
      "Critical transition point identification",
      "System vulnerability analysis"
    ],
    status: "Published",
    year: "2024",
    awards: ["2nd Place - Graduate Research Symposium", "People's Choice Award"],
    role: "Lead Researcher",
    image: "/images/portfolio/resilience-framework.jpg",
    githubUrl: "#",
    paperUrl: "https://doi.org/10.1002/iis2.13276",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "UAV Swarm Navigation System",
    category: "Research Project",
    type: "Autonomous Systems",
    description: "Development of autonomous UAV swarm coordination algorithms for search and rescue mission optimization, funded by $4,000 Philanthropy Council Grant.",
    longDescription: "This project focuses on developing advanced algorithms for coordinating multiple UAVs in search and rescue scenarios. The system enables autonomous navigation, obstacle avoidance, and coordinated search patterns to optimize mission effectiveness.",
    technologies: ["Python", "ROS", "Computer Vision", "Path Planning", "Multi-agent Systems", "Reinforcement Learning"],
    features: [
      "Multi-UAV coordination algorithms",
      "Real-time path planning",
      "Obstacle detection and avoidance",
      "Search pattern optimization",
      "Emergency response protocols"
    ],
    status: "In Development",
    year: "2024",
    funding: "$4,000",
    role: "Principal Investigator",
    image: "/images/portfolio/uav-swarm.jpg",
    githubUrl: "#",
    liveUrl: "#",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    title: "Sustainable Transportation Simulation",
    category: "Research Project",
    type: "System Dynamics",
    description: "Simulation study exploring barriers to sustainable system evolution, examining the transition from private to public transportation systems using advanced modeling techniques.",
    longDescription: "This research investigates the complex dynamics involved in transitioning from private to public transportation systems. The study identifies key barriers that impede sustainable system evolution and proposes strategies to overcome these challenges through comprehensive simulation modeling.",
    technologies: ["AnyLogic", "System Dynamics", "Agent-Based Modeling", "MATLAB", "Statistical Analysis"],
    features: [
      "Transportation system simulation",
      "Barrier identification algorithms",
      "Policy intervention modeling",
      "Stakeholder behavior analysis",
      "Sustainability metrics tracking"
    ],
    status: "Published",
    year: "2024",
    role: "Lead Researcher",
    image: "/images/portfolio/transportation-sim.jpg",
    githubUrl: "#",
    paperUrl: "https://doi.org/10.1115/DETC2024-143201",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 5,
    title: "Financial Analysis Platform",
    category: "Industry Project",
    type: "Data Analytics",
    description: "Comprehensive data mining and analysis platform for evaluating 700+ companies, achieving 50% response rate from decision-makers through optimized outreach strategies.",
    longDescription: "Developed at IMAGINE + INVERSION, this platform streamlined the evaluation of technology startups and investment opportunities. The system integrated data mining, financial modeling, and business intelligence to support investment decision-making.",
    technologies: ["SQL", "Excel", "Python", "Business Intelligence", "Financial Modeling", "Data Mining"],
    features: [
      "Automated company evaluation system",
      "Financial model generation",
      "Investment opportunity scoring",
      "Decision-maker outreach optimization",
      "BI dashboard for stakeholders"
    ],
    status: "Completed",
    year: "2021",
    role: "Associate Financial Analyst",
    image: "/images/portfolio/financial-platform.jpg",
    githubUrl: "#",
    liveUrl: "#",
    color: "from-green-400 to-teal-500"
  },
  {
    id: 6,
    title: "Centralized Operations System",
    category: "Industry Project",
    type: "Operations Management",
    description: "Centralized business model implementation across 45+ residential sites, reducing operational costs by 30% and delivery timelines by 20% through process optimization.",
    longDescription: "Led the development and implementation of a centralized operations system at BALLESOL that unified brand strategy and streamlined processes across multiple facilities. The system integrated KPI monitoring, logistics optimization, and resource management.",
    technologies: ["Process Optimization", "KPI Development", "Project Management", "Logistics Systems", "Excel", "Database Management"],
    features: [
      "Multi-site operations coordination",
      "Custom KPI monitoring system",
      "Logistics optimization algorithms",
      "Resource allocation management",
      "Performance tracking dashboard"
    ],
    status: "Completed",
    year: "2018-2020",
    achievements: ["30% cost reduction", "20% timeline improvement"],
    role: "Project Manager",
    image: "/images/portfolio/operations-system.jpg",
    githubUrl: "#",
    liveUrl: "#",
    color: "from-indigo-400 to-purple-500"
  }
];

const categoryColors = {
  'Research Project': 'bg-purple-100 text-purple-800',
  'Industry Project': 'bg-blue-100 text-blue-800'
};

const typeIcons = {
  'Machine Learning & Bio-inspiration': Brain,
  'Resilience Engineering': Lightbulb,
  'Autonomous Systems': Code,
  'System Dynamics': Database,
  'Data Analytics': Database,
  'Operations Management': Code
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of research projects, industry applications, and innovative solutions 
            spanning machine learning, resilience engineering, autonomous systems, and data analytics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {portfolioItems.map((item) => {
            const IconComponent = typeIcons[item.type as keyof typeof typeIcons] || Code;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-r ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[item.category as keyof typeof categoryColors]} bg-white bg-opacity-90`}>
                        <IconComponent size={16} />
                        {item.category}
                      </span>
                      <div className="flex gap-2">
                        {item.githubUrl && item.githubUrl !== '#' && (
                          <motion.a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white bg-opacity-90 rounded-lg hover:bg-opacity-100 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                        {((item.liveUrl && item.liveUrl !== '#') || (item.paperUrl)) && (
                          <motion.a
                            href={item.liveUrl || item.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white bg-opacity-90 rounded-lg hover:bg-opacity-100 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'Published' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {item.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                          +{item.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div>Role: <span className="font-medium text-gray-700">{item.role}</span></div>
                    {item.funding && (
                      <div>Funding: <span className="font-medium text-green-600">{item.funding}</span></div>
                    )}
                    {item.awards && (
                      <div>Awards: <span className="font-medium text-purple-600">{item.awards.join(', ')}</span></div>
                    )}
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
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Portfolio Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$84K+</div>
                <div className="text-gray-600">Total Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">Research Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Technical Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Machine Learning', 'Python', 'MATLAB', 'Bifurcation Analysis', 'Complex Systems',
                'Autonomous Systems', 'Data Mining', 'Financial Modeling', 'Process Optimization',
                'Bio-inspired Design', 'Graph Theory', 'System Dynamics', 'Project Management'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
