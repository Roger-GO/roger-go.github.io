'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, MapPin, GraduationCap, Lightbulb, Target } from 'lucide-react';

// Teaching data extracted from the main branch
const teachingExperiences = [
  {
    id: 1,
    title: "EE 327 Electrical Engineering Fundamentals",
    role: "Graduate Teaching Assistant / Instructor",
    type: "Undergraduate Course",
    institution: "Embry-Riddle Aeronautical University",
    department: "Electrical Engineering",
    semester: "Fall 2025",
    students: "90+ students",
    location: "Daytona Beach, FL",
    description: "Taught fundamentals of circuit theory, AC/DC analysis, phasors, transient response, and digital logic. Delivered lectures, assignments, and assessments to large undergraduate groups.",
    topics: [
      "Circuit theory fundamentals",
      "AC/DC circuit analysis",
      "Phasor analysis",
      "Transient response",
      "Digital logic systems"
    ],
    responsibilities: [
      "Delivered lectures to 90+ students",
      "Developed course assignments and assessments",
      "Provided individual student support",
      "Managed large classroom dynamics"
    ],
    category: "undergraduate"
  },
  {
    id: 2,
    title: "SYS 699 Special Topics in Systems Engineering: Complex System Modeling",
    role: "Course Designer and Instructor",
    type: "Graduate Course",
    institution: "Embry-Riddle Aeronautical University",
    department: "Systems Engineering Department",
    semester: "Summer 2023",
    students: "Graduate level",
    location: "Daytona Beach, FL",
    description: "Designed and created an original graduate-level course on system dynamics and agent-based modeling of complex systems. Incorporated examples from my own research to guide student projects in modeling real-world systems.",
    topics: [
      "System dynamics modeling principles",
      "Agent-based modeling methodologies",
      "Complex systems analysis techniques",
      "Real-world application of theoretical concepts",
      "Research-based problem solving approaches"
    ],
    responsibilities: [
      "Created entirely new curriculum for graduate-level complex systems modeling",
      "Incorporated cutting-edge research examples from BID4R lab work",
      "Guided students through hands-on projects modeling real-world complex systems",
      "Combined systems engineering principles with advanced modeling techniques"
    ],
    category: "graduate"
  },
  {
    id: 3,
    title: "EE 402 Control Systems Laboratory",
    role: "Lab Instructor",
    type: "Undergraduate Laboratory",
    institution: "Embry-Riddle Aeronautical University",
    department: "Electrical Engineering",
    semester: "Spring 2023",
    students: "10+ students",
    location: "Daytona Beach, FL",
    description: "Served as lab instructor, guiding students through instrumentation, modeling, and experimentation on dynamic systems. Emphasized system identification, state feedback, and controller implementation.",
    topics: [
      "Instrumentation and measurement",
      "Dynamic system modeling",
      "System identification techniques",
      "State feedback control",
      "Controller implementation"
    ],
    responsibilities: [
      "Guided hands-on laboratory experiments",
      "Taught instrumentation techniques",
      "Supervised system identification projects",
      "Mentored controller design and implementation"
    ],
    category: "laboratory"
  },
  {
    id: 4,
    title: "EE 401 Control Systems Analysis and Design",
    role: "Teaching Assistant",
    type: "Undergraduate Course",
    institution: "Embry-Riddle Aeronautical University",
    department: "Electrical Engineering",
    semester: "Spring 2023",
    students: "30+ students",
    location: "Daytona Beach, FL",
    description: "Assisted Dr. Pang in grading and instructional support for advanced undergraduate course on analog and digital control, stability, frequency domain methods, and controller design.",
    topics: [
      "Analog and digital control systems",
      "System stability analysis",
      "Frequency domain methods",
      "Controller design techniques",
      "Control system performance analysis"
    ],
    responsibilities: [
      "Provided grading and assessment support",
      "Assisted with instructional activities",
      "Supported student learning in advanced control topics",
      "Collaborated with faculty on course delivery"
    ],
    category: "undergraduate"
  },
  {
    id: 5,
    title: "ME 595FF Dynamic Systems, Stability, and Control",
    role: "Course Designer and Teaching Assistant",
    type: "Graduate Course",
    institution: "Embry-Riddle Aeronautical University",
    department: "Mechanical Engineering Department",
    semester: "Fall 2021 and Spring 2022",
    students: "≈10 students",
    location: "Daytona Beach, FL",
    description: "Designed full course content covering nonlinear dynamics, stability theory, Lyapunov methods, and robust control. Developed modules, assignments, and projects that were integrated into ERAU's ME graduate curriculum.",
    topics: [
      "Nonlinear dynamics analysis",
      "Stability theory and applications",
      "Lyapunov methods for system analysis",
      "Robust control design principles",
      "Advanced mathematical modeling"
    ],
    responsibilities: [
      "Designed comprehensive course content",
      "Developed modules, assignments, and projects",
      "Integrated materials into ERAU's graduate curriculum",
      "Assisted Dr. Mirmirani during course delivery"
    ],
    category: "graduate"
  },
  {
    id: 6,
    title: "ES 204 Dynamics",
    role: "Teaching Assistant",
    type: "Undergraduate Course",
    institution: "Embry-Riddle Aeronautical University",
    department: "Engineering Science",
    semester: "Fall 2021",
    students: "30+ students",
    location: "Daytona Beach, FL",
    description: "Teaching Assistant for a 3-credit undergraduate course covering kinematics, kinetics, energy methods, and momentum. Helped Dr. Mirmirani in lectures, content creation, grading, and office hours for students.",
    topics: [
      "Kinematics of particles and rigid bodies",
      "Kinetics and force analysis",
      "Energy methods in dynamics",
      "Momentum and impulse",
      "Engineering problem solving"
    ],
    responsibilities: [
      "Assisted with lecture delivery",
      "Contributed to content creation",
      "Provided grading and assessment",
      "Conducted office hours for student support"
    ],
    category: "undergraduate"
  }
];

const categoryColors = {
  graduate: 'bg-purple-100 text-purple-800',
  undergraduate: 'bg-blue-100 text-blue-800',
  laboratory: 'bg-green-100 text-green-800'
};

const categoryIcons = {
  graduate: GraduationCap,
  undergraduate: BookOpen,
  laboratory: Lightbulb
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

export default function Teaching() {
  const totalStudents = teachingExperiences.reduce((sum, exp) => {
    const studentCount = exp.students.match(/\d+/);
    return sum + (studentCount ? parseInt(studentCount[0]) : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Teaching Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about education and knowledge transfer. Experience spans course design, 
            curriculum development, and instruction across undergraduate and graduate levels 
            in engineering and systems disciplines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {teachingExperiences.map((experience) => {
            const IconComponent = categoryIcons[experience.category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
              >
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
                        <p className="text-lg text-blue-600 font-semibold mb-3">{experience.role}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.semester}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{experience.students}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} />
                        <span>{experience.department}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Target size={18} />
                          Key Topics Covered
                        </h3>
                        <ul className="space-y-2">
                          {experience.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Lightbulb size={18} />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{responsibility}</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Teaching Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{totalStudents}+</div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Courses Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-600">Courses Designed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Teaching Philosophy</h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              My teaching approach emphasizes bridging the gap between theoretical knowledge and practical application. 
              I believe in incorporating cutting-edge research into the classroom, providing students with authentic, 
              real-world learning opportunities. Through course design, curriculum development, and hands-on instruction, 
              I strive to prepare students for both advanced research and industry applications, fostering critical 
              thinking and problem-solving skills essential for engineering excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
