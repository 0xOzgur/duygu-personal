import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../images/dc_logo.png'

const Navbar = () => {
  return (
    <div className='navbar-container '>
      <div className='logo-cont'>
        <Link to='/'><img src={logo} className='company-logo' alt=''/></Link>
      </div>
      <div>
        <ul className='navbar-items'>
          <img src='' className='' alt=''/>
          <li className='nb-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nb-item'>
            <Link to='/projects'>My projects</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
