// Projects.js
// Projects.js
import React, { useEffect } from 'react'  // useEffect'i buraya ekledik
import projects from '../../../src/projects'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="projects-section">
      <div className="projects-container">
      <div className="projects-header animate-on-scroll" id="header">
  <h1 className="page-title gradient-text">
    My Projects & Contributions
  </h1>
  <div className="page-description-wrapper">
    <p className="page-description">
      <span className="highlight">Full-stack web developer</span> with a passion for creating innovative solutions. 
      From an <span className="highlight">Airbnb clone</span> to a specialized <span className="highlight">BOP documentation system</span>, 
      my journey showcases diverse projects built with modern technologies.
    </p>
    <p className="page-description-secondary">
      Currently expanding my expertise in <span className="tech-highlight">React</span> and 
      exploring new frontiers in web development. Each project represents a step forward in my 
      continuous learning journey.
    </p>
  </div>
</div>

        <div className="projects-grid animate-on-scroll" id="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  alt={project.title}
                  className="project-image"
                  src={project.image}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faChrome} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects