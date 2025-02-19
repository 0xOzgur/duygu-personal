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
  faBrain,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, 
  faNodeJs, 
  faLaravel 
} from '@fortawesome/free-brands-svg-icons';



// TechStack component'ini About component'inden önce tanımlayalım
const TechStack = () => {
  const technologies = [
    { 
      name: "React", 
      level: "Advanced",
      experience: "3+ years",
      icon: faReact, // Font Awesome'dan React ikonu
      color: "#61DAFB" 
    },
    { 
      name: "Node.js", 
      level: "Advanced",
      experience: "2+ years",
      icon: faNodeJs, // Font Awesome'dan Node.js ikonu
      color: "#68A063" 
    },
    { 
      name: "Laravel", 
      level: "Intermediate",
      experience: "2 years",
      icon: faLaravel, // Font Awesome'dan Laravel ikonu
      color: "#FF2D20" 
    },
    { 
      name: "Flutter", 
      level: "Intermediate",
      experience: "1+ year",
      icon: faMobile, // Font Awesome'dan mobil ikonu
      color: "#02569B" 
    }
  ];

  return (
    <div className="tech-stack">
      <h3 className="tech-stack-title">Technical Proficiency</h3>
      <div className="tech-cards">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="tech-card"
            style={{'--card-color': tech.color}}
          >
            <div className="tech-card-header">
              <FontAwesomeIcon 
                icon={tech.icon} 
                className="tech-icon"
              />
              <span className="tech-level">{tech.level}</span>
            </div>
            <div className="tech-card-body">
              <h4 className="tech-name">{tech.name}</h4>
              <span className="tech-experience">{tech.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      title: "Full-Stack Development",
      description: " Expertise in building comprehensive web and mobile applications from front to back."
    },
    {
      icon: faBrain,
      title: "Educational Technology Development",
      description: "Combining tech skills with educational expertise to create innovative EdTech solutions."
    },
    {
      icon: faGraduationCap,
      title: "Project Management",
      description: "Managing projects from concept to deployment, ensuring educational objectives are met."
    },
    {
      icon: faLaptopCode,
      title: "Curriculum and Instruction Design",
      description: "Strong background in creating effective educational materials and instructional strategies."
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
  <div className="education-brief">
    <span className="education-degree">Doctor of Philosophy - PhD</span>
    <span className="education-field">Curriculum and Instruction</span>
  </div>
</div>
      </div>

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

    <div className="education-and-tech animate-on-scroll" id="education-tech">
  <TechStack />
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