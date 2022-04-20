import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import avatar from '../../images/duygucavusoglu.png';
import duygu from '../../images/duygu-intro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEye } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <div className='about-wrapper'>

      <div className='about-box'>

        <div className='detail-container'>
          <img src={duygu} className='about-detail about-detail-img' alt='Hi I am Duygu!'/>
          <br/>
          <p className='about-detail'>I just found my passion in coding!</p>
          <br/>
          <p className='about-detail'>.. a former teacher, so ... I have got a sharp career change and dove into coding!
            I love the power of creating things.
            <br/>
            A life long learner and a strong challenger on the earth.
            <br/>
            Let's see what I can offer you with your projects!
          </p>
        </div>

        <div className="img-link-container">
          <div className="avatar">
            <img className='avatar-img'  src={avatar} alt="duygu"/>
          </div>
        </div>

      </div>

      <div className='link-item'>
        <Link to="/contact" ><FontAwesomeIcon icon={faBriefcase} className="link-icon"/> Let's work together!</Link>
        <Link to="/projects" ><FontAwesomeIcon icon={faEye} className="link-icon"/> See my previous work.</Link>
      </div>
    </div>
  )
}

export default About
