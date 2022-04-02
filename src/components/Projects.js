import React from 'react'
import projects from '../projects.js'

const Projects = () => {
  return (
    <div>
      <section id="projects" className="">
      <div className="">
        <div className="flex flex-col w-full mb-20">
          <h1 className="">
            Apps I've Built
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="project-container">
          {projects.map((project) => (
            <div key={project.id} className="project-items">
              <div className=''>
                <a
                  href={project.link}

                  className="project-title">
                    <h1 className="">
                      {project.title}
                    </h1>
                </a>
              </div>
              <div className="">
                <img
                  alt="gallery"
                  className="project-image"
                  src={project.image}
                  />
                  <p className="">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects
