import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../images/dc_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className='logo-cont'>
        <Link to='/'>
          <img src={logo} className='company-logo' alt='DC Logo'/>
        </Link>
      </div>
      <div>
        <ul className={isMobile ? 'navbar-items-mobile' : 'navbar-items'}
          onClick={() => setIsMobile(false)}>
            <li className='nb-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nb-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nb-item'>
            <Link to='/projects'>My Projects</Link>
          </li>
        </ul>
        <button 
          className='mobile-menu'
          onClick={() => setIsMobile(!isMobile)}
          aria-label="Toggle menu"
        >
          {isMobile ? 
            <FontAwesomeIcon icon={faXmark} /> : 
            <FontAwesomeIcon icon={faBars} />
          }
        </button>
      </div>
    </div>
  )
}

export default Navbar