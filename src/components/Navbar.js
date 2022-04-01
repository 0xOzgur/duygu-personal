import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container '>
      <div className='logo-cont'>
        <Link to='/'><img src={require("../images/dc_logo.png")} className='company-logo' alt=''/></Link>
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
