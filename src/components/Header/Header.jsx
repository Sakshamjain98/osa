import React, { useState, useEffect } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isCareerPage = location.pathname === '/careers';

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' };
    }
    return {};
  };

  // Function to handle navigation for home sections when on careers page
  const handleNavigation = (sectionId, e) => {
    if (isCareerPage) {
      e.preventDefault();
      window.location.href = `/${sectionId}`;
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`h-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flexCenter paddings innerWidth h-container">
        {/* <img src="./logo.png" alt="logo" width={100} /> */}
        <div className=''>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center' width={100}>OSA</h1>
          <p className='text-sm md:text-md lg:text-lg lg:gray-text'>Old Stanford Associates</p>
        </div>
        
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a 
              href={isCareerPage ? "/" : "#who-we-are"} 
              onClick={(e) => handleNavigation("#who-we-are", e)}
            >
              Who are we?
            </a>
            <a 
              href={isCareerPage ? "/" : "#residencies"} 
              onClick={(e) => handleNavigation("#residencies", e)}
            >
              Projects
            </a>
            <a 
              href={isCareerPage ? "/" : "#value"} 
              onClick={(e) => handleNavigation("#value", e)}
            >
              Services
            </a>
            <a 
              href={isCareerPage ? "/" : "#about-us"} 
              onClick={(e) => handleNavigation("#about-us", e)}
            >
              About Us
            </a>
            <a href="/careers">Careers</a>

            <button className="button">
              <a 
                href="#contact"
              >
                Contact
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;