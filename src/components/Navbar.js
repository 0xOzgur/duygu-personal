import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
      <img src='' className='' alt=''/>
      <ul>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/projects'>My projects</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
