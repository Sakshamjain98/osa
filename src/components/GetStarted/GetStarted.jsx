import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  const handleGetStarted = () => {
    
    // alert('Redirecting to email client...');
    // window.location.href = 'mailto:alidaisyhassna@gmail.com';
  };

  return (
    <section id='getstarted' className='g-wrapper'>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get started with Homyz</span>
          <span className='secondaryText'>
            Subscribe and find super attractive price quotes from us. Find your residence soon.
          </span>

          <button className="button" onClick={handleGetStarted} aria-label="Get Started">
            <a href='#hero'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
