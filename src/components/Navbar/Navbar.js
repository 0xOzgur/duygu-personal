import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../images/dc_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className='navbar-container '>
      <div className='logo-cont'>
        <Link to='/'><img src={logo} className='company-logo' alt=''/></Link>
      </div>
      <div>
        <ul className={isMobile ? 'navbar-items-mobile' : 'navbar-items'}
          onClick={() => setIsMobile(false)} >
          <img src='' className='' alt=''/>
          <li className='nb-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nb-item'>
            <Link to='/projects'>My projects</Link>
          </li>
        </ul>
        <button className='mobile-menu'
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> }
        </button>
      </div>
    </div>
  )
}

export default Navbar
