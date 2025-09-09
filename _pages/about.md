---
permalink: /
title: "Rogelio Gracia Otalvaro - Academic Portfolio"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
layout: single
classes: wide
---

<style>
/* DevPortfolio-inspired styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

/* Hide default Jekyll elements but keep navigation */
.sidebar,
.page__footer,
.page__meta,
.page__title {
  display: none !important;
}

.page {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.page__inner-wrap,
.page__content {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Main container */
.devportfolio {
  min-height: 100vh;
  background: #fff;
}

/* Hero Section */
.hero {
  background: #f8f9fa;
  padding: 80px 0;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 30px;
  display: block;
  border: 4px solid #fff;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.hero-greeting {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 10px;
  font-weight: 400;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.2;
}

.hero-title {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 40px;
  font-weight: 400;
}

.hero-social {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 2px solid #e9ecef;
  border-radius: 50%;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.social-link:hover {
  background: #333;
  border-color: #333;
  color: #fff;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Content sections */
.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
  border-bottom: 1px solid #f1f3f4;
}

.section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #333;
}

/* About section */
.about-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 40px;
}

.skills-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 40px;
}

.skill-badge {
  background: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: #555;
  transform: translateY(-2px);
}

/* Experience & Research sections */
.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.timeline-item:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.timeline-company {
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
}

.timeline-meta {
  text-align: right;
  color: #888;
  font-size: 0.9rem;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: #666;
  line-height: 1.6;
}

.timeline-content li:before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #333;
  font-size: 0.8rem;
}

/* Research cards */
.research-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.research-card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.research-card:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.research-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.research-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.research-subtitle {
  color: #666;
  font-size: 1rem;
}

.research-meta {
  text-align: right;
  color: #888;
  font-size: 0.9rem;
}

.research-amount {
  font-weight: 700;
  color: #28a745;
  font-size: 1.1rem;
}

.research-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  color: #333;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Education section */
.education-grid {
  max-width: 800px;
  margin: 0 auto;
}

.education-item {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.education-item:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.education-degree {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.education-school {
  color: #666;
  font-size: 1rem;
  margin-bottom: 5px;
}

.education-location {
  color: #888;
  font-size: 0.9rem;
}

.education-meta {
  text-align: right;
  color: #888;
  font-size: 0.9rem;
}

.education-gpa {
  font-weight: 600;
  color: #28a745;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }
  
  .hero-title {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .timeline-header,
  .research-header,
  .education-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .timeline-meta,
  .research-meta,
  .education-meta {
    text-align: left;
  }
  
  .hero-social {
    gap: 15px;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 0 15px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .timeline-item,
  .research-card,
  .education-item {
    padding: 20px;
  }
}
</style>

<div class="devportfolio">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <img src="/images/profile-photo.jpg" alt="Rogelio Gracia Otalvaro" class="hero-photo">
      <h2 class="hero-greeting">Hello! 👋</h2>
      <h1 class="hero-name">I'm Rogelio Gracia Otalvaro</h1>
      <p class="hero-title">Ph.D. Candidate in Computer Science and Electrical Engineering</p>
      
      <div class="hero-social">
        <a href="mailto:graciaor@my.erau.edu" class="social-link" title="Email">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/rogeliogo/" class="social-link" title="LinkedIn" target="_blank">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://github.com/roger-go" class="social-link" title="GitHub" target="_blank">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="/cv/" class="social-link" title="Download CV">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <div class="content">
    <!-- About Section -->
    <section class="section" id="about">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p class="about-text">
          Ph.D. Candidate in Computer Science and Electrical Engineering at Embry-Riddle Aeronautical University with expertise in resilience engineering, machine learning, and complex systems analysis. Experienced in leading cross-functional research on bifurcation analysis, aerial robotics, and AI applications for critical infrastructure and aerospace, with 10+ conference and symposium publications. Skilled in data analytics, cloud computing, and simulation modeling, applying tools such as Python, MATLAB, AnyLogic, and Power BI to deliver data-driven insights. Proven leader with international experience in academia, research, and industry, combining strong technical expertise with project management, teaching, and mentoring.
        </p>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="section" id="experience">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-title">Graduate Research / Teaching Assistant</h3>
              <p class="timeline-company">Embry-Riddle Aeronautical University</p>
            </div>
            <div class="timeline-meta">
              <div>Aug 2021 - Present</div>
              <div>Daytona Beach, FL</div>
            </div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>Led machine learning and AI data-driven initiatives in the BID4R lab, directing cross-functional research teams</li>
              <li>Conducted research in resilience engineering, bifurcation analysis, aerial robotics, and machine learning applications</li>
              <li>Published findings in 10+ conference and symposium proceedings including INCOSE and ASME conferences</li>
              <li>Developed and delivered course content for 150+ students in Electrical Engineering and Systems courses</li>
              <li>Utilized MATLAB, Python, AnyLogic, and Cloud services for complex dynamic systems modeling</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-title">Associate Financial Analyst</h3>
              <p class="timeline-company">IMAGINE + INVERSION</p>
            </div>
            <div class="timeline-meta">
              <div>Feb 2021 - Aug 2021</div>
              <div>Madrid, Spain</div>
            </div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>Engineered data mining strategy utilizing SQL and Excel to evaluate 700+ companies</li>
              <li>Achieved 50% reply rate from decision-makers through targeted outreach strategies</li>
              <li>Delivered data-driven BI presentations to investment committees</li>
              <li>Built financial models to assess tech startups' growth potential and investment viability</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-title">Project Manager</h3>
              <p class="timeline-company">BALLESOL</p>
            </div>
            <div class="timeline-meta">
              <div>Oct 2018 - Jan 2020</div>
              <div>Madrid, Spain</div>
            </div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>Led creation and implementation of centralized business model reducing operational costs by 30%</li>
              <li>Monitored operational efficiency across 45+ residential sites using custom KPIs</li>
              <li>Reduced delivery timelines by 20% through targeted process improvements</li>
              <li>Managed cross-functional teams across multiple residential facilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="section" id="research">
      <h2 class="section-title">Research</h2>
      <div class="research-grid">
        <div class="research-card">
          <div class="research-header">
            <div>
              <h3 class="research-title">SCEEE Development Grant - Bio-inspired Electrical Grid Design</h3>
              <p class="research-subtitle">Principal Investigator</p>
            </div>
            <div class="research-meta">
              <div>2024-2025</div>
              <div class="research-amount">$80,000</div>
            </div>
          </div>
          <p class="research-description">
            Leading research combining biological inspiration, machine learning, and graph theory to improve early-stage electric grid transient response design. This significant research grant supports innovative work at the intersection of biological systems, artificial intelligence, and electrical grid design.
          </p>
          <div class="tech-tags">
            <span class="tech-tag">Machine Learning</span>
            <span class="tech-tag">Graph Theory</span>
            <span class="tech-tag">Electrical Engineering</span>
            <span class="tech-tag">Bio-inspired Design</span>
          </div>
        </div>

        <div class="research-card">
          <div class="research-header">
            <div>
              <h3 class="research-title">UAV Swarm Navigation for Search and Rescue</h3>
              <p class="research-subtitle">Philanthropy Council Grant</p>
            </div>
            <div class="research-meta">
              <div>2024</div>
              <div class="research-amount">$4,000</div>
            </div>
          </div>
          <p class="research-description">
            Development of autonomous UAV swarm coordination algorithms for search and rescue mission optimization. Focus on multi-agent systems for emergency response and real-time navigation protocols.
          </p>
          <div class="tech-tags">
            <span class="tech-tag">Autonomous Systems</span>
            <span class="tech-tag">Multi-agent Systems</span>
            <span class="tech-tag">UAV</span>
            <span class="tech-tag">Emergency Response</span>
          </div>
        </div>

        <div class="research-card">
          <div class="research-header">
            <div>
              <h3 class="research-title">Complex Systems Resilience Analysis</h3>
              <p class="research-subtitle">Award-winning Research</p>
            </div>
            <div class="research-meta">
              <div>2024</div>
              <div class="research-amount">2nd Place + People's Choice</div>
            </div>
          </div>
          <p class="research-description">
            Groundbreaking work applying mathematical bifurcation theory to understand and enhance the resilience of complex systems. Received Second Place and People's Choice Award at Graduate Research Symposium.
          </p>
          <div class="tech-tags">
            <span class="tech-tag">Bifurcation Analysis</span>
            <span class="tech-tag">Complex Systems</span>
            <span class="tech-tag">Resilience Engineering</span>
            <span class="tech-tag">Mathematical Modeling</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="section" id="education">
      <h2 class="section-title">Education</h2>
      <div class="education-grid">
        <div class="education-item">
          <div class="education-header">
            <div>
              <h3 class="education-degree">Ph.D. in Computer Science and Electrical Engineering</h3>
              <p class="education-school">Embry-Riddle Aeronautical University</p>
              <p class="education-location">Daytona Beach, FL</p>
            </div>
            <div class="education-meta">
              <div>2023 - Current</div>
              <div class="education-gpa">GPA: 4.0/4.0</div>
            </div>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header">
            <div>
              <h3 class="education-degree">Master of Science in Mechanical Engineering</h3>
              <p class="education-school">Embry-Riddle Aeronautical University</p>
              <p class="education-location">Daytona Beach, FL</p>
            </div>
            <div class="education-meta">
              <div>2021 - 2022</div>
              <div class="education-gpa">GPA: 3.83/4.0</div>
            </div>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header">
            <div>
              <h3 class="education-degree">Master of Science in Industrial Technologies Engineering</h3>
              <p class="education-school">ICAI Universidad Pontificia de Comillas</p>
              <p class="education-location">Madrid, Spain</p>
            </div>
            <div class="education-meta">
              <div>2020 - 2022</div>
            </div>
          </div>
        </div>

        <div class="education-item">
          <div class="education-header">
            <div>
              <h3 class="education-degree">Bachelor in Industrial Technologies Engineering</h3>
              <p class="education-school">ICAI Universidad Pontificia de Comillas</p>
              <p class="education-location">Madrid, Spain</p>
            </div>
            <div class="education-meta">
              <div>2015 - 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section" id="skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container">
        <span class="skill-badge">Python</span>
        <span class="skill-badge">MATLAB</span>
        <span class="skill-badge">Machine Learning</span>
        <span class="skill-badge">Complex Systems Analysis</span>
        <span class="skill-badge">Bifurcation Analysis</span>
        <span class="skill-badge">AnyLogic</span>
        <span class="skill-badge">Power BI</span>
        <span class="skill-badge">SQL</span>
        <span class="skill-badge">Google Cloud Platform</span>
        <span class="skill-badge">PyTorch</span>
        <span class="skill-badge">C++</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">React</span>
        <span class="skill-badge">Unity 3D</span>
      </div>
    </section>
  </div>
</div>
