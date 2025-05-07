import React from 'react';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
// import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Get In Touch</h2>
      
      <div className="contact__container">
        {/* Contact Info Card */}
        <div className="contact__card">
          <div className="contact__info">
            <a href="mailto:beneictomondi60@gmail.com" className="contact__item">
              <MdEmail className="contact__icon" />
              <span>beneictomondi60@gmail.com</span>
            </a>
            
            <a href="tel:+254792051011" className="contact__item">
              <FaPhoneAlt className="contact__icon" />
              <span>+254 792 051 011</span>
            </a>
            
            <div className="contact__item">
              <MdLocationOn className="contact__icon" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="contact__social">
          <h3 className="contact__subtitle">Find Me Online</h3>
          <div className="social__links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social__icon" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social__icon" />
            </a>
            <a href="https://fiverr.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <SiFiverr className="social__icon" />
            </a>
            <a href="https://upwork.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <SiUpwork className="social__icon" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact__form">
          <h3 className="contact__subtitle">Send Me a Message</h3>
          <div className="form__group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form__group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form__group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact__btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;