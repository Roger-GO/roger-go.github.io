'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, Award, BookOpen, Users, Star } from 'lucide-react';

const cvData = {
  personalInfo: {
    name: "Rogelio Gracia Otalvaro",
    title: "Ph.D. Candidate in Computer Science and Electrical Engineering",
    email: "graciaor@my.erau.edu",
    phone: "+1 (XXX) XXX-XXXX",
    location: "Daytona Beach, FL, USA",
    website: "https://roger-go.github.io",
    summary: "Ph.D. Candidate in Computer Science and Electrical Engineering at Embry-Riddle Aeronautical University with expertise in resilience engineering, machine learning, and complex systems analysis. Experienced in leading cross-functional research on bifurcation analysis, aerial robotics, and AI applications for critical infrastructure and aerospace, with 10+ conference and symposium publications. Skilled in data analytics, cloud computing, and simulation modeling, applying tools such as Python, MATLAB, AnyLogic, and Power BI to deliver data-driven insights. Proven leader with international experience in academia, research, and industry, combining strong technical expertise with project management, teaching, and mentoring."
  },
  education: [
    {
      degree: "Ph.D. in Computer Science and Electrical Engineering",
      institution: "Embry-Riddle Aeronautical University",
      location: "Daytona Beach, FL, USA",
      duration: "2023 - Current",
      gpa: "4.0/4.0",
      status: "current"
    },
    {
      degree: "Master of Science in Mechanical Engineering",
      institution: "Embry-Riddle Aeronautical University",
      location: "Daytona Beach, FL, USA",
      duration: "2021 - 2022",
      gpa: "3.83/4.0"
    },
    {
      degree: "Master of Science in Industrial Technologies Engineering",
      institution: "ICAI Universidad Pontificia de Comillas",
      location: "Madrid, Spain",
      duration: "2020 - 2022",
      thesis: "9.5/10"
    },
    {
      degree: "Bachelor in Industrial Technologies Engineering",
      institution: "ICAI Universidad Pontificia de Comillas",
      location: "Madrid, Spain",
      duration: "2015 - 2020",
      major: "Electronics & Automation",
      thesis: "9.5/10"
    }
  ],
  experience: [
    {
      title: "Graduate Research / Teaching Assistant",
      company: "Embry-Riddle Aeronautical University",
      location: "Daytona Beach, FL, USA",
      duration: "Aug 2021 – Current",
      current: true,
      responsibilities: [
        "Led machine learning and AI data-driven initiatives in the BID4R lab",
        "Conducted research in resilience engineering, bifurcation analysis, aerial robotics, and machine learning",
        "Published findings in 10+ conference and symposium proceedings",
        "Developed and delivered course content for 150+ students",
        "Utilized MATLAB, Python, AnyLogic, and Cloud services for complex systems modeling"
      ]
    },
    {
      title: "Associate Financial Analyst",
      company: "IMAGINE + INVERSION",
      location: "Madrid, Spain",
      duration: "Feb 2021 – Aug 2021",
      responsibilities: [
        "Engineered data mining strategy utilizing SQL and Excel to evaluate 700+ companies",
        "Achieved 50% reply rate from decision-makers through targeted outreach strategies",
        "Delivered data-driven BI presentations to investment committees",
        "Built financial models to assess tech startups' growth potential"
      ]
    },
    {
      title: "Project Manager",
      company: "BALLESOL",
      location: "Madrid, Spain",
      duration: "Oct 2018 – Jan 2020",
      responsibilities: [
        "Led creation and implementation of centralized business model reducing costs by 30%",
        "Monitored operational efficiency across 45+ residential sites",
        "Reduced delivery timelines by 20% through targeted process improvements"
      ]
    }
  ],
  skills: {
    languages: ["Spanish (Native)", "English (Fluent, TOEFL 112/120)"],
    technical: [
      "Python", "SQL", "MATLAB & Simulink", "Power BI", "Excel", "AnyLogic",
      "Google Cloud Platform (GCP)", "PyTorch", "C++", "Java", "Linux",
      "JavaScript", "React", "Unity 3D", "CSS", "HTML"
    ],
    tools: ["Microsoft Office Suite", "Teams", "Outlook", "Trello", "Scrumwise (Agile)", "Jira"],
    soft: [
      "Analytical Thinking", "Proactive Problem-Solving", "Teamwork & Leadership",
      "Fast Learner", "Creative", "Working Under Pressure"
    ]
  },
  awards: [
    {
      title: "SCEEE Development Grant",
      amount: "$80,000",
      year: "2024-2025",
      role: "Principal Investigator"
    },
    {
      title: "Philanthropy Council Grant",
      amount: "$4,000",
      year: "2024",
      role: "Principal Investigator"
    },
    {
      title: "Graduate Research Symposium",
      award: "Second Place & People's Choice Award",
      amount: "$500",
      year: "2024"
    },
    {
      title: "SPARK Travel Grant",
      amount: "$900",
      year: "2024-2025"
    },
    {
      title: "SPARK Travel Grant",
      amount: "$700",
      year: "2023-2024"
    },
    {
      title: "Frontiers in Engineering Design Research Summer School (FinDER)",
      award: "Selected Participant",
      support: "Full travel, lodging, and meals support",
      year: "2023"
    }
  ],
  memberships: [
    "International Council on System Engineering (INCOSE) - 2023-Ongoing",
    "American Society of Mechanical Engineers (ASME) - 2024-Ongoing"
  ],
  leadership: [
    "PADI Divemaster, Professional Scuba Diver - 400+ dives in 10+ countries, 100+ as guide",
    "Member of the World Wildlife Fund (WWF) - Participated in oriented trips for environmental awareness"
  ]
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

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{cvData.personalInfo.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">{cvData.personalInfo.title}</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{cvData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{cvData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>{cvData.personalInfo.website}</span>
              </div>
            </div>

            <motion.a
              href="/files/RGO_CV2025.pdf"
              download="Rogelio_Gracia_Otalvaro_CV.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors no-underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV as PDF
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Professional Summary */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="text-blue-600" size={24} />
              Professional Summary
            </h2>
            <p className="text-gray-600 leading-relaxed">{cvData.personalInfo.summary}</p>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {cvData.education.map((edu, index) => (
                <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {edu.degree}
                      {edu.status === 'current' && <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Current</span>}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    {edu.major && <p className="text-gray-600 text-sm mt-1">Major: {edu.major}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm mb-1">{edu.duration}</p>
                    {edu.gpa && <p className="text-green-600 font-semibold text-sm">GPA: {edu.gpa}</p>}
                    {edu.thesis && <p className="text-green-600 font-semibold text-sm">Thesis: {edu.thesis}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Professional Experience */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-600" size={24} />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="pb-8 border-b border-gray-100 last:border-b-0">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {exp.title}
                        {exp.current && <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Current</span>}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{exp.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-600" size={24} />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.languages.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.soft.slice(0, 4).map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical & Development</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.technical.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Awards & Grants */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="text-blue-600" size={24} />
              Awards & Grants
            </h2>
            <div className="space-y-4">
              {cvData.awards.map((award, index) => (
                <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{award.title}</h3>
                    {award.award && <p className="text-purple-600 text-sm">{award.award}</p>}
                    {award.role && <p className="text-gray-600 text-sm">{award.role}</p>}
                    {award.support && <p className="text-gray-600 text-sm">{award.support}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">{award.year}</p>
                    {award.amount && <p className="text-green-600 font-semibold">{award.amount}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Professional Memberships */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="text-blue-600" size={24} />
              Professional Memberships & Leadership
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Memberships</h3>
                <ul className="space-y-2">
                  {cvData.memberships.map((membership, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Leadership & Volunteering</h3>
                <ul className="space-y-2">
                  {cvData.leadership.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">
              This CV was last updated in January 2025. For the most current version, please visit my website or contact me directly.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
