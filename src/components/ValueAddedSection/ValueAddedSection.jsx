import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGlobeAmericas, 
  FaHotel, 
  FaUsers, 
  FaBuilding, 
  FaHome, 
  FaClock, 
  FaRocket, 
  FaUserCog, 
  FaLink, 
  FaLaptopCode, 
  FaExchangeAlt, 
  FaSatelliteDish 
} from 'react-icons/fa';
import './ValueAddedSection.css';

// Map icons to data items
const getIcon = (iconKey, size = 24) => {
  const icons = {
    "🌎": <FaGlobeAmericas size={size} />,
    "🏨": <FaHotel size={size} />,
    "👥": <FaUsers size={size} />,
    "🏢": <FaBuilding size={size} />,
    "🏠": <FaHome size={size} />,
    "⏱️": <FaClock size={size} />,
    "🚀": <FaRocket size={size} />,
    "👥": <FaUserCog size={size} />,
    "🔗": <FaLink size={size} />,
    "💻": <FaLaptopCode size={size} />,
    "🔄": <FaExchangeAlt size={size} />,
    "📡": <FaSatelliteDish size={size} />
  };
  
  return icons[iconKey] || <FaGlobeAmericas size={size} />;
};

// Define the data structure for the value cards
const valueData = [
  {
    id: 1,
    icon: "🌎",
    title: "Offering a Global Expertise",
    description: "with over 11,000 Hotel Keys",
    category: "expertise"
  },
  {
    id: 2,
    icon: "🏨",
    title: "Hotel Handover Snagging Consultancy",
    description: "aligned with brand standards.",
    category: "service"
  },
  {
    id: 3,
    icon: "👥",
    title: "Conducting Peer Review Meetings",
    description: "with hotel operators during the design stage.",
    category: "collaboration"
  },
  {
    id: 4,
    icon: "🏢",
    title: "Exclusive in-house design services",
    description: "for all project needs.",
    category: "service"
  },
  {
    id: 5,
    icon: "🏠",
    title: "Extensive experience in hotel refurbishment",
    description: "and mock-up room design.",
    category: "expertise"
  },
  {
    id: 6,
    icon: "⏱️",
    title: "Achieve a 70-75% reduction",
    description: "in project coordination time.",
    category: "efficiency"
  },
  {
    id: 7,
    icon: "🚀",
    title: "Achieve 50% faster project deliverables",
    description: "with enhanced in-house resources.",
    category: "efficiency"
  },
  {
    id: 8,
    icon: "👥",
    title: "Seamless integration of operator brand standards",
    description: "into the design philosophy.",
    category: "service"
  },
  {
    id: 9,
    icon: "🔗",
    title: "In-depth understanding",
    description: "of hotel, retail, and healthcare operations.",
    category: "expertise"
  },
  {
    id: 10,
    icon: "💻",
    title: "Expertise in integrating multiple technology systems",
    description: "for smart building solutions.",
    category: "technology"
  },
  {
    id: 11,
    icon: "🔄",
    title: "Ensuring a smooth handover",
    description: "and property opening.",
    category: "service"
  },
  {
    id: 12,
    icon: "📡",
    title: "Incorporating future technology trends",
    description: "into the design.",
    category: "technology"
  }
];

// Filter options
const categories = [
  { id: "all", name: "All" },
  { id: "expertise", name: "Expertise" },
  { id: "service", name: "Services" },
  { id: "efficiency", name: "Efficiency" },
  { id: "technology", name: "Technology" },
  { id: "collaboration", name: "Collaboration" }
];

const ValueAddedSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCard, setSelectedCard] = useState(null);

  // Filter the data based on active category
  const filteredData = activeCategory === "all" 
    ? valueData 
    : valueData.filter(item => item.category === activeCategory);
    
  // Handle mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Card appearance variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  // Handle card selection
  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <section className="value-added-section">
      {/* Backdrop elements */}
      <div className="backdrop-elements">
        <div className="backdrop-blur"></div>
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="container">
        {/* Section Title */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="title-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Project Excellence
          </motion.div>
          
          <h2 className="section-title">
            VALUE ADDED TO PROJECTS
            <motion.span 
              className="title-underline" 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100px", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </h2>
          
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            At FSK, we bring unmatched expertise and innovative solutions to add real value to every project, 
            ensuring long-term success and sustainability.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.span
                  className="button-highlight"
                  layoutId="activeCategory"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Value Cards Grid */}
        <motion.div 
          className="cards-grid"
          layout
          transition={{ type: "spring", damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ 
                  duration: 0.4, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20,
                  delay: item.id * 0.05 % 0.2
                }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(item.id)}
                className={`value-card ${hoveredCard === item.id ? 'hovered' : ''} ${selectedCard === item.id ? 'selected' : ''}`}
                style={{
                  "--mouse-x": `${mousePosition.x}px`,
                  "--mouse-y": `${mousePosition.y}px`
                }}
              >
                <div className="card-content">
                  <div className="card-glow"></div>
                  <div className="card-border"></div>
                  
                  <motion.div 
                    className="card-icon"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {getIcon(item.icon, 28)}
                  </motion.div>
                  
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                  
                  <motion.div 
                    className="card-underline"
                    initial={{ width: "20px" }}
                    animate={{ width: hoveredCard === item.id || selectedCard === item.id ? "64px" : "20px" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {hoveredCard === item.id && (
                    <motion.div
                      className="shine"
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: "100%", opacity: 0.8 }}
                      transition={{ duration: 1, repeat: 1, repeatDelay: 0.5 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueAddedSection;