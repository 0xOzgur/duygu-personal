import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='container'>
      <div className='row'>
        <div className='column'>
          <h1>Hi, I am Duygu!</h1>
          <br/>
          <h3>I just find my passion in coding!</h3>
          <br/>
          <p>.. a former teacher, so ... I have got a sharp career change and dove into coding!
            I love the power of creating things.
            <br/>
            A life long learner and having a strong challenger on the earth.
            <br/>
            Let's see what I can offer you with your projects!
          </p>
        </div>
        <div className="column">
          <img className="object-cover object-center rounded" src={require("../images/duygu-find.jpg")} alt="duygu" style={{width:'50%', height:'50%', }}/>
          <Link to="/contact" className='link-item'>Let's work together!</Link>
          <br/>
          <Link to="/projects" className='link-item'>See my previous work.</Link>
        </div>
      </div>
    </div>
  )
}

export default About
