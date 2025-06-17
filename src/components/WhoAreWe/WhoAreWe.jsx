import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FaLayerGroup, FaCube, FaBuilding, FaVrCardboard, FaRobot } from 'react-icons/fa';
import './WhoWeAre.css';

const WhoWeAre = () => {
  // Refs and animations for scroll-triggered animations
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSpecialty, setActiveSpecialty] = useState(0);
  const [hoverSpecialty, setHoverSpecialty] = useState(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate through specialties when none is hovered
    const rotationInterval = setInterval(() => {
      if (hoverSpecialty === null) {
        setActiveSpecialty(prev => (prev + 1) % specialties.length);
      }
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(rotationInterval);
    };
  }, [controls, isInView, hoverSpecialty]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  // Company specialties
  const specialties = [
    {
      icon: <FaLayerGroup size={32} />,
      title: "BIM Consulting",
      description: "Expert guidance in Building Information Modeling implementation, strategy, and execution for maximum ROI.",
      color: "#4066ff",
      details: "Our BIM consulting services guide organizations through technology adoption, workflow optimization, and staff training to maximize ROI on BIM investments. We work closely with all stakeholders to create clear implementation roadmaps aligned with project and business goals."
    },
    {
      icon: <FaCube size={32} />,
      title: "3D Modeling & Coordination",
      description: "Precise 3D modeling and clash detection to identify and resolve conflicts before construction begins.",
      color: "#2949c6",
      details: "Our coordination expertise ensures all building systems work together harmoniously. Using advanced clash detection and resolution techniques, we identify and resolve spatial conflicts before construction, saving time and costs while preventing on-site issues."
    },
    {
      icon: <FaBuilding size={32} />,
      title: "Digital Construction",
      description: "Advanced 4D simulations linking 3D models with construction schedules for optimized project timelines.",
      color: "#3a58e0",
      details: "Our digital construction approach combines 3D models with project schedules to create 4D simulations, allowing stakeholders to visualize construction sequences, optimize resources, and identify potential delays before they impact the project timeline."
    },
    {
      icon: <FaVrCardboard size={32} />,
      title: "Digital Twin Solutions",
      description: "Creating virtual replicas of physical assets to monitor, analyze, and optimize building performance.",
      color: "#5038ff",
      details: "Our digital twin solutions create intelligent virtual replicas of physical assets that continuously update with real-time data. These digital twins enable predictive maintenance, performance optimization, and informed decision-making throughout the building lifecycle."
    },
    {
      icon: <FaRobot size={32} />,
      title: "AI-Driven Processes",
      description: "Leveraging artificial intelligence to automate workflows and enhance decision-making capabilities.",
      color: "#2a7de1",
      details: "Our AI-driven processes analyze vast quantities of project data to automate repetitive tasks, identify patterns, optimize designs, and enhance decision-making. This technology integration helps deliver more intelligent, efficient, and sustainable building projects."
    }
  ];

  return (
    <section id="who-we-are" className="who-we-are">
      {/* 3D gradient orbs background */}
      <div className="animated-orbs">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="orb"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              scale: 0.8 + Math.random() * 0.5
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              scale: 0.8 + Math.random() * 0.5
            }}
            transition={{ 
              duration: 20 + (Math.random() * 10), 
              repeat: Infinity, 
              repeatType: 'mirror' 
            }}
          />
        ))}
      </div>
      
      {/* Animated grid pattern */}
      <div className="grid-pattern" />
      
      <motion.div 
        className="container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        {/* Section header */}
        <div className="section-header">
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Expertise & Innovation
          </motion.div>
          
          <motion.h2 
            className="title"
            variants={itemVariants}
          >
            Who We Are
          </motion.h2>
          
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* Main content */}
        <div className="content">
          {/* Company description */}
          <motion.div 
            variants={itemVariants}
            className="description-container"
          >
            {/* 3D effect card */}
            <div 
              className="perspective-card"
              style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`
              }}
            >
              <div className="card-content">
                <div className="card-glow"></div>
                <div className="card-border"></div>
                
                <motion.p variants={itemVariants} className="description">
                  At <span className="highlight">OSA BIM and Design Consultants</span>, we are dedicated to transforming the AEC (Architecture, Engineering, and Construction) industry through cutting-edge Building Information Modeling (BIM) solutions. With over a decade of expertise in BIM consulting, coordination, and digital transformation, we help architects, engineers, contractors, and developers streamline their workflows, reduce costs, and enhance project efficiency.
                </motion.p>
                
                <motion.p variants={itemVariants} className="description">
                  Our team specializes in BIM implementation, clash detection, 3D modeling, 4D simulation, and digital twin solutions, ensuring seamless project execution from design to construction. We leverage the latest technologies, including AI-driven processes, to push the boundaries of BIM innovation.
                </motion.p>
                
                <motion.p variants={itemVariants} className="description">
                  At OSA, we believe in precision, collaboration, and future-ready solutions that empower our clients to stay ahead in the ever-evolving construction landscape.
                </motion.p>
                
                <motion.p variants={itemVariants} className="tagline">
                  Let's build smarter, faster, and more efficiently—together.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Specialties showcase - IMPROVED LAYOUT */}
          <motion.div 
            className="specialties-showcase"
            variants={itemVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="specialties-title"
            >
              Our Core Specialties
            </motion.h3>
            
            {/* Specialty Cards */}
            <div className="specialties-cards">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  className={`specialty-card ${activeSpecialty === index ? 'active-specialty' : ''}`}
                  onClick={() => setActiveSpecialty(index)}
                  onMouseEnter={() => setHoverSpecialty(index)}
                  onMouseLeave={() => setHoverSpecialty(null)}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  style={{
                    "--card-color": specialty.color,
                    "--card-gradient": `linear-gradient(145deg, ${specialty.color}, rgba(41, 73, 198, 0.9))`
                  }}
                >
                  <div className="card-shine"></div>
                  <div className="specialty-icon-wrapper">
                    <div className="specialty-icon">
                      {specialty.icon}
                    </div>
                    <div className="icon-pulse"></div>
                  </div>
                  <h4 className="specialty-name">{specialty.title}</h4>
                  {/* <p className="specialty-brief">{specialty.description}</p> */}
                  
                  <div className="card-footer">
                    <div className={`expand-indicator ${activeSpecialty === index ? 'active' : ''}`}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Detailed view of selected specialty */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecialty}
                className="specialty-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  "--detail-color": specialties[activeSpecialty].color,
                  "--detail-gradient": `linear-gradient(145deg, ${specialties[activeSpecialty].color}, rgba(41, 73, 198, 0.9))`
                }}
              >
                <div className="detail-glow"></div>
                <div className="detail-content">
                  <div className="detail-icon-container">
                    <div className="detail-icon">
                      {specialties[activeSpecialty].icon}
                    </div>
                    <div className="detail-icon-ripple"></div>
                  </div>
                  <div className="detail-text">
                    <h4 className="detail-title">{specialties[activeSpecialty].title}</h4>
                    <div className="detail-divider"></div>
                    <p className="detail-description">
                      {specialties[activeSpecialty].description} {specialties[activeSpecialty].details}
                    </p>
                  </div>
                </div>
                
                {/* Visual elements for the details section */}
                <div className="detail-decoration top-left"></div>
                <div className="detail-decoration top-right"></div>
                <div className="detail-decoration bottom-left"></div>
                <div className="detail-decoration bottom-right"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Call to action button */}
          <motion.div 
            className="cta-container"
            variants={itemVariants}
          >
            <motion.p variants={itemVariants} className="cta-text">
              Ready to elevate your construction projects with state-of-the-art BIM solutions?
            </motion.p>
            
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">Start Your Digital Transformation</a>
              <div className="button-glow"></div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;