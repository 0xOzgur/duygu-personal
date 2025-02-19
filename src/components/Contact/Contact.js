import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import validator from 'validator';

const Result = () => {
  return (
    <span>Your message has successfully been sent.</span>
  );
};

const Contact = () => {
  const [emailError, setEmailError] = useState('');
  const [result, setResult] = useState(false);
  const form = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateEmail = (e) => {
    const email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dxt5fs8',
        'template_cxuvrwn',
        form.current,
        '97MUu26IOh-3kcLvZ'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header animate-on-scroll">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">Let's create something amazing together!</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form animate-on-scroll">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input 
                id="fullname"
                className="form-input" 
                type="text" 
                name="fullname" 
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                id="phone"
                className="form-input" 
                type="tel" 
                name="phone" 
                pattern="[0-9]{4}[0-9]{3}[0-9]{2}[0-9]{2}" 
                placeholder="05123456789" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                className="form-input" 
                type="email" 
                name="email" 
                onChange={validateEmail} 
                required
                placeholder="john@example.com"
              />
              <span className={`email-validation ${emailError.includes('Valid') ? 'valid' : 'invalid'}`}>
                {emailError}
              </span>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                className="form-textarea" 
                name="message" 
                rows="5" 
                required
                placeholder="Your message here..."
              />
            </div>
          </div>

          <div className="form-footer">
          <button type="submit" className="submit-button">
            <span className="button-text">Send Message</span>
            <span className="button-icon">→</span>
          </button>
            <div className="form-result">
              {result && <Result />}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;