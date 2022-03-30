import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about'>
      <div className='about-container'>
        <div className='about-items'>
          <h1>Hi, I am Duygu!</h1>
          <br/>
          <h3>I just find my passion in coding!</h3>
          <br/>
          <p>I am a former teacher, then have got a sharp career change and dived into coding!
            I love the power of creating things. I am a life long learner and have a strong ..... .
            I can offer you some help with your projects!
          </p>
          <Link to="/contact">Let's work together!</Link>
          <br/>
          <Link to="/projects">See my previous work.</Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" src={require("./duygu-find.jpg")} alt="duygu" style={{width:'50%', height:'50%', }}/>
        </div>
      </div>
    </div>
  )
}

export default About
