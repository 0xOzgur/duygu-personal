import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import avatar from '../../images/duygucavusoglu.png';
import duygu from '../../images/duygu-intro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faEye, 
  faCode, 
  faLaptopCode,
  faGraduationCap,
  faBrain 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: faCode,
      title: "Frontend Development",
      description: "Creating responsive web applications"
    },
    {
      icon: faLaptopCode,
      title: "Clean Code",
      description: "Writing maintainable code"
    },
    {
      icon: faBrain,
      title: "Problem Solving",
      description: "Finding creative solutions"
    },
    {
      icon: faGraduationCap,
      title: "Continuous Learning",
      description: "Always improving skills"
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="intro-container animate-on-scroll" id="intro">
          <div className="intro-text">
            <div className="intro-header">
              <img 
                src={duygu} 
                className="intro-image" 
                alt="Hi I am Duygu!"
              />
              <h1 className="intro-title gradient-text">
                I just found my passion in coding!
              </h1>
            </div>
            
            <div className="intro-content">
              <p className="intro-description">
                A former teacher who took a bold step into the world of coding! 
                I love the power of creating things.
              </p>
              <p className="intro-description">
                A life long learner and a strong challenger on the earth.
                Let's see what I can offer you with your projects!
              </p>
            </div>

            <div className="skills-grid animate-on-scroll" id="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon"/>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="right-content">
            <div className="avatar-container animate-on-scroll" id="avatar">
              <div className="avatar-wrapper">
                <img 
                  src={avatar} 
                  alt="Duygu Çavuşoğlu" 
                  className="avatar-image"
                />
                <div className="avatar-backdrop"></div>
              </div>
            </div>

            <div className="education-card animate-on-scroll" id="education">
              <FontAwesomeIcon icon={faGraduationCap} className="education-icon"/>
              <div className="education-content">
                <h3 className="education-title">Doctor of Philosophy - PhD</h3>
                <p className="education-detail">Curriculum and Instruction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-container animate-on-scroll" id="cta">
          <Link to="/contact" className="cta-button primary">
            <span className="cta-text">Let's work together</span>
            <FontAwesomeIcon icon={faBriefcase} className="cta-icon"/>
          </Link>
          <Link to="/projects" className="cta-button secondary">
            <span className="cta-text">View my projects</span>
            <FontAwesomeIcon icon={faEye} className="cta-icon"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;