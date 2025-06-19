// ContactAndFooter.jsx
import React, { useState } from 'react';
import './ContactAndFooter.css';

const ContactAndFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="osa-container">
      {/* Main Content */}
      <main className="osa-main-content">
        {/* Contact Information */}
        <div className="osa-contact-info osa-fade-in">
          <h1 className="osa-heading">Get In Touch</h1>
          <p className="osa-subtext">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
          
          <div className="osa-info-items">
            <div className="osa-info-item osa-slide-in-left">
              <div className="osa-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="osa-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="osa-info-content">
                <h3 className="osa-info-title">Our Office</h3>
                <p className="osa-info-text">Pune, India<br />Dubai, Saudi Arabia</p>
              </div>
            </div>
            
            <div className="osa-info-item osa-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="osa-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="osa-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="osa-info-content">
                <h3 className="osa-info-title">Email Us</h3>
                <p className="osa-info-text">info@oldstandford.com<br />support@oldstandford.com</p>
              </div>
            </div>
            
            <div className="osa-info-item osa-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="osa-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="osa-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="osa-info-content">
                <h3 className="osa-info-title">Call Us</h3>
                <p className="osa-info-text">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="osa-contact-form osa-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="osa-form-container">
            <h2 className="osa-form-heading">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="osa-form">
              <div className="osa-form-group">
                <label htmlFor="name" className="osa-form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="osa-form-input"
                  required
                />
              </div>
              
              <div className="osa-form-group">
                <label htmlFor="email" className="osa-form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  className="osa-form-input"
                  required
                />
              </div>
              
              <div className="osa-form-group">
                <label htmlFor="message" className="osa-form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange} 
                  rows="5" 
                  className="osa-form-textarea resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="osa-submit-button osa-pulse"
                
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="osa-footer">
        <div className="osa-footer-container">
          <div className="osa-footer-divider"></div>
          
          <div className="osa-footer-content">
            {/* Brand section */}
            <div className="osa-brand osa-fade-in">
              <h2 className="osa-brand-name">OSAIBM</h2>
              <p className="osa-brand-tagline">Delivering excellence in consultation and strategic solutions since 1995.</p>
             
                
            </div>
            
            {/* Quick Links */}
            <div className="osa-footer-links osa-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="osa-footer-heading">Quick Links</h3>
              <ul className="osa-links-list">
                <li><a href="#about-us" className="osa-footer-link osa-hover-effect">About Us</a></li>
                <li><a href="#value" className="osa-footer-link osa-hover-effect">Services</a></li>
                <li><a href="#residencies" className="osa-footer-link osa-hover-effect">Projects</a></li>
                {/* <li><a href="#" className="osa-footer-link osa-hover-effect">Testimonials</a></li> */}
                <li><a href="#" className="osa-footer-link osa-hover-effect">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Legal Links */}
            {/* <div className="osa-footer-links osa-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="osa-footer-heading">Legal</h3>
              <ul className="osa-links-list">
                <li><a href="#" className="osa-footer-link osa-hover-effect">Privacy Policy</a></li>
                <li><a href="#" className="osa-footer-link osa-hover-effect">Terms of Service</a></li>
                <li><a href="#" className="osa-footer-link osa-hover-effect">Cookie Policy</a></li>
                <li><a href="#" className="osa-footer-link osa-hover-effect">Contact Us</a></li>
              </ul>
            </div> */}
          </div>
          
          <div className="osa-footer-bottom">
            <p className="osa-copyright">© 2025 OSAIBM Associates. All rights reserved.</p>
            <div className="osa-social-icons">
              <a href="#" className="osa-social-icon osa-twitter osa-bounce">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="osa-social-icon osa-instagram osa-bounce" style={{ animationDelay: '0.1s' }}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="osa-social-icon osa-linkedin osa-bounce" style={{ animationDelay: '0.2s' }}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;
