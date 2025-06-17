import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaBriefcase, 
  FaUserTie, 
  FaLaptopCode, 
  FaHandshake, 
  FaChevronRight, 
  FaRegLightbulb, 
  FaGraduationCap, 
  FaUsers
} from 'react-icons/fa';
import './CareersPage.css';
import Header from '../Header/Header';

const CareersPage = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const workingRef = useRef(null);
  const vacanciesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const workingInView = useInView(workingRef, { once: true, amount: 0.1 });
  const vacanciesInView = useInView(vacanciesRef, { once: true, amount: 0.2 });
  
  const heroControls = useAnimation();
  const workingControls = useAnimation();
  const vacanciesControls = useAnimation();
  
  // Handle mouse position for effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Handle scroll animations
  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
    if (workingInView) {
      workingControls.start('visible');
    }
    if (vacanciesInView) {
      vacanciesControls.start('visible');
    }
  }, [heroInView, workingInView, vacanciesInView, heroControls, workingControls, vacanciesControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  // Benefits data
  const benefits = [
    {
      icon: <FaRegLightbulb />,
      title: "Innovation",
      description: "Be part of innovative projects that shape the future of engineering and design."
    },
    {
      icon: <FaGraduationCap />,
      title: "Professional Growth",
      description: "Access continuous learning opportunities and clear career advancement paths."
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      description: "Work with diverse teams in an environment that values every voice and perspective."
    },
    {
      icon: <FaHandshake />,
      title: "Global Impact",
      description: "Contribute to projects that make meaningful differences across the world."
    }
  ];

  return (
    <div>
        <Header/>
   
    <div className="careers-page">
        
      {/* Animated Backgrounds */}
      <div className="animated-bg">
        <div className="grid-pattern"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="orb"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0.05 + (Math.random() * 0.08)
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0.05 + (Math.random() * 0.08)
            }}
            transition={{ 
              duration: 20 + (Math.random() * 15), 
              repeat: Infinity, 
              repeatType: 'mirror' 
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate={heroControls}
          variants={containerVariants}
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`
          }}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <FaBriefcase /> CAREERS
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Join Our Team of <span className="highlight">Innovators</span>
          </motion.h1>
          
          <motion.div className="hero-divider" variants={itemVariants}></motion.div>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Join our team at OSA, where innovation, collaboration, and professional growth drive us forward. Explore career opportunities and be part of a company dedicated to excellence in engineering and design.
          </motion.p>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#vacancies" className="cta-button">
              View Open Positions <FaChevronRight />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-mask">
            <div className="image-container">
              <div className="image-glow"></div>
              <div className="image-mockup"></div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Working at OSA Section */}
      <section className="working-section" id="working" ref={workingRef}>
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={workingControls}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Working at OSA
          </motion.h2>
          
          <motion.div className="section-divider" variants={itemVariants}></motion.div>
          
          <motion.p className="section-description" variants={itemVariants}>
            Working at OSA means joining a team that values innovation, fosters professional growth, and is dedicated to delivering excellence in engineering and design. We believe in collaboration, continuous learning, and empowering our team members to make a meaningful impact on projects that shape the built environment.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="benefits-grid"
          initial="hidden"
          animate={workingControls}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="benefit-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="benefit-icon">
                {benefit.icon}
                <div className="icon-backdrop"></div>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Vacancies Section */}
      <section className="vacancies-section" id="vacancies" ref={vacanciesRef}>
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={vacanciesControls}
          variants={containerVariants}
        >
          <motion.div className="section-badge" variants={itemVariants}>
            <FaUserTie /> VACANCIES
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            Join Our Team – We're Hiring!
          </motion.h2>
          
          <motion.div className="section-divider" variants={itemVariants}></motion.div>
        </motion.div>
        
        <motion.div 
          className="vacancies-container"
          initial="hidden"
          animate={vacanciesControls}
          variants={containerVariants}
        >
          {/* Job Card 1 */}
          <motion.div 
            className={`job-card ${activeJob === 1 ? 'active' : ''}`}
            variants={itemVariants}
            onClick={() => setActiveJob(activeJob === 1 ? null : 1)}
          >
            <div className="job-header">
              <div className="job-number">01</div>
              <div className="job-title-container">
                <h3 className="job-title">Site Project Engineer</h3>
                <span className="job-subtitle">Male or Female, Any Nationality</span>
              </div>
              <div className="job-icon">
                <FaChevronRight />
              </div>
            </div>
            
            <AnimatePresence>
              {activeJob === 1 && (
                <motion.div 
                  className="job-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="details-title">Job Requirements</h4>
                  <ul className="requirements-list">
                    <li>Must have 6 to 8 years of on-site supervision experience to manage ELV contractors at the sites</li>
                    <li>Can attend review meetings in the absent of Consultant</li>
                    <li>Candidate must understand AV, Security and ICT installation and Shop Drawings</li>
                    <li>Must have UAE valid driving license and will to travel within GCC and other countries</li>
                    <li>Supervising the Hotels project will be an add-on</li>
                  </ul>
                  <p className="application-note">Submit your CV with Projects references in which you were involved along with your Picture</p>
                  
                  <div className="apply-container">
                    <button className="apply-button">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Job Card 2 */}
          <motion.div 
            className={`job-card ${activeJob === 2 ? 'active' : ''}`}
            variants={itemVariants}
            onClick={() => setActiveJob(activeJob === 2 ? null : 2)}
          >
            <div className="job-header">
              <div className="job-number">02</div>
              <div className="job-title-container">
                <h3 className="job-title">Design Engineer</h3>
                <span className="job-subtitle">Male or Female, Any Nationality</span>
              </div>
              <div className="job-icon">
                <FaChevronRight />
              </div>
            </div>
            
            <AnimatePresence>
              {activeJob === 2 && (
                <motion.div 
                  className="job-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="details-title">Job Requirements</h4>
                  <ul className="requirements-list">
                    <li>We are looking for young and energetic Design Engineers who have experience in 2D and 3D design i.e AutoCAD and Revit</li>
                    <li>Candidate must have 4 to 8 years of experience in ELV (Security, Audio Visual, ICT)</li>
                    <li>Must be present in UAE for interviews</li>
                    <li>Must have working experience in the Construction field within GCC</li>
                  </ul>
                  <p className="application-note">Submit your CV with Projects references in which you were involved along with your Picture</p>
                  
                  <div className="apply-container">
                    <button className="apply-button">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* Contact CTA */}
        <motion.div 
          className="contact-cta"
          variants={itemVariants}
          initial="hidden"
          animate={vacanciesControls}
        >
          <h3 className="cta-title">Don't see a role that fits your skills?</h3>
          <p className="cta-description">We're always looking for talented individuals to join our team. Send us your resume for future opportunities.</p>
          <button className="cta-button secondary">
            Submit Your Resume
          </button>
        </motion.div>
      </section>
    </div>
    </div>
  );
};

export default CareersPage;