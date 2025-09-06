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
/* Modern Academic Portfolio Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.portfolio-container {
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 30px;
  border: 5px solid rgba(255,255,255,0.3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.hero-photo:hover {
  transform: scale(1.05);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-description {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  opacity: 0.8;
  animation: fadeInUp 1s ease 0.4s both;
}

.cta-buttons {
  animation: fadeInUp 1s ease 0.6s both;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  margin: 10px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
  border-color: white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  border-color: white;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-outline:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

/* Section Styles */
.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-text h3 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  display: block;
}

.stat-label {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
}

/* Research Interests */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.research-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.research-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.research-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.research-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.research-card p {
  color: #666;
  line-height: 1.6;
}

/* Awards Section */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.award-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.award-card:hover {
  transform: translateY(-5px);
}

.award-amount {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.award-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  opacity: 0.9;
}

.award-description {
  opacity: 0.8;
  line-height: 1.6;
}

/* Publications Section */
.publications-highlight {
  background: #f8f9fa;
  padding: 60px 0;
}

.publication-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.publication-card:hover {
  transform: translateY(-3px);
}

.publication-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.publication-venue {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 10px;
}

.publication-description {
  color: #666;
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.contact-item {
  padding: 30px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.15);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.contact-item h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.contact-item a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
}

.contact-item a:hover {
  opacity: 1;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .research-grid {
    grid-template-columns: 1fr;
  }
  
  .awards-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
}

/* Hide default sidebar and footer */
.sidebar {
  display: none !important;
}

.page__footer {
  display: none !important;
}

.masthead {
  display: none !important;
}
</style>

<div class="portfolio-container">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <img src="/images/profile-photo.jpg" alt="Rogelio Gracia Otalvaro" class="hero-photo">
      <h1 class="hero-title">Rogelio Gracia Otalvaro</h1>
      <p class="hero-subtitle">Ph.D. Candidate in Computer Science & Electrical Engineering</p>
      <p class="hero-description">
        Advancing critical infrastructure and aerospace applications through innovative research in resilience engineering, machine learning, and complex systems analysis.
      </p>
      <div class="cta-buttons">
        <a href="/cv/" class="btn btn-primary">View CV</a>
        <a href="/publications/" class="btn btn-outline">Publications</a>
        <a href="mailto:graciaor@my.erau.edu" class="btn btn-outline">Contact Me</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-text">
          <h3>Research Excellence & Innovation</h3>
          <p>I am dedicated to pushing the boundaries of engineering through cross-functional research that combines theoretical foundations with practical applications. My work focuses on bifurcation analysis, aerial robotics, and AI applications for critical infrastructure and aerospace systems.</p>
          
          <h3>International Experience</h3>
          <p>With a unique combination of academic research excellence and international industry experience, I bring both academic rigor and practical insights to complex engineering challenges. My background spans academia, finance, and project management across the USA and Spain.</p>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-label">Publications</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">$84K+</span>
            <span class="stat-label">Research Funding</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">150+</span>
            <span class="stat-label">Students Taught</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4.0</span>
            <span class="stat-label">Ph.D. GPA</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Research Interests -->
  <section class="section" style="background: #f8f9fa;">
    <div class="container">
      <h2 class="section-title">Research Interests</h2>
      <div class="research-grid">
        <div class="research-card">
          <span class="research-icon">🔧</span>
          <h3>Resilience Engineering</h3>
          <p>Complex systems analysis and bifurcation theory for critical infrastructure stability and optimization.</p>
        </div>
        <div class="research-card">
          <span class="research-icon">🤖</span>
          <h3>Machine Learning & AI</h3>
          <p>Data-driven approaches for aerospace and robotics applications using advanced computational methods.</p>
        </div>
        <div class="research-card">
          <span class="research-icon">🚁</span>
          <h3>Aerial Robotics</h3>
          <p>Bio-inspired design and autonomous systems for civil operations and search & rescue missions.</p>
        </div>
        <div class="research-card">
          <span class="research-icon">📊</span>
          <h3>Complex Systems Analysis</h3>
          <p>Modeling and simulation of dynamic systems using MATLAB, Python, AnyLogic, and cloud computing.</p>
        </div>
        <div class="research-card">
          <span class="research-icon">🏗️</span>
          <h3>Critical Infrastructure</h3>
          <p>Risk mitigation strategies and stability optimization for essential systems and networks.</p>
        </div>
        <div class="research-card">
          <span class="research-icon">⚡</span>
          <h3>Electrical Grid Design</h3>
          <p>Bio-inspired approaches to improve early-stage electric grid transient response design.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Awards & Recognition -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">Key Achievements</h2>
      <div class="awards-grid">
        <div class="award-card">
          <div class="award-amount">$80,000</div>
          <div class="award-title">SCEEE Development Grant</div>
          <div class="award-description">Principal Investigator for bio-inspired electrical grid research combining machine learning and graph theory.</div>
        </div>
        <div class="award-card">
          <div class="award-amount">1st & 2nd</div>
          <div class="award-title">Research Competition Awards</div>
          <div class="award-description">Second Place & People's Choice Award at Graduate Research Symposium with $500 prize.</div>
        </div>
        <div class="award-card">
          <div class="award-amount">$4,900</div>
          <div class="award-title">Travel & Equipment Grants</div>
          <div class="award-description">Multiple SPARK travel grants and Philanthropy Council grant for UAV research equipment.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Publications Highlight -->
  <section class="publications-highlight">
    <div class="container">
      <h2 class="section-title">Featured Publications</h2>
      <div class="publication-card">
        <div class="publication-title">A framework to use bifurcation analysis for insight into complex systems resilience</div>
        <div class="publication-venue">INCOSE International Symposium, 2024</div>
        <div class="publication-description">Novel framework leveraging bifurcation analysis to understand and enhance the resilience of complex systems with applications to critical infrastructure.</div>
      </div>
      <div class="publication-card">
        <div class="publication-title">Barriers to sustainable system evolution: A simulation study exploring the transition from private to public transportation</div>
        <div class="publication-venue">ASME International Design Engineering Technical Conferences, 2024</div>
        <div class="publication-description">Comprehensive simulation study identifying key barriers that impede sustainable transportation system evolution and proposing strategic solutions.</div>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <a href="/publications/" class="btn btn-primary">View All Publications</a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section section">
    <div class="container">
      <h2 class="section-title" style="color: white;">Let's Connect</h2>
      <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 40px;">
        Interested in collaboration or discussing research opportunities? I'd love to hear from you.
      </p>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <h3>Email</h3>
          <a href="mailto:graciaor@my.erau.edu">graciaor@my.erau.edu</a>
        </div>
        <div class="contact-item">
          <span class="contact-icon">💼</span>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/rogeliogo/" target="_blank">rogeliogo</a>
        </div>
        <div class="contact-item">
          <span class="contact-icon">🐙</span>
          <h3>GitHub</h3>
          <a href="https://github.com/roger-go" target="_blank">roger-go</a>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <h3>Location</h3>
          <p>Daytona Beach, FL<br>Embry-Riddle Aeronautical University</p>
        </div>
      </div>
    </div>
  </section>
</div>

<script>
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.research-card, .award-card, .publication-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
</script>
