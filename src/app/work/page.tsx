'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Target, Lightbulb } from 'lucide-react';

// Work experience data extracted from the main branch
const workExperiences = [
  {
    id: 1,
    title: "Graduate Research / Teaching Assistant",
    company: "Embry-Riddle Aeronautical University",
    type: "Academic Position",
    duration: "August 2021 – Current",
    location: "Daytona Beach, FL, USA",
    department: "Electrical Engineering & Systems Engineering",
    lab: "BID4R (Bio-Inspired Design for Resilience) Lab",
    description: "Leading machine learning and AI data-driven initiatives in the BID4R lab, directing cross-functional research teams to develop analytical solutions for critical infrastructure and aerospace applications.",
    responsibilities: [
      "Led machine learning and AI data-driven initiatives in the BID4R lab",
      "Conducted cutting-edge research in resilience engineering and bifurcation analysis",
      "Published findings in 10+ conference and symposium proceedings",
      "Developed and delivered course content for 150+ students",
      "Contributed to curriculum design for three new graduate-level classes",
      "Utilized MATLAB, Python, AnyLogic, and Cloud services for complex system modeling"
    ],
    achievements: [
      "Principal Investigator on $80,000 SCEEE Development Grant",
      "Multiple peer-reviewed publications in top-tier conferences",
      "Award-winning research presentations with $500+ in prize money",
      "International conference presentations in Dublin, Ireland and Washington, D.C."
    ],
    skills: [
      "Advanced research methodology and project management",
      "Cross-functional team leadership and collaboration",
      "Technical writing and presentation skills",
      "Grant writing and funding acquisition",
      "Curriculum development and instructional design"
    ],
    category: "academic",
    current: true
  },
  {
    id: 2,
    title: "Associate Financial Analyst",
    company: "IMAGINE + INVERSION",
    type: "Industry Position",
    duration: "February 2021 – August 2021",
    location: "Madrid, Spain",
    department: "Investment & Financial Services",
    description: "Engineered comprehensive data mining strategies and delivered data-driven business intelligence to investment committees, evaluating 700+ companies across multiple sectors.",
    responsibilities: [
      "Engineered comprehensive data mining strategy using SQL and Excel",
      "Evaluated 700+ companies across multiple sectors",
      "Delivered data-driven BI presentations to investment committees",
      "Built sophisticated financial models for tech startup assessment",
      "Conducted due diligence on potential investment opportunities",
      "Created comprehensive financial reports for strategic decision-making"
    ],
    achievements: [
      "Achieved 50% response rate from decision-makers through optimized outreach",
      "Successfully evaluated 700+ companies using systematic approaches",
      "Contributed to investment decisions through comprehensive analysis",
      "Streamlined evaluation processes reducing analysis time"
    ],
    skills: [
      "Advanced financial modeling and valuation techniques",
      "Data mining and database management (SQL, Excel)",
      "Business intelligence and presentation skills",
      "Investment analysis and due diligence",
      "Stakeholder communication and reporting"
    ],
    category: "finance",
    current: false
  },
  {
    id: 3,
    title: "Project Manager",
    company: "BALLESOL",
    type: "Industry Position",
    duration: "October 2018 – January 2020",
    location: "Madrid, Spain",
    department: "Operations Management",
    description: "Led the creation and implementation of a centralized business model that unified brand strategy and streamlined group purchasing, reducing operational costs by 30%.",
    responsibilities: [
      "Created and implemented centralized business model",
      "Unified brand strategy across 45+ residential sites",
      "Monitored operational efficiency using custom KPIs",
      "Managed cross-functional teams across multiple facilities",
      "Streamlined group purchasing processes",
      "Led logistics and engineering projects"
    ],
    achievements: [
      "Reduced operational costs by 30% through centralized initiatives",
      "Reduced delivery timelines by 20% via targeted process improvements",
      "Successfully managed operations across 45+ residential sites",
      "Implemented custom KPI monitoring systems"
    ],
    skills: [
      "Project management and operations optimization",
      "Cross-functional team leadership",
      "Process improvement and efficiency optimization",
      "KPI development and monitoring",
      "Strategic planning and implementation"
    ],
    category: "management",
    current: false
  }
];

const categoryColors = {
  academic: 'bg-purple-100 text-purple-800',
  finance: 'bg-green-100 text-green-800',
  management: 'bg-blue-100 text-blue-800'
};

const categoryIcons = {
  academic: Award,
  finance: TrendingUp,
  management: Users
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

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Work Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diverse professional experience spanning academia, finance, and operations management. 
            Combining technical expertise with leadership skills to drive innovation and achieve results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {workExperiences.map((experience) => {
            const IconComponent = categoryIcons[experience.category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 relative"
              >
                {experience.current && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[experience.category as keyof typeof categoryColors]}`}>
                            <IconComponent size={16} />
                            {experience.type}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          {experience.title}
                        </h2>
                        <p className="text-lg text-blue-600 font-semibold mb-2">{experience.company}</p>
                        {experience.lab && (
                          <p className="text-md text-gray-600 mb-3">{experience.lab}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{experience.department}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Target size={18} />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {experience.responsibilities.slice(0, 4).map((responsibility, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Award size={18} />
                          Key Achievements
                        </h3>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Lightbulb size={18} />
                          Skills Developed
                        </h3>
                        <ul className="space-y-2">
                          {experience.skills.slice(0, 4).map((skill, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$80K+</div>
                <div className="text-gray-600">Grant Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-gray-600">Publications</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Research Leadership', 'Data Analysis', 'Financial Modeling', 'Project Management',
                'Team Leadership', 'Machine Learning', 'Grant Writing', 'Curriculum Development',
                'Business Intelligence', 'Process Optimization', 'Technical Writing', 'Stakeholder Communication'
              ].map((competency) => (
                <span
                  key={competency}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
