import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBuilding, FaLightbulb, FaChartLine, FaCubes } from 'react-icons/fa';
import './AboutUs.css';
const AboutUs = () => {
  // Refs and animations for scroll-triggered animations
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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

  const glowVariants = {
    initial: { 
      boxShadow: '0 0 0px rgba(0, 153, 255, 0.5)' 
    },
    animate: { 
      boxShadow: '0 0 30px rgba(0, 153, 255, 0.7)', 
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: 'reverse' 
      } 
    }
  };

  // Company values/features
  const features = [
    {
      icon: <FaBuilding size={32} />,
      title: "Digital Construction",
      description: "Pioneering advanced methodologies in digital construction management that bridge gaps between design and execution."
    },
    {
      icon: <FaLightbulb size={32} />,
      title: "Innovative Solutions",
      description: "Creating custom solutions that transform complex design and construction challenges into manageable processes."
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Workflow Optimization",
      description: "Streamlining digital workflows to enhance efficiency, reduce errors, and accelerate project delivery timelines."
    },
    {
      icon: <FaCubes size={32} />,
      title: "openBIM Technology",
      description: "Leveraging cutting-edge openBIM platforms to create seamless collaboration across all project stakeholders."
    }
  ];

  return (
    <section id='about-us' className="about-us-section" style={{
    //   background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      background: '#131110',
      color: '#e2e8f0',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div className="animated-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + (Math.random() * 0.1)
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + (Math.random() * 0.1)
            }}
            transition={{ 
              duration: 15 + (Math.random() * 15), 
              repeat: Infinity, 
              repeatType: 'mirror' 
            }}
            style={{
              position: 'absolute',
              width: `${50 + (Math.random() * 100)}px`,
              height: `${50 + (Math.random() * 100)}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
              color: '#0f172a',
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.5rem'
            }}
          >
            Revolutionizing Construction
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
            //   background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
              background: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            //   textShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
            }}
          >
            About OSA Consulting
          </motion.h2>
          
          <motion.div 
            variants={glowVariants}
            initial="initial"
            animate="animate"
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
              margin: '0 auto 2rem',
              borderRadius: '4px'
            }}
          />
        </motion.div>

        {/* Main content */}
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Company intro */}
          <motion.div 
            className="company-intro"
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <motion.div 
              className="company-intro-text"
              style={{ flex: '1.2' }}
            >
              <motion.p 
                variants={itemVariants}
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#cbd5e1',
                  marginBottom: '2rem'
                }}
              >
                <span className='blue-text' style={{ color: '#38bdf8', fontWeight: '600' }}>OSA Consulting</span> is a cutting-edge technology provider and engineering consultancy, transforming the AEC industry with AI-driven solutions. By integrating advanced AI tools and technology, we streamline complex design and construction challenges, redefining BIM workflows for maximum efficiency and precision.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#cbd5e1'
                }}
              >
                We bring the next evolution of digital construction management by merging industry expertise, innovation, and AI-powered computing. OSA revolutionizes project management, enabling construction professionals to optimize workflows, enhance collaboration, and leverage the full potential of openBIM and intelligent automation.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="company-graphic"
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotate: 1 }}
              style={{ flex: '0.8' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(129, 140, 248, 0.2) 100%)',
                    zIndex: 2
                  }}
                />
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={glowVariants}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src="./osa.png" 
                    alt="BIM Visualization"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400/0f172a/38bdf8?text=BIM+Visualization";
                    }}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)'
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="features"
            variants={itemVariants}
          >
            <motion.h3 
              variants={itemVariants}
              style={{
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '3rem',
                textAlign: 'center',
                color: '#e2e8f0'
              }}
            >
              What Sets Us Apart
            </motion.h3>
            
            <div className="features-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '2rem'
            }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                  style={{
                    background: 'rgba(28, 37, 62, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: '1px solid rgba(56, 189, 248, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
                        borderRadius: '12px',
                        padding: '1rem',
                        marginRight: '1rem',
                        color: '#0f172a'
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      color: '#e2e8f0'
                    }}>
                      {feature.title}
                    </h4>
                  </div>
                  <p style={{
                    color: '#94a3b8',
                    lineHeight: '1.6'
                  }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div 
            className="cta"
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: '#e2e8f0'
              }}
            >
              Ready to transform your construction projects with cutting-edge digital solutions?
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
                color: '#0f172a',
                border: 'none',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(56, 189, 248, 0.5)'
              }}
            >
              <a href='#contact'>Schedule a Consultation</a>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;