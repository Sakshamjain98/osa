import React from 'react';
import './Companies.css';

const Companies = () => {
  // Configuration options - easy to edit
  const config = {
    // Number of times to duplicate the logo set for a smoother loop
    duplications: 3,
    // Animation duration in seconds
    animationDuration: 20,
    // Array of company logos
    companies: [
      { src: "./prologis.png", alt: "Prologis" },
      { src: "./tower.png", alt: "American Tower" },
      { src: "./equinix.png", alt: "Equinix" },
      { src: "./realty.png", alt: "Digital Realty" }
    ]
  };

  // Create the duplicated array of logos based on configuration
  const generateLogos = () => {
    const logos = [];
    for (let i = 0; i < config.duplications; i++) {
      config.companies.forEach((company, index) => {
        logos.push(
          <img 
            key={`company-${i}-${index}`} 
            src={company.src} 
            alt={company.alt} 
            className="company-logo"
          />
        );
      });
    }
    return logos;
  };

  return (
    <section className='c-wrapper'>
      <div className="paddings innerWidth c-heading">
        <h2>OUR PARTNERS</h2>
      </div>
      
      {/* Main marquee container with CSS variable for animation speed */}
      <div 
        className="marquee-container"
        style={{"--marquee-duration": `${config.animationDuration}s`}}
      >
        <div className="marquee-track">
          {/* First copy of the marquee content */}
          <div className="marquee-content">
            {generateLogos()}
          </div>
          
          {/* Second copy to create the seamless loop */}
          <div className="marquee-content">
            {generateLogos()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;