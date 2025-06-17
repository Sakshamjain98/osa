import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Value.css';

const Value = ({ show, title, subtitle, description, accordionData, imagePath }) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Call once to set initial value
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const flexDirection = isSmallScreen
    ? 'column-reverse'
    : show
    ? 'row-reverse'
    : 'row';

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, duration: 0.5 }
    }
  };

  return (
    <section id='value' className='v-wrapper'>
      <motion.div 
        className='v-container paddings innerWidth'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ 
          display: 'flex', 
          flexDirection: flexDirection,
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {/* Image Section */}
        <motion.div 
          className="v-image"
          variants={imageVariants}
          style={{ flex: 1 }}
        >
          <motion.div 
            className="image-container"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={imagePath || "./value.png"} alt="value" />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="v-content"
          variants={containerVariants}
          style={{ flex: 1.2 }}
        >
          <motion.span variants={itemVariants} className='orangeText'>
            {title || "Our Value"}
          </motion.span>
          <motion.h2 
            variants={itemVariants} 
            className="primaryText responsive-heading"
            style={{ margin: '0.5rem 0 1rem 0' }}
            >
            {subtitle || "Value WE Give to You"}
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className='secondaryText'
            style={{ marginBottom: '2rem', lineHeight: '1.6' }}
          >
            {description || "WE always ready to help by providing the best services for you.\nWe believe a good place to live can make your life better"}
          </motion.p>

          {/* Service Cards */}
          <div className="service-cards">
            {accordionData.map((item, index) => (
              <ServiceCard 
                key={index} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ item, index }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0);
  
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{
        marginBottom: '1rem',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(128, 128, 128, 0.143)',
        boxShadow: isOpen ? 'var(--shadow)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <motion.div 
        className="card-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: '#f9f9ff' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem',
          cursor: 'pointer',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.div 
            className="icon"
            whileHover={{ scale: 1.1 }}
            style={{ 
              background: '#eeeeff',
              borderRadius: '8px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {item.icon}
          </motion.div>
          <h3 className="primaryText" style={{ fontSize: '1.1rem', margin: 0 }}>
            {item.heading}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--blue)' }}
        >
          ▼
        </motion.div>
      </motion.div>

      <motion.div 
        className="card-content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <motion.p 
          className="secondaryText"
          style={{ 
            padding: '0 1rem 1rem 1rem',
            margin: 0,
            lineHeight: '1.6'
          }}
        >
          {item.detail}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Value;