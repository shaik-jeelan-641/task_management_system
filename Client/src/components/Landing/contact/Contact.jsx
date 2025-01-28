import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We'd love to hear from you! Fill out the form below or reach us at our contact details.</p>

        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <p>+123-456-7890</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>support@taskmanagement.com</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>123 Task St, Productivity City, Workland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
